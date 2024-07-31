import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "../Slider/Slider";
import "./HotelTour.css"


const breakpoints=[{
    width:1,itemsToShow:1},
    {width:550,itemsToShow:1},
    {width:768,itemsToShow:1},
    {width:1200,itemsToShow:1}
];
const Hotelstour = () => {
    
  return (
    <>
     <section className="tour-management">
              
              <div className="tour-head">
                  <h2>Hotel Tour</h2>
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
          
          
          <section className="carousel">
          
          
              <div className="carousel-div">
                  <Carousel breakPoints={breakpoints}>
                      <Item><img className="carousel-img" src="/tour1.webp" alt="tour1" /></Item>
                      <Item><img className="carousel-img" src="/tour2.webp" alt="tour2" /></Item>
                      <Item><img className="carousel-img" src="/tour3.webp" alt="tour3" /></Item>
                      <Item><img className="carousel-img" src="/tour4.webp" alt="tour4" /></Item>
                      <Item><img className="carousel-img" src="/tour5.webp" alt="tour5" /></Item>
                  </Carousel>
              </div>
          </section>
    </>
  )
}

export default Hotelstour