import { Fragment, useRef,useState } from "react";

import classes from "./profile-form.module.css";
import Loadings from "../notificationOverlay/Loadings";
import ResponseLoading from "../notificationOverlay/ResponseLoad";


function ProfileForm() {

const [passwordChange, setIsPasswordChange]= useState(false);

  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  function submitHandler(event) {
    event.preventDefault();

    setIsPasswordChange(true);
    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // optional: Add validation

    changePasswordHandler({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
    event.target.reset();
    setIsPasswordChange(false);
  }


  return (
    <Fragment>
    <form className={`${classes.form} ${classes.formuserpassword}`} onSubmit={submitHandler}>
    <div className={classes.formgroup}>
      <label className={classes.formlabel} htmlFor="password-current">Current password</label>
      <input id="password-current"  className={classes.forminput} type="password" placeholder="••••••••" ref={oldPasswordRef} required />
    </div>
    <div className={classes.formgroup}>
      <label className={classes.formlabel} htmlFor="password">New password</label>
      <input id="password" className={classes.forminput} type="password" placeholder="••••••••" ref={newPasswordRef} required />
    </div>
    <div className={`${classes.formgroup} ${classes.right}`}>
      <button className={`${classes.btn} ${classes.btnsmall} ${classes.btngreen} ${classes.btnsavepassword}`}>Change password</button>
    </div>
  </form>
  {passwordChange && <ResponseLoading con="Password Changing" />}
  </Fragment>
  );
}

export default ProfileForm;


{/* <form className={classes.form} onSubmit={submitHandler}>
<div className={classes.control}>
  <label htmlFor="new-password">New Password</label>
  <input type="password" id="new-password" ref={newPasswordRef} />
</div>
<div className={classes.control}>
  <label htmlFor="old-password">Old Password</label>
  <input type="password" id="old-password" ref={oldPasswordRef} />
</div>
<div className={classes.action}>
  <button>Change Password</button>
</div>
</form> */}