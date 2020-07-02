import React, { Profiler } from 'react'
import Social from '../Social';

interface Props {}

function Profile(props: Props) {
    const {} = props

    return (
        <div className="main-selection-personal-information">
            <div className="main-selection-personal-information-photo">
                <div className="main-selection-personal-information-photo-content">
                    <img className="main-selection-personal-information-photo-content-image" src="/images/photo.png" alt=""></img>
                </div>
            </div>
            <div className="main-selection-personal-information-description">
                <div className="main-selection-personal-information-description-title">
                    <div className="main-selection-personal-information-description-title-name">
                        Lucas Mezuraro 
                    </div>
                    <div className="main-selection-personal-information-description-title-work">
                        Jr. Developer 
                    </div>
                </div>
                <Social />
            </div>
        </div>
    )
}

export default Profile;
