import React from 'react'
import {Project as ProjectType} from '../../interfaces/Project';
import { useDispatch, useSelector } from 'react-redux';
import {changeProject} from '../../actions/changeProject';



interface Props { 
    project: ProjectType
}

function Project(props: Props) {
    const {project} = props;
    const dispatch = useDispatch();
    const selectedProject = useSelector((state: any) => state.selectedProject); 
    return (
        
        <div className="main-selection-projects-content-panel-project" onClick={() => dispatch(changeProject(project))} style={{backgroundColor: project.title === selectedProject.title ? '#FE8F8F': '' }}>
            <div className="main-selection-projects-content-panel-project-title">
                {project.title}
            </div>
            <div className="main-selection-projects-content-panel-project-tools">
                {
                    project.tools ? project.tools.map((tool: string) => {
                    return <div key={tool} className="main-selection-projects-content-panel-project-tools-tool">{tool}</div>
                    }) : ''
                } 

            </div>
            <div className="main-selection-projects-content-panel-project-type">{project.type}</div>
        </div>
    )
}

export default Project
