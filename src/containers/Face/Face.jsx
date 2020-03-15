import React, { useState } from "react";
import styles from "./Face.module.scss";
import Shea from "../../components/Shea";

const Face = props => {
  const { image } = props;
  const { eyesLevel, rotateEyes } = useState(true);
  const spinEyes = eyesLevel ? "" : styles.rotate;

  return (
    <>
      <div
        className={`${styles.face} ${spinEyes}`}
        onClick={() => rotateEyes(!eyesLevel)}
      >
        <img src={image} alt={image} />
        <Shea />
      </div>
    </>
  );
};

export default Face;
