import React from 'react'
import './Header.scss'
import Logo from '../../assets/Logo.png'
import {Link} from 'react-scroll'



const Header = () => {
    return (
            <div className='header'>
                <div className="logo-index">
                    <img className='logo-main' src={Logo} alt=""/>
                </div>
                <div className="header-main">
                    <ul className='header-menu'>
                        <li>
                        <Link to='plans-container' spy='true' smooth='true'>Home</Link>
                        </li>
                        <li>
                        <Link to='Programs' spy='true' smooth='true'>Programs</Link>
                        </li>
                        <li>
                        <Link to='Reasons' spy='true' smooth='true'>Why Us</Link>
                        </li>
                        <li>
                        <Link to='plans-container' spy='true' smooth='true'>Plans</Link>
                        </li>
                        <li>
                        <Link to='Testimonials' spy='true' smooth='true'>Testimonials</Link>
                        </li>
                    </ul>
                </div>
            </div>

    )
}

export default Header