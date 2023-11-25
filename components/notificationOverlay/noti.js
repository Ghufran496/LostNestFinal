// noti.js
import React, { useEffect, useState } from "react";

import classes from "./noti.module.css";
import { createPortal } from "react-dom";

const Noti = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return createPortal(
    <div className={`${classes.notification} ${show ? classes.show : ""}`}>
      <div className={classes.tick}>✔</div>
      {props.data}
    </div>,
    document.getElementById("Notification")
  );
};

export default Noti;
