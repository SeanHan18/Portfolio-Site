import React from 'react';
import { SocialIcon } from 'react-social-icons';

const About = () => {
    return (
        <div id='FlexContainerAbout' >
        <div id='AboutHeader'>Hi, I'm Sean Hannan</div>
        <div id='AboutText' >I'm a Web Developer that's proficient in Javascript, Node, React, Git, Express, HTML5 and CSS.</div>
        <div id='FlexContainerIcons'>
            <SocialIcon 
                className='SocialIcon'
                url="https://github.com/SeanHan18" 
                network="github"
                target='_blank'
                rel="noopener"
                aria-label='Github'
                bgColor="#69b751"
                fgColor="#ffffff"
            >
            </SocialIcon>
            <SocialIcon
                className='SocialIcon'
                url="https://www.linkedin.com/in/hannanseanr/" 
                network="linkedin"
                target='_blank'
                rel="noopener"
                aria-label='LinkedIn'
                bgColor="#69b751"
                fgColor="#ffffff"
            >
            </SocialIcon>
            </div>
        </div>
    )
    }

export default About