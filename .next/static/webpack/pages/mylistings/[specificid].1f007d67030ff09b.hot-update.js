"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mylistings/[specificid]",{

/***/ "./components/overlayForm/DetailForm.js":
/*!**********************************************!*\
  !*** ./components/overlayForm/DetailForm.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailForm.module.css */ \"./components/overlayForm/DetailForm.module.css\");\n/* harmony import */ var _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst DetailForm = (props)=>{\n    _s();\n    const { ItemTitle, PostID, PosterID, Question, Answer } = props.senderData;\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ResponseData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    async function sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer) {\n        const response = await fetch(\"/api/answers/sendResponse\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                enteredInformations,\n                ItemTitle,\n                PostID,\n                PosterID,\n                Question,\n                combinedDateTime,\n                Answer\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        if (!response.ok) {\n            setIsLoading(false);\n        }\n        return data;\n    }\n    const currentDate = new Date();\n    const formattedDate = currentDate.toLocaleDateString(\"en-US\");\n    const formattedTime = currentDate.toLocaleTimeString(\"en-US\");\n    const combinedDateTime = \"\".concat(formattedDate, \" \").concat(formattedTime);\n    async function InfosubmitHandler(event) {\n        event.preventDefault();\n        setIsLoading(true);\n        const enteredInformations = ResponseData.current.value;\n        const result = await sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer);\n        event.target.reset();\n        setIsLoading(false);\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontSize: \"1.5rem\"\n            },\n            children: \"Submiting...\"\n        }, void 0, false, {\n            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\DetailForm.js\",\n            lineNumber: 69,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n            onSubmit: InfosubmitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    for: \"contactInformations\",\n                    children: \"Enter Contact Informations\"\n                }, void 0, false, {\n                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\DetailForm.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    type: \"text\",\n                    name: \"contactInformations\",\n                    rows: 3,\n                    cols: 2,\n                    style: {\n                        fontSize: \"10px\"\n                    },\n                    placeholder: \"your Gmail or cell number.\",\n                    className: \"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                    ref: ResponseData,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\DetailForm.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 flex items-center justify-end gap-x-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            role: \"button\",\n                            onClick: props.close,\n                            className: \"text-xl font-semibold leading-6 text-white-900\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\DetailForm.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            role: \"button\",\n                            className: \"rounded-md bg-indigo-600 px-12 py-4 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\DetailForm.js\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\DetailForm.js\",\n                    lineNumber: 86,\n                    columnNumber: 1\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\DetailForm.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\DetailForm.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DetailForm, \"dwisrlX7s8bV/yOUXx0gITE5dK8=\");\n_c = DetailForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailForm);\nvar _c;\n$RefreshReg$(_c, \"DetailForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL0RldGFpbEZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ007QUFDTDtBQUV6QyxNQUFNSyxhQUFhLENBQUNDOztJQUNsQixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEdBQUdMLE1BQU1NLFVBQVU7SUFDMUUsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1XLGVBQWVaLDZDQUFNQTtJQUUzQixlQUFlYSxZQUNiQyxtQkFBbUIsRUFDbkJWLFNBQVMsRUFDVEMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLFFBQVEsRUFDUlEsZ0JBQWdCLEVBQ2hCUCxNQUFNO1FBRU4sTUFBTVEsV0FBVyxNQUFNQyxNQUFNLDZCQUE2QjtZQUN4REMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CUDtnQkFDQVY7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FRO2dCQUNBUDtZQUNGO1lBQ0FjLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU1QLFNBQVNRLElBQUk7UUFFaEMsSUFBSSxDQUFDUixTQUFTUyxFQUFFLEVBQUU7WUFDaEJkLGFBQWE7UUFDZjtRQUVBLE9BQU9ZO0lBQ1Q7SUFFQSxNQUFNRyxjQUFjLElBQUlDO0lBQ3hCLE1BQU1DLGdCQUFnQkYsWUFBWUcsa0JBQWtCLENBQUM7SUFDckQsTUFBTUMsZ0JBQWdCSixZQUFZSyxrQkFBa0IsQ0FBQztJQUNyRCxNQUFNaEIsbUJBQW1CLEdBQW9CZSxPQUFqQkYsZUFBYyxLQUFpQixPQUFkRTtJQUU3QyxlQUFlRSxrQkFBa0JDLEtBQUs7UUFDcENBLE1BQU1DLGNBQWM7UUFDcEJ2QixhQUFhO1FBQ2IsTUFBTUcsc0JBQXNCRixhQUFhdUIsT0FBTyxDQUFDQyxLQUFLO1FBRXRELE1BQU1DLFNBQVMsTUFBTXhCLFlBQ25CQyxxQkFDQVYsV0FDQUMsUUFDQUMsVUFDQUMsVUFDQVEsa0JBQ0FQO1FBRUZ5QixNQUFNSyxNQUFNLENBQUNDLEtBQUs7UUFDbEI1QixhQUFhO0lBQ2Y7SUFFQSxJQUFJRCxXQUFXO1FBQ2IscUJBQU8sOERBQUM4QjtZQUFJQyxPQUFPO2dCQUFFQyxVQUFVO1lBQVM7c0JBQUc7Ozs7OztJQUM3QztJQUNBLHFCQUNFLDhEQUFDNUMsMkNBQVFBO2tCQUNQLDRFQUFDNkM7WUFBS0MsV0FBVzdDLG9FQUFZO1lBQUU4QyxVQUFVYjs7OEJBQ3ZDLDhEQUFDYztvQkFBTUMsS0FBSTs4QkFBc0I7Ozs7Ozs4QkFDakMsOERBQUNDO29CQUNDQyxNQUFLO29CQUNMQyxNQUFLO29CQUNMQyxNQUFNO29CQUNOQyxNQUFNO29CQUNOWCxPQUFPO3dCQUFDQyxVQUFTO29CQUFNO29CQUN2QlcsYUFBWTtvQkFDWlQsV0FBVTtvQkFDVlUsS0FBSzFDO29CQUNMMkMsUUFBUTs7Ozs7OzhCQUVsQiw4REFBQ2Y7b0JBQUlJLFdBQVU7O3NDQUNQLDhEQUFDWTs0QkFBT1AsTUFBSzs0QkFBU1EsTUFBSzs0QkFBU0MsU0FBU3ZELE1BQU13RCxLQUFLOzRCQUFFZixXQUFVO3NDQUFpRDs7Ozs7O3NDQUdySCw4REFBQ1k7NEJBQ0NQLE1BQUs7NEJBQ0xRLE1BQUs7NEJBQ0xiLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1Q7R0FoR00xQztLQUFBQTtBQWtHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL0RldGFpbEZvcm0uanM/MjZmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRGV0YWlsRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERldGFpbEZvcm0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IEl0ZW1UaXRsZSwgUG9zdElELCBQb3N0ZXJJRCwgUXVlc3Rpb24sIEFuc3dlciB9ID0gcHJvcHMuc2VuZGVyRGF0YTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBSZXNwb25zZURhdGEgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoXHJcbiAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICBBbnN3ZXJcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvc2VuZFJlc3BvbnNlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICAgIFBvc3RJRCxcclxuICAgICAgICBQb3N0ZXJJRCxcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICAgIEFuc3dlcixcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgY29tYmluZWREYXRlVGltZSA9IGAke2Zvcm1hdHRlZERhdGV9ICR7Zm9ybWF0dGVkVGltZX1gO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBJbmZvc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IGVudGVyZWRJbmZvcm1hdGlvbnMgPSBSZXNwb25zZURhdGEuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZShcclxuICAgICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICBQb3N0SUQsXHJcbiAgICAgIFBvc3RlcklELFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgQW5zd2VyXHJcbiAgICApO1xyXG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0+U3VibWl0aW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e0luZm9zdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdEluZm9ybWF0aW9uc1wiPkVudGVyIENvbnRhY3QgSW5mb3JtYXRpb25zPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb3JtYXRpb25zXCJcclxuICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICBjb2xzPXsyfVxyXG4gICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjEwcHhcIn19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgR21haWwgb3IgY2VsbCBudW1iZXIuXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcclxuICAgICAgICAgIHJlZj17UmVzcG9uc2VEYXRhfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICA+PC90ZXh0YXJlYT5cclxuPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC14LTZcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByb2xlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMuY2xvc2V9IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC13aGl0ZS05MDBcIj5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMTIgcHktNCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwiY2xhc3NlcyIsInVzZVJlZiIsInVzZVN0YXRlIiwiRGV0YWlsRm9ybSIsInByb3BzIiwiSXRlbVRpdGxlIiwiUG9zdElEIiwiUG9zdGVySUQiLCJRdWVzdGlvbiIsIkFuc3dlciIsInNlbmRlckRhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJSZXNwb25zZURhdGEiLCJzZW5kTWVzc2FnZSIsImVudGVyZWRJbmZvcm1hdGlvbnMiLCJjb21iaW5lZERhdGVUaW1lIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwib2siLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsIkluZm9zdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInJlc3VsdCIsInRhcmdldCIsInJlc2V0IiwiZGl2Iiwic3R5bGUiLCJmb250U2l6ZSIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImxhYmVsIiwiZm9yIiwidGV4dGFyZWEiLCJ0eXBlIiwibmFtZSIsInJvd3MiLCJjb2xzIiwicGxhY2Vob2xkZXIiLCJyZWYiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInJvbGUiLCJvbkNsaWNrIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/overlayForm/DetailForm.js\n"));

/***/ })

});