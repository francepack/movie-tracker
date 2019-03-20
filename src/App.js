import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Header />
          <Movies />
        </div>
        <Route exact path='/' component={Movies} />
        {/* <Route exact path='/movie/:id' render={({ match }) => {
          console.log(match)
        }) */}
      </div>
    );
  }
}

export default App;
