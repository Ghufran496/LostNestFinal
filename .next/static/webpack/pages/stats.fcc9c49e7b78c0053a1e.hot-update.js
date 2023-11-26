webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/stats/ChartComp.js":
/*!***************************************!*\
  !*** ./components/stats/ChartComp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartComp.module.css */ "./components/stats/ChartComp.module.css");
/* harmony import */ var _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_stats_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/stats/chart */ "./components/stats/chart.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\stats\\ChartComp.js",
    _this = undefined,
    _s = $RefreshSig$();






var ChartComp = function ChartComp() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      count = _useState[0],
      setCount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("/api/stats/getposts").then(function (response) {
      return response.json();
    }).then(function (data) {
      setCount(data);
    })["catch"](function (error) {
      console.error("Fetch error:", error);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_stats_chart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      postscount: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ulist,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listitem,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Total Posted Items:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), " ", count.totalPosts ? count.totalPosts : 10]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listitem,
        children: ["Lost Posted Items: ", count.totalPosts ? count.lostPosts : 7]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: ["Found Posted Items: ", count.totalPosts ? count.foundPosts : 3]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
}; // export async function getServerSideProps() {
//   const client = await connectToDatabase();
//   const postedItemCollection = client.db().collection("PostedItem");
//   const totalPosts = await postedItemCollection.countDocuments();
//   console.log(totalPosts);
//   return {
//     props: { totalcount: totalPosts },
//   };
// }


_s(ChartComp, "KH5vNaxQgcotsGCHHQ7+13gaLbM=");

_c = ChartComp;
/* harmony default export */ __webpack_exports__["default"] = (ChartComp);

var _c;

$RefreshReg$(_c, "ChartComp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGF0cy9DaGFydENvbXAuanMiXSwibmFtZXMiOlsiQ2hhcnRDb21wIiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImNsYXNzZXMiLCJtYWluIiwidWxpc3QiLCJsaXN0aXRlbSIsInRvdGFsUG9zdHMiLCJsb3N0UG9zdHMiLCJmb3VuZFBvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBR3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDLHFCQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkTixjQUFRLENBQUNNLElBQUQsQ0FBUjtBQUNELEtBSkgsV0FLUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLGFBQU8sQ0FBQ0QsS0FBUixDQUFjLGNBQWQsRUFBOEJBLEtBQTlCO0FBQ0QsS0FQSDtBQVFELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsNERBQU8sQ0FBQ0MsSUFBeEI7QUFBQSw0QkFDRSxxRUFBQywrREFBRDtBQUFTLGdCQUFVLEVBQUVYO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUksZUFBUyxFQUFFVSw0REFBTyxDQUFDRSxLQUF2QjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUYsNERBQU8sQ0FBQ0csUUFBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixPQUM4QmIsS0FBSyxDQUFDYyxVQUFOLEdBQW1CZCxLQUFLLENBQUNjLFVBQXpCLEdBQXNDLEVBRHBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSSxpQkFBUyxFQUFFSiw0REFBTyxDQUFDRyxRQUF2QjtBQUFBLDBDQUNzQmIsS0FBSyxDQUFDYyxVQUFOLEdBQW1CZCxLQUFLLENBQUNlLFNBQXpCLEdBQXFDLENBRDNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBT0U7QUFBQSwyQ0FBeUJmLEtBQUssQ0FBQ2MsVUFBTixHQUFtQmQsS0FBSyxDQUFDZ0IsVUFBekIsR0FBc0MsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQTNCRCxDLENBNkJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBdENNbEIsUzs7S0FBQUEsUztBQXVDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhdHMuZmNjOWM0OWU3Yjc4YzAwNTNhMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2hhcnRDb21wLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0YXRzL2NoYXJ0XCI7XHJcbmNvbnN0IENoYXJ0Q29tcCA9ICgpID0+IHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiL2FwaS9zdGF0cy9nZXRwb3N0c1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRDb3VudChkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGZXRjaCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICA8RXhhbXBsZSBwb3N0c2NvdW50PXtjb3VudH0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy51bGlzdH0+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0aXRlbX0+XHJcbiAgICAgICAgICA8Yj5Ub3RhbCBQb3N0ZWQgSXRlbXM6PC9iPiB7Y291bnQudG90YWxQb3N0cyA/IGNvdW50LnRvdGFsUG9zdHMgOiAxMH1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdGl0ZW19PlxyXG4gICAgICAgICAgTG9zdCBQb3N0ZWQgSXRlbXM6IHtjb3VudC50b3RhbFBvc3RzID8gY291bnQubG9zdFBvc3RzIDogN31cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5Gb3VuZCBQb3N0ZWQgSXRlbXM6IHtjb3VudC50b3RhbFBvc3RzID8gY291bnQuZm91bmRQb3N0cyA6IDN9PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4vLyAgIGNvbnN0IHBvc3RlZEl0ZW1Db2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIik7XHJcbi8vICAgY29uc3QgdG90YWxQb3N0cyA9IGF3YWl0IHBvc3RlZEl0ZW1Db2xsZWN0aW9uLmNvdW50RG9jdW1lbnRzKCk7XHJcbi8vICAgY29uc29sZS5sb2codG90YWxQb3N0cyk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHRvdGFsY291bnQ6IHRvdGFsUG9zdHMgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==