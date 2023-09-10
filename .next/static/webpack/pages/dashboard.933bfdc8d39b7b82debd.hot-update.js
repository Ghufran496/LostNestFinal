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
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          style: {
            fontSize: "1.5rem"
          },
          children: Date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          padding: "0.5rem"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: ["Category: ", Category]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
          lineNumber: 73,
          columnNumber: 11
        }, this), Description]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
            lineNumber: 89,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJkYXRhIiwiX2lkIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJkZXRhaWxMaW5rIiwiY2xhc3NlcyIsIml0ZW0iLCJpbWdkaXYiLCJvdmVyZmxvdyIsImNvbnRlbnQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyTGVmdCIsImJvcmRlclJpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwiYWN0aW9ucyIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QjtBQUR1QixvQkFXbkJBLEtBQUssQ0FBQ0MsSUFYYTtBQUFBLE1BR3JCQyxHQUhxQixlQUdyQkEsR0FIcUI7QUFBQSxNQUlyQkMsSUFKcUIsZUFJckJBLElBSnFCO0FBQUEsTUFLckJDLFFBTHFCLGVBS3JCQSxRQUxxQjtBQUFBLE1BTXJCQyxLQU5xQixlQU1yQkEsS0FOcUI7QUFBQSxNQU9yQkMsV0FQcUIsZUFPckJBLFdBUHFCO0FBQUEsTUFRckJDLFFBUnFCLGVBUXJCQSxRQVJxQjtBQUFBLE1BU3JCQyxJQVRxQixlQVNyQkEsSUFUcUI7QUFBQSxNQVVyQkMsVUFWcUIsZUFVckJBLFVBVnFCO0FBYXZCLE1BQU1DLFVBQVUsd0JBQWlCUixHQUFqQixDQUFoQjtBQUVBLHNCQUNFO0FBQUksYUFBUyxFQUFFUywyREFBTyxDQUFDQyxJQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCwyREFBTyxDQUFDRSxNQUF4QjtBQUFBLDZCQUNFO0FBQ0UsV0FBRyxFQUFFSixVQURQO0FBRUUsV0FBRyxFQUFFSixLQUZQO0FBR0UsYUFBSyxFQUFFLEdBSFQ7QUFJRSxjQUFNLEVBQUUsR0FKVjtBQUtFLGFBQUssRUFBRTtBQUFFUyxrQkFBUSxFQUFFO0FBQVo7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBVUU7QUFBSyxlQUFTLEVBQUVILDJEQUFPLENBQUNJLE9BQXhCO0FBQUEsOEJBQ0U7QUFDRSxhQUFLLEVBQUU7QUFDTEMsaUJBQU8sRUFBRSxNQURKO0FBRUxDLHdCQUFjLEVBQUUsZUFGWDtBQUdMQyxnQkFBTSxFQUFFO0FBSEgsU0FEVDtBQUFBLGdDQU9FO0FBQ0UsZUFBSyxFQUFFO0FBQ0xDLDJCQUFlLEVBQUUsU0FEWjtBQUVMQyxtQkFBTyxFQUFFLFVBRko7QUFHTEMsK0JBQW1CLEVBQUUsTUFIaEI7QUFHd0I7QUFDN0JDLGdDQUFvQixFQUFFLE1BSmpCO0FBSXlCO0FBQzlCQyxzQkFBVSxFQUFFLGlCQUxQO0FBSzBCO0FBQy9CQyx1QkFBVyxFQUFFLGlCQU5SO0FBTTJCO0FBQ2hDQyxvQkFBUSxFQUFFLFFBUEw7QUFRTEMsc0JBQVUsRUFBRSxTQVJQO0FBU0xDLHlCQUFhLEVBQUUsV0FUVjtBQVVMQyxpQkFBSyxFQUFFO0FBVkYsV0FEVDtBQUFBLG9CQWNHekI7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBdUJFO0FBQUksZUFBSyxFQUFFO0FBQUVzQixvQkFBUSxFQUFFO0FBQVosV0FBWDtBQUFBLG9CQUFvQ2pCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBMkJFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xZLGlCQUFPLEVBQUU7QUFESixTQURUO0FBQUEsK0JBS0U7QUFBQSxtQ0FBZWhCLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRixlQWtDRTtBQUNFLGFBQUssRUFBRTtBQUNMO0FBQ0FnQixpQkFBTyxFQUFFLFFBRko7QUFHTE8sdUJBQWEsRUFBRTtBQUhWLFNBRFQ7QUFBQSxnQ0FPRTtBQUFNLGVBQUssRUFBRTtBQUFFRCxzQkFBVSxFQUFFLFFBQWQ7QUFBd0JELG9CQUFRLEVBQUU7QUFBbEMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixFQVVHbkIsV0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUF5REU7QUFDRSxlQUFTLEVBQUVLLDJEQUFPLENBQUNrQixPQURyQjtBQUVFLFdBQUssRUFBRTtBQUNMYixlQUFPLEVBQUUsTUFESjtBQUVMQyxzQkFBYyxFQUFFLFFBRlg7QUFHTGEsa0JBQVUsRUFBRTtBQUhQLE9BRlQ7QUFBQSw2QkFRRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRXBCLFVBQVo7QUFBQSwrQkFDRTtBQUFBLGlDQUNFLHFFQUFDLGtEQUFEO0FBQVEsbUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEVEOztLQXpGUVgsUTtBQTJGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjkzM2JmZGM4ZDM5YjdiODJkZWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3RJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XHJcbiAgLy8gY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgVHlwZSxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgVGl0bGUsXHJcbiAgICBEZXNjcmlwdGlvbixcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgRGF0ZSxcclxuICAgIFJlZHVjZWRJbWcsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcblxyXG4gIGNvbnN0IGRldGFpbExpbmsgPSBgL2Rhc2hib2FyZC8ke19pZH1gO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nZGl2fT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e1JlZHVjZWRJbWd9XHJcbiAgICAgICAgICBhbHQ9e1RpdGxlfVxyXG4gICAgICAgICAgd2lkdGg9ezI1MH1cclxuICAgICAgICAgIGhlaWdodD17MTYwfVxyXG4gICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IFwic2Nyb2xsXCIgfX1cclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMXJlbVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMxMTQ2NVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDMwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjFyZW1cIiwgLy8gQWRkIHRoaXMgbGluZVxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjFyZW1cIiwgLy8gQWRkIHRoaXMgbGluZVxyXG4gICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsIC8vIEFkZCB0aGlzIGxpbmUgZm9yIGxlZnQgYm9yZGVyXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsIC8vIEFkZCB0aGlzIGxpbmUgZm9yIHJpZ2h0IGJvcmRlclxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibGlnaHRlclwiLFxyXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1R5cGV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PntEYXRlfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMj5DYXRlZ29yeToge0NhdGVnb3J5fTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgzXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IFwiMXB4IGRvdHRlZCBibGFja1wiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkZXJcIiwgZm9udFNpemU6IFwiMS41cmVtXCIgfX0+XHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uOiZuYnNwO1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAge0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGluayBocmVmPXtkZXRhaWxMaW5rfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJWaWV3IERldGFpbHNcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9