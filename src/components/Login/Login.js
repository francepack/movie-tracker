import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/actions';

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

  options = (method, body) => ({
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  postFetch = async (url, method, body) => {
    const backEndUrl = 'http://localhost:3000/api/';
    try {
      const response = await fetch(`${backEndUrl}${url}`, this.options(method, body));
      const user = await response.json();
      return user.data;
    } catch (error) {
      this.setState({ error });
      console.log('err: ', this.state.error)
    }
  }

  handleLogin = async (url, body) => {
    try {
      const response = await this.postFetch(url, 'POST', body);
      if (response) {
        this.setState({ name: response.name })
        this.props.loginUser(response);
        this.props.switchDisplay('loggedIn');
      } else {
        alert('Incorrect username or password');
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