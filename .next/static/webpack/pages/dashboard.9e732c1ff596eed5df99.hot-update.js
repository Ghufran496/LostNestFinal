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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: ReducedImg,
      alt: Title,
      width: 100,
      height: 160
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: Title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.date,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.address,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
            children: Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          content: "Explore Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIl9pZCIsIlR5cGUiLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJRdWVzdGlvbiIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwiY2xhc3NlcyIsIml0ZW0iLCJjb250ZW50Iiwic3VtbWFyeSIsImRhdGUiLCJhZGRyZXNzIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLElBQWxCO0FBRHVCLG9CQVduQkgsS0FBSyxDQUFDRyxJQVhhO0FBQUEsTUFHckJDLEdBSHFCLGVBR3JCQSxHQUhxQjtBQUFBLE1BSXJCQyxJQUpxQixlQUlyQkEsSUFKcUI7QUFBQSxNQUtyQkMsUUFMcUIsZUFLckJBLFFBTHFCO0FBQUEsTUFNckJDLEtBTnFCLGVBTXJCQSxLQU5xQjtBQUFBLE1BT3JCQyxXQVBxQixlQU9yQkEsV0FQcUI7QUFBQSxNQVFyQkMsUUFScUIsZUFRckJBLFFBUnFCO0FBQUEsTUFTckJDLElBVHFCLGVBU3JCQSxJQVRxQjtBQUFBLE1BVXJCQyxVQVZxQixlQVVyQkEsVUFWcUI7QUFhdkIsc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDJEQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVGLFVBQVY7QUFBc0IsU0FBRyxFQUFFSixLQUEzQjtBQUFrQyxXQUFLLEVBQUUsR0FBekM7QUFBOEMsWUFBTSxFQUFFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFFSywyREFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsMkRBQU8sQ0FBQ0csT0FBeEI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLUjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVLLDJEQUFPLENBQUNJLElBQXhCO0FBQUEsaUNBRUU7QUFBQSxzQkFBT1Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQU1FO0FBQUssbUJBQVMsRUFBRUssMkRBQU8sQ0FBQ0ssT0FBeEI7QUFBQSxpQ0FFRTtBQUFBLHNCQUFVVjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUU7QUFBSyxpQkFBUyxFQUFFSywyREFBTyxDQUFDTSxPQUF4QjtBQUFBLCtCQUNFLHFFQUFDLGtEQUFEO0FBQVEsaUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztLQWxDUW5CLFE7QUFvQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC45ZTczMmMxZmY1OTZlZWQ1ZGY5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0SXRlbS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gUG9zdEl0ZW0ocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBUeXBlLFxyXG4gICAgQ2F0ZWdvcnksXHJcbiAgICBUaXRsZSxcclxuICAgIERlc2NyaXB0aW9uLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBEYXRlLFxyXG4gICAgUmVkdWNlZEltZyxcclxuICB9ID0gcHJvcHMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgIDxpbWcgc3JjPXtSZWR1Y2VkSW1nfSBhbHQ9e1RpdGxlfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezE2MH0+PC9pbWc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxyXG4gICAgICAgICAgPGgyPntUaXRsZX08L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgIHsvKiA8RGF0ZUljb24gLz4gKi99XHJcbiAgICAgICAgICAgIDx0aW1lPntUaXRsZX08L3RpbWU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PlxyXG4gICAgICAgICAgICB7LyogPEFkZHJlc3NJY29uIC8+ICovfVxyXG4gICAgICAgICAgICA8YWRkcmVzcz57VGl0bGV9PC9hZGRyZXNzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJFeHBsb3JlIEV2ZW50XCI+PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==