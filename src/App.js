import React, { Component } from 'react';
// import { NavLink, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Movies />
      </div>
    );
  }
}

export default App;
