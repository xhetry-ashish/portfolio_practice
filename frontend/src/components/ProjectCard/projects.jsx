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
        res1.data.forEach((items, i) => {
          axios.get(items.languages_url).then((res2) => {
            res1.data[i]["language"] = res2.data;
            setProject(res1.data);
            setLoading(false);
          });
        });
      });
  }, []);

  return (

    <div>

      <h2>{loading ? "Loading..." : <>My Projects</>}</h2>
      <div className="cards">
        {
           !project ? <>No data....</> :
          project.map((item) => {
            console.log(item.language);
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
