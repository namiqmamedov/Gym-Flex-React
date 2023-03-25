import React from 'react'
import './Reasons.scss'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                <img src={image4} alt=""/>
            </div>
            <div className="right-r">
                <span>some reasons</span>

                <div>
                    <div>
                        <span className='stroke-text'>why</span>
                        <span>choose us?</span>
                    </div>
                    <div>
                        <img src="" alt=""></img>
                        <span></span>
                    </div>
                    <div><img src="" alt=""/>
                        <span></span>
                    </div>
                    <div><img src="" alt=""/>
                        <span></span>
                    </div>
                    <div><img src="" alt=""/>
                        <span></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Reasons