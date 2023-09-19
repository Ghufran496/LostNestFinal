webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-form.module.css */ "./components/auth/auth-form.module.css");
/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UI_Error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UI/Error */ "./components/UI/Error.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\auth\\auth-form.js",
    _s = $RefreshSig$();









function createUser(_x, _x2) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(email, password) {
    var response, data;
    return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("/api/auth/signup", {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password
              }),
              headers: {
                "Content-Type": "application/json"
              }
            });

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.json();

          case 5:
            data = _context3.sent;

            if (response.ok) {
              _context3.next = 8;
              break;
            }

            throw new _UI_Error__WEBPACK_IMPORTED_MODULE_9__["default"](data.message || "Something went wrong!");

          case 8:
            return _context3.abrupt("return", data);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createUser.apply(this, arguments);
}

function AuthForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      toggleForms = _useState[0],
      setToggleForms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isError = _useState3[0],
      setIsError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Sorry but the page you are looking for does not exist."),
      isErrorData = _useState4[0],
      setIsErrorData = _useState4[1];

  var toggleForm = function toggleForm() {
    setToggleForms(function (prev) {
      return !prev;
    });
  };

  var loginEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var loginPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var registerEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var registerPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLogin = _useState5[0],
      setIsLogin = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function switchAuthModeHandler() {
    setIsLogin(function (prevState) {
      return !prevState;
    });
  }

  function submitHandler(_x3) {
    return _submitHandler.apply(this, arguments);
  }

  function _submitHandler() {
    _submitHandler = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var enteredEmail, enteredPassword, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredEmail = loginEmailInputRef.current.value;
              enteredPassword = loginPasswordInputRef.current.value; // optional: Add validation

              if (!isLogin) {
                _context.next = 10;
                break;
              }

              _context.next = 7;
              return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_4__["signIn"])("credentials", {
                redirect: false,
                email: enteredEmail,
                password: enteredPassword
              });

            case 7:
              result = _context.sent;

              if (!result.error) {
                // set some auth state
                router.replace("/dashboard"); // console.log(result + "Login success");

                console.log(result);
                setIsLoading(false);
              }

              if (result.error) {
                setIsLoading(false);
                setIsErrorData(result.error);
                setIsError(true); //console.log(result.error);
                // errorContent(result.error);
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submitHandler.apply(this, arguments);
  }

  function submitHandlerRegister(_x4) {
    return _submitHandlerRegister.apply(this, arguments);
  }

  function _submitHandlerRegister() {
    _submitHandlerRegister = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var enteredEmail, enteredPassword, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsLoading(true);
              event.preventDefault();
              enteredEmail = registerEmailInputRef.current.value;
              enteredPassword = registerPasswordInputRef.current.value; // optional: Add validation

              _context2.prev = 4;
              _context2.next = 7;
              return createUser(enteredEmail, enteredPassword);

            case 7:
              result = _context2.sent;
              setIsLoading(false); // console.log(result);
              //console.log(result);

              setIsLoading(false);
              _context2.next = 18;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              console.log(_context2.t0);
              setIsLoading(false);
              setIsError(true);
              setIsErrorData("account already exists");

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 12]]);
    }));
    return _submitHandlerRegister.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 12
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Error__WEBPACK_IMPORTED_MODULE_9__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.col1,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.formbox,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form,
        children: [!toggleForms && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.loginform,
          onSubmit: submitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("center", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainheading,
              children: "Login Form"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: loginEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: loginPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "LOGIN",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
            children: ["Not Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, this), toggleForms && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.registerform,
          onSubmit: submitHandlerRegister,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("center", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainheading,
              children: "Register Form"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            placeholder: "user name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: registerEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: registerPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "REGISTER",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
            children: ["Already Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }, this);
}

_s(AuthForm, "SaQgfgua+jbaj3qqyu+QA2Bnvlc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm); // import { useState, useRef } from "react";
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

var _c;

$RefreshReg$(_c, "AuthForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJ1c2VTdGF0ZSIsInRvZ2dsZUZvcm1zIiwic2V0VG9nZ2xlRm9ybXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImlzRXJyb3JEYXRhIiwic2V0SXNFcnJvckRhdGEiLCJ0b2dnbGVGb3JtIiwicHJldiIsImxvZ2luRW1haWxJbnB1dFJlZiIsInVzZVJlZiIsImxvZ2luUGFzc3dvcmRJbnB1dFJlZiIsInJlZ2lzdGVyRW1haWxJbnB1dFJlZiIsInJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZiIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJzaWduSW4iLCJyZWRpcmVjdCIsInJlc3VsdCIsImVycm9yIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRIYW5kbGVyUmVnaXN0ZXIiLCJjbGFzc2VzIiwiY29sMSIsImZvcm1ib3giLCJmb3JtIiwibG9naW5mb3JtIiwibWFpbmhlYWRpbmciLCJsaW5rIiwicmVnaXN0ZXJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NB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QTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1FRDs7R0ExSlE1QyxRO1VBa0JRb0IscUQ7OztLQWxCUnBCLFE7QUE0Sk1BLHVFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGguZTRlMjI0NzBiNzRmZTQ3NDdjNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL1VJL0Vycm9yXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gQXV0aEZvcm0oKSB7XG4gIGNvbnN0IFt0b2dnbGVGb3Jtcywgc2V0VG9nZ2xlRm9ybXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXG4gICAgXCJTb3JyeSBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdC5cIlxuICApO1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgc2V0VG9nZ2xlRm9ybXMoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcbiAgY29uc3QgbG9naW5FbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxvZ2luUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHJlZ2lzdGVyRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWdpc3RlclBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBsb2dpbkVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBsb2dpblBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIC8vIG9wdGlvbmFsOiBBZGQgdmFsaWRhdGlvblxuXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbiAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzdWx0LmVycm9yKSB7XG4gICAgICAgIC8vIHNldCBzb21lIGF1dGggc3RhdGVcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQgKyBcIkxvZ2luIHN1Y2Nlc3NcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldElzRXJyb3JEYXRhKHJlc3VsdC5lcnJvcik7XG4gICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmVycm9yKTtcbiAgICAgICAgLy8gZXJyb3JDb250ZW50KHJlc3VsdC5lcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlclJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSByZWdpc3RlckVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSByZWdpc3RlclBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIC8vIG9wdGlvbmFsOiBBZGQgdmFsaWRhdGlvblxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoZW50ZXJlZEVtYWlsLCBlbnRlcmVkUGFzc3dvcmQpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0SXNFcnJvcih0cnVlKTtcbiAgICAgIHNldElzRXJyb3JEYXRhKFwiYWNjb3VudCBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuXG4gIGlmIChpc0Vycm9yKSB7XG4gICAgcmV0dXJuIDxFcnJvciBlcnJvckRhdGE9e2lzRXJyb3JEYXRhfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29sMX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtYm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XG4gICAgICAgICAgeyF0b2dnbGVGb3JtcyAmJiAoXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluaGVhZGluZ30+TG9naW4gRm9ybTwvaDE+XG4gICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwtaWRcIlxuICAgICAgICAgICAgICAgIHJlZj17bG9naW5FbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlZj17bG9naW5QYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkxPR0lOXCIgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfT48L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgTm90IFJlZ2lzdGVyZWQmbmJzcDs/Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlRm9ybX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0b2dnbGVGb3JtcyAmJiAoXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmVnaXN0ZXJmb3JtfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17c3VibWl0SGFuZGxlclJlZ2lzdGVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PlJlZ2lzdGVyIEZvcm08L2gxPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ1c2VyIG5hbWVcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwtaWRcIlxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJFbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJQYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUkVHSVNURVJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICBBbHJlYWR5IFJlZ2lzdGVyZWQmbmJzcDs/Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlRm9ybX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcblxuLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKSB7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbi8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuLy8gICAgIGhlYWRlcnM6IHtcbi8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICAgIH0sXG4vLyAgIH0pO1xuXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbi8vICAgaWYgKCFyZXNwb25zZS5vaykge1xuLy8gICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gZGF0YTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gQXV0aEZvcm0oKSB7XG4vLyAgIGNvbnN0IFt0b2dnbGVGb3Jtcywgc2V0VG9nZ2xlRm9ybXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4vLyAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4vLyAgICAgc2V0VG9nZ2xlRm9ybXMoKHByZXYpID0+ICFwcmV2KTtcbi8vICAgfTtcbi8vICAgY29uc3QgbG9naW5FbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4vLyAgIGNvbnN0IGxvZ2luUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4vLyAgIGNvbnN0IHJlZ2lzdGVyRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuLy8gICBjb25zdCByZWdpc3RlclBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuLy8gICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbi8vICAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xuLy8gICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4vLyAgIH1cblxuLy8gICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGxvZ2luRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuLy8gICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGxvZ2luUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4vLyAgICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbi8vICAgICBpZiAoaXNMb2dpbikge1xuLy8gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuLy8gICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4vLyAgICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4vLyAgICAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4vLyAgICAgICB9KTtcblxuLy8gICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbi8vICAgICAgICAgLy8gc2V0IHNvbWUgYXV0aCBzdGF0ZVxuLy8gICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCArIFwiTG9naW4gc3VjY2Vzc1wiKTtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyUmVnaXN0ZXIoZXZlbnQpIHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgICAgY29uc3QgZW50ZXJlZEVtYWlsID0gcmVnaXN0ZXJFbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4vLyAgICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbi8vICAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyKGVudGVyZWRFbWFpbCwgZW50ZXJlZFBhc3N3b3JkKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbDF9PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybWJveH0+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuLy8gICAgICAgICAgIHshdG9nZ2xlRm9ybXMgJiYgKFxuLy8gICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuLy8gICAgICAgICAgICAgICA8Y2VudGVyPlxuLy8gICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PkxvZ2luIEZvcm08L2gxPlxuLy8gICAgICAgICAgICAgICA8L2NlbnRlcj5cbi8vICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbi8vICAgICAgICAgICAgICAgICByZWY9e2xvZ2luRW1haWxJbnB1dFJlZn1cbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgICAgICByZWY9e2xvZ2luUGFzc3dvcmRJbnB1dFJlZn1cbi8vICAgICAgICAgICAgICAgLz5cblxuLy8gICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJMT0dJTlwiIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn0+PC9CdXR0b24+XG5cbi8vICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuLy8gICAgICAgICAgICAgICAgIE5vdCBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuLy8gICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbi8vICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4vLyAgICAgICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICA8L2Zvcm0+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgICB7dG9nZ2xlRm9ybXMgJiYgKFxuLy8gICAgICAgICAgICAgPGZvcm1cbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZ2lzdGVyZm9ybX1cbi8vICAgICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJSZWdpc3Rlcn1cbi8vICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgPGNlbnRlcj5cbi8vICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5SZWdpc3RlciBGb3JtPC9oMT5cbi8vICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCIgLz5cbi8vICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbi8vICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyRW1haWxJbnB1dFJlZn1cbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbi8vICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZn1cbi8vICAgICAgICAgICAgICAgLz5cblxuLy8gICAgICAgICAgICAgICA8QnV0dG9uXG4vLyAgICAgICAgICAgICAgICAgY29udGVudD1cIlJFR0lTVEVSXCJcbi8vICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4vLyAgICAgICAgICAgICAgID48L0J1dHRvbj5cblxuLy8gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4vLyAgICAgICAgICAgICAgICAgQWxyZWFkeSBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuLy8gICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbi8vICAgICAgICAgICAgICAgICAgIExvZ2luXG4vLyAgICAgICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICA8L2Zvcm0+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9