import React from "react";
import './navbar.css';
import {FcHome, FcMenu, FcAbout, FcContacts} from "react-icons/fc"

function Navbar() {
    return(
        <div className="navbar">
        <h2><FcHome/>Home</h2>
        <h2><FcAbout/>About US</h2>
        <h2><FcContacts/>Contact</h2>
        <h2><FcMenu/>More</h2>
        </div>
    );
}


export default Navbar;