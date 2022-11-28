import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import Home from '../../Home/Home'
import Layout from '../../Layout/Layout'
import './Posts.scss'
import clock from "./../../Components/Images/clock.png"
import Cards from '../../Components/Ul/Cards/Cards'


export default function Posts() {

    const { categoryName } = useParams()
    const [posts, setPosts] = useState([])

    const prevBtn = useRef(null);
    const nextBtn = useRef(null);



    const [direction, setDirection] =useState(0);

    function prew()
    {
    setDirection((direction)=> direction - 1)
    
    
       
    }
    function next()
    {
    setDirection((direction)=> direction + 1)
    }
    console.log(direction);

    

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://n36-blog.herokuapp.com/posts/bycategory?page=${direction}`,
                {
                    headers: {
                        categoryname: categoryName
                    }
                }
            )
            const data = await res.json();
            setPosts(data.posts)
            console.log(data);
        }
        getData()


    }, [categoryName, direction])
    console.log(categoryName);
    return <div>
        <Layout>
            <div className='posts'>
                <div>
                    <h2 className='posts__title'>What I do!</h2>
                    <Cards />
                </div>
                <ul className='list'>
                    <h2 className='posts__title'>Recent Posts</h2>
                    {
                        posts?.length > 0 && posts.map(post => (
                            <li className='list__item'>
                                <Link className='list__item__link' to={"/posts/" + post.id}>
                                    <div className='list__item__div'>
                                        <time className='list__item__div__time'>{moment(post.created_time).format('LL')}</time>
                                        <p className='list__item__div__name'>{post.category_name}</p>
                                    </div>
                                    <h3 className='list__item__div__title'>{post.title}</h3>
                                    <div className='list__item__clock'>
                                        <img className='list__item__clock__img' src={clock} alt="clock" />
                                        <span className='list__item__clock__span'>3 minutes read</span>
                                    </div>
                                    <hr />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='posts__end'>
            <button className='posts__end__prev' ref={prevBtn} onClick={prew}>Prev</button>
            <button className='posts__end__next' ref={nextBtn} onClick={next} >Next</button>
            </div>
        </Layout>
    </div>

}
