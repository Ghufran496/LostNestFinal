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
              // Handle the result if needed
              window.location.reload();
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              // Handle the error, e.g., show an error message to the user
              console.error("Error deleting response:", _context.t0.message);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function deleteButtonClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    style: {
      fontSize: "1.5rem",
      border: "1px solid #311465",
      padding: "2rem 8rem 2rem 2rem",
      textTransform: "capitalize",
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
        lineNumber: 74,
        columnNumber: 18
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: ItemTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: ValidatorDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this), isDivVisible || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
      onClick: handleButtonClick,
      children: "Show Response"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
        lineNumber: 105,
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
          lineNumber: 113,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          onClick: deleteButtonClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaXNJdGVtRGVsZXRlIiwic2V0SXNJdGVtRGVsZXRlIiwiZGVsZXRlUG9zdERhdGEiLCJEZWxldGVSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJvayIsInRleHQiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkZWxldGVCdXR0b25DbGljayIsInJlc3VsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiLCJib3JkZXIiLCJwYWRkaW5nIiwidGV4dFRyYW5zZm9ybSIsImJveFNoYWRvdyIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImNsYXNzZXMiLCJzcGFuZXIiLCJidG4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxvQkFVMUJBLEtBQUssQ0FBQ0MsSUFWb0I7QUFBQSxN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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFXRTtBQUNFLGFBQUssRUFBRTtBQUNMK0MsaUJBQU8sRUFBRSxNQURKO0FBRUxJLDZCQUFtQixFQUFFLFNBRmhCO0FBR0xDLGlCQUFPLEVBQUU7QUFISixTQURUO0FBQUEsZ0NBT0U7QUFBUSxtQkFBUyxFQUFFUiwrREFBTyxDQUFDRSxHQUEzQjtBQUFnQyxpQkFBTyxFQUFFaEIsaUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBVUU7QUFBUSxtQkFBUyxFQUFFYywrREFBTyxDQUFDRSxHQUEzQjtBQUFnQyxpQkFBTyxFQUFFZixpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0VELENBeEhEOztHQUFNbkMsWTs7S0FBQUEsWTtBQTBIU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzcG9uc2VzLmFjMTljMjQzNTYxMGZjMmIzZmU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUmVzcG9uc2VJdGVtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFJlc3BvbnNlSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIGVudGVyZWRDb250YWN0LFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIFZhbGlkYXRvckRhdGVUaW1lLFxyXG4gICAgQW5zd2VyLFxyXG4gIH0gPSBwcm9wcy5kYXRhO1xyXG4gIGNvbnN0IFtpc0RpdlZpc2libGUsIHNldElzRGl2VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzSXRlbURlbGV0ZSwgc2V0SXNJdGVtRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVQb3N0RGF0YShEZWxldGVSZXNwb25zZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYW5zd2Vycy9kZWxldGVSZXNwb25zZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIERlbGV0ZVJlc3BvbnNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c30sIE1lc3NhZ2U6ICR7ZXJyb3JNZXNzYWdlfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyByZXNwb25zZTpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0RpdlZpc2libGUoIWlzRGl2VmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0l0ZW1EZWxldGUodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxldGVQb3N0RGF0YShfaWQpO1xyXG4gICAgICAvLyBIYW5kbGUgdGhlIHJlc3VsdCBpZiBuZWVkZWRcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSB1c2VyXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyByZXNwb25zZTpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMxMTQ2NVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMnJlbSA4cmVtIDJyZW0gMnJlbVwiLFxyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMi41cmVtXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgLy8gTmVjZXNzYXJ5IGZvciBwb3NpdGlvbmluZyB0aGUgaGlkZGVuIGRpdlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgSXRlbSBJRDogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1Bvc3RJRH08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBJdGVtIE5hbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntJdGVtVGl0bGV9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgUXVlc3Rpb246IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntRdWVzdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBZb3VyIEFuc3dlcjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0Fuc3dlcn08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBUaW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57VmFsaWRhdG9yRGF0ZVRpbWV9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG5cclxuICAgICAge2lzRGl2VmlzaWJsZSB8fCAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICBTaG93IFJlc3BvbnNlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0RpdlZpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoND4gUmVzcG9uc2U6IHtlbnRlcmVkQ29udGFjdH08L2g0PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxyXG4gICAgICAgICAgICAgIGdyaWRHYXA6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtkZWxldGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZUl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=