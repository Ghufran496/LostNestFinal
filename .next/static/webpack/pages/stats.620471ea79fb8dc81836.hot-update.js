webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/stats/chart.js":
/*!***********************************!*\
  !*** ./components/stats/chart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\stats\\chart.js";


function Example(props) {
  var data01 = [{
    name: "Total Posted Items",
    value: props.postscount.totalPosts ? props.postscount.totalPosts : 10
  }, {
    name: "Lost Posted Items",
    value: props.postscount.lostPosts ? props.postscount.lostPosts : 7
  }, {
    name: "Found Posted Items",
    value: props.postscount.foundPosts ? props.postscount.foundPosts : 3
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["PieChart"], {
    width: 400,
    height: 400,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
      dataKey: "value",
      isAnimationActive: false,
      data: data01,
      cx: 200,
      cy: 200,
      outerRadius: 150,
      fill: "#311465",
      label: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
_c = Example;

var _c;

$RefreshReg$(_c, "Example");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGF0cy9jaGFydC5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicHJvcHMiLCJkYXRhMDEiLCJuYW1lIiwidmFsdWUiLCJwb3N0c2NvdW50IiwidG90YWxQb3N0cyIsImxvc3RQb3N0cyIsImZvdW5kUG9zdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDckMsTUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFDRUMsUUFBSSxFQUFFLG9CQURSO0FBRUVDLFNBQUssRUFBRUgsS0FBSyxDQUFDSSxVQUFOLENBQWlCQyxVQUFqQixHQUE4QkwsS0FBSyxDQUFDSSxVQUFOLENBQWlCQyxVQUEvQyxHQUE0RDtBQUZyRSxHQURhLEVBS2I7QUFDRUgsUUFBSSxFQUFFLG1CQURSO0FBRUVDLFNBQUssRUFBRUgsS0FBSyxDQUFDSSxVQUFOLENBQWlCRSxTQUFqQixHQUE2Qk4sS0FBSyxDQUFDSSxVQUFOLENBQWlCRSxTQUE5QyxHQUEwRDtBQUZuRSxHQUxhLEVBU2I7QUFDRUosUUFBSSxFQUFFLG9CQURSO0FBRUVDLFNBQUssRUFBRUgsS0FBSyxDQUFDSSxVQUFOLENBQWlCRyxVQUFqQixHQUE4QlAsS0FBSyxDQUFDSSxVQUFOLENBQWlCRyxVQUEvQyxHQUE0RDtBQUZyRSxHQVRhLENBQWY7QUFlQSxzQkFDRSxxRUFBQyxpREFBRDtBQUFVLFNBQUssRUFBRSxHQUFqQjtBQUFzQixVQUFNLEVBQUUsR0FBOUI7QUFBQSw0QkFDRSxxRUFBQyw0Q0FBRDtBQUNFLGFBQU8sRUFBQyxPQURWO0FBRUUsdUJBQWlCLEVBQUUsS0FGckI7QUFHRSxVQUFJLEVBQUVOLE1BSFI7QUFJRSxRQUFFLEVBQUUsR0FKTjtBQUtFLFFBQUUsRUFBRSxHQUxOO0FBTUUsaUJBQVcsRUFBRSxHQU5mO0FBT0UsVUFBSSxFQUFDLFNBUFA7QUFRRSxXQUFLO0FBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUUscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEO0tBaEN1QkYsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGF0cy42MjA0NzFlYTc5ZmI4ZGM4MTgzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFBpZUNoYXJ0LCBQaWUsIExlZ2VuZCwgVG9vbHRpcCB9IGZyb20gXCJyZWNoYXJ0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZShwcm9wcykge1xyXG4gIGNvbnN0IGRhdGEwMSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJUb3RhbCBQb3N0ZWQgSXRlbXNcIixcclxuICAgICAgdmFsdWU6IHByb3BzLnBvc3RzY291bnQudG90YWxQb3N0cyA/IHByb3BzLnBvc3RzY291bnQudG90YWxQb3N0cyA6IDEwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMb3N0IFBvc3RlZCBJdGVtc1wiLFxyXG4gICAgICB2YWx1ZTogcHJvcHMucG9zdHNjb3VudC5sb3N0UG9zdHMgPyBwcm9wcy5wb3N0c2NvdW50Lmxvc3RQb3N0cyA6IDcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZvdW5kIFBvc3RlZCBJdGVtc1wiLFxyXG4gICAgICB2YWx1ZTogcHJvcHMucG9zdHNjb3VudC5mb3VuZFBvc3RzID8gcHJvcHMucG9zdHNjb3VudC5mb3VuZFBvc3RzIDogMyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQaWVDaGFydCB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0+XHJcbiAgICAgIDxQaWVcclxuICAgICAgICBkYXRhS2V5PVwidmFsdWVcIlxyXG4gICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX1cclxuICAgICAgICBkYXRhPXtkYXRhMDF9XHJcbiAgICAgICAgY3g9ezIwMH1cclxuICAgICAgICBjeT17MjAwfVxyXG4gICAgICAgIG91dGVyUmFkaXVzPXsxNTB9XHJcbiAgICAgICAgZmlsbD1cIiMzMTE0NjVcIlxyXG4gICAgICAgIGxhYmVsXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8VG9vbHRpcCAvPlxyXG4gICAgPC9QaWVDaGFydD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=