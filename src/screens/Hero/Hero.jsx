import React from 'react'
import './Hero.css'
import IMG from '../../assets/header.jpg'

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <h2><span>WORK HARD</span> <br /> FOR EVERY SUCCESS</h2>
                <p>Start by taking inspirations, continue it to give inspirations</p>
            </div>
            <img src={IMG} alt="" />
        </div>
    )
}

export default Hero