webpackHotUpdate_N_E("pages/responses",{

/***/ "./components/MyResponse/AllResponses.js":
/*!***********************************************!*\
  !*** ./components/MyResponse/AllResponses.js ***!
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
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _ResponseGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResponseGrid */ "./components/MyResponse/ResponseGrid.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\MyResponse\\AllResponses.js",
    _this = undefined,
    _s = $RefreshSig$();







var AllResponses = function AllResponses() {
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
    fetch("/api/answers/sendResponse").then(function (response) {
      return response.json();
    }).then(function (data) {
      //console.log("data in client" + data);
      if (isMounted) {
        setIsData(data);

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
    }); //Cleanup function

    return function () {
      isMounted = false; // Set flag to false when component is unmounted
    };
  }, []);

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [isData.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        fontSize: "2rem",
        display: "flex",
        marginTop: "1rem",
        justifyContent: "center",
        alignItems: "center"
      },
      children: "No Responses Found..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ResponseGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: isData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, _this);
};

_s(AllResponses, "u9Pdcpvk3j9H2eg7IiQ8vroAKGM=");

_c = AllResponses;
/* harmony default export */ __webpack_exports__["default"] = (AllResponses);

var _c;

$RefreshReg$(_c, "AllResponses");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL0FsbFJlc3BvbnNlcy5qcyJdLCJuYW1lcyI6WyJBbGxSZXNwb25zZXMiLCJ1c2VTdGF0ZSIsImlzRGF0YSIsInNldElzRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibGVuZ3RoIiwiZm9udFNpemUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUNsQkMsTUFEa0I7QUFBQSxNQUNWQyxTQURVOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVsQkcsU0FGa0I7QUFBQSxNQUVQQyxZQUZPOztBQUFBLG1CQUdLSixzREFBUSxDQUFDLEtBQUQsQ0FIYjtBQUFBLE1BR2xCSyxPQUhrQjtBQUFBLE1BR1RDLFVBSFM7O0FBQUEsbUJBSWFOLHNEQUFRLENBQzVDLHdEQUQ0QyxDQUpyQjtBQUFBLE1BSWxCTyxXQUprQjtBQUFBLE1BSUxDLGNBSks7O0FBUXpCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxTQUFTLEdBQUcsSUFBaEIsQ0FEYyxDQUNROztBQUV0Qk4sZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFFQU8sU0FBSyxDQUFDLDJCQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkO0FBQ0EsVUFBSUwsU0FBSixFQUFlO0FBQ2JSLGlCQUFTLENBQUNhLElBQUQsQ0FBVDs7QUFDQSxZQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFBa0I7QUFDaEJSLHdCQUFjLENBQUNPLElBQUksQ0FBQ0MsT0FBTixDQUFkO0FBQ0FWLG9CQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0Q7O0FBQ0RGLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7QUFDRixLQVpILFdBYVMsVUFBQ2EsS0FBRCxFQUFXO0FBQ2hCLFVBQUlQLFNBQUosRUFBZTtBQUNiSixrQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRSxzQkFBYyxDQUFDLHdDQUFELENBQWQ7QUFDQUosb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDs7QUFDRGMsYUFBTyxDQUFDRCxLQUFSLENBQWMsY0FBZCxFQUE4QkEsS0FBOUI7QUFDRCxLQXBCSCxFQUxjLENBMkJkOztBQUNBLFdBQU8sWUFBTTtBQUNYUCxlQUFTLEdBQUcsS0FBWixDQURXLENBQ1E7QUFDcEIsS0FGRDtBQUdELEdBL0JRLEVBK0JOLEVBL0JNLENBQVQ7O0FBaUNBLE1BQUlMLE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLHFEQUFEO0FBQVcsZUFBUyxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGVBQ0dOLE1BQU0sQ0FBQ2tCLE1BQVAsS0FBa0IsQ0FBbEIsZ0JBQ0M7QUFDRSxXQUFLLEVBQUU7QUFDTEMsZ0JBQVEsRUFBRSxNQURMO0FBRUxDLGVBQU8sRUFBRSxNQUZKO0FBR0xDLGlCQUFTLEVBQUUsTUFITjtBQUlMQyxzQkFBYyxFQUFFLFFBSlg7QUFLTEMsa0JBQVUsRUFBRTtBQUxQLE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxnQkFhQyxxRUFBQyxxREFBRDtBQUFjLFVBQUksRUFBRXZCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSixFQWdCR0UsU0FBUyxpQkFBSSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQWpFRDs7R0FBTUosWTs7S0FBQUEsWTtBQW1FU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzcG9uc2VzLjdjNTI5OTJhMmQ1MzNmMGRkNDY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEVycm9yQ29tcCBmcm9tIFwiLi4vVUkvRXJyb3JDb21wXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmltcG9ydCBSZXNwb25zZUdyaWQgZnJvbSBcIi4vUmVzcG9uc2VHcmlkXCI7XHJcblxyXG5jb25zdCBBbGxSZXNwb25zZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzRGF0YSwgc2V0SXNEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXHJcbiAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlOyAvLyBGbGFnIHRvIHRyYWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG5cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBmZXRjaChcIi9hcGkvYW5zd2Vycy9zZW5kUmVzcG9uc2VcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGEgaW4gY2xpZW50XCIgKyBkYXRhKTtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRJc0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHNldElzRXJyb3JEYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRJc0Vycm9yRGF0YShcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGRhdGEuXCIpO1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZldGNoIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vQ2xlYW51cCBmdW5jdGlvblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkID0gZmFsc2U7IC8vIFNldCBmbGFnIHRvIGZhbHNlIHdoZW4gY29tcG9uZW50IGlzIHVubW91bnRlZFxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpc0Vycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yQ29tcCBlcnJvckRhdGE9e2lzRXJyb3JEYXRhfSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aXNEYXRhLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vIFJlc3BvbnNlcyBGb3VuZC4uLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8UmVzcG9uc2VHcmlkIGRhdGE9e2lzRGF0YX0gLz5cclxuICAgICAgKX1cclxuICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZyAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxSZXNwb25zZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=