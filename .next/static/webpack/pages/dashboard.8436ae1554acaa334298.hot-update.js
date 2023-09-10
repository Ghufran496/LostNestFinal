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
        height: 160,
        style: {
          overflow: "scroll"
        }
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
            backgroundColor: "#311465",
            padding: "5px 30px",
            border: "1px solid black",
            fontSize: "1.5rem",
            borderRadius: "1rem",
            textTransform: "uppercase",
            color: "white",
            borderTopLeftRadius: "1rem",
            // Add this line
            borderTopRightRadius: "1rem",
            // Add this line
            borderBottom: "none"
          },
          children: Type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            fontSize: "1.5rem"
          },
          children: Date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          padding: "1rem"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Category: ", Category]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        style: {
          border: "1px dotted black",
          padding: "0.5rem",
          textTransform: "capitalize"
        },
        children: Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJkYXRhIiwiX2lkIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJjbGFzc2VzIiwiaXRlbSIsImltZ2RpdiIsIm92ZXJmbG93IiwiY29udGVudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXIiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbSIsImFjdGlvbnMiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QjtBQUR1QixvQkFXbkJBLEtBQUssQ0FBQ0MsSUFYYTtBQUFBLE1BR3JCQyxHQUhxQixlQUdyQkEsR0FIcUI7QUFBQSxNQUlyQkMsSUFKcUIsZUFJckJBLElBSnFCO0FBQUEsTUFLckJDLFFBTHFCLGVBS3JCQSxRQUxxQjtBQUFBLE1BTXJCQyxLQU5xQixlQU1yQkEsS0FOcUI7QUFBQSxNQU9yQkMsV0FQcUIsZUFPckJBLFdBUHFCO0FBQUEsTUFRckJDLFFBUnFCLGVBUXJCQSxRQVJxQjtBQUFBLE1BU3JCQyxJQVRxQixlQVNyQkEsSUFUcUI7QUFBQSxNQVVyQkMsVUFWcUIsZUFVckJBLFVBVnFCO0FBYXZCLHNCQUNFO0FBQUksYUFBUyxFQUFFQywyREFBTyxDQUFDQyxJQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCwyREFBTyxDQUFDRSxNQUF4QjtBQUFBLDZCQUNFO0FBQ0UsV0FBRyxFQUFFSCxVQURQO0FBRUUsV0FBRyxFQUFFSixLQUZQO0FBR0UsYUFBSyxFQUFFLEdBSFQ7QUFJRSxjQUFNLEVBQUUsR0FKVjtBQUtFLGFBQUssRUFBRTtBQUFFUSxrQkFBUSxFQUFFO0FBQVo7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBVUU7QUFBSyxlQUFTLEVBQUVILDJEQUFPLENBQUNJLE9BQXhCO0FBQUEsOEJBQ0U7QUFDRSxhQUFLLEVBQUU7QUFDTEMsaUJBQU8sRUFBRSxNQURKO0FBRUxDLHdCQUFjLEVBQUUsZUFGWDtBQUdMQyxnQkFBTSxFQUFFO0FBSEgsU0FEVDtBQUFBLGdDQU9FO0FBQ0UsZUFBSyxFQUFFO0FBQ0xDLDJCQUFlLEVBQUUsU0FEWjtBQUVMQyxtQkFBTyxFQUFFLFVBRko7QUFHTEMsa0JBQU0sRUFBRSxpQkFISDtBQUlMQyxvQkFBUSxFQUFFLFFBSkw7QUFLTEMsd0JBQVksRUFBRSxNQUxUO0FBTUxDLHlCQUFhLEVBQUUsV0FOVjtBQU9MQyxpQkFBSyxFQUFFLE9BUEY7QUFRTEMsK0JBQW1CLEVBQUUsTUFSaEI7QUFRd0I7QUFDN0JDLGdDQUFvQixFQUFFLE1BVGpCO0FBU3lCO0FBQzlCQyx3QkFBWSxFQUFFO0FBVlQsV0FEVDtBQUFBLG9CQWNHeEI7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBdUJFO0FBQUksZUFBSyxFQUFFO0FBQUVrQixvQkFBUSxFQUFFO0FBQVosV0FBWDtBQUFBLG9CQUFvQ2I7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUEyQkU7QUFDRSxhQUFLLEVBQUU7QUFDTFcsaUJBQU8sRUFBRTtBQURKLFNBRFQ7QUFBQSwrQkFLRTtBQUFBLG1DQUFlZixRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkYsZUFrQ0U7QUFDRSxhQUFLLEVBQUU7QUFDTGdCLGdCQUFNLEVBQUUsa0JBREg7QUFFTEQsaUJBQU8sRUFBRSxRQUZKO0FBR0xJLHVCQUFhLEVBQUU7QUFIVixTQURUO0FBQUEsa0JBT0dqQjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFzREU7QUFDRSxlQUFTLEVBQUVJLDJEQUFPLENBQUNrQixPQURyQjtBQUVFLFdBQUssRUFBRTtBQUNMYixlQUFPLEVBQUUsTUFESjtBQUVMQyxzQkFBYyxFQUFFLFFBRlg7QUFHTGEsa0JBQVUsRUFBRTtBQUhQLE9BRlQ7QUFBQSw2QkFRRSxxRUFBQyxrREFBRDtBQUFRLGVBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1FRDs7S0FoRlE5QixRO0FBa0ZNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuODQzNmFlMTU1NGFjYWEzMzQyOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdEl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgVHlwZSxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgVGl0bGUsXHJcbiAgICBEZXNjcmlwdGlvbixcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgRGF0ZSxcclxuICAgIFJlZHVjZWRJbWcsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdkaXZ9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17UmVkdWNlZEltZ31cclxuICAgICAgICAgIGFsdD17VGl0bGV9XHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNjB9XHJcbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fVxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxcmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzExNDY1XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMzBweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjFyZW1cIiwgLy8gQWRkIHRoaXMgbGluZVxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjFyZW1cIiwgLy8gQWRkIHRoaXMgbGluZVxyXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtUeXBlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT57RGF0ZX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyPkNhdGVnb3J5OiB7Q2F0ZWdvcnl9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDNcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggZG90dGVkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7RGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc31cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXR0b24gY29udGVudD1cIkV4cGxvcmUgRXZlbnRcIj48L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9