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
import {Link} from 'react-scroll'
import NumberCounter from 'number-counter'


const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;
    const mainWidth = window.innerWidth>=768 ? true : false;

    return (
        <div className='hero'>
          <div className="blur hero-blur"></div>
            <div className='left-h'>
                <Header/>
                <div className='the-best-ad'>
                    <motion.div
                        initial={{left: mobile? "78px": '238px' }}
                        whileInView={{left: '5px'}}
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
                        <span>
                          <NumberCounter start={100} end={140} delay='4' preFix="+"/>
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                    <span>
                        <NumberCounter start={800} end={978} delay='4' preFix="+"/>
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                    <span>
                        <NumberCounter start={32} end={50} delay='4' preFix="+"/>
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
                
                <Menu>
                <a id="home" className="menu-item" href="/">
                  <Link to='hero' spy='true' smooth='true'>Home</Link>
                </a>
                <a id="about" className="menu-item" href="/">
                  <Link to='Programs' spy='true' smooth='true'>Programs</Link>
                </a>
                <a id="plan" className="menu-item" href="/">
                  <Link to='plans-container' spy='true' smooth='true'>Plans</Link>
                </a>
                <a id="testimonial" className="menu-item" href="/">
                   <Link to='Testimonials' spy='true' smooth='true'>Testimonial</Link>
                </a>
                </Menu>
            </div>
            
            <div className='right-h'>
                <div className="bg-color"></div>
                <button className='btn'>
                    Join Now
                </button>
                <motion.div
                initial={{right: "-1rem"}}
                whileInView={{right: mainWidth? "1rem": '4rem'}}
                 transition={transition }
                 className="heart-rate">
                    <img src={Heart}/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="" className='hero-image'/>
                <motion.img
                initial={{left: "-1rem"}}
                whileInView={{left: mainWidth? "-12.5rem": '4rem'}}
                 transition={transition }
                src={hero_image_back} alt="" className='hero-image-back'/>

                <motion.div
                 whileInView={{left: mainWidth? "-17.4rem": '4rem'}}
                transition={transition}
                 className="calories">
                    <img src={Calories} alt=""/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
             </motion.div>
            </div>
        </div>
    )
}

export default Hero