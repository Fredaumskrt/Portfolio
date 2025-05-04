import React from 'react'
import './navbar.css';
import logo from '../../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">

            </div>
            <button className="desktopMenuBtn">
                <img src = "" alt ="" className="desktopMenuImg"/> Contact Me
            </button>

        </nav>
    )
}
//  PAREI NO MINUTO 17:10 DO VIDEO, ESTOU TENTANDO IMPORTAR A LOGO
export default Navbar