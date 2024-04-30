import React from "react";
import './Navbar.css';
import navlogo from 'C:/Users/Ruwini Tharanga/Desktop/E-commerce/admin/src/assets/logo2.png';
import navProfile from 'C:/Users/Ruwini Tharanga/Desktop/E-commerce/admin/src/assets/profile.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="" className="nav-logo" />
            <img src={navProfile} alt="" className="nav-profile"/>

        </div>


    )
}

export default Navbar;