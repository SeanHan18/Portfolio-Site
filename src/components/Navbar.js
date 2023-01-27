import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className='nav-bar'>
                <ul className='navlist'> 
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;