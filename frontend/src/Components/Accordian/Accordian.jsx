import React from 'react'
import './Accordian.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Accordian = () => {
  return (
    <>
      <section className="accordian-sec">
        <div className="accordian-pic" data-aos="slide-up">
          <img src="/hero_1.webp" alt="boy" />
        </div>
        <div className="accordian-txt" data-aos="slide-up">
          <h2 className='accordian-heading'>Welcome To Our Website</h2>
          <p className='accordian-para' data-aos="slide-up">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.<p className='accordian-para paragraph'> A small river named Duden flows by their place and
            supplies it with the necessary regelialia.</p>
          </p>
          <div className='accordian-btn' data-aos="slide-up">
            <div className='media-icon'><FontAwesomeIcon icon={faPlay} /></div>
            <div className='icon-txt'>
                <p>Watch the video</p>
                </div>
        </div>
        </div>
        
      </section>
    </>
  );
}

export default Accordian