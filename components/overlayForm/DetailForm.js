import React, { Fragment } from "react";
import classes from "./DetailForm.module.css";

const DetailForm = (props) => {
  return (
    <Fragment>
      <form className={classes.form}>
        <label for="contactInformations">Enter your Contact Informations</label>
        <textarea
          type="text"
          name="contactInformations"
          rows="4"
          cols="40"
          placeholder="Enter your Gmail / Cellno"
          required
        ></textarea>

        <div>
          <button className={classes.button89} type="submit" role="button">
            Submit
          </button>
          <button
            className={classes.button89}
            type="button"
            role="button"
            onClick={props.close}
          >
            Close
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default DetailForm;
