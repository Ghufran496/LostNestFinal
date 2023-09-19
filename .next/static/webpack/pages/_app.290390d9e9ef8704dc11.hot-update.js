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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginnav,
          children: [!session && !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
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
              lineNumber: 44,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
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
              lineNumber: 49,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
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
              lineNumber: 55,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            style: {
              padding: "5px"
            },
            className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.anch,
            onClick: function onClick() {
              window.prompt("");
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/profile",
              children: "Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this), session && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: logoutHandler,
              className: _main_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HbG9iYWwvbWFpbi1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk1haW5OYXZpZ2F0aW9uIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwibG9nb3V0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzaWduT3V0IiwiY2xhc3NlcyIsImhlYWRlciIsIm5hdmkiLCJpbWdkaXYiLCJpbWFnZXN0IiwibWFpbm5hdiIsImxvZ2lubmF2IiwicGFkZGluZyIsImFuY2giLCJ3aW5kb3ciLCJwcm9tcHQiLCJidG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFBQSxvQkFDR0MsbUVBQVUsRUFEYjtBQUFBO0FBQUEsTUFDakJDLE9BRGlCO0FBQUEsTUFDUkMsT0FEUTs7QUFHeEIsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBQyxvRUFBTztBQUNSOztBQUVELHNCQUNFO0FBQVEsYUFBUyxFQUFFQyxrRUFBTyxDQUFDQyxNQUEzQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDRSxJQUF4QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSxpQkFBUyxFQUFFRixrRUFBTyxDQUFDRyxNQUFsQztBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFSCxrRUFBTyxPQUF2QjtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsRUFBQyxtQkFETjtBQUVFLGlCQUFHLEVBQUMsU0FGTjtBQUdFLHVCQUFTLEVBQUVBLGtFQUFPLENBQUNJO0FBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBY0U7QUFBSyxpQkFBUyxFQUFFSixrRUFBTyxDQUFDSyxPQUF4QjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBRUwsa0VBQU8sQ0FBQ00sUUFBdkI7QUFBQSxxQkFDRyxDQUFDWixPQUFELElBQVksQ0FBQ0MsT0FBYixpQkFDQztBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxPQUFYO0FBQUEscUNBQ0U7QUFBQSx1Q0FDRSxxRUFBQyxrREFBRDtBQUFRLHlCQUFPLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixFQVdHRCxPQUFPLGlCQUNOO0FBQUksaUJBQUssRUFBRTtBQUFFYSxxQkFBTyxFQUFFO0FBQVgsYUFBWDtBQUErQixxQkFBUyxFQUFFUCxrRUFBTyxDQUFDUSxJQUFsRDtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSixFQWdCR2QsT0FBTyxpQkFDTjtBQUFJLGlCQUFLLEVBQUU7QUFBRWEscUJBQU8sRUFBRTtBQUFYLGFBQVg7QUFBK0IscUJBQVMsRUFBRVAsa0VBQU8sQ0FBQ1EsSUFBbEQ7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJKLEVBc0JHZCxPQUFPLGlCQUNOO0FBQUksaUJBQUssRUFBRTtBQUFFYSxxQkFBTyxFQUFFO0FBQVgsYUFBWDtBQUErQixxQkFBUyxFQUFFUCxrRUFBTyxDQUFDUSxJQUFsRDtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkJKLEVBMkJHZCxPQUFPLGlCQUNOO0FBQ0UsaUJBQUssRUFBRTtBQUFFYSxxQkFBTyxFQUFFO0FBQVgsYUFEVDtBQUVFLHFCQUFTLEVBQUVQLGtFQUFPLENBQUNRLElBRnJCO0FBR0UsbUJBQU8sRUFBRSxtQkFBTTtBQUNiQyxvQkFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZDtBQUNELGFBTEg7QUFBQSxtQ0FPRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJKLEVBdUNHaEIsT0FBTyxpQkFDTjtBQUFBLG1DQUNFO0FBQVEscUJBQU8sRUFBRUUsYUFBakI7QUFBZ0MsdUJBQVMsRUFBRUksa0VBQU8sQ0FBQ1csR0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0VEOztHQTVFUW5CLGM7VUFDb0JDLDJEOzs7S0FEcEJELGM7QUE4RU1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjkwMzkwZDllOWVmODcwNGRjMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tYWluLW5hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuXG4gIGZ1bmN0aW9uIGxvZ291dEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNpZ25PdXQoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdml9PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdkaXZ9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmV3fT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nb3MucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvaW1nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VzdH1cbiAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICA8aDU+TG9zdE5lc3Q8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbm5hdn0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbm5hdn0+XG4gICAgICAgICAgICB7IXNlc3Npb24gJiYgIWxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiTG9naW5cIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbmNofT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPkZlZWQ8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMuYW5jaH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0bG9zdGl0ZW1cIj5Mb3N0IEl0ZW0/PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMuYW5jaH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0Zm91bmRpdGVtXCI+Rm91bmQgSXRlbT88L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFuY2h9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnByb21wdChcIlwiKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+UHJvZmlsZTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0SGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9