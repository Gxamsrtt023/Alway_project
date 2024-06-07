import React from 'react'

function Login() {
    return (
        <>

            <h1> Sign Up </h1>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <label>
                    Telephone or Email
                    <input
                        name='account'
                        type='text'
                        // onChange={handleChange}
                        autoComplete='off'
                        // value={ user.telephone }
                        //placeholder="xxx-xxx-xxxx"
                        //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        maxLength={10}
                        required
                    />
                </label>

                <label>
                    Password
                    <input
                        name='password'
                        type='password'
                        // onChange={handleChange}
                        autoComplete='off'
                        // value={ user.password }
                        required
                    />
                </label>

                <button> Sign up</button>
            </form>
        </>
    )
}
export default Login;