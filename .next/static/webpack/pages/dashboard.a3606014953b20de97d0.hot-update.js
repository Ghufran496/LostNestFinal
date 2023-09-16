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
  var detailLink = "/dashboard/".concat(_id); // const handleViewDetails = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000); // Simulate a loading time of 5 seconds
  // };
  // if (isLoading) {
  //   return <Loading />;
  // }

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
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            fontSize: "1.5rem"
          },
          children: Date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
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
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          style: {
            textTransform: "capitalize"
          },
          children: ["Item Name: ", Title]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
          lineNumber: 94,
          columnNumber: 11
        }, this), Description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
            lineNumber: 115,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJkYXRhIiwiX2lkIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJkZXRhaWxMaW5rIiwiY2xhc3NlcyIsIml0ZW0iLCJpbWdkaXYiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3ZlcmZsb3ciLCJjb250ZW50IiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZsZXhEaXJlY3Rpb24iLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkI7QUFDQTtBQUZ1QixvQkFZbkJBLEtBQUssQ0FBQ0MsSUFaYTtBQUFBLE1BSXJCQyxHQUpxQixlQUlyQkEsR0FKcUI7QUFBQSxNQUtyQkMsSUFMcUIsZUFLckJBLElBTHFCO0FBQUEsTUFNckJDLFFBTnFCLGVBTXJCQSxRQU5xQjtBQUFBLE1BT3JCQyxLQVBxQixlQU9yQkEsS0FQcUI7QUFBQSxNQVFyQkMsV0FScUIsZUFRckJBLFdBUnFCO0FBQUEsTUFTckJDLFFBVHFCLGVBU3JCQSxRQVRxQjtBQUFBLE1BVXJCQyxJQVZxQixlQVVyQkEsSUFWcUI7QUFBQSxNQVdyQkMsVUFYcUIsZUFXckJBLFVBWHFCO0FBY3ZCLE1BQU1DLFVBQVUsd0JBQWlCUixHQUFq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QUNFO0FBQUEsaUNBQ0UscUVBQUMsa0RBQUQ7QUFBUSxtQkFBTyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5RkQ7O0tBbkhRWCxRO0FBcUhNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuYTM2MDYwMTQ5NTNiMjBkZTk3ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0SXRlbS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgLy9jb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIFR5cGUsXHJcbiAgICBDYXRlZ29yeSxcclxuICAgIFRpdGxlLFxyXG4gICAgRGVzY3JpcHRpb24sXHJcbiAgICBRdWVzdGlvbixcclxuICAgIERhdGUsXHJcbiAgICBSZWR1Y2VkSW1nLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG5cclxuICBjb25zdCBkZXRhaWxMaW5rID0gYC9kYXNoYm9hcmQvJHtfaWR9YDtcclxuICAvLyBjb25zdCBoYW5kbGVWaWV3RGV0YWlscyA9ICgpID0+IHtcclxuICAvLyAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAvLyAgIH0sIDUwMDApOyAvLyBTaW11bGF0ZSBhIGxvYWRpbmcgdGltZSBvZiA1IHNlY29uZHNcclxuICAvLyB9O1xyXG4gIC8vIGlmIChpc0xvYWRpbmcpIHtcclxuICAvLyAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2Rpdn1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17UmVkdWNlZEltZ31cclxuICAgICAgICAgIGFsdD17VGl0bGV9XHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNjB9XHJcbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fVxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzExNDY1XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMzBweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiMXJlbVwiLCAvLyBBZGQgdGhpcyBsaW5lXHJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiMXJlbVwiLCAvLyBBZGQgdGhpcyBsaW5lXHJcbiAgICAgICAgICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgYmxhY2tcIiwgLy8gQWRkIHRoaXMgbGluZSBmb3IgbGVmdCBib3JkZXJcclxuICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIiwgLy8gQWRkIHRoaXMgbGluZSBmb3IgcmlnaHQgYm9yZGVyXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJsaWdodGVyXCIsXHJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7VHlwZX1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0+e0RhdGV9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiIH19PkNhdGVnb3J5OiB7Q2F0ZWdvcnl9PC9oMj5cclxuICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIiB9fT5JdGVtIE5hbWU6IHtUaXRsZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoM1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVzY3JpcHRpb246Jm5ic3A7XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB7RGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2RldGFpbExpbmt9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlZpZXcgRGV0YWlsc1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=