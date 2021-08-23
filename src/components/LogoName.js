import React from 'react'
import Logo from '../images/logoNimi.png'
import '../styles/App.css'

const LogoName = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="headerImage" />
        </div>
    )

}

export default LogoName