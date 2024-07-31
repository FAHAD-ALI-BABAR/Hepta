import React, { useState } from 'react'
import {Link,NavLink} from "react-router-dom"
import "./Navigation.css"
const Navigation = () => {
    const [menuOpen,setMenuOpen]=useState(false)

  return (
    <>
    <nav>
        <Link to="/" className='title'>
        Hepta
        </Link>
        <div className='menuuu' onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
            
        </div>
        <ul className={menuOpen ? "open" :""}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to='aboutus'>About</NavLink>
            </li>
            <li>
                <NavLink to='/news'>News</NavLink>
            </li>
            <li>
                <NavLink to='/hotels'>Hotels</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/gallery'>Gallery</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navigation