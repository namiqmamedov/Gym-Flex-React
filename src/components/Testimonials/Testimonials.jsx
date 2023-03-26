import React, { useState } from 'react'
import './Testimonials.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {testimonialsData} from '../../data/testimonialsData'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const transition = {type: 'spring', duration: 3}

  return (
    <div className='Testimonials'>
        <div className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span>
                    {testimonialsData[selected].name}
                </span>{" "}
               - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
                initial={{ opacity: 0, x: -100}}
                transition={{ ...transition, duration: 2}}
                whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100}}
                transition={{ ...transition, duration: 2}}
                whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className='arrows'>
                <AiOutlineArrowLeft
                onClick={() =>{
                    selected===0?setSelected(tLength -1):
                    setSelected((prev)=> prev - 1)
                }}
                />
                <AiOutlineArrowRight
                onClick={() => (
                    selected===tLength -1 ? setSelected(0) : setSelected((prev) => prev + 1)
                )}
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonials