import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { postFetch } from '../../api';
import PropTypes from 'prop-types';

export class Login extends Component {
         constructor() {
           super();
           this.state = {
             id: 0,
             name: '',
             email: '',
             password: '',
             error: ''
           };
         }

         handleChange = e => {
           const { name, value } = e.target;
           this.setState({
             [name]: value
           });
         };

         handleLogin = async (url, body) => {
           try {
             const response = await postFetch(url, 'POST', body);
             console.log(response);
             if (response) {
               this.setState({ name: response.name, id: response.id });
               const favoritesArray = await this.getFavoriteMovies(this.state.id);
               this.addFavoritesToStore(favoritesArray);
               this.props.loginUser(response);
               this.props.switchDisplay('loggedIn');
             }
           } catch (err) {
             throw new Error(err);
           }
         };

         getFavoriteMovies = async id => {
           const backendUrl = `http://localhost:3000/api/users/${id}/favorites`;
           const options = {
             method: 'GET',
             headers: { 'Content-Type': 'application/json' }
           };
           try {
             const response = await fetch(backendUrl, options);
             const favorites = await response.json();
             return favorites.data;
           } catch (err) {
             console.log(err);
           }
         };

         addFavoritesToStore = (favoritesArray) => {
           favoritesArray.map(movie => {
             return this.props.favorites.push(movie.movie_id)
           })
         }

         logIn = e => {
           e.preventDefault();
           const { email, password } = this.state;
           const url = 'users';
           this.handleLogin(url, { email, password });
         };

         render() {
           const { email, password } = this.state;
           const { switchDisplay } = this.props;
           return (
             <div className="login-form">
               <form onSubmit={this.logIn}>
                 <label>
                   User Email:{' '}
                   <input
                     type="text"
                     name="email"
                     value={email}
                     onChange={this.handleChange}
                   />
                 </label>
                 <label>
                   Password:{' '}
                   <input
                     type="password"
                     name="password"
                     value={password}
                     onChange={this.handleChange}
                   />
                 </label>
                 <button type="submit" className="login-btn">
                   Login
                 </button>
               </form>
               <div
                 onClick={() => {
                   switchDisplay('signup');
                 }}
                 className="pointer"
               >
                 Need an Account?
               </div>
             </div>
           );
         }
       }

export const mapStateToProps = state => ({
  currentUser: state.loginUser,
  favorites: state.favorites
});

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (userInfo) => dispatch(loginUser(userInfo))
});

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);