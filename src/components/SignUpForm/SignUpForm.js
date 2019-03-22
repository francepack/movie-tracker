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
    this.setState = ({
      [name]: value
    })
  }

  createUser = () => {
    
  }

  render() {
    return (
      <div className='sign-up-form'>
          <form>
            <label>Name:<input type='text' name='name' onChange={this.handleChange}/></label>
            <label>Email:<input type='text' name='email' onChange={this.handleChange}/></label>
            <label>Password<input type='text' name='password' onChange={this.handleChange}/></label>
            <button type='submit'>Create Account</button>
          </form>
      </div>
    )
  }
}

export default SignUpForm;