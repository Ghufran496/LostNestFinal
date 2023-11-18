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
  };

  var displayContent = enteredContact.includes("Responder Has Nullified The Validation.") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
    children: "Your answer has been rejected"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
    children: enteredContact
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
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
        children: displayContent
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: displayContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkaXNwbGF5Q29udGVudCIsImluY2x1ZGVzIiwiZm9udFNpemUiLCJib3JkZXIiLCJwYWRkaW5nIiwidGV4dFRyYW5zZm9ybSIsImJveFNoYWRvdyIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImNsYXNzZXMiLCJzcGFuZXIiLCJidG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxvQkFVMUJBLEtBQUssQ0FBQ0MsSUFWb0I7QUFBQSxNQUU1QkMsR0FGNEIsZUFFNUJBLEdBRjRCO0FBQUEsTUFHNUJDLGNBSDRCLGVBRzVCQSxjQUg0QjtBQUFBLE1BSTVCQyxTQUo0QixlQUk1QkEsU0FKNEI7QUFBQSxNQUs1QkMsTUFMNEIsZUFLNUJBLE1BTDRCO0FBQUEsTUFNNUJDLFFBTjRCLGVBTTVCQSxRQU40QjtBQUFBLE1BTzVCQyxRQVA0QixlQU81QkEsUUFQNEI7QUFBQSxNQVE1QkMsaUJBUjRCLGVBUTVCQSxpQkFSNEI7QUFBQSxNQVM1QkMsTUFUNEIsZUFTNUJBLE1BVDRCOztBQUFBLGtCQVdVQyxzREFBUSxDQUFDLEtBQUQsQ0FYbEI7QUFBQSxNQVd2QkMsWUFYdUI7QUFBQSxNQVdUQyxlQVhTOztBQWE5QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJELG1CQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxjQUFjLEdBQUdYLGNBQWMsQ0FBQ1ksUUFBZixDQUNyQix5Q0FEcUIsaUJBR3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSHFCLGdCQUtyQjtBQUFBLGNBQUtaO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUxGO0FBUUEsc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTGEsY0FBUSxFQUFFLFFBREw7QUFFTEMsWUFBTSxFQUFFLG1CQUZIO0FBR0xDLGFBQU8sRUFBRSxxQkFISjtBQUlMQyxtQkFBYSxFQUFFLFlBSlY7QUFLTEMsZUFBUyxFQUFFLDhCQUxOO0FBTUxDLGdCQUFVLEVBQUUsS0FOUDtBQU9MQyxrQkFBWSxFQUFFLFFBUFQ7QUFRTEMsY0FBUSxFQUFFLFVBUkwsQ0FRaUI7O0FBUmpCLEtBRFQ7QUFBQSw0QkFZRTtBQUFBLDJDQUNXO0FBQU0saUJBQVMsRUFBRUMsK0RBQU8sQ0FBQ0MsTUFBekI7QUFBQSxrQkFBa0NwQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUFlRTtBQUFBLDZDQUNhO0FBQU0saUJBQVMsRUFBRW1CLCtEQUFPLENBQUNDLE1BQXpCO0FBQUEsa0JBQWtDWDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkYsZUFrQkU7QUFBQSw0Q0FDWTtBQUFNLGlCQUFTLEVBQUVVLCtEQUFPLENBQUNDLE1BQXpCO0FBQUEsa0JBQWtDbEI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixlQXFCRTtBQUFBLCtDQUNlO0FBQU0saUJBQVMsRUFBRWlCLCtEQUFPLENBQUNDLE1BQXpCO0FBQUEsa0JBQWtDaEI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRixlQXdCRTtBQUFBLHdDQUNRO0FBQU0saUJBQVMsRUFBRWUsK0RBQU8sQ0FBQ0MsTUFBekI7QUFBQSxrQkFBa0NqQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGLGVBNEJFO0FBQVEsZUFBUyxFQUFFZ0IsK0RBQU8sQ0FBQ0UsR0FBM0I7QUFBZ0MsYUFBTyxFQUFFYixpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkYsRUErQkdGLFlBQVksaUJBQ1g7QUFBQSw2QkFDRTtBQUFBLGtCQUFLRztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBaEVEOztHQUFNZixZOztLQUFBQSxZO0FBa0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNwb25zZXMuNGNiZTQ5YjM2Zjc2NTkxZWEyOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9SZXNwb25zZUl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUmVzcG9uc2VJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgZW50ZXJlZENvbnRhY3QsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBQb3N0SUQsXHJcbiAgICBQb3N0ZXJJRCxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgVmFsaWRhdG9yRGF0ZVRpbWUsXHJcbiAgICBBbnN3ZXIsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc3QgW2lzRGl2VmlzaWJsZSwgc2V0SXNEaXZWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0RpdlZpc2libGUoIWlzRGl2VmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlzcGxheUNvbnRlbnQgPSBlbnRlcmVkQ29udGFjdC5pbmNsdWRlcyhcclxuICAgIFwiUmVzcG9uZGVyIEhhcyBOdWxsaWZpZWQgVGhlIFZhbGlkYXRpb24uXCJcclxuICApID8gKFxyXG4gICAgPGg0PllvdXIgYW5zd2VyIGhhcyBiZWVuIHJlamVjdGVkPC9oND5cclxuICApIDogKFxyXG4gICAgPGg0PntlbnRlcmVkQ29udGFjdH08L2g0PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGlcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMTE0NjVcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjJyZW0gOHJlbSAycmVtIDJyZW1cIixcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIuNXJlbVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIC8vIE5lY2Vzc2FyeSBmb3IgcG9zaXRpb25pbmcgdGhlIGhpZGRlbiBkaXZcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIEl0ZW0gSUQ6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntQb3N0SUR9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgSXRlbSBOYW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57ZGlzcGxheUNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgUXVlc3Rpb246IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntRdWVzdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBZb3VyIEFuc3dlcjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0Fuc3dlcn08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBUaW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57VmFsaWRhdG9yRGF0ZVRpbWV9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgU2hvdyBSZXNwb25zZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge2lzRGl2VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoND57ZGlzcGxheUNvbnRlbnR9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlSXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==