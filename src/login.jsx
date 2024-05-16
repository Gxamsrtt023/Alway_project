import React from 'react';
import './login.css';

function Login() {
  return (
    <>
      <div className="header-rectangle">
        
      </div>

      <div className="container">
        <h1 className='login_uptext'>Login</h1>
        <div className="telephone">
          <form>
            <label>
              Telephone or Email
              <input className='login_name'
                name='account'
                type='text'
                autoComplete='off'
                maxLength={10}
                required
              />
            </label>

            <label className='login_password'>
              Password
              <input className='login_name'
                name='password'
                type='password'
                autoComplete='off'
                required
              />
            </label>

            <button className='login_button'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;