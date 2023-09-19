webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_profile_user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/profile/user-profile */ "./components/profile/user-profile.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\profile\\index.js",
    _s = $RefreshSig$();







function ProfilePage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var profileData = props.profileData;

  if (!profileData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this); // Render loading spinner if no data is available
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Your Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Your Profile content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/images/logos.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: profileData.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(ProfilePage, "EmvgwIb3cHpoFpeP+WmEDbjx4y4=");

_c = ProfilePage;

/*

export async function getServerSideProps(context) {
  const postId = context.params.itemid;
  const objectId = new ObjectId(postId); // Convert postId to ObjectId

  const client = await connectToDatabase();
  const db = client.db();

  const data = await db.collection("PostedItem").find({}).toArray();

  const extractedObject = data.find((item) => item._id.equals(objectId));

  return {
    props: {
      extractedObject: JSON.parse(JSON.stringify(extractedObject)),
    },
  };
}

*/
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

var _c;

$RefreshReg$(_c, "ProfilePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9maWxlUGFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJwcm9maWxlRGF0YSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ25CQyxTQURtQjtBQUFBLE1BQ1JDLFlBRFE7O0FBQUEsTUFFbEJDLFdBRmtCLEdBRUZKLEtBRkUsQ0FFbEJJLFdBRmtCOztBQUcxQixNQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDaEIsd0JBQU8scUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQLENBRGdCLENBQ0k7QUFDckI7O0FBRUQsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLGdCQUFJQSxXQUFXLENBQUNDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztHQWxCUU4sVzs7S0FBQUEsVzs7QUFnRFQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjMwYjE2ZWJhYmFjZmYzMjhjMWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZVwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0xvYWRpbmdcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZVBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgcHJvZmlsZURhdGEgfSA9IHByb3BzO1xyXG4gIGlmICghcHJvZmlsZURhdGEpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjsgLy8gUmVuZGVyIGxvYWRpbmcgc3Bpbm5lciBpZiBubyBkYXRhIGlzIGF2YWlsYWJsZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPllvdXIgUHJvZmlsZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIllvdXIgUHJvZmlsZSBjb250ZW50XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWFnZXMvbG9nb3MucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8cD57cHJvZmlsZURhdGEubmFtZX08L3A+XHJcbiAgICAgIHsvKiA8VXNlclByb2ZpbGUgLz4gKi99XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKFxyXG4gICAgeyBlbWFpbDogdXNlckVtYWlsIH0sXHJcbiAgICB7IHByb2plY3Rpb246IHsgcGFzc3dvcmQ6IDAgfSB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlc3Npb24sXHJcbiAgICAgIHByb2ZpbGVEYXRhOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXIpKSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuLypcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBvc3RJZCA9IGNvbnRleHQucGFyYW1zLml0ZW1pZDtcclxuICBjb25zdCBvYmplY3RJZCA9IG5ldyBPYmplY3RJZChwb3N0SWQpOyAvLyBDb252ZXJ0IHBvc3RJZCB0byBPYmplY3RJZFxyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcblxyXG4gIGNvbnN0IGV4dHJhY3RlZE9iamVjdCA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBleHRyYWN0ZWRPYmplY3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXh0cmFjdGVkT2JqZWN0KSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==