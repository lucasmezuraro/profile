import React from 'react'
import Profile from '../Profile'
import Hall from '../Hall'

interface Props {}

function Selection(props: Props) {
    const {} = props

    return (
        <div className="main-selection">
            <Profile />
            <Hall />
        </div>
    )
}

export default Selection
