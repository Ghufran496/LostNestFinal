webpackHotUpdate_N_E("pages/mylistings/[specificid]",{

/***/ "./components/overlayForm/AForm.js":
/*!*****************************************!*\
  !*** ./components/overlayForm/AForm.js ***!
  \*****************************************/
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
/* harmony import */ var _AForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AForm.module.css */ "./components/overlayForm/AForm.module.css");
/* harmony import */ var _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DetailForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailForm */ "./components/overlayForm/DetailForm.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\AForm.js",
    _s = $RefreshSig$();






function AForm(props) {
  _s();

  var _props$data = props.data2,
      _id = _props$data._id,
      Answer = _props$data.Answer,
      ItemTitle = _props$data.ItemTitle,
      PostID = _props$data.PostID,
      PosterID = _props$data.PosterID,
      Question = _props$data.Question,
      SubmittedDateTime = _props$data.SubmittedDateTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isYes = _useState[0],
      setIsYes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var yesHandler = function yesHandler() {
    setIsYes(true);
  };

  function sendMessage(_x, _x2, _x3, _x4, _x5, _x6) {
    return _sendMessage.apply(this, arguments);
  }

  function _sendMessage() {
    _sendMessage = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime) {
      var response, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/answers/sendResponse", {
                method: "POST",
                body: JSON.stringify({
                  enteredInformations: enteredInformations,
                  ItemTitle: ItemTitle,
                  PostID: PostID,
                  PosterID: PosterID,
                  Question: Question,
                  combinedDateTime: combinedDateTime,
                  Answer: Answer
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
    return _sendMessage.apply(this, arguments);
  }

  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString("en-US");
  var formattedTime = currentDate.toLocaleTimeString("en-US");
  var combinedDateTime = "".concat(formattedDate, " ").concat(formattedTime);

  var noHandler = /*#__PURE__*/function () {
    var _ref = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var enteredInformations, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredInformations = "Responder has nullified the validation.";
              _context.next = 5;
              return sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer);

            case 5:
              result = _context.sent;

              if (props.oncancle) {
                props.oncancle();
              }

              setIsLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function noHandler(_x7) {
      return _ref.apply(this, arguments);
    };
  }();

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "1.5rem"
      },
      children: "Submiting..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: isYes ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      close: props.oncancle,
      senderData: props.data2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.diver,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: SubmittedDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Question?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.para1,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Answer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.para1,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndiver,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button90,
          type: "button",
          role: "button",
          onClick: yesHandler,
          children: "Yes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button90,
          type: "button",
          role: "button",
          onClick: noHandler,
          children: "No"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button90,
          type: "button",
          role: "button",
          onClick: props.oncancle,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

_s(AForm, "bUP9nO8CGSe9ZpiXI2r/rnTCwsM=");

_c = AForm;
/* harmony default export */ __webpack_exports__["default"] = (AForm);

var _c;

$RefreshReg$(_c, "AForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9BRm9ybS5qcyJdLCJuYW1lcyI6WyJBRm9ybSIsInByb3BzIiwiZGF0YTIiLCJfaWQiLCJBbnN3ZXIiLCJJdGVtVGl0bGUiLCJQb3N0SUQiLCJQb3N0ZXJJRCIsIlF1ZXN0aW9uIiwiU3VibWl0dGVkRGF0ZVRpbWUiLCJ1c2VTdGF0ZSIsImlzWWVzIiwic2V0SXNZZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ5ZXNIYW5kbGVyIiwic2VuZE1lc3NhZ2UiLCJlbnRlcmVkSW5mb3JtYXRpb25zIiwiY29tYmluZWREYXRlVGltZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJub0hhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0Iiwib25jYW5jbGUiLCJmb250U2l6ZSIsImNsYXNzZXMiLCJkaXZlciIsInBhcmExIiwiYnRuZGl2ZXIiLCJidXR0b245MCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLG9CQVNoQkEsS0FBSyxDQUFDQyxLQVRVO0FBQUEsTUFFbEJDLEdBRmtCLGVBRWxCQSxHQUZrQjtBQUFBLE1BR2xCQyxNQUhrQixlQUdsQkEsTUFIa0I7QUFBQSxNQUlsQkMsU0FKa0IsZUFJbEJBLFNBSmtCO0FBQUEsTUFLbEJDLE1BTGtCLGVBS2xCQSxNQUxrQjtBQUFBLE1BTWxCQyxRQU5rQixlQU1sQkEsUUFOa0I7QUFBQSxNQU9sQkMsUUFQa0IsZUFPbEJBLFFBUGtCO0FBQUEsTUFRbEJDLGlCQVJrQixlQVFsQkEsaUJBUmtCOztBQUFBLGtCQVVNQyxzREFBUSxDQUFDLEtBQUQsQ0FWZDtBQUFBLE1BVWJDLEtBVmE7QUFBQSxNQVVOQyxRQVZNOztBQUFBLG1CQVdjRixzREFBUSxDQUFDLEtBQUQsQ0FYdEI7QUFBQSxNQVdiRyxTQVhhO0FBQUEsTUFXRkMsWUFYRTs7QUFhcEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkgsWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBYm9CLFdBaUJMSSxXQWpCSztBQUFBO0FBQUE7O0FBQUE7QUFBQSx3UkFpQnBCLGtCQUNFQyxtQkFERixFQUVFWixTQUZGLEVBR0VDLE1BSEYsRUFJRUMsUUFKRixFQUtFQyxRQUxGLEVBTUVVLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUXlCQyxLQUFLLENBQUMsMkJBQUQsRUFBOEI7QUFDeERDLHNCQUFNLEVBQUUsTUFEZ0Q7QUFFeERDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CTixxQ0FBbUIsRUFBbkJBLG1CQURtQjtBQUVuQlosMkJBQVMsRUFBVEEsU0FGbUI7QUFHbkJDLHdCQUFNLEVBQU5BLE1BSG1CO0FBSW5CQywwQkFBUSxFQUFSQSxRQUptQjtBQUtuQkMsMEJBQVEsRUFBUkEsUUFMbUI7QUFNbkJVLGtDQUFnQixFQUFoQkEsZ0JBTm1CO0FBT25CZCx3QkFBTSxFQUFOQTtBQVBtQixpQkFBZixDQUZrRDtBQVd4RG9CLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQVgrQyxlQUE5QixDQVI5Qjs7QUFBQTtBQVFRQyxzQkFSUjtBQUFBO0FBQUEscUJBd0JxQkEsUUFBUSxDQUFDQyxJQUFULEVBeEJyQjs7QUFBQTtBQXdCUUMsa0JBeEJSOztBQTBCRSxrQkFBSSxDQUFDRixRQUFRLENBQUNHLEVBQWQsRUFBa0I7QUFDaEJkLDRCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7O0FBNUJILGdEQThCU2EsSUE5QlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqQm9CO0FBQUE7QUFBQTs7QUFrRHBCLE1BQU1FLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEVBQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRixXQUFXLENBQUNHLGtCQUFaLENBQStCLE9BQS9CLENBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSixXQUFXLENBQUNLLGtCQUFaLENBQStCLE9BQS9CLENBQXRCO0FBQ0EsTUFBTWhCLGdCQUFnQixhQUFNYSxhQUFOLGNBQXVCRSxhQUF2QixDQUF0Qjs7QUFFQSxNQUFNRSxTQUFTO0FBQUEsb1JBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ0F2QiwwQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNNRyxpQ0FIVSxHQUdZLHlDQUhaO0FBQUE7QUFBQSxxQkFLS0QsV0FBVyxDQUM5QkMsbUJBRDhCLEVBRTlCWixTQUY4QixFQUc5QkMsTUFIOEIsRUFJOUJDLFFBSjhCLEVBSzlCQyxRQUw4QixFQU05QlUsZ0JBTjhCLEVBTzlCZCxNQVA4QixDQUxoQjs7QUFBQTtBQUtWa0Msb0JBTFU7O0FBY2hCLGtCQUFJckMsS0FBSyxDQUFDc0MsUUFBVixFQUFvQjtBQUNsQnRDLHFCQUFLLENBQUNzQyxRQUFOO0FBQ0Q7O0FBQ0R6QiwwQkFBWSxDQUFDLEtBQUQsQ0FBWjs7QUFqQmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRxQixTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBbUJBLE1BQUl0QixTQUFKLEVBQWU7QUFDYix3QkFBTztBQUFLLFdBQUssRUFBRTtBQUFFMkIsZ0JBQVEsRUFBRTtBQUFaLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsY0FDRzdCLEtBQUssZ0JBQ0oscUVBQUMsbURBQUQ7QUFBWSxXQUFLLEVBQUVWLEtBQUssQ0FBQ3NDLFFBQXpCO0FBQW1DLGdCQUFVLEVBQUV0QyxLQUFLLENBQUNDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESSxnQkFHSjtBQUFLLGVBQVMsRUFBRXVDLHdEQUFPLENBQUNDLEtBQXhCO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS2pDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUcsaUJBQVMsRUFBRWdDLHdEQUFPLENBQUNFLEtBQXRCO0FBQUEsa0JBQThCbkM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQUcsaUJBQVMsRUFBRWlDLHdEQUFPLENBQUNFLEtBQXRCO0FBQUEsa0JBQThCdkM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBT0U7QUFBSyxpQkFBUyxFQUFFcUMsd0RBQU8sQ0FBQ0csUUFBeEI7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVILHdEQUFPLENBQUNJLFFBRHJCO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxjQUFJLEVBQUMsUUFIUDtBQUlFLGlCQUFPLEVBQUU5QixVQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFDRSxtQkFBUyxFQUFFMEIsd0RBQU8sQ0FBQ0ksUUFEckI7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLGNBQUksRUFBQyxRQUhQO0FBSUUsaUJBQU8sRUFBRVYsU0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQWlCRTtBQUNFLG1CQUFTLEVBQUVNLHdEQUFPLENBQUNJLFFBRHJCO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxjQUFJLEVBQUMsUUFIUDtBQUlFLGlCQUFPLEVBQUU1QyxLQUFLLENBQUNzQyxRQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMENEOztHQXhIUXZDLEs7O0tBQUFBLEs7QUEwSE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215bGlzdGluZ3MvW3NwZWNpZmljaWRdLmMyZWZiZGEyNjFjZDQ2YzBjMjJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQUZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgRGV0YWlsRm9ybSBmcm9tIFwiLi9EZXRhaWxGb3JtXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIEFuc3dlcixcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBTdWJtaXR0ZWREYXRlVGltZSxcclxuICB9ID0gcHJvcHMuZGF0YTI7XHJcbiAgY29uc3QgW2lzWWVzLCBzZXRJc1llc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeWVzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzWWVzKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKFxyXG4gICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBjb21iaW5lZERhdGVUaW1lXHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL3NlbmRSZXNwb25zZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgICBQb3N0SUQsXHJcbiAgICAgICAgUG9zdGVySUQsXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgICBBbnN3ZXIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGNvbWJpbmVkRGF0ZVRpbWUgPSBgJHtmb3JtYXR0ZWREYXRlfSAke2Zvcm1hdHRlZFRpbWV9YDtcclxuXHJcbiAgY29uc3Qgbm9IYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgZW50ZXJlZEluZm9ybWF0aW9ucyA9IFwiUmVzcG9uZGVyIGhhcyBudWxsaWZpZWQgdGhlIHZhbGlkYXRpb24uXCI7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2UoXHJcbiAgICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgUG9zdElELFxyXG4gICAgICBQb3N0ZXJJRCxcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICAgIEFuc3dlclxyXG4gICAgKTtcclxuICAgIGlmIChwcm9wcy5vbmNhbmNsZSkge1xyXG4gICAgICBwcm9wcy5vbmNhbmNsZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PlN1Ym1pdGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHtpc1llcyA/IChcclxuICAgICAgICA8RGV0YWlsRm9ybSBjbG9zZT17cHJvcHMub25jYW5jbGV9IHNlbmRlckRhdGE9e3Byb3BzLmRhdGEyfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmVyfT5cclxuICAgICAgICAgIDxoMz57U3VibWl0dGVkRGF0ZVRpbWV9PC9oMz5cclxuICAgICAgICAgIDxoMj5RdWVzdGlvbj88L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmExfT57UXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgPGgyPkFuc3dlcjwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGFyYTF9PntBbnN3ZXJ9PC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdmVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b245MH1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt5ZXNIYW5kbGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgWWVzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjkwfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e25vSGFuZGxlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE5vXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjkwfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uY2FuY2xlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQUZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=