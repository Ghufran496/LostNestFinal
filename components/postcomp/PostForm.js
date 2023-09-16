import React from "react";
import classes from "./PostForm.module.css";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import Loader from "../UI/Loader";
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
function PostForm() {
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
    return <Loader />;
  }
  return (
    <>
      <h1 style={{ fontSize: "5rem" }}>Post new Item as Lost Item</h1>
      <h2>Please Provide genunine Informations only.</h2>
      <form className={classes.form} onSubmit={postSubmitHandler}>
        <select name="item" className={classes.customselect} ref={typeInputRef}>
          <option value="Lost">Lost</option>
        </select>
        <select
          name="category"
          className={classes.customselect}
          ref={categoryInputRef}
        >
          <option value="" disabled selected>
            Category
          </option>
          <option value="Wallet">Wallet</option>
          <option value="ID Card / Student Card">ID Card / Student Card</option>
          <option value="Smart Phone / Laptop">Smart Phone / Laptop</option>
          <option value="Keys">Keys</option>
          <option value="Others">Others</option>
        </select>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="name"
            style={{ fontSize: "2rem", fontWeight: "bolder" }}
          >
            Item Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Title"
            className={classes.customselect}
            ref={titleInputRef}
          ></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="description"
            style={{ fontSize: "2rem", fontWeight: "bolder" }}
          >
            Description
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Description about item (like location etc...)"
            className={classes.customselect}
            ref={descriptionInputRef}
            rows="5"
          ></textarea>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="question"
            style={{ fontSize: "2rem", fontWeight: "bolder" }}
          >
            Enter question based on an item.
          </label>
          <input
            type="text"
            name="question"
            placeholder="Ex:- What is the color of the phone?"
            className={classes.customselect}
            ref={questionInputRef}
          ></input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="date"
            style={{ fontSize: "2rem", fontWeight: "bolder" }}
          >
            Select a Date:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className={classes.customselect}
            ref={dateInputRef}
          ></input>
        </div>

        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className={classes.customselect}
          onChange={converttobase64}
        />
        <Button content="Post"></Button>
      </form>

      <img width={100} height={100} src={isImage}></img>
    </>
  );
}

export default PostForm;
