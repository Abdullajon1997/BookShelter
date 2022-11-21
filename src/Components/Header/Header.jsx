import React from 'react'
import './Header.scss'
import Layout from '../../Layout/Layout'
import logo from './../Images/Logo__Header.png'
import Search from './../Ul/Search/Search'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    
                    <Link to="/"><img src={logo} alt="LOGO" /></Link>
                    <ul className='header__inner__list'>
                        <li className='header__inner__list__item'>All</li>
                        <li className='header__inner__list__item'>Design Theory</li>
                        <li className='header__inner__list__item'>UX</li>
                        <li className='header__inner__list__item'>UI</li>
                        <li className='header__inner__list__item'>Typography</li>
                    </ul>
                    <Search/>
                </div>
            </div>
        </header>
    )
}
