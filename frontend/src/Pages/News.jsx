import React from 'react'
import Footer from '../Components/Footer/Footer'
import Newshero from '../Components/Hero/Newshero'
import Newsblog from '../Components/Blogpost/Newsblog'


const News = () => {
  return (
    <>
    
    <Newshero name="Our Blogs" logo="Hepta"/>
    <Newsblog/>
    <Footer/>
    </>
  )
}

export default News