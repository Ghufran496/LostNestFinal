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

  var _useState = useState(null),
      _useState2 = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      activeLink = _useState2[0],
      setActiveLink = _useState2[1];

  function handleLinkClick() {// You can add additional logic here if needed
  }

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
              lineNumber: 24,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "LostNest"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainnav,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginnav,
          children: [!session &&
          /*#__PURE__*/
          // <li style={{ padding: "5px" }} className={classes.anch}>
          //   <Link href="/stats">Stats</Link>
          // </li>
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: "".concat(_main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch, " ").concat(activeLink === "/stats" && _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.active),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/stats",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                onClick: handleLinkClick,
                children: "Stats"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this), !session && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/auth",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  content: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/dashboard",
              children: "Feed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/postlostitem",
              children: "Lost Item?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/postfounditem",
              children: "Found Item?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/mylistings",
              children: "My Listings"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/responses",
              children: "Response"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/profile",
              children: "Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: logoutHandler,
              className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWwvbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk1haW5OYXZpZ2F0aW9uIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwidXNlU3RhdGUiLCJhY3RpdmVMaW5rIiwic2V0QWN0aXZlTGluayIsImhhbmRsZUxpbmtDbGljayIsImxvZ291dEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2lnbk91dCIsImNsYXNzZXMiLCJoZWFkZXIiLCJuYXZpIiwiaW1nZGl2IiwiaW1hZ2VzdCIsIm1haW5uYXYiLCJsb2dpbm5hdiIsInBhZGRpbmciLCJhbmNoIiwiYWN0aXZlIiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsb0JBQ0dDLG1FQUFVLEVBRGI7QUFBQTtBQUFBLE1BQ2pCQyxPQURpQjtBQUFBLE1BQ1JDLE9BRFE7O0FBQUEsa0JBRVlDLFFBQVEsQ0FBQyxJQUFELENBRnBCO0FBQUE7QUFBQSxNQUVqQkMsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUl4QixXQUFTQyxlQUFULEdBQTJCLENBQ3pCO0FBQ0Q7O0FBQ0QsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBQyxvRUFBTztBQUNSOztBQUVELHNCQUNFO0FBQVEsYUFBUyxFQUFFQyxrRUFBTyxDQUFDQyxNQUEzQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDRSxJQUF4QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSxpQkFBUyxFQUFFRixrRUFBTyxDQUFDRyxNQUFsQztBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFSCxrRUFBTyxPQUF2QjtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsRUFBQyxtQkFETjtBQUVFLGlCQUFHLEVBQUMsU0FGTjtBQUdFLHVCQUFTLEVBQUVBLGtFQUFPLENBQUNJO0FBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBY0U7QUFBSyxpQkFBUyxFQUFFSixrRUFBTyxDQUFDSyxPQUF4QjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBRUwsa0VBQU8sQ0FBQ00sUUFBdkI7QUFBQSxxQkFDRyxDQUFDaEIsT0FBRDtBQUFBO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDRSxpQkFBSyxFQUFFO0FBQUVpQixxQkFBTyxFQUFFO0FBQVgsYUFEVDtBQUVFLHFCQUFTLFlBQUtQLGtFQUFPLENBQUNRLElBQWIsY0FDUGYsVUFBVSxLQUFLLFFBQWYsSUFBMkJPLGtFQUFPLENBQUNTLE1BRDVCLENBRlg7QUFBQSxtQ0FNRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsUUFBWDtBQUFBLHFDQUNFO0FBQUcsdUJBQU8sRUFBRWQsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLEVBZ0JHLENBQUNMLE9BQUQsSUFBWSxDQUFDQyxPQUFiLGlCQUNDO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLE9BQVg7QUFBQSxxQ0FDRTtBQUFBLHVDQUNFLHFFQUFDLGtEQUFEO0FBQVEseUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpCSixFQTBCR0QsT0FBTyxpQkFDTjtBQUFJLGlCQUFLLEVBQUU7QUFBRWlCLHFCQUFPLEVBQUU7QUFBWCxhQUFYO0FBQStCLHFCQUFTLEVBQUVQLGtFQUFPLENBQUNRLElBQWxEO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNCSixFQStCR2xCLE9BQU8saUJBQ047QUFBSSxpQkFBSyxFQUFFO0FBQUVpQixxQkFBTyxFQUFFO0FBQVgsYUFBWDtBQUErQixxQkFBUyxFQUFFUCxrRUFBTyxDQUFDUSxJQUFsRDtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0osRUFxQ0dsQixPQUFPLGlCQUNOO0FBQUksaUJBQUssRUFBRTtBQUFFaUIscUJBQU8sRUFBRTtBQUFYLGFBQVg7QUFBK0IscUJBQVMsRUFBRVAsa0VBQU8sQ0FBQ1EsSUFBbEQ7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRDSixFQTBDR2xCLE9BQU8saUJBQ047QUFBSSxpQkFBSyxFQUFFO0FBQUVpQixxQkFBTyxFQUFFO0FBQVgsYUFBWDtBQUErQixxQkFBUyxFQUFFUCxrRUFBTyxDQUFDUSxJQUFsRDtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzQ0osRUErQ0dsQixPQUFPLGlCQUNOO0FBQUksaUJBQUssRUFBRTtBQUFFaUIscUJBQU8sRUFBRTtBQUFYLGFBQVg7QUFBK0IscUJBQVMsRUFBRVAsa0VBQU8sQ0FBQ1EsSUFBbEQ7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaERKLEVBb0RHbEIsT0FBTyxpQkFDTjtBQUFJLGlCQUFLLEVBQUU7QUFBRWlCLHFCQUFPLEVBQUU7QUFBWCxhQUFYO0FBQStCLHFCQUFTLEVBQUVQLGtFQUFPLENBQUNRLElBQWxEO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXJESixFQTBER2xCLE9BQU8saUJBQ047QUFBQSxtQ0FDRTtBQUFRLHFCQUFPLEVBQUVNLGFBQWpCO0FBQWdDLHVCQUFTLEVBQUVJLGtFQUFPLENBQUNVLEdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVGRDs7R0FuR1F0QixjO1VBQ29CQywyRDs7O0tBRHBCRCxjO0FBcUdNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMwM2U3MmIyMTA2N2VhMDI3NmE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbWFpbi1uYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xuZnVuY3Rpb24gTWFpbk5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW2FjdGl2ZUxpbmssIHNldEFjdGl2ZUxpbmtdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlua0NsaWNrKCkge1xuICAgIC8vIFlvdSBjYW4gYWRkIGFkZGl0aW9uYWwgbG9naWMgaGVyZSBpZiBuZWVkZWRcbiAgfVxuICBmdW5jdGlvbiBsb2dvdXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzaWduT3V0KCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZpfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nZGl2fT5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5ld30+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ29zLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwibG9nb2ltZ1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlc3R9XG4gICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgPGg1Pkxvc3ROZXN0PC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5uYXZ9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5uYXZ9PlxuICAgICAgICAgICAgeyFzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgLy8gPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAvLyAgIDxMaW5rIGhyZWY9XCIvc3RhdHNcIj5TdGF0czwvTGluaz5cbiAgICAgICAgICAgICAgLy8gPC9saT5cbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5hbmNofSAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlTGluayA9PT0gXCIvc3RhdHNcIiAmJiBjbGFzc2VzLmFjdGl2ZVxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlTGlua0NsaWNrfT5TdGF0czwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFzZXNzaW9uICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkxvZ2luXCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMuYW5jaH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5GZWVkPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdGxvc3RpdGVtXCI+TG9zdCBJdGVtPzwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdGZvdW5kaXRlbVwiPkZvdW5kIEl0ZW0/PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXlsaXN0aW5nc1wiPk15IExpc3RpbmdzPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzcG9uc2VzXCI+UmVzcG9uc2U8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMuYW5jaH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+UHJvZmlsZTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0SGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9