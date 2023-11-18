import React from "react";
import classes from "./Form.module.css";
import { useRef, useState } from "react";
import Loading from "../UI/Loading";
// http://localhost:3000/dashboard/654bc2921efc6c1070461e13

function Form(props) {
  const [isLoading, setIsLoading] = useState(false);
  const answerInputRef = useRef();

  async function sendQuestionData(
    enteredAnswer,
    postID,
    ItemTitle,
    Question,
    combinedDateTime
  ) {
    const response = await fetch("/api/qresponse/QuestionResponse", {
      method: "POST",
      body: JSON.stringify({
        enteredAnswer,
        postID,
        ItemTitle,
        Question,
        combinedDateTime,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
    }

    return data;
  }
  const postID = props.data2._id;
  const ItemTitle = props.data2.Title;
  const Question = props.data2.Question;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US");
  const formattedTime = currentDate.toLocaleTimeString("en-US");
  const combinedDateTime = `${formattedDate} ${formattedTime}`;

  //console.log(postID);
  const answerSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredAnswer = answerInputRef.current.value;

    const result = await sendQuestionData(
      enteredAnswer,
      postID,
      ItemTitle,
      Question,
      combinedDateTime
    );

    // console.log(result);
    event.target.reset(); // This resets the form
    setIsLoading(false);
  };

  if (isLoading) {
    return <div style={{ fontSize: "1.5rem" }}>Submiting response...</div>;
  }

  return (
    <form className={classes.main} onSubmit={answerSubmitHandler}>
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
      <input
        type="text"
        id="answer"
        className={classes.inputfield}
        ref={answerInputRef}
        required
      />
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
