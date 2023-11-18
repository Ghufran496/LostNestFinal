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
          children: [!session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/stats",
              children: "Stats"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this), !session && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/auth",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  content: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
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
              href: "/postlostitem",
              children: "Lost Item?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
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
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/mylistings",
              children: "My Listings"
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
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/responses",
              children: "Response"
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
              href: "/profile",
              children: "Profile"
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: logoutHandler,
              className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWwvbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk1haW5OYXZpZ2F0aW9uIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwidXNlU3RhdGUiLCJhY3RpdmVMaW5rIiwic2V0QWN0aXZlTGluayIsImhhbmRsZUxpbmtDbGljayIsImxvZ291dEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2lnbk91dCIsImNsYXNzZXMiLCJoZWFkZXIiLCJuYXZpIiwiaW1nZGl2IiwiaW1hZ2VzdCIsIm1haW5uYXYiLCJsb2dpbm5hdiIsInBhZGRpbmciLCJhbmNoIiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsb0JBQ0dDLG1FQUFVLEVBRGI7QUFBQTtBQUFBLE1BQ2pCQyxPQURpQjtBQUFBLE1BQ1JDLE9BRFE7O0FBQUEsa0JBRVlDLFFBQVEsQ0FBQyxJQUFELENBRnBCO0FBQUE7QUFBQSxNQUVqQkMsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUl4QixXQUFTQyxlQUFULEdBQTJCLENBQ3pCO0FBQ0Q7O0FBQ0QsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBQyxvRUFBTztBQUNSOztBQUVELHNCQUNFO0FBQVEsYUFBUyxFQUFFQyxrRUFBTyxDQUFDQyxNQUEzQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDRSxJQUF4QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSxpQkFBUyxFQUFFRixrRUFBTyxDQUFDRyxNQUFsQztBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFSCxrRUFBTyxPQUF2QjtBQUFBLG9D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QixPQUFPLGlCQUNOO0FBQUksaUJBQUssRUFBRTtBQUFFaUIscUJBQU8sRUFBRTtBQUFYLGFBQVg7QUFBK0IscUJBQVMsRUFBRVAsa0VBQU8sQ0FBQ1EsSUFBbEQ7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0NKLEVBZ0RHbEIsT0FBTyxpQkFDTjtBQUFBLG1DQUNFO0FBQVEscUJBQU8sRUFBRU0sYUFBakI7QUFBZ0MsdUJBQVMsRUFBRUksa0VBQU8sQ0FBQ1MsR0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkVEOztHQXpGUXJCLGM7VUFDb0JDLDJEOzs7S0FEcEJELGM7QUEyRk1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTE3MjlmYjRkMTgzMmZjNzIxMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tYWluLW5hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbYWN0aXZlTGluaywgc2V0QWN0aXZlTGlua10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBoYW5kbGVMaW5rQ2xpY2soKSB7XG4gICAgLy8gWW91IGNhbiBhZGQgYWRkaXRpb25hbCBsb2dpYyBoZXJlIGlmIG5lZWRlZFxuICB9XG4gIGZ1bmN0aW9uIGxvZ291dEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNpZ25PdXQoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdml9PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdkaXZ9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmV3fT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nb3MucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvaW1nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VzdH1cbiAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICA8aDU+TG9zdE5lc3Q8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbm5hdn0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbm5hdn0+XG4gICAgICAgICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMuYW5jaH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdGF0c1wiPlN0YXRzPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshc2Vzc2lvbiAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhcIj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJMb2dpblwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+RmVlZDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rsb3N0aXRlbVwiPkxvc3QgSXRlbT88L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3Rmb3VuZGl0ZW1cIj5Gb3VuZCBJdGVtPzwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL215bGlzdGluZ3NcIj5NeSBMaXN0aW5nczwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3BvbnNlc1wiPlJlc3BvbnNlPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlByb2ZpbGU8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59PlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZpZ2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==