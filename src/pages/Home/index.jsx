// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import SearchBg from "../../assets/search-bg.png";
import SearchBtn from "../../assets/search-img.png"

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="home">
        <div className="home-container">
          <img className="search-img" src={SearchBg} alt="search-img" />
          <div className="search-box">
            <div className="search-icon">
              <i className="fa fa-search"></i>
            </div>
            <input
              type="text"
              placeholder="Enter LEGO Set Code here"
              className="search-input"
            />
            <div className="cross-icon">
              <i className="fa fa-times"></i>
            </div>
          </div>
            <img className="search-btn" src={SearchBtn} alt="search-btn"/>
            <p>Search Help</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
