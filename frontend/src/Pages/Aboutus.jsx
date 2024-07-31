import React from 'react'
import Footer from '../Components/Footer/Footer'
import Heroabout from '../Components/Hero/Heroabout'
import Aboutaccordian from '../Components/Accordian/Aboutaccordian'

import Abouttour from '../Components/Tour/Abouttour'
import Aboutblog from '../Components/Blogpost/Aboutblog'


const Aboutus = () => {
  return (
    <>
    
    <Heroabout name="About Us" logo="Hepta"/>
    <Aboutaccordian/>
     <Abouttour/>
    <Aboutblog/> 
    <Footer/>
    
    </>
  )
}

export default Aboutus