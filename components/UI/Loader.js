import React, { useEffect } from "react";
import classes from "./loader.module.css";

function Loader() {
  useEffect(() => {
    window.addEventListener("load", () => {
      const loader = document.querySelector(".loader");

      if (loader) {
        loader.classList.add("loaderhidden");

        loader.addEventListener("transitionend", () => {
          document.body.removeChild(loader);
        });
      }
    });
  }, []);

  return (
    <>
      <div className={classes.loader}></div>
      <p style={{ color: "red" }}>Keep patience..........</p>
    </>
  );
}

export default Loader;
