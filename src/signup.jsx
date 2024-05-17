import React from 'react'


function Signup() {
    return (
        <>

            <h1> Sign Up </h1>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
            <label className='Singup_Username'>
                    Username
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

                <label className='Singup_Name'>
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

                <label className='Singup_Password'>
                    Password
                    <input className=''
                        name='password'
                        type='password'
                        // onChange={handleChange}
                        autoComplete='off'
                        // value={ user.password }
                        required
                    />
                </label>

                <label className='Singup2_Password'>
                    Password
                    <input className=''
                        name='password'
                        type='password'
                        // onChange={handleChange}
                        autoComplete='off'
                        // value={ user.password }
                        required
                    />
                </label>

                <button> Sign up </button>
            </form>
        </>
    )
}
export default Signup;