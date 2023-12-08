import React from 'react'
import './mainlayout.css'


const Footer = () => {
  return (

    // <h1>footer section</h1>
   
    <>
     <footer className="section footer">
        <div className="footer-container container">
            <div className="footer-content">
              <a className="logo-content flex">
                {/* <i className="fa-solid fa-mug-hot logo-icon"></i> */}
                <span className="logo-text">Coffee.</span>
              </a>

              <p className="content-description">Coffee is a cafe that serve many variant of coffee and other dishes with very comfortable place.</p>

              <div className="footer-location flex">
                <i className='bx bx-map map-icon'></i>
                  
                <div className="location-text">
                  USA Californa 65 South Fifth St.Sicklerville, NJ 08081
                </div>
              </div>
            </div>

            <div className="footer-linkContent">
              <ul className="footer-links">
                  <h4 className="footerLinks-title">Facility</h4>

                  <li><a href="#" className="footer-link">Private Room</a></li>
                  <li><a href="#" className="footer-link">Meeting Room</a></li>
                  <li><a href="#" className="footer-link">Event Room</a></li>
                  <li><a href="#" className="footer-link">Creative Studio</a></li>
                  <li><a href="#" className="footer-link">Custom Room</a></li>
              </ul>
              <ul className="footer-links">
                  <h4 className="footerLinks-title">Facility</h4>

                  <li><a href="#" className="footer-link">Coffee</a></li>
                  <li><a href="#" className="footer-link">Beverages</a></li>
                  <li><a href="#" className="footer-link">Dishes</a></li>
              </ul>
              <ul className="footer-links">
                  <h4 className="footerLinks-title">Support</h4>

                  <li><a href="#" className="footer-link">About Us</a></li>
                  <li><a href="#" className="footer-link">FAQs</a></li>
                  <li><a href="#" className="footer-link">Private Policy</a></li>
                  <li><a href="#" className="footer-link">Help Us</a></li>
              </ul>
            </div>
        </div>
        <div className="footer-copyRight">&#169; Coding. All rigths reserved</div>
    </footer>
    
    </>

   
  )
}

export default Footer