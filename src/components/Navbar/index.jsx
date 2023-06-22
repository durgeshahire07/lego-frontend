// import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";
import { FiAlertCircle } from "react-icons/fi";
import { BsMinecartLoaded } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <Link to="/" className="nav-link left-section">
          Menu
        </Link>
        <Link to="/faqs" className="nav-link left-section">
          FAQ&apos;s
        </Link>
      </div>
      <div className="right-section">
        <div className="nav-option">
          <div className="option-column">
            <p className="option-heading">How It Works?</p>
            <p className="option-text">Just 4 Easy Steps</p>
          </div>
          <div className="option-column">
            <FiAlertCircle size={30} color="#e01f59"/>
          </div>
        </div>
        <div className="nav-option">
          <div className="option-column">
            <p className="option-heading">Start Selling</p>
            <p className="option-text">0 Item | $0.00</p>
          </div>
          <div className="option-column">
            <BsMinecartLoaded size={30} color="#e01f59"/>
          </div>
        </div>
      </div>
      <div className="bottom-border">
        <div className="color-segment segment-blue"></div>
        <div className="color-segment segment-red"></div>
        <div className="color-segment segment-yellow"></div>
        <div className="color-segment segment-blue"></div>
        <div className="color-segment segment-green"></div>
      </div>
    </div>
  );
};

export default Navbar;
