import React from 'react'
import {Project as ProjectType} from '../../interfaces/Project';
import Project from '../Project/index';
import { useSelector } from 'react-redux';


interface Props { }

function Panel(props: Props) {  

    const projectsList: ProjectType[] = useSelector((state: any) => state.showProjects.projects);

    return (
        <div className="main-selection-projects-content-panel">
            {
                projectsList ? projectsList.map((project: ProjectType, index: number) => {
                    return <Project key={project.title} project={project} />
                }): ''
            }
        </div>
    )
}

export default Panel;
