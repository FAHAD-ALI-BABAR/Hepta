import React from 'react'
import "./Contacthero.css"
import { RxHamburgerMenu } from "react-icons/rx";
import contact from "/tour3.webp"
const Contacthero = (props) => {
  return (
    <>
    <header className='contactheroes-header'>
    <div className='contactheroes-content'>
        <h2>{props.name}</h2>
        <p>A free template by <span className='hero-span'>Colorlib</span>. Download and share!</p>
        <button>VISIT COLORLIB</button>
    </div>
</header>
    
    </>
  )
}

export default Contacthero