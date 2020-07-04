import React from 'react'

interface Props {name: string }

function ToolItem(props: Props) {
    const { name } = props

    return (
        <div className="main-selected-content-tools-box-item">
            {name}
        </div>
    )
}

export default ToolItem;
