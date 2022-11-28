import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './../Home/Home'
import Signup from '../Pages/Signup/Signup'
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
