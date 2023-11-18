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
        children: ["Date: ", SubmittedDateTime]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Question"
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
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9BRm9ybS5qcyJdLCJuYW1lcyI6WyJBRm9ybSIsInByb3BzIiwiZGF0YTIiLCJfaWQiLCJBbnN3ZXIiLCJJdGVtVGl0bGUiLCJQb3N0SUQiLCJQb3N0ZXJJRCIsIlF1ZXN0aW9uIiwiU3VibWl0dGVkRGF0ZVRpbWUiLCJ1c2VTdGF0ZSIsImlzWWVzIiwic2V0SXNZZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ5ZXNIYW5kbGVyIiwic2VuZE1lc3NhZ2UiLCJlbnRlcmVkSW5mb3JtYXRpb25zIiwiY29tYmluZWREYXRlVGltZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJub0hhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0Iiwib25jYW5jbGUiLCJmb250U2l6ZSIsImNsYXNzZXMiLCJkaXZlciIsInBhcmExIiwiYnV0dG9uODkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxvQkFTaEJBLEtBQUssQ0FBQ0MsS0FUVTtBQUFBLE1BRWxCQyxHQUZrQixlQUVsQkEsR0FGa0I7QUFBQSxNQUdsQkMsTUFIa0IsZUFHbEJBLE1BSGtCO0FBQUEsTUFJbEJDLFNBSmtCLGVBSWxCQSxTQUprQjtBQUFBLE1BS2xCQyxNQUxrQixlQUtsQkEsTUFMa0I7QUFBQSxNQU1sQkMsUUFOa0IsZUFNbEJBLFFBTmtCO0FBQUEsTUFPbEJDLFFBUGtCLGVB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LGdCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7O0dBeEhRdkMsSzs7S0FBQUEsSztBQTBITUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uMzI0OGM1MWFhNmQ1NmIwNTA5NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9BRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBEZXRhaWxGb3JtIGZyb20gXCIuL0RldGFpbEZvcm1cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEFGb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgQW5zd2VyLFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIFN1Ym1pdHRlZERhdGVUaW1lLFxyXG4gIH0gPSBwcm9wcy5kYXRhMjtcclxuICBjb25zdCBbaXNZZXMsIHNldElzWWVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB5ZXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNZZXModHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoXHJcbiAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIGNvbWJpbmVkRGF0ZVRpbWVcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvc2VuZFJlc3BvbnNlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICAgIFBvc3RJRCxcclxuICAgICAgICBQb3N0ZXJJRCxcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICAgIEFuc3dlcixcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgY29tYmluZWREYXRlVGltZSA9IGAke2Zvcm1hdHRlZERhdGV9ICR7Zm9ybWF0dGVkVGltZX1gO1xyXG5cclxuICBjb25zdCBub0hhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBlbnRlcmVkSW5mb3JtYXRpb25zID0gXCJSZXNwb25kZXIgaGFzIG51bGxpZmllZCB0aGUgdmFsaWRhdGlvbi5cIjtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZShcclxuICAgICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICBQb3N0SUQsXHJcbiAgICAgIFBvc3RlcklELFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgQW5zd2VyXHJcbiAgICApO1xyXG4gICAgaWYgKHByb3BzLm9uY2FuY2xlKSB7XHJcbiAgICAgIHByb3BzLm9uY2FuY2xlKCk7XHJcbiAgICB9XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0+U3VibWl0aW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAge2lzWWVzID8gKFxyXG4gICAgICAgIDxEZXRhaWxGb3JtIGNsb3NlPXtwcm9wcy5vbmNhbmNsZX0gc2VuZGVyRGF0YT17cHJvcHMuZGF0YTJ9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2ZXJ9PlxyXG4gICAgICAgICAgPGgzPkRhdGU6IHtTdWJtaXR0ZWREYXRlVGltZX08L2gzPlxyXG4gICAgICAgICAgPGgyPlF1ZXN0aW9uPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhMX0+e1F1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgIDxoMj5BbnN3ZXI8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmExfT57QW5zd2VyfTwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3llc0hhbmRsZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBZZXNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bm9IYW5kbGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25jYW5jbGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==