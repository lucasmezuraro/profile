import React, {Suspense } from 'react'
import Social from '../Social/social';
import { useTranslation } from 'react-i18next';
import './profile.scss';


interface Props {}

function Profile(props: Props) {
    const [t, i18n] = useTranslation('common');

    return (
        <Suspense fallback={'is loading...'}>
        <div className="personal-information">
            <div className="languages">
                <div className="languages-box">
                    <div className="languages-icon" onClick={() => i18n.changeLanguage('ptbr')}>
                        <img className="languages-icon-image" src="/images/ptbr.png" alt="portuguese"></img>
                    </div>
                    <div className="languages-icon" onClick={() => i18n.changeLanguage('en')}>
                        <img className="languages-icon-image" src="/images/english.png" alt="english"></img>
                    </div>
                </div>
            </div>
            <div className="profile">
                <div className="profile-photo">
                    <div className="profile-photo-content">
                        <img className="profile-photo-content-image" src="/images/photo.png" alt=""></img>
                    </div>
                </div>
                <div className="profile-description">
                    <div className="profile-description-title">
                        <div className="profile-description-title-name">
                            Lucas Mezuraro 
                        </div>
                        <div className="profile-description-title-work">
                            {t('me.work')} 
                        </div>
                    </div>
                    <Social />
                </div>
            </div>
        </div>
        </Suspense>
    )
}

export default Profile;
