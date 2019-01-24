import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import Header from './components/Header/Header';
import FamousPerson from './components/FamousPerson/FamousPerson';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <ul className="nav">
              <li>
                <Link to="/">Famous Person</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Route exact path="/" component={FamousPerson} />
            <Route exact path="/about" component={AboutPage} />
          </div>
        </Router>
      </div> 
    );
  }
}

export default App;
