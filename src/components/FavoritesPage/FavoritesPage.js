import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoritesPage extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginUser: state.loginUser,
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(FavoritesPage);
// export default FavoritesPage;