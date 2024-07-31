import React, { useState } from 'react'
import "./Galleryhero.css"
import { RxHamburgerMenu } from "react-icons/rx";
import {Link} from "react-router-dom"
import gallery from "/sofa.webp"

const Herogallery = (props) => {
    const [open,setopen]=useState(false)
    const toggleMenu = () => {
        setopen(!open);
      };
  return (
    <>
    <header className='galleryheroes-header'>
    <div className='galleryheroes-content'>
        <h2>{props.name}</h2>
        <p>A free template by <span className='hero-span'>Colorlib</span>. Download and share!</p>
        <button>VISIT COLORLIB</button>
    </div>
</header>
    
        
        
    
    
    </>
  )
}

export default Herogallery