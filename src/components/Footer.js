import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' >
            <marquee><span>DIGITAL PRODUCT DESIGN</span> REMOTE WORK <span>UX DESIGN</span> DISTRIBUTED TEAMS <span>CREATIVITY</span> STRATEGY <span>SUSPENSE</span> GROWTH</marquee>
            
            <h1 className='nordicfooter'>Nordic Rose</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis<br/>
                eu velit tempus erat egestas efficitur. In hac habitasse platea<br/>
                dictumst. Fusce a nunc eget ligula suscipit finibus
            </p>
            <div className='links'>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">RSS</a>
            </div>
            
            <p className='reserved'>© 2020–2021 Nordic Rose Co.<br/>
                All rights reserved. 
            </p>

        </div>
    )
}

export default Footer
