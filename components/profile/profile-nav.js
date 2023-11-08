import React from "react";
import classes from "./profilenav.module.css";
import Link from "next/link";
function ProfileNav() {
  return (
    <ul className={classes.loginnav}>
      <li style={{ padding: "5px" }} className={classes.anch}>
        <Link href="/mylistings">My Listings</Link>
      </li>
      <li style={{ padding: "5px" }} className={classes.anch}>
        <Link href="/responses">Response</Link>
      </li>
    </ul>
  );
}

export default ProfileNav;
