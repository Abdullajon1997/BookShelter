import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../Layout/Layout';
import { Moment } from 'moment';
import './SinglePost.scss'


import Img from './../../Components/Images/Img.jpg'
import moment from 'moment';

export default function SinglePost() {
  const { postId } = useParams();
  const [myData, setMyData] = useState({})
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://n36-blog.herokuapp.com/posts/' + postId);
      const data = await res.json();
      // console.log(data);
      setMyData(data)
    }
    getData()
  }, [])
  console.log(myData);


  return (

    <div>
      {
        <Layout>
          <div className="container">
            <ul className='posts__list'>
              <li className='posts__list__item'>
                <p className='posts__list__item__name'>{myData.category_name}</p>
                <h2 className='posts__list__item__title'>{myData.title}</h2>
                <time className='posts__list__item__time'>{moment(myData.created_at).format('LL')}</time>
                <img className='posts__list__item__img' src={Img} alt="Img" />
                <p className='posts__list__item__body'>{myData.body}</p>

              </li>
            </ul>
          </div>
        </Layout>
      }
    </div>

  )
}
