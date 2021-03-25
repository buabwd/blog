import React from 'react'
import './CSS/Login.css';


const Login = () => {
    return (
        <div>
            <div class="center">
                <h1>Login</h1>
                <form method="post"></form>
                <div class="txt_field">
                    <input type="text" required></input>
                        <span></span>
                        <label>Username</label>
        </div>
                    <div class="txt_field">
                        <input type="password" required></input>
                            <span></span>
                            <label>Password</label>
        </div>
                        <div class="pass">Forget Password?</div>
                        <input type="submit" value="Login"></input>
                            <div class="signup-link">
                                Not a member?<a href="#">Signup</a>
                            </div>
    </div>
                    </div>
    )
}

export default Login
