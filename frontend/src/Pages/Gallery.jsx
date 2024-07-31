import React from 'react'
import Herogallery from '../Components/Hero/Herogallery'
import Galleryblog from '../Components/Blogpost/Galleryblog'
import Galleryfooter from "../Components/Footer/Galleryfooter"
import Footer from '../Components/Footer/Footer'




const Gallery = () => {
  return (
    <>
    <Herogallery name="My Gallery" logo="Hepta"/>
    <Galleryblog/>
    <Footer/>

    
    </>
  )
}

export default Gallery