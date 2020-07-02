import React from 'react'
import './style.scss';
import Introduced from '../Introduced';
import Selection from '../Selection';


interface Props {}

function Main(props: Props) {
    const {} = props

    return (
        <div className="main" data-testid="main">
            <Introduced />
            <Selection />
        </div>
    )
}

export default Main;
