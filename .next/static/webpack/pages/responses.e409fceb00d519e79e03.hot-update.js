webpackHotUpdate_N_E("pages/responses",{

/***/ "./components/MyResponse/ResponseItem.js":
/*!***********************************************!*\
  !*** ./components/MyResponse/ResponseItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResponseItem.module.css */ "./components/MyResponse/ResponseItem.module.css");
/* harmony import */ var _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\MyResponse\\ResponseItem.js",
    _this = undefined,
    _s = $RefreshSig$();




var ResponseItem = function ResponseItem(props) {
  _s();

  var _props$data = props.data,
      _id = _props$data._id,
      enteredContact = _props$data.enteredContact,
      ItemTitle = _props$data.ItemTitle,
      PostID = _props$data.PostID,
      PosterID = _props$data.PosterID,
      Question = _props$data.Question,
      ValidatorDateTime = _props$data.ValidatorDateTime,
      Answer = _props$data.Answer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isDivVisible = _useState[0],
      setIsDivVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isItemDelete = _useState2[0],
      setIsItemDelete = _useState2[1];

  function deletePostData(_x) {
    return _deletePostData.apply(this, arguments);
  }

  function _deletePostData() {
    _deletePostData = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(DeleteResponse) {
      var response, errorMessage, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("/api/answers/deleteResponse", {
                method: "DELETE",
                body: JSON.stringify({
                  DeleteResponse: DeleteResponse
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 3:
              response = _context2.sent;

              if (response.ok) {
                _context2.next = 9;
                break;
              }

              _context2.next = 7;
              return response.text();

            case 7:
              errorMessage = _context2.sent;
              throw new Error("HTTP error! Status: ".concat(response.status, ", Message: ").concat(errorMessage));

            case 9:
              _context2.next = 11;
              return response.json();

            case 11:
              data = _context2.sent;
              return _context2.abrupt("return", data);

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              console.error("Error deleting response:", _context2.t0.message);
              throw _context2.t0;

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));
    return _deletePostData.apply(this, arguments);
  }

  var handleButtonClick = function handleButtonClick() {
    setIsDivVisible(!isDivVisible);
  };

  var deleteButtonClick = /*#__PURE__*/function () {
    var _ref = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsItemDelete(true);
              _context.prev = 1;
              _context.next = 4;
              return deletePostData(_id);

            case 4:
              result = _context.sent;
              //   // Handle the result if needed
              window.location.reload();
              setIsItemDelete(false);
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              // Handle the error, e.g., show an error message to the user
              console.error("Error deleting response:", _context.t0.message);
              setIsItemDelete(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function deleteButtonClick() {
      return _ref.apply(this, arguments);
    };
  }();

  if (isItemDelete) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: "Item Is Being Deleted..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    style: {
      fontSize: "1.5rem",
      border: "1px solid #311465",
      padding: "2rem 8rem 2rem 2rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontWeight: "400",
      borderRadius: "2.5rem",
      position: "relative" // Necessary for positioning the hidden div

    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item ID: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: PostID
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 18
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: ItemTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: ValidatorDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this), isDivVisible || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
      onClick: handleButtonClick,
      children: "Show Response"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, _this), isDivVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: ["Response: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: enteredContact
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 23
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1rem"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          onClick: handleButtonClick,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          onClick: deleteButtonClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, _this);
};

_s(ResponseItem, "ftNBqGwontZfqJTtYStF17n7MyI=");

_c = ResponseItem;
/* harmony default export */ __webpack_exports__["default"] = (ResponseItem);

var _c;

$RefreshReg$(_c, "ResponseItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaXNJdGVtRGVsZXRlIiwic2V0SXNJdGVtRGVsZXRlIiwiZGVsZXRlUG9zdERhdGEiLCJEZWxldGVSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJvayIsInRleHQiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkZWxldGVCdXR0b25DbGljayIsInJlc3VsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImNsYXNzZXMiLCJzcGFuZXIiLCJidG4iLCJmbGV4RGlyZWN0aW9uIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRHYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLG9CQVUxQkEsS0FBSyxDQUFDQyxJQVZvQjtBQUFBLE1BRTVCQyxHQUY0QixlQUU1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QUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJKLEVBZ0NHdEIsWUFBWSxpQkFDWDtBQUNFLFdBQUssRUFBRTtBQUNMa0MsZUFBTyxFQUFFLE1BREo7QUFFTEosZUFBTyxFQUFFLE1BRko7QUFHTFcscUJBQWEsRUFBRSxRQUhWO0FBSUxWLHNCQUFjLEVBQUUsUUFKWDtBQUtMQyxrQkFBVSxFQUFFLFFBTFA7QUFNTEksb0JBQVksRUFBRTtBQU5ULE9BRFQ7QUFBQSw4QkFVRTtBQUFBLDhDQUNZO0FBQUEsb0JBQU81QztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFhRTtBQUNFLGFBQUssRUFBRTtBQUNMc0MsaUJBQU8sRUFBRSxNQURKO0FBRUxZLDZCQUFtQixFQUFFLFNBRmhCO0FBR0xDLGlCQUFPLEVBQUU7QUFISixTQURUO0FBQUEsZ0NBT0U7QUFBUSxtQkFBUyxFQUFFTCwrREFBTyxDQUFDRSxHQUEzQjtBQUFnQyxpQkFBTyxFQUFFbEIsaUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBVUU7QUFBUSxtQkFBUyxFQUFFZ0IsK0RBQU8sQ0FBQ0UsR0FBM0I7QUFBZ0MsaUJBQU8sRUFBRWpCLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpRUQsQ0ExSUQ7O0dBQU1uQyxZOztLQUFBQSxZO0FBNElTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNwb25zZXMuZTQwOWZjZWIwMGQ1MTllNzllMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9SZXNwb25zZUl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUmVzcG9uc2VJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgZW50ZXJlZENvbnRhY3QsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBQb3N0SUQsXHJcbiAgICBQb3N0ZXJJRCxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgVmFsaWRhdG9yRGF0ZVRpbWUsXHJcbiAgICBBbnN3ZXIsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc3QgW2lzRGl2VmlzaWJsZSwgc2V0SXNEaXZWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNJdGVtRGVsZXRlLCBzZXRJc0l0ZW1EZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3REYXRhKERlbGV0ZVJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL2RlbGV0ZVJlc3BvbnNlXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgRGVsZXRlUmVzcG9uc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfSwgTWVzc2FnZTogJHtlcnJvck1lc3NhZ2V9YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHJlc3BvbnNlOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldElzRGl2VmlzaWJsZSghaXNEaXZWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldElzSXRlbURlbGV0ZSh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlbGV0ZVBvc3REYXRhKF9pZCk7XHJcbiAgICAgIC8vICAgLy8gSGFuZGxlIHRoZSByZXN1bHQgaWYgbmVlZGVkXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgc2V0SXNJdGVtRGVsZXRlKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IsIGUuZy4sIHNob3cgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgcmVzcG9uc2U6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRJc0l0ZW1EZWxldGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaWYgKGlzSXRlbURlbGV0ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHBcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBJdGVtIElzIEJlaW5nIERlbGV0ZWQuLi5cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGlcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMTE0NjVcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjJyZW0gOHJlbSAycmVtIDJyZW1cIixcclxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIuNXJlbVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIC8vIE5lY2Vzc2FyeSBmb3IgcG9zaXRpb25pbmcgdGhlIGhpZGRlbiBkaXZcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIEl0ZW0gSUQ6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntQb3N0SUR9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgSXRlbSBOYW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57SXRlbVRpdGxlfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFF1ZXN0aW9uOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57UXVlc3Rpb259PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgWW91ciBBbnN3ZXI6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntBbnN3ZXJ9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgVGltZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1ZhbGlkYXRvckRhdGVUaW1lfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuXHJcbiAgICAgIHtpc0RpdlZpc2libGUgfHwgKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgU2hvdyBSZXNwb25zZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7aXNEaXZWaXNpYmxlICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXJlbVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIFJlc3BvbnNlOiA8c3Bhbj57ZW50ZXJlZENvbnRhY3R9PC9zcGFuPlxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIixcclxuICAgICAgICAgICAgICBncmlkR2FwOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17ZGVsZXRlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9