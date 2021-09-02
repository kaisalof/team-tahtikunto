import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// tyylit
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)