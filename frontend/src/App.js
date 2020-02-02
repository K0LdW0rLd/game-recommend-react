import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import logo from './images/logo.png'
import Game from './Game';
import Comment from './Comment';
import GameList from './GameList';


class App extends Component {
  render () {
    return(
      <Router>
        <div className='container'>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/"><img src={logo} width= '80' height='80' alt='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/game">Games</Nav.Link>
                <Nav.Link href="#">Search</Nav.Link>
                <Nav.Link href='/gamelist'>GameList</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">Help</Nav.Link>
                <Nav.Link href="#">Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/game' component={Game}/>
          <Route path='/comment' component={Comment}/>
          <Route path='/gamelist' component={GameList}/>
        </div>
      </Router>
    );
  }
}

export default App;
