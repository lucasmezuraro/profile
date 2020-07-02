import React from 'react'
import Project from '../Project';

interface Props { }

function Panel(props: Props) {
    const { } = props

    return (
        <div className="main-selection-projects-content-panel">
            <Project />
            <Project />
        </div>
    )
}

export default Panel;
