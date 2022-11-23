import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './../Home/Home'
import Signup from '../Pages/Signup/Signup'
import Design from '../Pages/Design/Design'
import Ux from './../Pages/UX/Ux'
import UI from './../Pages/UI/Ui'
import Typoraphy from './../Pages/Typoraphy/Typoraphy'


export default function RoutesWrapper() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='/design' element={<Design />} />
                <Route path='/ux' element={<Ux />} />
                <Route path='/ui' element={<UI />} />
                <Route path='/typography' element={<Typoraphy />} />


            </Routes>
        </>
    )
}
