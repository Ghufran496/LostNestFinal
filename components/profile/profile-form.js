import { Fragment, useRef, useState } from "react";
import classes from "./profile-form.module.css";
import ResponseLoading from "../notificationOverlay/ResponseLoad";
import ErrorComp from "../UI/ErrorComp";
import PasswordChanged from "../UI/PasswordChanged";

function ProfileForm() {
  const [passwordChange, setIsPasswordChange] = useState(false);
  const [displayChange, setIsDisplayChange] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorData, setIsErrorData] = useState(
    "Sorry but the page you are looking for does not exist."
  );
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  
  async function changePasswordHandler(passwordData) {
    try {
      const response = await fetch("/api/user/change-password", {
        method: "PATCH",
        body: JSON.stringify(passwordData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setIsErrorData(data.message);
        setIsPasswordChange(true);
      } else {
        setIsErrorData(data.message);
        setIsError(true);
      }
      console.log(data);
    } finally {
      setIsPasswordChange(false); // Move this line here
    }
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // optional: Add validation
    setIsDisplayChange(true);
    await changePasswordHandler({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
    event.target.reset();
    setIsPasswordChange(false);
    setIsDisplayChange(false);
  }

 
  if (passwordChange) {
    return <PasswordChanged errorData={isErrorData} />;
  }
  if (isError) {
    return <ErrorComp errorData={isErrorData} />;
  }

  return (
    <Fragment>
      <form
        className={`${classes.form} ${classes.formuserpassword}`}
        onSubmit={submitHandler}
      >
        <div className={classes.formgroup}>
          <label className={classes.formlabel} htmlFor="password-current">
            Current password
          </label>
          <input
            id="password-current"
            className={classes.forminput}
            type="password"
            placeholder="••••••••"
            ref={oldPasswordRef}
            required
          />
        </div>
        <div className={classes.formgroup}>
          <label className={classes.formlabel} htmlFor="password">
            New password
          </label>
          <input
            id="password"
            className={classes.forminput}
            type="password"
            placeholder="••••••••"
            ref={newPasswordRef}
            required
          />
        </div>
        <div className={`${classes.formgroup} ${classes.right}`}>
          <button
            className={`${classes.btn} ${classes.btnsmall} ${classes.btngreen} ${classes.btnsavepassword}`}
          >
            Change password
          </button>
        </div>
      </form>
      {displayChange && <ResponseLoading con="Updating!" />}
    </Fragment>
  );
}

export default ProfileForm;
