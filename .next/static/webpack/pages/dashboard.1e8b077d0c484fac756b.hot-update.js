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

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\PostItem.js";



 //import Loading from "../UI/Loading";

function PostItem(props) {
  // console.log(props.data);
  //const [isLoading, setIsLoading] = useState(false);
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
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            fontSize: "1.5rem"
          },
          children: Date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
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
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          style: {
            textTransform: "capitalize"
          },
          children: ["Item Name: ", Title]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
          lineNumber: 84,
          columnNumber: 11
        }, this), Description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
            lineNumber: 105,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJkYXRhIiwiX2lkIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJkZXRhaWxMaW5rIiwiY2xhc3NlcyIsIml0ZW0iLCJpbWdkaXYiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3ZlcmZsb3ciLCJjb250ZW50IiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZsZXhEaXJlY3Rpb24iLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkI7QUFDQTtBQUZ1QixvQkFZbkJBLEtBQUssQ0FBQ0MsSUFaYTtBQUFBLE1BSXJCQyxHQUpxQixlQUlyQkEsR0FKcUI7QUFBQSxNQUtyQkMsSUFMcUIsZUFLckJBLElBTHFCO0FBQUEsTUFNckJDLFFBTnFCLGVBTXJCQSxRQU5xQjtBQUFBLE1BT3JCQyxLQVBxQixlQU9yQkEsS0FQcUI7QUFBQSxNQVFyQkMsV0FScUIsZUFRckJBLFdBUnFCO0FBQUEsTUFTckJDLFFBVHFCLGVBU3JCQSxRQVRxQjtBQUFBLE1BVXJCQyxJQVZxQixlQVVyQkEsSUFWcUI7QUFBQSxNQVdyQkMsVUFYcUIsZUFXckJBLFVBWHFCO0FBY3ZCLE1BQU1DLFVBQVUsd0JBQWlCUixHQUFqQixDQUFo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QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUZEOztLQXpHUVgsUTtBQTJHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjFlOGIwNzdkMGM0ODRmYWM3NTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdEl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vL2ltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgLy9jb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIFR5cGUsXHJcbiAgICBDYXRlZ29yeSxcclxuICAgIFRpdGxlLFxyXG4gICAgRGVzY3JpcHRpb24sXHJcbiAgICBRdWVzdGlvbixcclxuICAgIERhdGUsXHJcbiAgICBSZWR1Y2VkSW1nLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG5cclxuICBjb25zdCBkZXRhaWxMaW5rID0gYC9kYXNoYm9hcmQvJHtfaWR9YDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nZGl2fVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtSZWR1Y2VkSW1nfVxyXG4gICAgICAgICAgYWx0PXtUaXRsZX1cclxuICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezE2MH1cclxuICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93OiBcInNjcm9sbFwiIH19XHJcbiAgICAgICAgPjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMTE0NjVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCAzMHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCIxcmVtXCIsIC8vIEFkZCB0aGlzIGxpbmVcclxuICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCIxcmVtXCIsIC8vIEFkZCB0aGlzIGxpbmVcclxuICAgICAgICAgICAgICBib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCBibGFja1wiLCAvLyBBZGQgdGhpcyBsaW5lIGZvciBsZWZ0IGJvcmRlclxyXG4gICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiLCAvLyBBZGQgdGhpcyBsaW5lIGZvciByaWdodCBib3JkZXJcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImxpZ2h0ZXJcIixcclxuICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtUeXBlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT57RGF0ZX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIgfX0+Q2F0ZWdvcnk6IHtDYXRlZ29yeX08L2gyPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiIH19Pkl0ZW0gTmFtZToge1RpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgzXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRlclwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbjombmJzcDtcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIHtEZXNjcmlwdGlvbn1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpbmsgaHJlZj17ZGV0YWlsTGlua30+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiVmlldyBEZXRhaWxzXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==