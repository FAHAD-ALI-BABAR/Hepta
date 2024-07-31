import React from 'react'
import "./Heroabout.css"
import { RxHamburgerMenu } from "react-icons/rx";
import hero_img from "/tour2.webp"
const Heroabout = (props) => {
  return (
    <>
    <header className='aboutheroes-header'>
    <div className='aboutheroes-content'>
        <h2>{props.name}</h2>
        <p>A free template by <span className='hero-span'>Colorlib</span>. Download and share!</p>
        <button>VISIT COLORLIB</button>
    </div>
</header>
    </>
  )
}

export default Heroabout