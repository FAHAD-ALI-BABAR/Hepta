import React from 'react'
import './Experience.css'
import food from "/food.svg";

const Experience = () => {
  return (
    <>
      <section className="experience-sec" data-aos="slide-up">
        <div className="exp-head" data-aos="slide-up">
          <h2 className="exp-head1" data-aos="slide-up">Experience Once In Your Life Time</h2>
          <p className="exp-para" data-aos="slide-up">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="exp-grid" data-aos="slide-up">
          <div className="food" data-aos="slide-up">
            <div className="food-pic">
              <img src={food} />
            </div>
            <div className="food-head">
              <h3>Good Foods</h3>
            </div>
            <div className="food-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="travel" data-aos="slide-up">
          <div className="food-pic">
              <img src="/travel.svg" />
            </div>
            <div className="food-head">
              <h3>Travel Anywhere</h3>
            </div>
            <div className="food-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="airplane" data-aos="slide-up">
          <div className="food-pic">
              <img src="/airplane.svg" />
            </div>
            <div className="food-head">
              <h3>Airplane</h3>
            </div>
            <div className="food-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="beach" data-aos="slide-up">
          <div className="food-pic">
              <img src="/beach.svg" />
            </div>
            <div className="food-head">
              <h3>Beach Resort</h3>
            </div>
            <div className="food-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="mountain" data-aos="slide-up">
          <div className="food-pic">
              <img src="/mountains.svg" />
            </div>
            <div className="food-head">
              <h3>Mountain Climbing</h3>
            </div>
            <div className="food-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="hot-air-ballon" data-aos="slide-up">
          <div className="food-pic">
              <img src="/ballon.svg" />
            </div>
            <div className="food-head">
              <h3>Hot Air Balloon</h3>
            </div>
            <div className="food-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Experience