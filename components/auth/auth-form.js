import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import Loader from "../UI/Loader";
import Button from "../UI/Button";
import classes from "./auth-form.module.css";
import Error from "../UI/Error";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

function AuthForm() {
  const [toggleForms, setToggleForms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorData, setIsErrorData] = useState(
    "Sorry but the page you are looking for does not exist."
  );

  const toggleForm = () => {
    setToggleForms((prev) => !prev);
  };
  const loginEmailInputRef = useRef();
  const loginPasswordInputRef = useRef();

  const registerEmailInputRef = useRef();
  const registerPasswordInputRef = useRef();

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
        // set some auth state
        router.replace("/dashboard");
        // console.log(result + "Login success");
        setIsLoading(false);
      }
      if (result.error) {
        setIsLoading(false);
        setIsErrorData(result.error);
        setIsError(true);
        //console.log(result.error);
        // errorContent(result.error);
      }
    }
  }

  async function submitHandlerRegister(event) {
    setIsLoading(true);
    event.preventDefault();

    const enteredEmail = registerEmailInputRef.current.value;
    const enteredPassword = registerPasswordInputRef.current.value;

    // optional: Add validation

    try {
      const result = await createUser(enteredEmail, enteredPassword);
      setIsLoading(false);
      // console.log(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setIsErrorData("account already exists");
    }
  }
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error errorData={isErrorData} />;
  }

  return (
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
              />
              <input
                type="password"
                placeholder="password"
                ref={loginPasswordInputRef}
              />

              <Button content="LOGIN" onClick={switchAuthModeHandler}></Button>

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
              <input type="text" placeholder="user name" />
              <input
                type="email"
                placeholder="email-id"
                ref={registerEmailInputRef}
              />
              <input
                type="password"
                placeholder="password"
                ref={registerPasswordInputRef}
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
  );
}

export default AuthForm;

// import { useState, useRef } from "react";
// import { signIn } from "next-auth/client";
// import { useRouter } from "next/router";

// import Button from "../UI/Button";
// import classes from "./auth-form.module.css";

// async function createUser(email, password) {
//   const response = await fetch("/api/auth/signup", {
//     method: "POST",
//     body: JSON.stringify({ email, password }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Something went wrong!");
//   }

//   return data;
// }

// function AuthForm() {
//   const [toggleForms, setToggleForms] = useState(false);

//   const toggleForm = () => {
//     setToggleForms((prev) => !prev);
//   };
//   const loginEmailInputRef = useRef();
//   const loginPasswordInputRef = useRef();

//   const registerEmailInputRef = useRef();
//   const registerPasswordInputRef = useRef();

//   const [isLogin, setIsLogin] = useState(true);
//   const router = useRouter();

//   function switchAuthModeHandler() {
//     setIsLogin((prevState) => !prevState);
//   }

//   async function submitHandler(event) {
//     event.preventDefault();

//     const enteredEmail = loginEmailInputRef.current.value;
//     const enteredPassword = loginPasswordInputRef.current.value;

//     // optional: Add validation

//     if (isLogin) {
//       const result = await signIn("credentials", {
//         redirect: false,
//         email: enteredEmail,
//         password: enteredPassword,
//       });

//       if (!result.error) {
//         // set some auth state
//         router.replace("/dashboard");
//         console.log(result + "Login success");
//       }
//     }
//   }

//   async function submitHandlerRegister(event) {
//     event.preventDefault();

//     const enteredEmail = registerEmailInputRef.current.value;
//     const enteredPassword = registerPasswordInputRef.current.value;

//     // optional: Add validation

//     try {
//       const result = await createUser(enteredEmail, enteredPassword);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className={classes.col1}>
//       <div className={classes.formbox}>
//         <div className={classes.form}>
//           {!toggleForms && (
//             <form className={classes.loginform} onSubmit={submitHandler}>
//               <center>
//                 <h1 className={classes.mainheading}>Login Form</h1>
//               </center>
//               <input
//                 type="email"
//                 placeholder="email-id"
//                 ref={loginEmailInputRef}
//               />
//               <input
//                 type="password"
//                 placeholder="password"
//                 ref={loginPasswordInputRef}
//               />

//               <Button content="LOGIN" onClick={switchAuthModeHandler}></Button>

//               <p className={classes.message}>
//                 Not Registered&nbsp;?&nbsp;
//                 <a onClick={toggleForm} className={classes.link}>
//                   Register
//                 </a>
//               </p>
//             </form>
//           )}
//           {toggleForms && (
//             <form
//               className={classes.registerform}
//               onSubmit={submitHandlerRegister}
//             >
//               <center>
//                 <h1 className={classes.mainheading}>Register Form</h1>
//               </center>
//               <input type="text" placeholder="user name" />
//               <input
//                 type="email"
//                 placeholder="email-id"
//                 ref={registerEmailInputRef}
//               />
//               <input
//                 type="password"
//                 placeholder="password"
//                 ref={registerPasswordInputRef}
//               />

//               <Button
//                 content="REGISTER"
//                 onClick={switchAuthModeHandler}
//               ></Button>

//               <p className={classes.message}>
//                 Already Registered&nbsp;?&nbsp;
//                 <a onClick={toggleForm} className={classes.link}>
//                   Login
//                 </a>
//               </p>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AuthForm;