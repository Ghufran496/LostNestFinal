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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("/api/stats/getposts").then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    })["catch"](function (error) {
      console.error("Fetch error:", error);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_stats_chart__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ulist,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listitem,
        children: "Total Posted Items: 10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _ChartComp_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.listitem,
        children: "Lost Posted Items: 7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: "Found Posted Items: 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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


_s(ChartComp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdGF0cy9DaGFydENvbXAuanMiXSwibmFtZXMiOlsiQ2hhcnRDb21wIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNsYXNzZXMiLCJtYWluIiwidWxpc3QiLCJsaXN0aXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssQ0FBQyxxQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDRCxLQUpILFdBS1MsVUFBQ0csS0FBRCxFQUFXO0FBQ2hCRixhQUFPLENBQUNFLEtBQVIsQ0FBYyxjQUFkLEVBQThCQSxLQUE5QjtBQUNELEtBUEg7QUFRRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDREQUFPLENBQUNDLElBQXhCO0FBQUEsNEJBQ0UscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSSxlQUFTLEVBQUVELDREQUFPLENBQUNFLEtBQXZCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFRiw0REFBTyxDQUFDRyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSSxpQkFBUyxFQUFFSCw0REFBTyxDQUFDRyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBckJELEMsQ0F1QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FoQ01iLFM7O0tBQUFBLFM7QUFpQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLjcwMmZhOTM5YmQ5MzIxZDQ2NjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NoYXJ0Q29tcC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0YXRzL2NoYXJ0XCI7XHJcbmNvbnN0IENoYXJ0Q29tcCA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCIvYXBpL3N0YXRzL2dldHBvc3RzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZldGNoIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgIDxFeGFtcGxlIC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMudWxpc3R9PlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdGl0ZW19PlRvdGFsIFBvc3RlZCBJdGVtczogMTA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdGl0ZW19Pkxvc3QgUG9zdGVkIEl0ZW1zOiA3PC9saT5cclxuICAgICAgICA8bGk+Rm91bmQgUG9zdGVkIEl0ZW1zOiAzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4vLyAgIGNvbnN0IHBvc3RlZEl0ZW1Db2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIik7XHJcbi8vICAgY29uc3QgdG90YWxQb3N0cyA9IGF3YWl0IHBvc3RlZEl0ZW1Db2xsZWN0aW9uLmNvdW50RG9jdW1lbnRzKCk7XHJcbi8vICAgY29uc29sZS5sb2codG90YWxQb3N0cyk7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHRvdGFsY291bnQ6IHRvdGFsUG9zdHMgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==