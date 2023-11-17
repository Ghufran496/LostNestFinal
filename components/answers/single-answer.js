import React from "react";
import classes from "./singleans.module.css";
import { useState } from "react";
import AnswerForm from "../overlayForm/AnswerForm";

const SingleAnswer = (props) => {
  const { PosterID } = props.data;
  //_id, Answer,
  const [showAForm, setIsShowAForm] = useState(false);

  const showModeHandler = () => {
    setIsShowAForm(true);
  };
  const hideModeHandler = () => {
    setIsShowAForm(false);
  };
  return (
    <li className={classes.list}>
      <div className={classes.btndiv}>
        <button
          className={classes.button52}
          role="button"
          onClick={showModeHandler}
        >
          Check answer
        </button>
      </div>
      <div className={classes.responder}>
        <p>By {PosterID}</p>
      </div>
      {showAForm && <AnswerForm onclose={hideModeHandler} data={props.data} />}
    </li>
  );
};

export default SingleAnswer;
