import React, { useState } from 'react'
// import "./Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";

import {Link} from "react-router-dom"
const Navbar = () => {
    // const [open,setOpen]=useState("true");
    // const isopen=()=>{
    //   setOpen(true);
    // }
    // const isclose=()=>{
    //   setOpen(false)
    // }
    
  return (
    <>
    {/* <div className='nav-container'>
    
        
            <div className='menu-container'>
              <div className='btn_close' >X</div>
              <a onClick={()=>{setmenu("home")}} href=''>Home {menu==="home"?<h/>:<></>}</a>
              <a onClick={()=>{setmenu("about")}} href=''>About {menu==="about"?<h/>:<></>}</a>
              <a onClick={()=>{setmenu("portfolio")}} href=''>Portfolio{menu==="about"?<h/>:<></>}</a>
              <a onClick={()=>{setmenu("blog")}} href=''>Blog {menu==="blog"?<h/>:<></>}</a>
              <a onClick={()=>{setmenu("contact")}} href=''>Contact {menu==="contact"?<h/>:<></>}</a>
        </div>

            
        
       
    </div> */}
    {/* <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/aboutus'>About</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
    </ul> */}
    {/* <div className='nav-container'>
      <header>
        <div className='menu' onClick={isopen}>
        <RxHamburgerMenu />
        </div>
      </header>
      {open && (
        <div className='menu-container'>
        <div className='btn_close'onClick={isclose}>X</div>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Portfolio</a>
        <a href=''>Blog</a>
        <a href=''>Contact</a>
      </div>

      )}
      
      Animated Navigation
    </div> */}
    {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutus'>About</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul> */}

    </>
  )
}

export default Navbar