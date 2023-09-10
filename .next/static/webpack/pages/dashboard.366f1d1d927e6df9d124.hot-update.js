webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/feed/PostItem.js":
/*!*************************************!*\
  !*** ./components/feed/PostItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostItem.module.css */ "./components/feed/PostItem.module.css");
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\PostItem.js";




function PostItem(props) {
  // console.log(props.data);
  var _props$data = props.data,
      _id = _props$data._id,
      Type = _props$data.Type,
      Category = _props$data.Category,
      Title = _props$data.Title,
      Description = _props$data.Description,
      Question = _props$data.Question,
      Date = _props$data.Date,
      ReducedImg = _props$data.ReducedImg;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgdiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: ReducedImg,
        alt: Title,
        width: 250,
        height: 160
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          style: {
            backgroundColor: "purple",
            padding: "5px 30px",
            border: "2px solid black",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            textTransform: "uppercase"
          },
          children: Type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            fontSize: "1.5rem"
          },
          children: Date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          margin: margin
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Category: ", Category]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            border: "1px solid black",
            padding: "0.5rem",
            textTransform: "capitalize"
          },
          children: Description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: "Explore Event"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_c = PostItem;
/* harmony default export */ __webpack_exports__["default"] = (PostItem);

var _c;

$RefreshReg$(_c, "PostItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJkYXRhIiwiX2lkIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJjbGFzc2VzIiwiaXRlbSIsImltZ2RpdiIsImNvbnRlbnQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0VHJhbnNmb3JtIiwiYWN0aW9ucyIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBRHVCLG9CQVduQkEsS0FBSyxDQUFDQyxJQVhhO0FBQUEsTUFHckJDLEdBSHFCLGVBR3JCQSxHQUhxQjtBQUFBLE1BSXJCQyxJQUpxQixlQUlyQkEsSUFKcUI7QUFBQSxNQUtyQkMsUUFMcUIsZUFLckJBLFFBTHFCO0FBQUEsTUFNckJDLEtBTnFCLGVBTXJCQSxLQU5xQjtBQUFBLE1BT3JCQyxXQVBxQixlQU9yQkEsV0FQcUI7QUFBQSxNQVFyQkMsUUFScUIsZUFRckJBLFFBUnFCO0FBQUEsTUFTckJDLElBVHFCLGVBU3JCQSxJQVRxQjtBQUFBLE1BVXJCQyxVQVZxQixlQVVyQkEsVUFWcUI7QUFhdkIsc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDJEQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELDJEQUFPLENBQUNFLE1BQXhCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVILFVBQVY7QUFBc0IsV0FBRyxFQUFFSixLQUEzQjtBQUFrQyxhQUFLLEVBQUUsR0FBekM7QUFBOEMsY0FBTSxFQUFFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUssMkRBQU8sQ0FBQ0csT0FBeEI7QUFBQSw4QkFDRTtBQUNFLGFBQUssRUFBRTtBQUNMQyxpQkFBTyxFQUFFLE1BREo7QUFFTEMsd0JBQWMsRUFBRSxlQUZYO0FBR0xDLGdCQUFNLEVBQUU7QUFISCxTQURUO0FBQUEsZ0NBT0U7QUFDRSxlQUFLLEVBQUU7QUFDTEMsMkJBQWUsRUFBRSxRQURaO0FBRUxDLG1CQUFPLEVBQUUsVUFGSjtBQUdMQyxrQkFBTSxFQUFFLGlCQUhIO0FBSUxDLG9CQUFRLEVBQUUsUUFKTDtBQUtMQyx3QkFBWSxFQUFFLE1BTFQ7QUFNTEMseUJBQWEsRUFBRTtBQU5WLFdBRFQ7QUFBQSxvQkFVR25CO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQW1CRTtBQUFJLGVBQUssRUFBRTtBQUFFaUIsb0JBQVEsRUFBRTtBQUFaLFdBQVg7QUFBQSxvQkFBb0NaO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBdUJFO0FBQ0UsYUFBSyxFQUFFO0FBQUVNLGlCQUFPLEVBQUUsTUFBWDtBQUFtQkMsd0JBQWMsRUFBRSxlQUFuQztBQUFvREMsZ0JBQU0sRUFBTkE7QUFBcEQsU0FEVDtBQUFBLGdDQUdFO0FBQUEsbUNBQWVaLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFDRSxlQUFLLEVBQUU7QUFDTGUsa0JBQU0sRUFBRSxpQkFESDtBQUVMRCxtQkFBTyxFQUFFLFFBRko7QUFHTEkseUJBQWEsRUFBRTtBQUhWLFdBRFQ7QUFBQSxvQkFPR2hCO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUEwQ0U7QUFDRSxlQUFTLEVBQUVJLDJEQUFPLENBQUNhLE9BRHJCO0FBRUUsV0FBSyxFQUFFO0FBQ0xULGVBQU8sRUFBRSxNQURKO0FBRUxDLHNCQUFjLEVBQUUsUUFGWDtBQUdMUyxrQkFBVSxFQUFFO0FBSFAsT0FGVDtBQUFBLDZCQVFFLHFFQUFDLGtEQUFEO0FBQVEsZUFBTyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUREOztLQXBFUXpCLFE7QUFzRU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC4zNjZmMWQxZDkyN2U2ZGY5ZDEyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0SXRlbS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gUG9zdEl0ZW0ocHJvcHMpIHtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBUeXBlLFxyXG4gICAgQ2F0ZWdvcnksXHJcbiAgICBUaXRsZSxcclxuICAgIERlc2NyaXB0aW9uLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBEYXRlLFxyXG4gICAgUmVkdWNlZEltZyxcclxuICB9ID0gcHJvcHMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2Rpdn0+XHJcbiAgICAgICAgPGltZyBzcmM9e1JlZHVjZWRJbWd9IGFsdD17VGl0bGV9IHdpZHRoPXsyNTB9IGhlaWdodD17MTYwfT48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxcmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwdXJwbGVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCAzMHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1R5cGV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PntEYXRlfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIG1hcmdpbiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMj5DYXRlZ29yeToge0NhdGVnb3J5fTwvaDI+XHJcbiAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXR0b24gY29udGVudD1cIkV4cGxvcmUgRXZlbnRcIj48L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9