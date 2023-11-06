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
/* harmony import */ var _itemid_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itemid.module.css */ "./pages/dashboard/itemid.module.css");
/* harmony import */ var _itemid_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_itemid_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");


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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _itemid_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: showModeHandler,
        className: _itemid_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button52,
        role: "button",
        children: ["Claim this ", event.Title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), showQForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onclose: hideModeHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIl0sIm5hbWVzIjpbIkl0ZW1EZXRhaWxQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNob3dRRm9ybSIsInNldElzU2hvd1FGb3JtIiwiZXh0cmFjdGVkT2JqZWN0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImV2ZW50Iiwic2hvd01vZGVIYW5kbGVyIiwiaGlkZU1vZGVIYW5kbGVyIiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwiVHlwZSIsIkNhdGVnb3J5IiwiY2xhc3NlcyIsImJ0bmRpdiIsImJ1dHRvbjUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBR0EsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUN0QkMsU0FEc0I7QUFBQSxNQUNYQyxZQURXOztBQUFBLG1CQUVPRixzREFBUSxDQUFDLEtBQUQsQ0FGZjtBQUFBLE1BRXRCRyxTQUZzQjtBQUFBLE1BRVhDLGNBRlc7O0FBQUEsTUFJckJDLGVBSnFCLEdBSUROLEtBSkMsQ0FJckJNLGVBSnFCOztBQU03QixNQUFJLENBQUNBLGVBQUwsRUFBc0I7QUFDcEIsd0JBQU8scUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQLENBRG9CLENBQ0E7QUFDckI7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUNkSixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBSyxjQUFVLENBQUMsWUFBTTtBQUNmTCxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVYsQ0FGYyxDQUlKO0FBQ1gsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxNQUFJRCxTQUFKLEVBQWU7QUFDYix3QkFBTyxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxNQUFNTyxLQUFLLEdBQUdILGVBQWQsQ0FwQjZCLENBcUI3QjtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCTCxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBR0EsTUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCTixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFJLEtBQUssQ0FBQ0c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUgsS0FBSyxDQUFDSTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxrRkFBRDtBQUFjLFdBQUssRUFBRUosS0FBSyxDQUFDRztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRSxxRUFBQyxvRkFBRDtBQUNFLFVBQUksRUFBRUgsS0FBSyxDQUFDSyxJQURkO0FBRUUsZ0JBQVUsRUFBRUwsS0FBSyxDQUFDTSxVQUZwQjtBQUdFLFdBQUssRUFBRU4sS0FBSyxDQUFDRyxLQUhmO0FBSUUsVUFBSSxFQUFFSCxLQUFLLENBQUNPLElBSmQ7QUFLRSxjQUFRLEVBQUVQLEtBQUssQ0FBQ1E7QUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBY0UscUVBQUMsa0ZBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFJUixLQUFLLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQWlCRTtBQUFLLGVBQVMsRUFBRUsseURBQU8sQ0FBQ0MsTUFBeEI7QUFBQSw2QkFDRTtBQUNFLGVBQU8sRUFBRVQsZUFEWDtBQUVFLGlCQUFTLEVBQUVRLHlEQUFPLENBQUNFLFFBRnJCO0FBR0UsWUFBSSxFQUFDLFFBSFA7QUFBQSxrQ0FLY1gsS0FBSyxDQUFDRyxLQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLEVBMkJHUixTQUFTLGlCQUFJLHFFQUFDLDRFQUFEO0FBQWMsYUFBTyxFQUFFTztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDs7R0E5RFFaLGM7O0tBQUFBLGM7O0FBa0ZNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvW2l0ZW1pZF0uZTZlZTdmNmNjN2E3ZGQwMmVkMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnlcIjtcclxuaW1wb3J0IEV2ZW50TG9naXN0aWNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzXCI7XHJcbmltcG9ydCBFdmVudENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50XCI7XHJcbmltcG9ydCBRdWVzdGlvbkZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vUXVlc3Rpb25Gb3JtXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2l0ZW1pZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcclxuXHJcbmZ1bmN0aW9uIEl0ZW1EZXRhaWxQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1FGb3JtLCBzZXRJc1Nob3dRRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgZXh0cmFjdGVkT2JqZWN0IH0gPSBwcm9wcztcclxuXHJcbiAgaWYgKCFleHRyYWN0ZWRPYmplY3QpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjsgLy8gUmVuZGVyIGxvYWRpbmcgc3Bpbm5lciBpZiBubyBkYXRhIGlzIGF2YWlsYWJsZVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgMjAwMCk7IC8vIFNpbXVsYXRlIGEgbG9hZGluZyB0aW1lIG9mIDUgc2Vjb25kc1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuICBjb25zdCBldmVudCA9IGV4dHJhY3RlZE9iamVjdDtcclxuICAvLyBjb25zdCBjaGFuZ2VNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAvLyAgIHNldElzU2hvd1FGb3JtKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIC8vIH07XHJcbiAgY29uc3Qgc2hvd01vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93UUZvcm0odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoaWRlTW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dRRm9ybShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntldmVudC5UaXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2V2ZW50LkRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxFdmVudFN1bW1hcnkgVGl0bGU9e2V2ZW50LlRpdGxlfSAvPlxyXG4gICAgICA8RXZlbnRMb2dpc3RpY3NcclxuICAgICAgICBEYXRlPXtldmVudC5EYXRlfVxyXG4gICAgICAgIFJlZHVjZWRJbWc9e2V2ZW50LlJlZHVjZWRJbWd9XHJcbiAgICAgICAgVGl0bGU9e2V2ZW50LlRpdGxlfVxyXG4gICAgICAgIFR5cGU9e2V2ZW50LlR5cGV9XHJcbiAgICAgICAgQ2F0ZWdvcnk9e2V2ZW50LkNhdGVnb3J5fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEV2ZW50Q29udGVudD5cclxuICAgICAgICA8cD57ZXZlbnQuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0V2ZW50Q29udGVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kZUhhbmRsZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uNTJ9XHJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBDbGFpbSB0aGlzIHtldmVudC5UaXRsZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd1FGb3JtICYmIDxRdWVzdGlvbkZvcm0gb25jbG9zZT17aGlkZU1vZGVIYW5kbGVyfSAvPn1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcG9zdElkID0gY29udGV4dC5wYXJhbXMuaXRlbWlkO1xyXG4gIGNvbnN0IG9iamVjdElkID0gbmV3IE9iamVjdElkKHBvc3RJZCk7IC8vIENvbnZlcnQgcG9zdElkIHRvIE9iamVjdElkXHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcclxuXHJcbiAgY29uc3QgZXh0cmFjdGVkT2JqZWN0ID0gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGV4dHJhY3RlZE9iamVjdDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleHRyYWN0ZWRPYmplY3QpKSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbURldGFpbFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=