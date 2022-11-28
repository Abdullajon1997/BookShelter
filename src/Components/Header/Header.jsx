import React from 'react'
import './Header.scss'
import Layout from '../../Layout/Layout'
import logo from './../Images/Logo__Header.png'
import search__icon from './../../Components/Images/search__icon.png'
import { BrowserRouter } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'



export default function Header() {

    const [respons, setRespons] = useState(null)

    useEffect(() => {
        setRespons(window.localStorage.getItem('token') || null)
    }, [])

    const [cardIn, setCardIn] = useState([])

    useEffect(() => {
        async function categories(element) {
            const cardIn = await fetch('https://n36-blog.herokuapp.com/categories')
            const CardOut = await cardIn.json()
            setCardIn(CardOut)
        }
        categories()
    }, [])

    // console.log(cardIn);



    return (

        <>
            <header className='header'>
                <div className="container">
                    <div className="header__inner">
                        <Link to="/signup"><img src={logo} alt="LOGO" /></Link>
                        {
                            cardIn?.length > 0 &&
                            cardIn.map((item) =><Link className='header__inner__link' to={"/" + item.category_name}>{item.category_name}</Link>)
                        }
                        <div class="input-group">
                            <div class="form-outline">
                                <input id="search-input" type="search" class="form-control" placeholder='Search' />
                            </div>
                            <button id="search-button" type="button" class="btn btn-danger">
                                <i class="fas fa-search"><img src={search__icon} alt="icon" /></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>


    )
}
