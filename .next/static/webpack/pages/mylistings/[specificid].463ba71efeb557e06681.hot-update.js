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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showLoadingContent = _useState2[0],
      setLoadingContent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      response = _useState3[0],
      setresponse = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //setLoadingContent(true);
    if (showResponse) {
      fetch("/api/answers/" + postid).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setresponse(data.responses);
      });
    } //setLoadingContent(false);

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
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), !response && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "No responses yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }, this), showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_answer_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ansitems: response
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(Answer, "BbOgmyP67gNN0QdHBhtOnSCD/0w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5qcyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsInBvc3RpZCIsInVzZVN0YXRlIiwic2hvd1Jlc3BvbnNlIiwic2V0U2hvd1Jlc3BvbnNlIiwic2hvd0xvYWRpbmdDb250ZW50Iiwic2V0TG9hZGluZ0NvbnRlbnQiLCJyZXNwb25zZSIsInNldHJlc3BvbnNlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsImRhdGEiLCJyZXNwb25zZXMiLCJ0b2dnbGVSZXNwb25zZUhhbmRsZXIiLCJwcmV2U3RhdHVzIiwiY2xhc3NlcyIsImJ0bmRpdiIsImJ1dHRvbjUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBLE1BQ2JDLE1BRGEsR0FDRkQsS0FERSxDQUNiQyxNQURhLEVBRXJCOztBQUZxQixrQkFHbUJDLHNEQUFRLENBQUMsS0FBRCxDQUgzQjtBQUFBLE1BR2RDLFlBSGM7QUFBQSxNQUdBQyxlQUhBOztBQUFBLG1CQUkyQkYsc0RBQVEsQ0FBQyxLQUFELENBSm5DO0FBQUEsTUFJZEcsa0JBSmM7QUFBQSxNQUlNQyxpQkFKTjs7QUFBQSxtQkFLV0osc0RBQVEsQ0FBQyxFQUFELENBTG5CO0FBQUEsTUFLZEssUUFMYztBQUFBLE1BS0pDLFdBTEk7O0FBT3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBLFFBQUlOLFlBQUosRUFBa0I7QUFDaEJPLFdBQUssQ0FBQyxrQkFBa0JULE1BQW5CLENBQUwsQ0FDR1UsSUFESCxDQUNRLFVBQUNKLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNLLElBQVQsRUFBZDtBQUFBLE9BRFIsRUFFR0QsSUFGSCxDQUVRLFVBQUNFLElBQUQ7QUFBQSxlQUFVTCxXQUFXLENBQUNLLElBQUksQ0FBQ0MsU0FBTixDQUFyQjtBQUFBLE9BRlI7QUFHRCxLQU5hLENBT2Q7O0FBQ0QsR0FSUSxFQVFOLENBQUNYLFlBQUQsQ0FSTSxDQUFUOztBQVVBLFdBQVNZLHFCQUFULEdBQWlDO0FBQy9CWCxtQkFBZSxDQUFDLFVBQUNZLFVBQUQ7QUFBQSxhQUFnQixDQUFDQSxVQUFqQjtBQUFBLEtBQUQsQ0FBZjtBQUNEOztBQUVELHNCQUNFO0FBQVMsYUFBUyxFQUFFQyx5REFBTyxDQUFDSCxTQUE1QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRyx5REFBTyxDQUFDQyxNQUF4QjtBQUFBLDZCQUNFO0FBQVEsZUFBTyxFQUFFSCxxQkFBakI7QUFBd0MsaUJBQVMsRUFBRUUseURBQU8sQ0FBQ0UsUUFBM0Q7QUFBQSxtQkFDR2hCLFlBQVksR0FBRyxNQUFILEdBQVksTUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBTUcsQ0FBQ0ksUUFBRCxpQkFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5oQixFQU9HSixZQUFZLGlCQUFJLHFFQUFDLG9EQUFEO0FBQVksY0FBUSxFQUFFSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBaENRUixNOztLQUFBQSxNO0FBa0NNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teWxpc3RpbmdzL1tzcGVjaWZpY2lkXS40NjNiYTcxZWZlYjU1N2UwNjY4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEFuc3dlckxpc3QgZnJvbSBcIi4vYW5zd2VyLWxpc3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYW5zd2VyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEFuc3dlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgcG9zdGlkIH0gPSBwcm9wcztcclxuICAvL2NvbnNvbGUubG9nKHBvc3RpZCk7XHJcbiAgY29uc3QgW3Nob3dSZXNwb25zZSwgc2V0U2hvd1Jlc3BvbnNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0xvYWRpbmdDb250ZW50LCBzZXRMb2FkaW5nQ29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRyZXNwb25zZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL3NldExvYWRpbmdDb250ZW50KHRydWUpO1xyXG4gICAgaWYgKHNob3dSZXNwb25zZSkge1xyXG4gICAgICBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0cmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpKTtcclxuICAgIH1cclxuICAgIC8vc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4gIH0sIFtzaG93UmVzcG9uc2VdKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlUmVzcG9uc2VIYW5kbGVyKCkge1xyXG4gICAgc2V0U2hvd1Jlc3BvbnNlKChwcmV2U3RhdHVzKSA9PiAhcHJldlN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3BvbnNlc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdn0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVSZXNwb25zZUhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b241Mn0+XHJcbiAgICAgICAgICB7c2hvd1Jlc3BvbnNlID8gXCJIaWRlXCIgOiBcIlNob3dcIn0gUmVzcG9uc2VzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IXJlc3BvbnNlICYmIDxwPk5vIHJlc3BvbnNlcyB5ZXQhPC9wPn1cclxuICAgICAge3Nob3dSZXNwb25zZSAmJiA8QW5zd2VyTGlzdCBhbnNpdGVtcz17cmVzcG9uc2V9IC8+fVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuc3dlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==