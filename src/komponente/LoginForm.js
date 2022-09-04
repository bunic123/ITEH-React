import { useState } from 'react'

function LoginForm() {


    return (
        <div>
            <h1 className='mt-4'>Login forma</h1>
            <div className="login-div">
                <div className="login-fr">
                    <label>Username: </label>
                    <input type="text" className="form-control" value={username} />
                </div>
                <div className="login-fr">
                    <label>Password: </label>
                    <input type="password" className="form-control" value={password} />
                </div>
                <button type="button" id='btn' className='btn btn-primary'>Login</button>
            </div>
        </div>
    )
}

export default LoginForm;