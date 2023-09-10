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
  console.log(props.data);
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
        className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: Type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.date,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.address,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
            children: Title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          content: "Explore Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
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

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/feed/PostItem.module.css":
/*!*********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/feed/PostItem.module.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".PostItem_item__RIEGa {\r\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  background-color: white;\r\n  margin: 1rem;\r\n  display: -moz-box;\r\n  display: flex;\r\n\r\n  -moz-box-pack: center;\r\n\r\n       justify-content: center;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n  grid-gap: 1rem;\r\n  gap: 1rem;\r\n  width: 80%;\r\n}\r\n\r\n.PostItem_imgdiv__XatEN img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  height: 10rem;\r\n}\r\n\r\n.PostItem_content__3vHpS {\r\n  width: 100%;\r\n  padding: 0 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.PostItem_content__3vHpS h2 {\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.PostItem_date__3AkAE,\r\n.PostItem_address__CEBMN {\r\n  display: -moz-box;\r\n  display: flex;\r\n  grid-gap: 0.5rem;\r\n  gap: 0.5rem;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n}\r\n\r\n.PostItem_date__3AkAE svg,\r\n.PostItem_address__CEBMN svg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  color: #666666;\r\n}\r\n\r\n.PostItem_content__3vHpS time {\r\n  color: #666666;\r\n  font-weight: bold;\r\n}\r\n\r\n.PostItem_content__3vHpS address {\r\n  margin: 0.5rem 0;\r\n  color: #666666;\r\n  white-space: pre;\r\n}\r\n\r\n.PostItem_actions__2_UeU {\r\n  display: -moz-box;\r\n  display: flex;\r\n  -moz-box-orient: vertical;\r\n  -moz-box-direction: normal;\r\n       flex-direction: column;\r\n  padding: 1rem;\r\n}\r\n\r\n.PostItem_actions__2_UeU a {\r\n  display: block;\r\n}\r\n\r\n.PostItem_actions__2_UeU a span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.PostItem_icon__2Qlti {\r\n  margin-left: 0.5rem;\r\n  display: -moz-inline-box;\r\n  display: inline-flex;\r\n  -moz-box-pack: center;\r\n       justify-content: center;\r\n  -moz-box-align: center;\r\n       align-items: center;\r\n}\r\n\r\n.PostItem_icon__2Qlti svg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .PostItem_item__RIEGa {\r\n    -moz-box-orient: horizontal;\r\n    -moz-box-direction: normal;\r\n         flex-direction: row;\r\n  }\r\n\r\n  .PostItem_item__RIEGa img {\r\n    width: 40%;\r\n    height: 14rem;\r\n  }\r\n\r\n  .PostItem_content__3vHpS {\r\n    width: 60%;\r\n    padding: 0;\r\n    text-align: left;\r\n  }\r\n\r\n  .PostItem_content__3vHpS h2 {\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .PostItem_actions__2_UeU {\r\n    -moz-box-orient: horizontal;\r\n    -moz-box-direction: normal;\r\n         flex-direction: row;\r\n    -moz-box-pack: end;\r\n         justify-content: flex-end;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://components/feed/PostItem.module.css"],"names":[],"mappings":"AAAA;EACE,mFAA2E;UAA3E,2EAA2E;EAC3E,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,iBAAa;EAAb,aAAa;;EAEb,qBAAuB;;OAAvB,uBAAuB;EACvB,sBAAmB;OAAnB,mBAAmB;EACnB,cAAS;EAAT,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,iBAAa;EAAb,aAAa;EACb,gBAAW;EAAX,WAAW;EACX,sBAAmB;OAAnB,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,iBAAa;EAAb,aAAa;EACb,yBAAsB;EAAtB,0BAAsB;OAAtB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,wBAAoB;EAApB,oBAAoB;EACpB,qBAAuB;OAAvB,uBAAuB;EACvB,sBAAmB;OAAnB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE;IACE,2BAAmB;IAAnB,0BAAmB;SAAnB,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,aAAa;EACf;;EAEA;IACE,UAAU;IACV,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,2BAAmB;IAAnB,0BAAmB;SAAnB,mBAAmB;IACnB,kBAAyB;SAAzB,yBAAyB;EAC3B;AACF","sourcesContent":[".item {\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  background-color: white;\r\n  margin: 1rem;\r\n  display: flex;\r\n\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  width: 80%;\r\n}\r\n\r\n.imgdiv img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  height: 10rem;\r\n}\r\n\r\n.content {\r\n  width: 100%;\r\n  padding: 0 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.content h2 {\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.date,\r\n.address {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n}\r\n\r\n.date svg,\r\n.address svg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  color: #666666;\r\n}\r\n\r\n.content time {\r\n  color: #666666;\r\n  font-weight: bold;\r\n}\r\n\r\n.content address {\r\n  margin: 0.5rem 0;\r\n  color: #666666;\r\n  white-space: pre;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n}\r\n\r\n.actions a {\r\n  display: block;\r\n}\r\n\r\n.actions a span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.icon {\r\n  margin-left: 0.5rem;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.icon svg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .item {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .item img {\r\n    width: 40%;\r\n    height: 14rem;\r\n  }\r\n\r\n  .content {\r\n    width: 60%;\r\n    padding: 0;\r\n    text-align: left;\r\n  }\r\n\r\n  .content h2 {\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .actions {\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"item": "PostItem_item__RIEGa",
	"imgdiv": "PostItem_imgdiv__XatEN",
	"content": "PostItem_content__3vHpS",
	"date": "PostItem_date__3AkAE",
	"address": "PostItem_address__CEBMN",
	"actions": "PostItem_actions__2_UeU",
	"icon": "PostItem_icon__2Qlti"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkL1Bvc3RJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZlZWQvUG9zdEl0ZW0ubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJQb3N0SXRlbSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJfaWQiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiUmVkdWNlZEltZyIsImNsYXNzZXMiLCJpdGVtIiwiaW1nZGl2IiwiY29udGVudCIsInN1bW1hcnkiLCJkYXRlIiwiYWRkcmVzcyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxJQUFsQjtBQUR1QixvQkFXbkJILEtBQUssQ0FBQ0csSUFYYTtBQUFBLE1BR3JCQyxHQUhxQixlQUdyQkEsR0FIcUI7QUFBQSxNQUlyQkMsSUFKcUIsZUFJckJBLElBSnFCO0FBQUEsTUFLckJDLFFBTHFCLGVBS3JCQSxRQUxxQjtBQUFBLE1BTXJCQyxLQU5xQixlQU1yQkEsS0FOcUI7QUFBQSxNQU9yQkMsV0FQcUIsZUFPckJBLFdBUHFCO0FBQUEsTUFRckJDLFFBUnFCLGVBUXJCQSxRQVJxQjtBQUFBLE1BU3JCQyxJQVRxQixlQVNyQkEsSUFUcUI7QUFBQSxNQVVyQkMsVUFWcUIsZUFVckJBLFVBVnFCO0FBYXZCLHNCQUNFO0FBQUksYUFBUyxFQUFFQywyREFBTyxDQUFDQyxJQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCwyREFBTyxDQUFDRSxNQUF4QjtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFSCxVQUFWO0FBQXNCLFdBQUcsRUFBRUosS0FBM0I7QUFBa0MsYUFBSyxFQUFFLEdB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c3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmIwN2M5ZjllOTg1ZmI2NjZlMjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3RJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0SXRlbShwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpO1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIFR5cGUsXHJcbiAgICBDYXRlZ29yeSxcclxuICAgIFRpdGxlLFxyXG4gICAgRGVzY3JpcHRpb24sXHJcbiAgICBRdWVzdGlvbixcclxuICAgIERhdGUsXHJcbiAgICBSZWR1Y2VkSW1nLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nZGl2fT5cclxuICAgICAgICA8aW1nIHNyYz17UmVkdWNlZEltZ30gYWx0PXtUaXRsZX0gd2lkdGg9ezI1MH0gaGVpZ2h0PXsxNjB9PjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XHJcbiAgICAgICAgICA8aDE+e1R5cGV9PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxyXG4gICAgICAgICAgICB7LyogPERhdGVJY29uIC8+ICovfVxyXG4gICAgICAgICAgICA8dGltZT57VGl0bGV9PC90aW1lPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRyZXNzfT5cclxuICAgICAgICAgICAgey8qIDxBZGRyZXNzSWNvbiAvPiAqL31cclxuICAgICAgICAgICAgPGFkZHJlc3M+e1RpdGxlfTwvYWRkcmVzcz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiRXhwbG9yZSBFdmVudFwiPjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEl0ZW07XHJcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Qb3N0SXRlbV9pdGVtX19SSUVHYSB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMXB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxcHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcblxcclxcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBncmlkLWdhcDogMXJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5Qb3N0SXRlbV9pbWdkaXZfX1hhdEVOIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLlBvc3RJdGVtX2NvbnRlbnRfXzN2SHBTIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uUG9zdEl0ZW1fY29udGVudF9fM3ZIcFMgaDIge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLlBvc3RJdGVtX2RhdGVfXzNBa0FFLFxcclxcbi5Qb3N0SXRlbV9hZGRyZXNzX19DRUJNTiB7XFxyXFxuICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBncmlkLWdhcDogMC41cmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uUG9zdEl0ZW1fZGF0ZV9fM0FrQUUgc3ZnLFxcclxcbi5Qb3N0SXRlbV9hZGRyZXNzX19DRUJNTiBzdmcge1xcclxcbiAgd2lkdGg6IDEuMjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogIzY2NjY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLlBvc3RJdGVtX2NvbnRlbnRfXzN2SHBTIHRpbWUge1xcclxcbiAgY29sb3I6ICM2NjY2NjY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLlBvc3RJdGVtX2NvbnRlbnRfXzN2SHBTIGFkZHJlc3Mge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG4gIGNvbG9yOiAjNjY2NjY2O1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG59XFxyXFxuXFxyXFxuLlBvc3RJdGVtX2FjdGlvbnNfXzJfVWVVIHtcXHJcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5Qb3N0SXRlbV9hY3Rpb25zX18yX1VlVSBhIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uUG9zdEl0ZW1fYWN0aW9uc19fMl9VZVUgYSBzcGFuIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5Qb3N0SXRlbV9pY29uX18yUWx0aSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgZGlzcGxheTogLW1vei1pbmxpbmUtYm94O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlBvc3RJdGVtX2ljb25fXzJRbHRpIHN2ZyB7XFxyXFxuICB3aWR0aDogMS4yNXJlbTtcXHJcXG4gIGhlaWdodDogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuUG9zdEl0ZW1faXRlbV9fUklFR2Ege1xcclxcbiAgICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxyXFxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUG9zdEl0ZW1faXRlbV9fUklFR2EgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5Qb3N0SXRlbV9jb250ZW50X18zdkhwUyB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuUG9zdEl0ZW1fY29udGVudF9fM3ZIcFMgaDIge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5Qb3N0SXRlbV9hY3Rpb25zX18yX1VlVSB7XFxyXFxuICAgIC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXHJcXG4gICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxyXFxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgLW1vei1ib3gtcGFjazogZW5kO1xcclxcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL2ZlZWQvUG9zdEl0ZW0ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1GQUEyRTtVQUEzRSwyRUFBMkU7RUFDM0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFhO0VBQWIsYUFBYTs7RUFFYixxQkFBdUI7O09BQXZCLHVCQUF1QjtFQUN2QixzQkFBbUI7T0FBbkIsbUJBQW1CO0VBQ25CLGNBQVM7RUFBVCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxpQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBVztFQUFYLFdBQVc7RUFDWCxzQkFBbUI7T0FBbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFzQjtFQUF0QiwwQkFBc0I7T0FBdEIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixxQkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsMkJBQW1CO0lBQW5CLDBCQUFtQjtTQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMkJBQW1CO0lBQW5CLDBCQUFtQjtTQUFuQixtQkFBbUI7SUFDbkIsa0JBQXlCO1NBQXpCLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pdGVtIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMXB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nZGl2IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IGgyIHtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5kYXRlLFxcclxcbi5hZGRyZXNzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHN2ZyxcXHJcXG4uYWRkcmVzcyBzdmcge1xcclxcbiAgd2lkdGg6IDEuMjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogIzY2NjY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgdGltZSB7XFxyXFxuICBjb2xvcjogIzY2NjY2NjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCBhZGRyZXNzIHtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxyXFxuICBjb2xvcjogIzY2NjY2NjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbnMgYSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbnMgYSBzcGFuIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24gc3ZnIHtcXHJcXG4gIHdpZHRoOiAxLjI1cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5pdGVtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pdGVtIGltZyB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogMTRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudCBoMiB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjdGlvbnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJpdGVtXCI6IFwiUG9zdEl0ZW1faXRlbV9fUklFR2FcIixcblx0XCJpbWdkaXZcIjogXCJQb3N0SXRlbV9pbWdkaXZfX1hhdEVOXCIsXG5cdFwiY29udGVudFwiOiBcIlBvc3RJdGVtX2NvbnRlbnRfXzN2SHBTXCIsXG5cdFwiZGF0ZVwiOiBcIlBvc3RJdGVtX2RhdGVfXzNBa0FFXCIsXG5cdFwiYWRkcmVzc1wiOiBcIlBvc3RJdGVtX2FkZHJlc3NfX0NFQk1OXCIsXG5cdFwiYWN0aW9uc1wiOiBcIlBvc3RJdGVtX2FjdGlvbnNfXzJfVWVVXCIsXG5cdFwiaWNvblwiOiBcIlBvc3RJdGVtX2ljb25fXzJRbHRpXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==