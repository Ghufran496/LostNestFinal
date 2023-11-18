import React, { useState } from "react";
import classes from "./ResponseItem.module.css";

const ResponseItem = (props) => {
  const {
    _id,
    enteredContact,
    ItemTitle,
    PostID,
    PosterID,
    Question,
    ValidatorDateTime,
    Answer,
  } = props.data;
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isItemDelete, setIsItemDelete] = useState(false);
  async function deletePostData(DeleteResponse) {
    try {
      const response = await fetch("/api/answers/deleteResponse", {
        method: "DELETE",
        body: JSON.stringify({
          DeleteResponse,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorMessage}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error deleting response:", error.message);
      throw error;
    }
  }

  const handleButtonClick = () => {
    setIsDivVisible(!isDivVisible);
  };

  const deleteButtonClick = async () => {
    setIsItemDelete(true);
    try {
      const result = await deletePostData(_id);
      //   // Handle the result if needed
      window.location.reload();
      setIsItemDelete(false);
    } catch (error) {
      // Handle the error, e.g., show an error message to the user
      console.error("Error deleting response:", error.message);
      setIsItemDelete(false);
    }
  };
  if (isItemDelete) {
    return (
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Item Is Being Deleted...
      </p>
    );
  }

  return (
    <li
      style={{
        fontSize: "1.5rem",
        border: "1px solid #311465",
        padding: "2rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontWeight: "400",
        borderRadius: "1rem",
        position: "relative",
        overflow: "hidden", // Hide overflow for a cleaner look
      }}
    >
      <div
        style={{
          background: "#311465",
          height: "100%",
          width: "4px",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      ></div>
      <div style={{ marginLeft: "4rem" }}>
        <h3>
          Item ID: <span className={classes.spaner}>{PostID}</span>
        </h3>
        <h3>
          Item Name: <span className={classes.spaner}>{ItemTitle}</span>
        </h3>
        <h3>
          Question? <span className={classes.spaner}>{Question}</span>
        </h3>
        <h3>
          Your Answer: <span className={classes.spaner}>{Answer}</span>
        </h3>
        <h3>
          Time: <span className={classes.spaner}>{ValidatorDateTime}</span>
        </h3>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          {isDivVisible || (
            <button className={classes.btn} onClick={handleButtonClick}>
              Show Response
            </button>
          )}
        </div>
        {isDivVisible && (
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1rem",
              background: "#f4f4f4",
            }}
          >
            <h4>
              Response :{" "}
              <span style={{ color: "#311465" }}>{enteredContact}</span>
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "1rem",
              }}
            >
              <button className={classes.btn} onClick={handleButtonClick}>
                Close
              </button>
              <button className={classes.btn} onClick={deleteButtonClick}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default ResponseItem;
