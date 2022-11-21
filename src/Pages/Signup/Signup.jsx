import React from 'react'
import './Signup.scss'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <Layout>
                <section className='signup'>
                <div className="container">
                <div class="box">
                    <div class="form">
                        <h2>Login</h2>
                        <div class="inputBox">
                            <input type={'text'} required />
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type={'password'} required />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div class="links">
                            <Link to="#">Fatgot Pasword</Link>
                            <Link to="/home">Sign Up</Link>
                        </div>
                        <input type="submit" value="Login" />
                    </div>
                </div>
                </div>
                </section>
            </Layout>
        </>
    )
}
