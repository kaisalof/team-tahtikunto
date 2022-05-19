import React from 'react'
import '../styles/footerstyles.css'

// logot
import Instagram from '../images/igblack.png'
import Facebook from '../images/fbblack.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="yhteys">
                <h3>Team Tähtikunto</h3>
                <a href="mailto:master.korhonen@kolumbus.fi" className="maili">master.korhonen@kolumbus.fi</a>
                <div className="somet">
                    <div className="fbLogo">
                        <a href="https://www.facebook.com/teamtahtikunto" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt="Team Tähtikunto Facebookissa" className="face" />
                        </a>
                    </div>
                    <div className="igLogo">
                        <a href="https://www.instagram.com/teamtahtikunto/" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt="Team Tähtikunto Instagramissa" className="insta" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer