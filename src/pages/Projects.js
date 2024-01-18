
import Project from '../components/projects/Project'


import {projects } from './../helpers/projectList'




function Projects () { 
    return (
        <>
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map((project, ind) => {
                    return <Project 
                    key={ind} 
                    title={project.title} 
                    img={project.img}
                    ind = {ind}
                    />
                })}
                
                
                

            </ul>
        </div>
        </main>

        
        </>
    )
}
export default Projects;














