import React from "react";
import styles from "./Shea.module.scss";
import shea from "../../images/shea.png";
import left from "../../images/left.png";
import right from "../../images/right.png";

const Shea = () => {
  return (
    <>
      <div className={styles.shea}>
        <img src={shea} alt="shea" />
      </div>
      <div className={styles.rightEye}>
        <img src={right} alt="right eye" />
      </div>
      <div className={styles.leftEye}>
        <img src={left} alt="left eye" />
      </div>
    </>
  );
};

export default Shea;
