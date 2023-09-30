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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: isData.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profilecomp_userprofile_comp__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZnJvbnQuanMiXSwibmFtZXMiOlsiUHJvZmlsZUZyb250IiwidXNlU3RhdGUiLCJpc0RhdGEiLCJzZXRJc0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFBQSxtQkFFWUYsc0RBQVEsQ0FBQyxLQUFELENBRnBCO0FBQUEsTUFFZkcsU0FGZTtBQUFBLE1BRUpDLFlBRkksa0JBR3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLFNBQUssQ0FBQywwQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZFIsZUFBUyxDQUFDUSxJQUFELENBQVQ7QUFDQU4sa0JBQVksQ0FBQyxLQUFELENBQVosQ0FGYyxDQUVPO0FBQ3RCLEtBTEgsV0FNUyxVQUFDTyxLQUFELEVBQVc7QUFDaEJDLGFBQU8sQ0FBQ0QsS0FBUixDQUFjLHNCQUFkLEVBQXNDQSxLQUF0QztBQUNBUCxrQkFBWSxDQUFDLEtBQUQsQ0FBWixDQUZnQixDQUVLO0FBQ3RCLEtBVEg7QUFVRCxHQVpRLEVBWU4sQ0FBQ0YsU0FBRCxDQVpNLENBQVQ7O0FBY0EsTUFBSUMsU0FBSixFQUFlO0FBQ2Isd0JBQU8scUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRTtBQUFBLGdCQUFJRixNQUFNLENBQUNZO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0dBdENRZCxZOztLQUFBQSxZO0FBd0NNQSwyRUFBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4zZjc1ZDQwNTRmOGFkYTFmMjI2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuaW1wb3J0IFBlcnNvbmFsUHJvZmlsZSBmcm9tIFwiLi9wcm9maWxlY29tcC91c2VycHJvZmlsZS1jb21wXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlRnJvbnQoKSB7XHJcbiAgY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgLy8gICAgIGZldGNoKFwiL2FwaS9wcm9maWxlL3Byb2ZpbGVkYXRhXCIpXHJcbiAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vICAgICAgICAgc2V0SXNEYXRhKGRhdGEpO1xyXG4gIC8vICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgIH0sIFtzZXRJc0RhdGFdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgZmV0Y2goXCIvYXBpL3Byb2ZpbGUvcHJvZmlsZWRhdGFcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEYXRhKGRhdGEpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7IC8vIE1vdmUgdGhpcyBoZXJlXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7IC8vIE1ha2Ugc3VyZSB0byBoYW5kbGUgZXJyb3JzIGFzIHdlbGxcclxuICAgICAgfSk7XHJcbiAgfSwgW3NldElzRGF0YV0pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8cD57aXNEYXRhLm5hbWV9PC9wPlxyXG5cclxuICAgICAgPFBlcnNvbmFsUHJvZmlsZSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRnJvbnQ7XHJcbi8qXHJcblxyXG4gY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGZldGNoKFwiL2FwaS9wb3N0L3Bvc3RpdGVtXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldElzRGF0YShkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH0sIFtzZXRJc0RhdGFdKTsqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9