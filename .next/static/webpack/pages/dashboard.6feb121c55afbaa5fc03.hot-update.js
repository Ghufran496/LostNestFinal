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


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\PostItem.js",
    _s = $RefreshSig$();

// import React from "react";
// import classes from "./PostItem.module.css";
// import Button from "../UI/Button";
// import Link from "next/link";
// import Loading from "../UI/Loading";
// function PostItem(props) {
//   // console.log(props.data);
//   const {
//     _id,
//     Type,
//     Category,
//     Title,
//     Description,
//     Question,
//     Date,
//     ReducedImg,
//   } = props.data;
//   const detailLink = `/dashboard/${_id}`;
//   return (
//     <li className={classes.item}>
//       <div
//         className={classes.imgdiv}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src={ReducedImg}
//           alt={Title}
//           width={250}
//           height={160}
//           style={{ overflow: "scroll" }}
//         ></img>
//       </div>
//       <div className={classes.content}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "1rem",
//           }}
//         >
//           <h1
//             style={{
//               backgroundColor: "#311465",
//               padding: "5px 30px",
//               borderTopLeftRadius: "1rem", // Add this line
//               borderTopRightRadius: "1rem", // Add this line
//               borderLeft: "1px solid black", // Add this line for left border
//               borderRight: "1px solid black", // Add this line for right border
//               fontSize: "1.5rem",
//               fontWeight: "lighter",
//               textTransform: "uppercase",
//               color: "white",
//             }}
//           >
//             {Type}
//           </h1>
//           <h3 style={{ fontSize: "1.5rem" }}>{Date}</h3>
//         </div>
//         <div
//           style={{
//             marginTop: "2rem",
//             marginBottom: "1rem",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//           }}
//         >
//           <h2 style={{ textTransform: "capitalize" }}>Category: {Category}</h2>
//           <h2 style={{ textTransform: "capitalize" }}>Item Name: {Title}</h2>
//         </div>
//         <h3
//           style={{
//             textTransform: "capitalize",
//           }}
//         >
//           <span
//             style={{
//               fontWeight: "bolder",
//               fontSize: "1.5rem",
//             }}
//           >
//             Description:&nbsp;
//           </span>
//           {Description}
//         </h3>
//       </div>
//       <div
//         className={classes.actions}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Link href={detailLink}>
//           <a>
//             <Button content="View Details" />
//           </a>
//         </Link>
//       </div>
//     </li>
//   );
// }
// export default PostItem;






function PostItem(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

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
    children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: detailLink,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          content: "View Details",
          onClick: handleViewDetails
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 5
  }, this);
}

_s(PostItem, "EmvgwIb3cHpoFpeP+WmEDbjx4y4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRhdGEiLCJfaWQiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiUmVkdWNlZEltZyIsImRldGFpbExpbmsiLCJoYW5kbGVWaWV3RGV0YWlscyIsInNldFRpbWVvdXQiLCJjbGFzc2VzIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsS0FBRCxDQURuQjtBQUFBLE1BQ2hCQyxTQURnQjtBQUFBLE1BQ0xDLFlBREs7O0FBQUEsb0JBWW5CSCxLQUFLLENBQUNJLElBWmE7QUFBQSxNQUlyQkMsR0FKcUIsZUFJckJBLEdBSnFCO0FBQUEsTUFLckJDLElBTHFCLGVBS3JCQSxJQUxxQjtBQUFBLE1BTXJCQyxRQU5xQixlQU1yQkEsUUFOcUI7QUFBQSxNQU9yQkMsS0FQcUIsZUFPckJBLEtBUHFCO0FBQUEsTUFRckJDLFdBUnFCLGVBUXJCQSxXQVJxQjtBQUFBLE1BU3JCQyxRQVRxQixlQVNyQkEsUUFUcUI7QUFBQSxNQVVyQkMsSUFWcUIsZUFVckJBLElBVnFCO0FBQUEsTUFXckJDLFVBWHFCLGVBV3JCQSxVQVhxQjtBQWN2QixNQUFNQyxVQUFVLHdCQUFpQlIsR0FBakIsQ0FBaEI7O0FBRUEsTUFBTVMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCWCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVBWSxjQUFVLENBQUMsWUFBTTtBQUNmWixrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVYsQ0FIOEIsQ0FLcEI7QUFDWCxHQU5EOztBQVFBLHNCQUNFO0FBQUksYUFBUyxFQUFFYSwyREFBTyxDQUFDQyxJQUF2QjtBQUFBLGVBRUdmLFNBQVMsaUJBQUkscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZoQixFQUU2QixHQUY3QixlQUlFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFVyxVQUFaO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRSxxRUFBQyxrREFBRDtBQUFRLGlCQUFPLEVBQUMsY0FBaEI7QUFBK0IsaUJBQU8sRUFBRUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FwQ1FmLFE7O0tBQUFBLFE7QUFzQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC42ZmViMTIxYzU1YWZiYWE1ZmMwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0SXRlbS5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbi8vIGZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XHJcbi8vICAgLy8gY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XHJcbi8vICAgY29uc3Qge1xyXG4vLyAgICAgX2lkLFxyXG4vLyAgICAgVHlwZSxcclxuLy8gICAgIENhdGVnb3J5LFxyXG4vLyAgICAgVGl0bGUsXHJcbi8vICAgICBEZXNjcmlwdGlvbixcclxuLy8gICAgIFF1ZXN0aW9uLFxyXG4vLyAgICAgRGF0ZSxcclxuLy8gICAgIFJlZHVjZWRJbWcsXHJcbi8vICAgfSA9IHByb3BzLmRhdGE7XHJcblxyXG4vLyAgIGNvbnN0IGRldGFpbExpbmsgPSBgL2Rhc2hib2FyZC8ke19pZH1gO1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuLy8gICAgICAgPGRpdlxyXG4vLyAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdkaXZ9XHJcbi8vICAgICAgICAgc3R5bGU9e3tcclxuLy8gICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4vLyAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbi8vICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4vLyAgICAgICAgIH19XHJcbi8vICAgICAgID5cclxuLy8gICAgICAgICA8aW1nXHJcbi8vICAgICAgICAgICBzcmM9e1JlZHVjZWRJbWd9XHJcbi8vICAgICAgICAgICBhbHQ9e1RpdGxlfVxyXG4vLyAgICAgICAgICAgd2lkdGg9ezI1MH1cclxuLy8gICAgICAgICAgIGhlaWdodD17MTYwfVxyXG4vLyAgICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6IFwic2Nyb2xsXCIgfX1cclxuLy8gICAgICAgICA+PC9pbWc+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuLy8gICAgICAgICA8ZGl2XHJcbi8vICAgICAgICAgICBzdHlsZT17e1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuLy8gICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4vLyAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4vLyAgICAgICAgICAgfX1cclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICA8aDFcclxuLy8gICAgICAgICAgICAgc3R5bGU9e3tcclxuLy8gICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMxMTQ2NVwiLFxyXG4vLyAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDMwcHhcIixcclxuLy8gICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBcIjFyZW1cIiwgLy8gQWRkIHRoaXMgbGluZVxyXG4vLyAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjFyZW1cIiwgLy8gQWRkIHRoaXMgbGluZVxyXG4vLyAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsIC8vIEFkZCB0aGlzIGxpbmUgZm9yIGxlZnQgYm9yZGVyXHJcbi8vICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsIC8vIEFkZCB0aGlzIGxpbmUgZm9yIHJpZ2h0IGJvcmRlclxyXG4vLyAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4vLyAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibGlnaHRlclwiLFxyXG4vLyAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbi8vICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuLy8gICAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAge1R5cGV9XHJcbi8vICAgICAgICAgICA8L2gxPlxyXG4vLyAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PntEYXRlfTwvaDM+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgIDxkaXZcclxuLy8gICAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXHJcbi8vICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4vLyAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4vLyAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIiB9fT5DYXRlZ29yeToge0NhdGVnb3J5fTwvaDI+XHJcbi8vICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIgfX0+SXRlbSBOYW1lOiB7VGl0bGV9PC9oMj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8aDNcclxuLy8gICAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4vLyAgICAgICAgICAgfX1cclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICA8c3BhblxyXG4vLyAgICAgICAgICAgICBzdHlsZT17e1xyXG4vLyAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIsXHJcbi8vICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbi8vICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgIERlc2NyaXB0aW9uOiZuYnNwO1xyXG4vLyAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAge0Rlc2NyaXB0aW9ufVxyXG4vLyAgICAgICAgIDwvaDM+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8ZGl2XHJcbi8vICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9XHJcbi8vICAgICAgICAgc3R5bGU9e3tcclxuLy8gICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4vLyAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbi8vICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4vLyAgICAgICAgIH19XHJcbi8vICAgICAgID5cclxuLy8gICAgICAgICA8TGluayBocmVmPXtkZXRhaWxMaW5rfT5cclxuLy8gICAgICAgICAgIDxhPlxyXG4vLyAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJWaWV3IERldGFpbHNcIiAvPlxyXG4vLyAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2xpPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3RJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RJdGVtKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgVHlwZSxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgVGl0bGUsXHJcbiAgICBEZXNjcmlwdGlvbixcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgRGF0ZSxcclxuICAgIFJlZHVjZWRJbWcsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcblxyXG4gIGNvbnN0IGRldGFpbExpbmsgPSBgL2Rhc2hib2FyZC8ke19pZH1gO1xyXG5cclxuICBjb25zdCBoYW5kbGVWaWV3RGV0YWlscyA9ICgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMDApOyAvLyBTaW11bGF0ZSBhIGxvYWRpbmcgdGltZSBvZiA1IHNlY29uZHNcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgey8qIChSZXN0IG9mIHRoZSBjb21wb25lbnQgY29kZSByZW1haW5zIHRoZSBzYW1lKSAqL31cclxuICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZyAvPn17XCIgXCJ9XHJcbiAgICAgIHsvKiBSZW5kZXIgTG9hZGluZyBjb21wb25lbnQgaWYgaXNMb2FkaW5nIGlzIHRydWUgKi99XHJcbiAgICAgIDxMaW5rIGhyZWY9e2RldGFpbExpbmt9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiVmlldyBEZXRhaWxzXCIgb25DbGljaz17aGFuZGxlVmlld0RldGFpbHN9IC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9