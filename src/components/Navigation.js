import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import '../styles/App.css'

import Etusivu from '../screens/Etusivu'
import Kuvia from '../screens/Kuvia'
import Mika from '../screens/Mika'
import Palvelut from '../screens/Palvelut'
import Tiimi from '../screens/Tiimi'
import Yhteydenotto from '../screens/Yhteydenotto'

const Navigation = () => {
    return (
        <div>
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
            <div className="content">
                <Switch>
                    <Route path="/mika">
                        <Mika />
                    </Route>
                    <Route path="/palvelut">
                        <Palvelut />
                    </Route>
                    <Route path="/tiimi">
                        <Tiimi />
                    </Route>
                    <Route path="/kuvia">
                        <Kuvia />
                    </Route>
                    <Route path="/yhteydenotto">
                        <Yhteydenotto />
                    </Route>
                    <Route path="/">
                        <Etusivu />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Navigation