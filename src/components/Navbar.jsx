import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    const handleClick = () => setClick(!click);
    
    return (
        <div className = "navbar">
            <div className="navbar-container">
                <Link to= "/" className="navbar-logo" onClick ={closeMobileMenu} >
                    RECursion  
                </Link>
                <div className="menu-icon" onClick = {handleClick}>
                    <i className= {click ? 'fas fa-times' :  'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick= {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/teams' className="nav-links" onClick= {closeMobileMenu}>
                            Teams
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/gallery' className="nav-links" onClick= {closeMobileMenu}>
                            Gallery
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
