import React, { useState } from "react";
import classes from "./Specificitem.module.css";
import Button from "../UI/Button";
import Link from "next/link";

function Specificitem(props) {
  const {
    _id,
    Type,
    Category,
    Title,
    Description,
    Question,
    Date,
    ReducedImg,
    posterEmail,
  } = props.data;

  const detailLink = `/mylistings/${_id}`;

  return (
    <li className={classes.item}>
      <div
        className={classes.imgdiv}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={ReducedImg}
          alt={Title}
          width={250}
          height={160}
          style={{ overflow: "scroll" }}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginLeft: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gridGap: "1.5rem",
            marginTop: "1rem",
            marginLeft: "1.5rem",
          }}
        >
          <h1
            style={{
              backgroundColor: "#311465",
              padding: "5px 30px",
              borderTopLeftRadius: "1rem", // Add this line
              borderTopRightRadius: "1rem", // Add this line
              borderLeft: "1px solid black", // Add this line for left border
              borderRight: "1px solid black", // Add this line for right border
              fontSize: "1.5rem",
              fontWeight: "lighter",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            {Type}
          </h1>
          <h3 style={{ fontSize: "1.5rem" }}>{Date}</h3>
        </div>

        <div
          style={{
            marginTop: "2rem",
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ textTransform: "capitalize" }}>
            <i>Category:</i> {Category}
          </h2>
          <h2 style={{ textTransform: "capitalize" }}>
            <i>Item Name:</i> {Title}
          </h2>
        </div>

        <div
          className={classes.actions}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={detailLink}>
            <a>
              <Button content="Check Response" />
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Specificitem;
