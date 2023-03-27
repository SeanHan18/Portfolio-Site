import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className='nav-bar'>
                <ul id='navlist' > 
                <Link to='/home' className='navlink'>Home</Link>
                <Link to='/about' className='navlink'>About</Link>
                <Link to='/projects' className='navlink'>Projects</Link>
                <Link to='/contact' className='navlink'>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;