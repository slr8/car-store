import React from 'react'
import logo from '../images/logo/logo.png'

const NavBar = () => {
    return (
        <>
            <nav>
                <div >
                    <img src={logo} />
                </div>
                <div >
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Vehicle Models</li>
                        <li>Testimonials</li>
                        <li>Our Team</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div >
                    <button className='first-button'>Sign in</button>
                    <button className='second-button'>Register</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar