import React from "react";
import Loading from "../UI/Loading";
import Specificitem from "./SpecificItem";
import classes from "./SpecificGrid.module.css";

const SpecificGrid = (props) => {
  const { data } = props;
  if (!Array.isArray(data)) {
    return <Loading />;
  }

  return (
    <div className={classes.div1}>
      <ul className={classes.ul1}>
        {data.map((post) => (
          <Specificitem key={post._id} data={post} />
        ))}
      </ul>
    </div>
  );
};

export default SpecificGrid;
