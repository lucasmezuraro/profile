import React from 'react'
import {useSelector} from 'react-redux';
import { Project } from '../../interfaces/Project';
import ToolItem from '../ToolItem';

interface Props {}

function Introduced(props: Props) {
    
    const project: Project = useSelector((state: any) => state.selectedProject);

    return (
        <div className="main-selected">
                <div className="main-selected-content">
                    <div className="main-selected-content-title">
                        {project.title}
                    </div>
                    <div className="main-selected-content-information">
                        <div className="main-selected-content-information-apresentation">
                            <div className="main-selected-content-information-apresentation-box">

                            </div>
                        </div>
                        <div className="main-selected-content-information-description">
                            <div className="main-selected-content-information-description-column">
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                        start at: {`${project.startAt.getUTCDay()}/${project.startAt.getMonth()}/${project.startAt.getFullYear()}`}  
                                    </div>         
                                </div>
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                    end at: {`${project.endAt.getDay()}/${project.endAt.getMonth()}/${project.endAt.getFullYear()}`} 
                                    </div>           
                                </div>
                            </div>
                            <div className="main-selected-content-information-description-column">
                            <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                        Responsive: {project.responsive?.toString()}  
                                    </div>           
                                </div>
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-text">
                                        Name: Portfolio  
                                    </div>           
                                </div>
                            </div>
                            <div className="main-selected-content-information-description-column">
                            <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                        <div className="main-selected-content-information-description-button">
                                            <a href="/" className="main-selected-content-information-description-button-tag">Github</a>
                                        </div>
                                    </div>           
                                </div>
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-text">
                                        <div className="main-selected-content-information-description-button">
                                            <a href="/" className="main-selected-content-information-description-button-tag">Site</a>  
                                        </div>
                                    </div>           
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-selected-content-describe">
                    DESCRIPTION: {project.description}
                    </div>
                    <div className="main-selected-content-screenshots">
                        <div className="main-selected-content-screenshots-box">

                        </div>
                        <div className="main-selected-content-screenshots-box">

                        </div>
                        <div className="main-selected-content-screenshots-box">

                        </div>
                    </div>
                    <div className="main-selected-content-tools">
                        <div className="main-selected-content-tools-box">
                            {
                                project.tools ? project.tools.map((tool) => {
                                    return <ToolItem name={tool} />
                                }): ''
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Introduced;
