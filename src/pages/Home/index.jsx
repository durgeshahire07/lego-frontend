// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState, useContext } from "react";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css";
import SearchBg from "../../assets/search-bg.png";
import SearchBtn from "../../assets/search-img.png";
import Footer from "../../components/Footer";

import { LEGOContext } from "../../context/legoContext";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

const Home = () => {
  const [code, setCode] = useState("");

  const legoCtx = useContext(LEGOContext);
  const navigate = useNavigate();

  const getSetLego = async () => {
    try {
      const res = await Axios.post("http://localhost:5000/find-lego", {
        itemCode: code,
      });

      if (res.data?.message === "SUCCESS") {
        legoCtx.updateLegoData(res.data?.body);
        navigate("/product");
      } else {
        alert("Could not find the lego you are looking for.");
      }
    } catch (error) {
      alert("Could not find the lego you are looking for.");
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className={styles.home}>
        <div className={styles["home-container"]}>
          <img
            className={styles["search-img"]}
            src={SearchBg}
            alt="search-img"
          />
          <div className={styles["search-box"]}>
            <div className={styles["search-icon"]}>
              <i className="fa fa-search"></i>
            </div>
            <input
              disabled={code?.length === 5}
              type="text"
              placeholder="Enter LEGO Set Code here"
              className={styles["search-input"]}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <div className={styles["cross-icon"]}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <img
            className={styles["search-btn"]}
            src={SearchBtn}
            alt="search-btn"
            onClick={() => getSetLego()}
          />
          <p>Search Help</p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
