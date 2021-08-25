import './styles/App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

//components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Content from './components/Content'


const App = () => {
  return (
    <Router>
      <div>        
        <Navigation />
        <Content />
        <Footer />
      </div>
    </Router>
  )
}

export default App
