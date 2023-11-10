import React from "react";
import Loading from "../UI/Loading";
import Specificitem from "./SpecificItem";

const SpecificGrid = (props) => {
  const { data } = props;
  if (!Array.isArray(data)) {
    return <Loading />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginLeft: "10rem",
      }}
    >
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {data.map((post) => (
          <Specificitem key={post._id} data={post} />
        ))}
      </ul>
    </div>
  );
};

export default SpecificGrid;
