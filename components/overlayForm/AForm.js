import React, { Fragment } from "react";
import classes from "./AForm.module.css";
import DetailForm from "./DetailForm";
import { useState } from "react";

function AForm(props) {
  const { _id, Answer } = props.data2;
  const [isYes, setIsYes] = useState(false);

  const yesHandler = () => {
    setIsYes(true);
  };

  return (
    <Fragment>
      {isYes ? (
        <DetailForm close={props.oncancle} />
      ) : (
        <div className={classes.diver}>
          <h1>Validate the answer!</h1>
          <p>
            ANSWER ({" "}
            <span
              style={{ fontWeight: "400", color: "white", fontSize: "1.5rem" }}
            >
              {Answer}{" "}
            </span>
            )
          </p>
          <div>
            <button
              className={classes.button89}
              type="button"
              role="button"
              onClick={yesHandler}
            >
              Yes
            </button>
            <button className={classes.button89} type="button" role="button">
              No
            </button>
            <button
              className={classes.button89}
              type="button"
              role="button"
              onClick={props.oncancle}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default AForm;
