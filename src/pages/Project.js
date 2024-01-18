import { useParams } from 'react-router-dom';
import gitHubIcon from './../img/icons/gitHub-black.svg'
import {projects} from './../helpers/projectList'


const Project = () => {
    const {id} = useParams();
    const project = projects[id];



    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>
                <p>{id}</p>

                <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills:{project.skills}</p>
                </div>

                {project.gitHubLink && (
                    <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="btn-outline">
                    <img src={gitHubIcon} alt=""/>
                    GitHub repo
                </a>
                )}

                

            </div>
        </div>
    </main>
    );
  }
  
  export default Project;