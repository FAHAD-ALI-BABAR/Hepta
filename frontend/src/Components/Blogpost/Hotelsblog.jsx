import React from 'react'
import "./Blogpost.css";
const Hotelsblog = () => {
  return (
    <>
    <section className="Blog-post" style={{backgroundColor:"rgb(233, 232, 232)"}}>
        <div className="blog-head" style={{backgroundColor:"rgb(233, 232, 232)"}}>
          <h2 style={{fontSize:80}}>More Hotel Features</h2>
        </div>
        <div className="blog-para" style={{backgroundColor:"rgb(233, 232, 232)"}}>
          <p style={{color:"black"}}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="blog-grid" style={{backgroundColor:"rgb(233, 232, 232)"}}>
          <div className="best-place" style={{height:380}}>
            <div className="place-pic">
              <img style={{ width: 370, height: 250 }} src="/tour5.webp" />
            </div>
            <div className="place-head">
              <h4
                style={{
                  fontSize: 17,
                  letterSpacing: "0.1em",
                  color: "gray",
                  fontWeight: 300,
                }}
              >
                FEBRUARY 26, 2018
              </h4>
              <h3>45 Best Places To Unwind</h3>
            </div>
            
          </div>
          <div className="best-place" style={{height:380}}>
            <div className="place-pic" >
              <img style={{ width: 370, height: 250 }} src="/tour6.webp" />
            </div>
            <div className="place-head">
              <h4
                style={{
                  fontSize: 17,
                  letterSpacing: "0.1em",
                  color: "gray",
                  fontWeight: 300,
                }}
              >
                FEBRUARY 26, 2018
              </h4>
              <h3>45 Best Places To Unwind</h3>
            </div>
            
          </div>
          <div className="best-place" style={{height:380}}>
            <div className="place-pic">
              <img style={{ width: 370, height: 250 }} src="/sofa.webp" />
            </div>
            <div className="place-head">
              <h4
                style={{
                  fontSize: 17,
                  letterSpacing: "0.1em",
                  color: "gray",
                  fontWeight: 300,
                }}
              >
                FEBRUARY 26, 2018
              </h4>
              <h3>45 Best Places To Unwind</h3>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Hotelsblog