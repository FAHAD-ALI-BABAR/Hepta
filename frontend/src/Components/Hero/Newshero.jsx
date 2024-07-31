import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import "./Newshero.css";
import mountain1 from "/mountain1.webp";
import { Link, NavLink } from 'react-router-dom';

const Newshero = (props) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
    <header className='newsheroes-header'>
    <div className='newsheroes-content'>
        <h2>{props.name}</h2>
        <p>A free template by <span className='hero-span'>Colorlib</span>. Download and share!</p>
        <button>VISIT COLORLIB</button>
    </div>
</header>

    </>
  );
}

export default Newshero;