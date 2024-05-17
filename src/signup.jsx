import React from 'react';
import './signup.css';

function Signup() {
    return (
        <div className="container">
            <div className="box_signup">
                <h2>Sign Up</h2>
                <form>
                    <label className='Signup_Username'>
                        Username
                        <input
                            name='username'
                            type='text'
                            autoComplete='off'
                            maxLength={10}
                            required
                        />
                    </label>

                    <label className='Signup_Name'>
                        Telephone or Email
                        <input
                            name='account'
                            type='text'
                            autoComplete='off'
                            maxLength={10}
                            required
                        />
                    </label>

                    <label className='Signup_Password'>
                        Password
                        <input
                            name='password'
                            type='password'
                            autoComplete='off'
                            required
                        />
                    </label>

                    <label className='Signup2_Password'>
                        Confirm Password
                        <input
                            name='confirm_password'
                            type='password'
                            autoComplete='off'
                            required
                        />
                    </label>

                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
