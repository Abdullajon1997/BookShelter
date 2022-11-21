import React from 'react'
import './Header.scss'
import Layout from '../../Layout/Layout'
import logo from './../Images/Logo__Header.png'
import search__icon from './../../Components/Images/search__icon.png'

import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className='header'>
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
    )
}
