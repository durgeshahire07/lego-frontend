// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css";
import Footer from "../../components/Footer";
import Checkbox from "../../components/Checkbox";

import Plane from "../../assets/airoplane.png";
import MrGold from "../../assets/mr-gold.png";
import { BiCheckShield } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import Mint from "../../assets/mint.png";
import Damaged from "../../assets/damaged.png";
import VeryGood from "../../assets/very-good.png";
import GetQuote from "../../assets/get-quote.png";

const Product = () => {
  return (
    <Fragment>
      <Navbar page="product" />
      <div className={styles.product}>
        <div className={styles["product-left"]}>
          <div className={styles.title}>
            <p>Race Plane 41127</p>
            <div className={styles["product-img"]}>
              <img src={Plane} alt="product-img" />
            </div>
            <div className={styles["box-container"]}>
              <div className={`${styles.box} ${styles.blue}`}>
                <p className={styles.title}>Why sell with Us?</p>
                <div className={styles["box-pts"]}>
                  <div className={styles.icons}>
                    <BiCheckShield />
                  </div>
                  <p>
                    Customers loves us as we are one of the largest new LEGO set
                    buyers in the country.
                  </p>
                </div>
                <div className={styles["box-pts"]}>
                  <div className={styles.icons}>
                    <FiThumbsUp />
                  </div>
                  <p>
                    No waiting for the payments or sales aggravation, once we
                    accept your item you can be paid on the same day not in 2
                    weeks like some platforms.
                  </p>
                </div>
                <div className={styles["box-pts"]}>
                  <div className={styles.icons}>
                    <GiTakeMyMoney />
                  </div>
                  <p>
                    No selling fees like some platforms - eBay 15% + Amazon 20%
                    + payment fees, with us none.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["product-right"]}>
          <div className={styles.title}>
            <p>About your Set</p>
          </div>
          <div className={styles["box-container"]}>
            <div className={`${styles.box} ${styles.green}`}>
              <p className={styles.title}>Set Condition</p>
              <div className={styles["box-contents"]}>
                <img src={Mint} alt="mint" />
                <img src={VeryGood} alt="very-good" />
                <img src={Damaged} alt="damaged" />
              </div>
            </div>
          </div>
          <br />
          <div className={styles["box-container"]}>
            <div
              className={`${styles.box} ${styles.green} ${styles["mr-gold"]}`}
            >
              <div>
                <img src={MrGold} alt="mr-gold" />
              </div>
              <div>
                <div>
                  <p>
                    Have you selected the right set condition and your item is
                    new and sealed?
                  </p>
                </div>
                <div>
                  <Checkbox />
                  &nbsp;&nbsp;Yes
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className={styles["box-container"]}>
            <div className={`${styles.box} ${styles.green} ${styles.getQuote}`}>
              <p className={styles.title}>Email Address*</p>
              <br />
              <input type="email" placeholder="Type your email address"/>
              <br />
              <img src={GetQuote} alt="get-quote" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Product;
