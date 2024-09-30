import React from 'react'
import './Features.css'
import Feat1 from '../../assets/carousel-1.jpg'
import Feat2 from '../../assets/bg.jpg'
import Feat3 from '../../assets/carousel-2.jpg'

const Features = () => {
    return (
        <div className="features-section">
            <div className="container">
                <div className="feature">
                    <div className="content">
                        <h2>Progression</h2>
                    </div>
                    <img className="overlay" src={Feat1} alt="feature img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
                <div className="feature">
                    <div className="content">
                        <h2>Workout</h2>
                    </div>
                    <img className="overlay" src={Feat2} alt="feature img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
                <div className="feature">
                    <div className="content">
                        <h2>Nutrition</h2>
                    </div>
                    <img className="overlay" src={Feat3} alt="feature img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
            </div>
        </div>
    )
}

export default Features