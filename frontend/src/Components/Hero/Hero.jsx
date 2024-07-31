import React, { useState } from 'react'
import "./Heropage1.css"
import { RxHamburgerMenu } from "react-icons/rx";
import hero_img from "/tour1.webp"
import {Link,NavLink} from "react-router-dom"
import "../Navigation/Navigation.css"



const Hero = (props) => {
    const [menuOpen,setMenuOpen]=useState(false)
    
    
  return (
    <>
    <header className='heroes-header'>
    <div className='heroes-content'>
        <h2>{props.name}</h2>
        <p>A free template by <span className='hero-span'>Colorlib</span>. Download and share!</p>
        <button>VISIT COLORLIB</button>
    </div>
</header>

    
    </>
  )
}

export default Hero
