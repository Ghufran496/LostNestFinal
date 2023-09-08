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
/* harmony import */ var _hookform_error_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hookform/error-message */ "./node_modules/@hookform/error-message/dist/index.esm.js");




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

            throw new Error(data.message || "Something went wrong!");

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

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      toggleForms = _useState[0],
      setToggleForms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var toggleForm = function toggleForm() {
    setToggleForms(function (prev) {
      return !prev;
    });
  };

  var loginEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var loginPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var registerEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var registerPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLogin = _useState3[0],
      setIsLogin = _useState3[1];

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
                console.log(result.error);
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
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](4);
              console.log(_context2.t0);
              setIsLoading(false);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 13]]);
    }));
    return _submitHandlerRegister.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_hookform_error_message__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"], {
      errors: errors,
      name: "singleErrorInput",
      render: function render(_ref) {
        var message = _ref.message;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 34
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
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
              lineNumber: 112,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: loginEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: loginPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "LOGIN",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
            children: ["Not Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
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
              lineNumber: 141,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            placeholder: "user name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: registerEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: registerPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "REGISTER",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
            children: ["Already Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

_s(AuthForm, "/4kiDGUKTrD5ZWsigAdPVk+OMrE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJ1c2VTdGF0ZSIsInRvZ2dsZUZvcm1zIiwic2V0VG9nZ2xlRm9ybXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0b2dnbGVGb3JtIiwicHJldiIsImxvZ2luRW1haWxJbnB1dFJlZiIsInVzZVJlZiIsImxvZ2luUGFzc3dvcmRJbnB1dFJlZiIsInJlZ2lzdGVyRW1haWxJbnB1dFJlZiIsInJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZiIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJzaWduSW4iLCJyZWRpcmVjdCIsInJlc3VsdCIsImVycm9yIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRIYW5kbGVyUmVnaXN0ZXIiLCJlcnJvcnMiLCJjbGFzc2VzIiwiY29sMSIsImZvcm1ib3giLCJmb3JtIiwibG9naW5mb3JtIiwibWFpbmhlYWRpbmciLCJsaW5rIiwicmVnaXN0ZXJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBRWVBLFU7Ozs7O3FSQUFmLGtCQUEwQkMsS0FBMUIsRUFBaUNDLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3lCQyxLQUFLLENBQUMsa0JBQUQsRUFBcUI7QUFDL0NDLG9CQUFNLEVBQUUsTUFEdUM7QUFFL0NDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVOLHFCQUFLLEVBQUxBLEtBQUY7QUFBU0Msd0JBQVEsRUFBUkE7QUFBVCxlQUFmLENBRnlDO0FBRy9DTSxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCO0FBRFQ7QUFIc0MsYUFBckIsQ0FEOUI7O0FBQUE7QUFDUUMsb0JBRFI7QUFBQTtBQUFBLG1CQVNxQkEsUUFBUSxDQUFDQyxJQUFULEVBVHJCOztBQUFBO0FBU1FDLGdCQVRSOztBQUFBLGdCQVdPRixRQUFRLENBQUNHLEVBWGhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQVlVLElBQUlDLEtBQUosQ0FBVUYsSUFBSSxDQUFDRyxPQUFMLElBQWdCLHVCQUExQixDQVpWOztBQUFBO0FBQUEsOENBZVNILElBZlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWtCQSxTQUFTSSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ29CQyxzREFBUSxDQUFDLEtBQUQsQ0FENUI7QUFBQSxNQUNYQyxXQURXO0FBQUEsTUFDRUMsY0FERjs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUMsS0FBRCxDQUZ4QjtBQUFBLE1BRVhHLFNBRlc7QUFBQSxNQUVBQyxZQUZBOztBQUlsQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSCxrQkFBYyxDQUFDLFVBQUNJLElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQWQ7QUFDRCxHQUZEOztBQUdBLE1BQU1DLGtCQUFrQixHQUFHQyxvREFBTSxFQUFqQztBQUNBLE1BQU1DLHFCQUFxQixHQUFHRCxvREFBTSxFQUFwQztBQUVBLE1BQU1FLHFCQUFxQixHQUFHRixvREFBTSxFQUFwQztBQUNBLE1BQU1HLHdCQUF3QixHQUFHSCxvREFBTSxFQUF2Qzs7QUFYa0IsbUJBYVlSLHNEQUFRLENBQUMsSUFBRCxDQWJwQjtBQUFBLE1BYVhZLE9BYlc7QUFBQSxNQWFGQyxVQWJFOztBQWNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLHFCQUFULEdBQWlDO0FBQy9CSCxjQUFVLENBQUMsVUFBQ0ksU0FBRDtBQUFBLGFBQWUsQ0FBQ0EsU0FBaEI7QUFBQSxLQUFELENBQVY7QUFDRDs7QUFsQmlCLFdBb0JIQyxhQXBCRztBQUFBO0FBQUE7O0FBQUE7QUFBQSwwUkFvQmxCLGlCQUE2QkMsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNDLGNBQU47QUFDQWhCLDBCQUFZLENBQUMsSUFBRCxDQUFaO0FBRU1pQiwwQkFKUixHQUl1QmQsa0JBQWtCLENBQUNlLE9BQW5CLENBQTJCQyxLQUpsRDtBQUtRQyw2QkFMUixHQUswQmYscUJBQXFCLENBQUNhLE9BQXRCLENBQThCQyxLQUx4RCxFQU9FOztBQVBGLG1CQVNNWCxPQVROO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBVXlCYSwrREFBTSxDQUFDLGFBQUQsRUFBZ0I7QUFDekNDLHdCQUFRLEVBQUUsS0FEK0I7QUFFekN6QyxxQkFBSyxFQUFFb0MsWUFGa0M7QUFHekNuQyx3QkFBUSxFQUFFc0M7QUFIK0IsZUFBaEIsQ0FWL0I7O0FBQUE7QUFVVUcsb0JBVlY7O0FBZ0JJLGtCQUFJLENBQUNBLE1BQU0sQ0FBQ0MsS0FBWixFQUFtQjtBQUNqQjtBQUNBZCxzQkFBTSxDQUFDZSxPQUFQLENBQWUsWUFBZjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sR0FBRyxlQUFyQjtBQUNBdkIsNEJBQVksQ0FBQyxLQUFELENBQVo7QUFDRDs7QUFDRCxrQkFBSXVCLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNoQnhCLDRCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0EwQix1QkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sQ0FBQ0MsS0FBbkI7QUFDRDs7QUF6Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FwQmtCO0FBQUE7QUFBQTs7QUFBQSxXQWlESEkscUJBakRHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtTQWlEbEIsa0JBQXFDYixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRWYsMEJBQVksQ0FBQyxJQUFELENBQVo7QUFDQWUsbUJBQUssQ0FBQ0MsY0FBTjtBQUVNQywwQkFKUixHQUl1QlgscUJBQXFCLENBQUNZLE9BQXRCLENBQThCQyxLQUpyRDtBQUtRQyw2QkFMUixHQUswQmIsd0JBQXdCLENBQUNXLE9BQXpCLENBQWlDQyxLQUwzRCxFQU9FOztBQVBGO0FBQUE7QUFBQSxxQkFVeUJ2QyxVQUFVLENBQUNxQyxZQUFELEVBQWVHLGVBQWYsQ0FWbkM7O0FBQUE7QUFVVUcsb0JBVlY7QUFXSXZCLDBCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0EwQixxQkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQXZCLDBCQUFZLENBQUMsS0FBRCxDQUFaO0FBYko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlSTBCLHFCQUFPLENBQUNDLEdBQVI7QUFDQTNCLDBCQUFZLENBQUMsS0FBRCxDQUFaOztBQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpEa0I7QUFBQTtBQUFBOztBQW9FbEIsTUFBSUQsU0FBSixFQUFlO0FBQ2Isd0JBQ0UscUVBQUMsb0VBQUQ7QUFDRSxZQUFNLEVBQUU4QixNQURWO0FBRUUsVUFBSSxFQUFDLGtCQUZQO0FBR0UsWUFBTSxFQUFFO0FBQUEsWUFBR25DLE9BQUgsUUFBR0EsT0FBSDtBQUFBLDRCQUFpQjtBQUFBLG9CQUFJQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWpCO0FBQUE7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFPRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRW9DLDREQUFPLENBQUNDLElBQXhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELDREQUFPLENBQUNFLE9BQXhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFRiw0REFBTyxDQUFDRyxJQUF4QjtBQUFBLG1CQUNHLENBQUNwQyxXQUFELGlCQUNDO0FBQU0sbUJBQVMsRUFBRWlDLDREQUFPLENBQUNJLFNBQXpCO0FBQW9DLGtCQUFRLEVBQUVwQixhQUE5QztBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFFZ0IsNERBQU8sQ0FBQ0ssV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFDRSxnQkFBSSxFQUFDLE9BRFA7QUFFRSx1QkFBVyxFQUFDLFVBRmQ7QUFHRSxlQUFHLEVBQUVoQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFTRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLHVCQUFXLEVBQUMsVUFGZDtBQUdFLGVBQUcsRUFBRUU7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGLGVBZUUscUVBQUMsa0RBQUQ7QUFBUSxtQkFBTyxFQUFDLE9BQWhCO0FBQXdCLG1CQUFPLEVBQUVPO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZkYsZUFpQkU7QUFBRyxxQkFBUyxFQUFFa0IsNERBQU8sQ0FBQ3BDLE9BQXRCO0FBQUEsK0RBRUU7QUFBRyxxQkFBTyxFQUFFTyxVQUFaO0FBQXdCLHVCQUFTLEVBQUU2Qiw0REFBTyxDQUFDTSxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixFQTJCR3ZDLFdBQVcsaUJBQ1Y7QUFDRSxtQkFBUyxFQUFFaUMsNERBQU8sQ0FBQ08sWUFEckI7QUFFRSxrQkFBUSxFQUFFVCxxQkFGWjtBQUFBLGtDQUlFO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFFRSw0REFBTyxDQUFDSyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFPRTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQix1QkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEYsZUFRRTtBQUNFLGdCQUFJLEVBQUMsT0FEUDtBQUVFLHVCQUFXLEVBQUMsVUFGZDtBQUdFLGVBQUcsRUFBRTdCO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQWFFO0FBQ0UsZ0JBQUksRUFBQyxVQURQO0FBRUUsdUJBQVcsRUFBQyxVQUZkO0FBR0UsZUFBRyxFQUFFQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkYsZUFtQkUscUVBQUMsa0RBQUQ7QUFDRSxtQkFBTyxFQUFDLFVBRFY7QUFFRSxtQkFBTyxFQUFFSztBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJGLGVBd0JFO0FBQUcscUJBQVMsRUFBRWtCLDREQUFPLENBQUNwQyxPQUF0QjtBQUFBLG1FQUVFO0FBQUcscUJBQU8sRUFBRU8sVUFBWjtBQUF3Qix1QkFBUyxFQUFFNkIsNERBQU8sQ0FBQ00sSUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRUQ7O0dBakpRekMsUTtVQWNRZ0IscUQ7OztLQWRSaEIsUTtBQW1KTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC5jZWU4ZWNkMDdhZTEzNDI0YThhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vVUkvTG9hZGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQGhvb2tmb3JtL2Vycm9yLW1lc3NhZ2VcIjtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9zaWdudXBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBBdXRoRm9ybSgpIHtcbiAgY29uc3QgW3RvZ2dsZUZvcm1zLCBzZXRUb2dnbGVGb3Jtc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVGb3JtcygocHJldikgPT4gIXByZXYpO1xuICB9O1xuICBjb25zdCBsb2dpbkVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbG9naW5QYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgcmVnaXN0ZXJFbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIoKSB7XG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGxvZ2luRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGxvZ2luUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgLy8gc2V0IHNvbWUgYXV0aCBzdGF0ZVxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCArIFwiTG9naW4gc3VjY2Vzc1wiKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZCk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgbmFtZT1cInNpbmdsZUVycm9ySW5wdXRcIlxuICAgICAgICByZW5kZXI9eyh7IG1lc3NhZ2UgfSkgPT4gPHA+e21lc3NhZ2V9PC9wPn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29sMX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtYm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XG4gICAgICAgICAgeyF0b2dnbGVGb3JtcyAmJiAoXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluaGVhZGluZ30+TG9naW4gRm9ybTwvaDE+XG4gICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwtaWRcIlxuICAgICAgICAgICAgICAgIHJlZj17bG9naW5FbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlZj17bG9naW5QYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkxPR0lOXCIgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfT48L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgTm90IFJlZ2lzdGVyZWQmbmJzcDs/Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlRm9ybX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0b2dnbGVGb3JtcyAmJiAoXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmVnaXN0ZXJmb3JtfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17c3VibWl0SGFuZGxlclJlZ2lzdGVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PlJlZ2lzdGVyIEZvcm08L2gxPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ1c2VyIG5hbWVcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwtaWRcIlxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJFbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJQYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUkVHSVNURVJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICBBbHJlYWR5IFJlZ2lzdGVyZWQmbmJzcDs/Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlRm9ybX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=