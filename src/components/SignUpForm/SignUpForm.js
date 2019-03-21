import React from 'react';

const SignUpForm = () => {
  return (
    <div className='sign-up-dropdown'>
        <form>
            <label>Name:<input type='text' name='name' /></label>
            <label>Email:<input type='text' name='email' /></label>
            <label>Password<input type='text' name='password' /></label>
            <button type='submit'>Add Account</button>
        </form>
    </div>
  )
}

export default SignUpForm;