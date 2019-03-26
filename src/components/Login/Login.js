import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/actions';
import { postFetch } from '../../api';

class Login extends Component {
    constructor() {
        super();
      this.state = {
          name: '',
          email: '',
          password: '',
          error: ''
        }
    }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleLogin = async (url, body) => {
    try {
      const response = await postFetch(url, 'POST', body);
      console.log(response);
      if (response) {
        this.setState({ name: response.name })
        this.props.loginUser(response);
        this.props.switchDisplay('loggedIn');
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  logIn = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const url = 'users';
    this.handleLogin(url, { email, password });
  }

  render() {
    const { email, password } = this.state;
    const { switchDisplay } = this.props;
    return (
      <div className='login-form'>
        <form onSubmit={this.logIn}>
          <label>User Name: <input type='text' name='email' value={email} onChange={this.handleChange}/></label>
          <label>Password: <input type='password' name='password' value={password} onChange={this.handleChange} /></label>
          <button type='submit' className='login-btn'>Login</button>
        </form>
        <div onClick={() => {switchDisplay('signup')}} className='pointer'>Need an Account?</div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loginUser: state.loginUser
});

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (userInfo) => dispatch(loginUser(userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;