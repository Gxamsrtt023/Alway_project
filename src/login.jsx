import React from 'react';
import './login.css';

function Login() {
    return (
        <>
            <h1 className='login_uptext'>  Login </h1>

            {/* เพิ่มสี่เหลี่ยมผืนผ้าด้านบนของ .telephone */}
            <div className="telephone">
                <div className="rectangle"></div>
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

                    <button className='login_button'> login </button>
                </form>
            </div>
        </>
    )
}

export default Login;
