import React from "react";
import classes from "./ChartComp.module.css";

import Example from "../../components/stats/chart";
const ChartComp = () => {
  return (
    <div className={classes.main}>
      <Example />
      <ul className={classes.ulist}>
        <li className={classes.listitem}>Total Posted Items: 10</li>
        <li className={classes.listitem}>Lost Posted Items: 7</li>
        <li>Found Posted Items: 3</li>
      </ul>
    </div>
  );
};

export default ChartComp;
