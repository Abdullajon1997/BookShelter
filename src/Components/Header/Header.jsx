import React from 'react'
import './Header.scss'
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






                        
                        <div className="input-group">
                            <div className="form-outline">
                                <input id="search-input" type="search" className="form-control" placeholder='Search' />
                            </div>
                            <button id="search-button" type="button" className="btn btn-danger">
                                <i className="fas fa-search"><img src={search__icon} alt="icon" /></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>


    )
}
