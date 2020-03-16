import React, { useState } from "react";
import styles from "./Face.module.scss";
import Shea from "../../components/Shea";

const Face = props => {
  const { image } = props;
  const [eyesLevel, rotateEyes] = useState(true);
  const spinEyes = eyesLevel ? "" : styles.rotate;
  return (
    <>
      <div onClick={() => rotateEyes(!eyesLevel)}>
        <img className={styles.faceLift} src={image} alt={image} />
        <div className={spinEyes}>
          <Shea />
        </div>
      </div>
    </>
  );
};

export default Face;
