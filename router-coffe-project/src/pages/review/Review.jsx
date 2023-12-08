import React from 'react'
import './review.css'



const Review = () => {
  return (
    // <h1>review page</h1>

    <>
      <section className="section review" id="review">
        <div className="review-container container">
            <div className="review-text">
                <h4 className="section-subtitle"><i>Reviews</i></h4>
                <h2 className="section-title">What Clients Says</h2>
                <p className="section-description">Some reviews that customer said about coffee services and business Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam totam repellat, labore commodi exercitationem!</p>
            </div>

            <div className="tesitmonial swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="testi-content swiper-slide flex">
                        <img src="images/profileImg2.jpg" alt="not found" className="review-img"/>
                        <p className="review-quote">Your coffee hits the spot every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word!</p>
                        <i className='bx bxs-quote-alt-left quote-icon'></i>

                        <div className="testi-personDetails flex">
                            <span className="name">Md Arif Khondokar</span>
                            <span className="job">MERN stack Developer</span>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
      </section>
    </>


  )
}

export default Review