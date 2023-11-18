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
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-summary */ "./components/feed/FeedDetails/event-summary.js");
/* harmony import */ var _components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-logistics */ "./components/feed/FeedDetails/event-logistics.js");
/* harmony import */ var _components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-content */ "./components/feed/FeedDetails/event-content.js");
/* harmony import */ var _components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/overlayForm/QuestionForm */ "./components/overlayForm/QuestionForm.js");
/* harmony import */ var _itemid_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./itemid.module.css */ "./pages/dashboard/itemid.module.css");
/* harmony import */ var _itemid_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_itemid_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\dashboard\\[itemid].js",
    _s = $RefreshSig$();












function ItemDetailPage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showQForm = _useState2[0],
      setIsShowQForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      processedObject = _useState3[0],
      setProcessedObject = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var extractedObject;
        return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                extractedObject = props.extractedObject;

                if (typeof extractedObject === "object") {
                  setProcessedObject(extractedObject);
                  setIsLoading(false);
                } else {
                  setIsLoading(true);
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [props.extractedObject]);

  if (isLoading || !processedObject) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }

  var event = processedObject;

  var showModeHandler = function showModeHandler() {
    setIsShowQForm(true);
  };

  var hideModeHandler = function hideModeHandler() {
    setIsShowQForm(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: event.Title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_6__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _itemid_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: showModeHandler,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
          content: showResponse ? "Hide Responses" : "Show Responses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), showQForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onclose: hideModeHandler,
      data: event
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(ItemDetailPage, "A8gaV+mEMmFSuhQ1NAYkkes+Wqo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIl0sIm5hbWVzIjpbIkl0ZW1EZXRhaWxQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNob3dRRm9ybSIsInNldElzU2hvd1FGb3JtIiwicHJvY2Vzc2VkT2JqZWN0Iiwic2V0UHJvY2Vzc2VkT2JqZWN0IiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZXh0cmFjdGVkT2JqZWN0IiwiZXZlbnQiLCJzaG93TW9kZUhhbmRsZXIiLCJoaWRlTW9kZUhhbmRsZXIiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJUeXBlIiwiQ2F0ZWdvcnkiLCJjbGFzc2VzIiwiYnRuZGl2Iiwic2hvd1Jlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBLE1BQ1hDLFlBRFc7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUEsTUFFdEJHLFNBRnNCO0FBQUEsTUFFWEMsY0FGVzs7QUFBQSxtQkFHaUJKLHNEQUFRLENBQUMsSUFBRCxDQUh6QjtBQUFBLE1BR3RCSyxlQUhzQjtBQUFBLE1BR0xDLGtCQUhLOztBQUs3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUztBQUFBLHNSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQywrQkFEUSxHQUNZVixLQURaLENBQ1JVLGVBRFE7O0FBR2hCLG9CQUFJLE9BQU9BLGVBQVAsS0FBMkIsUUFBL0IsRUFBeUM7QUFDdkNILG9DQUFrQixDQUFDRyxlQUFELENBQWxCO0FBQ0FQLDhCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsaUJBSEQsTUFHTztBQUNMQSw4QkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQVJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRNLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFXQUEsYUFBUztBQUNWLEdBYlEsRUFhTixDQUFDVCxLQUFLLENBQUNVLGVBQVAsQ0FiTSxDQUFUOztBQWVBLE1BQUlSLFNBQVMsSUFBSSxDQUFDSSxlQUFsQixFQUFtQztBQUNqQyx3QkFBTyxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFNSyxLQUFLLEdBQUdMLGVBQWQ7O0FBRUEsTUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCUCxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBR0EsTUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCUixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFNLEtBQUssQ0FBQ0c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUgsS0FBSyxDQUFDSTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxrRkFBRDtBQUFjLFdBQUssRUFBRUosS0FBSyxDQUFDRztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRSxxRUFBQyxvRkFBRDtBQUNFLFVBQUksRUFBRUgsS0FBSyxDQUFDSyxJQURkO0FBRUUsZ0JBQVUsRUFBRUwsS0FBSyxDQUFDTSxVQUZwQjtBQUdFLFdBQUssRUFBRU4sS0FBSyxDQUFDRyxLQUhmO0FBSUUsVUFBSSxFQUFFSCxLQUFLLENBQUNPLElBSmQ7QUFLRSxjQUFRLEVBQUVQLEtBQUssQ0FBQ1E7QUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBZUUscUVBQUMsa0ZBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFJUixLQUFLLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQWtCRTtBQUFLLGVBQVMsRUFBRUsseURBQU8sQ0FBQ0MsTUFBeEI7QUFBQSw2QkFRRTtBQUFHLGVBQU8sRUFBRVQsZUFBWjtBQUFBLCtCQUNFLHFFQUFDLDhEQUFEO0FBQ0UsaUJBQU8sRUFBRVUsWUFBWSxHQUFHLGdCQUFILEdBQXNCO0FBRDdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixFQWlDR2xCLFNBQVMsaUJBQUkscUVBQUMsNEVBQUQ7QUFBYyxhQUFPLEVBQUVTLGVBQXZCO0FBQXdDLFVBQUksRUFBRUY7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7O0dBdEVRWixjOztLQUFBQSxjOztBQTRGTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmJjMDI3MjcxN2M4ODg5NDNjNGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFdmVudFN1bW1hcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1zdW1tYXJ5XCI7XHJcbmltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljc1wiO1xyXG5pbXBvcnQgRXZlbnRDb250ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtY29udGVudFwiO1xyXG5pbXBvcnQgUXVlc3Rpb25Gb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL1F1ZXN0aW9uRm9ybVwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9pdGVtaWQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YUJ5SWQgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTG9hZGluZ1wiO1xyXG5cclxuZnVuY3Rpb24gSXRlbURldGFpbFBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UUZvcm0sIHNldElzU2hvd1FGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvY2Vzc2VkT2JqZWN0LCBzZXRQcm9jZXNzZWRPYmplY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZXh0cmFjdGVkT2JqZWN0IH0gPSBwcm9wcztcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZXh0cmFjdGVkT2JqZWN0ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc2V0UHJvY2Vzc2VkT2JqZWN0KGV4dHJhY3RlZE9iamVjdCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW3Byb3BzLmV4dHJhY3RlZE9iamVjdF0pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nIHx8ICFwcm9jZXNzZWRPYmplY3QpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV2ZW50ID0gcHJvY2Vzc2VkT2JqZWN0O1xyXG5cclxuICBjb25zdCBzaG93TW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dRRm9ybSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpZGVNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd1FGb3JtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2V2ZW50LlRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXZlbnQuRGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEV2ZW50U3VtbWFyeSBUaXRsZT17ZXZlbnQuVGl0bGV9IC8+XHJcblxyXG4gICAgICA8RXZlbnRMb2dpc3RpY3NcclxuICAgICAgICBEYXRlPXtldmVudC5EYXRlfVxyXG4gICAgICAgIFJlZHVjZWRJbWc9e2V2ZW50LlJlZHVjZWRJbWd9XHJcbiAgICAgICAgVGl0bGU9e2V2ZW50LlRpdGxlfVxyXG4gICAgICAgIFR5cGU9e2V2ZW50LlR5cGV9XHJcbiAgICAgICAgQ2F0ZWdvcnk9e2V2ZW50LkNhdGVnb3J5fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEV2ZW50Q29udGVudD5cclxuICAgICAgICA8cD57ZXZlbnQuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0V2ZW50Q29udGVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17c2hvd01vZGVIYW5kbGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjUyfVxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xhaW0gdGhpcyB7ZXZlbnQuVGl0bGV9XHJcbiAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgIDxhIG9uQ2xpY2s9e3Nob3dNb2RlSGFuZGxlcn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3Nob3dSZXNwb25zZSA/IFwiSGlkZSBSZXNwb25zZXNcIiA6IFwiU2hvdyBSZXNwb25zZXNcIn1cclxuICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Nob3dRRm9ybSAmJiA8UXVlc3Rpb25Gb3JtIG9uY2xvc2U9e2hpZGVNb2RlSGFuZGxlcn0gZGF0YT17ZXZlbnR9IC8+fVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBwb3N0SWQgPSBjb250ZXh0LnBhcmFtcy5pdGVtaWQ7XHJcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YUJ5SWQocG9zdElkKTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZXh0cmFjdGVkT2JqZWN0OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWxQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9