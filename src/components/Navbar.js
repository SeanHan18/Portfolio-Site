import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Logo from '../images/Logo.jpg'



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
                <img style={{ width:200, height:200}} src={Logo} alt="Sean Hannan" />
                <Link to='/home'  className={homeHovered ? 'selectednav' : 'navlink'} onMouseEnter={toggleHomeHover} onMouseLeave={toggleHomeHover}>HOME</Link>
                <Link to='/about' className={aboutHovered ? 'selectednav' : 'navlink'} onMouseEnter={toggleAboutHover} onMouseLeave={toggleAboutHover}>ABOUT</Link>
                <Link to='/projects' className={projectsHovered ? 'selectednav' : 'navlink'} onMouseEnter={toggleProjectsHover} onMouseLeave={toggleProjectsHover}>PROJECTS</Link>
                <Link to='/contact' className={contactHovered ? 'selectednav' : 'navlink'} onMouseEnter={toggleContactHover} onMouseLeave={toggleContactHover}>CONTACT</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;