import React from 'react'
import Profile from '../Profile/profile'
import Hall from '../Hall/hall'
import './selection.scss'

interface Props {}

function Selection(props: Props) {
    return (
        <div className="selection">
            <Profile />
            <Hall />
        </div>
    )
}

export default Selection
