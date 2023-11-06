webpackHotUpdate_N_E("pages/dashboard/[itemid]",{

/***/ "./pages/dashboard/[itemid].js":
/*!*************************************!*\
  !*** ./pages/dashboard/[itemid].js ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-summary */ "./components/feed/FeedDetails/event-summary.js");
/* harmony import */ var _components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-logistics */ "./components/feed/FeedDetails/event-logistics.js");
/* harmony import */ var _components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-content */ "./components/feed/FeedDetails/event-content.js");
/* harmony import */ var _components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/overlayForm/QuestionForm */ "./components/overlayForm/QuestionForm.js");
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\dashboard\\[itemid].js",
    _s = $RefreshSig$();










function ItemDetailPage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showQForm = _useState2[0],
      setIsShowQForm = _useState2[1];

  var extractedObject = props.extractedObject;

  if (!extractedObject) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, this); // Render loading spinner if no data is available
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 5 seconds
  }, []);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, this);
  }

  var event = extractedObject; // const changeModeHandler = () => {
  //   setIsShowQForm((prevState) => !prevState);
  // };

  var showModeHandler = function showModeHandler() {
    setIsShowQForm(true);
  };

  var hideModeHandler = function hideModeHandler() {
    setIsShowQForm(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: event.Title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: showModeHandler,
      style: {
        padding: "10px",
        backgroundColor: "black",
        color: "white"
      },
      children: "Claim"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), showQForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(ItemDetailPage, "Aa7ocyAgYOYgFLKGEof5pFegnRU=");

_c = ItemDetailPage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ItemDetailPage);

var _c;

$RefreshReg$(_c, "ItemDetailPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIl0sIm5hbWVzIjpbIkl0ZW1EZXRhaWxQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNob3dRRm9ybSIsInNldElzU2hvd1FGb3JtIiwiZXh0cmFjdGVkT2JqZWN0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImV2ZW50Iiwic2hvd01vZGVIYW5kbGVyIiwiaGlkZU1vZGVIYW5kbGVyIiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwiVHlwZSIsIkNhdGVnb3J5IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFHQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBLE1BQ1hDLFlBRFc7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUEsTUFFdEJHLFNBRnNCO0FBQUEsTUFFWEMsY0FGVzs7QUFBQSxNQUlyQkMsZUFKcUIsR0FJRE4sS0FKQyxDQUlyQk0sZUFKcUI7O0FBTTdCLE1BQUksQ0FBQ0EsZUFBTCxFQUFzQjtBQUNwQix3QkFBTyxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVAsQ0FEb0IsQ0FDQTtBQUNyQjs7QUFFREMseURBQVMsQ0FBQyxZQUFNO0FBQ2RKLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FLLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZMLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVixDQUZjLENBSUo7QUFDWCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLE1BQUlELFNBQUosRUFBZTtBQUNiLHdCQUFPLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELE1BQU1PLEtBQUssR0FBR0gsZUFBZCxDQXBCNkIsQ0FxQjdCO0FBQ0E7QUFDQTs7QUFDQSxNQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJMLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0QsR0FGRDs7QUFHQSxNQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJOLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUksS0FBSyxDQUFDRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFSCxLQUFLLENBQUNJO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLGtGQUFEO0FBQWMsV0FBSyxFQUFFSixLQUFLLENBQUNHO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLHFFQUFDLG9GQUFEO0FBQ0UsVUFBSSxFQUFFSCxLQUFLLENBQUNLLElBRGQ7QUFFRSxnQkFBVSxFQUFFTCxLQUFLLENBQUNNLFVBRnBCO0FBR0UsV0FBSyxFQUFFTixLQUFLLENBQUNHLEtBSGY7QUFJRSxVQUFJLEVBQUVILEtBQUssQ0FBQ08sSUFKZDtBQUtFLGNBQVEsRUFBRVAsS0FBSyxDQUFDUTtBQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFjRSxxRUFBQyxrRkFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQUlSLEtBQUssQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLGVBa0JFO0FBQ0UsYUFBTyxFQUFFSCxlQURYO0FBRUUsV0FBSyxFQUFFO0FBQUVRLGVBQU8sRUFBRSxNQUFYO0FBQW1CQyx1QkFBZSxFQUFFLE9BQXBDO0FBQTZDQyxhQUFLLEVBQUU7QUFBcEQsT0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixFQXlCR2hCLFNBQVMsaUJBQUkscUVBQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBNURRTCxjOztLQUFBQSxjOztBQWdGTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmM4OTU4ZDYzMWIyMTcxZDZmMjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFdmVudFN1bW1hcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1zdW1tYXJ5XCI7XHJcbmltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljc1wiO1xyXG5pbXBvcnQgRXZlbnRDb250ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtY29udGVudFwiO1xyXG5pbXBvcnQgUXVlc3Rpb25Gb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL1F1ZXN0aW9uRm9ybVwiO1xyXG5cclxuY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcblxyXG5mdW5jdGlvbiBJdGVtRGV0YWlsUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dRRm9ybSwgc2V0SXNTaG93UUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGV4dHJhY3RlZE9iamVjdCB9ID0gcHJvcHM7XHJcblxyXG4gIGlmICghZXh0cmFjdGVkT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47IC8vIFJlbmRlciBsb2FkaW5nIHNwaW5uZXIgaWYgbm8gZGF0YSBpcyBhdmFpbGFibGVcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDIwMDApOyAvLyBTaW11bGF0ZSBhIGxvYWRpbmcgdGltZSBvZiA1IHNlY29uZHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbiAgY29uc3QgZXZlbnQgPSBleHRyYWN0ZWRPYmplY3Q7XHJcbiAgLy8gY29uc3QgY2hhbmdlTW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgLy8gICBzZXRJc1Nob3dRRm9ybSgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcclxuICAvLyB9O1xyXG4gIGNvbnN0IHNob3dNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd1FGb3JtKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGlkZU1vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93UUZvcm0oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57ZXZlbnQuVGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtldmVudC5EZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8RXZlbnRTdW1tYXJ5IFRpdGxlPXtldmVudC5UaXRsZX0gLz5cclxuICAgICAgPEV2ZW50TG9naXN0aWNzXHJcbiAgICAgICAgRGF0ZT17ZXZlbnQuRGF0ZX1cclxuICAgICAgICBSZWR1Y2VkSW1nPXtldmVudC5SZWR1Y2VkSW1nfVxyXG4gICAgICAgIFRpdGxlPXtldmVudC5UaXRsZX1cclxuICAgICAgICBUeXBlPXtldmVudC5UeXBlfVxyXG4gICAgICAgIENhdGVnb3J5PXtldmVudC5DYXRlZ29yeX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxFdmVudENvbnRlbnQ+XHJcbiAgICAgICAgPHA+e2V2ZW50LkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9FdmVudENvbnRlbnQ+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17c2hvd01vZGVIYW5kbGVyfVxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgQ2xhaW1cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7c2hvd1FGb3JtICYmIDxRdWVzdGlvbkZvcm0gLz59XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBvc3RJZCA9IGNvbnRleHQucGFyYW1zLml0ZW1pZDtcclxuICBjb25zdCBvYmplY3RJZCA9IG5ldyBPYmplY3RJZChwb3N0SWQpOyAvLyBDb252ZXJ0IHBvc3RJZCB0byBPYmplY3RJZFxyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcblxyXG4gIGNvbnN0IGV4dHJhY3RlZE9iamVjdCA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBleHRyYWN0ZWRPYmplY3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXh0cmFjdGVkT2JqZWN0KSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWxQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9