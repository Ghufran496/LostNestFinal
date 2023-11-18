webpackHotUpdate_N_E("pages/mylistings",{

/***/ "./components/mylistings/Specificpost.js":
/*!***********************************************!*\
  !*** ./components/mylistings/Specificpost.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_ErrorComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/ErrorComp */ "./components/UI/ErrorComp.js");
/* harmony import */ var _SpecificGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecificGrid */ "./components/mylistings/SpecificGrid.js");
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\mylistings\\Specificpost.js",
    _s = $RefreshSig$();







function Specificpost() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      isData = _useState[0],
      setIsData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isError = _useState3[0],
      setIsError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Sorry but the page you are looking for does not exist."),
      isErrorData = _useState4[0],
      setIsErrorData = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var isMounted = true; // Flag to track if the component is mounted

    setIsLoading(true);
    fetch("/api/myposts/fetchmypost").then(function (response) {
      return response.json();
    }).then(function (data) {
      if (isMounted) {
        //console.log(data);
        var dataArray = Array.isArray(data) ? data : [data]; //console.log(dataArray);

        setIsData(dataArray);

        if (data.message) {
          setIsErrorData(data.message);
          setIsError(true);
        }

        setIsLoading(false);
      }
    })["catch"](function (error) {
      if (isMounted) {
        setIsError(true);
        setIsErrorData("An error occurred while fetching data.");
        setIsLoading(false);
      }

      console.error("Fetch error:", error);
    }); // Cleanup function

    return function () {
      isMounted = false; // Set flag to false when component is unmounted
    };
  }, []); // if (isPosts) {
  //   return (
  //     <h1
  //       style={{
  //         textTransform: "capitalize",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         marginTop: "2rem",
  //       }}
  //     >
  //       {isPosts}
  //     </h1>
  //   );
  // }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [isData.length === 0 && !isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        fontSize: "2rem",
        display: "flex",
        marginTop: "1rem",
        justifyContent: "center",
        alignItems: "center"
      },
      children: "You have not Listed any Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SpecificGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: isData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

_s(Specificpost, "u9Pdcpvk3j9H2eg7IiQ8vroAKGM=");

_c = Specificpost;
/* harmony default export */ __webpack_exports__["default"] = (Specificpost);

var _c;

$RefreshReg$(_c, "Specificpost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teWxpc3RpbmdzL1NwZWNpZmljcG9zdC5qcyJdLCJuYW1lcyI6WyJTcGVjaWZpY3Bvc3QiLCJ1c2VTdGF0ZSIsImlzRGF0YSIsInNldElzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkYXRhQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibGVuZ3RoIiwiZm9udFNpemUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUFBLG1CQUVZRixzREFBUSxDQUFDLEtBQUQsQ0FGcEI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFSkMsWUFGSTs7QUFBQSxtQkFHUUosc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHZkssT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSWdCTixzREFBUSxDQUM1Qyx3REFENEMsQ0FKeEI7QUFBQSxNQUlmTyxXQUplO0FBQUEsTUFJRkMsY0FKRTs7QUFRdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFNBQVMsR0FBRyxJQUFoQixDQURjLENBQ1E7O0FBRXRCTixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVBTyxTQUFLLENBQUMsMEJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2QsVUFBSUwsU0FBSixFQUFlO0FBQ2I7QUFFQSxZQUFNTSxTQUFTLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxJQUFkLElBQXNCQSxJQUF0QixHQUE2QixDQUFDQSxJQUFELENBQS9DLENBSGEsQ0FJYjs7QUFFQWIsaUJBQVMsQ0FBQ2MsU0FBRCxDQUFUOztBQUVBLFlBQUlELElBQUksQ0FBQ0ksT0FBVCxFQUFrQjtBQUNoQlgsd0JBQWMsQ0FBQ08sSUFBSSxDQUFDSSxPQUFOLENBQWQ7QUFDQWIsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDs7QUFFREYsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGLEtBbEJILFdBbUJTLFVBQUNnQixLQUFELEVBQVc7QUFDaEIsVUFBSVYsU0FBSixFQUFlO0FBQ2JKLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLHNCQUFjLENBQUMsd0NBQUQsQ0FBZDtBQUNBSixvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQUNEaUIsYUFBTyxDQUFDRCxLQUFSLENBQWMsY0FBZCxFQUE4QkEsS0FBOUI7QUFDRCxLQTFCSCxFQUxjLENBaUNkOztBQUNBLFdBQU8sWUFBTTtBQUNYVixlQUFTLEdBQUcsS0FBWixDQURXLENBQ1E7QUFDcEIsS0FGRDtBQUdELEdBckNRLEVBcUNOLEVBckNNLENBQVQsQ0FSc0IsQ0ErQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJTCxPQUFKLEVBQWE7QUFDWCx3QkFBTyxxRUFBQyxxREFBRDtBQUFXLGVBQVMsRUFBRUU7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSxlQUNHTixNQUFNLENBQUNxQixNQUFQLEtBQWtCLENBQWxCLElBQXVCLENBQUNuQixTQUF4QixnQkFDQztBQUNFLFdBQUssRUFBRTtBQUNMb0IsZ0JBQVEsRUFBRSxNQURMO0FBRUxDLGVBQU8sRUFBRSxNQUZKO0FBR0xDLGlCQUFTLEVBQUUsTUFITjtBQUlMQyxzQkFBYyxFQUFFLFFBSlg7QUFLTEMsa0JBQVUsRUFBRTtBQUxQLE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxnQkFhQyxxRUFBQyxxREFBRDtBQUFjLFVBQUksRUFBRTFCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSixFQWdCR0UsU0FBUyxpQkFBSSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0F2RlFKLFk7O0tBQUFBLFk7QUF5Rk1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215bGlzdGluZ3MuZDM2MWY3YzFmMWQyNTEzMjBlZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRXJyb3JDb21wIGZyb20gXCIuLi9VSS9FcnJvckNvbXBcIjtcclxuaW1wb3J0IFNwZWNpZmljR3JpZCBmcm9tIFwiLi9TcGVjaWZpY0dyaWRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWNpZmljcG9zdCgpIHtcclxuICBjb25zdCBbaXNEYXRhLCBzZXRJc0RhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3JEYXRhLCBzZXRJc0Vycm9yRGF0YV0gPSB1c2VTdGF0ZShcclxuICAgIFwiU29ycnkgYnV0IHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3QuXCJcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7IC8vIEZsYWcgdG8gdHJhY2sgaWYgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXHJcblxyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGZldGNoKFwiL2FwaS9teXBvc3RzL2ZldGNobXlwb3N0XCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGFBcnJheSk7XHJcblxyXG4gICAgICAgICAgc2V0SXNEYXRhKGRhdGFBcnJheSk7XHJcblxyXG4gICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xyXG4gICAgICAgICAgICBzZXRJc0Vycm9yRGF0YShkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTW91bnRlZCkge1xyXG4gICAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgICAgICAgIHNldElzRXJyb3JEYXRhKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgZGF0YS5cIik7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmV0Y2ggZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7IC8vIFNldCBmbGFnIHRvIGZhbHNlIHdoZW4gY29tcG9uZW50IGlzIHVubW91bnRlZFxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGlmIChpc1Bvc3RzKSB7XHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICA8aDFcclxuICAvLyAgICAgICBzdHlsZT17e1xyXG4gIC8vICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgLy8gICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAvLyAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIC8vICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAvLyAgICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXHJcbiAgLy8gICAgICAgfX1cclxuICAvLyAgICAgPlxyXG4gIC8vICAgICAgIHtpc1Bvc3RzfVxyXG4gIC8vICAgICA8L2gxPlxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIGlmIChpc0Vycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yQ29tcCBlcnJvckRhdGE9e2lzRXJyb3JEYXRhfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aXNEYXRhLmxlbmd0aCA9PT0gMCAmJiAhaXNMb2FkaW5nID8gKFxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWW91IGhhdmUgbm90IExpc3RlZCBhbnkgUG9zdHNcclxuICAgICAgICA8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFNwZWNpZmljR3JpZCBkYXRhPXtpc0RhdGF9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmcgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVjaWZpY3Bvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=