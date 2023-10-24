webpackHotUpdate_N_E("pages/postfounditem",{

/***/ "./components/UI/Loader.js":
false,

/***/ "./components/UI/Loader.module.css":
false,

/***/ "./components/postcomp/FoundForm.js":
/*!******************************************!*\
  !*** ./components/postcomp/FoundForm.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// import React from "react";
// import classes from "./FoundForm.module.css";
// import Button from "../UI/Button";
// import { useRef, useState } from "react";
// import Loader from "../UI/Loader";
// async function sendPostData(
//   Type,
//   Category,
//   Title,
//   Description,
//   Question,
//   Date,
//   imageInbase64
// ) {
//   const response = await fetch("/api/post/postitem", {
//     method: "POST",
//     body: JSON.stringify({
//       Type,
//       Category,
//       Title,
//       Description,
//       Question,
//       Date,
//       ReducedImg: imageInbase64,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.message || "Something went wrong!");
//   }
//   return data;
// }
// function FoundForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isImage, setIsImage] = useState("");
//   const typeInputRef = useRef();
//   const categoryInputRef = useRef();
//   const titleInputRef = useRef();
//   const descriptionInputRef = useRef();
//   const questionInputRef = useRef();
//   const dateInputRef = useRef();
//   function converttobase64(e) {
//     // console.log(e);
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = () => {
//       //console.log(reader.result);
//       setIsImage(reader.result);
//     };
//     reader.onerror = () => {
//       console.log("error", error);
//     };
//   }
//   const postSubmitHandler = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     const enteredType = typeInputRef.current.value;
//     const enteredCategory = categoryInputRef.current.value;
//     const enteredTitle = titleInputRef.current.value;
//     const enteredDescription = descriptionInputRef.current.value;
//     const enteredQuestion = questionInputRef.current.value;
//     const enteredDate = dateInputRef.current.value;
//     const humanReadableDate = new Date(enteredDate).toLocaleDateString(
//       "en-US",
//       {
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//       }
//     );
//     try {
//       const result = await sendPostData(
//         enteredType,
//         enteredCategory,
//         enteredTitle,
//         enteredDescription,
//         enteredQuestion,
//         humanReadableDate,
//         isImage
//       );
//       console.log(result);
//       event.target.reset(); // This resets the form
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   if (isLoading) {
//     return <Loader />;
//   }
//   return (
//     <>
//       <h1 className={classes.head1}>Post new Item as Found Item</h1>
//       <h2>Please Provide genunine Informations only.</h2>
//       <form className={classes.form} onSubmit={postSubmitHandler}>
//         <select name="item" className={classes.customselect} ref={typeInputRef}>
//           <option value="Found">Found</option>
//         </select>
//         <select
//           name="category"
//           className={classes.customselect}
//           ref={categoryInputRef}
//         >
//           <option value="" disabled selected>
//             Category
//           </option>
//           <option value="Wallet">Wallet</option>
//           <option value="ID Card / Student Card">ID Card / Student Card</option>
//           <option value="Smart Phone / Laptop">Smart Phone / Laptop</option>
//           <option value="Keys">Keys</option>
//           <option value="Others">Others</option>
//         </select>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label
//             htmlFor="name"
//             style={{ fontSize: "2rem", fontWeight: "bolder" }}
//           >
//             Item Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Title"
//             className={classes.customselect}
//             ref={titleInputRef}
//           ></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label
//             htmlFor="description"
//             style={{ fontSize: "2rem", fontWeight: "bolder" }}
//           >
//             Description
//           </label>
//           <textarea
//             type="text"
//             name="description"
//             placeholder="Description about item (like location etc...)"
//             className={classes.customselect}
//             ref={descriptionInputRef}
//             rows="5"
//           ></textarea>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label
//             htmlFor="question"
//             style={{ fontSize: "2rem", fontWeight: "bolder" }}
//           >
//             Enter question based on an item.
//           </label>
//           <input
//             type="text"
//             name="question"
//             placeholder="Ex:- What is the color of the phone?"
//             className={classes.customselect}
//             ref={questionInputRef}
//           ></input>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label
//             htmlFor="date"
//             style={{ fontSize: "2rem", fontWeight: "bolder" }}
//           >
//             Select a Date:
//           </label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             className={classes.customselect}
//             ref={dateInputRef}
//           ></input>
//         </div>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           accept="image/*"
//           className={classes.customselect}
//           onChange={converttobase64}
//         />
//         <Button content="Post"></Button>
//       </form>
//     </>
//   );
// }
// export default FoundForm;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./components/postcomp/FoundForm.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loader.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/postcomp/FoundForm.module.css":
false,

/***/ "./pages/postfounditem/index.js":
/*!**************************************!*\
  !*** ./pages/postfounditem/index.js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_postcomp_FoundForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postcomp/FoundForm */ "./components/postcomp/FoundForm.js");
/* harmony import */ var _components_postcomp_FoundForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_postcomp_FoundForm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostItem.module.css */ "./pages/postfounditem/PostItem.module.css");
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_postcomp_FoundNewItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/postcomp/FoundNewItem */ "./components/postcomp/FoundNewItem.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\postfounditem\\index.js";







function PostLostItem() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Post Found Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "If you have found anything post here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/images/logos.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_postcomp_FoundNewItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = PostLostItem;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (PostLostItem);

var _c;

$RefreshReg$(_c, "PostLostItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Gb3VuZEZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3Rmb3VuZGl0ZW0vaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdExvc3RJdGVtIiwiY2xhc3NlcyIsImNlbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQ0EsU0FBU0EsWUFBVCxHQUF3QjtBQUN0QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFNRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRTtBQUFLLGVBQVMsRUFBRUMsMkRBQU8sQ0FBQ0MsTUFBeEI7QUFBQSw2QkFDRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0tBaEJRRixZOztBQWlDTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdGZvdW5kaXRlbS4zNWE2OGZkMTkwM2NjZTIyMGRjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Gb3VuZEZvcm0ubW9kdWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuLy8gaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9VSS9Mb2FkZXJcIjtcclxuLy8gYXN5bmMgZnVuY3Rpb24gc2VuZFBvc3REYXRhKFxyXG4vLyAgIFR5cGUsXHJcbi8vICAgQ2F0ZWdvcnksXHJcbi8vICAgVGl0bGUsXHJcbi8vICAgRGVzY3JpcHRpb24sXHJcbi8vICAgUXVlc3Rpb24sXHJcbi8vICAgRGF0ZSxcclxuLy8gICBpbWFnZUluYmFzZTY0XHJcbi8vICkge1xyXG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIiwge1xyXG4vLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuLy8gICAgICAgVHlwZSxcclxuLy8gICAgICAgQ2F0ZWdvcnksXHJcbi8vICAgICAgIFRpdGxlLFxyXG4vLyAgICAgICBEZXNjcmlwdGlvbixcclxuLy8gICAgICAgUXVlc3Rpb24sXHJcbi8vICAgICAgIERhdGUsXHJcbi8vICAgICAgIFJlZHVjZWRJbWc6IGltYWdlSW5iYXNlNjQsXHJcbi8vICAgICB9KSxcclxuLy8gICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuLy8gICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIGRhdGE7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gRm91bmRGb3JtKCkge1xyXG4vLyAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbi8vICAgY29uc3QgW2lzSW1hZ2UsIHNldElzSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbi8vICAgY29uc3QgdHlwZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbi8vICAgY29uc3QgY2F0ZWdvcnlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4vLyAgIGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuLy8gICBjb25zdCBkZXNjcmlwdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbi8vICAgY29uc3QgcXVlc3Rpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4vLyAgIGNvbnN0IGRhdGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuLy8gICBmdW5jdGlvbiBjb252ZXJ0dG9iYXNlNjQoZSkge1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcblxyXG4vLyAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbi8vICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcblxyXG4vLyAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuLy8gICAgICAgLy9jb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0KTtcclxuLy8gICAgICAgc2V0SXNJbWFnZShyZWFkZXIucmVzdWx0KTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcbi8vICAgY29uc3QgcG9zdFN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4vLyAgICAgY29uc3QgZW50ZXJlZFR5cGUgPSB0eXBlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGVudGVyZWRDYXRlZ29yeSA9IGNhdGVnb3J5SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRpdGxlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGVudGVyZWRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuLy8gICAgIGNvbnN0IGVudGVyZWREYXRlID0gZGF0ZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4vLyAgICAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShlbnRlcmVkRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4vLyAgICAgICBcImVuLVVTXCIsXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4vLyAgICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuLy8gICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kUG9zdERhdGEoXHJcbi8vICAgICAgICAgZW50ZXJlZFR5cGUsXHJcbi8vICAgICAgICAgZW50ZXJlZENhdGVnb3J5LFxyXG4vLyAgICAgICAgIGVudGVyZWRUaXRsZSxcclxuLy8gICAgICAgICBlbnRlcmVkRGVzY3JpcHRpb24sXHJcbi8vICAgICAgICAgZW50ZXJlZFF1ZXN0aW9uLFxyXG4vLyAgICAgICAgIGh1bWFuUmVhZGFibGVEYXRlLFxyXG4vLyAgICAgICAgIGlzSW1hZ2VcclxuLy8gICAgICAgKTtcclxuXHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbi8vICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpOyAvLyBUaGlzIHJlc2V0cyB0aGUgZm9ybVxyXG4vLyAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcblxyXG4vLyAgIGlmIChpc0xvYWRpbmcpIHtcclxuLy8gICAgIHJldHVybiA8TG9hZGVyIC8+O1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPD5cclxuLy8gICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkMX0+UG9zdCBuZXcgSXRlbSBhcyBGb3VuZCBJdGVtPC9oMT5cclxuLy8gICAgICAgPGgyPlBsZWFzZSBQcm92aWRlIGdlbnVuaW5lIEluZm9ybWF0aW9ucyBvbmx5LjwvaDI+XHJcbi8vICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17cG9zdFN1Ym1pdEhhbmRsZXJ9PlxyXG4vLyAgICAgICAgIDxzZWxlY3QgbmFtZT1cIml0ZW1cIiBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fSByZWY9e3R5cGVJbnB1dFJlZn0+XHJcbi8vICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRm91bmRcIj5Gb3VuZDwvb3B0aW9uPlxyXG4vLyAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgICAgIDxzZWxlY3RcclxuLy8gICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4vLyAgICAgICAgICAgcmVmPXtjYXRlZ29yeUlucHV0UmVmfVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5cclxuLy8gICAgICAgICAgICAgQ2F0ZWdvcnlcclxuLy8gICAgICAgICAgIDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldhbGxldFwiPldhbGxldDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEIENhcmQgLyBTdHVkZW50IENhcmRcIj5JRCBDYXJkIC8gU3R1ZGVudCBDYXJkPC9vcHRpb24+XHJcbi8vICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU21hcnQgUGhvbmUgLyBMYXB0b3BcIj5TbWFydCBQaG9uZSAvIExhcHRvcDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktleXNcIj5LZXlzPC9vcHRpb24+XHJcbi8vICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbi8vICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuLy8gICAgICAgICAgIDxsYWJlbFxyXG4vLyAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbi8vICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICBJdGVtIE5hbWVcclxuLy8gICAgICAgICAgIDwvbGFiZWw+XHJcbi8vICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbi8vICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4vLyAgICAgICAgICAgICByZWY9e3RpdGxlSW5wdXRSZWZ9XHJcbi8vICAgICAgICAgICA+PC9pbnB1dD5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4vLyAgICAgICAgICAgPGxhYmVsXHJcbi8vICAgICAgICAgICAgIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiXHJcbi8vICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4vLyAgICAgICAgICAgPC9sYWJlbD5cclxuLy8gICAgICAgICAgIDx0ZXh0YXJlYVxyXG4vLyAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbi8vICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gYWJvdXQgaXRlbSAobGlrZSBsb2NhdGlvbiBldGMuLi4pXCJcclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuLy8gICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxyXG4vLyAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbi8vICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4vLyAgICAgICAgICAgPGxhYmVsXHJcbi8vICAgICAgICAgICAgIGh0bWxGb3I9XCJxdWVzdGlvblwiXHJcbi8vICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICBFbnRlciBxdWVzdGlvbiBiYXNlZCBvbiBhbiBpdGVtLlxyXG4vLyAgICAgICAgICAgPC9sYWJlbD5cclxuLy8gICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvblwiXHJcbi8vICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6LSBXaGF0IGlzIHRoZSBjb2xvciBvZiB0aGUgcGhvbmU/XCJcclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuLy8gICAgICAgICAgICAgcmVmPXtxdWVzdGlvbklucHV0UmVmfVxyXG4vLyAgICAgICAgICAgPjwvaW5wdXQ+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuLy8gICAgICAgICAgIDxsYWJlbFxyXG4vLyAgICAgICAgICAgICBodG1sRm9yPVwiZGF0ZVwiXHJcbi8vICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICBTZWxlY3QgYSBEYXRlOlxyXG4vLyAgICAgICAgICAgPC9sYWJlbD5cclxuLy8gICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbi8vICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuLy8gICAgICAgICAgICAgaWQ9XCJkYXRlXCJcclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuLy8gICAgICAgICAgICAgcmVmPXtkYXRlSW5wdXRSZWZ9XHJcbi8vICAgICAgICAgICA+PC9pbnB1dD5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbi8vICAgICAgICAgICBpZD1cImltYWdlXCJcclxuLy8gICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbi8vICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbi8vICAgICAgICAgICBvbkNoYW5nZT17Y29udmVydHRvYmFzZTY0fVxyXG4vLyAgICAgICAgIC8+XHJcbi8vICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUG9zdFwiPjwvQnV0dG9uPlxyXG4vLyAgICAgICA8L2Zvcm0+XHJcbi8vICAgICA8Lz5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBGb3VuZEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvdW5kRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0Y29tcC9Gb3VuZEZvcm1cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdEl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvdW5kTmV3SXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0Y29tcC9Gb3VuZE5ld0l0ZW1cIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuZnVuY3Rpb24gUG9zdExvc3RJdGVtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb3N0IEZvdW5kIEl0ZW08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIklmIHlvdSBoYXZlIGZvdW5kIGFueXRoaW5nIHBvc3QgaGVyZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWFnZXMvbG9nb3MucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PlxyXG4gICAgICAgIDxGb3VuZE5ld0l0ZW0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IGNvbnRleHQucmVxIH0pO1xyXG5cclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2F1dGhcIixcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBzZXNzaW9uIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TG9zdEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=