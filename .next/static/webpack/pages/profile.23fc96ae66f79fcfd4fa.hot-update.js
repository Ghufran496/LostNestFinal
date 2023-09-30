webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/profile-front.js":
/*!*********************************************!*\
  !*** ./components/profile/profile-front.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _profilecomp_userprofile_comp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profilecomp/userprofile-comp */ "./components/profile/profilecomp/userprofile-comp.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\profile\\profile-front.js",
    _s = $RefreshSig$();






function ProfileFront() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      isData = _useState[0],
      setIsData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1]; //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("/api/profile/profiledata")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setIsData(data);
  //         setIsLoading(false);
  //       });
  //   }, [setIsData]);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    fetch("/api/profile/profiledata").then(function (response) {
      return response.json();
    }).then(function (data) {
      setIsData(data);
      setIsLoading(false); // Move this here
    })["catch"](function (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false); // Make sure to handle errors as well
    });
  }, [setIsData]);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profilecomp_userprofile_comp__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: isData.name,
      id: isData._id,
      email: isData.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(ProfileFront, "hl+Xp/DTcagG4kn6hAMqrxqirYw=");

_c = ProfileFront;
/* harmony default export */ __webpack_exports__["default"] = (ProfileFront);
/*

 const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/post/postitem")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setIsData(data);
      });
    setIsLoading(false);
  }, [setIsData]);*/

var _c;

$RefreshReg$(_c, "ProfileFront");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZnJvbnQuanMiXSwibmFtZXMiOlsiUHJvZmlsZUZyb250IiwidXNlU3RhdGUiLCJpc0RhdGEiLCJzZXRJc0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibmFtZSIsIl9pZCIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUFBLG1CQUVZRixzREFBUSxDQUFDLEtBQUQsQ0FGcEI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFSkMsWUFGSSxrQkFHdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQUUsU0FBSyxDQUFDLDBCQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkUixlQUFTLENBQUNRLElBQUQsQ0FBVDtBQUNBTixrQkFBWSxDQUFDLEtBQUQsQ0FBWixDQUZjLENBRU87QUFDdEIsS0FMSCxXQU1TLFVBQUNPLEtBQUQsRUFBVztBQUNoQkMsYUFBTyxDQUFDRCxLQUFSLENBQWMsc0JBQWQsRUFBc0NBLEtBQXRDO0FBQ0FQLGtCQUFZLENBQUMsS0FBRCxDQUFaLENBRmdCLENBRUs7QUFDdEIsS0FUSDtBQVVELEdBWlEsRUFZTixDQUFDRixTQUFELENBWk0sQ0FBVDs7QUFjQSxNQUFJQyxTQUFKLEVBQWU7QUFDYix3QkFBTyxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDJCQUtFLHFFQUFDLHFFQUFEO0FBQ0UsVUFBSSxFQUFFRixNQUFNLENBQUNZLElBRGY7QUFFRSxRQUFFLEVBQUVaLE1BQU0sQ0FBQ2EsR0FGYjtBQUdFLFdBQUssRUFBRWIsTUFBTSxDQUFDYztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBNUNRaEIsWTs7S0FBQUEsWTtBQThDTUEsMkVBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMjNmYzk2YWU2NmY3OWZjZmQ0ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmltcG9ydCBQZXJzb25hbFByb2ZpbGUgZnJvbSBcIi4vcHJvZmlsZWNvbXAvdXNlcnByb2ZpbGUtY29tcFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZUZyb250KCkge1xyXG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gIC8vICAgICBmZXRjaChcIi9hcGkvcHJvZmlsZS9wcm9maWxlZGF0YVwiKVxyXG4gIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvLyAgICAgICAgIHNldElzRGF0YShkYXRhKTtcclxuICAvLyAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9LCBbc2V0SXNEYXRhXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGZldGNoKFwiL2FwaS9wcm9maWxlL3Byb2ZpbGVkYXRhXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldElzRGF0YShkYXRhKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpOyAvLyBNb3ZlIHRoaXMgaGVyZVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpOyAvLyBNYWtlIHN1cmUgdG8gaGFuZGxlIGVycm9ycyBhcyB3ZWxsXHJcbiAgICAgIH0pO1xyXG4gIH0sIFtzZXRJc0RhdGFdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgey8qIDxwPntpc0RhdGEubmFtZX08L3A+XHJcbiAgICAgIDxwPntpc0RhdGEuX2lkfTwvcD5cclxuICAgICAgPHA+e2lzRGF0YS5lbWFpbH08L3A+ICovfVxyXG5cclxuICAgICAgPFBlcnNvbmFsUHJvZmlsZVxyXG4gICAgICAgIG5hbWU9e2lzRGF0YS5uYW1lfVxyXG4gICAgICAgIGlkPXtpc0RhdGEuX2lkfVxyXG4gICAgICAgIGVtYWlsPXtpc0RhdGEuZW1haWx9XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVGcm9udDtcclxuLypcclxuXHJcbiBjb25zdCBbaXNEYXRhLCBzZXRJc0RhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0SXNEYXRhKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgW3NldElzRGF0YV0pOyovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=