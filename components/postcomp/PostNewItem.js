import classes from "./PostNewItem.module.css";

import React from "react";
import Button from "../UI/Button";

import { useRef, useState } from "react";
import Loading from "../UI/Loading";
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
function PostNewItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [isImage, setIsImage] = useState("");
  const typeInputRef = useRef();
  const categoryInputRef = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const questionInputRef = useRef();
  const dateInputRef = useRef();

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

    try {
      const result = await sendPostData(
        enteredType,
        enteredCategory,
        enteredTitle,
        enteredDescription,
        enteredQuestion,
        humanReadableDate,
        isImage
      );

      console.log(result);
      event.target.reset(); // This resets the form
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
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
              <option value="Lost">Lost</option>
            </select>
            <select
              name="category"
              className={classes.inputfield}
              ref={categoryInputRef}
              required
            >
              <option value="" disabled selected>
                Category
              </option>
              <option value="Wallet">Wallet</option>
              <option value="ID Card / Student Card">
                ID Card / Student Card
              </option>
              <option value="Smart Phone / Laptop">Smart Phone / Laptop</option>
              <option value="Keys">Keys</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <label for="field3">
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
          <label for="field4">
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
          <label for="description">
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
  );
}

export default PostNewItem;
