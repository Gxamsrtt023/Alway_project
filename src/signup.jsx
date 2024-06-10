import React, { useState } from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        account: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Handle the API call to register the user here
        navigate('/'); // Navigate to home page on success
    };

    return (
        <div className="container3">
            <div className="box_signup">
                <h2 className='signup_text'>Sign Up</h2>
                <form className='formsignup' onSubmit={handleSubmit}>
                    <label className="username"></label>
                    <FontAwesomeIcon className='icon_username2' icon={faUser} />
                    <input 
                        className='inputuser'
                        id="username"
                        name='username'
                        type='text'
                        autoComplete='off'
                        maxLength={10}
                        required
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <MdEmail className="icon_email2" />
                    <input 
                        className='inputsignup'
                        id="account"
                        name='account'
                        type='text'
                        autoComplete='off'
                        required
                        placeholder="Telephone or Email"
                        value={formData.account}
                        onChange={handleChange}
                    />

                    <FontAwesomeIcon className='icon_password2' icon={faLock} />
                    <input 
                        className='input_password'
                        id="password"
                        name='password'
                        type='password'
                        autoComplete='off'
                        required
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input 
                        className='inputconpass'
                        id="confirm_password"
                        name='confirmPassword'
                        type='password'
                        autoComplete='off'
                        required
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    {error && (
                        <div className="error_container">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="error_icon" />
                            <p className="error_message">{error}</p>
                        </div>
                    )}

                    <button type="submit" className="signup_button2">Sign up</button>
                </form>
                <div className="signup_rectangle"></div>
            </div>
        </div>
    );
}

export default Signup;
