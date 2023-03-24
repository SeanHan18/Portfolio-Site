import React from 'react'; 
import reactDom from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
    return (
        <div id='FlexContainer' >
        <h1 id='MainTitle' >Sean Hannan's Portfolio Site</h1>
            <SocialIcon 
                className='SocialIcon'
                url="https://github.com/SeanHan18" 
                network="github"
                target='_blank'
                rel="noopener"
                aria-label='Github'
                bgColor="#059C49"
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
                bgColor="#059C49"
                fgColor="#ffffff"
            >
            </SocialIcon>
        </div>
    )
    }



export default Home