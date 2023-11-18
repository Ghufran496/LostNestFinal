import React from "react";
import ResponseItem from "./ResponseItem";
import Loading from "../UI/Loading";

const ResponseGrid = (props) => {
  const { data } = props;
  if (!Array.isArray(data)) {
    return <Loading />;
  }
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        listStyle: "none",
        // justifyContent: "center",
        // alignItems: "center",
        padding: "1rem",
        margin: "1.5rem",
        gap: "2rem",
      }}
    >
      {data.map((post) => (
        <ResponseItem key={post._id} data={post} />
      ))}
    </ul>
  );
};

export default ResponseGrid;
