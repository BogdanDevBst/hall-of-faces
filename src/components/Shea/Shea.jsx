import React from "react";
import styles from "./Shea.module.scss";
import left from "../../images/left.png";
import right from "../../images/right.png";

const Shea = () => {
  return (
    <>
      <div>
        <img className={styles.rightEye} src={right} alt="right eye" />
      </div>
      <div>
        <img className={styles.leftEye} src={left} alt="left eye" />
      </div>
    </>
  );
};

export default Shea;
