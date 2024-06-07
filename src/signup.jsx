import React from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { MdEmail } from 'react-icons/md';

function Signup() {
    return (
        
        <div className="container">
            <div className="box_signup">
                <h2 className='signup_text'>
                Sign Up
                </h2>
                <form>
                    <label className="username"></label>
                    <FontAwesomeIcon className='icon_username' icon={faUser} />
                    <input
                        id="username"
                        name='username'
                        type='text'
                        autoComplete='off'
                        maxLength={10}
                        required
                        placeholder="Username"
                    />

                    <label className="signup_email"></label>
                    <MdEmail className="icon_email" />
                    <input
                        id="account"
                        name='account'
                        type='text'
                        autoComplete='off'
                        required
                        placeholder="Telephone or Email"
                    />

                    <label className="signup_password"></label>
                    <FontAwesomeIcon className='icon_password' icon={faLock} />
                    <input 
                        id="password"
                        name='password'
                        type='password'
                        autoComplete='off'
                        required
                        placeholder="Password"
                    />

                    <label className="confirm_password"></label>
                    <input
                        id="confirm_password"
                        name='confirm_password'
                        type='password'
                        autoComplete='off'
                        required
                        placeholder="Confirm password"
                    />

                    <button className="signup_button">Sign up</button>
                </form>
                <div className="signup_rectangle"></div>
            </div>
            </div>
        
    );
   
}

export default Signup;
