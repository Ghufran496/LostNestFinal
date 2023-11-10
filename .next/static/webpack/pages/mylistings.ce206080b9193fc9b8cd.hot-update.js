webpackHotUpdate_N_E("pages/mylistings",{

/***/ "./components/mylistings/SpecificItem.js":
/*!***********************************************!*\
  !*** ./components/mylistings/SpecificItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Specificitem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Specificitem.module.css */ "./components/mylistings/Specificitem.module.css");
/* harmony import */ var _Specificitem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Specificitem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\mylistings\\SpecificItem.js";





function Specificitem(props) {
  var _props$data = props.data,
      _id = _props$data._id,
      Type = _props$data.Type,
      Category = _props$data.Category,
      Title = _props$data.Title,
      Description = _props$data.Description,
      Question = _props$data.Question,
      Date = _props$data.Date,
      ReducedImg = _props$data.ReducedImg,
      posterEmail = _props$data.posterEmail;
  var detailLink = "/mylistings/".concat(_id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _Specificitem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Specificitem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgdiv,
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
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginLeft: "0.5rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          gridGap: "1.5rem",
          marginTop: "1rem",
          marginLeft: "1.5rem"
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
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            fontSize: "1.5rem"
          },
          children: Date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            children: "Category:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), " ", Category]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          style: {
            textTransform: "capitalize"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            children: "Item Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), " ", Title]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Specificitem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: detailLink,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              content: "Check Response"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_c = Specificitem;
/* harmony default export */ __webpack_exports__["default"] = (Specificitem);

var _c;

$RefreshReg$(_c, "Specificitem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9teWxpc3RpbmdzL1NwZWNpZmljSXRlbS5qcyJdLCJuYW1lcyI6WyJTcGVjaWZpY2l0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiUmVkdWNlZEltZyIsInBvc3RlckVtYWlsIiwiZGV0YWlsTGluayIsImNsYXNzZXMiLCJpdGVtIiwiaW1nZGl2IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJncmlkR2FwIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBLG9CQVd2QkEsS0FBSyxDQUFDQyxJQVhpQjtBQUFBLE1BRXpCQyxHQUZ5QixlQUV6QkEsR0FGeUI7QUFBQSxNQUd6QkMsSUFIeUIsZUFHekJBLElBSHlCO0FBQUEsTUFJekJDLFFBSnlCLGVBSXpCQSxRQUp5QjtBQUFBLE1BS3pCQyxLQUx5QixlQUt6QkEsS0FMeUI7QUFBQSxNQU16QkMsV0FOeUIsZUFNekJBLFdBTnlCO0FBQUEsTUFPekJDLFFBUHlCLGVBT3pCQSxRQVB5QjtBQUFBLE1BUXpCQyxJQVJ5QixlQVF6QkEsSUFSeUI7QUFBQSxNQVN6QkMsVUFUeUIsZUFTekJBLFVBVHlCO0FBQUEs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QkFBTyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0ZEOztLQXZHUVosWTtBQXlHTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlsaXN0aW5ncy5jZTIwNjA4MGI5MTkzZmM5YjhjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1NwZWNpZmljaXRlbS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVjaWZpY2l0ZW0ocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBUeXBlLFxyXG4gICAgQ2F0ZWdvcnksXHJcbiAgICBUaXRsZSxcclxuICAgIERlc2NyaXB0aW9uLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBEYXRlLFxyXG4gICAgUmVkdWNlZEltZyxcclxuICAgIHBvc3RlckVtYWlsLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG5cclxuICBjb25zdCBkZXRhaWxMaW5rID0gYC9teWxpc3RpbmdzLyR7X2lkfWA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2Rpdn1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17UmVkdWNlZEltZ31cclxuICAgICAgICAgIGFsdD17VGl0bGV9XHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNjB9XHJcbiAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fVxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGdyaWRHYXA6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzExNDY1XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMzBweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiMXJlbVwiLCAvLyBBZGQgdGhpcyBsaW5lXHJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiMXJlbVwiLCAvLyBBZGQgdGhpcyBsaW5lXHJcbiAgICAgICAgICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgYmxhY2tcIiwgLy8gQWRkIHRoaXMgbGluZSBmb3IgbGVmdCBib3JkZXJcclxuICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIiwgLy8gQWRkIHRoaXMgbGluZSBmb3IgcmlnaHQgYm9yZGVyXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJsaWdodGVyXCIsXHJcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7VHlwZX1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0+e0RhdGV9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiIH19PlxyXG4gICAgICAgICAgICA8aT5DYXRlZ29yeTo8L2k+IHtDYXRlZ29yeX1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIgfX0+XHJcbiAgICAgICAgICAgIDxpPkl0ZW0gTmFtZTo8L2k+IHtUaXRsZX1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtkZXRhaWxMaW5rfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiQ2hlY2sgUmVzcG9uc2VcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVjaWZpY2l0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=