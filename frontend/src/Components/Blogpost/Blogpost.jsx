import React, { useState } from "react";
import "./Blogpost.css";

const Blogpost = () => {
  const [rating, setRating] = useState(4);
  return (
    <>
    <section className="blogPost">
  <div className="blogHead">
    <h2 className="blogHeading">Recent Blog Post</h2>
  </div>
  <div className="blogPara">
    <p className="blogParagraph">
      Far far away, behind the word mountains, far from the countries
      Vokalia and Consonantia, there live the blind texts. Separated they
      live in Bookmarksgrove right at the coast of the Semantics, a large
      language ocean.
    </p>
  </div>
  <div className="blogGrid">
    <div className="blogItem">
      <div className="itemPic">
        <img src="/tour5.webp" alt="Tour Image" />
      </div>
      <div className="itemHead">
        <h4 className="itemDate">FEBRUARY 26, 2018</h4>
        <h3 className="itemTitle">45 Best Places To Unwind</h3>
      </div>
      <div className="itemPara">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
    </div>
    <div className="blogItem">
      <div className="itemPic">
        <img src="/tour6.webp" alt="Tour Image" />
      </div>
      <div className="itemHead">
        <h4 className="itemDate">FEBRUARY 26, 2018</h4>
        <h3 className="itemTitle">45 Best Places To Unwind</h3>
      </div>
      <div className="itemPara">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
    </div>
    <div className="blogItem">
      <div className="itemPic">
        <img src="/sofa.webp" alt="Sofa Image" />
      </div>
      <div className="itemHead">
        <h4 className="itemDate">FEBRUARY 26, 2018</h4>
        <h3 className="itemTitle">45 Best Places To Unwind</h3>
      </div>
      <div className="itemPara">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
    </div>
  </div>
</section>

       {/* <section className="Blog-post">
        <div className="blog-head">
          <h2 className="blog-heading">Recent Blog Post</h2>
        </div>
        <div className="blog-para">
          <p className="blogparagraph">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="blog-grid">
          <div className="best-place">
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
            <div className="place-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="best-place">
            <div className="place-pic">
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
            <div className="place-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="best-place">
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
            <div className="place-para">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </section>  */}
      <section className="customer-sec">
  <div className="customer-head">
    <h2 className="customer-title">Happy Customer</h2>
  </div>
  <div className="customer-grid-wrapper">
    <div className="customer-card">
      <div className="customer-pic">
        <img className="customer-img" src="/customer1.webp" alt="Customer 1" />
      </div>
      <div className="customer-data">
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.”
        </p>
      </div>
      <div className="customer-name">
        <p>— Clare Gupta</p>
      </div>
    </div>
    <div className="customer-card">
      <div className="customer-pic">
        <img className="customer-img" src="/customer2.webp" alt="Customer 2" />
      </div>
      <div className="customer-data">
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.”
        </p>
      </div>
      <div className="customer-name">
        <p>— Clare Gupta</p>
      </div>
    </div>
    <div className="customer-card">
      <div className="customer-pic">
        <img className="customer-img" src="/customer3.webp" alt="Customer 3" />
      </div>
      <div className="customer-data">
        <p>
          “Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.”
        </p>
      </div>
      <div className="customer-name">
        <p>— Clare Gupta</p>
      </div>
    </div>
  </div>
</section>
















       {/* <section className="customer-sec">
        <div className="customer-head">
          <h2 style={{fontSize:80}}>Happy Customer</h2>
        </div>
        <div className="customergrid1">
        <div className="customer-grid">
          <div className="customer-pic">
            <img style={{width:70, borderRadius:"50%", padding:8}} src="/customer1.webp" />
          </div>
          <div className="customer-data">
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
          <div className="customer-name">
            <p>— Clare Gupta</p>
          </div>
        </div>
        <div className="customer-grid">
          <div className="customer-pic">
            <img style={{width:70 ,borderRadius:"50%", padding:8}} src="/customer2.webp" />
          </div>
          <div className="customer-data">
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
          <div className="customer-name">
            <p>— Clare Gupta</p>
          </div>
        </div>
        <div className="customer-grid">
          <div className="customer-pic">
            <img style={{width:70, borderRadius:"50%", padding:8}} src="/customer3.webp" />
          </div>
          <div className="customer-data">
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
          <div className="customer-name">
            <p>— Clare Gupta</p>
          </div>
        </div>
        </div>
      </section>  */}



       {/* <section className="top-destinations">
      <div className="destination-head">
          <h2 style={{fontSize:80}}>Recent Blog Post</h2>
        </div>
        <div className="destination-para">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="destination-cards">
          <div className="cards-details">
            <img style={{width: 255, height: 170}} src="/tour5.webp"/>
            <h2>Food & Wines</h2>
            <div className="stars">
            <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              defaultChecked={ratingValue === 4}
            />
            <span
              className="star"
              style={{
                color: ratingValue <= rating ? "#65c0ba" : "#ddd"
              }}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
              
              <div className="reviews">
                <h6>3329 reviews</h6>
              </div>
            </div>
          </div>
          <div className="cards-details">
          <img style={{width: 255, height: 170}} src="/sofa.webp"/>
          <h2>Food & Wines</h2>
          <div className="stars">
            <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span
              className="star"
              style={{
                color: ratingValue <= rating ? "#65c0ba" : "#ddd"
              }}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
    <div className="reviews">
                <h6>3329 reviews</h6>
              </div>
            </div>
          
            
          </div>
          <div className="cards-details">
          <img style={{width: 255, height: 170}} src="/tour6.webp"/>
          <h2>Food & Wines</h2>
          <div className="stars">
            <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span
              className="star"
              style={{
                color: ratingValue <= rating ? "#65c0ba" : "#ddd"
              }}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
    <div className="reviews">
                <h6>3329 reviews</h6>
              </div>
            
          
            
          </div>
          </div>
          <div className="cards-details">
          <img style={{width: 255, height: 170}} src="/mountain.webp"/>
          <h2>Food & Wines</h2>
          <div className="stars">
            <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span
              className="star"
              style={{
                color: ratingValue <= rating ? "#65c0ba" : "#ddd"
              }}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
    <div className="reviews">
                <h6>3329 reviews</h6>
              </div>
            
          
            
          </div>
          
          </div>
        </div>
      </section>   */}

<section className="top-destinations">
  <div className="dest-head">
    <h2>Recent Blog Post</h2>
  </div>
  <div className="dest-para">
    <p>
      Far far away, behind the word mountains, far from the countries
      Vokalia and Consonantia, there live the blind texts. Separated they
      live in Bookmarksgrove right at the coast of the Semantics, a large
      language ocean.
    </p>
  </div>
  <div className="dest-cards">
    <div className="cards-details">
      <img className="card-image" src="/tour5.webp" alt="Food & Wines"/>
      <h2>Food & Wines</h2>
      <div className="stars">
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  defaultChecked={ratingValue === 4}
                />
                <span
                  className="star"
                  style={{ color: ratingValue <= rating ? "#65c0ba" : "#ddd" }}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
        <div className="reviews">
          <h6>3329 reviews</h6>
        </div>
      </div>
    </div>
    <div className="cards-details">
      <img className="card-image" src="/sofa.webp" alt="Food & Wines"/>
      <h2>Food & Wines</h2>
      <div className="stars">
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <span
                  className="star"
                  style={{ color: ratingValue <= rating ? "#65c0ba" : "#ddd" }}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
        <div className="reviews">
          <h6>3329 reviews</h6>
        </div>
      </div>
    </div>
    <div className="cards-details">
      <img className="card-image" src="/tour6.webp" alt="Food & Wines"/>
      <h2>Food & Wines</h2>
      <div className="stars">
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <span
                  className="star"
                  style={{ color: ratingValue <= rating ? "#65c0ba" : "#ddd" }}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
        <div className="reviews">
          <h6>3329 reviews</h6>
        </div>
      </div>
    </div>
    <div className="cards-details">
      <img className="card-image" src="/mountain.webp" alt="Food & Wines"/>
      <h2>Food & Wines</h2>
      <div className="stars">
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <span
                  className="star"
                  style={{ color: ratingValue <= rating ? "#65c0ba" : "#ddd" }}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
        <div className="reviews">
          <h6>3329 reviews</h6>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  );
};

export default Blogpost;
