// eslint-disable-next-line no-unused-vars
import React, { useState, Fragment } from "react";
import styles from "./index.module.css";
import { AiOutlineCheck } from "react-icons/ai";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <Fragment>
      <label className={styles["checkbox-container"]}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkmark}>
          {checked && <AiOutlineCheck />}
        </span>
      </label>
    </Fragment>
  );
};

export default Checkbox;
