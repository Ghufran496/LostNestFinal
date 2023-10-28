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









function ContactForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isError = _useState2[0],
      setIsError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Sorry but the page you are looking for does not exist."),
      isErrorData = _useState3[0],
      setIsErrorData = _useState3[1];

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

              if (!response.ok) {
                setIsErrorData(data.message);
                setIsLoading(false);
                setIsError(true);
              }

              return _context.abrupt("return", data);

            case 8:
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
              _context2.next = 7;
              return sendMessage(enteredEmail, enteredMessage, enteredName);

            case 7:
              result = _context2.sent;
              setIsLoading(false);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _submitHandler.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 12
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: "If there is something you want to suggest or simply want to say hello, do reach out."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              name: "field1",
              placeholder: "Enter name",
              ref: contactNameInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              "for": "field2",
              children: "Email address :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "email",
              name: "field2",
              placeholder: "Enter email",
              ref: contactEmailInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
              "for": "description",
              children: "Message :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
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
              lineNumber: 92,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Global_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(ContactForm, "fki2TkCY5RyM1auH5yG1wkvK5t8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGF0cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJpc0Vycm9yRGF0YSIsInNldElzRXJyb3JEYXRhIiwiY29udGFjdEVtYWlsSW5wdXRSZWYiLCJ1c2VSZWYiLCJjb250YWN0TWVzc2FnZUlucHV0UmVmIiwiY29udGFjdE5hbWVJbnB1dFJlZiIsInNlbmRNZXNzYWdlIiwiZW1haWwiLCJtZXNzYWdlIiwiZW50ZXJlZE5hbWUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJvayIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZE1lc3NhZ2UiLCJyZXN1bHQiLCJjbGFzc2VzIiwidG90YWxjb250YWN0Zm9ybSIsImNvbnRhY3R0aXRsZSIsInNlY3Rpb25oZWFkaW5nIiwiY29udGFjdGZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsS0FBRCxDQURyQjtBQUFBLE1BQ2RDLFNBRGM7QUFBQSxNQUNIQyxZQURHOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVkRyxPQUZjO0FBQUEsTUFFTEMsVUFGSzs7QUFBQSxtQkFHaUJKLHNEQUFRLENBQzVDLHdEQUQ0QyxDQUh6QjtBQUFBLE1BR2RLLFdBSGM7QUFBQSxNQUdEQyxjQUhDOztBQU1yQixNQUFNQyxv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QUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLGtCQUFJLEVBQUMsUUFGUDtBQUdFLHlCQUFXLEVBQUMsWUFIZDtBQUlFLGlCQUFHLEVBQUVmLG1CQUpQO0FBS0Usc0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBU0U7QUFBTyxxQkFBSSxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLGVBVUU7QUFDRSxrQkFBSSxFQUFDLE9BRFA7QUFFRSxrQkFBSSxFQUFDLFFBRlA7QUFHRSx5QkFBVyxFQUFDLGFBSGQ7QUFJRSxpQkFBRyxFQUFFSCxvQkFKUDtBQUtFLHNCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRixlQWtCRTtBQUFPLHFCQUFJLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJGLGVBbUJFO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyxhQUZQO0FBR0Usa0JBQUksRUFBQyxHQUhQO0FBSUUsa0JBQUksRUFBQyxHQUpQO0FBS0UsaUJBQUcsRUFBRUUsc0JBTFA7QUFNRSxzQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQTZCRSxxRUFBQyxrREFBRDtBQUFRLG1CQUFPLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBNkNFLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpREQ7O0dBbkdRVixXOztLQUFBQSxXO0FBcUdNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGF0cy5kNjQ2NjkxMGU4Yjk5OGRhZWIzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NvbnRhY3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vR2xvYmFsL0Zvb3RlclwiO1xyXG5pbXBvcnQgRXJyb3JDb21wIGZyb20gXCIuLi9VSS9FcnJvckNvbXBcIjtcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXHJcbiAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgKTtcclxuICBjb25zdCBjb250YWN0RW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNvbnRhY3RNZXNzYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjb250YWN0TmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGVtYWlsLCBtZXNzYWdlLCBlbnRlcmVkTmFtZSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29udGFjdEZvcm0vbWVzc2FnZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIG1lc3NhZ2UsIGVudGVyZWROYW1lIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNFcnJvckRhdGEoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gY29udGFjdEVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRNZXNzYWdlID0gY29udGFjdE1lc3NhZ2VJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZE5hbWUgPSBjb250YWN0TmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2UoZW50ZXJlZEVtYWlsLCBlbnRlcmVkTWVzc2FnZSwgZW50ZXJlZE5hbWUpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGlmIChpc0Vycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yQ29tcCBlcnJvckRhdGE9e2lzRXJyb3JEYXRhfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3RhbGNvbnRhY3Rmb3JtfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0dGl0bGV9PlxyXG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uaGVhZGluZ30+Q29udGFjdCBGb3JtPC9oNj5cclxuXHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgSWYgdGhlcmUgaXMgc29tZXRoaW5nIHlvdSB3YW50IHRvIHN1Z2dlc3Qgb3Igc2ltcGx5IHdhbnQgdG8gc2F5XHJcbiAgICAgICAgICAgIGhlbGxvLCBkbyByZWFjaCBvdXQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3Rmb3JtfT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmllbGQxXCI+TmFtZSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDFcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lXCJcclxuICAgICAgICAgICAgICAgIHJlZj17Y29udGFjdE5hbWVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpZWxkMlwiPkVtYWlsIGFkZHJlc3MgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkMlwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlZj17Y29udGFjdEVtYWlsSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPk1lc3NhZ2UgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICAgICAgY29scz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtjb250YWN0TWVzc2FnZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlN1Ym1pdFwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=