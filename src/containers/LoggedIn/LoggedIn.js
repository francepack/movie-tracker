import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LoggedIn extends Component {

  logout = () => {
    const { logoutUser, switchDisplay } = this.props;
    if (this.props.loginUser) {
      logoutUser();
      switchDisplay('login');
    }
  }

  render() {
      const { name } = this.props.loginUser;
    return (
      <div className="user-display">
        <div className="user-welcome">Welcome {name}!</div>
        <div className="user-options">
          <Link to='/favorites' className='favorites-link'><span className='display-favorites-btn'>Favorites &nbsp;</span></Link> | <Link to='/' className='logout-link'><span className='logout-btn' onClick={this.logout}>&nbsp; Logout</span></Link>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    loginUser: state.loginUser,
    favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

LoggedIn.propTypes = {
  loginUser: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  logoutUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);