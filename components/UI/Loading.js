import React from "react";
import classes from "./Loading.module.css";

function Loading() {
  return (
    <div className={classes.loader}>
      <div
        className={`${classes.justifycontentcenter} ${classes.jimuprimaryloading}`}
      ></div>
      <div className={classes.text}>Please be patient...</div>
    </div>
  );
}

export default Loading;
