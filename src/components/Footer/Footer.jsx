import React from 'react'
import './Footer.scss'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>
            <hr/>
            <div className='footer-container'>
                <div className="social-links">
                    <div className="footer">
                        <AiFillGithub/>
                        <AiOutlineInstagram/>
                        <AiOutlineLinkedin/>
                    </div>
                </div>
                <div className="logo-footer">
                    <img src={Logo} alt=""/>
                </div>

                <div className="blur blur-f"></div>
                <div className="blur blur-f1"></div>
            </div>
        </>

    )
}

export default Footer