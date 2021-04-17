import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from "./components/Navbar"
ReactDOM.render(
  <Router>
    <div>

      <Navbar />,
    <App />
    </div>
  </Router>
  ,
  document.getElementById('root')
);