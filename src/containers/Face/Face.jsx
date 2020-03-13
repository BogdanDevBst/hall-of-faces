import React from "react";
import styles from "./Face.module.scss";
import RightEye from "../../components/RightEye";
import LeftEye from "../../components/LeftEye";
import Shea from "../../components/Shea";

const Face = () => {
  return (
    <>
      <section className={styles.Face}>
        <Shea />
        <LeftEye />
        <RightEye />
      </section>
    </>
  );
};

export default Face;
