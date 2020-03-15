import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  const { handleClick } = props;
  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        Rotate
      </button>
    </>
  );
};

export default Button;
