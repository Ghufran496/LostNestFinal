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
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgdiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: ReducedImg,
        alt: Title,
        width: 250,
        height: 160
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: Type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: Category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          content: "Explore Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIl9pZCIsIlR5cGUiLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJRdWVzdGlvbiIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwiY2xhc3NlcyIsIml0ZW0iLCJpbWdkaXYiLCJjb250ZW50IiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLElBQWxCO0FBRHVCLG9CQVduQkgsS0FBSyxDQUFDRyxJQVhhO0FBQUEsTUFHckJDLEdBSHFCLGVBR3JCQSxHQUhxQjtBQUFBLE1BSXJCQyxJQUpxQixlQUlyQkEsSUFKcUI7QUFBQSxNQUtyQkMsUUFMcUIsZUFLckJBLFFBTHFCO0FBQUEsTUFNckJDLEtBTnFCLGVBTXJCQSxLQU5xQjtBQUFBLE1BT3JCQyxXQVBxQixlQU9yQkEsV0FQcUI7QUFBQSxNQVFyQkMsUUFScUIsZUFRckJBLFFBUnFCO0FBQUEsTUFTckJDLElBVHFCLGVBU3JCQSxJQVRxQjtBQUFBLE1BVXJCQyxVQVZxQixlQVVyQkEsVUFWcUI7QUFhdkIsc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDJEQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELDJEQUFPLENBQUNFLE1BQXhCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVILFVBQVY7QUFBc0IsV0FBRyxFQUFFSixLQUEzQjtBQUFrQyxhQUFLLEVBQUUsR0FBekM7QUFBOEMsY0FBTSxFQUFFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUssMkRBQU8sQ0FBQ0csT0FBeEI7QUFBQSw4QkFDRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtWO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUssaUJBQVMsRUFBRU0sMkRBQU8sQ0FBQ0ksT0FBeEI7QUFBQSwrQkFDRSxxRUFBQyxrREFBRDtBQUFRLGlCQUFPLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7S0E3QlFqQixRO0FBK0JNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuYTk2OWVkNGRiNzViNmFhOTVhYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdEl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgVHlwZSxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgVGl0bGUsXHJcbiAgICBEZXNjcmlwdGlvbixcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgRGF0ZSxcclxuICAgIFJlZHVjZWRJbWcsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdkaXZ9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtSZWR1Y2VkSW1nfSBhbHQ9e1RpdGxlfSB3aWR0aD17MjUwfSBoZWlnaHQ9ezE2MH0+PC9pbWc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPntUeXBlfTwvaDE+XHJcbiAgICAgICAgICA8aDE+e0NhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJFeHBsb3JlIEV2ZW50XCI+PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==