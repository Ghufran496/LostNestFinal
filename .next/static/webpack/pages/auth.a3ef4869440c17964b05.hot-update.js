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
/* harmony import */ var _Global_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Global/Footer */ "./components/Global/Footer.js");
/* harmony import */ var _UI_ErrorComp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UI/ErrorComp */ "./components/UI/ErrorComp.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\auth\\auth-form.js",
    _s = $RefreshSig$();












function createUser(_x, _x2, _x3) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(email, password, enteredName) {
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
                password: password,
                enteredName: enteredName
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
            console.log(data.message);

            if (response.ok) {
              _context3.next = 9;
              break;
            }

            throw new _UI_Error__WEBPACK_IMPORTED_MODULE_9__["default"](data.message || "Something went wrong!");

          case 9:
            return _context3.abrupt("return", data);

          case 10:
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
  var registerNameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLogin = _useState5[0],
      setIsLogin = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function switchAuthModeHandler() {
    setIsLogin(function (prevState) {
      return !prevState;
    });
  }

  function submitHandler(_x4) {
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
                router.replace("/dashboard");
                setIsLoading(false);
              }

              if (result.error) {
                setIsLoading(false);
                setIsErrorData(result.error);
                setIsError(true);
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

  function submitHandlerRegister(_x5) {
    return _submitHandlerRegister.apply(this, arguments);
  }

  function _submitHandlerRegister() {
    _submitHandlerRegister = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var enteredEmail, enteredPassword, enteredName, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsLoading(true);
              event.preventDefault();
              enteredEmail = registerEmailInputRef.current.value;
              enteredPassword = registerPasswordInputRef.current.value;
              enteredName = registerNameInputRef.current.value; // optional: Add validation

              _context2.next = 7;
              return createUser(enteredEmail, enteredPassword, enteredName);

            case 7:
              result = _context2.sent;

              if (!result.error) {
                setIsLoading(false);
              }

              if (result.error) {
                setIsLoading(false);
                setIsErrorData(result.error);
                setIsError(true);
              } // try {
              //   const result = await createUser(
              //     enteredEmail,
              //     enteredPassword,
              //     enteredName
              //   );
              //   setIsLoading(false);
              // } catch (error) {
              //   console.log(error);
              //   setIsLoading(false);
              //   setIsError(true);
              //   setIsErrorData(result.error);
              // }


            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _submitHandlerRegister.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 12
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
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
                lineNumber: 134,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "email",
              placeholder: "email-id",
              ref: loginEmailInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "password",
              placeholder: "password",
              ref: loginPasswordInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
              content: "LOGIN",
              onClick: switchAuthModeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
              children: ["Not Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                onClick: toggleForm,
                className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
                children: "Register"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this), toggleForms && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.registerform,
            onSubmit: submitHandlerRegister,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("center", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
                className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainheading,
                children: "Register Form"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              placeholder: "user name",
              ref: registerNameInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "email",
              placeholder: "email-id",
              ref: registerEmailInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "password",
              placeholder: "password",
              ref: registerPasswordInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
              content: "REGISTER",
              onClick: switchAuthModeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
              children: ["Already Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                onClick: toggleForm,
                className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Global_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, this);
}

_s(AuthForm, "TZpbrw6dkgHFirJP2OwSG1nzwY0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);
/*
import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import Loading from "../UI/Loading";
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
        // set some auth state
        router.replace("/dashboard");
        // console.log(result + "Login success");
        console.log(result);
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
    const enteredName = registerNameInputRef.current.value;
    // optional: Add validation

    try {
      const result = await createUser(
        enteredEmail,
        enteredPassword,
        enteredName
      );
      setIsLoading(false);
      // console.log(result);
      //console.log(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setIsErrorData("account already exists");
    }
  }
  if (isLoading) {
    return <Loading />;
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
              <input
                type="text"
                placeholder="user name"
                ref={registerNameInputRef}
              />
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
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImVudGVyZWROYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJvayIsIkVycm9yIiwiQXV0aEZvcm0iLCJ1c2VTdGF0ZSIsInRvZ2dsZUZvcm1zIiwic2V0VG9nZ2xlRm9ybXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImlzRXJyb3JEYXRhIiwic2V0SXNFcnJvckRhdGEiLCJ0b2dnbGVGb3JtIiwicHJldiIsImxvZ2luRW1haWxJbnB1dFJlZiIsInVzZVJlZiIsImxvZ2luUGFzc3dvcmRJbnB1dFJlZiIsInJlZ2lzdGVyRW1haWxJbnB1dFJlZiIsInJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZiIsInJlZ2lzdGVyTmFtZUlucHV0UmVmIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzd2l0Y2hBdXRoTW9kZUhhbmRsZXIiLCJwcmV2U3RhdGUiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRQYXNzd29yZCIsInNpZ25JbiIsInJlZGlyZWN0IiwicmVzdWx0IiwiZXJyb3IiLCJyZXBsYWNlIiwic3VibWl0SGFuZGxlclJlZ2lzdGVyIiwiY2xhc3NlcyIsImNvbDEiLCJmb3JtYm94IiwiZm9ybSIsImxvZ2luZm9ybSIsIm1haW5oZWFkaW5nIiwibGluayIsInJlZ2lzdGVyZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoLmEzZWY0ODY5NDQwYzE3OTY0YjA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9VSS9FcnJvclwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0dsb2JhbC9Gb290ZXJcIjtcbmltcG9ydCBFcnJvckNvbXAgZnJvbSBcIi4uL1VJL0Vycm9yQ29tcFwiO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCwgZW50ZXJlZE5hbWUpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9zaWdudXBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQsIGVudGVyZWROYW1lIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gQXV0aEZvcm0oKSB7XG4gIGNvbnN0IFt0b2dnbGVGb3Jtcywgc2V0VG9nZ2xlRm9ybXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXG4gICAgXCJTb3JyeSBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdC5cIlxuICApO1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgc2V0VG9nZ2xlRm9ybXMoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcbiAgY29uc3QgbG9naW5FbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxvZ2luUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHJlZ2lzdGVyRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWdpc3RlclBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcmVnaXN0ZXJOYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBsb2dpbkVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBsb2dpblBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIC8vIG9wdGlvbmFsOiBBZGQgdmFsaWRhdGlvblxuXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbiAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0SXNFcnJvckRhdGEocmVzdWx0LmVycm9yKTtcbiAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWROYW1lID0gcmVnaXN0ZXJOYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoZW50ZXJlZEVtYWlsLCBlbnRlcmVkUGFzc3dvcmQsIGVudGVyZWROYW1lKTtcbiAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0SXNFcnJvckRhdGEocmVzdWx0LmVycm9yKTtcbiAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoXG4gICAgLy8gICAgIGVudGVyZWRFbWFpbCxcbiAgICAvLyAgICAgZW50ZXJlZFBhc3N3b3JkLFxuICAgIC8vICAgICBlbnRlcmVkTmFtZVxuICAgIC8vICAgKTtcbiAgICAvLyAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgLy8gICBzZXRJc0Vycm9yKHRydWUpO1xuICAgIC8vICAgc2V0SXNFcnJvckRhdGEocmVzdWx0LmVycm9yKTtcbiAgICAvLyB9XG4gIH1cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuXG4gIGlmIChpc0Vycm9yKSB7XG4gICAgcmV0dXJuIDxFcnJvckNvbXAgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbDF9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtYm94fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbiAgICAgICAgICAgIHshdG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PkxvZ2luIEZvcm08L2gxPlxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwtaWRcIlxuICAgICAgICAgICAgICAgICAgcmVmPXtsb2dpbkVtYWlsSW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17bG9naW5QYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwiTE9HSU5cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgID48L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgIE5vdCBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlRm9ybX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0b2dnbGVGb3JtcyAmJiAoXG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZ2lzdGVyZm9ybX1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17c3VibWl0SGFuZGxlclJlZ2lzdGVyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PlJlZ2lzdGVyIEZvcm08L2gxPlxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlck5hbWVJbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwtaWRcIlxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlckVtYWlsSW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJQYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwiUkVHSVNURVJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgID48L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgIEFscmVhZHkgUmVnaXN0ZXJlZCZuYnNwOz8mbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG5cbi8qXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9VSS9FcnJvclwiO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuICBjb25zdCBbdG9nZ2xlRm9ybXMsIHNldFRvZ2dsZUZvcm1zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFcnJvckRhdGEsIHNldElzRXJyb3JEYXRhXSA9IHVzZVN0YXRlKFxuICAgIFwiU29ycnkgYnV0IHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3QuXCJcbiAgKTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZUZvcm1zKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IGxvZ2luRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsb2dpblBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCByZWdpc3RlckVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJlZ2lzdGVyTmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gbG9naW5FbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gbG9naW5QYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgICAvLyBzZXQgc29tZSBhdXRoIHN0YXRlXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0ICsgXCJMb2dpbiBzdWNjZXNzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRJc0Vycm9yRGF0YShyZXN1bHQuZXJyb3IpO1xuICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcik7XG4gICAgICAgIC8vIGVycm9yQ29udGVudChyZXN1bHQuZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXJSZWdpc3RlcihldmVudCkge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gcmVnaXN0ZXJFbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZE5hbWUgPSByZWdpc3Rlck5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIC8vIG9wdGlvbmFsOiBBZGQgdmFsaWRhdGlvblxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoXG4gICAgICAgIGVudGVyZWRFbWFpbCxcbiAgICAgICAgZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgICBlbnRlcmVkTmFtZVxuICAgICAgKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgICBzZXRJc0Vycm9yRGF0YShcImFjY291bnQgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICB9XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiA8RXJyb3IgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbDF9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybWJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICAgIHshdG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PkxvZ2luIEZvcm08L2gxPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICByZWY9e2xvZ2luRW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e2xvZ2luUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJMT0dJTlwiIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn0+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIE5vdCBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZ2lzdGVyZm9ybX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJSZWdpc3Rlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5SZWdpc3RlciBGb3JtPC9oMT5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlck5hbWVJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyRW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlJFR0lTVEVSXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgICAgID48L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgQWxyZWFkeSBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==