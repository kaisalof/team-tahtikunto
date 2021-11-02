import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../styles/App.css'

// screens
import Etusivu from '../screens/Etusivu'
import Galleria from '../screens/Galleria'
import Mika from '../screens/Mika'
import Palvelut from '../screens/Palvelut'
import Tiimi from '../screens/Tiimi'
import Yhteydenotto from '../screens/Yhteydenotto'

const Content = () => {
    return (
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
                <Route path="/galleria">
                    <Galleria />
                </Route>
                <Route path="/yhteydenotto">
                    <Yhteydenotto />
                </Route>
                <Route path="/">
                    <Etusivu />
                </Route>
            </Switch>
        </div>
    )
}
export default Content