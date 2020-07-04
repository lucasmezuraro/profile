import React from 'react';
import Panel from '../Panel';
import Move from '../Move';
import { useSelector } from 'react-redux';
import {projects as listProjects} from '../../data/projects';

interface Props {}

function Hall(props: Props) {
    const next = useSelector((state: any) => state.showProjects.next);


    const start = next < (listProjects.length/2) ? 'circle-active' : 'circle';
    const middle = next === (listProjects.length/2) ? 'circle-active' : 'circle';
    const end = next > (listProjects.length/2) ? 'circle-active' : 'circle';

    return (
        <div className="main-selection-projects">
            <div className="main-selection-projects-content">
                <Move direction="previous" />
                <Panel />
                <Move direction="next" />
            </div>
            <div className="main-selection-projects-size">
                <div className="main-selection-projects-size-path">
                    <span className={`main-selection-projects-size-path-${start}`}></span>
                    <span className={`main-selection-projects-size-path-${middle}`}></span>
                    <span className={`main-selection-projects-size-path-${end}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Hall;
