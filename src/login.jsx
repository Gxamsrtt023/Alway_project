import React from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()
  return (
    <>
      <div className="header-rectangle">
        {/* จะเสนอให้แทรกส่วนหัวของเว็บไซต์ที่นี่ */}
      </div>

      <div className="container">
        <div className="box_login">
          <div className="login_header">
            <h1 className='login_uptext'>
              Login
              <button onClick={()=>navigate("/signup")} className='signup_button'>
              Sign Up
            </button>
            </h1>
          </div>
          <form>
          <label className='login_name'>
            <FontAwesomeIcon className='iconusername' icon={faUser} />
              <input className='inputuserlog'
                name='account'
                type='text'
                placeholder='Username'
                autoComplete='off'
                maxLength={10}
                required
              />
          </label>
            <label className='login_password'>
            <FontAwesomeIcon className='iconpassword' icon={faLock} />
              <input className='inputpasslog'
                name='password'
                type='password'
                placeholder='Password'
                autoComplete='off'
                required
              />
             
            </label>

            <button onClick={()=>navigate("/start")} className='login_button'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
