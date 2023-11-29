import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import classes from "./auth-form.module.css";

import { Fragment } from "react";
import Footer from "../Global/Footer";
import ErrorComp from "../UI/ErrorComp";



function AuthForm() {
  const [toggleForms, setToggleForms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorData, setIsErrorData] = useState(
    "Sorry but the page you are looking for does not exist."
  );

  async function createUser(email, password, enteredName) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, enteredName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setIsErrorData(data.message);
      setIsLoading(false);
      setIsError(true);
    }

    return data;
  }

  const toggleForm = () => {
    setToggleForms((prev) => !prev);
  };
  const loginEmailInputRef = useRef();
  const loginPasswordInputRef = useRef();

  const registerEmailInputRef = useRef();
  const registerPasswordInputRef = useRef();
  const registerNameInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    const enteredEmail = loginEmailInputRef.current.value;
    const enteredPassword = loginPasswordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        router.replace("/dashboard");
        setIsLoading(false);
      }
      if (result.error) {
        setIsLoading(false);
        setIsErrorData(result.error);
        setIsError(true);
      }
    }
  }

  async function submitHandlerRegister(event) {
    setIsLoading(true);
    event.preventDefault();

    const enteredEmail = registerEmailInputRef.current.value;
    const enteredPassword = registerPasswordInputRef.current.value;
    const enteredName = registerNameInputRef.current.value;
    // optional: Add validation

    const result = await createUser(enteredEmail, enteredPassword, enteredName);
    setIsLoading(false);
  }
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorComp errorData={isErrorData} />;
  }

  return (
    <Fragment>
      <div className={classes.col1}>
        <div className={classes.formbox}>
          <div className={classes.form}>
            {!toggleForms && (
              <form className={classes.loginform} onSubmit={submitHandler}>
                <center>
                  <h1 className={classes.mainheading}>Login Form</h1>
                </center>
                <input
                  type="email"
                  placeholder="email-id"
                  ref={loginEmailInputRef}
                  required
                />
                <input
                  type="password"
                  placeholder="password"
                  ref={loginPasswordInputRef}
                  required
                />

                <Button
                  content="LOGIN"
                  onClick={switchAuthModeHandler}
                ></Button>

                <p className={classes.message}>
                  Not Registered&nbsp;?&nbsp;
                  <a onClick={toggleForm} className={classes.link}>
                    Register
                  </a>
                </p>
              </form>
            )}
            {toggleForms && (
              <form
                className={classes.registerform}
                onSubmit={submitHandlerRegister}
              >
                <center>
                  <h1 className={classes.mainheading}>Register Form</h1>
                </center>
                <input
                  type="text"
                  placeholder="user name"
                  ref={registerNameInputRef}
                  required
                />
                <input
                  type="email"
                  placeholder="email-id"
                  ref={registerEmailInputRef}
                  required
                />
                <input
                  type="password"
                  placeholder="password"
                  ref={registerPasswordInputRef}
                  required
                />

                <Button
                  content="REGISTER"
                  onClick={switchAuthModeHandler}
                ></Button>

                <p className={classes.message}>
                  Already Registered&nbsp;?&nbsp;
                  <a onClick={toggleForm} className={classes.link}>
                    Login
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default AuthForm;

