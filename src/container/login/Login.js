import React from 'react'

import Input from '../../ components/input'
import Button from '../../ components/button'

import './login.css'
import Background from '../../ components/background'

function Login() {
    return (
        <>
         <div className="auth-container">
                    <div className="auth-card">
                        <p className="auth-title">Login</p>
                        <Input
                        className="input"
                        id="email"
                        placeHolder="Email"
                        type="text"
                        />
                        <Input
                        className="input"
                        id="password"
                        placeHolder="Password"
                        type="password"
                        />
                        <Button
                        className="btn"
                        name="Login"/>
                    </div>
            <Background/>
        </div>
        </>
    )
}

export default Login
