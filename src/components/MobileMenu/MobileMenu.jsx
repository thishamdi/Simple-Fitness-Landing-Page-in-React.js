import React from 'react'
import './MobileMenu.css'
import { navLinks } from '../../data'

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <ul>
                {navLinks.map(item => (
                    <li key={item.id}><a href={item.link}>{item.text}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default MobileMenu