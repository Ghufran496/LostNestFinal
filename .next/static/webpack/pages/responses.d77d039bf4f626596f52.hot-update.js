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


  var deleteButtonClick = function deleteButtonClick() {};

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
        lineNumber: 45,
        columnNumber: 18
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: ItemTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: ValidatorDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), isDivVisible || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      onClick: handleButtonClick,
      children: "Show Response"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, _this), isDivVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
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
        lineNumber: 76,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1rem"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
          onClick: handleButtonClick,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
          onClick: deleteButtonClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkZWxldGVCdXR0b25DbGljayIsImZvbnRTaXplIiwiYm9yZGVyIiwicGFkZGluZyIsInRleHRUcmFuc2Zvcm0iLCJib3hTaGFkb3ciLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjbGFzc2VzIiwic3BhbmVyIiwiYnRuIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZEdhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLG9CQVUxQkEsS0FBSyxDQUFDQyxJQVZvQjtBQUFBLE1BRTVCQyxHQUY0QixlQUU1QkEsR0FGNEI7QUFBQSxNQUc1QkMsY0FINEIsZUFHNUJBLGNBSDRCO0FBQUEsTUFJNUJDLFNBSjRCLGVBSTVCQSxTQUo0QjtBQUFBLE1BSzVCQyxNQUw0QixlQUs1QkEsTUFMNEI7QUFBQSxNQU01QkMsUUFONEIsZUFNNUJBLFFBTjRCO0FBQUEsTUFPNUJDLFFBUDRCLGVBTzVCQSxRQVA0QjtBQUFBLE1BUTVCQyxpQkFSNEIsZUFRNUJBLGlCQVI0QjtBQUFBLE1BUzVCQyxNQVQ0QixlQVM1QkEsTUFUNEI7O0FBQUEsa0JB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QTtBQUFBLGFBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0VELENBM0ZEOztHQUFNZixZOztLQUFBQSxZO0FBNkZTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNwb25zZXMuZDc3ZDAzOWJmNGY2MjY1OTZmNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9SZXNwb25zZUl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUmVzcG9uc2VJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgZW50ZXJlZENvbnRhY3QsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBQb3N0SUQsXHJcbiAgICBQb3N0ZXJJRCxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgVmFsaWRhdG9yRGF0ZVRpbWUsXHJcbiAgICBBbnN3ZXIsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc3QgW2lzRGl2VmlzaWJsZSwgc2V0SXNEaXZWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0RpdlZpc2libGUoIWlzRGl2VmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gICBjb25zdCBkaXNwbGF5Q29udGVudCA9IGVudGVyZWRDb250YWN0LmluY2x1ZGVzKFxyXG4gIC8vICAgICBcIlJlc3BvbmRlciBIYXMgTnVsbGlmaWVkIFRoZSBWYWxpZGF0aW9uLlwiXHJcbiAgLy8gICApID8gKFxyXG4gIC8vICAgICA8aDQ+WW91ciBhbnN3ZXIgaGFzIGJlZW4gcmVqZWN0ZWQ8L2g0PlxyXG4gIC8vICAgKSA6IChcclxuICAvLyAgICAgPGg0PntlbnRlcmVkQ29udGFjdH08L2g0PlxyXG4gIC8vICAgKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7fTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMxMTQ2NVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMnJlbSA4cmVtIDJyZW0gMnJlbVwiLFxyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMi41cmVtXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgLy8gTmVjZXNzYXJ5IGZvciBwb3NpdGlvbmluZyB0aGUgaGlkZGVuIGRpdlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgSXRlbSBJRDogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1Bvc3RJRH08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBJdGVtIE5hbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntJdGVtVGl0bGV9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgUXVlc3Rpb246IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntRdWVzdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBZb3VyIEFuc3dlcjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0Fuc3dlcn08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBUaW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57VmFsaWRhdG9yRGF0ZVRpbWV9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG5cclxuICAgICAge2lzRGl2VmlzaWJsZSB8fCAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICBTaG93IFJlc3BvbnNlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0RpdlZpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoND4gUmVzcG9uc2U6IHtlbnRlcmVkQ29udGFjdH08L2g0PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxyXG4gICAgICAgICAgICAgIGdyaWRHYXA6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtkZWxldGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZUl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=