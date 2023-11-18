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
  }, []);

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 61,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SpecificGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: isData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teWxpc3RpbmdzL1NwZWNpZmljcG9zdC5qcyJdLCJuYW1lcyI6WyJTcGVjaWZpY3Bvc3QiLCJ1c2VTdGF0ZSIsImlzRGF0YSIsInNldElzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkYXRhQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibGVuZ3RoIiwiZm9udFNpemUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUFBLG1CQUVZRixzREFBUSxDQUFDLEtBQUQsQ0FGcEI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFSkMsWUFGSTs7QUFBQSxtQkFHUUosc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHZkssT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSWdCTixzREFBUSxDQUM1Qyx3REFENEMsQ0FKeEI7QUFBQSxNQUlmTyxXQUplO0FBQUEsTUFJRkMsY0FKRTs7QUFRdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFNBQVMsR0FBRyxJQUFoQixDQURjLENBQ1E7O0FBRXRCTixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVBTyxTQUFLLENBQUMsMEJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2QsVUFBSUwsU0FBSixFQUFlO0FBQ2I7QUFFQSxZQUFNTSxTQUFTLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxJQUFkLElBQXNCQSxJQUF0QixHQUE2QixDQUFDQSxJQUFELENBQS9DLENBSGEsQ0FJYjs7QUFFQWIsaUJBQVMsQ0FBQ2MsU0FBRCxDQUFUOztBQUVBLFlBQUlELElBQUksQ0FBQ0ksT0FBVCxFQUFrQjtBQUNoQlgsd0JBQWMsQ0FBQ08sSUFBSSxDQUFDSSxPQUFOLENBQWQ7QUFDQWIsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDs7QUFFREYsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGLEtBbEJILFdBbUJTLFVBQUNnQixLQUFELEVBQVc7QUFDaEIsVUFBSVYsU0FBSixFQUFlO0FBQ2JKLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLHNCQUFjLENBQUMsd0NBQUQsQ0FBZDtBQUNBSixvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQUNEaUIsYUFBTyxDQUFDRCxLQUFSLENBQWMsY0FBZCxFQUE4QkEsS0FBOUI7QUFDRCxLQTFCSCxFQUxjLENBaUNkOztBQUNBLFdBQU8sWUFBTTtBQUNYVixlQUFTLEdBQUcsS0FBWixDQURXLENBQ1E7QUFDcEIsS0FGRDtBQUdELEdBckNRLEVBcUNOLEVBckNNLENBQVQ7O0FBdUNBLE1BQUlMLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLHFEQUFEO0FBQVcsZUFBUyxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGVBQ0dOLE1BQU0sQ0FBQ3FCLE1BQVAsS0FBa0IsQ0FBbEIsSUFBdUIsQ0FBQ25CLFNBQXhCLGdCQUNDO0FBQ0UsV0FBSyxFQUFFO0FBQ0xvQixnQkFBUSxFQUFFLE1BREw7QUFFTEMsZUFBTyxFQUFFLE1BRko7QUFHTEMsaUJBQVMsRUFBRSxNQUhOO0FBSUxDLHNCQUFjLEVBQUUsUUFKWDtBQUtMQyxrQkFBVSxFQUFFO0FBTFAsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQWFDLHFFQUFDLHFEQUFEO0FBQWMsVUFBSSxFQUFFMUI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRKLEVBZ0JHRSxTQUFTLGlCQUFJLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQXZFUUosWTs7S0FBQUEsWTtBQXlFTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlsaXN0aW5ncy4xZmE2YTlmMDMyYjUzNjBkMTg4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFcnJvckNvbXAgZnJvbSBcIi4uL1VJL0Vycm9yQ29tcFwiO1xyXG5pbXBvcnQgU3BlY2lmaWNHcmlkIGZyb20gXCIuL1NwZWNpZmljR3JpZFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG5cclxuZnVuY3Rpb24gU3BlY2lmaWNwb3N0KCkge1xyXG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNFcnJvckRhdGEsIHNldElzRXJyb3JEYXRhXSA9IHVzZVN0YXRlKFxyXG4gICAgXCJTb3JyeSBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdC5cIlxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZTsgLy8gRmxhZyB0byB0cmFjayBpZiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuXHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgZmV0Y2goXCIvYXBpL215cG9zdHMvZmV0Y2hteXBvc3RcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTW91bnRlZCkge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YUFycmF5KTtcclxuXHJcbiAgICAgICAgICBzZXRJc0RhdGEoZGF0YUFycmF5KTtcclxuXHJcbiAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHNldElzRXJyb3JEYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xyXG4gICAgICAgICAgc2V0SXNFcnJvckRhdGEoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBkYXRhLlwiKTtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGZXRjaCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTsgLy8gU2V0IGZsYWcgdG8gZmFsc2Ugd2hlbiBjb21wb25lbnQgaXMgdW5tb3VudGVkXHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JDb21wIGVycm9yRGF0YT17aXNFcnJvckRhdGF9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtpc0RhdGEubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBZb3UgaGF2ZSBub3QgTGlzdGVkIGFueSBQb3N0c1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U3BlY2lmaWNHcmlkIGRhdGE9e2lzRGF0YX0gLz5cclxuICAgICAgKX1cclxuICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWNpZmljcG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==