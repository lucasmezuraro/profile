import React from 'react';
import Panel from '../Panel/panel';
import Move from '../Move/move';
import { useSelector } from 'react-redux';
import {projects as listProjects} from '../../data/projects';
import "./hall.scss";

interface Props {}

function Hall(props: Props) {
    const next = useSelector((state: any) => state.showProjects.next);


    const start = next < (listProjects.length/2) ? 'circle-active' : 'circle';
    const middle = next === (listProjects.length/2) ? 'circle-active' : 'circle';
    const end = next > (listProjects.length/2) ? 'circle-active' : 'circle';

    return (
        <div className="projects">
            <div className="projects-content">
                <Move direction="previous" />
                <Panel />
                <Move direction="next" />
            </div>
            <div className="size">
                <div className="size-path">
                    <span className={`size-path-${start}`}></span>
                    <span className={`size-path-${middle}`}></span>
                    <span className={`size-path-${end}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Hall;
