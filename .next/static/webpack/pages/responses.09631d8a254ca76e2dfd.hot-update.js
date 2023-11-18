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

              if (!response.ok) {}

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
        lineNumber: 58,
        columnNumber: 18
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: ItemTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
        children: ValidatorDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), isDivVisible || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
      onClick: handleButtonClick,
      children: "Show Response"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
        lineNumber: 89,
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
          lineNumber: 97,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          onClick: deleteButtonClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiZGVsZXRlUG9zdERhdGEiLCJEZWxldGVSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwib2siLCJoYW5kbGVCdXR0b25DbGljayIsImRlbGV0ZUJ1dHRvbkNsaWNrIiwicmVzdWx0IiwiZm9udFNpemUiLCJib3JkZXIiLCJwYWRkaW5nIiwidGV4dFRyYW5zZm9ybSIsImJveFNoYWRvdyIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImNsYXNzZXMiLCJzcGFuZXIiLCJidG4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxvQkFVMUJBLEtBQUssQ0FBQ0MsSUFWb0I7QUFBQSxNQUU1QkMsR0FGNEIsZUFFNUJBLEdBRjRCO0FBQUEsTUFHNUJDLGNBSDRCLGVBRzVCQSxjQUg0QjtBQUFBLE1BSTVCQyxTQUo0QixlQUk1QkEsU0FKNEI7QUFBQSxNQUs1QkMsTUFMNEIsZUFLNUJBLE1BTDRCO0FBQUEsTUFNNUJD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QUFBQSxhQXhCRixFQTRCR0csWUFBWSxpQkFDWDtBQUFRLGVBQVMsRUFBRXdCLCtEQUFPLENBQUNFLEdBQTNCO0FBQWdDLGFBQU8sRUFBRWIsaUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JKLEVBaUNHYixZQUFZLGlCQUNYO0FBQ0UsV0FBSyxFQUFFO0FBQ0xrQixlQUFPLEVBQUUsTUFESjtBQUVMUyxlQUFPLEVBQUUsTUFGSjtBQUdMQyxxQkFBYSxFQUFFLFFBSFY7QUFJTEMsc0JBQWMsRUFBRSxRQUpYO0FBS0xDLGtCQUFVLEVBQUUsUUFMUDtBQU1MUixvQkFBWSxFQUFFO0FBTlQsT0FEVDtBQUFBLDhCQVVFO0FBQUEsa0NBQWdCOUIsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFXRTtBQUNFLGFBQUssRUFBRTtBQUNMbUMsaUJBQU8sRUFBRSxNQURKO0FBRUxJLDZCQUFtQixFQUFFLFNBRmhCO0FBR0xDLGlCQUFPLEVBQUU7QUFISixTQURUO0FBQUEsZ0NBT0U7QUFBUSxtQkFBUyxFQUFFUiwrREFBTyxDQUFDRSxHQUEzQjtBQUFnQyxpQkFBTyxFQUFFYixpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFVRTtBQUFRLG1CQUFTLEVBQUVXLCtEQUFPLENBQUNFLEdBQTNCO0FBQWdDLGlCQUFPLEVBQUVaLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRUQsQ0F4R0Q7O0dBQU0xQixZOztLQUFBQSxZO0FBMEdTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNwb25zZXMuMDk2MzFkOGEyNTRjYTc2ZTJkZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9SZXNwb25zZUl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUmVzcG9uc2VJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgZW50ZXJlZENvbnRhY3QsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBQb3N0SUQsXHJcbiAgICBQb3N0ZXJJRCxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgVmFsaWRhdG9yRGF0ZVRpbWUsXHJcbiAgICBBbnN3ZXIsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc3QgW2lzRGl2VmlzaWJsZSwgc2V0SXNEaXZWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdERhdGEoRGVsZXRlUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgRGVsZXRlUmVzcG9uc2UsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNEaXZWaXNpYmxlKCFpc0RpdlZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlUG9zdERhdGEoX2lkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMzExNDY1XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIycmVtIDhyZW0gMnJlbSAycmVtXCIsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIyLjVyZW1cIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCAvLyBOZWNlc3NhcnkgZm9yIHBvc2l0aW9uaW5nIHRoZSBoaWRkZW4gZGl2XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBJdGVtIElEOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57UG9zdElEfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIEl0ZW0gTmFtZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0l0ZW1UaXRsZX08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBRdWVzdGlvbjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1F1ZXN0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFlvdXIgQW5zd2VyOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57QW5zd2VyfTwvc3Bhbj5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFRpbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntWYWxpZGF0b3JEYXRlVGltZX08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICB7aXNEaXZWaXNpYmxlIHx8IChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgIFNob3cgUmVzcG9uc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge2lzRGl2VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGg0PiBSZXNwb25zZToge2VudGVyZWRDb250YWN0fTwvaDQ+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIsXHJcbiAgICAgICAgICAgICAgZ3JpZEdhcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2RlbGV0ZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlSXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==