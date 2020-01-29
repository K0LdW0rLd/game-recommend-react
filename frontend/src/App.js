import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import logo from './images/logo.png'

class App extends Component {
  render () {
    return(
      <Router>
        <div className='container'>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home"><img src={logo} width= '80' height='80' alt='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Games</Nav.Link>
                <Nav.Link href="#">Search</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">Help</Nav.Link>
                <Nav.Link href="#">Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default App;
