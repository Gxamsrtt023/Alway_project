import React from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()
    return (
        
        <div className="container3">
            <div className="box_signup">
                <h2 className='signup_text'>
                Sign Up
                </h2>
                <form className='formsignup'>
                    <label className="username"></label>
                    <FontAwesomeIcon className='icon_username2' icon={faUser} />
                    <input className='inputuser'
                        id="username"
                        name='username'
                        type='text'
                        autoComplete='off'
                        maxLength={10}
                        required
                        placeholder="Username"
                    />

                    <MdEmail className="icon_email2" />
                    <input className='inputsignup'
                        id="account"
                        name='account'
                        type='text'
                        autoComplete='off'
                        required
                        placeholder="Telephone or Email"
                    />

                    
                    <FontAwesomeIcon className='icon_password2' icon={faLock} />
                    <input className='input_password'
                        id="password"
                        name='password'
                        type='password'
                        autoComplete='off'
                        required
                        placeholder="Password"
                    />

                   
                    <input className='inputconpass'
                        id="confirm_password"
                        name='confirm_password'
                        type='password'
                        autoComplete='off'
                        required
                        placeholder="Confirm password"
                    />

                    <button onClick={()=>navigate("/")} className="signup_button2">Sign up</button>
                </form>
                <div className="signup_rectangle"></div>
            </div>
            </div>
        
    );
   
}

export default Signup;
