import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './../Home/Home'
import Signup from '../Pages/Signup/Signup'

export default function RoutesWrapper() {
    return (
        <>
            <Routes>
                <Route path='/Home' element={<Home />} />
                <Route path='/' element={<Signup />} />
            </Routes>
        </>
    )
}
