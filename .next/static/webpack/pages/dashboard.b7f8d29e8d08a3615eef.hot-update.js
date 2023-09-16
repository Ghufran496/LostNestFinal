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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");

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

  var handleViewDetails = function handleViewDetails() {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 5000); // Simulate a loading time of 5 seconds
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgdiv,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
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
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem"
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
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            fontSize: "1.5rem"
          },
          children: Date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          marginTop: "2rem",
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          style: {
            textTransform: "capitalize"
          },
          children: ["Category: ", Category]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          style: {
            textTransform: "capitalize"
          },
          children: ["Item Name: ", Title]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
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
          lineNumber: 89,
          columnNumber: 11
        }, this), Description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: detailLink,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            content: "View Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJkYXRhIiwiX2lkIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJkZXRhaWxMaW5rIiwiaGFuZGxlVmlld0RldGFpbHMiLCJzZXRJc0xvYWRpbmciLCJzZXRUaW1lb3V0IiwiY2xhc3NlcyIsIml0ZW0iLCJpbWdkaXYiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3ZlcmZsb3ciLCJjb250ZW50IiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZsZXhEaXJlY3Rpb24iLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkI7QUFEdUIsb0JBV25CQSxLQUFLLENBQUNDLElBWGE7QUFBQSxNQUdyQkMsR0FIcUIsZUFHckJBLEdBSHFCO0FBQUEsTUFJckJDLElBSnFCLGVBSXJCQSxJQUpxQjtBQUFBLE1BS3JCQyxRQUxxQixlQUtyQkEsUUFMcUI7QUFBQSxNQU1yQkMsS0FOcUIsZUFNckJBLEtBTnFCO0FBQUEsTUFPckJDLFdBUHFCLGVBT3JCQSxXQVBxQjtBQUFBLE1BUXJCQyxRQVJxQixlQVFyQkEsUUFScUI7QUFBQSxNQVNyQkMsSUFUcUIsZUFTckJBLElBVHFCO0FBQUEsTUFVckJDLFVBVnFC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LDJEQUFPLENBQUNxQixPQURyQjtBQUVFLFdBQUssRUFBRTtBQUNMbEIsZUFBTyxFQUFFLE1BREo7QUFFTEMsc0JBQWMsRUFBRSxRQUZYO0FBR0xDLGtCQUFVLEVBQUU7QUFIUCxPQUZUO0FBQUEsNkJBUUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUVULFVBQVo7QUFBQSwrQkFDRTtBQUFBLGlDQUNFLHFFQUFDLGtEQUFEO0FBQVEsbUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUZEOztLQTlHUVgsUTtBQWdITUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmI3ZjhkMjllOGQwOGEzNjE1ZWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3RJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuZnVuY3Rpb24gUG9zdEl0ZW0ocHJvcHMpIHtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBUeXBlLFxyXG4gICAgQ2F0ZWdvcnksXHJcbiAgICBUaXRsZSxcclxuICAgIERlc2NyaXB0aW9uLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBEYXRlLFxyXG4gICAgUmVkdWNlZEltZyxcclxuICB9ID0gcHJvcHMuZGF0YTtcclxuXHJcbiAgY29uc3QgZGV0YWlsTGluayA9IGAvZGFzaGJvYXJkLyR7X2lkfWA7XHJcbiAgY29uc3QgaGFuZGxlVmlld0RldGFpbHMgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDAwKTsgLy8gU2ltdWxhdGUgYSBsb2FkaW5nIHRpbWUgb2YgNSBzZWNvbmRzXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdkaXZ9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e1JlZHVjZWRJbWd9XHJcbiAgICAgICAgICBhbHQ9e1RpdGxlfVxyXG4gICAgICAgICAgd2lkdGg9ezI1MH1cclxuICAgICAgICAgIGhlaWdodD17MTYwfVxyXG4gICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IFwic2Nyb2xsXCIgfX1cclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMxMTQ2NVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDMwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjFyZW1cIiwgLy8gQWRkIHRoaXMgbGluZVxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjFyZW1cIiwgLy8gQWRkIHRoaXMgbGluZVxyXG4gICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsIC8vIEFkZCB0aGlzIGxpbmUgZm9yIGxlZnQgYm9yZGVyXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsIC8vIEFkZCB0aGlzIGxpbmUgZm9yIHJpZ2h0IGJvcmRlclxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibGlnaHRlclwiLFxyXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1R5cGV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PntEYXRlfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIiB9fT5DYXRlZ29yeToge0NhdGVnb3J5fTwvaDI+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIgfX0+SXRlbSBOYW1lOiB7VGl0bGV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDNcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uOiZuYnNwO1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAge0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGluayBocmVmPXtkZXRhaWxMaW5rfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJWaWV3IERldGFpbHNcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9