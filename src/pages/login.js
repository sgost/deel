import React from "react"
import {
    LoginSection,
} from "../components/Login/styles.js"
import { Link } from "gatsby"
import Nav from "../components/Landing/Nav/index"

const Login = () => {

    return (
        <>
            <LoginSection>
                <Nav />
                <div id="login_main">
                    <div id="login">
                        <h1>Log in</h1>
                        <button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="img" /><Link>Log In Using Google</Link></button>
                    </div>
                    <div id="login_or">
                        <span></span>
                        <p>or</p>
                        <span></span>
                    </div>
                    <div id="login_container">
                        <h1>Log in using email address</h1>
                        <div id="login_container_input">
                            <label htmlFor="title">Email Address</label>
                            <input type="mail" placeholder="example@example.com" />
                        </div>
                        <div id="login_container_input">
                            <div id="login_container_input_b1">
                                <label htmlFor="title">Password</label>
                                <label htmlFor="title"><Link>Forgot Password</Link></label>
                            </div>
                            <input type="password" placeholder="••••••" />
                        </div>
                        <div id="login_container_input">
                            <button>Log In</button>
                        </div>
                    </div>
                    <h1 id="login_footer">Need to create an account? <Link>Sign Up</Link></h1>
                </div>
            </LoginSection>
        </>
    )
}
export default Login