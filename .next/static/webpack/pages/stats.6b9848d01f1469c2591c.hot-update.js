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
            return fetch("/api/auth/signup", {
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
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12]]);
    }));
    return _submitHandler.apply(this, arguments);
  }

  if (isLoading) {
    /*#__PURE__*/
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
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
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "If there is something you want to suggest or simply want to say hello, do reach out."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contactform,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            "for": "field1",
            children: "Name :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            name: "field1",
            placeholder: "Enter name",
            ref: contactNameInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            "for": "field2",
            children: "Email address :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            name: "field2",
            placeholder: "Enter email",
            ref: contactEmailInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            "for": "description",
            children: "Message :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
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
            lineNumber: 91,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          content: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGF0cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJzZW5kTWVzc2FnZSIsImVtYWlsIiwibWVzc2FnZSIsImVudGVyZWROYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJFcnJvciIsIkNvbnRhY3RGb3JtIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb250YWN0RW1haWxJbnB1dFJlZiIsInVzZVJlZiIsImNvbnRhY3RNZXNzYWdlSW5wdXRSZWYiLCJjb250YWN0TmFtZUlucHV0UmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkTWVzc2FnZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwidG90YWxjb250YWN0Zm9ybSIsImNvbnRhY3R0aXRsZSIsInNlY3Rpb25oZWFkaW5nIiwiY29udGFjdGZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FFZUEsVzs7Ozs7c1JBQWYsa0JBQTJCQyxLQUEzQixFQUFrQ0MsT0FBbEMsRUFBMkNDLFdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3lCQyxLQUFLLENBQUMsa0JBQUQsRUFBcUI7QUFDL0NDLG9CQUFNLEVBQUUsTUFEdUM7QUFFL0NDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVQLHFCQUFLLEVBQUxBLEtBQUY7QUFBU0MsdUJBQU8sRUFBUEEsT0FBVDtBQUFrQkMsMkJBQVcsRUFBWEE7QUFBbEIsZUFBZixDQUZ5QztBQUcvQ00scUJBQU8sRUFBRTtB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LGtCQVZGLGVBa0JFO0FBQU8sbUJBQUksYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkYsZUFtQkU7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxnQkFBSSxFQUFDLGFBRlA7QUFHRSxnQkFBSSxFQUFDLEdBSFA7QUFJRSxnQkFBSSxFQUFDLEdBSlA7QUFLRSxlQUFHLEVBQUVFLHNCQUxQO0FBTUUsb0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUE2QkUscUVBQUMsa0RBQUQ7QUFBUSxpQkFBTyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThDRDs7R0FoRlFOLFc7O0tBQUFBLFc7QUFrRk1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLjZiOTg0OGQwMWYxNDY5YzI1OTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NvbnRhY3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGVtYWlsLCBtZXNzYWdlLCBlbnRlcmVkTmFtZSkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBtZXNzYWdlLCBlbnRlcmVkTmFtZSB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29udGFjdEVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjb250YWN0TWVzc2FnZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY29udGFjdE5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGNvbnRhY3RFbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkTWVzc2FnZSA9IGNvbnRhY3RNZXNzYWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWROYW1lID0gY29udGFjdE5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRNZXNzYWdlKFxyXG4gICAgICAgIGVudGVyZWRFbWFpbCxcclxuICAgICAgICBlbnRlcmVkTWVzc2FnZSxcclxuICAgICAgICBlbnRlcmVkTmFtZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnRvdGFsY29udGFjdGZvcm19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0dGl0bGV9PlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbmhlYWRpbmd9PkNvbnRhY3QgRm9ybTwvaDY+XHJcblxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgSWYgdGhlcmUgaXMgc29tZXRoaW5nIHlvdSB3YW50IHRvIHN1Z2dlc3Qgb3Igc2ltcGx5IHdhbnQgdG8gc2F5IGhlbGxvLFxyXG4gICAgICAgICAgZG8gcmVhY2ggb3V0LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0Zm9ybX0+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmllbGQxXCI+TmFtZSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDFcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgcmVmPXtjb250YWN0TmFtZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmllbGQyXCI+RW1haWwgYWRkcmVzcyA6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmllbGQyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICByZWY9e2NvbnRhY3RFbWFpbElucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5NZXNzYWdlIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgY29scz1cIjVcIlxyXG4gICAgICAgICAgICAgIHJlZj17Y29udGFjdE1lc3NhZ2VJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiU3VibWl0XCI+PC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==