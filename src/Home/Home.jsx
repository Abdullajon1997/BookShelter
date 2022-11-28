import React from 'react'
import Card from '../Components/Ul/Card/Card'
import Cards from '../Components/Ul/Cards/Cards'
import Layout from '../Layout/Layout'
import Posts from '../Pages/Posts/Posts'
  

export default function Home() {
    
    return (
        <>
            <Layout>
                <section className='boburBlog'>
                    <div className="container">
                        <div className="row">
                            <div className='col-4'>
                                <h2 className='col-4__h2'>What I do!</h2>
                                <Cards />
                            </div>
                            <div className='col-8'>
                                <h2 className='col-8__h2'>Recent Posts</h2>
                                <Card />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
