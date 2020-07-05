import React from 'react'
import {Project as ProjectType} from '../../interfaces/Project';
import { useDispatch, useSelector } from 'react-redux';
import {changeProject} from '../../actions/changeProject';
import "./project.scss";



interface Props { 
    project: ProjectType
}

function Project(props: Props) {
    const {project} = props;
    const dispatch = useDispatch();
    const selectedProject = useSelector((state: any) => state.selectedProject); 
    return (
        
        <div className="panel-project" onClick={() => dispatch(changeProject(project))} style={{backgroundColor: project.title === selectedProject.title ? '#FE8F8F': '' }}>
            <div className="panel-project-title">
                {project.title}
            </div>
            <div className="panel-project-tools">
                {
                    project.tools ? project.tools.map((tool: string) => {
                    return <div key={tool} className="panel-project-tools-tool">
                            <img key={tool} className="tool-image" src={`/images/${tool}.png`} alt={tool}></img>
                        </div>
                    }) : ''
                } 

            </div>
            <div className="type">{project.type}</div>
        </div>
    )
}

export default Project
