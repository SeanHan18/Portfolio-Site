import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [homeHovered, setHomeHovered] = useState(false);
    const toggleHomeHover = () => setHomeHovered(!homeHovered);
    const [aboutHovered, setAboutHovered] = useState(false);
    const toggleAboutHover = () => setAboutHovered(!aboutHovered);
    const [projectsHovered, setProjectsHovered] = useState(false);
    const toggleProjectsHover = () => setProjectsHovered(!projectsHovered);
    const [contactHovered, setContactHovered] = useState(false);
    const toggleContactHover = () => setContactHovered(!contactHovered)
    return (
        <header>
            <nav className='nav-bar'>
                <ul id='navlist' > 
                <Link to='/home'  className={homeHovered ? 'selectednav' : 'navlink'} onMouseEnter={toggleHomeHover} onMouseLeave={toggleHomeHover}>Home</Link>
                <Link to='/about' className={aboutHovered ? 'selectednav' : 'navlink'} onMouseEnter={toggleAboutHover} onMouseLeave={toggleAboutHover}>About</Link>
                <Link to='/projects' className={projectsHovered ? 'selectednav' : 'navlink'} onMouseEnter={toggleProjectsHover} onMouseLeave={toggleProjectsHover}>Projects</Link>
                <Link to='/contact' className={contactHovered ? 'selectednav' : 'navlink'} onMouseEnter={toggleContactHover} onMouseLeave={toggleContactHover}>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;