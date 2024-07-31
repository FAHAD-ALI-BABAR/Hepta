import React, { useState } from 'react'
import "./Blogpost.css";

const Galleryblog = () => {
    const [rating, setRating] = useState(4);
  return (
    <>
    {/* <section className="top-destinations">
      <div className="dest-head">
          <h2 style={{fontSize:80}}>Recent Blog Post</h2>
        </div>
        <div className="dest-para">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="dest-cards" style={{margin:0, padding:0,width:"100%", height:210}}>
          <div className="cards-details" style={{ height:200, margin:0,padding:0}}>
            <img style={{width: 255, height: 170}} src="/tour5.webp"/>
            
            
            
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/sofa.webp"/>
          
          
          
            
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/tour6.webp"/>
          
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/mountain.webp"/>
          
          
          </div>
        </div>
        <div className="dest-cards" style={{margin:0, padding:0,width:"100%", height:210,}}>
          <div className="cards-details" style={{ height:200, margin:0,padding:0}}>
            <img style={{width: 255, height: 170}} src="/tour5.webp"/>
            
            
            
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/sofa.webp"/>
          
          
          
            
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/tour6.webp"/>
          
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/mountain.webp"/>
          
          
          </div>
        </div>
        <div className="dest-cards" style={{dispaly:"flex", gap:200,margin:0, padding:0,width:"100%", height:310}}>
          <div className="cards-details" style={{width:400, height:270, margin:0,padding:0}}>
            <img style={{width: 400, height: 270}} src="/tour5.webp"/>
            
            
            
          </div>
          
          <div className="cards-details" style={{height:270, width:400}}>
          <img style={{width: 400, height: 270}} src="/tour6.webp"/>
          
          </div>
          
        </div>
        <div className="dest-cards" style={{margin:0, padding:0,width:"100%", height:210}}>
          <div className="cards-details" style={{ height:200, margin:0,padding:0}}>
            <img style={{width: 255, height: 170}} src="/tour5.webp"/>
            
            
            
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/sofa.webp"/>
          
          
          
            
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/tour6.webp"/>
          
          </div>
          <div className="cards-details" style={{height:200}}>
          <img style={{width: 255, height: 170}} src="/mountain.webp"/>
          
          
          </div>
        </div>
       
        
        
      </section> */}
      <section className="top-destinations">
  <div className="dest-head">
    <h2 className="dest-title">Recent Blog Post</h2>
  </div>
  <div className="dest-para">
    <p>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    </p>
  </div>
  <div className="dest-cards">
    <div className="cards-details">
      <img className="card-image" src="/tour5.webp" alt="Tour 5" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/sofa.webp" alt="Sofa" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/tour6.webp" alt="Tour 6" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/mountain.webp" alt="Mountain" />
    </div>
  </div>
  <div className="dest-cards">
    <div className="cards-details">
      <img className="card-image" src="/tour5.webp" alt="Tour 5" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/sofa.webp" alt="Sofa" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/tour6.webp" alt="Tour 6" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/mountain.webp" alt="Mountain" />
    </div>
  </div>
  <div className="dest-cards ">
    <div className="cards-details long">
      <img className="card-image" src="/tour5.webp" alt="Tour 5" />
    </div>
    <div className="cards-details long">
      <img className="card-image" src="/tour6.webp" alt="Tour 6" />
    </div>
  </div>
  <div className="dest-cards">
    <div className="cards-details">
      <img className="card-image" src="/tour5.webp" alt="Tour 5" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/sofa.webp" alt="Sofa" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/tour6.webp" alt="Tour 6" />
    </div>
    <div className="cards-details">
      <img className="card-image" src="/mountain.webp" alt="Mountain" />
    </div>
  </div>
</section>


    
    </>
  )
}

export default Galleryblog