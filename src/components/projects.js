import React from 'react'; 
import { SocialIcon } from 'react-social-icons';
import ArcadeScreen from '../images/Arcade Screenshot 1.png'
import StrangersScreen from '../images/Strangers Things Screenshot 2.png'


const Projects = () => {
    return (
        <div id='FlexContainerProjects' >
        <div id= 'Project1'>
        <img id= 'ProjectImage' style={{ width:200, height:200}} src={StrangersScreen} alt="Stranger's Things ScreenShot" />
        <h3 id='ProjectTitle' >Stranger's Things</h3>
        <div id='ProjectText'>A Craigslist-lite application that allows users to facilitate the buying and selling of items. Includes the ability for users to register and create accounts, post item offers, and send messages to one another. Developed with HTML5, CSS, React.js, and Express.</div>
        <span id='ProjectText'>Project Github Link:&nbsp;<a
        href='https://github.com/SeanHan18/StrangersThings' target="_blank">Stranger's Things</a></span>
        </div>
        <div id= 'Project2'>
        <h3 id='ProjectTitle' >StaleFish</h3>
        <div id='ProjectText'>A mock digital storefront for purchasing skating goods. Users can create accounts and purchase items through a cart system. Also allows for admin accounts that can create and edit store products. Developed with HTML5, CSS, React.js, Express, and Axios.</div>
        <span id='ProjectText'>Project Github Link:&nbsp;<a
        href='https://github.com/SeanHan18/StaleFish-2' target="_blank">StaleFish</a></span>
        </div>
        <div id= 'Project3'>
        <img id= 'ProjectImage' style={{ width:200, height:200}} src={ArcadeScreen} alt="Arcade ScreenShot" />
        <h3 id='ProjectTitle' >Arcade</h3>
        <div id='ProjectText'>Includes playable Snake and Tic-Tac-Toe games coded in Javascript.</div>
        <span id='ProjectText'>Project Github Link:&nbsp;<a
        href='https://github.com/SeanHan18/arcade' target="_blank">Arcade</a></span>
        </div>
        <div id= 'Project4'>
        <h3 id='ProjectTitle' >To Be Added (Placeholder)</h3>
        <div id='ProjectText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna id volutpat lacus laoreet non curabitur gravida. Aliquam purus sit amet luctus venenatis lectus. Pulvinar mattis nunc sed blandit libero volutpat. A diam maecenas sed enim ut sem. Vitae congue eu consequat ac felis donec. Lectus proin nibh nisl condimentum id venenatis a condimentum. Leo vel fringilla est ullamcorper eget nulla facilisi. Velit egestas dui id ornare arcu. In dictum non consectetur a. Odio pellentesque diam volutpat commodo sed egestas.</div>
        </div>
        </div>
    )
    }

export default Projects