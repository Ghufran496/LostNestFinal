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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      isPosts = _useState5[0],
      setIsPosts = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var isMounted = true; // Flag to track if the component is mounted

    setIsLoading(true);
    fetch("/api/myposts/fetchmypost").then(function (response) {
      return response.json();
    }).then(function (data) {
      if (isMounted) {
        //console.log(data);
        var dataArray = Array.isArray(data) ? data : [data]; //console.log(dataArray);

        if (dataArray.length === 0) {
          setIsPosts("You have not Listed any Posts Yet...");
        }

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

  if (isPosts) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      style: {
        textTransform: "capitalize",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem"
      },
      children: [isPosts, "guigi"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SpecificGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: isData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

_s(Specificpost, "dPyV4XqDVkzCk2+CD+Sk2EUbbys=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teWxpc3RpbmdzL1NwZWNpZmljcG9zdC5qcyJdLCJuYW1lcyI6WyJTcGVjaWZpY3Bvc3QiLCJ1c2VTdGF0ZSIsImlzRGF0YSIsInNldElzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsImlzUG9zdHMiLCJzZXRJc1Bvc3RzIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRhdGFBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJ0ZXh0VHJhbnNmb3JtIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFBQSxtQkFFWUYsc0RBQVEsQ0FBQyxLQUFELENBRnBCO0FBQUEsTUFFZkcsU0FGZTtBQUFBLE1BRUpDLFlBRkk7O0FBQUEsbUJBR1FKLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR2ZLLE9BSGU7QUFBQSxNQUdOQyxVQUhNOztBQUFBLG1CQUlnQk4sc0RBQVEsQ0FDNUMsd0RBRDRDLENBSnhCO0FBQUEsTUFJZk8sV0FKZTtBQUFBLE1BSUZDLGNBSkU7O0FBQUEsbUJBT1FSLHNEQUFRLENBQUMsRUFBRCxDQVBoQjtBQUFBLE1BT2ZTLE9BUGU7QUFBQSxNQU9OQyxVQVBNOztBQVN0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsU0FBUyxHQUFHLElBQWhCLENBRGMsQ0FDUTs7QUFFdEJSLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBRUFTLFNBQUssQ0FBQywwQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZCxVQUFJTCxTQUFKLEVBQWU7QUFDYjtBQUVBLFlBQU1NLFNBQVMsR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNILElBQWQsSUFBc0JBLElBQXRCLEdBQTZCLENBQUNBLElBQUQsQ0FBL0MsQ0FIYSxDQUliOztBQUNBLFlBQUlDLFNBQVMsQ0FBQ0csTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQlgsb0JBQVUsQ0FBQyxzQ0FBRCxDQUFWO0FBQ0Q7O0FBRURSLGlCQUFTLENBQUNnQixTQUFELENBQVQ7O0FBRUEsWUFBSUQsSUFBSSxDQUFDSyxPQUFULEVBQWtCO0FBQ2hCZCx3QkFBYyxDQUFDUyxJQUFJLENBQUNLLE9BQU4sQ0FBZDtBQUNBaEIsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDs7QUFFREYsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGLEtBckJILFdBc0JTLFVBQUNtQixLQUFELEVBQVc7QUFDaEIsVUFBSVgsU0FBSixFQUFlO0FBQ2JOLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLHNCQUFjLENBQUMsd0NBQUQsQ0FBZDtBQUNBSixvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQUNEb0IsYUFBTyxDQUFDRCxLQUFSLENBQWMsY0FBZCxFQUE4QkEsS0FBOUI7QUFDRCxLQTdCSCxFQUxjLENBb0NkOztBQUNBLFdBQU8sWUFBTTtBQUNYWCxlQUFTLEdBQUcsS0FBWixDQURXLENBQ1E7QUFDcEIsS0FGRDtBQUdELEdBeENRLEVBd0NOLEVBeENNLENBQVQ7O0FBMENBLE1BQUlILE9BQUosRUFBYTtBQUNYLHdCQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xnQixxQkFBYSxFQUFFLFlBRFY7QUFFTEMsZUFBTyxFQUFFLE1BRko7QUFHTEMsc0JBQWMsRUFBRSxRQUhYO0FBSUxDLGtCQUFVLEVBQUUsUUFKUDtBQUtMQyxpQkFBUyxFQUFFO0FBTE4sT0FEVDtBQUFBLGlCQVNHcEIsT0FUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWFEOztBQUVELE1BQUlKLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLHFEQUFEO0FBQVcsZUFBUyxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHFEQUFEO0FBQWMsVUFBSSxFQUFFTjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0UsU0FBUyxpQkFBSSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBN0VRSixZOztLQUFBQSxZO0FBK0VNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teWxpc3RpbmdzLjkxNmIwOGJmYzNlMGYxZmMyNjcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEVycm9yQ29tcCBmcm9tIFwiLi4vVUkvRXJyb3JDb21wXCI7XHJcbmltcG9ydCBTcGVjaWZpY0dyaWQgZnJvbSBcIi4vU3BlY2lmaWNHcmlkXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVjaWZpY3Bvc3QoKSB7XHJcbiAgY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXHJcbiAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgKTtcclxuICBjb25zdCBbaXNQb3N0cywgc2V0SXNQb3N0c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlOyAvLyBGbGFnIHRvIHRyYWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG5cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBmZXRjaChcIi9hcGkvbXlwb3N0cy9mZXRjaG15cG9zdFwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRhdGFBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xyXG4gICAgICAgICAgaWYgKGRhdGFBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SXNQb3N0cyhcIllvdSBoYXZlIG5vdCBMaXN0ZWQgYW55IFBvc3RzIFlldC4uLlwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZXRJc0RhdGEoZGF0YUFycmF5KTtcclxuXHJcbiAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHNldElzRXJyb3JEYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xyXG4gICAgICAgICAgc2V0SXNFcnJvckRhdGEoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBkYXRhLlwiKTtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGZXRjaCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTsgLy8gU2V0IGZsYWcgdG8gZmFsc2Ugd2hlbiBjb21wb25lbnQgaXMgdW5tb3VudGVkXHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGlzUG9zdHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoMVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzUG9zdHN9Z3VpZ2lcclxuICAgICAgPC9oMT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvckNvbXAgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNwZWNpZmljR3JpZCBkYXRhPXtpc0RhdGF9IC8+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmcgLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVjaWZpY3Bvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=