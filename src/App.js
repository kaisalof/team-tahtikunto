import './styles/App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

//components
import Navigation from './components/Navigation'
import LogoName from './components/LogoName'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <LogoName />
        <Navigation />
        <Footer />
      </div>
    </Router>
  )
}

export default App
