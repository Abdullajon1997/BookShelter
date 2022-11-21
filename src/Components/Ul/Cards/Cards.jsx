import React from 'react'
import './Card.scss'

import right from './../../Images/right.png'
import fecbook from './../../Images/fecbook.png'
import github from './../../Images/github.png'
import twitter from './../../Images/twitter.png'
import linkedln from './../../Images/in.png'

export default function Cards() {
    return (
        <>
            <div className="cardes__inner">
                    <p className='cardes__inner__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                    <p className='cardes__inner__p2'><span className='cardes__inner__p2__span'>EXPLORE ME</span><img className='cardes__inner__p2__img' src={right} alt="right" /></p>
                    <ul className='cardes__inner__list'>
                        <li className='cardes__inner__list__item'><img className='cardes__inner__list__item__img' src={fecbook} alt="fecbook" /></li>
                        <li className='cardes__inner__list__item'><img className='cardes__inner__list__item__img' src={github} alt="github" /></li>
                        <li className='cardes__inner__list__item'><img className='cardes__inner__list__item__img' src={twitter} alt="twitter" /></li>
                        <li className='cardes__inner__list__item'><img className='cardes__inner__list__item__img' src={linkedln} alt="linkedln" /></li>
                    </ul>
                </div>
        </>
    )
}
