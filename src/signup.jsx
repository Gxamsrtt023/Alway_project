import React from 'react';
import './signup.css';

function Signup() {
    return (
        <div className="container">
            <div className="box_signup">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="username"></label>
                    <input
                        id="username"
                        name='username'
                        type='text'
                        autoComplete='off'
                        maxLength={10}
                        required
                        placeholder="Username"
                    />

                    <label htmlFor="account"></label>
                    <input
                        id="account"
                        name='account'
                        type='text'
                        autoComplete='off'
                        required
                        placeholder="Telephone or Email"
                    />

                    <label htmlFor="password"></label>
                    <input
                        id="password"
                        name='password'
                        type='password'
                        autoComplete='off'
                        required
                        placeholder="Password"
                    />

                    <label htmlFor="confirm_password"></label>
                    <input
                        id="confirm_password"
                        name='confirm_password'
                        type='password'
                        autoComplete='off'
                        required
                        placeholder="Confirm password"
                    />

                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
