import React from 'react'
import './home.css'



const Home = () => {
  return (
    // <h1>home page</h1>


    <>
    <section className="home" id="home">
        <div className="home-content">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="./images/homeImg2.jpg" alt="not found" className="home-img"/>

                    <div className="home-details">
                        <div className="home-text">
                            <h4 className="homeSubtitle">We really like what we do.</h4>
                            <h2 className="homeTitle">Coffee Beans with a <br/> Perfect Aroma</h2>
                        </div>

                        <button className="button">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
    
      
  )
}

export default Home