import React from 'react'
import './Header.scss'
import Logo from '../../assets/Logo.png'


const Header = () => {
    return (
            <div className='header'>
                <div className="logo-index">
                    <img className='logo-main' src={Logo} alt=""/>
                </div>
                <div className="header-main">
                    <ul className='header-menu'>
                        <li>Home</li>
                        <li>Programs</li>
                        <li>Why us</li>
                        <li>Plans</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>

    )
}

export default Header