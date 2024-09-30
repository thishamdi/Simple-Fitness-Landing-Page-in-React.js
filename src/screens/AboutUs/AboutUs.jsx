import React from 'react'
import './AboutUs.css'
import IMG from '../../assets/about.jpg'

const AboutUs = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="left">
                    <img src={IMG} alt="about us image" />
                    <div className='play-button'>
                        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                    </div>
                </div>
                <div className="right">
                    <h2><span className="experience">10 Years</span> Experience</h2>
                    <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs