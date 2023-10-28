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

              _context2.prev = 5;
              _context2.next = 8;
              return createUser(enteredEmail, enteredPassword, enteredName);

            case 8:
              result = _context2.sent;
              setIsLoading(false);
              _context2.next = 17;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](5);
              console.log(_context2.t0);
              setIsLoading(false);
              setIsError(true);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 12]]);
    }));
    return _submitHandlerRegister.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_11__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
                lineNumber: 121,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "email",
              placeholder: "email-id",
              ref: loginEmailInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "password",
              placeholder: "password",
              ref: loginPasswordInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
              content: "LOGIN",
              onClick: switchAuthModeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
              children: ["Not Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                onClick: toggleForm,
                className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
                children: "Register"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
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
                lineNumber: 153,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              placeholder: "user name",
              ref: registerNameInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "email",
              placeholder: "email-id",
              ref: registerEmailInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "password",
              placeholder: "password",
              ref: registerPasswordInputRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
              content: "REGISTER",
              onClick: switchAuthModeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
              children: ["Already Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                onClick: toggleForm,
                className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Global_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImVudGVyZWROYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJBdXRoRm9ybSIsInVzZVN0YXRlIiwidG9nZ2xlRm9ybXMiLCJzZXRUb2dnbGVGb3JtcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInRvZ2dsZUZvcm0iLCJwcmV2IiwibG9naW5FbWFpbElucHV0UmVmIiwidXNlUmVmIiwibG9naW5QYXNzd29yZElucHV0UmVmIiwicmVnaXN0ZXJFbWFpbElucHV0UmVmIiwicmVnaXN0ZXJQYXNzd29yZElucHV0UmVmIiwicmVnaXN0ZXJOYW1lSW5wdXRSZWYiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZFBhc3N3b3JkIiwic2lnbkluIiwicmVkaXJlY3QiLCJyZXN1bHQiLCJlcnJvciIsInJlcGxhY2UiLCJzdWJtaXRIYW5kbGVyUmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsImNvbDEiLCJmb3JtYm94IiwiZm9ybSIsImxvZ2luZm9ybSIsIm1haW5oZWFkaW5nIiwibGluayIsInJlZ2lzdGVyZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC5kYjJjMTMwNDQ1MmZhYzRjMTVhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXV0aC1mb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vVUkvRXJyb3JcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9HbG9iYWwvRm9vdGVyXCI7XG5pbXBvcnQgRXJyb3JDb21wIGZyb20gXCIuLi9VSS9FcnJvckNvbXBcIjtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQsIGVudGVyZWROYW1lKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkLCBlbnRlcmVkTmFtZSB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuICBjb25zdCBbdG9nZ2xlRm9ybXMsIHNldFRvZ2dsZUZvcm1zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFcnJvckRhdGEsIHNldElzRXJyb3JEYXRhXSA9IHVzZVN0YXRlKFxuICAgIFwiU29ycnkgYnV0IHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3QuXCJcbiAgKTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZUZvcm1zKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IGxvZ2luRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsb2dpblBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCByZWdpc3RlckVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJlZ2lzdGVyTmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gbG9naW5FbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gbG9naW5QYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldElzRXJyb3JEYXRhKHJlc3VsdC5lcnJvcik7XG4gICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlclJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSByZWdpc3RlckVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSByZWdpc3RlclBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkTmFtZSA9IHJlZ2lzdGVyTmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihcbiAgICAgICAgZW50ZXJlZEVtYWlsLFxuICAgICAgICBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICAgIGVudGVyZWROYW1lXG4gICAgICApO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgfVxuICB9XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiA8RXJyb3JDb21wIGVycm9yRGF0YT17aXNFcnJvckRhdGF9IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2wxfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybWJveH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XG4gICAgICAgICAgICB7IXRvZ2dsZUZvcm1zICYmIChcbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5Mb2dpbiBGb3JtPC9oMT5cbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17bG9naW5FbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICByZWY9e2xvZ2luUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIkxPR0lOXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICBOb3QgUmVnaXN0ZXJlZCZuYnNwOz8mbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWdpc3RlcmZvcm19XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJSZWdpc3Rlcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5SZWdpc3RlciBGb3JtPC9oMT5cbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJOYW1lSW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJFbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIlJFR0lTVEVSXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICA+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICBBbHJlYWR5IFJlZ2lzdGVyZWQmbmJzcDs/Jm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVGb3JtfSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuXG4vKlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXV0aC1mb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vVUkvRXJyb3JcIjtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9zaWdudXBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBBdXRoRm9ybSgpIHtcbiAgY29uc3QgW3RvZ2dsZUZvcm1zLCBzZXRUb2dnbGVGb3Jtc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXJyb3JEYXRhLCBzZXRJc0Vycm9yRGF0YV0gPSB1c2VTdGF0ZShcbiAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVGb3JtcygocHJldikgPT4gIXByZXYpO1xuICB9O1xuICBjb25zdCBsb2dpbkVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbG9naW5QYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgcmVnaXN0ZXJFbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWdpc3Rlck5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIoKSB7XG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGxvZ2luRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGxvZ2luUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgLy8gc2V0IHNvbWUgYXV0aCBzdGF0ZVxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCArIFwiTG9naW4gc3VjY2Vzc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0SXNFcnJvckRhdGEocmVzdWx0LmVycm9yKTtcbiAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xuICAgICAgICAvLyBlcnJvckNvbnRlbnQocmVzdWx0LmVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWROYW1lID0gcmVnaXN0ZXJOYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyKFxuICAgICAgICBlbnRlcmVkRW1haWwsXG4gICAgICAgIGVudGVyZWRQYXNzd29yZCxcbiAgICAgICAgZW50ZXJlZE5hbWVcbiAgICAgICk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgICAgc2V0SXNFcnJvckRhdGEoXCJhY2NvdW50IGFscmVhZHkgZXhpc3RzXCIpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG5cbiAgaWYgKGlzRXJyb3IpIHtcbiAgICByZXR1cm4gPEVycm9yIGVycm9yRGF0YT17aXNFcnJvckRhdGF9IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2wxfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1ib3h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbiAgICAgICAgICB7IXRvZ2dsZUZvcm1zICYmIChcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5Mb2dpbiBGb3JtPC9oMT5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbC1pZFwiXG4gICAgICAgICAgICAgICAgcmVmPXtsb2dpbkVtYWlsSW5wdXRSZWZ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVmPXtsb2dpblBhc3N3b3JkSW5wdXRSZWZ9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiTE9HSU5cIiBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9PjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICBOb3QgUmVnaXN0ZXJlZCZuYnNwOz8mbmJzcDtcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVGb3JtfSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RvZ2dsZUZvcm1zICYmIChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWdpc3RlcmZvcm19XG4gICAgICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyUmVnaXN0ZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluaGVhZGluZ30+UmVnaXN0ZXIgRm9ybTwvaDE+XG4gICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VyIG5hbWVcIlxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJOYW1lSW5wdXRSZWZ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbC1pZFwiXG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlckVtYWlsSW5wdXRSZWZ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlclBhc3N3b3JkSW5wdXRSZWZ9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJSRUdJU1RFUlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgICAgICA+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIEFscmVhZHkgUmVnaXN0ZXJlZCZuYnNwOz8mbmJzcDtcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVGb3JtfSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=