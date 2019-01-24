import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FamousPerson from './components/FamousPerson/FamousPerson';
// import FamousPersonList from './components/FamousPersonList/FamousPersonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson />
      </div>
    );
  }

  onNameInputChange() {
    console.log('onNameInputChange()');
  }

  onRoleInputChange() {
    console.log('onRoleInputChange()');
  }  
}

export default App;
