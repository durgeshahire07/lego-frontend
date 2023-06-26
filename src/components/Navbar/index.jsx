// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { FiAlertCircle } from "react-icons/fi";
import { BsMinecartLoaded } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["left-section"]}>
        <Link
          to="/"
          className={`${styles["nav-link"]} ${styles["left-section"]}`}
        >
          Menus
        </Link>
        <Link
          to="/faqs"
          className={`${styles["nav-link"]} ${styles["left-section"]}`}
        >
          FAQ&apos;s
        </Link>
      </div>
      <div className={styles["right-section"]}>
        <div className={styles["nav-option"]}>
          <div className={styles["option-column"]}>
            <p className={styles["option-heading"]}>How It Works?</p>
            <p className={styles["option-text"]}>Just 4 Easy Steps</p>
          </div>
          <div className={styles["option-column"]}>
            <FiAlertCircle size={30} color="#e01f59" />
          </div>
        </div>
        <div className={styles["nav-option"]}>
          <div className={styles["option-column"]}>
            <p className={styles["option-heading"]}>Start Selling</p>
            <p className={styles["option-text"]}>0 Item | $0.00</p>
          </div>
          <div className={styles["option-column"]}>
            <BsMinecartLoaded size={30} color="#e01f59" />
          </div>
        </div>
      </div>
      <div className={styles["bottom-border"]}>
        <div
          className={`${styles["color-segment"]} ${styles["segment-blue"]}`}
        ></div>
        <div
          className={`${styles["color-segment"]} ${styles["segment-red"]}`}
        ></div>
        <div
          className={`${styles["color-segment"]} ${styles["segment-yellow"]}`}
        ></div>
        <div
          className={`${styles["color-segment"]} ${styles["segment-blue"]}`}
        ></div>
        <div
          className={`${styles["color-segment"]} ${styles["segment-green"]}`}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
