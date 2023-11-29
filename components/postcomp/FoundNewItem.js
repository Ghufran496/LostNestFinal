import classes from "./FoundNewItem.module.css";

import React, { Fragment } from "react";
import Button from "../UI/Button";
import { useRef, useState,useEffect } from "react";
import { getSession } from "next-auth/react";

import ErrorComp from "../UI/ErrorComp";
import Noti from "../notificationOverlay/noti";
import Loadings from "../notificationOverlay/Loadings";


 function FoundNewItem() {


  // const session = await getSession({ req: context.req });
  // console.log(session.user.email)


  const [isLoading, setIsLoading] = useState(false);
  const [isImage, setIsImage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isErrorData, setIsErrorData] = useState(
    "Sorry but the page you are looking for does not exist."
  );
  const [sendEmail, setIsSendEmail] = useState(false);

  const typeInputRef = useRef();
  const categoryInputRef = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const questionInputRef = useRef();
  const dateInputRef = useRef();

  async function sendEmails(subject, message) {
    const response = await fetch("/api/email/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        subject,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle non-2xx HTTP response status
      console.error(`Error sending email. Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      setIsSendEmail(true);
      //console.log("success");
    }

    return data;
  }

  async function sendPostData(
    Type,
    Category,
    Title,
    Description,
    Question,
    Date,
    imageInbase64
  ) {
    const response = await fetch("/api/post/postitem", {
      method: "POST",
      body: JSON.stringify({
        Type,
        Category,
        Title,
        Description,
        Question,
        Date,
        ReducedImg: imageInbase64,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSendEmail(false);

    if (!response.ok) {
      setIsErrorData(data.message);
      setIsLoading(false);
      setIsError(true);
    }
    const data = await response.json();
    return data;
  }
  function converttobase64(e) {
    // console.log(e);

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      //console.log(reader.result);
      setIsImage(reader.result);
    };

    reader.onerror = () => {
      console.log("error", error);
    };
  }
  const postSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredType = typeInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredQuestion = questionInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const humanReadableDate = new Date(enteredDate).toLocaleDateString(
      "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

    const message = `${enteredType} ${enteredCategory}
  
Item Name: ${enteredTitle}
Date: ${humanReadableDate}
Description: ${enteredDescription}

If you have any information about the ${enteredType} item, kindly visit the LostNest web application.

Thank you
`;

    const subject = `${enteredType} : ${enteredTitle}`;

    const emailres = await sendEmails(subject, message);
    const result = await sendPostData(
      enteredType,
      enteredCategory,
      enteredTitle,
      enteredDescription,
      enteredQuestion,
      humanReadableDate,
      isImage
    );

    // console.log(result);
    event.target.reset(); // This resets the form
    setIsImage(""); // Clear the image state
    setIsLoading(false);
    setIsSendEmail(false);
  };

  if (isError) {
    return <ErrorComp errorData={isErrorData} />;
  }
  return (
    <Fragment>
      <div className={classes.formstyle3}>
        <form onSubmit={postSubmitHandler}>
          <fieldset>
            <legend>Data</legend>
            <div className={classes.divider}>
              <select
                name="item"
                className={classes.inputfield}
                ref={typeInputRef}
              >
                <option value="Found">Found</option>
              </select>
              <select
                defaultValue="Category"
                name="category"
                className={classes.inputfield}
                ref={categoryInputRef}
                required
              >
                <option value="Category" disabled>
                  Category
                </option>
                <option value="Wallet">Wallet</option>
                <option value="ID Card / Student Card">
                  ID Card / Student Card
                </option>
                <option value="Smart Phone / Laptop">
                  Smart Phone / Laptop
                </option>
                <option value="Keys">Keys</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <label htmlFor="field3">
              <span>
                Item Name <span className={classes.required}>*</span>
              </span>
              <input
                type="text"
                name="field3"
                placeholder="Title"
                className={classes.inputfield}
                ref={titleInputRef}
                required
              ></input>
            </label>
            <label htmlFor="field4">
              <span>
                Enter question based on an item.
                <span className={classes.required}>*</span>
              </span>
              <input
                type="text"
                name="field4"
                placeholder="Ex:- What is the color of the phone?"
                className={classes.inputfield}
                ref={questionInputRef}
                required
              ></input>
            </label>

            <label htmlFor="date">
              <span>
                Select a Date: <span className={classes.required}>*</span>
              </span>
              <input
                type="date"
                name="date"
                id="date"
                className={classes.customselect}
                ref={dateInputRef}
                required
              ></input>
            </label>
          </fieldset>
          <fieldset>
            <legend>Details</legend>
            <label htmlFor="description">
              <span>
                Description <span className={classes.required}>*</span>
              </span>
              <textarea
                type="text"
                name="description"
                placeholder="Description about item (like location etc...)"
                className={classes.textareafield}
                ref={descriptionInputRef}
                required
              ></textarea>
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className={classes.customselect}
              style={{ width: "100%" }}
              onChange={converttobase64}
              required
            />
            <div className={classes.center}>
              <Button content="Post"></Button>
            </div>
          </fieldset>
        </form>
      </div>
      {sendEmail && (
        <Noti data="Email Successfully Sent to LostNest Registered Users!" />
      )}
      {isLoading && <Loadings />}
    </Fragment>
  );
}

export default FoundNewItem;
