import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoggedIn extends Component {

  logout = () => {
    if (this.props.loginUser) {
      console.log(this.props.loginUser);
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
          <span >Favorites</span> | <span className='logout-btn' onClick={this.logout}>Logout</span>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    loginUser: state.loginUser
});

export default connect(mapStateToProps, null)(LoggedIn);
// export default LoggedIn;