import React, { Profiler } from 'react'
import Social from '../Social';

interface Props {}

function Profile(props: Props) {
    const {} = props

    return (
        <div className="main-selection-personal-information">
            <div className="main-selection-personal-information-languages">
                <div className="main-selection-personal-information-languages-box">
                    <div className="main-selection-personal-information-languages-icon">
                        <img className="main-selection-personal-information-languages-icon-image" src="/images/ptbr.png" alt="portuguese"></img>
                    </div>
                    <div className="main-selection-personal-information-languages-icon">
                    <img className="main-selection-personal-information-languages-icon-image" src="/images/english.png" alt="english"></img>
                    </div>
                </div>
            </div>
            <div className="main-selection-personal-information-content">
                <div className="main-selection-personal-information-content-photo">
                    <div className="main-selection-personal-information-content-photo-content">
                        <img className="main-selection-personal-information-content-photo-content-image" src="/images/photo.png" alt=""></img>
                    </div>
                </div>
                <div className="main-selection-personal-information-content-description">
                    <div className="main-selection-personal-information-content-description-title">
                        <div className="main-selection-personal-information-content-description-title-name">
                            Lucas Mezuraro 
                        </div>
                        <div className="main-selection-personal-information-content-description-title-work">
                            Jr. Developer 
                        </div>
                    </div>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Profile;
