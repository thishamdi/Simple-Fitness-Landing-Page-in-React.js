import React from 'react'
import './Hero.css'
<<<<<<< HEAD
=======
import IMG from '../../assets/header.jpg'
>>>>>>> 8db37e35ed2a4b724e1006ed853e44cbff3b6cdb

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <h2><span>WORK HARD</span> <br /> FOR EVERY SUCCESS</h2>
                <p>Start by taking inspirations, continue it to give inspirations</p>
            </div>
<<<<<<< HEAD
            <img src="/assets/header.jpg" alt="img" />
=======
            <img src={IMG} alt="" />
>>>>>>> 8db37e35ed2a4b724e1006ed853e44cbff3b6cdb
        </div>
    )
}

export default Hero