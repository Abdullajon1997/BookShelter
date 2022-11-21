import React from 'react'
import './Card.scss'

import clock from './../../Images/clock.png'


export default function Card() {
    return (
        <>
            <div sclassName="cards">
                <div className="cards__inner">
                    <p className='cards__inner__p'><span className='cards__inner__p__day'>September 24.2020</span><span className='cards__inner__p__design'>Design theory</span></p>
                    <p className='cards__inner__p2'>Bad Design vs. Good Design: 5 Examples We can Learn From</p>
                    <p className='cards__inner__p3'><img className='cards__inner__p3__clock' src={clock} alt="clock" /> <span className='cards__inner__p3__minut'>3 minutes read</span></p>
                    <hr />
                </div>
            </div>
        </>
    )
}
