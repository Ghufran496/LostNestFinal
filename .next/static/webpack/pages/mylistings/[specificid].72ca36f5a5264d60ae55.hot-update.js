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
        children: "Enter Contact Informations"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
        type: "text",
        name: "contactInformations",
        rows: "4",
        cols: "40",
        placeholder: "your Gmail or cell number.",
        ref: ResponseData,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.twobtn,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9EZXRhaWxGb3JtLmpzIl0sIm5hbWVzIjpbIkRldGFpbEZvcm0iLCJwcm9wcyIsInNlbmRlckRhdGEiLCJJdGVtVGl0bGUiLCJQb3N0SUQiLCJQb3N0ZXJJRCIsIlF1ZXN0aW9uIiwiQW5zd2VyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJSZXNwb25zZURhdGEiLCJ1c2VSZWYiLCJzZW5kTWVzc2FnZSIsImVudGVyZWRJbmZvcm1hdGlvbnMiLCJjb21iaW5lZERhdGVUaW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsIkluZm9zdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInJlc3VsdCIsInRhcmdldCIsInJlc2V0IiwiZm9udFNpemUiLCJjbGFzc2VzIiwiZm9ybSIsInR3b2J0biIsImJ1dHRvbjg5IiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsMEJBQzhCQSxLQUFLLENBQUNDLFVBRHBDO0FBQUEsTUFDcEJDLFNBRG9CLHFCQUNwQkEsU0FEb0I7QUFBQSxNQUNUQyxNQURTLHFCQUNUQSxNQURTO0FBQUEsTUFDREMsUUFEQyxxQkFDREEsUUFEQztBQUFBLE1BQ1NDLFFBRFQscUJBQ1NBLFFBRFQ7QUFBQSxNQUNtQkMsTUFEbkIscUJBQ21CQSxN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LHFCQUZQO0FBR0UsWUFBSSxFQUFDLEdBSFA7QUFJRSxZQUFJLEVBQUMsSUFKUDtBQUtFLG1CQUFXLEVBQUMsNEJBTGQ7QUFNRSxXQUFHLEVBQUVyQixZQU5QO0FBT0UsZ0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFZRTtBQUFLLGlCQUFTLEVBQUU4Qiw2REFBTyxDQUFDRSxNQUF4QjtBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBRUYsNkRBQU8sQ0FBQ0csUUFBM0I7QUFBcUMsY0FBSSxFQUFDLFFBQTFDO0FBQW1ELGNBQUksRUFBQyxRQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQ0UsbUJBQVMsRUFBRUgsNkRBQU8sQ0FBQ0csUUFEckI7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLGNBQUksRUFBQyxRQUhQO0FBSUUsaUJBQU8sRUFBRTNDLEtBQUssQ0FBQzRDLEtBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQWhHRDs7R0FBTTdDLFU7O0tBQUFBLFU7QUFrR1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215bGlzdGluZ3MvW3NwZWNpZmljaWRdLjcyY2EzNmY1YTUyNjRkNjBhZTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRGV0YWlsRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERldGFpbEZvcm0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IEl0ZW1UaXRsZSwgUG9zdElELCBQb3N0ZXJJRCwgUXVlc3Rpb24sIEFuc3dlciB9ID0gcHJvcHMuc2VuZGVyRGF0YTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBSZXNwb25zZURhdGEgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoXHJcbiAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICBBbnN3ZXJcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvc2VuZFJlc3BvbnNlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICAgIFBvc3RJRCxcclxuICAgICAgICBQb3N0ZXJJRCxcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICAgIEFuc3dlcixcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgY29tYmluZWREYXRlVGltZSA9IGAke2Zvcm1hdHRlZERhdGV9ICR7Zm9ybWF0dGVkVGltZX1gO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBJbmZvc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IGVudGVyZWRJbmZvcm1hdGlvbnMgPSBSZXNwb25zZURhdGEuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZShcclxuICAgICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICBQb3N0SUQsXHJcbiAgICAgIFBvc3RlcklELFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgQW5zd2VyXHJcbiAgICApO1xyXG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0+U3VibWl0aW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e0luZm9zdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdEluZm9ybWF0aW9uc1wiPkVudGVyIENvbnRhY3QgSW5mb3JtYXRpb25zPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb3JtYXRpb25zXCJcclxuICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgIGNvbHM9XCI0MFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgR21haWwgb3IgY2VsbCBudW1iZXIuXCJcclxuICAgICAgICAgIHJlZj17UmVzcG9uc2VEYXRhfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICA+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudHdvYnRufT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fSB0eXBlPVwic3VibWl0XCIgcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuY2xvc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==