import React from 'react';
import './login.css';

function Login() {
  return (
    <>
      <div className="header-rectangle">
      </div>

      <div className="container">
        <div className="box_login">
          <h1 className='login_uptext'>Login</h1>
          <form>
            <label>
              <input className='login_name'
                name='account'
                type='text'
                placeholder='Username'
                autoComplete='off'
                maxLength={10}
                required
              />
            </label>

            <label className='login_password'>
              <input className='login_name'
                name='password'
                type='password'
                placeholder='Password'
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
