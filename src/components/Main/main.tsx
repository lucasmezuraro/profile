import React, { Suspense } from 'react'
import './main.scss';
import Introduced from '../Introduced/introduced';
import Selection from '../Selection/selection';


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
