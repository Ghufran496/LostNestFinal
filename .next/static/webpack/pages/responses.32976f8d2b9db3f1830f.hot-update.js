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
        children: [" Response: ", enteredContact]
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
          lineNumber: 129,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          onClick: deleteButtonClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaXNJdGVtRGVsZXRlIiwic2V0SXNJdGVtRGVsZXRlIiwiZGVsZXRlUG9zdERhdGEiLCJEZWxldGVSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJvayIsInRleHQiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkZWxldGVCdXR0b25DbGljayIsInJlc3VsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImNsYXNzZXMiLCJzcGFuZXIiLCJidG4iLCJmbGV4RGlyZWN0aW9uIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRHYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLG9CQVUxQkEsS0FBSyxDQUFDQyxJQVZvQjtBQUFBLE1BRTVCQyxHQUY0QixlQUU1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QUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJKLEVBZ0NHdEIsWUFBWSxpQkFDWDtBQUNFLFdBQUssRUFBRTtBQUNMa0MsZUFBTyxFQUFFLE1BREo7QUFFTEosZUFBTyxFQUFFLE1BRko7QUFHTFcscUJBQWEsRUFBRSxRQUhWO0FBSUxWLHNCQUFjLEVBQUUsUUFKWDtBQUtMQyxrQkFBVSxFQUFFLFFBTFA7QUFNTEksb0JBQVksRUFBRTtBQU5ULE9BRFQ7QUFBQSw4QkFVRTtBQUFBLGtDQUFnQjVDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBV0U7QUFDRSxhQUFLLEVBQUU7QUFDTHNDLGlCQUFPLEVBQUUsTUFESjtBQUVMWSw2QkFBbUIsRUFBRSxTQUZoQjtBQUdMQyxpQkFBTyxFQUFFO0FBSEosU0FEVDtBQUFBLGdDQU9FO0FBQVEsbUJBQVMsRUFBRUwsK0RBQU8sQ0FBQ0UsR0FBM0I7QUFBZ0MsaUJBQU8sRUFBRWxCLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVVFO0FBQVEsbUJBQVMsRUFBRWdCLCtEQUFPLENBQUNFLEdBQTNCO0FBQWdDLGlCQUFPLEVBQUVqQixpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBeElEOztHQUFNbkMsWTs7S0FBQUEsWTtBQTBJU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzcG9uc2VzLjMyOTc2ZjhkMmI5ZGIzZjE4MzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUmVzcG9uc2VJdGVtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFJlc3BvbnNlSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIGVudGVyZWRDb250YWN0LFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIFZhbGlkYXRvckRhdGVUaW1lLFxyXG4gICAgQW5zd2VyLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG4gIGNvbnN0IFtpc0RpdlZpc2libGUsIHNldElzRGl2VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzSXRlbURlbGV0ZSwgc2V0SXNJdGVtRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVQb3N0RGF0YShEZWxldGVSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYW5zd2Vycy9kZWxldGVSZXNwb25zZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIERlbGV0ZVJlc3BvbnNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c30sIE1lc3NhZ2U6ICR7ZXJyb3JNZXNzYWdlfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyByZXNwb25zZTpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0RpdlZpc2libGUoIWlzRGl2VmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0l0ZW1EZWxldGUodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxldGVQb3N0RGF0YShfaWQpO1xyXG4gICAgICAvLyAgIC8vIEhhbmRsZSB0aGUgcmVzdWx0IGlmIG5lZWRlZFxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIHNldElzSXRlbURlbGV0ZShmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yLCBlLmcuLCBzaG93IGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHVzZXJcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHJlc3BvbnNlOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgc2V0SXNJdGVtRGVsZXRlKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGlmIChpc0l0ZW1EZWxldGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgSXRlbSBJcyBCZWluZyBEZWxldGVkLi4uXHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMzExNDY1XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIycmVtIDhyZW0gMnJlbSAycmVtXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyLjVyZW1cIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCAvLyBOZWNlc3NhcnkgZm9yIHBvc2l0aW9uaW5nIHRoZSBoaWRkZW4gZGl2XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBJdGVtIElEOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57UG9zdElEfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIEl0ZW0gTmFtZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0l0ZW1UaXRsZX08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBRdWVzdGlvbjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1F1ZXN0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFlvdXIgQW5zd2VyOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57QW5zd2VyfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFRpbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntWYWxpZGF0b3JEYXRlVGltZX08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICB7aXNEaXZWaXNpYmxlIHx8IChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgIFNob3cgUmVzcG9uc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge2lzRGl2VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGg0PiBSZXNwb25zZToge2VudGVyZWRDb250YWN0fTwvaDQ+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIsXHJcbiAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2RlbGV0ZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlSXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==