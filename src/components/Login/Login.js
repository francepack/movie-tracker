import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/actions';

class Login extends Component {
    constructor() {
        super();
      this.state = {
          name: '',
          email: '',
          password: ''
        }
    }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  settings = (method, body) => ({
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  postFetch = async (url, method, body) => {
    const backEndUrl = 'http://localhost:3000/api/';
    try {
      const response = await fetch(`${backEndUrl}${url}`, this.settings(method, body))
      console.log('response: ', response)
      const user = await response.json()
      console.log('user data', user.data)
      return user.data;
    } catch (err) {
      console.log('err: ', err)

      // throw new Error(err);
    }
  }

  handleLogin = async (url, body) => {
    try {
      const response = await this.postFetch(url, 'POST', body);
      this.setState({ name: response.name })
      this.props.loginUser(response);
    } catch (err) {
      throw new Error(err);
    }
  }

  logIn = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const url = 'users';
    this.handleLogin(url, {email, password})
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='login-form'>
          <form onSubmit={this.logIn}>
            <label>User Name: <input type='text' name='email' value={email} onChange={this.handleChange}/></label>
            <label>Password: <input type='password' name='password' value={password} onChange={this.handleChange} /></label>
            <button type='submit' className='login-btn'>Login</button>
          </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (userInfo) => dispatch(loginUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
// export default Login;