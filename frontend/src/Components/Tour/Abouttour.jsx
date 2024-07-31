import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "../Slider/Slider";
import "./HotelTour.css"


// const breakpoints=[{
//     width:1,itemsToShow:1},
//     {width:550,itemsToShow:1},
//     {width:768,itemsToShow:1},
//     {width:1200,itemsToShow:1}
// ];
// const Abouttour = () => {
//   return (
//     <>
//      <section className="tour-management" style={{marginTop:200}}>
//         <div className='background-clr' style={{height: '43vh',
//     width: '100%',
//     position: 'absolute',
//     zIndex: -1,
//     top: '90vh',
//     borderTop: '15vh solid transparent',
//     borderRight: '208.9vh solid rgb(233, 232, 232)',}}></div>
//         <div className="tour-head" style={{textAlign:"center"}}>
//           <h2>Hotel Gallery</h2>
//         </div>
//         <div className="tour-para">
//           <p>
//             Far far away, behind the word mountains, far from the countries
//             Vokalia and Consonantia, there live the blind texts. Separated they
//             live in Bookmarksgrove right at the coast of the Semantics, a large
//             language ocean.
//           </p>
//         </div>
//       </section>
//       <section className='carousel'>
        
//         <div className='carousel-div'>
//             <Carousel breakPoints={breakpoints}>
//                 <Item><img className='carousal-img' src='/tour1.webp'/></Item>
//                 <Item><img src='/tour2.webp'/></Item>
//                 <Item><img src='/tour3.webp'/></Item>
//                 <Item><img src='/tour4.webp'/></Item>
//                 <Item><img src='/tour5.webp'/></Item>
//             </Carousel>
//         </div>
//       </section>
//     </>
    
//   )
// }

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

const Abouttour = () => {
  return (
      <>
          <section className="tour-management">
              
              <div className="tour-head">
                  <h2> Gallery</h2>
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
  );
};


export default Abouttour