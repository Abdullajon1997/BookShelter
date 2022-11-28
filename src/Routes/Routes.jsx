import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './../Home/Home'
import Signup from '../Pages/Signup/Signup'
import Design from '../Pages/Design/Design'
import Ux from './../Pages/UX/Ux'
import UI from './../Pages/UI/Ui'
import Typoraphy from './../Pages/Typoraphy/Typoraphy'
import Posts from '../Pages/Posts/Posts'
import SinglePost from '../Pages/SinglePost/SinglePost'


export default function RoutesWrapper() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/:categoryName' element={<Posts />} />
                <Route path='posts/:postId' element={<SinglePost />} />

            </Routes>
        </>
    )
}
