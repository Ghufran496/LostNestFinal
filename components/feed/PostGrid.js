import React from "react";
import PostItem from "./PostItem";
// import Loader from "../UI/Loader";
import Loading from "../UI/Loading";

function PostGrid(props) {
  const { data } = props;
  if (!Array.isArray(data)) {
    return <Loading />;
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
