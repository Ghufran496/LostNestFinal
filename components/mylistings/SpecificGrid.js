import React from "react";
import Loading from "../UI/Loading";
import Specificitem from "./SpecificItem";

const SpecificGrid = (props) => {
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
        <Specificitem key={post._id} data={post} />
      ))}
    </ul>
  );
};

export default SpecificGrid;
