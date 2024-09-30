import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Hero, GymClass, AboutUs, Features } from '../screens'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <GymClass />
            <AboutUs />
            <Features />
            <Footer />
        </div>
    )
}

export default Home