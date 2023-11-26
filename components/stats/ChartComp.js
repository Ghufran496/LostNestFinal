import React from "react";
import classes from "./ChartComp.module.css";

import { Fragment, useEffect, useState } from "react";
import Noti from "../notificationOverlay/noti";
import Example from "../../components/stats/chart";
const ChartComp = () => {
  const [count, setCount] = useState({});

  useEffect(() => {
    fetch("/api/stats/getposts")
      .then((response) => response.json())
      .then((data) => {
        setCount(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  return (
    <Fragment>
      <div className={classes.main}>
        <Example postscount={count} />
        <ul className={classes.ulist}>
          <li className={classes.listitem}>
            <b>Total Posted Items: </b>
            {count.totalPosts ? count.totalPosts : 10}
          </li>
          <li className={classes.listitem}>
            <b>Lost Posted Items:</b> {count.totalPosts ? count.lostPosts : 7}
          </li>
          <li>
            <b>Found Posted Items:</b> {count.totalPosts ? count.foundPosts : 3}
          </li>
        </ul>
      </div>
      {!count.totalPosts && <Noti data="Updating Stats..." />}
    </Fragment>
  );
};

export default ChartComp;
// import React, { useEffect, useState, Fragment } from "react";
// import Noti from "../notificationOverlay/noti";
// import Example from "../../components/stats/chart";
// import classes from "./ChartComp.module.css";
// const ChartComp = () => {
//   const [count, setCount] = useState({});

//   useEffect(() => {
//     // Use an IIFE to fetch data on the client side
//     (async () => {
//       try {
//         const response = await fetch("/api/stats/getposts");
//         const data = await response.json();
//         setCount(data);
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     })();
//   }, []);

//   return (
//     <Fragment>
//       <div className={classes.main}>
//         {/* Render the chart only when count has data */}
//         {count.totalPosts && <Example postscount={count} />}
//         <ul className={classes.ulist}>
//           <li className={classes.listitem}>
//             <b>Total Posted Items: </b>
//             {count.totalPosts ? count.totalPosts : 10}
//           </li>
//           <li className={classes.listitem}>
//             <b>Lost Posted Items:</b> {count.totalPosts ? count.lostPosts : 7}
//           </li>
//           <li>
//             <b>Found Posted Items:</b> {count.totalPosts ? count.foundPosts : 3}
//           </li>
//         </ul>
//       </div>
//       {!count.totalPosts && <Noti data="Updating Stats..." />}
//     </Fragment>
//   );
// };

// export default ChartComp;
