import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import "./Herohotels.css"

import hero_img1 from "/tour4.webp"
const Herohotels = (props) => {
  return (
    <>
    <header className='hotelheroes-header'>
    <div className='hotelheroes-content'>
        <h2>{props.name}</h2>
        <p>A free template by <span className='hotelhero-span'>Colorlib</span>. Download and share!</p>
        <button>VISIT COLORLIB</button>
    </div>
</header>
    </>
  )
}

export default Herohotels