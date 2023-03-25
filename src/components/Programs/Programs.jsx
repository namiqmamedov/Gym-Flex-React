import React from 'react'
import './Programs.scss'
import {programsData} from '../../data/programsData'

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
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            {/* <img src={} alt="" /> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs