import React from 'react'
import Footer from '../Components/Footer/Footer'
import Herohotels from '../Components/Hero/Herohotels'
import Experiencehotels from '../Components/Experience/Experiencehotels'
import Hotelsaccordian from '../Components/Accordian/Hotelsaccordian'
import Hotelstour from '../Components/Tour/Hotelstour'
import Hotelsblog from '../Components/Blogpost/Hotelsblog'
import Experience from '../Components/Experience/Experience'
import Abouttour from '../Components/Tour/Abouttour'
import Blogpost from '../Components/Blogpost/Blogpost'


const Hotels = (props) => {
  return (
    <>
    <Herohotels name="Our Hotels" logo="Hepta"/>
    <Experience/> 
    <Hotelsaccordian/>
    <Abouttour/>
    <Blogpost/>
    <Footer/> 
    
    </>
   
  )
}

export default Hotels