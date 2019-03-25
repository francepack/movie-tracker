import React, { Component } from 'react';

class SignUpForm extends Component {
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

  handleSignUp = async (e) => {
    e.preventDefault();
    const userInfo = this.state;
    const newUserUrl = 'http://localhost:3000/api/users/new';
    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    }
    try {
      const response = await fetch(newUserUrl, options);
      const newUser = await response.json();
      console.log(newUser);
    } catch (err) {
      throw new Error(err);
    }
  }

  render() {
    const { name, email, password } = this.state;
    const { switchDisplay } = this.props;
    return (
      <div className='sign-up-form'>
          <form onSubmit={this.handleSignUp}>
            <label>Name:<input type='text' name='name' value={name} onChange={this.handleChange}/></label>
            <label>Email:<input type='email' name='email' value={email} onChange={this.handleChange}/></label>
            <label>Password:<input type='password' name='password' value={password} onChange={this.handleChange}/></label>
            <button type='submit'>Create Account</button>
          </form>
          <div onClick={() => {switchDisplay('login')}} className='pointer'>Return to Login</div>
      </div>
    )
  }
}

export default SignUpForm;