webpackHotUpdate_N_E("pages/dashboard/[itemid]",{

/***/ "./components/overlayForm/Form.js":
/*!****************************************!*\
  !*** ./components/overlayForm/Form.js ***!
  \****************************************/
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
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form.module.css */ "./components/overlayForm/Form.module.css");
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\Form.js",
    _s = $RefreshSig$();




 // http://localhost:3000/dashboard/654bc2921efc6c1070461e13

function Form(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var answerInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function sendQuestionData(_x, _x2, _x3, _x4, _x5) {
    return _sendQuestionData.apply(this, arguments);
  }

  function _sendQuestionData() {
    _sendQuestionData = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(enteredAnswer, postID, ItemTitle, Question, combinedDateTime) {
      var response, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/qresponse/QuestionResponse", {
                method: "POST",
                body: JSON.stringify({
                  enteredAnswer: enteredAnswer,
                  postID: postID,
                  ItemTitle: ItemTitle,
                  Question: Question,
                  combinedDateTime: combinedDateTime
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
                setIsLoading(false);
              }

              return _context2.abrupt("return", data);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _sendQuestionData.apply(this, arguments);
  }

  var postID = props.data2._id;
  var ItemTitle = props.data2.Title;
  var Question = props.data2.Question;
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString("en-US");
  var formattedTime = currentDate.toLocaleTimeString("en-US");
  var combinedDateTime = "".concat(formattedDate, " ").concat(formattedTime); //console.log(postID);

  var answerSubmitHandler = /*#__PURE__*/function () {
    var _ref = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var enteredAnswer, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredAnswer = answerInputRef.current.value;
              _context.next = 5;
              return sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime);

            case 5:
              result = _context.sent;
              // console.log(result);
              event.target.reset(); // This resets the form

              setIsLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function answerSubmitHandler(_x6) {
      return _ref.apply(this, arguments);
    };
  }();

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "1.5rem"
      },
      children: "Submitting response..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
    onSubmit: answerSubmitHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "question",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.labels,
      children: "Question"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      id: "questionContent",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.span1,
      children: props.data2.Question
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "answer",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.labels,
      children: "Answer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      id: "answer",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.inputfield,
      ref: answerInputRef,
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndiv,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button89,
        type: "button",
        role: "button",
        onClick: props.oncancle,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button89,
        type: "submit",
        role: "button",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

_s(Form, "/Dsd/yR0bvR/bHR0C0Ge9ng9XYQ=");

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYW5zd2VySW5wdXRSZWYiLCJ1c2VSZWYiLCJzZW5kUXVlc3Rpb25EYXRhIiwiZW50ZXJlZEFuc3dlciIsInBvc3RJRCIsIkl0ZW1UaXRsZSIsIlF1ZXN0aW9uIiwiY29tYmluZWREYXRlVGltZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiZGF0YTIiLCJfaWQiLCJUaXRsZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJmb3JtYXR0ZWRUaW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiYW5zd2VyU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJyZXN1bHQiLCJ0YXJnZXQiLCJyZXNldCIsImZvbnRTaXplIiwiY2xhc3NlcyIsIm1haW4iLCJsYWJlbHMiLCJzcGFuMSIsImlucHV0ZmllbGQiLCJidG5kaXYiLCJidXR0b244OSIsIm9uY2FuY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsS0FBRCxDQUR2QjtBQUFBLE1BQ1pDLFNBRFk7QUFBQSxNQUNEQyxZQURDOztBQUVuQixNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLEVBQTdCOztBQUZtQixXQUlKQyxnQkFKSTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2UkFJbkIsa0JBQ0VDLGFBREYsRUFFRUMsTUFG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M0MsS0FBSyxDQUFDc0IsS0FBTixDQUFZWjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVNFO0FBQU8sYUFBTyxFQUFDLFFBQWY7QUFBd0IsZUFBUyxFQUFFOEIsdURBQU8sQ0FBQ0UsTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVlFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFFLEVBQUMsUUFGTDtBQUdFLGVBQVMsRUFBRUYsdURBQU8sQ0FBQ0ksVUFIckI7QUFJRSxTQUFHLEVBQUV4QyxjQUpQO0FBS0UsY0FBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLGVBb0JFO0FBQUssZUFBUyxFQUFFb0MsdURBQU8sQ0FBQ0ssTUFBeEI7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUVMLHVEQUFPLENBQUNNLFFBRHJCO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxZQUFJLEVBQUMsUUFIUDtBQUlFLGVBQU8sRUFBRTlDLEtBQUssQ0FBQytDLFFBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFTRTtBQUFRLGlCQUFTLEVBQUVQLHVEQUFPLENBQUNNLFFBQTNCO0FBQXFDLFlBQUksRUFBQyxRQUExQztBQUFtRCxZQUFJLEVBQUMsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0dBdEdRL0MsSTs7S0FBQUEsSTtBQXdHTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLjk0MGNhMmNiMmJkYTJhMTA3NmE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0Zvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbi8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXNoYm9hcmQvNjU0YmMyOTIxZWZjNmMxMDcwNDYxZTEzXHJcblxyXG5mdW5jdGlvbiBGb3JtKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBhbnN3ZXJJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZW5kUXVlc3Rpb25EYXRhKFxyXG4gICAgZW50ZXJlZEFuc3dlcixcclxuICAgIHBvc3RJRCxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgY29tYmluZWREYXRlVGltZVxyXG4gICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcXJlc3BvbnNlL1F1ZXN0aW9uUmVzcG9uc2VcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZW50ZXJlZEFuc3dlcixcclxuICAgICAgICBwb3N0SUQsXHJcbiAgICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgY29uc3QgcG9zdElEID0gcHJvcHMuZGF0YTIuX2lkO1xyXG4gIGNvbnN0IEl0ZW1UaXRsZSA9IHByb3BzLmRhdGEyLlRpdGxlO1xyXG4gIGNvbnN0IFF1ZXN0aW9uID0gcHJvcHMuZGF0YTIuUXVlc3Rpb247XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGNvbWJpbmVkRGF0ZVRpbWUgPSBgJHtmb3JtYXR0ZWREYXRlfSAke2Zvcm1hdHRlZFRpbWV9YDtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhwb3N0SUQpO1xyXG4gIGNvbnN0IGFuc3dlclN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZEFuc3dlciA9IGFuc3dlcklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZFF1ZXN0aW9uRGF0YShcclxuICAgICAgZW50ZXJlZEFuc3dlcixcclxuICAgICAgcG9zdElELFxyXG4gICAgICBJdGVtVGl0bGUsXHJcbiAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICBjb21iaW5lZERhdGVUaW1lXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBldmVudC50YXJnZXQucmVzZXQoKTsgLy8gVGhpcyByZXNldHMgdGhlIGZvcm1cclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0+U3VibWl0dGluZyByZXNwb25zZS4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0gb25TdWJtaXQ9e2Fuc3dlclN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInF1ZXN0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgUXVlc3Rpb25cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzcGFuIGlkPVwicXVlc3Rpb25Db250ZW50XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW4xfT5cclxuICAgICAgICB7cHJvcHMuZGF0YTIuUXVlc3Rpb259XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgQW5zd2VyXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBpZD1cImFuc3dlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgcmVmPXthbnN3ZXJJbnB1dFJlZn1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25jYW5jbGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xvc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX0gdHlwZT1cInN1Ym1pdFwiIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9