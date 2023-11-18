webpackHotUpdate_N_E("pages/mylistings/[specificid]",{

/***/ "./components/answers/single-answer.js":
/*!*********************************************!*\
  !*** ./components/answers/single-answer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleans_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleans.module.css */ "./components/answers/singleans.module.css");
/* harmony import */ var _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_singleans_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _overlayForm_AnswerForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../overlayForm/AnswerForm */ "./components/overlayForm/AnswerForm.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\answers\\single-answer.js",
    _this = undefined,
    _s = $RefreshSig$();






var SingleAnswer = function SingleAnswer(props) {
  _s();

  var PosterID = props.data.PosterID; //_id, Answer,

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showAForm = _useState[0],
      setIsShowAForm = _useState[1];

  var showModeHandler = function showModeHandler() {
    setIsShowAForm(true);
  };

  var hideModeHandler = function hideModeHandler() {
    setIsShowAForm(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: showModeHandler,
          className: _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
          children: "Check"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), "Response by this user."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.responder,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["By ", PosterID]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), showAForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_overlayForm_AnswerForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onclose: hideModeHandler,
      data: props.data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(SingleAnswer, "i7cxDyi85lwxC0ChmJpPZI8RSfQ=");

_c = SingleAnswer;
/* harmony default export */ __webpack_exports__["default"] = (SingleAnswer);

var _c;

$RefreshReg$(_c, "SingleAnswer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbnN3ZXJzL3NpbmdsZS1hbnN3ZXIuanMiXSwibmFtZXMiOlsiU2luZ2xlQW5zd2VyIiwicHJvcHMiLCJQb3N0ZXJJRCIsImRhdGEiLCJ1c2VTdGF0ZSIsInNob3dBRm9ybSIsInNldElzU2hvd0FGb3JtIiwic2hvd01vZGVIYW5kbGVyIiwiaGlkZU1vZGVIYW5kbGVyIiwiY2xhc3NlcyIsImxpc3QiLCJidG5kaXYiLCJsaW5rIiwicmVzcG9uZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUN0QkMsUUFEc0IsR0FDVEQsS0FBSyxDQUFDRSxJQURHLENBQ3RCRCxRQURzQixFQUU5Qjs7QUFGOEIsa0JBR01FLHNEQUFRLENBQUMsS0FBRCxDQUhkO0FBQUEsTUFHdkJDLFNBSHVCO0FBQUEsTUFHWkMsY0FIWTs7QUFLOUIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCRCxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBR0EsTUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCRixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSSxhQUFTLEVBQUVHLDREQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELDREQUFPLENBQUNFLE1BQXhCO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFHLGlCQUFPLEVBQUVKLGVBQVo7QUFBNkIsbUJBQVMsRUFBRUUsNERBQU8sQ0FBQ0csSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUU7QUFBSyxlQUFTLEVBQUVILDREQUFPLENBQUNJLFNBQXhCO0FBQUEsNkJBQ0U7QUFBQSwwQkFBT1gsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsRUFnQkdHLFNBQVMsaUJBQUkscUVBQUMsK0RBQUQ7QUFBWSxhQUFPLEVBQUVHLGVBQXJCO0FBQXNDLFVBQUksRUFBRVAsS0FBSyxDQUFDRTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQS9CRDs7R0FBTUgsWTs7S0FBQUEsWTtBQWlDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uOGU5OWRhOWQxMjBmNWI5MDAzZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc2luZ2xlYW5zLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFuc3dlckZvcm0gZnJvbSBcIi4uL292ZXJsYXlGb3JtL0Fuc3dlckZvcm1cIjtcclxuXHJcbmNvbnN0IFNpbmdsZUFuc3dlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgUG9zdGVySUQgfSA9IHByb3BzLmRhdGE7XHJcbiAgLy9faWQsIEFuc3dlcixcclxuICBjb25zdCBbc2hvd0FGb3JtLCBzZXRJc1Nob3dBRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3dNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd0FGb3JtKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGlkZU1vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93QUZvcm0oZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdn0+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXtzaG93TW9kZUhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgQ2hlY2tcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIFJlc3BvbnNlIGJ5IHRoaXMgdXNlci5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b241Mn0gcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgQ2hlY2sgYW5zd2VyXHJcbiAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uZGVyfT5cclxuICAgICAgICA8cD5CeSB7UG9zdGVySUR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dBRm9ybSAmJiA8QW5zd2VyRm9ybSBvbmNsb3NlPXtoaWRlTW9kZUhhbmRsZXJ9IGRhdGE9e3Byb3BzLmRhdGF9IC8+fVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQW5zd2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9