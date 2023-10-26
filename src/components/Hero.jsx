import React from 'react'
import hero1 from '../images/hero/main-car.png'
import hero2 from '../images/hero/hero-bg.png'
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";


const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <img className='hero-bg' src={hero2} />
                    <div className="box">
                        <div className="left">
                            <h4>Plan your trip now</h4>
                            <h1>Save <span style={{ color: '#ff4d30' }}>big</span> with our car rental</h1>
                            <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                            <div className="buttons">
                                <button className='first-button'>Book Ride <IconCircleCheck className='btn-icon' /></button>
                                <button className='second-button'>Learn More <IconChevronRight className='btn-icon' /></button>
                            </div>
                        </div>
                        <div className="right">
                            <img src={hero1} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero