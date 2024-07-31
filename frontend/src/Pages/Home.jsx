import React from 'react'
import Accordian from '../Components/Accordian/Accordian'
import Hero from '../Components/Hero/Hero'
import Experience from '../Components/Experience/Experience'
import Tour from '../Components/Tour/Tour'
import Blogpost from '../Components/Blogpost/Blogpost'
import Footer from '../Components/Footer/Footer'
import Abouttour from '../Components/Tour/Abouttour'



const Home = (props) => {
  return (
    <>
    
    <Hero name={props.name} logo={props.logo}/> 
    <Accordian/> 
    <Experience/> 
    <Abouttour/>
    <Blogpost/> 
    <Footer/>
    </>
  )
}

export default Home