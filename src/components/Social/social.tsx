import React from 'react'

interface Props { }

function Social(props: Props) {

    return (
        <div className="profile-description-social">
            <div className="profile-description-social-box">
                <div className="profile-description-social-box-icon">
                    <a href='https://github.com/lucasmezuraro/'>
                        <img className="profile-description-social-box-icon-image" src="/images/github.png" alt=""></img>
                    </a>
                </div>
                <div className="profile-description-social-box-icon">
                    <a href="https://www.linkedin.com/in/lucas-mezuraro-3a341a72/">
                        <img className="profile-description-social-box-icon-image" src="/images/linkedin.png" alt=""></img>
                    </a>
                </div>
                <div className="profile-description-social-box-icon">
                    <a href="mailto:lucaspmezuraro@gmail.com">
                        <img className="profile-description-social-box-icon-image" src="/images/gmail.png" alt=""></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social;
