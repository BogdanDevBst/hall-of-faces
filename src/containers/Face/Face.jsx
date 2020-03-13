import React from "react";
import styles from "./Face.module.scss";
import RightEye from "../../components/RightEye";
import LeftEye from "../../components/LeftEye";

const Face = () => {
  return (
    <>
      <section className={styles.Face}>
        <div className={styles.leftEye}>
          <LeftEye />
        </div>
        <div className={styles.rightEye}>
          <RightEye />
        </div>
      </section>
    </>
  );
};

export default Face;
