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
      padding: "2rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontWeight: "400",
      borderRadius: "1rem",
      position: "relative",
      overflow: "hidden" // Hide overflow for a cleaner look

    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        background: "#311465",
        height: "100%",
        width: "4px",
        position: "absolute",
        left: 0,
        top: 0
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginLeft: "4rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Item ID: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
          children: PostID
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 20
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
          children: ItemTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 22
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
          children: Question
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
          children: Answer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 24
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
          children: ValidatorDateTime
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), isDivVisible || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
        onClick: handleButtonClick,
        children: "Show Response"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, _this), isDivVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
          background: "#f4f4f4"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: ["Response :", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: "#311465"
            },
            children: enteredContact
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
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
            lineNumber: 145,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
            onClick: deleteButtonClick,
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaXNJdGVtRGVsZXRlIiwic2V0SXNJdGVtRGVsZXRlIiwiZGVsZXRlUG9zdERhdGEiLCJEZWxldGVSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJvayIsInRleHQiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkZWxldGVCdXR0b25DbGljayIsInJlc3VsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibGVmdCIsInRvcCIsIm1hcmdpbkxlZnQiLCJjbGFzc2VzIiwic3BhbmVyIiwiYnRuIiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRHYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFl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LGVBVUU7QUFBUSxxQkFBUyxFQUFFdUIsK0RBQU8sQ0FBQ0UsR0FBM0I7QUFBZ0MsbUJBQU8sRUFBRXhCLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdGRCxDQXpKRDs7R0FBTW5DLFk7O0tBQUFBLFk7QUEySlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc3BvbnNlcy42Zjk3YjdkN2FjYjQ2ZjAxNmQ2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Jlc3BvbnNlSXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBSZXNwb25zZUl0ZW0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBlbnRlcmVkQ29udGFjdCxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBWYWxpZGF0b3JEYXRlVGltZSxcclxuICAgIEFuc3dlcixcclxuICB9ID0gcHJvcHMuZGF0YTtcclxuICBjb25zdCBbaXNEaXZWaXNpYmxlLCBzZXRJc0RpdlZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0l0ZW1EZWxldGUsIHNldElzSXRlbURlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdERhdGEoRGVsZXRlUmVzcG9uc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvZGVsZXRlUmVzcG9uc2VcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBEZWxldGVSZXNwb25zZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9LCBNZXNzYWdlOiAke2Vycm9yTWVzc2FnZX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgcmVzcG9uc2U6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNEaXZWaXNpYmxlKCFpc0RpdlZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNJdGVtRGVsZXRlKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlUG9zdERhdGEoX2lkKTtcclxuICAgICAgLy8gICAvLyBIYW5kbGUgdGhlIHJlc3VsdCBpZiBuZWVkZWRcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICBzZXRJc0l0ZW1EZWxldGUoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSB1c2VyXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyByZXNwb25zZTpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHNldElzSXRlbURlbGV0ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpZiAoaXNJdGVtRGVsZXRlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cFxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIEl0ZW0gSXMgQmVpbmcgRGVsZXRlZC4uLlxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMxMTQ2NVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMnJlbVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIC8vIEhpZGUgb3ZlcmZsb3cgZm9yIGEgY2xlYW5lciBsb29rXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjMzExNDY1XCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiNHB4XCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0cmVtXCIgfX0+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgSXRlbSBJRDogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1Bvc3RJRH08L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICBJdGVtIE5hbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntJdGVtVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgUXVlc3Rpb246IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntRdWVzdGlvbn08L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICBZb3VyIEFuc3dlcjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0Fuc3dlcn08L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICBUaW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57VmFsaWRhdG9yRGF0ZVRpbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgIHtpc0RpdlZpc2libGUgfHwgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgIFNob3cgUmVzcG9uc2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2lzRGl2VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjRmNGY0XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICBSZXNwb25zZSA6e1wiIFwifVxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMzMTE0NjVcIiB9fT57ZW50ZXJlZENvbnRhY3R9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIsXHJcbiAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17ZGVsZXRlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZUl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=