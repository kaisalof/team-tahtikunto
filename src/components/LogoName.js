import React from 'react'
import Logo from '../images/logoNimi.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/App.css'

const LogoName = () => {
    return (
        <div className="header">
            <Link exact to="/">
            <img src={Logo} alt="logo"  />
            </Link>
        </div>
    )

}

export default LogoName