import React from "react";
import classes from "./Form.module.css";

function Form(props) {
  return (
    <form className={classes.main}>
      <label htmlFor="question" className={classes.labels}>
        Question
      </label>
      <br />
      <span id="questionContent" className={classes.span1}>
        {props.data2.Question}
      </span>
      <br />
      <label htmlFor="answer" className={classes.labels}>
        Answer
      </label>
      <input type="text" id="answer" className={classes.inputfield} required />
      <br />
      <div className={classes.btndiv}>
        <button
          className={classes.button89}
          type="button"
          role="button"
          onClick={props.oncancle}
        >
          Close
        </button>
        <button className={classes.button89} type="submit" role="button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
