import React from "react";
import styles from "./RightEye.module.scss";
import right from "../../images/right.png";

const RightEye = () => {
  return (
    <>
      <div>
        <img className={styles.rightEye} src={right} alt="right eye" />
      </div>
    </>
  );
};

export default RightEye;
