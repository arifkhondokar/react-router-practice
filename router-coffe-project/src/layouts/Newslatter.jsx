import React from 'react'
import './mainlayout.css'

const Newslatter = () => {
  return (
    // <h1>newslatter section</h1>
    <>
      <section className="section newsletter">
        <div className="newletter-container container">
            <a href="#" className="logo-content flex">
                <i className="fa-solid fa-mug-hot logo-icon"></i>
                <span className="logo-text">Coffee.</span>
            </a>

            <p className="section-description">This is the perfect place to find a nice and cozy spot to sip some. You'll find the Java Jungle, Coffee Bean and more shops right in this website.</p>

            <div className="newsletter-inputBox">
              <input type="email" placeholder="emai@example.com" className="newletter-input"/>
              <button className="button newsletter-button">Subscribe</button>
            </div>

            <div className="newsletter media-icons flex">
                <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/accounts/login"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/login"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.youtube.com/login"><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    </section>
    </>
    

  )
}

export default Newslatter