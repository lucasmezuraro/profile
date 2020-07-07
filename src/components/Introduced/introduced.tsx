import React, {Suspense} from 'react'
import {useSelector} from 'react-redux';
import { Project } from '../../interfaces/Project';
import ToolItem from '../ToolItem';
import {useTranslation} from "react-i18next";
import './introduced.scss';
import Move from '../Move/move';
import Panel from '../Panel/panel';

interface Props {}

function Introduced(props: Props) {
    
    const project: Project = useSelector((state: any) => state.selectedProject);
    const {t} = useTranslation('common');

    return (
        <Suspense fallback={`Is loading...`}>
            <div className="selected" data-testid="main-selected">
                <div className="content">
                    <div className="title">
                        {project.title}
                    </div>
                    <div className="information">
                        <div className="apresentation">
                            <div className="apresentation-box">
                                {project.image ? <img src={project.image} className="apresentation-box-image" alt={project.title}></img>: ''}    
                            </div>
                        </div>
                        <div className="description">
                            <div className="description-column">
                                <div className="description-column-side">
                                    <div className="description-column-side-text">
                                    {t('project.responsive')} : <span className="selected-text" data-testid="project-responsive">{project.responsive?.toString()}  
                                    </span>
                                    </div>           
                                </div>
                                <div className="description-column-side">
                                    <div className="description-column-side-text">
                                    {t('project.title')}: <span className="selected-text" data-testid="project-title"> {project.title}  
                                    </span>
                                    </div>           
                                </div>
                            </div>
                            <div className="description-column">
                                <div className="description-column-side">
                                    <div className="description-column-side-text">
                                        {t('project.integration')} : {project.integration ? <div className="work" data-testid="project-integration"></div>: <div data-testid="project-integration" className="work-not"></div>}  
                                    </div>           
                                </div>
                                <div className="description-column-side">
                                    <div className="description-column-side-text">
                                        {t('project.docker')} : {project.docker ? <div className="work" data-testid="project-docker"></div>: <div className="work-not" data-testid="project-docker"></div>}   
                                    </div>           
                                </div>
                            </div>
                            <div className="description-column">
                                <div className="description-column-side">
                                    <div className="description-column-side-text">
                                        <div className="description-button">
                                            <a href={project.github} className="description-button-tag" id='github'>Github</a>
                                        </div>
                                    </div>           
                                </div>
                                <div className="description-column-side">
                                    <div className="description-column-side-text">
                                        <div className="description-button">
                                            <a href={project.site} className="description-button-tag" id='site'>  Site</a>  
                                        </div>
                                    </div>           
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="describe">
                        {t('project.description')} : <span className="selected-text">{project.description}</span>
                    </div>
                    <div className="screenshots">
                        
                        {project.screenshots ? project.screenshots.map((screen, index) => {
                            return <div key={index} className="screenshots-box">
                                <img className="screenshots-box-image" src={screen} alt=""></img>
                            </div>
                        }): ''}
                        
                    </div>
                    <div className="tools">
                        <div className="tools-box">
                            {
                                project.tools ? project.tools.map((tool) => {
                                    return <ToolItem key={tool} name={tool} />
                                }): ''
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="mobile-content">
                    <div className="content-apresentation">
                        <div className="content-apresentation-title">{project.title}</div>
                        <div className="content-image-apresentation">
                            <div className="content-image-apresentation-box">
                                <img className="content-image-apresentation-box-img" src={project.image} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="content-description">
                        <div className="content-description-column">
                            <div className="content-description-column-side">
                                <div className="content-description-column-side-text">
                                    {t('project.responsive')}: {project.responsive?.toString()}
                                </div>
                                <div className="content-description-column-side-text">
                                    {t('project.title')}: {project.title}
                                </div>
                            </div>
                        </div>
                        <div className="content-description-column">
                            <div className="content-description-column-side">
                                <div className="content-description-column-side-text">
                                    CI/CD PIPELINE: {project.integration?.toString()}
                                </div>
                                <div className="content-description-column-side-text">
                                    DOCKER: {project.docker?.toString()}
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="slide">
                    <Move direction="previous" />
                    <div className="slide-content">
                        <Panel />
                    </div>
                    <Move direction="next" />
                </div>
            </div>
        </Suspense>
    )
}

export default Introduced;
