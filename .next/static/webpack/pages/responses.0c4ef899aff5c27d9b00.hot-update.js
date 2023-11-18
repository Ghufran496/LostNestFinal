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

  return (
    /*#__PURE__*/
    // <li
    //   style={{
    //     fontSize: "1.5rem",
    //     border: "1px solid #311465",
    //     padding: "2rem 8rem 2rem 2rem",
    //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //     fontWeight: "400",
    //     borderRadius: "2.5rem",
    //     position: "relative", // Necessary for positioning the hidden div
    //   }}
    // >
    //   <h3>
    //     Item ID: <span className={classes.spaner}>{PostID}</span>
    //   </h3>
    //   <h3>
    //     Item Name: <span className={classes.spaner}>{ItemTitle}</span>
    //   </h3>
    //   <h3>
    //     Question: <span className={classes.spaner}>{Question}</span>
    //   </h3>
    //   <h3>
    //     Your Answer: <span className={classes.spaner}>{Answer}</span>
    //   </h3>
    //   <h3>
    //     Time: <span className={classes.spaner}>{ValidatorDateTime}</span>
    //   </h3>
    //   {isDivVisible || (
    //     <button className={classes.btn} onClick={handleButtonClick}>
    //       Show Response
    //     </button>
    //   )}
    //   {isDivVisible && (
    //     <div
    //       style={{
    //         padding: "1rem",
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         borderRadius: "5rem",
    //       }}
    //     >
    //       <h4>
    //         Response :{" "}
    //         <span style={{ color: "#311465" }}>{enteredContact}</span>
    //       </h4>
    //       <div
    //         style={{
    //           display: "grid",
    //           gridTemplateColumns: "1fr 1fr",
    //           gridGap: "1rem",
    //         }}
    //       >
    //         <button className={classes.btn} onClick={handleButtonClick}>
    //           Close
    //         </button>
    //         <button className={classes.btn} onClick={deleteButtonClick}>
    //           Delete
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </li>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
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
        lineNumber: 154,
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
            lineNumber: 166,
            columnNumber: 20
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
            children: ItemTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 22
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
            children: Question
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
            children: Answer
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 24
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spaner,
            children: ValidatorDateTime
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }, _this), isDivVisible || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
          onClick: handleButtonClick,
          children: "Show Response"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
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
              lineNumber: 200,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
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
              lineNumber: 209,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn,
              onClick: deleteButtonClick,
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }, _this)
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaXNJdGVtRGVsZXRlIiwic2V0SXNJdGVtRGVsZXRlIiwiZGVsZXRlUG9zdERhdGEiLCJEZWxldGVSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJvayIsInRleHQiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkZWxldGVCdXR0b25DbGljayIsInJlc3VsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwibGVmdCIsInRvcCIsIm1hcmdpbkxlZnQiLCJjbGFzc2VzIiwic3BhbmVyIiwiYnRuIiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRHYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFl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QURiLGVBRUU7QUFBTSxtQkFBSyxFQUFFO0FBQUVVLHFCQUFLLEVBQUU7QUFBVCxlQUFiO0FBQUEsd0JBQW9DekQ7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUFlRTtBQUNFLGlCQUFLLEVBQUU7QUFDTHNDLHFCQUFPLEVBQUUsTUFESjtBQUVMb0IsaUNBQW1CLEVBQUUsU0FGaEI7QUFHTEMscUJBQU8sRUFBRTtBQUhKLGFBRFQ7QUFBQSxvQ0FPRTtBQUFRLHVCQUFTLEVBQUVOLCtEQUFPLENBQUNFLEdBQTNCO0FBQWdDLHFCQUFPLEVBQUV6QixpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFVRTtBQUFRLHVCQUFTLEVBQUV1QiwrREFBTyxDQUFDRSxHQUEzQjtBQUFnQyxxQkFBTyxFQUFFeEIsaUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqRUY7QUFnSkQsQ0F6TkQ7O0dBQU1uQyxZOztLQUFBQSxZO0FBMk5TQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNwb25zZXMuMGM0ZWY4OTlhZmY1YzI3ZDliMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9SZXNwb25zZUl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUmVzcG9uc2VJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgZW50ZXJlZENvbnRhY3QsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBQb3N0SUQsXHJcbiAgICBQb3N0ZXJJRCxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgVmFsaWRhdG9yRGF0ZVRpbWUsXHJcbiAgICBBbnN3ZXIsXHJcbiAgfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc3QgW2lzRGl2VmlzaWJsZSwgc2V0SXNEaXZWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNJdGVtRGVsZXRlLCBzZXRJc0l0ZW1EZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3REYXRhKERlbGV0ZVJlc3BvbnNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL2RlbGV0ZVJlc3BvbnNlXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgRGVsZXRlUmVzcG9uc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfSwgTWVzc2FnZTogJHtlcnJvck1lc3NhZ2V9YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHJlc3BvbnNlOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldElzRGl2VmlzaWJsZSghaXNEaXZWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldElzSXRlbURlbGV0ZSh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlbGV0ZVBvc3REYXRhKF9pZCk7XHJcbiAgICAgIC8vICAgLy8gSGFuZGxlIHRoZSByZXN1bHQgaWYgbmVlZGVkXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgc2V0SXNJdGVtRGVsZXRlKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IsIGUuZy4sIHNob3cgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgcmVzcG9uc2U6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRJc0l0ZW1EZWxldGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaWYgKGlzSXRlbURlbGV0ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHBcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBJdGVtIElzIEJlaW5nIERlbGV0ZWQuLi5cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8bGlcclxuICAgIC8vICAgc3R5bGU9e3tcclxuICAgIC8vICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgIC8vICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMTE0NjVcIixcclxuICAgIC8vICAgICBwYWRkaW5nOiBcIjJyZW0gOHJlbSAycmVtIDJyZW1cIixcclxuICAgIC8vICAgICBib3hTaGFkb3c6IFwiMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiLFxyXG4gICAgLy8gICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAvLyAgICAgYm9yZGVyUmFkaXVzOiBcIjIuNXJlbVwiLFxyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIC8vIE5lY2Vzc2FyeSBmb3IgcG9zaXRpb25pbmcgdGhlIGhpZGRlbiBkaXZcclxuICAgIC8vICAgfX1cclxuICAgIC8vID5cclxuICAgIC8vICAgPGgzPlxyXG4gICAgLy8gICAgIEl0ZW0gSUQ6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntQb3N0SUR9PC9zcGFuPlxyXG4gICAgLy8gICA8L2gzPlxyXG4gICAgLy8gICA8aDM+XHJcbiAgICAvLyAgICAgSXRlbSBOYW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57SXRlbVRpdGxlfTwvc3Bhbj5cclxuICAgIC8vICAgPC9oMz5cclxuICAgIC8vICAgPGgzPlxyXG4gICAgLy8gICAgIFF1ZXN0aW9uOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57UXVlc3Rpb259PC9zcGFuPlxyXG4gICAgLy8gICA8L2gzPlxyXG4gICAgLy8gICA8aDM+XHJcbiAgICAvLyAgICAgWW91ciBBbnN3ZXI6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntBbnN3ZXJ9PC9zcGFuPlxyXG4gICAgLy8gICA8L2gzPlxyXG4gICAgLy8gICA8aDM+XHJcbiAgICAvLyAgICAgVGltZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1ZhbGlkYXRvckRhdGVUaW1lfTwvc3Bhbj5cclxuICAgIC8vICAgPC9oMz5cclxuXHJcbiAgICAvLyAgIHtpc0RpdlZpc2libGUgfHwgKFxyXG4gICAgLy8gICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlxyXG4gICAgLy8gICAgICAgU2hvdyBSZXNwb25zZVxyXG4gICAgLy8gICAgIDwvYnV0dG9uPlxyXG4gICAgLy8gICApfVxyXG4gICAgLy8gICB7aXNEaXZWaXNpYmxlICYmIChcclxuICAgIC8vICAgICA8ZGl2XHJcbiAgICAvLyAgICAgICBzdHlsZT17e1xyXG4gICAgLy8gICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIixcclxuICAgIC8vICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAvLyAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAvLyAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgLy8gICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgLy8gICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXJlbVwiLFxyXG4gICAgLy8gICAgICAgfX1cclxuICAgIC8vICAgICA+XHJcbiAgICAvLyAgICAgICA8aDQ+XHJcbiAgICAvLyAgICAgICAgIFJlc3BvbnNlIDp7XCIgXCJ9XHJcbiAgICAvLyAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMzMTE0NjVcIiB9fT57ZW50ZXJlZENvbnRhY3R9PC9zcGFuPlxyXG4gICAgLy8gICAgICAgPC9oND5cclxuICAgIC8vICAgICAgIDxkaXZcclxuICAgIC8vICAgICAgICAgc3R5bGU9e3tcclxuICAgIC8vICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgIC8vICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIixcclxuICAgIC8vICAgICAgICAgICBncmlkR2FwOiBcIjFyZW1cIixcclxuICAgIC8vICAgICAgICAgfX1cclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAvLyAgICAgICAgICAgQ2xvc2VcclxuICAgIC8vICAgICAgICAgPC9idXR0b24+XHJcbiAgICAvLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17ZGVsZXRlQnV0dG9uQ2xpY2t9PlxyXG4gICAgLy8gICAgICAgICAgIERlbGV0ZVxyXG4gICAgLy8gICAgICAgICA8L2J1dHRvbj5cclxuICAgIC8vICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gICApfVxyXG4gICAgLy8gPC9saT5cclxuICAgIDxsaVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMxMTQ2NVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMnJlbVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIC8vIEhpZGUgb3ZlcmZsb3cgZm9yIGEgY2xlYW5lciBsb29rXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjMzExNDY1XCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiNHB4XCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0cmVtXCIgfX0+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgSXRlbSBJRDogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1Bvc3RJRH08L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICBJdGVtIE5hbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntJdGVtVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgUXVlc3Rpb246IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntRdWVzdGlvbn08L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICBZb3VyIEFuc3dlcjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0Fuc3dlcn08L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICBUaW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57VmFsaWRhdG9yRGF0ZVRpbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgIHtpc0RpdlZpc2libGUgfHwgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgIFNob3cgUmVzcG9uc2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2lzRGl2VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjRmNGY0XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICBSZXNwb25zZSA6e1wiIFwifVxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMzMTE0NjVcIiB9fT57ZW50ZXJlZENvbnRhY3R9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIsXHJcbiAgICAgICAgICAgICAgICBncmlkR2FwOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17ZGVsZXRlQnV0dG9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZUl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=