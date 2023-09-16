webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Global/main-navigation.js":
/*!**********************************************!*\
  !*** ./components/Global/main-navigation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-navigation.module.css */ "./components/Global/main-navigation.module.css");
/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");



var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\Global\\main-navigation.js",
    _s = $RefreshSig$();






function MainNavigation() {
  _s();

  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["useSession"])(),
      _useSession2 = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1];

  function logoutHandler(event) {
    event.preventDefault();
    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["signOut"])();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navi,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.imgdiv,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["new"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/logos.png",
              alt: "logoimg",
              className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.imagest
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "LostNest"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainnav,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: !session && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/auth",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  content: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginnav,
          children: [session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/dashboard",
              children: "Feed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/postlostitem",
              children: "Lost Item?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/postfounditem",
              children: "Found Item?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/profile",
              children: "Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: logoutHandler,
              className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_s(MainNavigation, "btnbnkOsPYI0mLfZro/2DT47AuA=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_3__["useSession"]];
});

_c = MainNavigation;
/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

var _c;

$RefreshReg$(_c, "MainNavigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWwvbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk1haW5OYXZpZ2F0aW9uIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwibG9nb3V0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzaWduT3V0IiwiY2xhc3NlcyIsImhlYWRlciIsIm5hdmkiLCJpbWdkaXYiLCJpbWFnZXN0IiwibWFpbm5hdiIsImxvZ2lubmF2IiwicGFkZGluZyIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBLG9CQUNHQyxtRUFBVSxFQURiO0FBQUE7QUFBQSxNQUNqQkMsT0FEaUI7QUFBQSxNQUNSQyxPQURROztBQUd4QixXQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FDLG9FQUFPO0FBQ1I7O0FBRUQsc0JBQ0U7QUFBUSxhQUFTLEVBQUVDLGtFQUFPLENBQUNDLE1BQTNCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELGtFQUFPLENBQUNFLElBQXhCO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFlLGlCQUFTLEVBQUVGLGtFQUFPLENBQUNHLE1BQWxDO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVILGtFQUFPLE9BQXZCO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUFDLG1CQUROO0FBRUUsaUJBQUcsRUFBQyxTQUZOO0FBR0UsdUJBQVMsRUFBRUEsa0VBQU8sQ0FBQ0k7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFjRTtBQUFLLGlCQUFTLEVBQUVKLGtFQUFPLENBQUNLLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFDRyxDQUFDWCxPQUFELElBQVksQ0FBQ0MsT0FBYixpQkFDQztBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxPQUFYO0FBQUEscUNBQ0U7QUFBQSx1Q0FDRSxxRUFBQyxrREFBRDtBQUFRLHlCQUFPLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRTtBQUFJLG1CQUFTLEVBQUVLLGtFQUFPLENBQUNNLFFBQXZCO0FBQUEscUJBQ0daLE9BQU8saUJBQ047QUFBSSxpQkFBSyxFQUFFO0FBQUVhLHFCQUFPLEVBQUU7QUFBWCxhQUFYO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLEVBTUdiLE9BQU8saUJBQ047QUFBSSxpQkFBSyxFQUFFO0FBQUVhLHFCQUFPLEVBQUU7QUFBWCxhQUFYO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKLEVBWUdiLE9BQU8saUJBQ047QUFBSSxpQkFBSyxFQUFFO0FBQUVhLHFCQUFPLEVBQUU7QUFBWCxhQUFYO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiSixFQWlCR2IsT0FBTyxpQkFDTjtBQUFJLGlCQUFLLEVBQUU7QUFBRWEscUJBQU8sRUFBRTtBQUFYLGFBQVg7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJKLEVBdUJHYixPQUFPLGlCQUNOO0FBQUEsbUNBQ0U7QUFBUSxxQkFBTyxFQUFFRSxhQUFqQjtBQUFnQyx1QkFBUyxFQUFFSSxrRUFBTyxDQUFDUSxHQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErREQ7O0dBdkVRaEIsYztVQUNvQkMsMkQ7OztLQURwQkQsYztBQXlFTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kNzY3OWM4NDI0YmE2OWU4YjVkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL21haW4tbmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKCkge1xuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG5cbiAgZnVuY3Rpb24gbG9nb3V0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2lnbk91dCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2aX0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2Rpdn0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXd9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvcy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ29pbWdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZXN0fVxuICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgIDxoNT5Mb3N0TmVzdDwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlubmF2fT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7IXNlc3Npb24gJiYgIWxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiTG9naW5cIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbm5hdn0+XG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+RmVlZDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdGxvc3RpdGVtXCI+TG9zdCBJdGVtPzwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0Zm91bmRpdGVtXCI+Rm91bmQgSXRlbT88L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5Qcm9maWxlPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfSBjbGFzc05hbWU9e2NsYXNzZXMuYnRufT5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2aWdhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=