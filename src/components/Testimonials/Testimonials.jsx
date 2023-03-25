import React, { useState } from 'react'
import './Testimonials.scss'
import {testimonialsData} from '../../data/testimonialsData'

const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

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
            <img src={testimonialsData[selected].image} alt="" />

            {/* <div className='arrows'>
                <img src={leftArrow} alt="" />
                <img src={rightArrow} alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default Testimonials