import React from 'react'
import Header from '../Header/Header'
import './Hero.scss'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import { slide as Menu } from 'react-burger-menu'
import './Hamburger.scss'


const Hero = () => {

    const transition = {type: 'spring', duration: 3}

    return (
        <div className='hero'>
          <div className="blur hero-blur"></div>
            <div className='left-h'>
                <Header/>
                <div className='the-best-ad'>
                    <motion.div
                        initial={{left: '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your
                            life to fullest
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            
            <div className='right-h'>
                <div className="bg-color"></div>
                <button className='btn'>
                    Join Now
                </button>
                <motion.div
                initial={{right: "-1rem"}}
                whileInView={{right: '4rem'}}
                 transition={transition }
                 className="heart-rate">
                    <img src={Heart}/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                    </motion.div>

                <img src={hero_image} alt="" className='hero-image'/>
                <motion.img
                initial={{right: '11rem'}}
                whileInView={{right: '20rem'}}
                transition={transition}
                src={hero_image_back} alt="" className='hero-image-back'/>

                <div className="calories">
                    <img src={Calories} alt=""/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>

                <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>


            </div>
        </div>
    )
}

export default Hero