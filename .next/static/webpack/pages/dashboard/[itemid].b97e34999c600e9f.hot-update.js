"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/[itemid]",{

/***/ "./components/overlayForm/Form.js":
/*!****************************************!*\
  !*** ./components/overlayForm/Form.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.module.css */ \"./components/overlayForm/Form.module.css\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Loading */ \"./components/UI/Loading.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// http://localhost:3000/dashboard/654bc2921efc6c1070461e13\nfunction Form(props) {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const answerInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    async function sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime) {\n        const response = await fetch(\"/api/qresponse/QuestionResponse\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                enteredAnswer,\n                postID,\n                ItemTitle,\n                Question,\n                combinedDateTime\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        if (!response.ok) {\n            setIsLoading(false);\n        }\n        return data;\n    }\n    const postID = props.data2._id;\n    const ItemTitle = props.data2.Title;\n    const Question = props.data2.Question;\n    const currentDate = new Date();\n    const formattedDate = currentDate.toLocaleDateString(\"en-US\");\n    const formattedTime = currentDate.toLocaleTimeString(\"en-US\");\n    const combinedDateTime = \"\".concat(formattedDate, \" \").concat(formattedTime);\n    //console.log(postID);\n    const answerSubmitHandler = async (event)=>{\n        event.preventDefault();\n        setIsLoading(true);\n        const enteredAnswer = answerInputRef.current.value;\n        const result = await sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime);\n        // console.log(result);\n        event.target.reset(); // This resets the form\n        setIsLoading(false);\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontSize: \"1.5rem\"\n            },\n            children: \"Submitting response...\"\n        }, void 0, false, {\n            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n            lineNumber: 70,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"relative z-10\",\n        \"aria-labelledby\": \"slide-over-title\",\n        role: \"dialog\",\n        \"aria-modal\": \"true\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\"\n            }, void 0, false, {\n                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                lineNumber: 76,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"fixed inset-0 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"absolute inset-0 overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"pointer-events-auto relative w-screen max-w-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                                    onSubmit: answerSubmitHandler,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            class: \"text-2xl font-semibold leading-7 text-gray-900\",\n                                            children: \"Important Note\"\n                                        }, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 12\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"mt-1 text-lg leading-6 text-gray-600\",\n                                            children: \"This is the security Question related to the Item that is being listed here.\"\n                                        }, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 7\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"question\",\n                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().labels),\n                                            children: \"Question?\"\n                                        }, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: \"questionContent\",\n                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().span1),\n                                            children: props.data2.Question\n                                        }, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"answer\",\n                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().labels),\n                                            children: \"Answer\"\n                                        }, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"sm:col-span-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"text\",\n                                                    name: \"text\",\n                                                    type: \"text\",\n                                                    autocomplete: \"email\",\n                                                    class: \"block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\"\n                                                }, void 0, false, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 13\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 11\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 7\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().btndiv),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().button89),\n                                                    type: \"button\",\n                                                    role: \"button\",\n                                                    onClick: props.oncancle,\n                                                    children: \"Close\"\n                                                }, void 0, false, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 9\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().button89),\n                                                    type: \"submit\",\n                                                    role: \"button\",\n                                                    children: \"Submit\"\n                                                }, void 0, false, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 9\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 7\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 12\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                    lineNumber: 79,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                lineNumber: 78,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"/Dsd/yR0bvR/bHR0C0Ge9ng9XYQ=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSztvREFBT0MsY0FBYTtvREFBUXBCLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSTFFLDhEQUFDYTs7Ozs7c0RBQ0QsOERBQUNoQjs0Q0FBSVEsV0FBV2xELGdFQUFjOzs4REFDNUIsOERBQUNtRTtvREFDQ2pCLFdBQVdsRCxrRUFBZ0I7b0RBQzNCZ0UsTUFBSztvREFDTGpCLE1BQUs7b0RBQ0xzQixTQUFTaEUsTUFBTWlFLFFBQVE7OERBQ3hCOzs7Ozs7OERBR0QsOERBQUNIO29EQUFPakIsV0FBV2xELGtFQUFnQjtvREFBRWdFLE1BQUs7b0RBQVNqQixNQUFLOzhEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0V6RTtHQWxMUzNDO0tBQUFBO0FBb0xULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vRm9ybS5qcz9kYmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2Rhc2hib2FyZC82NTRiYzI5MjFlZmM2YzEwNzA0NjFlMTNcclxuXHJcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGFuc3dlcklucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRRdWVzdGlvbkRhdGEoXHJcbiAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgcG9zdElELFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBjb21iaW5lZERhdGVUaW1lXHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9xcmVzcG9uc2UvUXVlc3Rpb25SZXNwb25zZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgICAgIHBvc3RJRCxcclxuICAgICAgICBJdGVtVGl0bGUsXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuICBjb25zdCBwb3N0SUQgPSBwcm9wcy5kYXRhMi5faWQ7XHJcbiAgY29uc3QgSXRlbVRpdGxlID0gcHJvcHMuZGF0YTIuVGl0bGU7XHJcbiAgY29uc3QgUXVlc3Rpb24gPSBwcm9wcy5kYXRhMi5RdWVzdGlvbjtcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgY29tYmluZWREYXRlVGltZSA9IGAke2Zvcm1hdHRlZERhdGV9ICR7Zm9ybWF0dGVkVGltZX1gO1xyXG5cclxuICAvL2NvbnNvbGUubG9nKHBvc3RJRCk7XHJcbiAgY29uc3QgYW5zd2VyU3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkQW5zd2VyID0gYW5zd2VySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kUXVlc3Rpb25EYXRhKFxyXG4gICAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgICBwb3N0SUQsXHJcbiAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIGNvbWJpbmVkRGF0ZVRpbWVcclxuICAgICk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpOyAvLyBUaGlzIHJlc2V0cyB0aGUgZm9ybVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT5TdWJtaXR0aW5nIHJlc3BvbnNlLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwXCIgYXJpYS1sYWJlbGxlZGJ5PVwic2xpZGUtb3Zlci10aXRsZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxyXG4gIFxyXG4gIDxkaXYgY2xhc3M9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCI+PC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJmaXhlZCBpbnNldC0wIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGZpeGVkIGluc2V0LXktMCByaWdodC0wIGZsZXggbWF4LXctZnVsbCBwbC0xMFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1hdXRvIHJlbGF0aXZlIHctc2NyZWVuIG1heC13LTJ4bFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaC1mdWxsIGZsZXgtY29sIG92ZXJmbG93LXktc2Nyb2xsIGJnLXdoaXRlIHB5LTYgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59IG9uU3VibWl0PXthbnN3ZXJTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGxlYWRpbmctNyB0ZXh0LWdyYXktOTAwXCI+SW1wb3J0YW50IE5vdGU8L2gyPlxyXG4gICAgICA8cCBjbGFzcz1cIm10LTEgdGV4dC1sZyBsZWFkaW5nLTYgdGV4dC1ncmF5LTYwMFwiPlRoaXMgaXMgdGhlIHNlY3VyaXR5IFF1ZXN0aW9uIHJlbGF0ZWQgdG8gdGhlIEl0ZW0gdGhhdCBpcyBiZWluZyBsaXN0ZWQgaGVyZS48L3A+XHJcbiAgICAgICBcclxuICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVlc3Rpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxzfT5cclxuICAgICAgICAgUXVlc3Rpb24/XHJcbiAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgPGJyIC8+XHJcbiAgICAgICA8c3BhbiBpZD1cInF1ZXN0aW9uQ29udGVudFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuMX0+XHJcbiAgICAgICAge3Byb3BzLmRhdGEyLlF1ZXN0aW9ufVxyXG4gICAgICAgPC9zcGFuPlxyXG4gICAgICAgPGJyIC8+XHJcbiAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFuc3dlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbHN9PlxyXG4gICAgICAgICBBbnN3ZXJcclxuICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwic206Y29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTJcIj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwidGV4dFwiIG5hbWU9XCJ0ZXh0XCIgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJlbWFpbFwiIGNsYXNzPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHktNCB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdn0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fVxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uY2FuY2xlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9IHR5cGU9XCJzdWJtaXRcIiByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBvcHVwfSBpZD1cInBvcHVwXCI+XHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBvcHVwY29udGVudH0+XHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucG9wdXBjZW50ZXJ9PlxyXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybWNvbnRhaW5lcn0+XHJcbiAgICAvLyAgICAgICAgIDxhIGhyZWY9XCIjZmVhdHVyZWQtY2FyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnBvcHVwY2xvc2V9PiZ0aW1lczs8L2E+XHJcbiAgICAvLyAgICAgICAgIDxoMj5SZW50IGEgQ2FyPC9oMj5cclxuICAgIC8vICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLm92ZXJsYXlGb3JtfT5cclxuICAgIC8vICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZXF1aXJlZCAvPlxyXG4gICAgLy8gICAgICAgICAgIDxiciAvPlxyXG4gICAgLy8gICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+UGljay11cCBEYXRlPC9sYWJlbD5cclxuICAgIC8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRkYXRlfSByZXF1aXJlZCAvPlxyXG4gICAgLy8gICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgIC8vICAgICAgICAgICA8YSBocmVmPVwiI3BvcHVwMlwiIGNsYXNzPVwiYnRuIGJ0bm4yXCIgdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2E+XHJcbiAgICAvLyAgICAgICAgIDwvZm9ybT5cclxuICAgIC8vICAgICAgICAgPGJyIC8+XHJcbiAgICAvLyAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgPC9kaXY+XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIC8vIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufSBvblN1Ym1pdD17YW5zd2VyU3VibWl0SGFuZGxlcn0+XHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwicXVlc3Rpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxzfT5cclxuICAgIC8vICAgICBRdWVzdGlvbj9cclxuICAgIC8vICAgPC9sYWJlbD5cclxuICAgIC8vICAgPGJyIC8+XHJcbiAgICAvLyAgIDxzcGFuIGlkPVwicXVlc3Rpb25Db250ZW50XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW4xfT5cclxuICAgIC8vICAgICB7cHJvcHMuZGF0YTIuUXVlc3Rpb259XHJcbiAgICAvLyAgIDwvc3Bhbj5cclxuICAgIC8vICAgPGJyIC8+XHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAvLyAgICAgQW5zd2VyXHJcbiAgICAvLyAgIDwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBpZD1cImFuc3dlclwiXHJcbiAgICAvLyAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAvLyAgICAgcmVmPXthbnN3ZXJJbnB1dFJlZn1cclxuICAgIC8vICAgICByZXF1aXJlZFxyXG4gICAgLy8gICAvPlxyXG4gICAgLy8gICA8YnIgLz5cclxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgIC8vICAgICA8YnV0dG9uXHJcbiAgICAvLyAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAvLyAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgIC8vICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgLy8gICAgICAgb25DbGljaz17cHJvcHMub25jYW5jbGV9XHJcbiAgICAvLyAgICAgPlxyXG4gICAgLy8gICAgICAgQ2xvc2VcclxuICAgIC8vICAgICA8L2J1dHRvbj5cclxuICAgIC8vICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX0gdHlwZT1cInN1Ym1pdFwiIHJvbGU9XCJidXR0b25cIj5cclxuICAgIC8vICAgICAgIFN1Ym1pdFxyXG4gICAgLy8gICAgIDwvYnV0dG9uPlxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwidXNlUmVmIiwidXNlU3RhdGUiLCJMb2FkaW5nIiwiRm9ybSIsInByb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYW5zd2VySW5wdXRSZWYiLCJzZW5kUXVlc3Rpb25EYXRhIiwiZW50ZXJlZEFuc3dlciIsInBvc3RJRCIsIkl0ZW1UaXRsZSIsIlF1ZXN0aW9uIiwiY29tYmluZWREYXRlVGltZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIm9rIiwiZGF0YTIiLCJfaWQiLCJUaXRsZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJmb3JtYXR0ZWRUaW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiYW5zd2VyU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJyZXN1bHQiLCJ0YXJnZXQiLCJyZXNldCIsImRpdiIsInN0eWxlIiwiZm9udFNpemUiLCJjbGFzcyIsImFyaWEtbGFiZWxsZWRieSIsInJvbGUiLCJhcmlhLW1vZGFsIiwiZm9ybSIsImNsYXNzTmFtZSIsIm1haW4iLCJvblN1Ym1pdCIsImgyIiwicCIsImxhYmVsIiwiaHRtbEZvciIsImxhYmVscyIsImJyIiwic3BhbiIsImlkIiwic3BhbjEiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiYXV0b2NvbXBsZXRlIiwiYnRuZGl2IiwiYnV0dG9uIiwiYnV0dG9uODkiLCJvbkNsaWNrIiwib25jYW5jbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/overlayForm/Form.js\n"));

/***/ })

});