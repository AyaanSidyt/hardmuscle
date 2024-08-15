import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground); // Cleanup the event listener
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt="" />
            </Link>
            <input className="menu-btn" type='checkbox' id='menu-btn' />
            <label htmlFor="menu-btn" className='nav-icon'><span className=''></span></label>
            <ul className='menu'>
                <li><Link to='main'>Header</Link></li>
                <li><Link to='features'>Features</Link></li>
                <li><Link to='offer'>Offer</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}
