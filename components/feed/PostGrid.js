import React from "react";
import PostItem from "./PostItem";
import Loader from "../UI/Loader";

function PostGrid(props) {
  const { data } = props;
  if (!Array.isArray(data)) {
    return <Loader />;
  }
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {data.map((post) => (
        <PostItem key={post._id} data={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
