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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-navigation.module.css */ "./components/Global/main-navigation.module.css");
/* harmony import */ var _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");



var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\Global\\main-navigation.js",
    _s = $RefreshSig$();







function MainNavigation() {
  _s();

  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["useSession"])(),
      _useSession2 = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      activeLink = _useState[0],
      setActiveLink = _useState[1];

  function handleLinkClick() {// You can add additional logic here if needed
  }

  function logoutHandler(event) {
    event.preventDefault();
    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["signOut"])();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.header,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.navi,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.imgdiv,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["new"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/logos.png",
              alt: "logoimg",
              className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.imagest
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "LostNest"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainnav,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginnav,
          children: [!session &&
          /*#__PURE__*/
          // <li style={{ padding: "5px" }} className={classes.anch}>
          //   <Link href="/stats">Stats</Link>
          // </li>
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: "".concat(_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.anch, " ").concat(activeLink === "/stats" && _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.active),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/stats",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                onClick: handleLinkClick,
                children: "Stats"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this), !session && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/auth",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  content: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/dashboard",
              children: "Feed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/postlostitem",
              children: "Lost Item?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/postfounditem",
              children: "Found Item?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/mylistings",
              children: "My Listings"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/responses",
              children: "Response"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/profile",
              children: "Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: logoutHandler,
              className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.btn,
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
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
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(MainNavigation, "VgY6QLv9RwbywlRxi/OyLJPllro=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWwvbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk1haW5OYXZpZ2F0aW9uIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwidXNlU3RhdGUiLCJhY3RpdmVMaW5rIiwic2V0QWN0aXZlTGluayIsImhhbmRsZUxpbmtDbGljayIsImxvZ291dEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2lnbk91dCIsImNsYXNzZXMiLCJoZWFkZXIiLCJuYXZpIiwiaW1nZGl2IiwiaW1hZ2VzdCIsIm1haW5uYXYiLCJsb2dpbm5hdiIsInBhZGRpbmciLCJhbmNoIiwiYWN0aXZlIiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUFBLG9CQUNHQyxtRUFBVSxFQURiO0FBQUE7QUFBQSxNQUNqQkMsT0FEaUI7QUFBQSxNQUNSQyxPQURROztBQUFBLGtCQUVZQyxzREFBUSxDQUFDLElBQUQsQ0FGcEI7QUFBQSxNQUVqQkMsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUl4QixXQUFTQyxlQUFULEdBQTJCLENBQ3pCO0FBQ0Q7O0FBQ0QsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBQyxvRUFBTztBQUNSOztBQUVELHNCQUNFO0FBQVEsYUFBUyxFQUFFQyxrRUFBTyxDQUFDQyxNQUEzQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDRSxJQUF4QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSxpQkFBUyxFQUFFRixrRUFBTyxDQUFDRyxNQUFsQztBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFSCxrRUFBTyxP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QVMsRUFBRVAsa0VBQU8sQ0FBQ1EsSUFBbEQ7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaERKLEVBb0RHbEIsT0FBTyxpQkFDTjtBQUFJLGlCQUFLLEVBQUU7QUFBRWlCLHFCQUFPLEVBQUU7QUFBWCxhQUFYO0FBQStCLHFCQUFTLEVBQUVQLGtFQUFPLENBQUNRLElBQWxEO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJESixFQTBER2xCLE9BQU8saUJBQ047QUFBQSxtQ0FDRTtBQUFRLHFCQUFPLEVBQUVNLGFBQWpCO0FBQWdDLHVCQUFTLEVBQUVJLGtFQUFPLENBQUNVLEdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVGRDs7R0FuR1F0QixjO1VBQ29CQywyRDs7O0tBRHBCRCxjO0FBcUdNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdlNWM0NTdmZjFiOTZkOTFkMjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL21haW4tbmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKCkge1xuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFthY3RpdmVMaW5rLCBzZXRBY3RpdmVMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpbmtDbGljaygpIHtcbiAgICAvLyBZb3UgY2FuIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIGhlcmUgaWYgbmVlZGVkXG4gIH1cbiAgZnVuY3Rpb24gbG9nb3V0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2lnbk91dCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2aX0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ2Rpdn0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXd9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvcy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ29pbWdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZXN0fVxuICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgIDxoNT5Mb3N0TmVzdDwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlubmF2fT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2lubmF2fT5cbiAgICAgICAgICAgIHshc2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIC8vIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgLy8gICA8TGluayBocmVmPVwiL3N0YXRzXCI+U3RhdHM8L0xpbms+XG4gICAgICAgICAgICAgIC8vIDwvbGk+XG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuYW5jaH0gJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUxpbmsgPT09IFwiL3N0YXRzXCIgJiYgY2xhc3Nlcy5hY3RpdmVcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUxpbmtDbGlja30+U3RhdHM8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshc2Vzc2lvbiAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhcIj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJMb2dpblwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+RmVlZDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rsb3N0aXRlbVwiPkxvc3QgSXRlbT88L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rmb3VuZGl0ZW1cIj5Gb3VuZCBJdGVtPzwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215bGlzdGluZ3NcIj5NeSBMaXN0aW5nczwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3BvbnNlc1wiPlJlc3BvbnNlPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlByb2ZpbGU8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59PlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZpZ2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==