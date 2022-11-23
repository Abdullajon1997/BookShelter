import React from 'react'
import './Header.scss'
import Layout from '../../Layout/Layout'
import logo from './../Images/Logo__Header.png'
import search__icon from './../../Components/Images/search__icon.png'

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

                        <Link to="/"><img src={logo} alt="LOGO" /></Link>
                        <ul className='header__inner__list'>
                            {
                                respons ? <Link className='header__inner__list__item' to='/'>All</Link> :
                                    <Link className='header__inner__list__item' to='/signup'>Login</Link>
                            }
                            <li className='header__inner__list__item'>
                                <Link className='header__inner__list__item' to='/design'>DESIGN THEORE</Link>
                            </li>

                            <li className='header__inner__list__item'>
                                <Link className='header__inner__list__item' to='/ux'>UX</Link>
                            </li>
                            <li className='header__inner__list__item'>
                                <Link className='header__inner__list__item' to='/ui'>UI</Link>
                            </li>
                            <li className='header__inner__list__item'>
                                <Link className='header__inner__list__item' to='/typography'>Typography</Link>
                            </li>
                        </ul>
                        {/* {
                            cardIn.length && <ul className='header__inner__list'>
                                {
                                    cardIn.map((e) => (
                                        
                                        <Link to='/' className='header__inner__list__item'>
                                            {e.category_name}
                                        </Link>
                                    ))
                                    
                                }
                            </ul>
                        } */}
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
