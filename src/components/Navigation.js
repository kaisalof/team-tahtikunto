import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/App.css'

import LogoName from './LogoName'

const Navigation = () => {
    return (
        <div>
            <div className="top" >
                <LogoName />
                <nav className="navigation">
                    <ul>
                        <li className="links">
                            <Link to="/" className="linkTo">Etusivu</Link>
                        </li>
                        <li className="links">
                            <Link to="/mika" className="linkTo">Mika</Link>
                        </li>
                        <li className="links">
                            <Link to="/palvelut" className="linkTo">Palvelut</Link>
                        </li>
                        <li className="links">
                            <Link to="/tiimi" className="linkTo">Tiimi</Link>
                        </li>
                        <li className="links">
                            <Link to="/kuvia" className="linkTo">Kuvia</Link>
                        </li>
                        <li className="links">
                            <Link to="/yhteydenotto" className="linkTo" id="yhteydenotto">Yhteydenotto</Link>
                        </li>
                    </ul>
                </nav>
                
            </div>
            
        </div>
    )
}

export default Navigation