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
                        <a target="_blank" href="https://github.com/namiqmamedov">
                            <AiFillGithub/>
                        </a>
                        <a target="_blank" href="http://instagram.com/fit_club">
                            <AiOutlineInstagram/>
                        </a>
                       <a target="_blank" href="https://www.linkedin.com/company/fit-club/">
                            <AiOutlineLinkedin/>
                       </a>
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