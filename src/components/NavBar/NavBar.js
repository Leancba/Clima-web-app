import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
    return (
        
        <header className="navbar">
            <img className='image' src='data:image/png;base64,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' width="90" height="80" />
                    <div className="list-item">
                                <div className='home'>
                                    <NavLink exact to="/" >Home</NavLink>
                                </div>
                                 <div className='favs' >
                                     <NavLink to="/favs" >Favoritas</NavLink>
                                </div>
                    </div>
        </header>
    )
    
}