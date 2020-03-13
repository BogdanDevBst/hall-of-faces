import React from "react";
import styles from "./Shea.module.scss";
import shea from "../../images/shea.png";

const Shea = () => {
  return (
    <>
      <div className={styles.shea}>
        <img src={shea} alt="shea" />
      </div>
    </>
  );
};

export default Shea;
