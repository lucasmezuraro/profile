import React, { Suspense } from 'react'
import './style.scss';
import Introduced from '../Introduced';
import Selection from '../Selection';


interface Props {}

function Main(props: Props) {

    return (
        <Suspense fallback={'is loading...'}>
            <div className="main" data-testid="main">
                <Introduced />
                <Selection />
            </div>
        </Suspense>
    )
}

export default Main;
