import React from 'react'
import {Link} from 'react-router-dom'

import Input from '../../ components/input'
import Button from '../../ components/button'

import './login.css'
import Background from '../../ components/background'
import logo from "../../ components/image/logo";

const Login = () => {
    return (
        <>
            <div className="auth-container">
                <div className="auth-card">
                  <img src={logo} alt='logo'/>
                    {/* <p className="auth-title">Login</p> */}
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
                        <Link to="#"><p className='forgot-pass'>Lupa Password?</p></Link>
                        <Button
                          className="btn"
                          name="Login"/>
                        <p className='register'>Belum punya akun posq? <Link href="#">Daftar</Link></p>
                </div>
              <Background/>
            </div>
        </>
    )
}

export default Login
