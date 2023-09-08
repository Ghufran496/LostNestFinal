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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      toggleForms = _useState[0],
      setToggleForms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isError = _useState3[0],
      setIsError = _useState3[1];

  var toggleForm = function toggleForm() {
    setToggleForms(function (prev) {
      return !prev;
    });
  };

  var loginEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var loginPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var registerEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var registerPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLogin = _useState4[0],
      setIsLogin = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function switchAuthModeHandler() {
    setIsLogin(function (prevState) {
      return !prevState;
    });
  }

  function errorContent(message) {}

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
              lineNumber: 107,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: loginEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: loginPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "LOGIN",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
            children: ["Not Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
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
              lineNumber: 136,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            placeholder: "user name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: registerEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: registerPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
            content: "REGISTER",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.message,
            children: ["Already Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

_s(AuthForm, "f0jiXg7CGs/ah9C8XGl5fr+eB3o=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJ1c2VTdGF0ZSIsInRvZ2dsZUZvcm1zIiwic2V0VG9nZ2xlRm9ybXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsInRvZ2dsZUZvcm0iLCJwcmV2IiwibG9naW5FbWFpbElucHV0UmVmIiwidXNlUmVmIiwibG9naW5QYXNzd29yZElucHV0UmVmIiwicmVnaXN0ZXJFbWFpbElucHV0UmVmIiwicmVnaXN0ZXJQYXNzd29yZElucHV0UmVmIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzd2l0Y2hBdXRoTW9kZUhhbmRsZXIiLCJwcmV2U3RhdGUiLCJlcnJvckNvbnRlbnQiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRQYXNzd29yZCIsInNpZ25JbiIsInJlZGlyZWN0IiwicmVzdWx0IiwiZXJyb3IiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEhhbmRsZXJSZWdpc3RlciIsImNsYXNzZXMiLCJjb2wxIiwiZm9ybWJveCIsImZvcm0iLCJsb2dpbmZvcm0iLCJtYWluaGVhZGluZyIsImxpbmsiLCJyZWdpc3RlcmZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FFZUEsVTs7Ozs7cVJBQWYs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQU9FO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHVCQUFXLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQVFFO0FBQ0UsZ0JBQUksRUFBQyxPQURQO0FBRUUsdUJBQVcsRUFBQyxVQUZkO0FBR0UsZUFBRyxFQUFFN0I7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGLGVBYUU7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSx1QkFBVyxFQUFDLFVBRmQ7QUFHRSxlQUFHLEVBQUVDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRixlQW1CRSxxRUFBQyxrREFBRDtBQUNFLG1CQUFPLEVBQUMsVUFEVjtBQUVFLG1CQUFPLEVBQUVLO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFuQkYsZUF3QkU7QUFBRyxxQkFBUyxFQUFFa0IsNERBQU8sQ0FBQ3RDLE9BQXRCO0FBQUEsbUVBRUU7QUFBRyxxQkFBTyxFQUFFUyxVQUFaO0FBQXdCLHVCQUFTLEVBQUU2Qiw0REFBTyxDQUFDTSxJQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1FRDs7R0E1SVEzQyxRO1VBY1FrQixxRDs7O0tBZFJsQixRO0FBOElNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoLmQ4MGUxNzlkYTVmMzBhMjhlOGRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9VSS9Mb2FkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXV0aC1mb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCJAaG9va2Zvcm0vZXJyb3ItbWVzc2FnZVwiO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuICBjb25zdCBbdG9nZ2xlRm9ybXMsIHNldFRvZ2dsZUZvcm1zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZUZvcm1zKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IGxvZ2luRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsb2dpblBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCByZWdpc3RlckVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG4gIGZ1bmN0aW9uIGVycm9yQ29udGVudChtZXNzYWdlKSB7fVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGxvZ2luRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGxvZ2luUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIGVtYWlsOiBlbnRlcmVkRW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgLy8gc2V0IHNvbWUgYXV0aCBzdGF0ZVxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCArIFwiTG9naW4gc3VjY2Vzc1wiKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyUmVnaXN0ZXIoZXZlbnQpIHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZCk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRlciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29sMX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtYm94fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XG4gICAgICAgICAgeyF0b2dnbGVGb3JtcyAmJiAoXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluaGVhZGluZ30+TG9naW4gRm9ybTwvaDE+XG4gICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwtaWRcIlxuICAgICAgICAgICAgICAgIHJlZj17bG9naW5FbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlZj17bG9naW5QYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkxPR0lOXCIgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfT48L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgTm90IFJlZ2lzdGVyZWQmbmJzcDs/Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlRm9ybX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0b2dnbGVGb3JtcyAmJiAoXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmVnaXN0ZXJmb3JtfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17c3VibWl0SGFuZGxlclJlZ2lzdGVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PlJlZ2lzdGVyIEZvcm08L2gxPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ1c2VyIG5hbWVcIiAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWwtaWRcIlxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJFbWFpbElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJQYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUkVHSVNURVJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICAgICAgPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICBBbHJlYWR5IFJlZ2lzdGVyZWQmbmJzcDs/Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlRm9ybX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=