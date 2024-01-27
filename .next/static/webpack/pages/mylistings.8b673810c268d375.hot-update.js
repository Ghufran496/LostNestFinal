"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mylistings",{

/***/ "./components/mylistings/Specificpost.js":
/*!***********************************************!*\
  !*** ./components/mylistings/Specificpost.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpecificGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecificGrid */ \"./components/mylistings/SpecificGrid.js\");\n/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Loading */ \"./components/UI/Loading.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Specificpost() {\n    _s();\n    const [isData, setIsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let isMounted = true; // Flag to track if the component is mounted\n        setIsLoading(true);\n        fetch(\"/api/myposts/fetchmypost\").then((response)=>response.json()).then((data)=>{\n            if (isMounted) {\n                const dataArray = Array.isArray(data) ? data : [\n                    data\n                ];\n                if (dataArray && dataArray.length > 0) {\n                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Successfully retrieved your posts.\", {\n                        theme: \"colored\"\n                    });\n                }\n                setIsData(dataArray);\n                setIsLoading(false);\n            }\n        }).catch((error)=>{\n            if (isMounted) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Error retrieving your posts.\", {\n                    theme: \"colored\"\n                });\n                setIsLoading(false);\n            }\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Error retrieving your posts.\", {\n                theme: \"colored\"\n            });\n        });\n        // Cleanup function\n        return ()=>{\n            isMounted = false; // Set flag to false when component is unmounted\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                autoClose: 1500,\n                draggable: true,\n                closeOnClick: true\n            }, void 0, false, {\n                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\mylistings\\\\Specificpost.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12\",\n                children: [\n                    isData.length === 0 && !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl flex mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 justify-center items-center\",\n                        children: \"You have not listed any posts\"\n                    }, void 0, false, {\n                        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\mylistings\\\\Specificpost.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpecificGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        data: isData\n                    }, void 0, false, {\n                        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\mylistings\\\\Specificpost.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\mylistings\\\\Specificpost.js\",\n                        lineNumber: 63,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\mylistings\\\\Specificpost.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"L:\\\\FYP\\\\deploy2\\\\components\\\\mylistings\\\\Specificpost.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Specificpost, \"hl+Xp/DTcagG4kn6hAMqrxqirYw=\");\n_c = Specificpost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Specificpost);\nvar _c;\n$RefreshReg$(_c, \"Specificpost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL215bGlzdGluZ3MvU3BlY2lmaWNwb3N0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBRUY7QUFDTjtBQUNtQjtBQUNSO0FBRS9DLFNBQVNROztJQUNQLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVcsWUFBWSxNQUFNLDRDQUE0QztRQUVsRUQsYUFBYTtRQUViRSxNQUFNLDRCQUNIQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHO1lBQ0wsSUFBSUwsV0FBVztnQkFDYixNQUFNTSxZQUFZQyxNQUFNQyxPQUFPLENBQUNILFFBQVFBLE9BQU87b0JBQUNBO2lCQUFLO2dCQUNyRCxJQUFJQyxhQUFhQSxVQUFVRyxNQUFNLEdBQUcsR0FBRztvQkFDckNmLGlEQUFLQSxDQUFDZ0IsT0FBTyxDQUFDLHNDQUFzQzt3QkFDbERDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUFkLFVBQVVTO2dCQUVWUCxhQUFhO1lBQ2Y7UUFDRixHQUNDYSxLQUFLLENBQUMsQ0FBQ0M7WUFDTixJQUFJYixXQUFXO2dCQUNiTixpREFBS0EsQ0FBQ21CLEtBQUssQ0FBQyxnQ0FBZ0M7b0JBQzFDRixPQUFPO2dCQUNUO2dCQUNBWixhQUFhO1lBQ2Y7WUFDQUwsaURBQUtBLENBQUNtQixLQUFLLENBQUMsZ0NBQWdDO2dCQUMxQ0YsT0FBTztZQUNUO1FBQ0Y7UUFFRixtQkFBbUI7UUFDbkIsT0FBTztZQUNMWCxZQUFZLE9BQU8sZ0RBQWdEO1FBQ3JFO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNaLDJDQUFRQTs7MEJBQ1AsOERBQUNLLDBEQUFjQTtnQkFBQ3FCLFdBQVc7Z0JBQU1DLFNBQVM7Z0JBQUNDLFlBQVk7Ozs7OzswQkFDdkQsOERBQUNDO2dCQUFJQyxXQUFVOztvQkFDWnRCLE9BQU9hLE1BQU0sS0FBSyxLQUFLLENBQUNYLDBCQUN2Qiw4REFBQ3FCO3dCQUFFRCxXQUFVO2tDQUFxSTs7Ozs7NkNBSWxKLDhEQUFDM0IscURBQVlBO3dCQUFDYyxNQUFNVDs7Ozs7O29CQUVyQkUsMkJBQWEsOERBQUNOLG1EQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0ExRFNHO0tBQUFBO0FBNERULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbXlsaXN0aW5ncy9TcGVjaWZpY3Bvc3QuanM/OTdmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFNwZWNpZmljR3JpZCBmcm9tIFwiLi9TcGVjaWZpY0dyaWRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWNpZmljcG9zdCgpIHtcclxuICBjb25zdCBbaXNEYXRhLCBzZXRJc0RhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlOyAvLyBGbGFnIHRvIHRyYWNrIGlmIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG5cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBmZXRjaChcIi9hcGkvbXlwb3N0cy9mZXRjaG15cG9zdFwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcclxuICAgICAgICAgIGlmIChkYXRhQXJyYXkgJiYgZGF0YUFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSByZXRyaWV2ZWQgeW91ciBwb3N0cy5cIiwge1xyXG4gICAgICAgICAgICAgIHRoZW1lOiBcImNvbG9yZWRcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0SXNEYXRhKGRhdGFBcnJheSk7XHJcblxyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIkVycm9yIHJldHJpZXZpbmcgeW91ciBwb3N0cy5cIiwge1xyXG4gICAgICAgICAgICB0aGVtZTogXCJjb2xvcmVkXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgcmV0cmlldmluZyB5b3VyIHBvc3RzLlwiLCB7XHJcbiAgICAgICAgICB0aGVtZTogXCJjb2xvcmVkXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIENsZWFudXAgZnVuY3Rpb25cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlOyAvLyBTZXQgZmxhZyB0byBmYWxzZSB3aGVuIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgYXV0b0Nsb3NlPXsxNTAwfSBkcmFnZ2FibGUgY2xvc2VPbkNsaWNrIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNCBtZDptdC02IGxnOm10LTggeGw6bXQtMTAgMnhsOm10LTEyXCI+XHJcbiAgICAgICAge2lzRGF0YS5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsIHhsOnRleHQtNXhsIDJ4bDp0ZXh0LTZ4bCBmbGV4IG10LTQgbWQ6bXQtNiBsZzptdC04IHhsOm10LTEwIDJ4bDptdC0xMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgWW91IGhhdmUgbm90IGxpc3RlZCBhbnkgcG9zdHNcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFNwZWNpZmljR3JpZCBkYXRhPXtpc0RhdGF9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlY2lmaWNwb3N0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3BlY2lmaWNHcmlkIiwiTG9hZGluZyIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJTcGVjaWZpY3Bvc3QiLCJpc0RhdGEiLCJzZXRJc0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc01vdW50ZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZGF0YUFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwic3VjY2VzcyIsInRoZW1lIiwiY2F0Y2giLCJlcnJvciIsImF1dG9DbG9zZSIsImRyYWdnYWJsZSIsImNsb3NlT25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mylistings/Specificpost.js\n"));

/***/ })

});