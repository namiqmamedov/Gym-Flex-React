import React from 'react'
import './Programs.scss'
import {programsData} from '../../data/programsData'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div className='category'>
                        {program.image}
                        <span className='card-title'>{program.heading}</span>
                        <span className='card-subtitle'>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                           <AiOutlineArrowRight/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs