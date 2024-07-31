import React from 'react'
import "./Tour.css"
import Carousel from "react-elastic-carousel";
import Item from "../Slider/Slider";
import "./Tour.css"

const breakpoints=[{
    width:1,itemsToShow:1},
    {width:550,itemsToShow:1},
    {width:768,itemsToShow:1},
    {width:1200,itemsToShow:1}
];

const Tour = () => {
    
  return (
    <>
      <section className="tour-management">
        <div className='background-clr' style={{height: '43vh',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    top: '90vh',
    borderTop: '15vh solid transparent',
    borderRight: '208.9vh solid #65c0ba',}}></div>
        <div className="tour-head" style={{textAlign:"center", marginTop:30}}>
          <h2>International Tour Management</h2>
        </div>
        <div className="tour-para">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </section>
      <section className='carousel'>
        
        <div  className='carousel-div'>
            <Carousel  breakPoints={breakpoints}>
                <Item style={{ background:"none"}}><img className='carousal-img' src='/tour1.webp'/></Item>
                <Item><img src='/tour2.webp'/></Item>
                <Item><img src='/tour3.webp'/></Item>
                <Item><img src='/tour4.webp'/></Item>
                <Item><img src='/tour5.webp'/></Item>
            </Carousel>
        </div>
      </section>
    </>
  );
}

export default Tour