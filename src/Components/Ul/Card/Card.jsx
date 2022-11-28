import React from 'react'
import './Card.scss'
import { useState, useEffect } from 'react'
import Home from '../../../Home/Home'
import Layout from '../../../Layout/Layout'

import clock from './../../Images/clock.png'

const Base_URL='https://n36-blog.herokuapp.com/posts/:id  ';

console.log(Base_URL);



export default function Card() {

    const [cardIn, setCardIn] = useState([])

    useEffect(()=>{
        async function categories(element){
            const cardIn = await fetch('https://n36-blog.herokuapp.com/posts/id')
            const CardOut = await cardIn.json()
            setCardIn(CardOut)
        } 
        categories()
    },[]) 

    console.log(cardIn);
    

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
            {/* <div sclassName="cards">
                <div className="cards__inner">
                    <p className='cards__inner__p'><span className='cards__inner__p__day'>September 24.2020</span><span className='cards__inner__p__design'>Design theory</span></p>
                    <p className='cards__inner__p2'>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                    <p className='cards__inner__p3'><img className='cards__inner__p3__clock' src={clock} alt="clock" /> <span className='cards__inner__p3__minut'>3 minutes read</span></p>
                    <hr />
                </div>
            </div> */}
        </>
    )
}
