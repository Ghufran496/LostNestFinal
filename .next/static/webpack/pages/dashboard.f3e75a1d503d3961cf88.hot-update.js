webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/feed/PostItem.js":
/*!*************************************!*\
  !*** ./components/feed/PostItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostItem.module.css */ "./components/feed/PostItem.module.css");
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostItem_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\PostItem.js";



function PostItem(props) {
  console.log(props.data);
  var _props$data = props.data,
      _id = _props$data._id,
      Type = _props$data.Type,
      Category = _props$data.Category,
      Title = _props$data.Title,
      Description = _props$data.Description,
      Question = _props$data.Question,
      Date = _props$data.Date,
      ReducedImg = _props$data.ReducedImg;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
      src: ReducedImg,
      alt: Title,
      width: 250,
      height: 160
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.date,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DateIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: humanReadableDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.address,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
            children: formattedAddress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          link: exploreLink,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Explore Event"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_c = PostItem;
/* harmony default export */ __webpack_exports__["default"] = (PostItem);

var _c;

$RefreshReg$(_c, "PostItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIl9pZCIsIlR5cGUiLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJRdWVzdGlvbiIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwiY2xhc3NlcyIsIml0ZW0iLCJjb250ZW50Iiwic3VtbWFyeSIsInRpdGxlIiwiZGF0ZSIsImh1bWFuUmVhZGFibGVEYXRlIiwiYWRkcmVzcyIsImZvcm1hdHRlZEFkZHJlc3MiLCJhY3Rpb25zIiwiZXhwbG9yZUxpbmsiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csSUFBbEI7QUFEdUIsb0JBV25CSCxLQUFLLENBQUNHLElBWGE7QUFBQSxNQUdyQkMsR0FIcUIsZUFHckJBLEdBSHFCO0FBQUEsTUFJckJDLElBSnFCLGVBSXJCQSxJQUpxQjtBQUFBLE1BS3JCQyxRQUxxQixlQUtyQkEsUUFMcUI7QUFBQSxNQU1yQkMsS0FOcUIsZUFNckJBLEtBTnFCO0FBQUEsTUFPckJDLFdBUHFCLGVBT3JCQSxXQVBxQjtBQUFBLE1BUXJCQyxRQVJxQixlQVFyQkEsUUFScUI7QUFBQSxNQVNyQkMsSUFUcUIsZUFTckJBLElBVHFCO0FBQUEsTUFVckJDLFVBVnFCLGVBVXJCQSxVQVZxQjtBQWF2QixzQkFDRTtBQUFJLGFBQVMsRUFBRUMsMkRBQU8sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDRSxxRUFBQyxLQUFEO0FBQU8sU0FBRyxFQUFFRixVQUFaO0FBQXdCLFNBQUcsRUFBRUosS0FBN0I7QUFBb0MsV0FBSyxFQUFFLEdBQTNDO0FBQWdELFlBQU0sRUFBRTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUssMkRBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVGLDJEQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFSiwyREFBTyxDQUFDSyxJQUF4QjtBQUFBLGtDQUNFLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsc0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFNRTtBQUFLLG1CQUFTLEVBQUVOLDJEQUFPLENBQUNPLE9BQXhCO0FBQUEsaUNBRUU7QUFBQSxzQkFBVUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVlFO0FBQUssaUJBQVMsRUFBRVIsMkRBQU8sQ0FBQ1MsT0FBeEI7QUFBQSwrQkFDRSxxRUFBQyxNQUFEO0FBQVEsY0FBSSxFQUFFQyxXQUFkO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFNLHFCQUFTLEVBQUVWLDJEQUFPLENBQUNXO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztLQXJDUXhCLFE7QUF1Q01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5mM2U3NWExZDUwM2QzOTYxY2Y4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0SXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0SXRlbShwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpO1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIFR5cGUsXHJcbiAgICBDYXRlZ29yeSxcclxuICAgIFRpdGxlLFxyXG4gICAgRGVzY3JpcHRpb24sXHJcbiAgICBRdWVzdGlvbixcclxuICAgIERhdGUsXHJcbiAgICBSZWR1Y2VkSW1nLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPEltYWdlIHNyYz17UmVkdWNlZEltZ30gYWx0PXtUaXRsZX0gd2lkdGg9ezI1MH0gaGVpZ2h0PXsxNjB9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxyXG4gICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgIDxEYXRlSWNvbiAvPlxyXG4gICAgICAgICAgICA8dGltZT57aHVtYW5SZWFkYWJsZURhdGV9PC90aW1lPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT5cclxuICAgICAgICAgICAgey8qIDxBZGRyZXNzSWNvbiAvPiAqL31cclxuICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8QnV0dG9uIGxpbms9e2V4cGxvcmVMaW5rfT5cclxuICAgICAgICAgICAgPHNwYW4+RXhwbG9yZSBFdmVudDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PnsvKiA8QXJyb3dSaWdodEljb24gLz4gKi99PC9zcGFuPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==