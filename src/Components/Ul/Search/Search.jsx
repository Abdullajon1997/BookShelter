import React from 'react'

import search__icon from './../../Images/search__icon.png'
import Header from '../../Header/Header'

export default function Search() {
    return (
        <>
            <div class="input-group">
                <div class="form-outline">
                    <input id="search-input" type="search" class="form-control" placeholder='Search' />
                </div>
                <button id="search-button" type="button" class="btn btn-danger">
                    <i class="fas fa-search"><img src={search__icon} alt="icon" /></i>
                </button>
            </div>
        </>
    )
}
