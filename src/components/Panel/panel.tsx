import React, { Suspense } from 'react'
import {Project as ProjectType} from '../../interfaces/Project';
import Project from '../Project/project';
import { useSelector } from 'react-redux';
import "./panel.scss";


interface Props { }

function Panel(props: Props) {  

    const projectsList: ProjectType[] = useSelector((state: any) => state.showProjects.projects);

    return (
        <Suspense fallback={'is loading...'}>
            <div className="panel">
                {
                    projectsList ? projectsList.map((project: ProjectType, index: number) => {
                        return <Project key={project.title} project={project} />
                    }): ''
                }
            </div>
            <div className="panel-mobile">
            </div>
        </Suspense>
    )
}

export default Panel;
