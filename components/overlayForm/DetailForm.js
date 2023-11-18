import React, { Fragment } from "react";
import classes from "./DetailForm.module.css";
import { useRef, useState } from "react";

const DetailForm = (props) => {
  const { ItemTitle, PostID, PosterID, Question, Answer } = props.senderData;
  const [isLoading, setIsLoading] = useState(false);

  const ResponseData = useRef();

  async function sendMessage(
    enteredInformations,
    ItemTitle,
    PostID,
    PosterID,
    Question,
    combinedDateTime,
    Answer
  ) {
    const response = await fetch("/api/answers/sendResponse", {
      method: "POST",
      body: JSON.stringify({
        enteredInformations,
        ItemTitle,
        PostID,
        PosterID,
        Question,
        combinedDateTime,
        Answer,
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

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US");
  const formattedTime = currentDate.toLocaleTimeString("en-US");
  const combinedDateTime = `${formattedDate} ${formattedTime}`;

  async function InfosubmitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    const enteredInformations = ResponseData.current.value;

    const result = await sendMessage(
      enteredInformations,
      ItemTitle,
      PostID,
      PosterID,
      Question,
      combinedDateTime,
      Answer
    );
    event.target.reset();
    setIsLoading(false);
  }

  if (isLoading) {
    return <div style={{ fontSize: "1.5rem" }}>Submiting...</div>;
  }
  return (
    <Fragment>
      <form className={classes.form} onSubmit={InfosubmitHandler}>
        <label for="contactInformations">Enter Contact Informations</label>
        <textarea
          type="text"
          name="contactInformations"
          rows="4"
          cols="40"
          placeholder="your Gmail or cell number."
          ref={ResponseData}
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
