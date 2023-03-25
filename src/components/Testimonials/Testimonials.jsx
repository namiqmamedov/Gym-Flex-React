import React, { useState } from 'react'
import './Testimonials.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
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
            <div></div>
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