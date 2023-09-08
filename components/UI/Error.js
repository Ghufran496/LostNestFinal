import React from "react";
import classes from "./Error.module.css";
function Error(props) {
  return (
    <div className={classes.verticalcenter}>
      <div className={classes.container}>
        <div></div>
        <div className={classes.notFound}>
          <h2 className={classes.head2}>Oops! Page Not To Be Found</h2>
          <div className={classes.para}>
            <b>Error message: </b>
            <strong className={classes.underline}>{props.errorData}</strong>
          </div>
          <a href="/" className={classes.linker}>
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;
