// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css"
import SearchBg from "../../assets/search-bg.png";
import SearchBtn from "../../assets/search-img.png"
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.home}>
        <div className={styles["home-container"]}>
          <img className={styles['search-img']} src={SearchBg} alt="search-img" />
          <div className={styles['search-box']}>
            <div className={styles['search-icon']}>
              <i className="fa fa-search"></i>
            </div>
            <input
              type="text"
              placeholder="Enter LEGO Set Code here"
              className={styles["search-input"]}
            />
            <div className={styles["cross-icon"]}>
              <i className="fa fa-times"></i>
            </div>
          </div>
            <img className={styles["search-btn"]} src={SearchBtn} alt="search-btn"/>
            <p>Search Help</p>
          </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default Home;
