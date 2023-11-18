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
/* harmony import */ var _UI_ErrorComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/ErrorComp */ "./components/UI/ErrorComp.js");
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\AllItems.js",
    _s = $RefreshSig$();







function AllItems() {
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
    fetch("/api/post/postitem").then(function (response) {
      return response.json();
    }).then(function (data) {
      //console.log("data in client" + data);
      if (isMounted) {
        setIsData(data);

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
    }); //Cleanup function

    return function () {
      isMounted = false; // Set flag to false when component is unmounted
    };
  }, []);

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_3__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: isData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }, this), !isData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "No Posts Yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(AllItems, "u9Pdcpvk3j9H2eg7IiQ8vroAKGM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL0FsbEl0ZW1zLmpzIl0sIm5hbWVzIjpbIkFsbEl0ZW1zIiwidXNlU3RhdGUiLCJpc0RhdGEiLCJzZXRJc0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImlzRXJyb3JEYXRhIiwic2V0SXNFcnJvckRhdGEiLCJ1c2VFZmZlY3QiLCJpc01vdW50ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDWEMsTUFEVztBQUFBLE1BQ0hDLFNBREc7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDLEtBQUQsQ0FGeEI7QUFBQSxNQUVYRyxTQUZXO0FBQUEsTUFFQUMsWUFGQTs7QUFBQSxtQkFHWUosc0RBQVEsQ0FBQyxLQUFELENBSHBCO0FBQUEsTUFHWEssT0FIVztBQUFBLE1BR0ZDLFVBSEU7O0FBQUEsbUJBSW9CTixzREFBUSxDQUM1Qyx3REFENEMsQ0FKNUI7QUFBQSxNQUlYTyxXQUpXO0FBQUEsTUFJRUMsY0FKRjs7QUFRbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFNBQVMsR0FBRyxJQUFoQixDQURjLENBQ1E7O0FBRXRCTixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVBTyxTQUFLLENBQUMsb0JBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2Q7QUFDQSxVQUFJTCxTQUFKLEVBQWU7QUFDYlIsaUJBQVMsQ0FBQ2EsSUFBRCxDQUFUOztBQUNBLFlBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUFrQjtBQUNoQlIsd0JBQWMsQ0FBQ08sSUFBSSxDQUFDQyxPQUFOLENBQWQ7QUFDQVYsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDs7QUFDREYsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGLEtBWkgsV0FhUyxVQUFDYSxLQUFELEVBQVc7QUFDaEIsVUFBSVAsU0FBSixFQUFlO0FBQ2JKLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLHNCQUFjLENBQUMsd0NBQUQsQ0FBZDtBQUNBSixvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQUNEYyxhQUFPLENBQUNELEtBQVIsQ0FBYyxjQUFkLEVBQThCQSxLQUE5QjtBQUNELEtBcEJILEVBTGMsQ0EyQmQ7O0FBQ0EsV0FBTyxZQUFNO0FBQ1hQLGVBQVMsR0FBRyxLQUFaLENBRFcsQ0FDUTtBQUNwQixLQUZEO0FBR0QsR0EvQlEsRUErQk4sRUEvQk0sQ0FBVDs7QUFpQ0EsTUFBSUwsT0FBSixFQUFhO0FBQ1gsd0JBQU8scUVBQUMscURBQUQ7QUFBVyxlQUFTLEVBQUVFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFBVSxVQUFJLEVBQUVOO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHRSxTQUFTLGlCQUFJLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGaEIsRUFHRyxDQUFDRixNQUFELGlCQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0FwRFFGLFE7O0tBQUFBLFE7QUFzRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC4zMWRjNDVkMzNhYmI0MjA0NjM1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0R3JpZCBmcm9tIFwiLi9Qb3N0R3JpZFwiO1xyXG5pbXBvcnQgRXJyb3JDb21wIGZyb20gXCIuLi9VSS9FcnJvckNvbXBcIjtcclxuXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmZ1bmN0aW9uIEFsbEl0ZW1zKCkge1xyXG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNFcnJvckRhdGEsIHNldElzRXJyb3JEYXRhXSA9IHVzZVN0YXRlKFxyXG4gICAgXCJTb3JyeSBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdC5cIlxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTsgLy8gRmxhZyB0byB0cmFjayBpZiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuXHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGEgaW4gY2xpZW50XCIgKyBkYXRhKTtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRJc0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHNldElzRXJyb3JEYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRJc0Vycm9yRGF0YShcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGRhdGEuXCIpO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZldGNoIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vQ2xlYW51cCBmdW5jdGlvblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7IC8vIFNldCBmbGFnIHRvIGZhbHNlIHdoZW4gY29tcG9uZW50IGlzIHVubW91bnRlZFxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpc0Vycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yQ29tcCBlcnJvckRhdGE9e2lzRXJyb3JEYXRhfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UG9zdEdyaWQgZGF0YT17aXNEYXRhfSAvPlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxyXG4gICAgICB7IWlzRGF0YSAmJiA8cD5ObyBQb3N0cyBZZXQhPC9wPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbEl0ZW1zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9