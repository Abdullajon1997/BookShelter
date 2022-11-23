import React, { Children } from 'react'
import {Link} from 'react-router-dom'
import Header from './../Components/Header/Header'
import Footer from './../Components/Footer/Footer'
import Home from './../Home/Home'
import Signup from './../Pages/Signup/Signup'

export default function Layout({ children }) {
    return (
        <>
           
                {/* <Link to='/home'>Home</Link>
                <Link to='/signup'>Signup</Link> */}
                <Header />
          
            <main>
                {children}
            </main>
            {/* <footer> */}
                <Footer />
            {/* </footer> */}

        </>
    )
}
