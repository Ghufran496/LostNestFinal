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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form.module.css */ \"./components/overlayForm/Form.module.css\");\n/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Loading */ \"./components/UI/Loading.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// http://localhost:3000/dashboard/654bc2921efc6c1070461e13\nfunction Form(props) {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const answerInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    async function sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime) {\n        const response = await fetch(\"/api/qresponse/QuestionResponse\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                enteredAnswer,\n                postID,\n                ItemTitle,\n                Question,\n                combinedDateTime\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        if (!response.ok) {\n            setIsLoading(false);\n        }\n        return data;\n    }\n    const postID = props.data2._id;\n    const ItemTitle = props.data2.Title;\n    const Question = props.data2.Question;\n    const currentDate = new Date();\n    const formattedDate = currentDate.toLocaleDateString(\"en-US\");\n    const formattedTime = currentDate.toLocaleTimeString(\"en-US\");\n    const combinedDateTime = \"\".concat(formattedDate, \" \").concat(formattedTime);\n    //console.log(postID);\n    const answerSubmitHandler = async (event)=>{\n        event.preventDefault();\n        setIsLoading(true);\n        const enteredAnswer = answerInputRef.current.value;\n        const result = await sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime);\n        // console.log(result);\n        event.target.reset(); // This resets the form\n        setIsLoading(false);\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontSize: \"1.5rem\"\n            },\n            children: \"Submitting response...\"\n        }, void 0, false, {\n            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n            lineNumber: 70,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"relative z-10\",\n        \"aria-labelledby\": \"slide-over-title\",\n        role: \"dialog\",\n        \"aria-modal\": \"true\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\"\n            }, void 0, false, {\n                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                lineNumber: 76,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"fixed inset-0 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"absolute inset-0 overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"pointer-events-auto relative w-screen max-w-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                                    onSubmit: answerSubmitHandler,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().top),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    class: \"text-2xl font-semibold leading-7 text-gray-900\",\n                                                    children: \"Important Note\"\n                                                }, void 0, false, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 12\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    class: \"mt-1 text-lg leading-6 text-gray-600\",\n                                                    children: \"This is the security Question related to the Item that is being listed here.\"\n                                                }, void 0, false, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 7\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 7\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().marginm),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().grider),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            htmlFor: \"question\",\n                                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().labels),\n                                                            children: \"Question? :-\"\n                                                        }, void 0, false, {\n                                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 8\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            id: \"questionContent\",\n                                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().span1),\n                                                            children: props.data2.Question\n                                                        }, void 0, false, {\n                                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                            lineNumber: 94,\n                                                            columnNumber: 8\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 9\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().grider),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            htmlFor: \"answer\",\n                                                            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().labels),\n                                                            children: \"Answer :-\"\n                                                        }, void 0, false, {\n                                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                            lineNumber: 99,\n                                                            columnNumber: 8\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            id: \"answer\",\n                                                            style: {\n                                                                fontSize: \"10px\",\n                                                                padding: \"6px\"\n                                                            },\n                                                            class: \"block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                                                            ref: answerInputRef,\n                                                            required: true\n                                                        }, void 0, false, {\n                                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 8\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 8\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 7\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-6 flex items-center justify-end gap-x-6\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: props.oncancle,\n                                                    className: \"text-sm font-semibold leading-6 text-gray-900\",\n                                                    children: \"Cancel\"\n                                                }, void 0, false, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 9\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    className: \"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                                    children: \"Save\"\n                                                }, void 0, false, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 9\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 114,\n                                            columnNumber: 7\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 5\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                    lineNumber: 79,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                lineNumber: 78,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"/Dsd/yR0bvR/bHR0C0Ge9ng9XYQ=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxXQUFXbEQsZ0VBQWM7c0VBQUU7Ozs7OztzRUFHbkQsOERBQUNnRTs0REFDQUMsTUFBSzs0REFDSkgsSUFBRzs0REFDSG5CLE9BQU87Z0VBQUNDLFVBQVM7Z0VBQVFzQixTQUFROzREQUFLOzREQUN0Q3JCLE9BQU07NERBQ05zQixLQUFLM0Q7NERBQ0w0RCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBTVgsOERBQUMxQjs0Q0FBSVEsV0FBVTs7OERBQ2IsOERBQUNtQjtvREFBT0osTUFBSztvREFBU0ssU0FBU2pFLE1BQU1rRSxRQUFRO29EQUFFckIsV0FBVTs4REFBZ0Q7Ozs7Ozs4REFHekcsOERBQUNtQjtvREFDQ0osTUFBSztvREFDTGYsV0FBVTs4REFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEVDtHQWpMUzlDO0tBQUFBO0FBbUxULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vRm9ybS5qcz9kYmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2Rhc2hib2FyZC82NTRiYzI5MjFlZmM2YzEwNzA0NjFlMTNcclxuXHJcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGFuc3dlcklucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRRdWVzdGlvbkRhdGEoXHJcbiAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgcG9zdElELFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBjb21iaW5lZERhdGVUaW1lXHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9xcmVzcG9uc2UvUXVlc3Rpb25SZXNwb25zZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgICAgIHBvc3RJRCxcclxuICAgICAgICBJdGVtVGl0bGUsXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuICBjb25zdCBwb3N0SUQgPSBwcm9wcy5kYXRhMi5faWQ7XHJcbiAgY29uc3QgSXRlbVRpdGxlID0gcHJvcHMuZGF0YTIuVGl0bGU7XHJcbiAgY29uc3QgUXVlc3Rpb24gPSBwcm9wcy5kYXRhMi5RdWVzdGlvbjtcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgY29tYmluZWREYXRlVGltZSA9IGAke2Zvcm1hdHRlZERhdGV9ICR7Zm9ybWF0dGVkVGltZX1gO1xyXG5cclxuICAvL2NvbnNvbGUubG9nKHBvc3RJRCk7XHJcbiAgY29uc3QgYW5zd2VyU3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkQW5zd2VyID0gYW5zd2VySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kUXVlc3Rpb25EYXRhKFxyXG4gICAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgICBwb3N0SUQsXHJcbiAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIGNvbWJpbmVkRGF0ZVRpbWVcclxuICAgICk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpOyAvLyBUaGlzIHJlc2V0cyB0aGUgZm9ybVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT5TdWJtaXR0aW5nIHJlc3BvbnNlLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwXCIgYXJpYS1sYWJlbGxlZGJ5PVwic2xpZGUtb3Zlci10aXRsZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxyXG4gIFxyXG4gICAgICAgPGRpdiBjbGFzcz1cImZpeGVkIGluc2V0LTAgYmctZ3JheS01MDAgYmctb3BhY2l0eS03NSB0cmFuc2l0aW9uLW9wYWNpdHlcIj48L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImZpeGVkIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgZml4ZWQgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBtYXgtdy1mdWxsIHBsLTEwXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLWF1dG8gcmVsYXRpdmUgdy1zY3JlZW4gbWF4LXctMnhsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBoLWZ1bGwgZmxleC1jb2wgb3ZlcmZsb3cteS1zY3JvbGwgYmctd2hpdGUgcHktNiBzaGFkb3cteGxcIj5cclxuICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufSBvblN1Ym1pdD17YW5zd2VyU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcH0+XHJcbiAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTcgdGV4dC1ncmF5LTkwMFwiPkltcG9ydGFudCBOb3RlPC9oMj5cclxuICAgICAgPHAgY2xhc3M9XCJtdC0xIHRleHQtbGcgbGVhZGluZy02IHRleHQtZ3JheS02MDBcIj5UaGlzIGlzIHRoZSBzZWN1cml0eSBRdWVzdGlvbiByZWxhdGVkIHRvIHRoZSBJdGVtIHRoYXQgaXMgYmVpbmcgbGlzdGVkIGhlcmUuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lubX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZGVyfT5cclxuICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVlc3Rpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxzfT5cclxuICAgICAgICAgUXVlc3Rpb24/IDotICBcclxuICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICA8c3BhbiBpZD1cInF1ZXN0aW9uQ29udGVudFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuMX0+XHJcbiAgICAgICAge3Byb3BzLmRhdGEyLlF1ZXN0aW9ufVxyXG4gICAgICAgPC9zcGFuPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkZXJ9PlxyXG4gICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxzfT5cclxuICAgICAgICAgQW5zd2VyIDotXHJcbiAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICBpZD1cImFuc3dlclwiXHJcbiAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6XCIxMHB4XCIsIHBhZGRpbmc6XCI2cHhcIn19XHJcbiAgICAgICAgIGNsYXNzPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHktMi41IHRleHQtZ3JheS05MDAgc2hhZG93LXNtIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS0zMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWluZGlnby02MDAgc206dGV4dC1zbSBzbTpsZWFkaW5nLTZcIlxyXG4gICAgICAgICByZWY9e2Fuc3dlcklucHV0UmVmfVxyXG4gICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgZ2FwLXgtNlwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Byb3BzLm9uY2FuY2xlfSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTYXZlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25jYW5jbGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xvc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX0gdHlwZT1cInN1Ym1pdFwiIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIFxyXG4gICAgLy8gPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59IG9uU3VibWl0PXthbnN3ZXJTdWJtaXRIYW5kbGVyfT5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJxdWVzdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbHN9PlxyXG4gICAgLy8gICAgIFF1ZXN0aW9uP1xyXG4gICAgLy8gICA8L2xhYmVsPlxyXG4gICAgLy8gICA8YnIgLz5cclxuICAgIC8vICAgPHNwYW4gaWQ9XCJxdWVzdGlvbkNvbnRlbnRcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbjF9PlxyXG4gICAgLy8gICAgIHtwcm9wcy5kYXRhMi5RdWVzdGlvbn1cclxuICAgIC8vICAgPC9zcGFuPlxyXG4gICAgLy8gICA8YnIgLz5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxzfT5cclxuICAgIC8vICAgICBBbnN3ZXJcclxuICAgIC8vICAgPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIGlkPVwiYW5zd2VyXCJcclxuICAgIC8vICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgIC8vICAgICByZWY9e2Fuc3dlcklucHV0UmVmfVxyXG4gICAgLy8gICAgIHJlcXVpcmVkXHJcbiAgICAvLyAgIC8+XHJcbiAgICAvLyAgIDxiciAvPlxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5kaXZ9PlxyXG4gICAgLy8gICAgIDxidXR0b25cclxuICAgIC8vICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX1cclxuICAgIC8vICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgLy8gICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAvLyAgICAgICBvbkNsaWNrPXtwcm9wcy5vbmNhbmNsZX1cclxuICAgIC8vICAgICA+XHJcbiAgICAvLyAgICAgICBDbG9zZVxyXG4gICAgLy8gICAgIDwvYnV0dG9uPlxyXG4gICAgLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fSB0eXBlPVwic3VibWl0XCIgcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgLy8gICAgICAgU3VibWl0XHJcbiAgICAvLyAgICAgPC9idXR0b24+XHJcbiAgICAvLyAgIDwvZGl2PlxyXG4gICAgLy8gPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNsYXNzZXMiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxvYWRpbmciLCJGb3JtIiwicHJvcHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJhbnN3ZXJJbnB1dFJlZiIsInNlbmRRdWVzdGlvbkRhdGEiLCJlbnRlcmVkQW5zd2VyIiwicG9zdElEIiwiSXRlbVRpdGxlIiwiUXVlc3Rpb24iLCJjb21iaW5lZERhdGVUaW1lIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwib2siLCJkYXRhMiIsIl9pZCIsIlRpdGxlIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJhbnN3ZXJTdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInJlc3VsdCIsInRhcmdldCIsInJlc2V0IiwiZGl2Iiwic3R5bGUiLCJmb250U2l6ZSIsImNsYXNzIiwiYXJpYS1sYWJlbGxlZGJ5Iiwicm9sZSIsImFyaWEtbW9kYWwiLCJmb3JtIiwiY2xhc3NOYW1lIiwibWFpbiIsIm9uU3VibWl0IiwidG9wIiwiaDIiLCJwIiwibWFyZ2lubSIsImdyaWRlciIsImxhYmVsIiwiaHRtbEZvciIsImxhYmVscyIsInNwYW4iLCJpZCIsInNwYW4xIiwiaW5wdXQiLCJ0eXBlIiwicGFkZGluZyIsInJlZiIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsIm9uY2FuY2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/overlayForm/Form.js\n"));

/***/ })

});