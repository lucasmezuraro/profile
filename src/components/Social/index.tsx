import React from 'react'

interface Props { }

function Social(props: Props) {
    const { } = props

    return (
        <div className="main-selection-personal-information-content-description-social">
            <div className="main-selection-personal-information-content-description-social-box">
                <div className="main-selection-personal-information-content-description-social-box-icon">
                    <img className="main-selection-personal-information-content-description-social-box-icon-image" src="/images/github.png" alt=""></img>
                </div>
                <div className="main-selection-personal-information-content-description-social-box-icon">
                    <img className="main-selection-personal-information-content-description-social-box-icon-image" src="/images/linkedin.png" alt=""></img>
                </div>
                <div className="main-selection-personal-information-content-description-social-box-icon">
                    <img className="main-selection-personal-information-content-description-social-box-icon-image" src="/images/gmail.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Social;
