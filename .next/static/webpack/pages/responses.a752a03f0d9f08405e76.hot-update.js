webpackHotUpdate_N_E("pages/responses",{

/***/ "./components/MyResponse/ResponseItem.js":
/*!***********************************************!*\
  !*** ./components/MyResponse/ResponseItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponseItem.module.css */ "./components/MyResponse/ResponseItem.module.css");
/* harmony import */ var _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\MyResponse\\ResponseItem.js",
    _this = undefined,
    _s = $RefreshSig$();




var ResponseItem = function ResponseItem(props) {
  _s();

  var _props$data = props.data,
      _id = _props$data._id,
      enteredContact = _props$data.enteredContact,
      ItemTitle = _props$data.ItemTitle,
      PostID = _props$data.PostID,
      PosterID = _props$data.PosterID,
      Question = _props$data.Question,
      ValidatorDateTime = _props$data.ValidatorDateTime,
      Answer = _props$data.Answer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isDivVisible = _useState[0],
      setIsDivVisible = _useState[1];

  var handleButtonClick = function handleButtonClick() {
    setIsDivVisible(!isDivVisible);
  }; //   const displayContent = enteredContact.includes(
  //     "Responder Has Nullified The Validation."
  //   ) ? (
  //     <h4>Your answer has been rejected</h4>
  //   ) : (
  //     <h4>{enteredContact}</h4>
  //   );


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    style: {
      fontSize: "1.5rem",
      border: "1px solid #311465",
      padding: "2rem 8rem 2rem 2rem",
      textTransform: "capitalize",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontWeight: "400",
      borderRadius: "2.5rem",
      position: "relative" // Necessary for positioning the hidden div

    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item ID: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: PostID
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 18
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: ItemTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: ValidatorDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      onClick: handleButtonClick,
      children: "Show Response"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), isDivVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        border: "1px solid #311465",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: [" Response: ", enteredContact]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        onClick: handleButtonClick,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(ResponseItem, "oJwIBM4dWp6v6/unmgmtRAQIjvE=");

_c = ResponseItem;
/* harmony default export */ __webpack_exports__["default"] = (ResponseItem);

var _c;

$RefreshReg$(_c, "ResponseItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJmb250U2l6ZSIsImJvcmRlciIsInBhZGRpbmciLCJ0ZXh0VHJhbnNmb3JtIiwiYm94U2hhZG93IiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiY2xhc3NlcyIsInNwYW5lciIsImJ0biIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsb0JBVTFCQSxLQUFLLENBQUNDLElBVm9CO0FBQUEsTUFFNUJDLEdBRjRCLGVBRTVCQSxHQUY0QjtBQUFBLE1BRzVCQyxjQUg0QixlQUc1QkEsY0FINEI7QUFBQSxNQUk1QkMsU0FKNEIsZUFJNUJBLFNBSjRCO0FBQUEsTUFLNUJDLE1BTDRCLGVBSzVCQSxNQUw0QjtBQUFBLE1BTTVCQyxRQU40QixlQU01QkEsUUFONEI7QUFBQSxNQU81QkMsUUFQNEIsZUFPNUJBLFFBUDRCO0FBQUEsTUFRNUJDLGlCQVI0QixlQVE1QkEsaUJBUjRCO0FBQUEsTUFTNUJDLE1BVDRCLGVBUzVCQSxNQVQ0Qjs7QUFBQSxrQkFXVUMsc0RBQVEsQ0FBQyxLQUFELENBWGxCO0FBQUEsTUFXdkJDLFlBWHVCO0FBQUEsTUFXVEMsZUFYUzs7QUFhOUIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCRCxtQkFBZSxDQUFDLENBQUNELFlBQUYsQ0FBZjtBQUNELEdBRkQsQ0FiOEIsQ0FpQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMRyxjQUFRLEVBQUUsUUFETDtBQUVMQyxZQUFNLEVBQUUsbUJBRkg7QUFHTEMsYUFBTyxFQUFFLHFCQUhKO0FBSUxDLG1CQUFhLEVBQUUsWUFKVjtBQUtMQyxlQUFTLEVBQUUsOEJBTE47QUFNTEMsZ0JBQVUsRUFBRSxLQU5QO0FBT0xDLGtCQUFZLEVBQUUsUUFQVDtBQVFMQyxjQUFRLEVBQUUsVUFSTCxDQVFpQjs7QUFSakIsS0FEVDtBQUFBLDRCQVlFO0FBQUEsMkNBQ1c7QUFBTSxpQkFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUF6QjtBQUFBLGtCQUFrQ2xCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWVFO0FBQUEsNkNBQ2E7QUFBTSxpQkFBUyxFQUFFaUIsK0RBQU8sQ0FBQ0MsTUFBekI7QUFBQSxrQkFBa0NuQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkYsZUFrQkU7QUFBQSw0Q0FDWTtBQUFNLGlCQUFTLEVBQUVrQiwrREFBTyxDQUFDQyxNQUF6QjtBQUFBLGtCQUFrQ2hCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsZUFxQkU7QUFBQSwrQ0FDZTtBQUFNLGlCQUFTLEVBQUVlLCtEQUFPLENBQUNDLE1BQXpCO0FBQUEsa0JBQWtDZDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBd0JFO0FBQUEsd0NBQ1E7QUFBTSxpQkFBUyxFQUFFYSwrREFBTyxDQUFDQyxNQUF6QjtBQUFBLGtCQUFrQ2Y7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRixlQTRCRTtBQUFRLGVBQVMsRUFBRWMsK0RBQU8sQ0FBQ0UsR0FBM0I7QUFBZ0MsYUFBTyxFQUFFWCxpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkYsRUErQkdGLFlBQVksaUJBQ1g7QUFDRSxXQUFLLEVBQUU7QUFDTEksY0FBTSxFQUFFLG1CQURIO0FBRUxHLGlCQUFTLEVBQUUsOEJBRk47QUFHTEYsZUFBTyxFQUFFLE1BSEo7QUFJTFMsZUFBTyxFQUFFLE1BSko7QUFLTEMscUJBQWEsRUFBRSxRQUxWO0FBTUxDLHNCQUFjLEVBQUUsUUFOWDtBQU9MQyxrQkFBVSxFQUFFO0FBUFAsT0FEVDtBQUFBLDhCQVdFO0FBQUEsa0NBQWdCekIsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFhRTtBQUFRLGlCQUFTLEVBQUVtQiwrREFBTyxDQUFDRSxHQUEzQjtBQUFnQyxlQUFPLEVBQUVYLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFERCxDQTlFRDs7R0FBTWQsWTs7S0FBQUEsWTtBQWdGU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzcG9uc2VzLmE3NTJhMDNmMGQ5ZjA4NDA1ZTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUmVzcG9uc2VJdGVtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFJlc3BvbnNlSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIGVudGVyZWRDb250YWN0LFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIFZhbGlkYXRvckRhdGVUaW1lLFxyXG4gICAgQW5zd2VyLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG4gIGNvbnN0IFtpc0RpdlZpc2libGUsIHNldElzRGl2VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNEaXZWaXNpYmxlKCFpc0RpdlZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIC8vICAgY29uc3QgZGlzcGxheUNvbnRlbnQgPSBlbnRlcmVkQ29udGFjdC5pbmNsdWRlcyhcclxuICAvLyAgICAgXCJSZXNwb25kZXIgSGFzIE51bGxpZmllZCBUaGUgVmFsaWRhdGlvbi5cIlxyXG4gIC8vICAgKSA/IChcclxuICAvLyAgICAgPGg0PllvdXIgYW5zd2VyIGhhcyBiZWVuIHJlamVjdGVkPC9oND5cclxuICAvLyAgICkgOiAoXHJcbiAgLy8gICAgIDxoND57ZW50ZXJlZENvbnRhY3R9PC9oND5cclxuICAvLyAgICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGlcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMTE0NjVcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjJyZW0gOHJlbSAycmVtIDJyZW1cIixcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIuNXJlbVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIC8vIE5lY2Vzc2FyeSBmb3IgcG9zaXRpb25pbmcgdGhlIGhpZGRlbiBkaXZcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIEl0ZW0gSUQ6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntQb3N0SUR9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgSXRlbSBOYW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57SXRlbVRpdGxlfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFF1ZXN0aW9uOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57UXVlc3Rpb259PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgWW91ciBBbnN3ZXI6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntBbnN3ZXJ9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgVGltZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1ZhbGlkYXRvckRhdGVUaW1lfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgIFNob3cgUmVzcG9uc2VcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtpc0RpdlZpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMxMTQ2NVwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDQ+IFJlc3BvbnNlOiB7ZW50ZXJlZENvbnRhY3R9PC9oND5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9