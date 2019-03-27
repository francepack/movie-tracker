import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoggedIn from '../LoggedIn/LoggedIn';
import PropTypes from 'prop-types';


class Header extends Component {
  constructor() {
    super();
    this.state = {
      display: 'login',
      isLoggedIn: false
    }
  }

  switchDisplay = (display) => {
    this.setState({ display });
  }

  render() {
    const { display } = this.state;
    const displayContainer = {
      login: (<Login switchDisplay={this.switchDisplay} />),
      signup: (<SignUpForm switchDisplay={this.switchDisplay} />),
      loggedIn: (<LoggedIn switchDisplay={this.switchDisplay} />)
    }

    return (
      <header>
        <Link to='/' className='home-direct'>
          <h1>Movie Tracker</h1>
        </Link>
        <div>
          {displayContainer[display]}
        </div>
        </header>
    )
  }
}

export const mapStateToProps = (state) => ({
  loginUser: state.loginUser
})

Header.propTypes = {
  loginUser: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(Header);