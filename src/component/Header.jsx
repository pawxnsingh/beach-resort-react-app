import React from "react";
import { useState } from "react";
import "../App.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// this is the uncontrolled component
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // this will toggle the state, make false true and vice versa!!
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        // this is the overall structure of the webpage
        <nav className="navbar">
            {/* this will contain the log and button and navigation link */}
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="beach resort" />
                    </Link>
                    <button
                        type="button"
                        className="nav-btn"
                        onClick={handleToggle}
                    >
                        <GiHamburgerMenu className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
