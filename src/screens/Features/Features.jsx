import React from 'react'
import './Features.css'
<<<<<<< HEAD
=======
import Feat1 from '../../assets/carousel-1.jpg'
import Feat2 from '../../assets/bg.jpg'
import Feat3 from '../../assets/carousel-2.jpg'
>>>>>>> 8db37e35ed2a4b724e1006ed853e44cbff3b6cdb

const Features = () => {
    return (
        <div className="features-section">
            <div className="container">
                <div className="feature">
                    <div className="content">
                        <h2>Progression</h2>
                    </div>
<<<<<<< HEAD
                    <img className="overlay" src="/assets/carousel-1.jpg" alt="feature img" />
=======
                    <img className="overlay" src={Feat1} alt="feature img" />
>>>>>>> 8db37e35ed2a4b724e1006ed853e44cbff3b6cdb
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
                <div className="feature">
                    <div className="content">
                        <h2>Workout</h2>
                    </div>
<<<<<<< HEAD
                    <img className="overlay" src="/assets/bg.jpg" alt="feature img" />
=======
                    <img className="overlay" src={Feat2} alt="feature img" />
>>>>>>> 8db37e35ed2a4b724e1006ed853e44cbff3b6cdb
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
                <div className="feature">
                    <div className="content">
                        <h2>Nutrition</h2>
                    </div>
<<<<<<< HEAD
                    <img className="overlay" src="/assets/carousel-2.jpg" alt="feature img" />
=======
                    <img className="overlay" src={Feat3} alt="feature img" />
>>>>>>> 8db37e35ed2a4b724e1006ed853e44cbff3b6cdb
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ex!</p>
                </div>
            </div>
        </div>
    )
}

export default Features