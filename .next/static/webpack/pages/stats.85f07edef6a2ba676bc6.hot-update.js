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




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\stats\\ContactForm.js",
    _s = $RefreshSig$();








function sendMessage(_x, _x2, _x3) {
  return _sendMessage.apply(this, arguments);
}

function _sendMessage() {
  _sendMessage = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, message, enteredName) {
    var response, data;
    return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
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
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            data = _context2.sent;

            if (response.ok) {
              _context2.next = 8;
              break;
            }

            throw new Error(data.message || "Something went wrong!");

          case 8:
            return _context2.abrupt("return", data);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sendMessage.apply(this, arguments);
}

function ContactForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var contactEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var contactMessageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var contactNameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function submitHandler(_x4) {
    return _submitHandler.apply(this, arguments);
  }

  function _submitHandler() {
    _submitHandler = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var enteredEmail, enteredMessage, enteredName, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredEmail = contactEmailInputRef.current.value;
              enteredMessage = contactMessageInputRef.current.value;
              enteredName = contactNameInputRef.current.value;
              _context.prev = 5;
              _context.next = 8;
              return sendMessage(enteredEmail, enteredMessage, enteredName);

            case 8:
              result = _context.sent;
              setIsLoading(false); // console.log(result);
              //console.log(result);

              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);
              console.log(_context.t0);
              setIsLoading(false);

            case 16:
              setIsLoading(false);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12]]);
    }));
    return _submitHandler.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.totalcontactform,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contacttitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
        className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sectionheading,
        children: "Contact Form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "If there is something you want to suggest or simply want to say hello, do reach out."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
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
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            name: "field1",
            placeholder: "Enter name",
            ref: contactNameInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            "for": "field2",
            children: "Email address :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            name: "field2",
            placeholder: "Enter email",
            ref: contactEmailInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            "for": "description",
            children: "Message :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
            type: "text",
            name: "description",
            rows: "4",
            cols: "5",
            ref: contactMessageInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          content: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGF0cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJzZW5kTWVzc2FnZSIsImVtYWlsIiwibWVzc2FnZSIsImVudGVyZWROYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJFcnJvciIsIkNvbnRhY3RGb3JtIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb250YWN0RW1haWxJbnB1dFJlZiIsInVzZVJlZiIsImNvbnRhY3RNZXNzYWdlSW5wdXRSZWYiLCJjb250YWN0TmFtZUlucHV0UmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkTWVzc2FnZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwidG90YWxjb250YWN0Zm9ybSIsImNvbnRhY3R0aXRsZSIsInNlY3Rpb25oZWFkaW5nIiwiY29udGFjdGZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FFZUEsVzs7Ozs7c1JBQWYsa0JBQTJCQyxLQUEzQixFQUFrQ0MsT0FBbEMsRUFBMkNDLFdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3lCQyxLQUFLLENBQUMsMEJBQUQsRUFBNkI7QUFDdkRDLG9CQUFNLEVBQUUsTUFEK0M7QUFFdkRDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVQLHFCQUFLLEVBQUxBLEtBQUY7QUFBU0MsdUJBQU8sRUFBUEEsT0FBVDtBQUFrQkMsMkJBQVcsRUFBWEE7QUFBbEIsZUFBZixDQUZpRDtBQUd2RE0scUJBQU8s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QVcsRUFBQyxhQUhkO0FBSUUsZUFBRyxFQUFFSCxvQkFKUDtBQUtFLG9CQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRixlQWtCRTtBQUFPLG1CQUFJLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJGLGVBbUJFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsZ0JBQUksRUFBQyxhQUZQO0FBR0UsZ0JBQUksRUFBQyxHQUhQO0FBSUUsZ0JBQUksRUFBQyxHQUpQO0FBS0UsZUFBRyxFQUFFRSxzQkFMUDtBQU1FLG9CQUFRO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBNkJFLHFFQUFDLGtEQUFEO0FBQVEsaUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4Q0Q7O0dBakZRTixXOztLQUFBQSxXO0FBbUZNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGF0cy44NWYwN2VkZWY2YTJiYTY3NmJjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NvbnRhY3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vR2xvYmFsL0Zvb3RlclwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZW1haWwsIG1lc3NhZ2UsIGVudGVyZWROYW1lKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29udGFjdEZvcm0vbWVzc2FnZVwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgbWVzc2FnZSwgZW50ZXJlZE5hbWUgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbnRhY3RFbWFpbElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY29udGFjdE1lc3NhZ2VJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNvbnRhY3ROYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBjb250YWN0RW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZE1lc3NhZ2UgPSBjb250YWN0TWVzc2FnZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkTmFtZSA9IGNvbnRhY3ROYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZShcclxuICAgICAgICBlbnRlcmVkRW1haWwsXHJcbiAgICAgICAgZW50ZXJlZE1lc3NhZ2UsXHJcbiAgICAgICAgZW50ZXJlZE5hbWVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnRvdGFsY29udGFjdGZvcm19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0dGl0bGV9PlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbmhlYWRpbmd9PkNvbnRhY3QgRm9ybTwvaDY+XHJcblxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgSWYgdGhlcmUgaXMgc29tZXRoaW5nIHlvdSB3YW50IHRvIHN1Z2dlc3Qgb3Igc2ltcGx5IHdhbnQgdG8gc2F5IGhlbGxvLFxyXG4gICAgICAgICAgZG8gcmVhY2ggb3V0LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0Zm9ybX0+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpZWxkMVwiPk5hbWUgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmllbGQxXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWVcIlxyXG4gICAgICAgICAgICAgIHJlZj17Y29udGFjdE5hbWVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpZWxkMlwiPkVtYWlsIGFkZHJlc3MgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpZWxkMlwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtjb250YWN0RW1haWxJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+TWVzc2FnZSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICAgIGNvbHM9XCI1XCJcclxuICAgICAgICAgICAgICByZWY9e2NvbnRhY3RNZXNzYWdlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlN1Ym1pdFwiPjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=