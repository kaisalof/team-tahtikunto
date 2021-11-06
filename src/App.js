import './styles/App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

//components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Content from './components/Content'
import LogoName from './components/LogoName'


const App = () => {
  return (
    <Router>
      <LogoName />
      <Navigation />
      <Content />
      <Footer />
    </Router>
  )
}

export default App
