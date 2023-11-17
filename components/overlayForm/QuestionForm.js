import React from "react";
import ReactDOM from "react-dom";
import classes from "./QuestionForm.module.css";
import Form from "./Form";

function QuestionForm(props) {
  return ReactDOM.createPortal(
    <div className={classes.backer}>
      <div className={classes.formContainer}>
        <Form oncancle={props.onclose} data2={props.data} />
      </div>
    </div>,
    document.getElementById("Questions")
  );
}

export default QuestionForm;
