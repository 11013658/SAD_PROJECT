import React, { Component } from 'react';
import './components/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Header from './components/header';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/home';
import Artist from './components/artist';

class App extends Component {

  render(){
    return (
      <>
      <Router>
      <div className="App">
        <Header />
        <p className="App-intro"></p>
      </div>

      <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <a class="navbar-brand" target="_blank">
            </a>
            <Link to="/" className="navbar-brand">Euphona</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/artists" className="nav-link">Artists</Link>
                </li>
              </ul>
            </div>
      </Navbar>
      </div>
      
      <Route path="/home" exact component={Home} />
      <Route path="/artists" exact component={Artist} />
      </Router>
      </>
      );
    }
}
export default App;