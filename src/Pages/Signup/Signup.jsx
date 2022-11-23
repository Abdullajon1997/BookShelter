import React from 'react'
import './Signup.scss'
import Layout from '../../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'




export default function Signup() {

    const Navigate = useNavigate()

    const [parol , setParol]=useState('');
    const [password, setPassword]=useState('');




    async function hendlogin(e){
        e.preventDefault()
        const res=await fetch('https://n36-blog.herokuapp.com/login?login='+parol+'&password='+ password)
        const{token}=await res.json()
        if(token){
            window.localStorage.setItem('token',token)
            Navigate('/')
        }
    }

    return (
        <>
            <Layout>
                <section className='signup'>
                <div className="container">
                <div class="box">
                    <form class="form" onSubmit={hendlogin}>
                        <h2>Login</h2>
                        <div class="inputBox">
                            <input type={'text'} required value={parol} onChange={(e)=>setParol(e.target.value)} />
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type={'password'} required value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div class="links">
                            <Link to="#">Fatgot Pasword</Link>
                            <Link to="/home">Sign Up</Link>
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                </div>
                </div>
                </section>
            </Layout>
        </>
    )
}
