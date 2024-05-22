import React from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <>
      <div className="header-rectangle">
        {/* จะเสนอให้แทรกส่วนหัวของเว็บไซต์ที่นี่ */}
      </div>

      <div className="container">
        <div className="box_login">
          <h1 className='login_uptext'>
            Login
          </h1>
          <form>
            <label>
              
              <input
                className='login_name'
                name='account'
                type='text'
                placeholder='Username'
                autoComplete='off'
                maxLength={10}
                required
              />
              <FontAwesomeIcon icon={faUser} />
            </label>

            <label className='login_password'>
              <input
                className='login_name'
                name='password'
                type='password'
                placeholder='Password'
                autoComplete='off'
                required
              />
              <FontAwesomeIcon icon={faLock} />
            </label>
           
            <button className='login_button'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
