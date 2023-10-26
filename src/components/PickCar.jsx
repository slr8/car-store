import React, { useState } from 'react'
import Header from './Header'
import { CAR_DATA } from './CarData'

const PickCar = () => {
    const [active, setActive] = useState('VW Golf 6')
    const [index, setIndex] = useState(0)
    return (
        <>
            <div className="pick-section">
                <div className="container">
                    <Header
                        section={"Vehicle Models"}
                        title={"Our rental fleet"}
                        p={"Choose from a variety of our amazing vehicles to rent for your next adventure or business trip"}
                    />
                    <div className="pick-body">
                        <div className="left">
                            <ul>{CAR_DATA.map(event => (event.map(car => (

                                <li onClick={() => {
                                    setActive(car.name);
                                    setIndex(car.id);
                                }} className={active === car.name && 'active'}>{car.name}</li>

                            ))))}</ul>
                        </div>
                        <div className="middle">
                            {CAR_DATA[index].map(e => (<img src={e.img} />))}
                        </div>
                        <div className="right">
                            <div className="right-container">
                                <div className="right-header">
                                    {CAR_DATA[index].map(e => (<span className='price-span'>${e.price} </span>))} <span className='price-text'>/ rent per day</span>
                                </div>
                                <div className="right-body">
                                    <div className="right-body-container">
                                        <span >Model</span>
                                        <span>|</span>
                                        <span>{CAR_DATA[index].map(e => (<span>{e.model} </span>))}</span>
                                    </div>
                                    <div className="right-body-container">
                                        <span>Mark</span>
                                        <span>|</span>
                                        <span>{CAR_DATA[index].map(e => (<span>{e.mark} </span>))}</span>
                                    </div>
                                    <div className="right-body-container">
                                        <span>Year</span>
                                        <span>|</span>
                                        <span>{CAR_DATA[index].map(e => (<span>{e.year} </span>))}</span>
                                    </div>
                                    <div className="right-body-container">
                                        <span>Doors</span>
                                        <span>|</span>
                                        <span>{CAR_DATA[index].map(e => (<span>{e.doors} </span>))}</span>
                                    </div>
                                    <div className="right-body-container">
                                        <span>AC</span>
                                        <span>|</span>
                                        <span>{CAR_DATA[index].map(e => (<span>{e.air} </span>))}</span>
                                    </div>
                                    <div className="right-body-container">
                                        <span>Transmission</span>
                                        <span>|</span>
                                        <span>{CAR_DATA[index].map(e => (<span>{e.transmission} </span>))}</span>
                                    </div>
                                    <div className="right-body-container">
                                        <span>Fuel</span>
                                        <span>|</span>
                                        <span>{CAR_DATA[index].map(e => (<span>{e.fuel} </span>))}</span>
                                    </div>
                                </div>
                                <div className="right-bottom">
                                    <button>Reverse Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PickCar