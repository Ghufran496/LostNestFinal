webpackHotUpdate_N_E("pages/mylistings/[specificid]",{

/***/ "./components/answers/answer.js":
/*!**************************************!*\
  !*** ./components/answers/answer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _answer_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer-list */ "./components/answers/answer-list.js");
/* harmony import */ var _answer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answer.module.css */ "./components/answers/answer.module.css");
/* harmony import */ var _answer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_answer_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\answers\\answer.js",
    _s = $RefreshSig$();





function Answer(props) {
  _s();

  var postid = props.postid; //console.log(postid);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showResponse = _useState[0],
      setShowResponse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      response = _useState2[0],
      setresponse = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (showResponse) {
      fetch("/api/answers/" + postid).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setresponse(data.responses);
      });
    }
  }, [showResponse]);

  function toggleResponseHandler() {
    setShowResponse(function (prevStatus) {
      return !prevStatus;
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _answer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.responses,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _answer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: toggleResponseHandler,
        className: _answer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button52,
        children: [showResponse ? "Hide" : "Show", " Responses"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), !showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "No responses yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }, this), showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_answer_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ansitems: response
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(Answer, "w/vRNPdQMR/GYBLknZL156e69V0=");

_c = Answer;
/* harmony default export */ __webpack_exports__["default"] = (Answer);

var _c;

$RefreshReg$(_c, "Answer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5qcyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsInBvc3RpZCIsInVzZVN0YXRlIiwic2hvd1Jlc3BvbnNlIiwic2V0U2hvd1Jlc3BvbnNlIiwicmVzcG9uc2UiLCJzZXRyZXNwb25zZSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsImpzb24iLCJkYXRhIiwicmVzcG9uc2VzIiwidG9nZ2xlUmVzcG9uc2VIYW5kbGVyIiwicHJldlN0YXR1cyIsImNsYXNzZXMiLCJidG5kaXYiLCJidXR0b241MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxNQUNiQyxNQURhLEdBQ0ZELEtBREUsQ0FDYkMsTUFEYSxFQUVyQjs7QUFGcUIsa0JBR21CQyxzREFBUSxDQUFDLEtBQUQsQ0FIM0I7QUFBQSxNQUdkQyxZQUhjO0FBQUEsTUFHQUMsZUFIQTs7QUFBQSxtQkFJV0Ysc0RBQVEsQ0FBQyxFQUFELENBSm5CO0FBQUEsTUFJZEcsUUFKYztBQUFBLE1BSUpDLFdBSkk7O0FBTXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixZQUFKLEVBQWtCO0FBQ2hCSyxXQUFLLENBQUMsa0JBQWtCUCxNQUFuQixDQUFMLENBQ0dRLElBREgsQ0FDUSxVQUFDSixRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDSyxJQUFULEVBQWQ7QUFBQSxPQURSLEVBRUdELElBRkgsQ0FFUSxVQUFDRSxJQUFEO0FBQUEsZUFBVUwsV0FBVyxDQUFDSyxJQUFJLENBQUNDLFNBQU4sQ0FBckI7QUFBQSxPQUZSO0FBR0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ1QsWUFBRCxDQU5NLENBQVQ7O0FBUUEsV0FBU1UscUJBQVQsR0FBaUM7QUFDL0JULG1CQUFlLENBQUMsVUFBQ1UsVUFBRDtBQUFBLGFBQWdCLENBQUNBLFVBQWpCO0FBQUEsS0FBRCxDQUFmO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLHlEQUFPLENBQUNILFNBQTVCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVHLHlEQUFPLENBQUNDLE1BQXhCO0FBQUEsNkJBQ0U7QUFBUSxlQUFPLEVBQUVILHFCQUFqQjtBQUF3QyxpQkFBUyxFQUFFRSx5REFBTyxDQUFDRSxRQUEzRDtBQUFBLG1CQUNHZCxZQUFZLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQU1HLENBQUNBLFlBQUQsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTnBCLEVBT0dBLFlBQVksaUJBQUkscUVBQUMsb0RBQUQ7QUFBWSxjQUFRLEVBQUVFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7R0E3QlFOLE07O0tBQUFBLE07QUErQk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215bGlzdGluZ3MvW3NwZWNpZmljaWRdLmQyZjU2MWUzOWEzMWIyZmU3MjA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQW5zd2VyTGlzdCBmcm9tIFwiLi9hbnN3ZXItbGlzdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hbnN3ZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQW5zd2VyKHByb3BzKSB7XHJcbiAgY29uc3QgeyBwb3N0aWQgfSA9IHByb3BzO1xyXG4gIC8vY29uc29sZS5sb2cocG9zdGlkKTtcclxuICBjb25zdCBbc2hvd1Jlc3BvbnNlLCBzZXRTaG93UmVzcG9uc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0cmVzcG9uc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNob3dSZXNwb25zZSkge1xyXG4gICAgICBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0cmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpKTtcclxuICAgIH1cclxuICB9LCBbc2hvd1Jlc3BvbnNlXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVJlc3BvbnNlSGFuZGxlcigpIHtcclxuICAgIHNldFNob3dSZXNwb25zZSgocHJldlN0YXR1cykgPT4gIXByZXZTdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNwb25zZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5kaXZ9PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUmVzcG9uc2VIYW5kbGVyfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uNTJ9PlxyXG4gICAgICAgICAge3Nob3dSZXNwb25zZSA/IFwiSGlkZVwiIDogXCJTaG93XCJ9IFJlc3BvbnNlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFzaG93UmVzcG9uc2UgJiYgPHA+Tm8gcmVzcG9uc2VzIHlldCE8L3A+fVxyXG4gICAgICB7c2hvd1Jlc3BvbnNlICYmIDxBbnN3ZXJMaXN0IGFuc2l0ZW1zPXtyZXNwb25zZX0gLz59XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9