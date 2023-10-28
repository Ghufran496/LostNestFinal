webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/stats/ContactForm.js":
/*!*****************************************!*\
  !*** ./components/stats/ContactForm.js ***!
  \*****************************************/
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
/* harmony import */ var _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactForm.module.css */ "./components/stats/ContactForm.module.css");
/* harmony import */ var _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _Global_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Global/Footer */ "./components/Global/Footer.js");
/* harmony import */ var _UI_ErrorComp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/ErrorComp */ "./components/UI/ErrorComp.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\stats\\ContactForm.js",
    _s = $RefreshSig$();







 // async function sendMessage(email, message, enteredName) {
//   const response = await fetch("/api/contactForm/message", {
//     method: "POST",
//     body: JSON.stringify({ email, message, enteredName }),
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

function ContactForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var contactEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var contactMessageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var contactNameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function sendMessage(_x, _x2, _x3) {
    return _sendMessage.apply(this, arguments);
  }

  function _sendMessage() {
    _sendMessage = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, message, enteredName) {
      var response, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/contactForm/message", {
                method: "POST",
                body: JSON.stringify({
                  email: email,
                  message: message,
                  enteredName: enteredName
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;

              if (response.ok) {
                _context.next = 8;
                break;
              }

              throw new Error(data.message || "Something went wrong!");

            case 8:
              return _context.abrupt("return", data);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _sendMessage.apply(this, arguments);
  }

  function submitHandler(_x4) {
    return _submitHandler.apply(this, arguments);
  }

  function _submitHandler() {
    _submitHandler = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var enteredEmail, enteredMessage, enteredName, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredEmail = contactEmailInputRef.current.value;
              enteredMessage = contactMessageInputRef.current.value;
              enteredName = contactNameInputRef.current.value;
              _context2.prev = 5;
              _context2.next = 8;
              return sendMessage(enteredEmail, enteredMessage, enteredName);

            case 8:
              result = _context2.sent;
              setIsLoading(false); // console.log(result);
              //console.log(result);

              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](5);
              console.log(_context2.t0);
              setIsLoading(false);

            case 16:
              setIsLoading(false);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 12]]);
    }));
    return _submitHandler.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
      className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.totalcontactform,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contacttitle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
          className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sectionheading,
          children: "Contact Form"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: "If there is something you want to suggest or simply want to say hello, do reach out."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contactform,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
          onSubmit: submitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              "for": "field1",
              children: "Name :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              name: "field1",
              placeholder: "Enter name",
              ref: contactNameInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              "for": "field2",
              children: "Email address :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "email",
              name: "field2",
              placeholder: "Enter email",
              ref: contactEmailInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              "for": "description",
              children: "Message :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
              type: "text",
              name: "description",
              rows: "4",
              cols: "5",
              ref: contactMessageInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Global_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

_s(ContactForm, "/cltBdSCkrPy8HAasc1ffslVKww=");

_c = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c;

$RefreshReg$(_c, "ContactForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGF0cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udGFjdEVtYWlsSW5wdXRSZWYiLCJ1c2VSZWYiLCJjb250YWN0TWVzc2FnZUlucHV0UmVmIiwiY29udGFjdE5hbWVJbnB1dFJlZiIsInNlbmRNZXNzYWdlIiwiZW1haWwiLCJtZXNzYWdlIiwiZW50ZXJlZE5hbWUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJvayIsIkVycm9yIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkTWVzc2FnZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwidG90YWxjb250YWN0Zm9ybSIsImNvbnRhY3R0aXRsZSIsInNlY3Rpb25oZWFkaW5nIiwiY29udGFjdGZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxLQUFELENBRHJCO0FBQUEsTUFDZEMsU0FEYztBQUFBLE1BQ0hDLFlBREc7O0FBRXJCLE1BQU1DLG9CQUFvQixHQUFHQyxvREFBTSxFQUFuQztBQUNBLE1BQU1DLHNCQUFzQixHQUFHRCxvREFBTSxFQUFyQztBQUNBLE1BQU1FLG1CQUFtQixHQUFHRixvREFBTSxFQUFsQzs7QUFKcUIs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RSxzQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFTRTtBQUFPLHFCQUFJLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsZUFVRTtBQUNFLGtCQUFJLEVBQUMsT0FEUDtBQUVFLGtCQUFJLEVBQUMsUUFGUDtBQUdFLHlCQUFXLEVBQUMsYUFIZDtBQUlFLGlCQUFHLEVBQUVILG9CQUpQO0FBS0Usc0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGLGVBa0JFO0FBQU8scUJBQUksYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQkYsZUFtQkU7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSxrQkFBSSxFQUFDLGFBRlA7QUFHRSxrQkFBSSxFQUFDLEdBSFA7QUFJRSxrQkFBSSxFQUFDLEdBSlA7QUFLRSxpQkFBRyxFQUFFRSxzQkFMUDtBQU1FLHNCQUFRO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBNkJFLHFFQUFDLGtEQUFEO0FBQVEsbUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUE2Q0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlERDs7R0F0R1FOLFc7O0tBQUFBLFc7QUF3R01BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLjEyYjY1NDliMDNkMmI3OGRmZWYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ29udGFjdEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9HbG9iYWwvRm9vdGVyXCI7XHJcbmltcG9ydCBFcnJvckNvbXAgZnJvbSBcIi4uL1VJL0Vycm9yQ29tcFwiO1xyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZW1haWwsIG1lc3NhZ2UsIGVudGVyZWROYW1lKSB7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29udGFjdEZvcm0vbWVzc2FnZVwiLCB7XHJcbi8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgbWVzc2FnZSwgZW50ZXJlZE5hbWUgfSksXHJcbi8vICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KTtcclxuXHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbi8vICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4vLyAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiBkYXRhO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbnRhY3RFbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY29udGFjdE1lc3NhZ2VJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNvbnRhY3ROYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZW1haWwsIG1lc3NhZ2UsIGVudGVyZWROYW1lKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb250YWN0Rm9ybS9tZXNzYWdlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgbWVzc2FnZSwgZW50ZXJlZE5hbWUgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBjb250YWN0RW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZE1lc3NhZ2UgPSBjb250YWN0TWVzc2FnZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkTmFtZSA9IGNvbnRhY3ROYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZShcclxuICAgICAgICBlbnRlcmVkRW1haWwsXHJcbiAgICAgICAgZW50ZXJlZE1lc3NhZ2UsXHJcbiAgICAgICAgZW50ZXJlZE5hbWVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMudG90YWxjb250YWN0Zm9ybX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdHRpdGxlfT5cclxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbmhlYWRpbmd9PkNvbnRhY3QgRm9ybTwvaDY+XHJcblxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIElmIHRoZXJlIGlzIHNvbWV0aGluZyB5b3Ugd2FudCB0byBzdWdnZXN0IG9yIHNpbXBseSB3YW50IHRvIHNheVxyXG4gICAgICAgICAgICBoZWxsbywgZG8gcmVhY2ggb3V0LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0Zm9ybX0+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpZWxkMVwiPk5hbWUgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmllbGQxXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICByZWY9e2NvbnRhY3ROYW1lSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaWVsZDJcIj5FbWFpbCBhZGRyZXNzIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDJcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICByZWY9e2NvbnRhY3RFbWFpbElucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5NZXNzYWdlIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICAgIGNvbHM9XCI1XCJcclxuICAgICAgICAgICAgICAgIHJlZj17Y29udGFjdE1lc3NhZ2VJbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJTdWJtaXRcIj48L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9