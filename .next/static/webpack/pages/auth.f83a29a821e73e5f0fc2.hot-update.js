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
  } // function errorContent(message) {
  //   props.onAddError(message);
  // }


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
                setIsError(true);
                console.log(result.error); // errorContent(result.error);
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
              setIsLoading(false);
              console.log(result);
              setIsLoading(false);
              _context2.next = 18;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](4);
              console.log(_context2.t0);
              setIsLoading(false);
              setIsError(true);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 13]]);
    }));
    return _submitHandlerRegister.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Error__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
              lineNumber: 120,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: loginEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: loginPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "LOGIN",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
            children: ["Not Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
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
              lineNumber: 149,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            placeholder: "user name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: registerEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: registerPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "REGISTER",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
            children: ["Already Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, this);
}

_s(AuthForm, "SaQgfgua+jbaj3qqyu+QA2Bnvlc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwidG9nZ2xlRm9ybXMiLCJzZXRUb2dnbGVGb3JtcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInRvZ2dsZUZvcm0iLCJwcmV2IiwibG9naW5FbWFpbElucHV0UmVmIiwidXNlUmVmIiwibG9naW5QYXNzd29yZElucHV0UmVmIiwicmVnaXN0ZXJFbWFpbElucHV0UmVmIiwicmVnaXN0ZXJQYXNzd29yZElucHV0UmVmIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzd2l0Y2hBdXRoTW9kZUhhbmRsZXIiLCJwcmV2U3RhdGUiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRQYXNzd29yZCIsInNpZ25JbiIsInJlZGlyZWN0IiwicmVzdWx0IiwiZXJyb3IiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEhhbmRsZXJSZWdpc3RlciIsImNsYXNzZXMiLCJjb2wxIiwiZm9ybWJveCIsImZvcm0iLCJsb2dpbmZvcm0iLCJtYWluaGVhZGluZyIsImxpbmsiLCJyZWdpc3RlcmZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FFZUEsVTs7Ozs7cVJBQWYsa0JBQTBCQyxLQUExQixFQUFpQ0MsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDeUJDLEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUMvQ0Msb0JBQU0sRUFBRSxNQUR1QztBQUUvQ0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRU4scUJBQUssRUFBTEEsS0FBRjtBQUFTQyx3QkFBUSxFQUFSQTtBQUFULGVBQWYsQ0FGeUM7QUFHL0NNLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0I7QUFEVDtBQUhzQyxhQUFyQixDQUQ5Qjs7QUFBQTtBQUNRQyxvQkFEUjtBQUFBO0FBQUEsbUJBU3FCQSxRQUFRLENBQUNDLElBQVQsRUFUckI7O0FBQUE7QUFTUUMsZ0JBVFI7O0FBQUEsZ0JBV09GLFFBQVEsQ0FBQ0csRUFYaEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBWVUsSUFBSUMsaURBQUosQ0FBVUYsSUFBSSxDQUFDRyxPQUFMLElBQWdCLHVCQUExQixDQVpWOztBQUFBO0FBQUEsOENBZVNILElBZlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWtCQSxTQUFTSSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkI7QUFBQSxNQUNoQkMsV0FEZ0I7QUFBQSxNQUNIQyxjQURHOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLEtBQUQsQ0FGbkI7QUFBQSxNQUVoQkcsU0FGZ0I7QUFBQSxNQUVMQyxZQUZLOztBQUFBLG1CQUdPSixzREFBUSxDQUFDLEtBQUQsQ0FIZjtBQUFBLE1BR2hCSyxPQUhnQjtBQUFBLE1BR1BDLFVBSE87O0FBQUEsbUJBSWVOLHNEQUFRLENBQzVDLHdEQUQ0QyxDQUp2QjtBQUFBLE1BSWhCTyxXQUpnQjtBQUFBLE1BSUhDLGNBSkc7O0FBUXZCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJQLGtCQUFjLENBQUMsVUFBQ1EsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBR0EsTUFBTUMsa0JBQWtCLEdBQUdDLG9EQUFNLEVBQWpDO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUdELG9EQUFNLEVBQXBDO0FBRUEsTUFBTUUscUJBQXFCLEdBQUdGLG9EQUFNLEVBQXBDO0FBQ0EsTUFBTUcsd0JBQXdCLEdBQUdILG9EQUFNLEVBQXZDOztBQWZ1QixtQkFpQk9aLHNEQUFRLENBQUMsSUFBRCxDQWpCZjtBQUFBLE1BaUJoQmdCLE9BakJnQjtBQUFBLE1BaUJQQyxVQWpCTzs7QUFrQnZCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0MscUJBQVQsR0FBaUM7QUFDL0JILGNBQVUsQ0FBQyxVQUFDSSxTQUFEO0FBQUEsYUFBZSxDQUFDQSxTQUFoQjtBQUFBLEtBQUQsQ0FBVjtBQUNELEdBdEJzQixDQXVCdkI7QUFDQTtBQUNBOzs7QUF6QnVCLFdBMkJSQyxhQTNCUTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwUkEyQnZCLGlCQUE2QkMsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNDLGNBQU47QUFDQXBCLDBCQUFZLENBQUMsSUFBRCxDQUFaO0FBRU1xQiwwQkFKUixHQUl1QmQsa0JBQWtCLENBQUNlLE9BQW5CLENBQTJCQyxLQUpsRDtBQUtRQyw2QkFMUixHQUswQmYscUJBQXFCLENBQUNhLE9BQXRCLENBQThCQyxLQUx4RCxFQU9FOztBQVBGLG1CQVNNWCxPQVROO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBVXlCYSwrREFBTSxDQUFDLGFBQUQsRUFBZ0I7QUFDekNDLHdCQUFRLEVBQUUsS0FEK0I7QUFFekM5QyxxQkFBSyxFQUFFeUMsWUFGa0M7QUFHekN4Qyx3QkFBUSxFQUFFMkM7QUFIK0IsZUFBaEIsQ0FWL0I7O0FBQUE7QUFVVUcsb0JBVlY7O0FBZ0JJLGtCQUFJLENBQUNBLE1BQU0sQ0FBQ0MsS0FBWixFQUFtQjtBQUNqQjtBQUNBZCxzQkFBTSxDQUFDZSxPQUFQLENBQWUsWUFBZjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sR0FBRyxlQUFyQjtBQUNBM0IsNEJBQVksQ0FBQyxLQUFELENBQVo7QUFDRDs7QUFDRCxrQkFBSTJCLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNoQjVCLDRCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FFLDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0E0Qix1QkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sQ0FBQ0MsS0FBbkIsRUFIZ0IsQ0FJaEI7QUFDRDs7QUEzQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EzQnVCO0FBQUE7QUFBQTs7QUFBQSxXQTBEUkkscUJBMURRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtTQTBEdkIsa0JBQXFDYixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRW5CLDBCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FtQixtQkFBSyxDQUFDQyxjQUFOO0FBRU1DLDBCQUpSLEdBSXVCWCxxQkFBcUIsQ0FBQ1ksT0FBdEIsQ0FBOEJDLEtBSnJEO0FBS1FDLDZCQUxSLEdBSzBCYix3QkFBd0IsQ0FBQ1csT0FBekIsQ0FBaUNDLEtBTDNELEVBT0U7O0FBUEY7QUFBQTtBQUFBLHFCQVV5QjVDLFVBQVUsQ0FBQzBDLFlBQUQsRUFBZUcsZUFBZixDQVZuQzs7QUFBQTtBQVVVRyxvQkFWVjtBQVdJM0IsMEJBQVksQ0FBQyxLQUFELENBQVo7QUFDQThCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBM0IsMEJBQVksQ0FBQyxLQUFELENBQVo7QUFiSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVJOEIscUJBQU8sQ0FBQ0MsR0FBUjtBQUNBL0IsMEJBQVksQ0FBQyxLQUFELENBQVo7QUFDQUUsd0JBQVUsQ0FBQyxJQUFELENBQVY7O0FBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUR1QjtBQUFBO0FBQUE7O0FBOEV2QixNQUFJSCxTQUFKLEVBQWU7QUFDYix3QkFBTyxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFJRSxPQUFKLEVBQWE7QUFDWCx3QkFBTyxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRWdDLDREQUFPLENBQUNDLElBQXhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELDREQUFPLENBQUNFLE9BQXhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFRiw0REFBTyxDQUFDRyxJQUF4QjtBQUFBLG1CQUNHLENBQUN2QyxXQUFELGlCQUNDO0FBQU0sbUJBQVMsRUFBRW9DLDREQUFPLENBQUNJLFNBQXpCO0FBQW9DLGtCQUFRLEVBQUVuQixhQUE5QztBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFFZSw0REFBTyxDQUFDSyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUNFLGdCQUFJLEVBQUMsT0FEUDtBQUVFLHVCQUFXLEVBQUMsVUFGZDtBQUdFLGVBQUcsRUFBRS9CO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQVNFO0FBQ0UsZ0JBQUksRUFBQyxVQURQO0FBRUUsdUJBQVcsRUFBQyxVQUZkO0FBR0UsZUFBRyxFQUFFRTtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEYsZUFlRSxxRUFBQyxrREFBRDtBQUFRLG1CQUFPLEVBQUMsT0FBaEI7QUFBd0IsbUJBQU8sRUFBRU87QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmRixlQWlCRTtBQUFHLHFCQUFTLEVBQUVpQiw0REFBTyxDQUFDeEMsT0FBdEI7QUFBQSwrREFFRTtBQUFHLHFCQUFPLEVBQUVZLFVBQVo7QUFBd0IsdUJBQVMsRUFBRTRCLDREQUFPLENBQUNNLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLEVBMkJHMUMsV0FBVyxpQkFDVjtBQUNFLG1CQUFTLEVBQUVvQyw0REFBTyxDQUFDTyxZQURyQjtBQUVFLGtCQUFRLEVBQUVSLHFCQUZaO0FBQUEsa0NBSUU7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUVDLDREQUFPLENBQUNLLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQU9FO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHVCQUFXLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQVFFO0FBQ0UsZ0JBQUksRUFBQyxPQURQO0FBRUUsdUJBQVcsRUFBQyxVQUZkO0FBR0UsZUFBRyxFQUFFNUI7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGLGVBYUU7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSx1QkFBVyxFQUFDLFVBRmQ7QUFHRSxlQUFHLEVBQUVDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRixlQW1CRSxxRUFBQyxrREFBRDtBQUNFLG1CQUFPLEVBQUMsVUFEVjtBQUVFLG1CQUFPLEVBQUVLO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFuQkYsZUF3QkU7QUFBRyxxQkFBUyxFQUFFaUIsNERBQU8sQ0FBQ3hDLE9BQXRCO0FBQUEsbUVBRUU7QUFBRyxxQkFBTyxFQUFFWSxVQUFaO0FBQXdCLHVCQUFTLEVBQUU0Qiw0REFBTyxDQUFDTSxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1FRDs7R0F6SlE3QyxRO1VBa0JRcUIscUQ7OztLQWxCUnJCLFE7QUEySk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGguZjgzYTI5YTgyMWU3M2U1ZjBmYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL1VJL0xvYWRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9VSS9FcnJvclwiO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIEF1dGhGb3JtKHByb3BzKSB7XG4gIGNvbnN0IFt0b2dnbGVGb3Jtcywgc2V0VG9nZ2xlRm9ybXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXG4gICAgXCJTb3JyeSBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdC5cIlxuICApO1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgc2V0VG9nZ2xlRm9ybXMoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcbiAgY29uc3QgbG9naW5FbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxvZ2luUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHJlZ2lzdGVyRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCByZWdpc3RlclBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH1cbiAgLy8gZnVuY3Rpb24gZXJyb3JDb250ZW50KG1lc3NhZ2UpIHtcbiAgLy8gICBwcm9wcy5vbkFkZEVycm9yKG1lc3NhZ2UpO1xuICAvLyB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gbG9naW5FbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gbG9naW5QYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgICAvLyBzZXQgc29tZSBhdXRoIHN0YXRlXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0ICsgXCJMb2dpbiBzdWNjZXNzXCIpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xuICAgICAgICAvLyBlcnJvckNvbnRlbnQocmVzdWx0LmVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZCk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkZXIgLz47XG4gIH1cblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiA8RXJyb3IgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbDF9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybWJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICAgIHshdG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PkxvZ2luIEZvcm08L2gxPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICByZWY9e2xvZ2luRW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e2xvZ2luUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJMT0dJTlwiIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn0+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIE5vdCBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZ2lzdGVyZm9ybX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJSZWdpc3Rlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5SZWdpc3RlciBGb3JtPC9oMT5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyRW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlJFR0lTVEVSXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgICAgID48L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgQWxyZWFkeSBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9