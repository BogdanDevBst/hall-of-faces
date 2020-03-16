import React from "react";
import "./App.css";
import Face from "./containers/Face";
import FaceImg from "./images/shea.png";

const App = () => {
  const numberOfSheas = 1;
  const faceArray = [];
  for (let i = 0; i < numberOfSheas; i++) {
    faceArray.push(<Face image={FaceImg} />);
  }
  return (
    <>
      <div>{faceArray}</div>
    </>
  );
};

export default App;
