webpackHotUpdate_N_E("pages/mylistings/[specificid]",{

/***/ "./components/overlayForm/DetailForm.js":
/*!**********************************************!*\
  !*** ./components/overlayForm/DetailForm.js ***!
  \**********************************************/
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
/* harmony import */ var _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailForm.module.css */ "./components/overlayForm/DetailForm.module.css");
/* harmony import */ var _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DetailForm_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\DetailForm.js",
    _this = undefined,
    _s = $RefreshSig$();





var DetailForm = function DetailForm(props) {
  _s();

  var _props$senderData = props.senderData,
      ItemTitle = _props$senderData.ItemTitle,
      PostID = _props$senderData.PostID,
      PosterID = _props$senderData.PosterID,
      Question = _props$senderData.Question,
      Answer = _props$senderData.Answer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var ResponseData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function sendMessage(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _sendMessage.apply(this, arguments);
  }

  function _sendMessage() {
    _sendMessage = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer) {
      var response, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/answers/sendResponse", {
                method: "POST",
                body: JSON.stringify({
                  enteredInformations: enteredInformations,
                  ItemTitle: ItemTitle,
                  PostID: PostID,
                  PosterID: PosterID,
                  Question: Question,
                  combinedDateTime: combinedDateTime,
                  Answer: Answer
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
                setIsLoading(false);
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

  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString("en-US");
  var formattedTime = currentDate.toLocaleTimeString("en-US");
  var combinedDateTime = "".concat(formattedDate, " ").concat(formattedTime);

  function InfosubmitHandler(_x8) {
    return _InfosubmitHandler.apply(this, arguments);
  }

  function _InfosubmitHandler() {
    _InfosubmitHandler = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var enteredInformations, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredInformations = ResponseData.current.value;
              _context2.next = 5;
              return sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer);

            case 5:
              result = _context2.sent;
              event.target.reset();
              setIsLoading(false);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _InfosubmitHandler.apply(this, arguments);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        fontSize: "1.5rem"
      },
      children: "Submiting..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      className: _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,
      onSubmit: InfosubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        "for": "contactInformations",
        children: "Enter your Contact Informations"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
        type: "text",
        name: "contactInformations",
        rows: "4",
        cols: "40",
        placeholder: "Please provide your Gmail address or cellphone number.",
        ref: ResponseData,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button89,
          type: "submit",
          role: "button",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button89,
          type: "button",
          role: "button",
          onClick: props.close,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
};

_s(DetailForm, "dwisrlX7s8bV/yOUXx0gITE5dK8=");

_c = DetailForm;
/* harmony default export */ __webpack_exports__["default"] = (DetailForm);

var _c;

$RefreshReg$(_c, "DetailForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9EZXRhaWxGb3JtLmpzIl0sIm5hbWVzIjpbIkRldGFpbEZvcm0iLCJwcm9wcyIsInNlbmRlckRhdGEiLCJJdGVtVGl0bGUiLCJQb3N0SUQiLCJQb3N0ZXJJRCIsIlF1ZXN0aW9uIiwiQW5zd2VyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJSZXNwb25zZURhdGEiLCJ1c2VSZWYiLCJzZW5kTWVzc2FnZSIsImVudGVyZWRJbmZvcm1hdGlvbnMiLCJjb21iaW5lZERhdGVUaW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsIkluZm9zdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInJlc3VsdCIsInRhcmdldCIsInJlc2V0IiwiZm9udFNpemUiLCJjbGFzc2VzIiwiZm9ybSIsImJ1dHRvbjg5IiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsMEJBQzhCQSxLQUFLLENBQUNDLFVBRHBDO0FBQUEsTUFDcEJDLFNBRG9CLHFCQUNwQkEsU0FEb0I7QUFBQSxNQUNUQyxNQURTLHFCQUNUQSxNQURTO0FBQUEsTUFDREMsUUFEQyxxQkFDREEsUUFEQztBQUFBLE1BQ1NDLFFBRFQscUJBQ1NBLFFBRFQ7QUFBQSxNQUNtQkMsTUFEbkIscUJBQ21CQSxNQURuQjs7QUFB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R0UsWUFBSSxFQUFDLEdBSFA7QUFJRSxZQUFJLEVBQUMsSUFKUDtBQUtFLG1CQUFXLEVBQUMsd0RBTGQ7QUFNRSxXQUFHLEVBQUVyQixZQU5QO0FBT0UsZ0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFZRTtBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBRThCLDZEQUFPLENBQUNFLFFBQTNCO0FBQXFDLGNBQUksRUFBQyxRQUExQztBQUFtRCxjQUFJLEVBQUMsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUNFLG1CQUFTLEVBQUVGLDZEQUFPLENBQUNFLFFBRHJCO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxjQUFJLEVBQUMsUUFIUDtBQUlFLGlCQUFPLEVBQUUxQyxLQUFLLENBQUMyQyxLQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0FoR0Q7O0dBQU01QyxVOztLQUFBQSxVO0FBa0dTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teWxpc3RpbmdzL1tzcGVjaWZpY2lkXS4yNTUwNWY0N2JkNTEzNjdmZWEwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0RldGFpbEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEZXRhaWxGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBJdGVtVGl0bGUsIFBvc3RJRCwgUG9zdGVySUQsIFF1ZXN0aW9uLCBBbnN3ZXIgfSA9IHByb3BzLnNlbmRlckRhdGE7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgUmVzcG9uc2VEYXRhID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKFxyXG4gICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgQW5zd2VyXHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL3NlbmRSZXNwb25zZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgICBQb3N0SUQsXHJcbiAgICAgICAgUG9zdGVySUQsXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgICBBbnN3ZXIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGNvbWJpbmVkRGF0ZVRpbWUgPSBgJHtmb3JtYXR0ZWREYXRlfSAke2Zvcm1hdHRlZFRpbWV9YDtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gSW5mb3N1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBlbnRlcmVkSW5mb3JtYXRpb25zID0gUmVzcG9uc2VEYXRhLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2UoXHJcbiAgICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgUG9zdElELFxyXG4gICAgICBQb3N0ZXJJRCxcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICAgIEFuc3dlclxyXG4gICAgKTtcclxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PlN1Ym1pdGluZy4uLjwvZGl2PjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtJbmZvc3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RJbmZvcm1hdGlvbnNcIj5FbnRlciB5b3VyIENvbnRhY3QgSW5mb3JtYXRpb25zPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb3JtYXRpb25zXCJcclxuICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgIGNvbHM9XCI0MFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBwcm92aWRlIHlvdXIgR21haWwgYWRkcmVzcyBvciBjZWxscGhvbmUgbnVtYmVyLlwiXHJcbiAgICAgICAgICByZWY9e1Jlc3BvbnNlRGF0YX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX0gdHlwZT1cInN1Ym1pdFwiIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=