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
/* harmony import */ var _specificpost_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specificpost.module.css */ "./components/mylistings/specificpost.module.css");
/* harmony import */ var _specificpost_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_specificpost_module_css__WEBPACK_IMPORTED_MODULE_5__);


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
      lineNumber: 56,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _specificpost_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.div1,
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
      lineNumber: 62,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SpecificGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: isData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teWxpc3RpbmdzL1NwZWNpZmljcG9zdC5qcyJdLCJuYW1lcyI6WyJTcGVjaWZpY3Bvc3QiLCJ1c2VTdGF0ZSIsImlzRGF0YSIsInNldElzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkYXRhQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xhc3NlcyIsImRpdjEiLCJsZW5ndGgiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUFBLG1CQUVZRixzREFBUSxDQUFDLEtBQUQsQ0FGcEI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFSkMsWUFGSTs7QUFBQSxtQkFHUUosc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHZkssT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSWdCTixzREFBUSxDQUM1Qyx3REFENEMsQ0FKeEI7QUFBQSxNQUlmTyxXQUplO0FBQUEsTUFJRkMsY0FKRTs7QUFRdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFNBQVMsR0FBRyxJQUFoQixDQURjLENBQ1E7O0FBRXRCTixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVBTyxTQUFLLENBQUMsMEJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2QsVUFBSUwsU0FBSixFQUFlO0FBQ2I7QUFFQSxZQUFNTSxTQUFTLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxJQUFkLElBQXNCQSxJQUF0QixHQUE2QixDQUFDQSxJQUFELENBQS9DLENBSGEsQ0FJYjs7QUFFQWIsaUJBQVMsQ0FBQ2MsU0FBRCxDQUFUOztBQUVBLFlBQUlELElBQUksQ0FBQ0ksT0FBVCxFQUFrQjtBQUNoQlgsd0JBQWMsQ0FBQ08sSUFBSSxDQUFDSSxPQUFOLENBQWQ7QUFDQWIsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDs7QUFFREYsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGLEtBbEJILFdBbUJTLFVBQUNnQixLQUFELEVBQVc7QUFDaEIsVUFBSVYsU0FBSixFQUFlO0FBQ2JKLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLHNCQUFjLENBQUMsd0NBQUQsQ0FBZDtBQUNBSixvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQUNEaUIsYUFBTyxDQUFDRCxLQUFSLENBQWMsY0FBZCxFQUE4QkEsS0FBOUI7QUFDRCxLQTFCSCxFQUxjLENBaUNkOztBQUNBLFdBQU8sWUFBTTtBQUNYVixlQUFTLEdBQUcsS0FBWixDQURXLENBQ1E7QUFDcEIsS0FGRDtBQUdELEdBckNRLEVBcUNOLEVBckNNLENBQVQ7O0FBdUNBLE1BQUlMLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLHFEQUFEO0FBQVcsZUFBUyxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRWUsK0RBQU8sQ0FBQ0MsSUFBeEI7QUFBQSxlQUNHdEIsTUFBTSxDQUFDdUIsTUFBUCxLQUFrQixDQUFsQixJQUF1QixDQUFDckIsU0FBeEIsZ0JBQ0M7QUFDRSxXQUFLLEVBQUU7QUFDTHNCLGdCQUFRLEVBQUUsTUFETDtBQUVMQyxlQUFPLEVBQUUsTUFGSjtBQUdMQyxpQkFBUyxFQUFFLE1BSE47QUFJTEMsc0JBQWMsRUFBRSxRQUpYO0FBS0xDLGtCQUFVLEVBQUU7QUFMUCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZ0JBYUMscUVBQUMscURBQUQ7QUFBYyxVQUFJLEVBQUU1QjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEosRUFnQkdFLFNBQVMsaUJBQUkscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBdkVRSixZOztLQUFBQSxZO0FBeUVNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teWxpc3RpbmdzLjI0MjY2NDFkNTQ5OGFkNjVmMzIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEVycm9yQ29tcCBmcm9tIFwiLi4vVUkvRXJyb3JDb21wXCI7XHJcbmltcG9ydCBTcGVjaWZpY0dyaWQgZnJvbSBcIi4vU3BlY2lmaWNHcmlkXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3NwZWNpZmljcG9zdC5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVjaWZpY3Bvc3QoKSB7XHJcbiAgY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXHJcbiAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlOyAvLyBGbGFnIHRvIHRyYWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG5cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBmZXRjaChcIi9hcGkvbXlwb3N0cy9mZXRjaG15cG9zdFwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRhdGFBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xyXG5cclxuICAgICAgICAgIHNldElzRGF0YShkYXRhQXJyYXkpO1xyXG5cclxuICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgc2V0SXNFcnJvckRhdGEoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRJc0Vycm9yRGF0YShcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGRhdGEuXCIpO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZldGNoIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgZnVuY3Rpb25cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlOyAvLyBTZXQgZmxhZyB0byBmYWxzZSB3aGVuIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvckNvbXAgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2MX0+XHJcbiAgICAgIHtpc0RhdGEubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBZb3UgaGF2ZSBub3QgTGlzdGVkIGFueSBQb3N0c1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U3BlY2lmaWNHcmlkIGRhdGE9e2lzRGF0YX0gLz5cclxuICAgICAgKX1cclxuICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWNpZmljcG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==