webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/UI/Button.js":
false,

/***/ "./components/UI/Button.module.css":
false,

/***/ "./components/UI/Error.js":
false,

/***/ "./components/UI/Error.module.css":
false,

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// import { useState, useRef } from "react";
// import { signIn } from "next-auth/client";
// import { useRouter } from "next/router";
// import Loader from "../UI/Loader";
// import Button from "../UI/Button";
// import classes from "./auth-form.module.css";
// import Error from "../UI/Error";
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
//     console.log(data.message);
//     throw new Error(data.message || "Something went wrong!");
//   }
//   return data;
// }
// function AuthForm(props) {
//   const [toggleForms, setToggleForms] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [isErrorData, setIsErrorData] = useState(
//     "Sorry but the page you are looking for does not exist."
//   );
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
//     setIsLoading(true);
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
//         setIsLoading(false);
//       }
//       if (result.error) {
//         setIsLoading(false);
//         setIsErrorData(result.error);
//         setIsError(true);
//         //console.log(result.error);
//         // errorContent(result.error);
//       }
//     }
//   }
//   async function submitHandlerRegister(event) {
//     setIsLoading(true);
//     event.preventDefault();
//     const enteredEmail = registerEmailInputRef.current.value;
//     const enteredPassword = registerPasswordInputRef.current.value;
//     // optional: Add validation
//     try {
//       const result = await createUser(enteredEmail, enteredPassword);
//       setIsLoading(false);
//       //console.log(result);
//       setIsLoading(false);
//     } catch (error) {
//       //console.log(error);
//       setIsLoading(false);
//       setIsError(true);
//       // setIsErrorData(error);
//     }
//   }
//   if (isLoading) {
//     return <Loader />;
//   }
//   if (isError) {
//     return <Error errorData={isErrorData} />;
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./components/auth/auth-form.module.css":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Button.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Error.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/auth/auth-form.module.css":
false,

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/Loader */ "./components/UI/Loader.js");
/* harmony import */ var _components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/auth/auth-form */ "./components/auth/auth-form.js");
/* harmony import */ var _components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\auth\\index.js",
    _s = $RefreshSig$();







function AuthPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])().then(function (session) {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, this);
}

_s(AuthPage, "ucBHP+hmRePxNWKJso+rgIARHIg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = AuthPage;
/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

var _c;

$RefreshReg$(_c, "AuthPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9pbmRleC5qcyJdLCJuYW1lcyI6WyJBdXRoUGFnZSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZ2V0U2Vzc2lvbiIsInRoZW4iLCJzZXNzaW9uIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxJQUFELENBRHhCO0FBQUEsTUFDWEMsU0FEVztBQUFBLE1BQ0FDLFlBREE7O0FBRWxCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHVFQUFVLEdBQUdDLElBQWIsQ0FBa0IsVUFBQ0MsT0FBRCxFQUFhO0FBQzdCLFVBQUlBLE9BQUosRUFBYTtBQUNYTCxjQUFNLENBQUNNLE9BQVAsQ0FBZSxHQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0xQLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSUSxFQVFOLENBQUNDLE1BQUQsQ0FSTSxDQUFUOztBQVVBLE1BQUlGLFNBQUosRUFBZTtBQUNiLHdCQUFPLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUFPLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQW5CUUYsUTtVQUVRSyxxRDs7O0tBRlJMLFE7QUFxQk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGguMmZiOGU2MzUwYjNjOWE4NDkwNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL1VJL0xvYWRlclwiO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IEVycm9yIGZyb20gXCIuLi9VSS9FcnJvclwiO1xuXG4vLyBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4vLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbi8vICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbi8vICAgICB9LFxuLy8gICB9KTtcblxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4vLyAgIGlmICghcmVzcG9uc2Uub2spIHtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuLy8gICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gZGF0YTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gQXV0aEZvcm0ocHJvcHMpIHtcbi8vICAgY29uc3QgW3RvZ2dsZUZvcm1zLCBzZXRUb2dnbGVGb3Jtc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgW2lzRXJyb3JEYXRhLCBzZXRJc0Vycm9yRGF0YV0gPSB1c2VTdGF0ZShcbi8vICAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXG4vLyAgICk7XG5cbi8vICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbi8vICAgICBzZXRUb2dnbGVGb3JtcygocHJldikgPT4gIXByZXYpO1xuLy8gICB9O1xuLy8gICBjb25zdCBsb2dpbkVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbi8vICAgY29uc3QgbG9naW5QYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cbi8vICAgY29uc3QgcmVnaXN0ZXJFbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4vLyAgIGNvbnN0IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4vLyAgIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuLy8gICBmdW5jdGlvbiBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIoKSB7XG4vLyAgICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbi8vICAgfVxuXG4vLyAgIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuLy8gICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGxvZ2luRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuLy8gICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGxvZ2luUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4vLyAgICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbi8vICAgICBpZiAoaXNMb2dpbikge1xuLy8gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuLy8gICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4vLyAgICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4vLyAgICAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4vLyAgICAgICB9KTtcblxuLy8gICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbi8vICAgICAgICAgLy8gc2V0IHNvbWUgYXV0aCBzdGF0ZVxuLy8gICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCArIFwiTG9naW4gc3VjY2Vzc1wiKTtcbi8vICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbi8vICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbi8vICAgICAgICAgc2V0SXNFcnJvckRhdGEocmVzdWx0LmVycm9yKTtcbi8vICAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xuLy8gICAgICAgICAvLyBlcnJvckNvbnRlbnQocmVzdWx0LmVycm9yKTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyUmVnaXN0ZXIoZXZlbnQpIHtcbi8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuLy8gICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4vLyAgICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbi8vICAgICB0cnkge1xuLy8gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZCk7XG4vLyAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuLy8gICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuLy8gICAgICAgc2V0SXNFcnJvcih0cnVlKTtcblxuLy8gICAgICAgLy8gc2V0SXNFcnJvckRhdGEoZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpZiAoaXNMb2FkaW5nKSB7XG4vLyAgICAgcmV0dXJuIDxMb2FkZXIgLz47XG4vLyAgIH1cblxuLy8gICBpZiAoaXNFcnJvcikge1xuLy8gICAgIHJldHVybiA8RXJyb3IgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XG4vLyAgIH1cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbDF9PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybWJveH0+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuLy8gICAgICAgICAgIHshdG9nZ2xlRm9ybXMgJiYgKFxuLy8gICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuLy8gICAgICAgICAgICAgICA8Y2VudGVyPlxuLy8gICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PkxvZ2luIEZvcm08L2gxPlxuLy8gICAgICAgICAgICAgICA8L2NlbnRlcj5cbi8vICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbi8vICAgICAgICAgICAgICAgICByZWY9e2xvZ2luRW1haWxJbnB1dFJlZn1cbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgICAgICByZWY9e2xvZ2luUGFzc3dvcmRJbnB1dFJlZn1cbi8vICAgICAgICAgICAgICAgLz5cblxuLy8gICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJMT0dJTlwiIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn0+PC9CdXR0b24+XG5cbi8vICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuLy8gICAgICAgICAgICAgICAgIE5vdCBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuLy8gICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbi8vICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4vLyAgICAgICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICA8L2Zvcm0+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgICB7dG9nZ2xlRm9ybXMgJiYgKFxuLy8gICAgICAgICAgICAgPGZvcm1cbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZ2lzdGVyZm9ybX1cbi8vICAgICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJSZWdpc3Rlcn1cbi8vICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgPGNlbnRlcj5cbi8vICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5SZWdpc3RlciBGb3JtPC9oMT5cbi8vICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCIgLz5cbi8vICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbi8vICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyRW1haWxJbnB1dFJlZn1cbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZn1cbi8vICAgICAgICAgICAgICAgLz5cblxuLy8gICAgICAgICAgICAgICA8QnV0dG9uXG4vLyAgICAgICAgICAgICAgICAgY29udGVudD1cIlJFR0lTVEVSXCJcbi8vICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4vLyAgICAgICAgICAgICAgID48L0J1dHRvbj5cblxuLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4vLyAgICAgICAgICAgICAgICAgQWxyZWFkeSBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuLy8gICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbi8vICAgICAgICAgICAgICAgICAgIExvZ2luXG4vLyAgICAgICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICA8L2Zvcm0+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Mb2FkZXJcIjtcclxuXHJcbmltcG9ydCBBdXRoRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHtcclxuICAgICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRlciAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiA8QXV0aEZvcm0gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9