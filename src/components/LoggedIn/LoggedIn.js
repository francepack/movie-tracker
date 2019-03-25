import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/actions';

class LoggedIn extends Component {

  logout = () => {
    const { logoutUser, switchDisplay } = this.props;
    if (this.props.loginUser) {
      logoutUser();
      switchDisplay('login');
    }
  }

  displayFavorites = () => {

  }

    render() {
      const { name } = this.props.loginUser;
      console.log(this.props);
    return (
      <div className="user-display">
        <div className="user-welcome">Welcome {name}!</div>
        <div className="user-options">
          <span className='display-favorites-btn' onClick={this.displayFavorites}>Favorites</span> | <span className='logout-btn' onClick={this.logout}>Logout</span>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    loginUser: state.loginUser
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
// export default LoggedIn;