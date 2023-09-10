webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/feed/AllItems.js":
/*!*************************************!*\
  !*** ./components/feed/AllItems.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostGrid */ "./components/feed/PostGrid.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\AllItems.js",
    _s = $RefreshSig$();





function AllItems(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      isData = _useState[0],
      setIsData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("/api/post/postitem").then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log(data);
      setIsData(data);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: isData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(AllItems, "TSmUYRSKixqmb3V3+5j1/4jgQec=");

_c = AllItems;
/* harmony default export */ __webpack_exports__["default"] = (AllItems);

var _c;

$RefreshReg$(_c, "AllItems");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL0FsbEl0ZW1zLmpzIl0sIm5hbWVzIjpbIkFsbEl0ZW1zIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzRGF0YSIsInNldElzRGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBR3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDLG9CQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkO0FBQ0FOLGVBQVMsQ0FBQ00sSUFBRCxDQUFUO0FBQ0QsS0FMSDtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGlEQUFEO0FBQVUsVUFBSSxFQUFFUDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBakJRSCxROztLQUFBQSxRO0FBbUJNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuZWI4NTBjY2Y5ZTExOTg1YjRhZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9zdEdyaWQgZnJvbSBcIi4vUG9zdEdyaWRcIjtcclxuXHJcbmZ1bmN0aW9uIEFsbEl0ZW1zKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0SXNEYXRhKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UG9zdEdyaWQgZGF0YT17aXNEYXRhfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsSXRlbXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=