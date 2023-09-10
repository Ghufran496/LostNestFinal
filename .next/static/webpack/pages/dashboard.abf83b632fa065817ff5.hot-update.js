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
          padding: "2rem"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Category: ", Category]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
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
          lineNumber: 54,
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
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJkYXRhIiwiX2lkIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJjbGFzc2VzIiwiaXRlbSIsImltZ2RpdiIsImNvbnRlbnQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0VHJhbnNmb3JtIiwiYWN0aW9ucyIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBRHVCLG9CQVduQkEsS0FBSyxDQUFDQyxJQVhhO0FBQUEsTUFHckJDLEdBSHFCLGVBR3JCQSxHQUhxQjtBQUFBLE1BSXJCQyxJQUpxQixlQUlyQkEsSUFKcUI7QUFBQSxNQUtyQkMsUUFMcUIsZUFLckJBLFFBTHFCO0FBQUEsTUFNckJDLEtBTnFCLGVBTXJCQSxLQU5xQjtBQUFBLE1BT3JCQyxXQVBxQixlQU9yQkEsV0FQcUI7QUFBQSxNQVFyQkMsUUFScUIsZUFRckJBLFFBUnFCO0FBQUEsTUFTckJDLElBVHFCLGVBU3JCQSxJQVRxQjtBQUFBLE1BVXJCQyxVQVZxQixlQVVyQkEsVUFWcUI7QUFhdkIsc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDJEQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELDJEQUFPLENBQUNFLE1BQXhCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVILFVBQVY7QUFBc0IsV0FBRyxFQUFFSixLQUEzQjtBQUFrQyxhQUFLLEVBQUUsR0FBekM7QUFBOEMsY0FBTSxFQUFFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUssMkRBQU8sQ0FBQ0csT0FBeEI7QUFBQSw4QkFDRTtBQUNFLGFBQUssRUFBRTtBQUNMQyxpQkFBTyxFQUFFLE1BREo7QUFFTEMsd0JBQWMsRUFBRSxlQUZYO0FBR0xDLGdCQUFNLEVBQUU7QUFISCxTQURUO0FBQUEsZ0NBT0U7QUFDRSxlQUFLLEVBQUU7QUFDTEMsMkJBQWUsRUFBRSxRQURaO0FBRUxDLG1CQUFPLEVBQUUsVUFGSjtBQUdMQyxrQkFBTSxFQUFFLGlCQUhIO0FBSUxDLG9CQUFRLEVBQUUsUUFKTDtBQUtMQyx3QkFBWSxFQUFFLE1BTFQ7QUFNTEMseUJBQWEsRUFBRTtBQU5WLFdBRFQ7QUFBQSxvQkFVR25CO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQW1CRTtBQUFJLGVBQUssRUFBRTtBQUFFaUIsb0JBQVEsRUFBRTtBQUFaLFdBQVg7QUFBQSxvQkFBb0NaO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBdUJFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xNLGlCQUFPLEVBQUUsTUFESjtBQUVMQyx3QkFBYyxFQUFFLGVBRlg7QUFHTEcsaUJBQU8sRUFBRTtBQUhKLFNBRFQ7QUFBQSxnQ0FPRTtBQUFBLG1DQUFlZCxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVFFO0FBQ0UsZUFBSyxFQUFFO0FBQ0xlLGtCQUFNLEVBQUUsaUJBREg7QUFFTEQsbUJBQU8sRUFBRSxRQUZKO0FBR0xJLHlCQUFhLEVBQUU7QUFIVixXQURUO0FBQUEsb0JBT0doQjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBOENFO0FBQ0UsZUFBUyxFQUFFSSwyREFBTyxDQUFDYSxPQURyQjtBQUVFLFdBQUssRUFBRTtBQUNMVCxlQUFPLEVBQUUsTUFESjtBQUVMQyxzQkFBYyxFQUFFLFFBRlg7QUFHTFMsa0JBQVUsRUFBRTtBQUhQLE9BRlQ7QUFBQSw2QkFRRSxxRUFBQyxrREFBRDtBQUFRLGVBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJERDs7S0F4RVF6QixRO0FBMEVNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuYWJmODNiNjMyZmEwNjU4MTdmZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdEl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgVHlwZSxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgVGl0bGUsXHJcbiAgICBEZXNjcmlwdGlvbixcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgRGF0ZSxcclxuICAgIFJlZHVjZWRJbWcsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdkaXZ9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtSZWR1Y2VkSW1nfSBhbHQ9e1RpdGxlfSB3aWR0aD17MjUwfSBoZWlnaHQ9ezE2MH0+PC9pbWc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMXJlbVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHVycGxlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMzBweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtUeXBlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT57RGF0ZX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjJyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyPkNhdGVnb3J5OiB7Q2F0ZWdvcnl9PC9oMj5cclxuICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7RGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiRXhwbG9yZSBFdmVudFwiPjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=