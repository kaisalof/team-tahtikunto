import React from 'react'
import Logo from '../images/logo.png'
import '../styles/App.css'

const LogoName = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" />
            <h1>Team Tähtikunto</h1>
        </div>
    )
}

export default LogoName