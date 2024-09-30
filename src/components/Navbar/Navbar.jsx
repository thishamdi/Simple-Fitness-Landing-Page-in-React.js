import React, { useState } from 'react'
import './Navbar.css'
import Menu from '../../assets/icons/menu.svg'
import Close from '../../assets/icons/close.svg'
import Logo from "../../assets/logo.png"
import { navLinks } from '../../data'
import MobileMenu from '../MobileMenu/MobileMenu'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [changeColor, setChangeColor] = useState(false)

    const scrollHandler = () => {
        if (window.scrollY >= 1) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    window.addEventListener('scroll', scrollHandler)

    return (
        <nav className={changeColor ? "navbar bg-navbar" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <a href="/"><img src={Logo} alt="Logo" /></a>
                </div>

                <div className="menu">
                    <ul>
                        {navLinks.map(item => (
                            <li key={item.id}><a href={item.link}>{item.text}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <img src={Close} alt="close icon" /> : <img src={Menu} alt="menu icon" />}
                </div>
            </div>

            {isMenuOpen ? <MobileMenu /> : <></>}

        </nav>

    )
}

export default Navbar