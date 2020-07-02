import React from 'react'
import Panel from '../Panel';
import Move from '../Move';

interface Props {}

function Hall(props: Props) {
    const {} = props

    return (
        <div className="main-selection-projects">
            <div className="main-selection-projects-content">
                <Move direction="previous" />
                <Panel />
                <Move direction="next" />
            </div>
            <div className="main-selection-projects-size">
                <div className="main-selection-projects-size-path">
                    <span className="main-selection-projects-size-path-circle"></span>
                    <span className="main-selection-projects-size-path-circle"></span>
                    <span className="main-selection-projects-size-path-circle"></span>
                </div>
            </div>
        </div>
    )
}

export default Hall;
