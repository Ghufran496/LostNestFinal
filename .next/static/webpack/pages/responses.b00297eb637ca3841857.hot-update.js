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
        alignItems: "center",
        borderRadius: "5rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: [" Response: ", enteredContact]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        onClick: handleButtonClick,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJmb250U2l6ZSIsImJvcmRlciIsInBhZGRpbmciLCJ0ZXh0VHJhbnNmb3JtIiwiYm94U2hhZG93IiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiY2xhc3NlcyIsInNwYW5lciIsImJ0biIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsb0JBVTFCQSxLQUFLLENBQUNDLElBVm9CO0FBQUEsTUFFNUJDLEdBRjRCLGVBRTVCQSxHQUY0QjtBQUFBLE1BRzVCQyxjQUg0QixlQUc1QkEsY0FINEI7QUFBQSxNQUk1QkMsU0FKNEIsZUFJNUJBLFNBSjRCO0FBQUEsTUFLNUJDLE1BTDRCLGVBSzVCQSxNQUw0QjtBQUFBLE1BTTVCQyxRQU40QixlQU01QkEsUUFONEI7QUFBQSxNQU81QkMsUUFQNEIsZUFPNUJBLFFBUDRCO0FBQUEsTUFRNUJDLGlCQVI0QixlQVE1QkEsaUJBUjRCO0FBQUEsTUFTNUJDLE1BVDRCLGVBUzVCQSxNQVQ0Qjs7QUFBQSxrQkFXVUMsc0RBQVEsQ0FBQyxLQUFELENBWGxCO0FBQUEsTUFXdkJDLFlBWHVCO0FBQUEsTUFXVEMsZUFYUzs7QUFhOUIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCRCxtQkFBZSxDQUFDLENBQUNELFlBQUYsQ0FBZjtBQUNELEdBRkQsQ0FiOEIsQ0FpQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMRyxjQUFRLEVBQUUsUUFETDtBQUVMQyxZQUFNLEVBQUUsbUJBRkg7QUFHTEMsYUFBTyxFQUFFLHFCQUhKO0FBSUxDLG1CQUFhLEVBQUUsWUFKVjtBQUtMQyxlQUFTLEVBQUUsOEJBTE47QUFNTEMsZ0JBQVUsRUFBRSxLQU5QO0FBT0xDLGtCQUFZLEVBQUUsUUFQVDtBQVFMQyxjQUFRLEVBQUUsVUFSTCxDQVFpQjs7QUFSakIsS0FEVDtBQUFBLDRCQVlFO0FBQUEsMkNBQ1c7QUFBTSxpQkFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUF6QjtBQUFBLGtCQUFrQ2xCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWVFO0FBQUEsNkNBQ2E7QUFBTSxpQkFBUyxFQUFFaUIsK0RBQU8sQ0FBQ0MsTUFBekI7QUFBQSxrQkFBa0NuQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkYsZUFrQkU7QUFBQSw0Q0FDWTtBQUFNLGlCQUFTLEVBQUVrQiwrREFBTyxDQUFDQyxNQUF6QjtBQUFBLGtCQUFrQ2hCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkYsZUFxQkU7QUFBQSwrQ0FDZTtBQUFNLGlCQUFTLEVBQUVlLCtEQUFPLENBQUNDLE1BQXpCO0FBQUEsa0JBQWtDZDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBd0JFO0FBQUEsd0NBQ1E7QUFBTSxpQkFBUyxFQUFFYSwrREFBTyxDQUFDQyxNQUF6QjtBQUFBLGtCQUFrQ2Y7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRixlQTRCRTtBQUFRLGVBQVMsRUFBRWMsK0RBQU8sQ0FBQ0UsR0FBM0I7QUFBZ0MsYUFBTyxFQUFFWCxpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkYsRUErQkdGLFlBQVksaUJBQ1g7QUFDRSxXQUFLLEVBQUU7QUFDTEksY0FBTSxFQUFFLG1CQURIO0FBRUxHLGlCQUFTLEVBQUUsOEJBRk47QUFHTEYsZUFBTyxFQUFFLE1BSEo7QUFJTFMsZUFBTyxFQUFFLE1BSko7QUFLTEMscUJBQWEsRUFBRSxRQUxWO0FBTUxDLHNCQUFjLEVBQUUsUUFOWDtBQU9MQyxrQkFBVSxFQUFFLFFBUFA7QUFRTFIsb0JBQVksRUFBRTtBQVJULE9BRFQ7QUFBQSw4QkFZRTtBQUFBLGtDQUFnQmpCLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLGVBY0U7QUFBUSxpQkFBUyxFQUFFbUIsK0RBQU8sQ0FBQ0UsR0FBM0I7QUFBZ0MsZUFBTyxFQUFFWCxpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzREQsQ0EvRUQ7O0dBQU1kLFk7O0tBQUFBLFk7QUFpRlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc3BvbnNlcy5iMDAyOTdlYjYzN2NhMzg0MTg1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Jlc3BvbnNlSXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBSZXNwb25zZUl0ZW0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBlbnRlcmVkQ29udGFjdCxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBWYWxpZGF0b3JEYXRlVGltZSxcclxuICAgIEFuc3dlcixcclxuICB9ID0gcHJvcHMuZGF0YTtcclxuICBjb25zdCBbaXNEaXZWaXNpYmxlLCBzZXRJc0RpdlZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldElzRGl2VmlzaWJsZSghaXNEaXZWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICAvLyAgIGNvbnN0IGRpc3BsYXlDb250ZW50ID0gZW50ZXJlZENvbnRhY3QuaW5jbHVkZXMoXHJcbiAgLy8gICAgIFwiUmVzcG9uZGVyIEhhcyBOdWxsaWZpZWQgVGhlIFZhbGlkYXRpb24uXCJcclxuICAvLyAgICkgPyAoXHJcbiAgLy8gICAgIDxoND5Zb3VyIGFuc3dlciBoYXMgYmVlbiByZWplY3RlZDwvaDQ+XHJcbiAgLy8gICApIDogKFxyXG4gIC8vICAgICA8aDQ+e2VudGVyZWRDb250YWN0fTwvaDQ+XHJcbiAgLy8gICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMzExNDY1XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIycmVtIDhyZW0gMnJlbSAycmVtXCIsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyLjVyZW1cIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCAvLyBOZWNlc3NhcnkgZm9yIHBvc2l0aW9uaW5nIHRoZSBoaWRkZW4gZGl2XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBJdGVtIElEOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57UG9zdElEfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIEl0ZW0gTmFtZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0l0ZW1UaXRsZX08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBRdWVzdGlvbjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1F1ZXN0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFlvdXIgQW5zd2VyOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57QW5zd2VyfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFRpbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntWYWxpZGF0b3JEYXRlVGltZX08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICBTaG93IFJlc3BvbnNlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7aXNEaXZWaXNpYmxlICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMTE0NjVcIixcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGg0PiBSZXNwb25zZToge2VudGVyZWRDb250YWN0fTwvaDQ+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlSXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==