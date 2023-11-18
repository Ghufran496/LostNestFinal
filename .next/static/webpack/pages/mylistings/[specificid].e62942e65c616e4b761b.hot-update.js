webpackHotUpdate_N_E("pages/mylistings/[specificid]",{

/***/ "./components/overlayForm/AForm.js":
/*!*****************************************!*\
  !*** ./components/overlayForm/AForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AForm.module.css */ "./components/overlayForm/AForm.module.css");
/* harmony import */ var _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DetailForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailForm */ "./components/overlayForm/DetailForm.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\AForm.js",
    _s = $RefreshSig$();






function AForm(props) {
  _s();

  var _props$data = props.data2,
      _id = _props$data._id,
      Answer = _props$data.Answer,
      ItemTitle = _props$data.ItemTitle,
      PostID = _props$data.PostID,
      PosterID = _props$data.PosterID,
      Question = _props$data.Question,
      SubmittedDateTime = _props$data.SubmittedDateTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isYes = _useState[0],
      setIsYes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var yesHandler = function yesHandler() {
    setIsYes(true);
  };

  function sendMessage(_x, _x2, _x3, _x4, _x5, _x6) {
    return _sendMessage.apply(this, arguments);
  }

  function _sendMessage() {
    _sendMessage = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime) {
      var response, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
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
              response = _context2.sent;
              _context2.next = 5;
              return response.json();

            case 5:
              data = _context2.sent;

              if (!response.ok) {
                setIsLoading(false);
              }

              return _context2.abrupt("return", data);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _sendMessage.apply(this, arguments);
  }

  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString("en-US");
  var formattedTime = currentDate.toLocaleTimeString("en-US");
  var combinedDateTime = "".concat(formattedDate, " ").concat(formattedTime);

  var noHandler = /*#__PURE__*/function () {
    var _ref = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var enteredInformations, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredInformations = "Responder has nullified the validation.";
              _context.next = 5;
              return sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer);

            case 5:
              result = _context.sent;

              if (props.oncancle) {
                props.oncancle();
              }

              setIsLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function noHandler(_x7) {
      return _ref.apply(this, arguments);
    };
  }();

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "1.5rem"
      },
      children: "Submiting..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: isYes ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      close: props.oncancle,
      senderData: props.data2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.diver,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: SubmittedDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Question?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.para1,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Answer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.para1,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button90,
          type: "button",
          role: "button",
          onClick: yesHandler,
          children: "Yes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button89,
          type: "button",
          role: "button",
          onClick: noHandler,
          children: "No"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button89,
          type: "button",
          role: "button",
          onClick: props.oncancle,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

_s(AForm, "bUP9nO8CGSe9ZpiXI2r/rnTCwsM=");

_c = AForm;
/* harmony default export */ __webpack_exports__["default"] = (AForm);

var _c;

$RefreshReg$(_c, "AForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9BRm9ybS5qcyJdLCJuYW1lcyI6WyJBRm9ybSIsInByb3BzIiwiZGF0YTIiLCJfaWQiLCJBbnN3ZXIiLCJJdGVtVGl0bGUiLCJQb3N0SUQiLCJQb3N0ZXJJRCIsIlF1ZXN0aW9uIiwiU3VibWl0dGVkRGF0ZVRpbWUiLCJ1c2VTdGF0ZSIsImlzWWVzIiwic2V0SXNZZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ5ZXNIYW5kbGVyIiwic2VuZE1lc3NhZ2UiLCJlbnRlcmVkSW5mb3JtYXRpb25zIiwiY29tYmluZWREYXRlVGltZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJub0hhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0Iiwib25jYW5jbGUiLCJmb250U2l6ZSIsImNsYXNzZXMiLCJkaXZlciIsInBhcmExIiwiYnV0dG9uOTAiLCJidXR0b244OSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLG9CQVNoQkEsS0FBSyxDQUFDQyxLQVRVO0FBQUEsTUFFbEJDLEdBRmtCLGVBRWxCQSxHQUZrQjtBQUFBLE1BR2xCQyxNQUhrQixlQUdsQkEsTUFIa0I7QUFBQSxNQUlsQkMsU0FKa0IsZUFJbEJBLFNBSmtCO0FBQUEsTUFLbEJDLE1BTGtCLGVBS2xCQSxNQUxrQjtBQUFBLE1BTWxCQyxRQU5rQixlQU1sQkEsUUFOa0I7QUFBQSxNQU9s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O0FBQUEsZ0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0F4SFF2QyxLOztLQUFBQSxLO0FBMEhNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teWxpc3RpbmdzL1tzcGVjaWZpY2lkXS5lNjI5NDJlNjVjNjE2ZTRiNzYxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0FGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IERldGFpbEZvcm0gZnJvbSBcIi4vRGV0YWlsRm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQUZvcm0ocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBBbnN3ZXIsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBQb3N0SUQsXHJcbiAgICBQb3N0ZXJJRCxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgU3VibWl0dGVkRGF0ZVRpbWUsXHJcbiAgfSA9IHByb3BzLmRhdGEyO1xyXG4gIGNvbnN0IFtpc1llcywgc2V0SXNZZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHllc0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1llcyh0cnVlKTtcclxuICB9O1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZShcclxuICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBQb3N0SUQsXHJcbiAgICBQb3N0ZXJJRCxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgY29tYmluZWREYXRlVGltZVxyXG4gICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYW5zd2Vycy9zZW5kUmVzcG9uc2VcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgICAgICBJdGVtVGl0bGUsXHJcbiAgICAgICAgUG9zdElELFxyXG4gICAgICAgIFBvc3RlcklELFxyXG4gICAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICAgICAgQW5zd2VyLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBjb21iaW5lZERhdGVUaW1lID0gYCR7Zm9ybWF0dGVkRGF0ZX0gJHtmb3JtYXR0ZWRUaW1lfWA7XHJcblxyXG4gIGNvbnN0IG5vSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IGVudGVyZWRJbmZvcm1hdGlvbnMgPSBcIlJlc3BvbmRlciBoYXMgbnVsbGlmaWVkIHRoZSB2YWxpZGF0aW9uLlwiO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRNZXNzYWdlKFxyXG4gICAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgICBJdGVtVGl0bGUsXHJcbiAgICAgIFBvc3RJRCxcclxuICAgICAgUG9zdGVySUQsXHJcbiAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICBBbnN3ZXJcclxuICAgICk7XHJcbiAgICBpZiAocHJvcHMub25jYW5jbGUpIHtcclxuICAgICAgcHJvcHMub25jYW5jbGUoKTtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT5TdWJtaXRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7aXNZZXMgPyAoXHJcbiAgICAgICAgPERldGFpbEZvcm0gY2xvc2U9e3Byb3BzLm9uY2FuY2xlfSBzZW5kZXJEYXRhPXtwcm9wcy5kYXRhMn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZlcn0+XHJcbiAgICAgICAgICA8aDM+e1N1Ym1pdHRlZERhdGVUaW1lfTwvaDM+XHJcbiAgICAgICAgICA8aDI+UXVlc3Rpb24/PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhMX0+e1F1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgIDxoMj5BbnN3ZXI8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmExfT57QW5zd2VyfTwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjkwfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3llc0hhbmRsZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBZZXNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bm9IYW5kbGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25jYW5jbGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==