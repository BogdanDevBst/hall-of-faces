import React from "react";
import styles from "./LeftEye.module.scss";
import left from "../../images/left.png";

const LeftEye = () => {
  return (
    <>
      <img className={styles.leftEye} src={left} alt="left eye" />
    </>
  );
};

export default LeftEye;
