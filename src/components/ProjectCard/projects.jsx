import React, { useEffect, useState } from "react";
import "./projects.scss";
import axios from "axios";

function Projects() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/users/xhetry-ashish/repos")
      .then((res1) => {
            setProject(res1.data);
            setLoading(false);
          });
        },[]);

  return (

    <div>

      <h2>{loading ? "Loading..." : <>My Projects</>}</h2>
      <div className="cards">
        {
           !project ? <><center>Loading data..</center></> :
          project.map((item) => {
            return (
              <div className="column">
                <div className="projectImg">
                  <img src={item.owner.avatar_url} alt="pr_img" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button> Github Link</button>
                </a>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Projects;
