webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/UI/Error.js":
/*!********************************!*\
  !*** ./components/UI/Error.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Error_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error.module.css */ "./components/UI/Error.module.css");
/* harmony import */ var _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Error_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\UI\\Error.js";



function Error(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.verticalcenter,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notFound,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.head2,
          children: "Oops! Page Not To Be Found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.para,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Error message: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,
            children: props.errorData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.linker,
          children: "Back to Homepage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = Error;
/* harmony default export */ __webpack_exports__["default"] = (Error);

var _c;

$RefreshReg$(_c, "Error");

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

/***/ }),

/***/ "./components/UI/Error.module.css":
/*!****************************************!*\
  !*** ./components/UI/Error.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Error.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Error.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Error.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Error.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Error.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Error.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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
/* harmony import */ var _UI_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loader */ "./components/UI/Loader.js");
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
              _context3.next = 9;
              break;
            }

            console.log(data.message);
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

function AuthForm(props) {
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
                router.replace("/dashboard");
                console.log(result + "Login success");
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
              setIsLoading(false); //console.log(result);

              setIsLoading(false);
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              //console.log(error);
              setIsLoading(false);
              setIsError(true); // setIsErrorData(error);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 12]]);
    }));
    return _submitHandlerRegister.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
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

/***/ }),

/***/ "./components/auth/auth-form.module.css":
/*!**********************************************!*\
  !*** ./components/auth/auth-form.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./auth-form.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/auth/auth-form.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./auth-form.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/auth/auth-form.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./auth-form.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/auth/auth-form.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Error.module.css":
/*!****************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/UI/Error.module.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* body {\r\n  background-color: #f1f1f1;\r\n} */\r\n\r\n.Error_verticalcenter__2j26Q {\r\n  min-height: 100%;\r\n  min-height: 100vh;\r\n  background-image: url(\"/images/errorbg2.png\");\r\n  background-size: cover; /* This property ensures the image covers the entire background */\r\n  background-repeat: no-repeat;\r\n\r\n  display: -moz-box;\r\n\r\n  display: flex;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  color: white;\r\n}\r\n\r\n.Error_container__2B6Bb {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n.Error_linker__1y2Q_ {\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.Error_notfound__3eQg2 {\r\n  padding: 20px;\r\n}\r\n.Error_head1__3BmbB {\r\n  font-size: 80px;\r\n}\r\n\r\n.Error_head2__vkwMU {\r\n  font-size: 30px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.Error_para__1LfmO {\r\n  font-size: 18px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.Error_underline__AVJ2X {\r\n  text-decoration: underline;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/UI/Error.module.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;EACE,gBAAgB;EAChB,iBAAiB;EACjB,6CAA6C;EAC7C,sBAAsB,EAAE,iEAAiE;EACzF,4BAA4B;;EAE5B,iBAAa;;EAAb,aAAa;EACb,sBAAmB;OAAnB,mBAAmB;EACnB,qBAAuB;OAAvB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["/* body {\r\n  background-color: #f1f1f1;\r\n} */\r\n\r\n.verticalcenter {\r\n  min-height: 100%;\r\n  min-height: 100vh;\r\n  background-image: url(\"/images/errorbg2.png\");\r\n  background-size: cover; /* This property ensures the image covers the entire background */\r\n  background-repeat: no-repeat;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n.linker {\r\n  display: inline-block;\r\n  padding: 10px 20px;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.notfound {\r\n  padding: 20px;\r\n}\r\n.head1 {\r\n  font-size: 80px;\r\n}\r\n\r\n.head2 {\r\n  font-size: 30px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.para {\r\n  font-size: 18px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.underline {\r\n  text-decoration: underline;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"verticalcenter": "Error_verticalcenter__2j26Q",
	"container": "Error_container__2B6Bb",
	"linker": "Error_linker__1y2Q_",
	"notfound": "Error_notfound__3eQg2",
	"head1": "Error_head1__3BmbB",
	"head2": "Error_head2__vkwMU",
	"para": "Error_para__1LfmO",
	"underline": "Error_underline__AVJ2X"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/auth/auth-form.module.css":
/*!**********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/auth/auth-form.module.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".auth-form_auth__3FfGf {\n  margin: 3rem auto;\n  width: 95%;\n  max-width: 25rem;\n  border-radius: 6px;\n  background-color: #38015c;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  padding: 1rem;\n  text-align: center;\n}\n\n.auth-form_auth__3FfGf h1 {\n  text-align: center;\n  color: white;\n}\n\n.auth-form_control__2m7EA {\n  margin-bottom: 0.5rem;\n}\n\n.auth-form_control__2m7EA label {\n  display: block;\n  color: white;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.auth-form_control__2m7EA input {\n  font: inherit;\n  background-color: #f1e1fc;\n  color: #38015c;\n  border-radius: 4px;\n  border: 1px solid white;\n  width: 100%;\n  text-align: left;\n  padding: 0.25rem;\n}\n\n.auth-form_actions__2JT2z {\n  margin-top: 1.5rem;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-align: center;\n       align-items: center;\n}\n\n.auth-form_actions__2JT2z button {\n  cursor: pointer;\n  font: inherit;\n  color: white;\n  background-color: #9f5ccc;\n  border: 1px solid #9f5ccc;\n  border-radius: 4px;\n  padding: 0.5rem 2.5rem;\n}\n\n.auth-form_actions__2JT2z button:hover {\n  background-color: #873abb;\n  border-color: #873abb;\n}\n\n.auth-form_actions__2JT2z .auth-form_toggle__2PHeb {\n  margin-top: 1rem;\n  background-color: transparent;\n  color: #9f5ccc;\n  border: none;\n  padding: 0.15rem 1.5rem;\n}\n\n.auth-form_actions__2JT2z .auth-form_toggle__2PHeb:hover {\n  background-color: transparent;\n  color: #ae82cc;\n}\n\n/*-----------------------------------\n-\n----------------------------*/\n\n.auth-form_col1__X03k4 {\n  display: -moz-box;\n  display: flex;\n  -moz-box-align: center;\n       align-items: center;\n  -moz-box-pack: center;\n       justify-content: center;\n  margin-top: 3rem;\n}\n\n.auth-form_formbox__2LUr9 {\n  width: 300px;\n\n  height: 450px;\n\n  position: relative;\n\n  /* top: 50px;\n\n  left: 120px; */\n\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.auth-form_mainheading__2MU_F {\n  color: #311465;\n\n  padding-bottom: 20px;\n  font-size: 3rem;\n}\n\n.auth-form_form__2RPAc {\n  position: relative;\n\n  margin: 0 auto 100px;\n\n  padding: 45px;\n\n  text-align: center;\n}\n\n.auth-form_form__2RPAc input {\n  font-family: sans-serif;\n\n  outline: none;\n\n  border: none;\n\n  border-bottom: 1px solid black;\n\n  width: 100%;\n\n  margin: 0 0 15px;\n\n  padding: 15px;\n\n  font-size: 14px;\n}\n\n.auth-form_form__2RPAc .auth-form_message__1rnC2 {\n  font-size: 12px;\n\n  margin: 15px 0 0;\n\n  color: white;\n}\n\n.auth-form_link__jF6q5 {\n  color: white;\n  font-size: 1.5rem;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.auth-form_defination__3sTAd {\n  text-align: left;\n\n  font-size: 30px;\n\n  color: white;\n\n  font-family: \"Kaushan Script\", cursive;\n\n  padding-left: 60px;\n}\n", "",{"version":3,"sources":["webpack://components/auth/auth-form.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,gDAAwC;UAAxC,wCAAwC;EACxC,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAa;EAAb,aAAa;EACb,yBAAsB;EAAtB,0BAAsB;OAAtB,sBAAsB;EACtB,sBAAmB;OAAnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,cAAc;EACd,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;;6BAE6B;;AAE7B;EACE,iBAAa;EAAb,aAAa;EACb,sBAAmB;OAAnB,mBAAmB;EACnB,qBAAuB;OAAvB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,YAAY;;EAEZ,aAAa;;EAEb,kBAAkB;;EAElB;;gBAEc;;EAEd,8BAA8B;AAChC;;AAEA;EACE,cAAc;;EAEd,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,kBAAkB;;EAElB,oBAAoB;;EAEpB,aAAa;;EAEb,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;;EAEvB,aAAa;;EAEb,YAAY;;EAEZ,8BAA8B;;EAE9B,WAAW;;EAEX,gBAAgB;;EAEhB,aAAa;;EAEb,eAAe;AACjB;;AAEA;EACE,eAAe;;EAEf,gBAAgB;;EAEhB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,gBAAgB;;EAEhB,eAAe;;EAEf,YAAY;;EAEZ,sCAAsC;;EAEtC,kBAAkB;AACpB","sourcesContent":[".auth {\n  margin: 3rem auto;\n  width: 95%;\n  max-width: 25rem;\n  border-radius: 6px;\n  background-color: #38015c;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  padding: 1rem;\n  text-align: center;\n}\n\n.auth h1 {\n  text-align: center;\n  color: white;\n}\n\n.control {\n  margin-bottom: 0.5rem;\n}\n\n.control label {\n  display: block;\n  color: white;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.control input {\n  font: inherit;\n  background-color: #f1e1fc;\n  color: #38015c;\n  border-radius: 4px;\n  border: 1px solid white;\n  width: 100%;\n  text-align: left;\n  padding: 0.25rem;\n}\n\n.actions {\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.actions button {\n  cursor: pointer;\n  font: inherit;\n  color: white;\n  background-color: #9f5ccc;\n  border: 1px solid #9f5ccc;\n  border-radius: 4px;\n  padding: 0.5rem 2.5rem;\n}\n\n.actions button:hover {\n  background-color: #873abb;\n  border-color: #873abb;\n}\n\n.actions .toggle {\n  margin-top: 1rem;\n  background-color: transparent;\n  color: #9f5ccc;\n  border: none;\n  padding: 0.15rem 1.5rem;\n}\n\n.actions .toggle:hover {\n  background-color: transparent;\n  color: #ae82cc;\n}\n\n/*-----------------------------------\n-\n----------------------------*/\n\n.col1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 3rem;\n}\n\n.formbox {\n  width: 300px;\n\n  height: 450px;\n\n  position: relative;\n\n  /* top: 50px;\n\n  left: 120px; */\n\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.mainheading {\n  color: #311465;\n\n  padding-bottom: 20px;\n  font-size: 3rem;\n}\n\n.form {\n  position: relative;\n\n  margin: 0 auto 100px;\n\n  padding: 45px;\n\n  text-align: center;\n}\n\n.form input {\n  font-family: sans-serif;\n\n  outline: none;\n\n  border: none;\n\n  border-bottom: 1px solid black;\n\n  width: 100%;\n\n  margin: 0 0 15px;\n\n  padding: 15px;\n\n  font-size: 14px;\n}\n\n.form .message {\n  font-size: 12px;\n\n  margin: 15px 0 0;\n\n  color: white;\n}\n\n.link {\n  color: white;\n  font-size: 1.5rem;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.defination {\n  text-align: left;\n\n  font-size: 30px;\n\n  color: white;\n\n  font-family: \"Kaushan Script\", cursive;\n\n  padding-left: 60px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"auth": "auth-form_auth__3FfGf",
	"control": "auth-form_control__2m7EA",
	"actions": "auth-form_actions__2JT2z",
	"toggle": "auth-form_toggle__2PHeb",
	"col1": "auth-form_col1__X03k4",
	"formbox": "auth-form_formbox__2LUr9",
	"mainheading": "auth-form_mainheading__2MU_F",
	"form": "auth-form_form__2RPAc",
	"message": "auth-form_message__1rnC2",
	"link": "auth-form_link__jF6q5",
	"defination": "auth-form_defination__3sTAd"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9FcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9FcnJvci5tb2R1bGUuY3NzP2FmODkiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0ubW9kdWxlLmNzcz80Y2UxIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9FcnJvci5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvaW5kZXguanMiXSwibmFtZXMiOlsiRXJyb3IiLCJwcm9wcyIsImNsYXNzZXMiLCJ2ZXJ0aWNhbGNlbnRlciIsImNvbnRhaW5lciIsIm5vdEZvdW5kIiwiaGVhZDIiLCJwYXJhIiwidW5kZXJsaW5lIiwiZXJyb3JEYXRhIiwibGlua2VyIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJ1c2VTdGF0ZSIsInRvZ2dsZUZvcm1zIiwic2V0VG9nZ2xlRm9ybXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImlzRXJyb3JEYXRhIiwic2V0SXNFcnJvckRhdGEiLCJ0b2dnbGVGb3JtIiwicHJldiIsImxvZ2luRW1haWxJbnB1dFJlZiIsInVzZVJlZiIsImxvZ2luUGFzc3dvcmRJbnB1dFJlZiIsInJlZ2lzdGVyRW1haWxJbnB1dFJlZiIsInJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZiIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJzaWduSW4iLCJyZWRpcmVjdCIsInJlc3VsdCIsImVycm9yIiwicmVwbGFjZSIsInN1Ym1pdEhhbmRsZXJSZWdpc3RlciIsImNvbDEiLCJmb3JtYm94IiwiZm9ybSIsImxvZ2luZm9ybSIsIm1haW5oZWFkaW5nIiwibGluayIsInJlZ2lzdGVyZm9ybSIsIkF1dGhQYWdlIiwidXNlRWZmZWN0IiwiZ2V0U2Vzc2lvbiIsInRoZW4iLCJzZXNzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDcEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHdEQUFPLENBQUNDLGNBQXhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELHdEQUFPLENBQUNFLFNBQXhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFFRix3REFBTyxDQUFDRyxRQUF4QjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBRUgsd0RBQU8sQ0FBQ0ksS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVKLHdEQUFPLENBQUNLLElBQXhCO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFRLHFCQUFTLEVBQUVMLHdEQUFPLENBQUNNLFNBQTNCO0FB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QSxVQUFQO0FBQ0Q7O0dBbkJRdUMsUTtVQUVRdkIscUQ7OztLQUZSdUIsUTtBQXFCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC40NWUzNDc1Y2VlMTNmMGVjNDEzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9FcnJvci5tb2R1bGUuY3NzXCI7XHJcbmZ1bmN0aW9uIEVycm9yKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZlcnRpY2FsY2VudGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdEZvdW5kfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZDJ9Pk9vcHMhIFBhZ2UgTm90IFRvIEJlIEZvdW5kPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmF9PlxyXG4gICAgICAgICAgICA8Yj5FcnJvciBtZXNzYWdlOiA8L2I+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc2VzLnVuZGVybGluZX0+e3Byb3BzLmVycm9yRGF0YX08L3N0cm9uZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua2VyfT5cclxuICAgICAgICAgICAgQmFjayB0byBIb21lcGFnZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0Vycm9yLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0Vycm9yLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9FcnJvci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL1VJL0xvYWRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9VSS9FcnJvclwiO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gQXV0aEZvcm0ocHJvcHMpIHtcbiAgY29uc3QgW3RvZ2dsZUZvcm1zLCBzZXRUb2dnbGVGb3Jtc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXJyb3JEYXRhLCBzZXRJc0Vycm9yRGF0YV0gPSB1c2VTdGF0ZShcbiAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVGb3JtcygocHJldikgPT4gIXByZXYpO1xuICB9O1xuICBjb25zdCBsb2dpbkVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbG9naW5QYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgcmVnaXN0ZXJFbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIoKSB7XG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGxvZ2luRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGxvZ2luUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgLy8gc2V0IHNvbWUgYXV0aCBzdGF0ZVxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCArIFwiTG9naW4gc3VjY2Vzc1wiKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0SXNFcnJvckRhdGEocmVzdWx0LmVycm9yKTtcbiAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xuICAgICAgICAvLyBlcnJvckNvbnRlbnQocmVzdWx0LmVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZCk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0SXNFcnJvcih0cnVlKTtcblxuICAgICAgLy8gc2V0SXNFcnJvckRhdGEoZXJyb3IpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkZXIgLz47XG4gIH1cblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiA8RXJyb3IgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbDF9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybWJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICAgIHshdG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PkxvZ2luIEZvcm08L2gxPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICByZWY9e2xvZ2luRW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e2xvZ2luUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJMT0dJTlwiIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn0+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIE5vdCBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZ2lzdGVyZm9ybX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJSZWdpc3Rlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5SZWdpc3RlciBGb3JtPC9oMT5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyRW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlJFR0lTVEVSXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgICAgID48L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgQWxyZWFkeSBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG5cbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuXG4vLyBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4vLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbi8vICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbi8vICAgICB9LFxuLy8gICB9KTtcblxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4vLyAgIGlmICghcmVzcG9uc2Uub2spIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIGRhdGE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuLy8gICBjb25zdCBbdG9nZ2xlRm9ybXMsIHNldFRvZ2dsZUZvcm1zXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuLy8gICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuLy8gICAgIHNldFRvZ2dsZUZvcm1zKChwcmV2KSA9PiAhcHJldik7XG4vLyAgIH07XG4vLyAgIGNvbnN0IGxvZ2luRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuLy8gICBjb25zdCBsb2dpblBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuLy8gICBjb25zdCByZWdpc3RlckVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbi8vICAgY29uc3QgcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cbi8vICAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbi8vICAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuLy8gICB9XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbi8vICAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBsb2dpbkVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbi8vICAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBsb2dpblBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuLy8gICAgIC8vIG9wdGlvbmFsOiBBZGQgdmFsaWRhdGlvblxuXG4vLyAgICAgaWYgKGlzTG9naW4pIHtcbi8vICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbi8vICAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuLy8gICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuLy8gICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuLy8gICAgICAgfSk7XG5cbi8vICAgICAgIGlmICghcmVzdWx0LmVycm9yKSB7XG4vLyAgICAgICAgIC8vIHNldCBzb21lIGF1dGggc3RhdGVcbi8vICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQgKyBcIkxvZ2luIHN1Y2Nlc3NcIik7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlclJlZ2lzdGVyKGV2ZW50KSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuLy8gICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4vLyAgICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbi8vICAgICB0cnkge1xuLy8gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2wxfT5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1ib3h9PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbi8vICAgICAgICAgICB7IXRvZ2dsZUZvcm1zICYmIChcbi8vICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbi8vICAgICAgICAgICAgICAgPGNlbnRlcj5cbi8vICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5Mb2dpbiBGb3JtPC9oMT5cbi8vICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbC1pZFwiXG4vLyAgICAgICAgICAgICAgICAgcmVmPXtsb2dpbkVtYWlsSW5wdXRSZWZ9XG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcmVmPXtsb2dpblBhc3N3b3JkSW5wdXRSZWZ9XG4vLyAgICAgICAgICAgICAgIC8+XG5cbi8vICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiTE9HSU5cIiBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9PjwvQnV0dG9uPlxuXG4vLyAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbi8vICAgICAgICAgICAgICAgICBOb3QgUmVnaXN0ZXJlZCZuYnNwOz8mbmJzcDtcbi8vICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVGb3JtfSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4vLyAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuLy8gICAgICAgICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICAgICl9XG4vLyAgICAgICAgICAge3RvZ2dsZUZvcm1zICYmIChcbi8vICAgICAgICAgICAgIDxmb3JtXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWdpc3RlcmZvcm19XG4vLyAgICAgICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyUmVnaXN0ZXJ9XG4vLyAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgIDxjZW50ZXI+XG4vLyAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluaGVhZGluZ30+UmVnaXN0ZXIgRm9ybTwvaDE+XG4vLyAgICAgICAgICAgICAgIDwvY2VudGVyPlxuLy8gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInVzZXIgbmFtZVwiIC8+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbC1pZFwiXG4vLyAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlckVtYWlsSW5wdXRSZWZ9XG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlclBhc3N3b3JkSW5wdXRSZWZ9XG4vLyAgICAgICAgICAgICAgIC8+XG5cbi8vICAgICAgICAgICAgICAgPEJ1dHRvblxuLy8gICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJSRUdJU1RFUlwiXG4vLyAgICAgICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuLy8gICAgICAgICAgICAgICA+PC9CdXR0b24+XG5cbi8vICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuLy8gICAgICAgICAgICAgICAgIEFscmVhZHkgUmVnaXN0ZXJlZCZuYnNwOz8mbmJzcDtcbi8vICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVGb3JtfSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4vLyAgICAgICAgICAgICAgICAgICBMb2dpblxuLy8gICAgICAgICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICAgICl9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vYXV0aC1mb3JtLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufSAqL1xcclxcblxcclxcbi5FcnJvcl92ZXJ0aWNhbGNlbnRlcl9fMmoyNlEge1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1hZ2VzL2Vycm9yYmcyLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogVGhpcyBwcm9wZXJ0eSBlbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGVudGlyZSBiYWNrZ3JvdW5kICovXFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5FcnJvcl9jb250YWluZXJfXzJCNkJiIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcbi5FcnJvcl9saW5rZXJfXzF5MlFfIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLkVycm9yX25vdGZvdW5kX18zZVFnMiB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uRXJyb3JfaGVhZDFfXzNCbWJCIHtcXHJcXG4gIGZvbnQtc2l6ZTogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkVycm9yX2hlYWQyX192a3dNVSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uRXJyb3JfcGFyYV9fMUxmbU8ge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkVycm9yX3VuZGVybGluZV9fQVZKMlgge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1VJL0Vycm9yLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBRUc7O0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3QyxzQkFBc0IsRUFBRSxpRUFBaUU7RUFDekYsNEJBQTRCOztFQUU1QixpQkFBYTs7RUFBYixhQUFhO0VBQ2Isc0JBQW1CO09BQW5CLG1CQUFtQjtFQUNuQixxQkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnZlcnRpY2FsY2VudGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlcy9lcnJvcmJnMi5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFRoaXMgcHJvcGVydHkgZW5zdXJlcyB0aGUgaW1hZ2UgY292ZXJzIHRoZSBlbnRpcmUgYmFja2dyb3VuZCAqL1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuLmxpbmtlciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ub3Rmb3VuZCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uaGVhZDEge1xcclxcbiAgZm9udC1zaXplOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZDIge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmEge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVuZGVybGluZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidmVydGljYWxjZW50ZXJcIjogXCJFcnJvcl92ZXJ0aWNhbGNlbnRlcl9fMmoyNlFcIixcblx0XCJjb250YWluZXJcIjogXCJFcnJvcl9jb250YWluZXJfXzJCNkJiXCIsXG5cdFwibGlua2VyXCI6IFwiRXJyb3JfbGlua2VyX18xeTJRX1wiLFxuXHRcIm5vdGZvdW5kXCI6IFwiRXJyb3Jfbm90Zm91bmRfXzNlUWcyXCIsXG5cdFwiaGVhZDFcIjogXCJFcnJvcl9oZWFkMV9fM0JtYkJcIixcblx0XCJoZWFkMlwiOiBcIkVycm9yX2hlYWQyX192a3dNVVwiLFxuXHRcInBhcmFcIjogXCJFcnJvcl9wYXJhX18xTGZtT1wiLFxuXHRcInVuZGVybGluZVwiOiBcIkVycm9yX3VuZGVybGluZV9fQVZKMlhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXV0aC1mb3JtX2F1dGhfXzNGZkdmIHtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1heC13aWR0aDogMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgwMTVjO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmF1dGgtZm9ybV9hdXRoX18zRmZHZiBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hdXRoLWZvcm1fY29udHJvbF9fMm03RUEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uYXV0aC1mb3JtX2NvbnRyb2xfXzJtN0VBIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5hdXRoLWZvcm1fY29udHJvbF9fMm03RUEgaW5wdXQge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWUxZmM7XFxuICBjb2xvcjogIzM4MDE1YztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuLmF1dGgtZm9ybV9hY3Rpb25zX18ySlQyeiB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXV0aC1mb3JtX2FjdGlvbnNfXzJKVDJ6IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmNWNjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZjVjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMi41cmVtO1xcbn1cXG5cXG4uYXV0aC1mb3JtX2FjdGlvbnNfXzJKVDJ6IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODczYWJiO1xcbiAgYm9yZGVyLWNvbG9yOiAjODczYWJiO1xcbn1cXG5cXG4uYXV0aC1mb3JtX2FjdGlvbnNfXzJKVDJ6IC5hdXRoLWZvcm1fdG9nZ2xlX18yUEhlYiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzlmNWNjYztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuMTVyZW0gMS41cmVtO1xcbn1cXG5cXG4uYXV0aC1mb3JtX2FjdGlvbnNfXzJKVDJ6IC5hdXRoLWZvcm1fdG9nZ2xlX18yUEhlYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjYWU4MmNjO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuLVxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5hdXRoLWZvcm1fY29sMV9fWDAzazQge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uYXV0aC1mb3JtX2Zvcm1ib3hfXzJMVXI5IHtcXG4gIHdpZHRoOiAzMDBweDtcXG5cXG4gIGhlaWdodDogNDUwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAvKiB0b3A6IDUwcHg7XFxuXFxuICBsZWZ0OiAxMjBweDsgKi9cXG5cXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLmF1dGgtZm9ybV9tYWluaGVhZGluZ19fMk1VX0Yge1xcbiAgY29sb3I6ICMzMTE0NjU7XFxuXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmF1dGgtZm9ybV9mb3JtX18yUlBBYyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBtYXJnaW46IDAgYXV0byAxMDBweDtcXG5cXG4gIHBhZGRpbmc6IDQ1cHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hdXRoLWZvcm1fZm9ybV9fMlJQQWMgaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFxuICBvdXRsaW5lOiBub25lO1xcblxcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBtYXJnaW46IDAgMCAxNXB4O1xcblxcbiAgcGFkZGluZzogMTVweDtcXG5cXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmF1dGgtZm9ybV9mb3JtX18yUlBBYyAuYXV0aC1mb3JtX21lc3NhZ2VfXzFybkMyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gIG1hcmdpbjogMTVweCAwIDA7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hdXRoLWZvcm1fbGlua19fakY2cTUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmF1dGgtZm9ybV9kZWZpbmF0aW9uX18zc1RBZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgZm9udC1zaXplOiAzMHB4O1xcblxcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXVzaGFuIFNjcmlwdFxcXCIsIGN1cnNpdmU7XFxuXFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFzQjtFQUF0QiwwQkFBc0I7T0FBdEIsc0JBQXNCO0VBQ3RCLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBOzs2QkFFNkI7O0FBRTdCO0VBQ0UsaUJBQWE7RUFBYixhQUFhO0VBQ2Isc0JBQW1CO09BQW5CLG1CQUFtQjtFQUNuQixxQkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosYUFBYTs7RUFFYixrQkFBa0I7O0VBRWxCOztnQkFFYzs7RUFFZCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjOztFQUVkLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixvQkFBb0I7O0VBRXBCLGFBQWE7O0VBRWIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCOztFQUV2QixhQUFhOztFQUViLFlBQVk7O0VBRVosOEJBQThCOztFQUU5QixXQUFXOztFQUVYLGdCQUFnQjs7RUFFaEIsYUFBYTs7RUFFYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixnQkFBZ0I7O0VBRWhCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7O0VBRWhCLGVBQWU7O0VBRWYsWUFBWTs7RUFFWixzQ0FBc0M7O0VBRXRDLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXV0aCB7XFxuICBtYXJnaW46IDNyZW0gYXV0bztcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MDE1YztcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXV0aCBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250cm9sIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmNvbnRyb2wgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmNvbnRyb2wgaW5wdXQge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWUxZmM7XFxuICBjb2xvcjogIzM4MDE1YztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC4yNXJlbTtcXG59XFxuXFxuLmFjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWN0aW9ucyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZjVjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOWY1Y2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMC41cmVtIDIuNXJlbTtcXG59XFxuXFxuLmFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzNhYmI7XFxuICBib3JkZXItY29sb3I6ICM4NzNhYmI7XFxufVxcblxcbi5hY3Rpb25zIC50b2dnbGUge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM5ZjVjY2M7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjE1cmVtIDEuNXJlbTtcXG59XFxuXFxuLmFjdGlvbnMgLnRvZ2dsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjYWU4MmNjO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuLVxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5jb2wxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uZm9ybWJveCB7XFxuICB3aWR0aDogMzAwcHg7XFxuXFxuICBoZWlnaHQ6IDQ1MHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLyogdG9wOiA1MHB4O1xcblxcbiAgbGVmdDogMTIwcHg7ICovXFxuXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5tYWluaGVhZGluZyB7XFxuICBjb2xvcjogIzMxMTQ2NTtcXG5cXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBtYXJnaW46IDAgYXV0byAxMDBweDtcXG5cXG4gIHBhZGRpbmc6IDQ1cHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtIGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG5cXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgbWFyZ2luOiAwIDAgMTVweDtcXG5cXG4gIHBhZGRpbmc6IDE1cHg7XFxuXFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mb3JtIC5tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gIG1hcmdpbjogMTVweCAwIDA7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5saW5rIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWZpbmF0aW9uIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICBmb250LXNpemU6IDMwcHg7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBmb250LWZhbWlseTogXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXG5cXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYXV0aFwiOiBcImF1dGgtZm9ybV9hdXRoX18zRmZHZlwiLFxuXHRcImNvbnRyb2xcIjogXCJhdXRoLWZvcm1fY29udHJvbF9fMm03RUFcIixcblx0XCJhY3Rpb25zXCI6IFwiYXV0aC1mb3JtX2FjdGlvbnNfXzJKVDJ6XCIsXG5cdFwidG9nZ2xlXCI6IFwiYXV0aC1mb3JtX3RvZ2dsZV9fMlBIZWJcIixcblx0XCJjb2wxXCI6IFwiYXV0aC1mb3JtX2NvbDFfX1gwM2s0XCIsXG5cdFwiZm9ybWJveFwiOiBcImF1dGgtZm9ybV9mb3JtYm94X18yTFVyOVwiLFxuXHRcIm1haW5oZWFkaW5nXCI6IFwiYXV0aC1mb3JtX21haW5oZWFkaW5nX18yTVVfRlwiLFxuXHRcImZvcm1cIjogXCJhdXRoLWZvcm1fZm9ybV9fMlJQQWNcIixcblx0XCJtZXNzYWdlXCI6IFwiYXV0aC1mb3JtX21lc3NhZ2VfXzFybkMyXCIsXG5cdFwibGlua1wiOiBcImF1dGgtZm9ybV9saW5rX19qRjZxNVwiLFxuXHRcImRlZmluYXRpb25cIjogXCJhdXRoLWZvcm1fZGVmaW5hdGlvbl9fM3NUQWRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Mb2FkZXJcIjtcclxuXHJcbmltcG9ydCBBdXRoRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U2Vzc2lvbigpLnRoZW4oKHNlc3Npb24pID0+IHtcclxuICAgICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRlciAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiA8QXV0aEZvcm0gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9