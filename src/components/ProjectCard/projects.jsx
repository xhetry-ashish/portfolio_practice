import React, { useEffect, useState } from "react";
import "./projects.scss";
import axios from "axios";
import projectImage from '../../assets/image/github.png'

function Projects() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://floating-falls-49210.herokuapp.com/api/v1/github/")
      .then((res1) => {
            setProject(res1.data.data);
            setLoading(false);
          });
        },[]);


  return (

    <div>
      
      <h2>{loading ? "Loading..." : <>My Projects</>}</h2>
      <div className="cards">
        {
           !project ? <><center></center></> :
          project.map((item) => { 
             return ( 
              <div className="column">
                <div className="projectImg">
                  <img src={projectImage} alt="pr_img" />
                </div>
                <h3>{item.projectname.toUpperCase()}</h3>
                <p>{item.description}</p>
                <p>Date Created: {new Date(item.dateCreated).toDateString()}</p>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button> Github Link</button>
                </a>
              </div>
             )
         })
        }
      </div>
    </div>
  );
}

export default Projects;
