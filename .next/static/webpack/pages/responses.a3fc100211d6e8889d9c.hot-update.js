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

  function deletePostData(_x) {
    return _deletePostData.apply(this, arguments);
  }

  function _deletePostData() {
    _deletePostData = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(DeleteResponse) {
      var response, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/post/postitem", {
                method: "POST",
                body: JSON.stringify({
                  DeleteResponse: DeleteResponse
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.json();

            case 5:
              data = _context2.sent;

              if (!response.ok) {
                console.log("not ok");
              }

              return _context2.abrupt("return", data);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
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
              _context.next = 2;
              return deletePostData(_id);

            case 2:
              result = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
        lineNumber: 59,
        columnNumber: 18
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: ItemTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: ValidatorDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), isDivVisible || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
      onClick: handleButtonClick,
      children: "Show Response"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
        lineNumber: 90,
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
          lineNumber: 98,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          onClick: deleteButtonClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(ResponseItem, "oJwIBM4dWp6v6/unmgmtRAQIjvE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiZGVsZXRlUG9zdERhdGEiLCJEZWxldGVSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwib2siLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkZWxldGVCdXR0b25DbGljayIsInJlc3VsdCIsImZvbnRTaXplIiwiYm9yZGVyIiwicGFkZGluZyIsInRleHRUcmFuc2Zvcm0iLCJib3hTaGFkb3ciLCJmb250V2VpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjbGFzc2VzIiwic3BhbmVyIiwiYnRuIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZEdhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsb0JBVTFCQSxLQUFLLENBQUNDLElBVm9CO0FBQUEsTUFFNUJDLEdBRjRCLGVBRTVCQSxHQUY0QjtBQUFBLE1BRzVCQyxjQUg0QixlQUc1QkEsY0FINEI7QUFBQSxNQUk1QkMsU0FKNEIsZUFJNUJBLFNBSjRCO0FBQUEsTUFLNUJDLE1BTDRCLGVBSzVCQSxN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Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Jlc3BvbnNlSXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBSZXNwb25zZUl0ZW0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBlbnRlcmVkQ29udGFjdCxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBWYWxpZGF0b3JEYXRlVGltZSxcclxuICAgIEFuc3dlcixcclxuICB9ID0gcHJvcHMuZGF0YTtcclxuICBjb25zdCBbaXNEaXZWaXNpYmxlLCBzZXRJc0RpdlZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVQb3N0RGF0YShEZWxldGVSZXNwb25zZSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdC9wb3N0aXRlbVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBEZWxldGVSZXNwb25zZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBva1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNEaXZWaXNpYmxlKCFpc0RpdlZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlUG9zdERhdGEoX2lkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMzExNDY1XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIycmVtIDhyZW0gMnJlbSAycmVtXCIsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyLjVyZW1cIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCAvLyBOZWNlc3NhcnkgZm9yIHBvc2l0aW9uaW5nIHRoZSBoaWRkZW4gZGl2XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBJdGVtIElEOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57UG9zdElEfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIEl0ZW0gTmFtZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0l0ZW1UaXRsZX08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBRdWVzdGlvbjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1F1ZXN0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFlvdXIgQW5zd2VyOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57QW5zd2VyfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFRpbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntWYWxpZGF0b3JEYXRlVGltZX08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICB7aXNEaXZWaXNpYmxlIHx8IChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgIFNob3cgUmVzcG9uc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge2lzRGl2VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGg0PiBSZXNwb25zZToge2VudGVyZWRDb250YWN0fTwvaDQ+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIsXHJcbiAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2RlbGV0ZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlSXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==