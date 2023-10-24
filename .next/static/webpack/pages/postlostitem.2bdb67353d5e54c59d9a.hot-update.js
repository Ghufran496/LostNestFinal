webpackHotUpdate_N_E("pages/postlostitem",{

/***/ "./components/UI/Loader.js":
false,

/***/ "./components/UI/Loader.module.css":
false,

/***/ "./components/postcomp/PostForm.js":
/*!*****************************************!*\
  !*** ./components/postcomp/PostForm.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// import React from "react";
// import classes from "./PostForm.module.css";
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
// function PostForm() {
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
//       <h1 className={classes.head1}>Post new Item as Lost Item</h1>
//       <h2>Please Provide genunine Informations only.</h2>
//       <form className={classes.form} onSubmit={postSubmitHandler}>
//         <select name="item" className={classes.customselect} ref={typeInputRef}>
//           <option value="Lost">Lost</option>
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
// export default PostForm;

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

/***/ "./components/postcomp/PostForm.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loader.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/postcomp/PostForm.module.css":
false,

/***/ "./pages/postlostitem/index.js":
/*!*************************************!*\
  !*** ./pages/postlostitem/index.js ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_postcomp_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postcomp/PostForm */ "./components/postcomp/PostForm.js");
/* harmony import */ var _components_postcomp_PostForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_postcomp_PostForm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostItem.module.css */ "./pages/postlostitem/PostItem.module.css");
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_postcomp_PostNewItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/postcomp/PostNewItem */ "./components/postcomp/PostNewItem.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\postlostitem\\index.js";






function PostItem() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Post Lost Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "If you have Lost anything post here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/images/logos.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_postcomp_PostNewItem__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_c = PostItem;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0Rm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdGxvc3RpdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwiY2xhc3NlcyIsImNlbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBTUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0U7QUFBSyxlQUFTLEVBQUVDLDJEQUFPLENBQUNDLE1BQXhCO0FBQUEsNkJBQ0UscUVBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztLQWhCUUYsUTs7QUFrQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3Rsb3N0aXRlbS4yYmRiNjczNTNkNWU1NGM1OWQ5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0Rm9ybS5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG4vLyBpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL1VJL0xvYWRlclwiO1xyXG4vLyBhc3luYyBmdW5jdGlvbiBzZW5kUG9zdERhdGEoXHJcbi8vICAgVHlwZSxcclxuLy8gICBDYXRlZ29yeSxcclxuLy8gICBUaXRsZSxcclxuLy8gICBEZXNjcmlwdGlvbixcclxuLy8gICBRdWVzdGlvbixcclxuLy8gICBEYXRlLFxyXG4vLyAgIGltYWdlSW5iYXNlNjRcclxuLy8gKSB7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdC9wb3N0aXRlbVwiLCB7XHJcbi8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4vLyAgICAgICBUeXBlLFxyXG4vLyAgICAgICBDYXRlZ29yeSxcclxuLy8gICAgICAgVGl0bGUsXHJcbi8vICAgICAgIERlc2NyaXB0aW9uLFxyXG4vLyAgICAgICBRdWVzdGlvbixcclxuLy8gICAgICAgRGF0ZSxcclxuLy8gICAgICAgUmVkdWNlZEltZzogaW1hZ2VJbmJhc2U2NCxcclxuLy8gICAgIH0pLFxyXG4vLyAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuLy8gICAgIH0sXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4vLyAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuLy8gICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gZGF0YTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBQb3N0Rm9ybSgpIHtcclxuLy8gICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4vLyAgIGNvbnN0IFtpc0ltYWdlLCBzZXRJc0ltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4vLyAgIGNvbnN0IHR5cGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4vLyAgIGNvbnN0IGNhdGVnb3J5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuLy8gICBjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbi8vICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4vLyAgIGNvbnN0IHF1ZXN0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuLy8gICBjb25zdCBkYXRlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbi8vICAgZnVuY3Rpb24gY29udmVydHRvYmFzZTY0KGUpIHtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuLy8gICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4vLyAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG5cclxuLy8gICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbi8vICAgICAgIC8vY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XHJcbi8vICAgICAgIHNldElzSW1hZ2UocmVhZGVyLnJlc3VsdCk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG4vLyAgIGNvbnN0IHBvc3RTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuLy8gICAgIGNvbnN0IGVudGVyZWRUeXBlID0gdHlwZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbi8vICAgICBjb25zdCBlbnRlcmVkQ2F0ZWdvcnkgPSBjYXRlZ29yeUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbi8vICAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aXRsZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbi8vICAgICBjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbi8vICAgICBjb25zdCBlbnRlcmVkUXVlc3Rpb24gPSBxdWVzdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbi8vICAgICBjb25zdCBlbnRlcmVkRGF0ZSA9IGRhdGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuLy8gICAgIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZW50ZXJlZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuLy8gICAgICAgXCJlbi1VU1wiLFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuLy8gICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbi8vICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZFBvc3REYXRhKFxyXG4vLyAgICAgICAgIGVudGVyZWRUeXBlLFxyXG4vLyAgICAgICAgIGVudGVyZWRDYXRlZ29yeSxcclxuLy8gICAgICAgICBlbnRlcmVkVGl0bGUsXHJcbi8vICAgICAgICAgZW50ZXJlZERlc2NyaXB0aW9uLFxyXG4vLyAgICAgICAgIGVudGVyZWRRdWVzdGlvbixcclxuLy8gICAgICAgICBodW1hblJlYWRhYmxlRGF0ZSxcclxuLy8gICAgICAgICBpc0ltYWdlXHJcbi8vICAgICAgICk7XHJcblxyXG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4vLyAgICAgICBldmVudC50YXJnZXQucmVzZXQoKTsgLy8gVGhpcyByZXNldHMgdGhlIGZvcm1cclxuLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICBpZiAoaXNMb2FkaW5nKSB7XHJcbi8vICAgICByZXR1cm4gPExvYWRlciAvPjtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDw+XHJcbi8vICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZDF9PlBvc3QgbmV3IEl0ZW0gYXMgTG9zdCBJdGVtPC9oMT5cclxuLy8gICAgICAgPGgyPlBsZWFzZSBQcm92aWRlIGdlbnVuaW5lIEluZm9ybWF0aW9ucyBvbmx5LjwvaDI+XHJcbi8vICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17cG9zdFN1Ym1pdEhhbmRsZXJ9PlxyXG4vLyAgICAgICAgIDxzZWxlY3QgbmFtZT1cIml0ZW1cIiBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fSByZWY9e3R5cGVJbnB1dFJlZn0+XHJcbi8vICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG9zdFwiPkxvc3Q8L29wdGlvbj5cclxuLy8gICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgICA8c2VsZWN0XHJcbi8vICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuLy8gICAgICAgICAgIHJlZj17Y2F0ZWdvcnlJbnB1dFJlZn1cclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XHJcbi8vICAgICAgICAgICAgIENhdGVnb3J5XHJcbi8vICAgICAgICAgICA8L29wdGlvbj5cclxuLy8gICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXYWxsZXRcIj5XYWxsZXQ8L29wdGlvbj5cclxuLy8gICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJRCBDYXJkIC8gU3R1ZGVudCBDYXJkXCI+SUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNtYXJ0IFBob25lIC8gTGFwdG9wXCI+U21hcnQgUGhvbmUgLyBMYXB0b3A8L29wdGlvbj5cclxuLy8gICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLZXlzXCI+S2V5czwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk90aGVyc1wiPk90aGVyczwvb3B0aW9uPlxyXG4vLyAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbi8vICAgICAgICAgICA8bGFiZWxcclxuLy8gICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4vLyAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgSXRlbSBOYW1lXHJcbi8vICAgICAgICAgICA8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4vLyAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuLy8gICAgICAgICAgICAgcmVmPXt0aXRsZUlucHV0UmVmfVxyXG4vLyAgICAgICAgICAgPjwvaW5wdXQ+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuLy8gICAgICAgICAgIDxsYWJlbFxyXG4vLyAgICAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcHRpb25cIlxyXG4vLyAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgRGVzY3JpcHRpb25cclxuLy8gICAgICAgICAgIDwvbGFiZWw+XHJcbi8vICAgICAgICAgICA8dGV4dGFyZWFcclxuLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4vLyAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGFib3V0IGl0ZW0gKGxpa2UgbG9jYXRpb24gZXRjLi4uKVwiXHJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbi8vICAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25JbnB1dFJlZn1cclxuLy8gICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4vLyAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuLy8gICAgICAgICAgIDxsYWJlbFxyXG4vLyAgICAgICAgICAgICBodG1sRm9yPVwicXVlc3Rpb25cIlxyXG4vLyAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgRW50ZXIgcXVlc3Rpb24gYmFzZWQgb24gYW4gaXRlbS5cclxuLy8gICAgICAgICAgIDwvbGFiZWw+XHJcbi8vICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb25cIlxyXG4vLyAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4Oi0gV2hhdCBpcyB0aGUgY29sb3Igb2YgdGhlIHBob25lP1wiXHJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbi8vICAgICAgICAgICAgIHJlZj17cXVlc3Rpb25JbnB1dFJlZn1cclxuLy8gICAgICAgICAgID48L2lucHV0PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbi8vICAgICAgICAgICA8bGFiZWxcclxuLy8gICAgICAgICAgICAgaHRtbEZvcj1cImRhdGVcIlxyXG4vLyAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgU2VsZWN0IGEgRGF0ZTpcclxuLy8gICAgICAgICAgIDwvbGFiZWw+XHJcbi8vICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4vLyAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbi8vICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbi8vICAgICAgICAgICAgIHJlZj17ZGF0ZUlucHV0UmVmfVxyXG4vLyAgICAgICAgICAgPjwvaW5wdXQ+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4vLyAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbi8vICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4vLyAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4vLyAgICAgICAgICAgb25DaGFuZ2U9e2NvbnZlcnR0b2Jhc2U2NH1cclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlBvc3RcIj48L0J1dHRvbj5cclxuLy8gICAgICAgPC9mb3JtPlxyXG4vLyAgICAgPC8+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdGNvbXAvUG9zdEZvcm1cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdEl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUG9zdE5ld0l0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdGNvbXAvUG9zdE5ld0l0ZW1cIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RJdGVtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb3N0IExvc3QgSXRlbTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiSWYgeW91IGhhdmUgTG9zdCBhbnl0aGluZyBwb3N0IGhlcmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2xvZ29zLnBuZ1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT5cclxuICAgICAgICA8UG9zdE5ld0l0ZW0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgc2Vzc2lvbiB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=