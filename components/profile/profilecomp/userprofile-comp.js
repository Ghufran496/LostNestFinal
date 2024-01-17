import React, { Fragment } from "react";
import classes from "./userprofile-comp.module.css";
import { ReloadCircleSharp } from "react-ionicons";
import ProfileForm from "../profile-form";
import Link from "next/link";


function PersonalProfile(props) {
  const profileid = `/profile/${props.id}`;
  console.log(props.id);
  return (
    <Fragment>
      
      <main className={classes.main}>
      <div className={classes.userview}>
        <nav className={classes.userviewmenu}>
          <ul className={classes.sidenav}>
            <li>
              <Link href="/" className={classes.navitem}>Home</Link>
            </li>
            <li>
            <Link className={classes.navitem} href="/dashboard">Feed</Link>
            </li>
            <li>
            <Link className={classes.navitem} href="/stats">Contact us & Stats</Link>
            </li>
            <li>
              <Link href="/profile" className={classes.navitem}>My Profile</Link>
            </li>
            <li>
              <Link href="/mylistings" className={classes.navitem} >My Listings</Link>
            </li>
            <li>
              <Link href="/responses" className={classes.navitem} >My Responses</Link>
            </li>
            <li>
              <Link href="/postlostitem" className={classes.navitem} >Lost an Item</Link>
            </li>
            <li>
              <Link href="/postfounditem" className={classes.navitem}>Found an Item</Link>
            </li>
          </ul>
        </nav>

        <div className={classes.userviewcontent}>
          <div className={classes.userviewformcontainer}>
            <h2 className={`${classes.headingsecondary} ${classes.mabtmd}`}>Your account informations</h2>
            
            
            <form className={`${classes.form} ${classes.formuserdata}`}>
            <div className={classes.formgroup}>
                <label className={classes.formlabel} htmlFor="id">Id</label>
                <input id="id" className={`${classes.forminput} ${classes.updateName}`} type="text" value={props.id} required name="id" />
              </div>
              <div className={classes.formgroup}>
                <label className={classes.formlabel} htmlFor="name">Name</label>
                <input id="name" className={`${classes.forminput} ${classes.updateName}`} type="text" value={props.name} required name="name" />
              </div>
              <div className={`${classes.formgroup} ${classes.mabtmd}`}>
                <label className={classes.formlabel} htmlFor="email">Email address</label>
                <input id="email" className={`${classes.forminput} ${classes.updateEmail}`} type="email" value={props.email} required name="email" />
              </div>
              <div className={`${classes.formgroup} ${classes.formphotoupload}`}  >
              <label htmlFor="photo">Profile Picture&nbsp;&nbsp;&nbsp;</label> 
                <img className={classes.formuserphoto} src={`/images/profileuser.png`} alt="User photo" />
                
              </div>
              
            </form>
            
            <div className={classes.line}>&nbsp;</div>
            
          </div>

          
          <div className={classes.userviewformcontainer}>
  <h2 className={`${classes.headingsecondary} ${classes.mabtmd}`}>Password change</h2>
  <ProfileForm />
 
</div>
        </div>
      </div>
    </main>
    </Fragment>
  );
}

export default PersonalProfile;




/*

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

         
          <p
            style={{
              textDecoration: "underline",
              textTransform: "capitalize",
              fontSize: "13px",
              marginTop:"2rem"
            }}
          >
            "You are enough just as you are." - Meghan Markle
          </p>
        </div>
      </aside>
    </Fragment>
  );
}

export default PersonalProfile;
*/


 /* <div
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
          </div> */