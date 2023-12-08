import React from 'react'
import './about.css'



const About = () => {
  return (
    // <h1>about page</h1>

    <>
      <section className="section about" id="about">
          <div className="about-content container">
              <div className="about-imageContent">
                  <img src="images/aboutImg.jpg" alt="not found" className="about-img"/>

                  <div className="aboutImg-textBox">
                      <i className='bx bx-heart heart-icon flex'></i>
                      <p className="content-description">I really love the Cappucino. The coffee war very smooth.</p>
                  </div>
              </div>

              <div className="about-details">
                  <div className="about-text">
                      <h4 className="content-subtitle"><i>Our coffee Shop</i></h4>
                      <h2 className="content-title">We Combine Classics <br/> and Modernity</h2>
                      <p className="content-description">We appreciate your trust greatly. 
                              Our clients choose us and our products because theyknow we are the best.</p>

                      <ul className="about-lists flex">
                          <li className="about-list">Cappucino</li>
                          <li className="about-list dot">.</li>
                          <li className="about-list">Late</li>
                          <li className="about-list dot">.</li>
                          <li className="about-list">Arabica</li>
                      </ul>
                  </div>

                  <div className="about-buttons flex">
                      <button className="button">About Us</button>
                      <a href="#" className="about-link flex">
                          <span className="link-text">see more</span>
                          <i className="fa-solid fa-arrow-right about-arrowIcon"></i>
                      </a>
                  </div>
              </div>
          </div>
      </section>
    </>

  )
}

export default About