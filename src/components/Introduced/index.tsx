import React, {Suspense} from 'react'
import {useSelector} from 'react-redux';
import { Project } from '../../interfaces/Project';
import ToolItem from '../ToolItem';
import {useTranslation} from "react-i18next";

interface Props {}

function Introduced(props: Props) {
    
    const project: Project = useSelector((state: any) => state.selectedProject);
    const {t} = useTranslation('common');

    return (
        <Suspense fallback={`Is loading...`}>
        <div className="main-selected" data-testid="main-selected">
                <div className="main-selected-content">
                    <div className="main-selected-content-title">
                        {project.title}
                    </div>
                    <div className="main-selected-content-information">
                        <div className="main-selected-content-information-apresentation">
                            <div className="main-selected-content-information-apresentation-box">
                                {project.image ? <img src={project.image} className="main-selected-content-information-apresentation-box-image" alt={project.title}></img>: ''}    
                            </div>
                        </div>
                        <div className="main-selected-content-information-description">
                            <div className="main-selected-content-information-description-column">
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                        {t('project.startAt')} : <span className="selected-text">{`${project.startAt.getUTCDay()}/${project.startAt.getMonth()}/${project.startAt.getFullYear()}`}</span>  
                                    </div>         
                                </div>
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                    {t('project.endAt')}: <span className="selected-text">{`${project.endAt.getDay()}/${project.endAt.getMonth()}/${project.endAt.getFullYear()}`} 
                                    </span>
                                    </div>           
                                </div>
                            </div>
                            <div className="main-selected-content-information-description-column">
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                    {t('project.responsive')} : <span className="selected-text">{project.responsive?.toString()}  
                                    </span>
                                    </div>           
                                </div>
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-text">
                                    {t('project.title')}: <span className="selected-text">{project.title}  
                                    </span>
                                    </div>           
                                </div>
                            </div>
                            <div className="main-selected-content-information-description-column">
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                    {t('project.integration')} : <span className="selected-text">{project.integration?.toString()}  
                                    </span>
                                    </div>           
                                </div>
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                    {t('project.docker')} : <span className="selected-text">{project.docker?.toString()}  
                                    </span>
                                    </div>           
                                </div>
                            </div>
                            <div className="main-selected-content-information-description-column">
                            <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-side-text">
                                        <div className="main-selected-content-information-description-button">
                                            <a href={project.github} className="main-selected-content-information-description-button-tag">Github</a>
                                        </div>
                                    </div>           
                                </div>
                                <div className="main-selected-content-information-description-column-side">
                                    <div className="main-selected-content-information-description-column-text">
                                        <div className="main-selected-content-information-description-button">
                                            <a href={project.site} className="main-selected-content-information-description-button-tag">Site</a>  
                                        </div>
                                    </div>           
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-selected-content-describe">
                    {t('project.description')} : <span className="selected-text">{project.description}</span>
                    </div>
                    <div className="main-selected-content-screenshots">
                        
                        {project.screenshots ? project.screenshots.map((screen, index) => {
                            return <div key={index} className="main-selected-content-screenshots-box">
                                <img className="main-selected-content-screenshots-box-image" src={screen} alt=""></img>
                            </div>
                        }): ''}
                        
                        
                    </div>
                    <div className="main-selected-content-tools">
                        <div className="main-selected-content-tools-box">
                            {
                                project.tools ? project.tools.map((tool) => {
                                    return <ToolItem key={tool} name={tool} />
                                }): ''
                            }

                            Typescript
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Introduced;
