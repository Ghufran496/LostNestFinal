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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Loading */ \"./components/UI/Loading.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// http://localhost:3000/dashboard/654bc2921efc6c1070461e13\nfunction Form(props) {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const answerInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    async function sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime) {\n        const response = await fetch(\"/api/qresponse/QuestionResponse\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                enteredAnswer,\n                postID,\n                ItemTitle,\n                Question,\n                combinedDateTime\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        if (!response.ok) {\n            setIsLoading(false);\n        }\n        return data;\n    }\n    const postID = props.data2._id;\n    const ItemTitle = props.data2.Title;\n    const Question = props.data2.Question;\n    const currentDate = new Date();\n    const formattedDate = currentDate.toLocaleDateString(\"en-US\");\n    const formattedTime = currentDate.toLocaleTimeString(\"en-US\");\n    const combinedDateTime = \"\".concat(formattedDate, \" \").concat(formattedTime);\n    //console.log(postID);\n    const answerSubmitHandler = async (event)=>{\n        event.preventDefault();\n        setIsLoading(true);\n        const enteredAnswer = answerInputRef.current.value;\n        const result = await sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime);\n        // console.log(result);\n        event.target.reset(); // This resets the form\n        setIsLoading(false);\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontSize: \"1.5rem\"\n            },\n            children: \"Submitting response...\"\n        }, void 0, false, {\n            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n            lineNumber: 70,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"relative z-10\",\n        \"aria-labelledby\": \"slide-over-title\",\n        role: \"dialog\",\n        \"aria-modal\": \"true\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\"\n            }, void 0, false, {\n                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                lineNumber: 76,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"fixed inset-0 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"absolute inset-0 overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"pointer-events-auto relative w-screen max-w-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        class: \"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                class: \"absolute -inset-2.5\"\n                                            }, void 0, false, {\n                                                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                class: \"sr-only\",\n                                                children: \"Close panel\"\n                                            }, void 0, false, {\n                                                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                class: \"h-6 w-6\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 24 24\",\n                                                \"stroke-width\": \"1.5\",\n                                                stroke: \"currentColor\",\n                                                \"aria-hidden\": \"true\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    \"stroke-linecap\": \"round\",\n                                                    \"stroke-linejoin\": \"round\",\n                                                    d: \"M6 18L18 6M6 6l12 12\"\n                                                }, void 0, false, {\n                                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 17\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"px-4 sm:px-6\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                class: \"text-base font-semibold leading-6 text-gray-900\",\n                                                id: \"slide-over-title\",\n                                                children: \"Panel title\"\n                                            }, void 0, false, {\n                                                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"relative mt-6 flex-1 px-4 sm:px-6\"\n                                        }, void 0, false, {\n                                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                    lineNumber: 79,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n                lineNumber: 78,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\overlayForm\\\\Form.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"/Dsd/yR0bvR/bHR0C0Ge9ng9XYQ=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBQUE7QUErSlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9Gb3JtLmpzP2RiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Gb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGFzaGJvYXJkLzY1NGJjMjkyMWVmYzZjMTA3MDQ2MWUxM1xyXG5cclxuZnVuY3Rpb24gRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgYW5zd2VySW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZFF1ZXN0aW9uRGF0YShcclxuICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICBwb3N0SUQsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIGNvbWJpbmVkRGF0ZVRpbWVcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3FyZXNwb25zZS9RdWVzdGlvblJlc3BvbnNlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICAgICAgcG9zdElELFxyXG4gICAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIGNvbnN0IHBvc3RJRCA9IHByb3BzLmRhdGEyLl9pZDtcclxuICBjb25zdCBJdGVtVGl0bGUgPSBwcm9wcy5kYXRhMi5UaXRsZTtcclxuICBjb25zdCBRdWVzdGlvbiA9IHByb3BzLmRhdGEyLlF1ZXN0aW9uO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBjb21iaW5lZERhdGVUaW1lID0gYCR7Zm9ybWF0dGVkRGF0ZX0gJHtmb3JtYXR0ZWRUaW1lfWA7XHJcblxyXG4gIC8vY29uc29sZS5sb2cocG9zdElEKTtcclxuICBjb25zdCBhbnN3ZXJTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWRBbnN3ZXIgPSBhbnN3ZXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRRdWVzdGlvbkRhdGEoXHJcbiAgICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICAgIHBvc3RJRCxcclxuICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgY29tYmluZWREYXRlVGltZVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7IC8vIFRoaXMgcmVzZXRzIHRoZSBmb3JtXHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PlN1Ym1pdHRpbmcgcmVzcG9uc2UuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMTBcIiBhcmlhLWxhYmVsbGVkYnk9XCJzbGlkZS1vdmVyLXRpdGxlXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCI+XHJcbiAgXHJcbiAgPGRpdiBjbGFzcz1cImZpeGVkIGluc2V0LTAgYmctZ3JheS01MDAgYmctb3BhY2l0eS03NSB0cmFuc2l0aW9uLW9wYWNpdHlcIj48L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImZpeGVkIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgZml4ZWQgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBtYXgtdy1mdWxsIHBsLTEwXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLWF1dG8gcmVsYXRpdmUgdy1zY3JlZW4gbWF4LXctbWRcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGxlZnQtMCB0b3AtMCAtbWwtOCBmbGV4IHByLTIgcHQtNCBzbTotbWwtMTAgc206cHItNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlbGF0aXZlIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWJzb2x1dGUgLWluc2V0LTIuNVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5DbG9zZSBwYW5lbDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaC02IHctNlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBoLWZ1bGwgZmxleC1jb2wgb3ZlcmZsb3cteS1zY3JvbGwgYmctd2hpdGUgcHktNiBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTQgc206cHgtNlwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCIgaWQ9XCJzbGlkZS1vdmVyLXRpdGxlXCI+UGFuZWwgdGl0bGU8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG10LTYgZmxleC0xIHB4LTQgc206cHgtNlwiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3B1cH0gaWQ9XCJwb3B1cFwiPlxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3B1cGNvbnRlbnR9PlxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBvcHVwY2VudGVyfT5cclxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1jb250YWluZXJ9PlxyXG4gICAgLy8gICAgICAgICA8YSBocmVmPVwiI2ZlYXR1cmVkLWNhclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3B1cGNsb3NlfT4mdGltZXM7PC9hPlxyXG4gICAgLy8gICAgICAgICA8aDI+UmVudCBhIENhcjwvaDI+XHJcbiAgICAvLyAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5vdmVybGF5Rm9ybX0+XHJcbiAgICAvLyAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgIC8vICAgICAgICAgICA8YnIgLz5cclxuICAgIC8vICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPlBpY2stdXAgRGF0ZTwvbGFiZWw+XHJcbiAgICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZGF0ZX0gcmVxdWlyZWQgLz5cclxuICAgIC8vICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAvLyAgICAgICAgICAgPGEgaHJlZj1cIiNwb3B1cDJcIiBjbGFzcz1cImJ0biBidG5uMlwiIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9hPlxyXG4gICAgLy8gICAgICAgICA8L2Zvcm0+XHJcbiAgICAvLyAgICAgICAgIDxiciAvPlxyXG4gICAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgIDwvZGl2PlxyXG4gICAgLy8gPC9kaXY+XHJcbiAgICAvLyA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0gb25TdWJtaXQ9e2Fuc3dlclN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cInF1ZXN0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAvLyAgICAgUXVlc3Rpb24/XHJcbiAgICAvLyAgIDwvbGFiZWw+XHJcbiAgICAvLyAgIDxiciAvPlxyXG4gICAgLy8gICA8c3BhbiBpZD1cInF1ZXN0aW9uQ29udGVudFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuMX0+XHJcbiAgICAvLyAgICAge3Byb3BzLmRhdGEyLlF1ZXN0aW9ufVxyXG4gICAgLy8gICA8L3NwYW4+XHJcbiAgICAvLyAgIDxiciAvPlxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImFuc3dlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbHN9PlxyXG4gICAgLy8gICAgIEFuc3dlclxyXG4gICAgLy8gICA8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgaWQ9XCJhbnN3ZXJcIlxyXG4gICAgLy8gICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgLy8gICAgIHJlZj17YW5zd2VySW5wdXRSZWZ9XHJcbiAgICAvLyAgICAgcmVxdWlyZWRcclxuICAgIC8vICAgLz5cclxuICAgIC8vICAgPGJyIC8+XHJcbiAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdn0+XHJcbiAgICAvLyAgICAgPGJ1dHRvblxyXG4gICAgLy8gICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fVxyXG4gICAgLy8gICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAvLyAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIC8vICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uY2FuY2xlfVxyXG4gICAgLy8gICAgID5cclxuICAgIC8vICAgICAgIENsb3NlXHJcbiAgICAvLyAgICAgPC9idXR0b24+XHJcbiAgICAvLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9IHR5cGU9XCJzdWJtaXRcIiByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICAvLyAgICAgICBTdWJtaXRcclxuICAgIC8vICAgICA8L2J1dHRvbj5cclxuICAgIC8vICAgPC9kaXY+XHJcbiAgICAvLyA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NlcyIsInVzZVJlZiIsInVzZVN0YXRlIiwiTG9hZGluZyIsIkZvcm0iLCJwcm9wcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFuc3dlcklucHV0UmVmIiwic2VuZFF1ZXN0aW9uRGF0YSIsImVudGVyZWRBbnN3ZXIiLCJwb3N0SUQiLCJJdGVtVGl0bGUiLCJRdWVzdGlvbiIsImNvbWJpbmVkRGF0ZVRpbWUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsImRhdGEyIiwiX2lkIiwiVGl0bGUiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImFuc3dlclN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwicmVzdWx0IiwidGFyZ2V0IiwicmVzZXQiLCJkaXYiLCJzdHlsZSIsImZvbnRTaXplIiwiY2xhc3MiLCJhcmlhLWxhYmVsbGVkYnkiLCJyb2xlIiwiYXJpYS1tb2RhbCIsImJ1dHRvbiIsInR5cGUiLCJzcGFuIiwic3ZnIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2Utd2lkdGgiLCJzdHJva2UiLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsImQiLCJoMiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/overlayForm/Form.js\n"));

/***/ })

});