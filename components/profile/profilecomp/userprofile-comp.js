import React, { Fragment } from "react";
import classes from "./userprofile-comp.module.css";
import { ReloadCircleSharp } from "react-ionicons";

import Link from "next/link";
function PersonalProfile(props) {
  const profileid = `/profile/${props.id}`;
  return (
    <Fragment>
      <aside className={classes.profilecard}>
        <header>
          <div>
            <img
              src="/images/profileuser.png"
              className={classes.hoverZoomLink}
            ></img>
          </div>

          <h1>ID : {props.id}</h1>

          <h2>{props.name}</h2>
        </header>

        <div className={classes.profilebio}>
          <p>Email : {props.email}</p>

          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <Link href={profileid} legacyBehavior>
              <a>
                <div className={classes.new}>
                  <p style={{ fontSize: "15px" }}>Change Password</p>
                  <ReloadCircleSharp
                    color={"#00000"}
                    rotate
                    height="40px"
                    width="40px"
                  />
                </div>
              </a>
            </Link>
          </div>
          <p
            style={{
              textDecoration: "underline",
              textTransform: "capitalize",
              fontSize: "13px",
            }}
          >
            "You are enough just as you are."
          </p>
        </div>
      </aside>
    </Fragment>
  );
}

export default PersonalProfile;
