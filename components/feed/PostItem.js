import React from "react";
import classes from "./PostItem.module.css";
import Button from "../UI/Button";
import Link from "next/link";

function PostItem(props) {
  // console.log(props.data);
  const {
    _id,
    Type,
    Category,
    Title,
    Description,
    Question,
    Date,
    ReducedImg,
  } = props.data;

  const detailLink = `/dashboard/${_id}`;

  return (
    <li className={classes.item}>
      <div className={classes.imgdiv}>
        <img
          src={ReducedImg}
          alt={Title}
          width={250}
          height={160}
          style={{ overflow: "scroll" }}
        ></img>
      </div>
      <div className={classes.content}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem",
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
            padding: "0.5rem",
          }}
        >
          <h2>Category: {Category}</h2>
        </div>
        <h3
          style={{
            // border: "1px dotted black",
            padding: "0.5rem",
            textTransform: "capitalize",
          }}
        >
          <span style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
            Description:&nbsp;
          </span>
          {Description}
        </h3>
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
            <Button content="View Details" />
          </a>
        </Link>
      </div>
    </li>
  );
}

export default PostItem;
