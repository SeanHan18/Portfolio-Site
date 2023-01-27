import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client'
import './style.css'
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom'
import {
    Navbar,
    Home,
    About,
    Projects
} from './components';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([])
    const [token, setToken] = useState('');
    const [user, setUser] = useState({})
    const navigate = useNavigate();










    return (
        <div>
            <Navbar/>
            <Routes>
                < Route path='/' element={<Home />} />
                < Route path='/home' element={<Home />} />
                < Route path='/about' element={<About/>} />
                < Route path='/projects' element={<Projects/>} />
                {/* < Route path='/contact' element={<Contact/>} /> */}
            </Routes>
        </div>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);