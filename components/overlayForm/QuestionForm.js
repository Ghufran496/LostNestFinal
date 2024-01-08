import React from "react";
import ReactDOM from "react-dom";
import classes from "./QuestionForm.module.css";
import Form from "./Form";

function QuestionForm(props) {
  return ReactDOM.createPortal(

  
        <Form oncancle={props.onclose} data2={props.data} />
     
    
      ,
    document.getElementById("Questions")
  );
}
//className={classes.formContainer}

{/* <div className={classes.backer}>
      <div className={classes.formContainer} >
        <Form oncancle={props.onclose} data2={props.data} />
      </div>
    </div> */}
export default QuestionForm;
