import React from 'react'

// logot
import Instagram from '../images/igsmall.png'
import Facebook from '../images/fbsmall.png'

const Some = () => {
    return (
        <div className="some">
            <div className="instagram">
                <a href="https://www.instagram.com/teamtahtikunto/" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="Team Tähtikunto Instagramissa" className="ig" />
                </a>
            </div>
            <div className="facebook">
                <a href="https://www.facebook.com/teamtahtikunto" target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="Team Tähtikunto Facebookissa" className="fb" />
                </a>
            </div>
        </div>
    )
}

export default Some