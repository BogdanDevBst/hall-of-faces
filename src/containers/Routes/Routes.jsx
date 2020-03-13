import React from "react";
import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import Face from "../Face";

const NotFound = () => <p>Page not found!</p>;

const Routes = () => {
  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="home" />
        <Face path="face" />
        <NotFound default />
      </Router>
    </>
  );
};

export default Routes;
