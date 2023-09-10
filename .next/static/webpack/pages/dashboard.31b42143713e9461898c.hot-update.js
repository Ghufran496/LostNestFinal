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
  var detailLink = "/dashboard/".concat(_id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgdiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: ReducedImg,
        alt: Title,
        width: 250,
        height: 160,
        style: {
          overflow: "scroll"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
            backgroundColor: "#311465",
            padding: "5px 30px",
            borderTopLeftRadius: "1rem",
            // Add this line
            borderTopRightRadius: "1rem",
            // Add this line
            borderLeft: "1px solid black",
            // Add this line for left border
            borderRight: "1px solid black",
            // Add this line for right border
            fontSize: "1.5rem",
            fontWeight: "lighter",
            textTransform: "uppercase",
            color: "white"
          },
          children: Type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            fontSize: "1.5rem"
          },
          children: Date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          padding: "0.5rem"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Category: ", Category]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
          // border: "1px dotted black",
          padding: "0.5rem",
          textTransform: "capitalize"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            fontWeight: "bolder",
            fontSize: "1.5rem"
          },
          children: "Description:\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), Description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: "View Details",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJkYXRhIiwiX2lkIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJkZXRhaWxMaW5rIiwiY2xhc3NlcyIsIml0ZW0iLCJpbWdkaXYiLCJvdmVyZmxvdyIsImNvbnRlbnQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyTGVmdCIsImJvcmRlclJpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwiYWN0aW9ucyIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBRHVCLG9CQVduQkEsS0FBSyxDQUFDQyxJQVhhO0FBQUEsTUFHckJDLEdBSHFCLGVBR3JCQSxHQUhxQjtBQUFBLE1BSXJCQyxJQUpxQixlQUlyQkEsSUFKcUI7QUFBQSxNQUtyQkMsUUFMcUIsZUFLckJBLFFBTHFCO0FBQUEsTUFNckJDLEtBTnFCLGVBTXJCQSxLQU5xQjtBQUFBLE1BT3JCQyxXQVBxQixlQU9yQkEsV0FQcUI7QUFBQSxNQVFyQkMsUUFScUIsZUFRckJBLFFBUnFCO0FBQUEsTUFTckJDLElBVHFCLGVBU3JCQSxJQVRxQjtBQUFBLE1BVXJCQyxVQVZxQixlQVVyQkEsVUFWcUI7QUFhdkIsTUFBTUMsVUFBVSx3QkFBaUJSLEdBQWpCLENBQWhCO0FBRUEsc0JBQ0U7QUFBSSxhQUFTLEVBQUVTLDJEQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELDJEQUFPLENBQUNFLE1BQXhCO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLEVBQUVKLFVBRFA7QUFFRSxXQUFHLEVBQUVKLEtBRlA7QUFHRSxhQUFLLEVBQUUsR0FIVDtBQUlFLGNBQU0sRUFBRSxHQUpWO0FBS0UsYUFBSyxFQUFFO0FBQUVTLGtCQUFRLEVBQUU7QUFBWjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRTtBQUFLLGVBQVMsRUFBRUgsMkRBQU8sQ0FBQ0ksT0FBeEI7QUFBQSw4QkFDRTtBQUNFLGFBQUssRUFBRTtBQUNMQyxpQkFBTyxFQUFFLE1BREo7QUFFTEMsd0JBQWMsRUFBRSxlQUZYO0FBR0xDLGdCQUFNLEVBQUU7QUFISCxTQURUO0FBQUEsZ0NBT0U7QUFDRSxlQUFLLEVBQUU7QUFDTEMsMkJBQWUsRUFBRSxTQURaO0FBRUxDLG1CQUFPLEVBQUUsVUFGSjtBQUdMQywrQkFBbUIsRUFBRSxNQUhoQjtBQUd3QjtBQUM3QkMsZ0NBQW9CLEVBQUUsTUFKakI7QUFJeUI7QUFDOUJDLHNCQUFVLEVBQUUsaUJBTFA7QUFLMEI7QUFDL0JDLHVCQUFXLEVBQUUsaUJBTlI7QUFNMkI7QUFDaENDLG9CQUFRLEVBQUUsUUFQTDtBQVFMQyxzQkFBVSxFQUFFLFNBUlA7QUFTTEMseUJBQWEsRUFBRSxXQVRWO0FBVUxDLGlCQUFLLEVBQUU7QUFWRixXQURUO0FBQUEsb0JBY0d6QjtBQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUF1QkU7QUFBSSxlQUFLLEVBQUU7QUFBRXNCLG9CQUFRLEVBQUU7QUFBWixXQUFYO0FBQUEsb0JBQW9DakI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUEyQkU7QUFDRSxhQUFLLEVBQUU7QUFDTFksaUJBQU8sRUFBRTtBQURKLFNBRFQ7QUFBQSwrQkFLRTtBQUFBLG1DQUFlaEIsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGLGVBa0NFO0FBQ0UsYUFBSyxFQUFFO0FBQ0w7QUFDQWdCLGlCQUFPLEVBQUUsUUFGSjtBQUdMTyx1QkFBYSxFQUFFO0FBSFYsU0FEVDtBQUFBLGdDQU9FO0FBQU0sZUFBSyxFQUFFO0FBQUVELHNCQUFVLEVBQUUsUUFBZDtBQUF3QkQsb0JBQVEsRUFBRTtBQUFsQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLEVBVUduQixXQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQXlERTtBQUNFLGVBQVMsRUFBRUssMkRBQU8sQ0FBQ2tCLE9BRHJCO0FBRUUsV0FBSyxFQUFFO0FBQ0xiLGVBQU8sRUFBRSxNQURKO0FBRUxDLHNCQUFjLEVBQUUsUUFGWDtBQUdMYSxrQkFBVSxFQUFFO0FBSFAsT0FGVDtBQUFBLDZCQVFFLHFFQUFDLGtEQUFEO0FBQVEsZUFBTyxFQUFDLGNBQWhCO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3RUQ7O0tBdkZRL0IsUTtBQXlGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjMxYjQyMTQzNzEzZTk0NjE4OThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3RJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0SXRlbShwcm9wcykge1xyXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpO1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIFR5cGUsXHJcbiAgICBDYXRlZ29yeSxcclxuICAgIFRpdGxlLFxyXG4gICAgRGVzY3JpcHRpb24sXHJcbiAgICBRdWVzdGlvbixcclxuICAgIERhdGUsXHJcbiAgICBSZWR1Y2VkSW1nLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG5cclxuICBjb25zdCBkZXRhaWxMaW5rID0gYC9kYXNoYm9hcmQvJHtfaWR9YDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2Rpdn0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtSZWR1Y2VkSW1nfVxyXG4gICAgICAgICAgYWx0PXtUaXRsZX1cclxuICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezE2MH1cclxuICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiBcInNjcm9sbFwiIH19XHJcbiAgICAgICAgPjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjFyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMTE0NjVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCAzMHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCIxcmVtXCIsIC8vIEFkZCB0aGlzIGxpbmVcclxuICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCIxcmVtXCIsIC8vIEFkZCB0aGlzIGxpbmVcclxuICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCBibGFja1wiLCAvLyBBZGQgdGhpcyBsaW5lIGZvciBsZWZ0IGJvcmRlclxyXG4gICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiLCAvLyBBZGQgdGhpcyBsaW5lIGZvciByaWdodCBib3JkZXJcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImxpZ2h0ZXJcIixcclxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtUeXBlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT57RGF0ZX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDI+Q2F0ZWdvcnk6IHtDYXRlZ29yeX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoM1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiBcIjFweCBkb3R0ZWQgYmxhY2tcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIsIGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PlxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbjombmJzcDtcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIHtEZXNjcmlwdGlvbn1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiVmlldyBEZXRhaWxzXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiXCI+PC9hPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=