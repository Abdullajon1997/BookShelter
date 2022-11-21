import React from 'react'
import './Footer.scss'


import footer__logo from './../Images/footer__logo.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__inner">
                        <div>
                            <img src={footer__logo} alt="Logo" />
                        </div>
                        <ul className='footer__inner__list'>
                            <li className='footer__inner__list__item'>FIGHT WITH ME ON:
                                <ul className='footer__inner__lists'>
                                    <li className='footer__inner__lists__item'>Twitter</li>
                                    <li className='footer__inner__lists__item'>Instagram</li>
                                    <li className='footer__inner__lists__item'>Telegram</li>
                                    <li className='footer__inner__lists__item'>YouTube</li>
                                    <li className='footer__inner__lists__item'>Figma</li>
                                </ul>
                            </li>
                            <li className='footer__inner__list__item'>WHAT I HAVE DONE:
                                <ul className='footer__inner__lists'>
                                    <li className='footer__inner__lists__item'>Xalq Kutubxonasi</li>
                                    <li className='footer__inner__lists__item'>Websitee</li>
                                    <li className='footer__inner__lists__item'>Website</li>
                                    <li className='footer__inner__lists__item'>Play Market</li>
                                    <li className='footer__inner__lists__item'>App Store</li>
                                </ul>
                            </li>
                            <li className='footer__inner__list__item'>Contact
                                <ul className='footer__inner__lists'>
                                    <li className='footer__inner__lists__item'>Blog</li>
                                    <li className='footer__inner__lists__item'>Dribbble</li>
                                    <li className='footer__inner__lists__item'>Behance</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
