import React from 'react'
import './Features.css'

const Features = () => {
    return (
        <div className="features-section">
            <div className="container">
                <div className="feature">
                    <div className="content">
                        <h2>Progression</h2>
                    </div>
                    <img className="overlay" src="/assets/carousel-1.jpg" alt="feature img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
                <div className="feature">
                    <div className="content">
                        <h2>Workout</h2>
                    </div>
                    <img className="overlay" src="/assets/bg.jpg" alt="feature img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
                <div className="feature">
                    <div className="content">
                        <h2>Nutrition</h2>
                    </div>
                    <img className="overlay" src="/assets/carousel-2.jpg" alt="feature img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
            </div>
        </div>
    )
}

export default Features