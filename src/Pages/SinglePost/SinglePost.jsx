import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePost() {
    const {postId} = useParams();
    useEffect (()=>{
        async function getData()
        {
            const res = await fetch('https://n36-blog.herokuapp.com/posts/' + postId);
            const data = await res.json();
            console.log(data);
        }
        getData()
    },[])
  return (
    <div>SinglePost {postId}</div>
  )
}
