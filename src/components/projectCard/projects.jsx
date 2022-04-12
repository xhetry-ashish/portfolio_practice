import React, {useEffect,useState} from 'react'
import './projects.scss'
import Axios from  'axios'


function Projects() {

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    Axios.get('https://api.github.com/users/xhetry-ashish/repos')
    .then((response1)=>{
      
      response1.data.forEach((items,i)=>{
        Axios.get(items.languages_url)
        .then((response2)=>{
          response1.data[i]['language']=response2.data;
          setProject(response1.data)
          setLoading(false);
        })
      })
    })
  },[])

  


  return (
    <div>
    <h2>{loading ? "Loading..." : <>My Projects</>}</h2>
      <div className="cards">
        { 
        !project ? <>No data....</> :
          project.map((item)=>{

            console.log(item.language);
            return(
              <div className="column">
              <div className="projectImg">
                <img src={item.owner.avatar_url} alt="pr_img" />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a href={item.html_url} target="_blank" rel="noreferrer noopener" >
              <button> Github Link</button>
              </a>
            </div>
            )
          })
        }
          
      </div>
    </div>
  )
}

export default Projects