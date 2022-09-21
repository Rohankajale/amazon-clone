
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt="Amazon Logo"
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' required
                    value={email}
                    placeholder="someone@so.com"
                    onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' required
                    value={password} 
                    placeholder="chickennuggets" 
                    onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    <br />By signing-in you agree to the Amazon Clone Conditions of Use & Sale.<br /> Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login