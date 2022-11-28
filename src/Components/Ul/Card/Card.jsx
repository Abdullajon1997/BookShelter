import React from 'react'
import './Card.scss'
import { useState, useEffect } from 'react'

const Base_URL = 'https://n36-blog.herokuapp.com/posts/:id  ';





export default function Card() {

    const [cardIn, setCardIn] = useState([])

    useEffect(() => {
        async function categories(element) {
            const cardIn = await fetch('https://n36-blog.herokuapp.com/posts/id')
            const CardOut = await cardIn.json()
            setCardIn(CardOut)
        }
        categories()
    }, [])


    cardIn.length && <ul className='header__inner__list'>
        {
            cardIn.map((e) => (
                <li to='/' className='header__inner__list__item'>
                    {e.category_name}
                </li>
            ))
        }
    </ul>

    return (

        <>
            
        </>
    )
}
