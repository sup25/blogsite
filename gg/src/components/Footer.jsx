import React from 'react';
import Logo from '../img/sup.png'

const Footer = () => {
    return (

        <footer className='logo'>
            <img src={Logo} alt="logo" />
            <span>made with 🖤 and <b>React.js</b></span>
        </footer>
    )
}

export default Footer
