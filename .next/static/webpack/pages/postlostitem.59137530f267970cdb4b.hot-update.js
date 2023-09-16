webpackHotUpdate_N_E("pages/postlostitem",{

/***/ "./components/postcomp/PostForm.js":
/*!*****************************************!*\
  !*** ./components/postcomp/PostForm.js ***!
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
/* harmony import */ var _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostForm.module.css */ "./components/postcomp/PostForm.module.css");
/* harmony import */ var _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PostForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loader */ "./components/UI/Loader.js");





var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\postcomp\\PostForm.js",
    _s = $RefreshSig$();







function sendPostData(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _sendPostData.apply(this, arguments);
}

function _sendPostData() {
  _sendPostData = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(Type, Category, Title, Description, Question, Date, imageInbase64) {
    var response, data;
    return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/api/post/postitem", {
              method: "POST",
              body: JSON.stringify({
                Type: Type,
                Category: Category,
                Title: Title,
                Description: Description,
                Question: Question,
                Date: Date,
                ReducedImg: imageInbase64
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

            if (response.ok) {
              _context2.next = 8;
              break;
            }

            throw new Error(data.message || "Something went wrong!");

          case 8:
            return _context2.abrupt("return", data);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sendPostData.apply(this, arguments);
}

function PostForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      isImage = _useState2[0],
      setIsImage = _useState2[1];

  var typeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var categoryInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var titleInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var descriptionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var questionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var dateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function converttobase64(e) {
    // console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      //console.log(reader.result);
      setIsImage(reader.result);
    };

    reader.onerror = function () {
      console.log("error", error);
    };
  }

  var postSubmitHandler = /*#__PURE__*/function () {
    var _ref = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      var enteredType, enteredCategory, enteredTitle, enteredDescription, enteredQuestion, enteredDate, humanReadableDate, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredType = typeInputRef.current.value;
              enteredCategory = categoryInputRef.current.value;
              enteredTitle = titleInputRef.current.value;
              enteredDescription = descriptionInputRef.current.value;
              enteredQuestion = questionInputRef.current.value;
              enteredDate = dateInputRef.current.value;
              humanReadableDate = new Date(enteredDate).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              });
              _context.prev = 9;
              _context.next = 12;
              return sendPostData(enteredType, enteredCategory, enteredTitle, enteredDescription, enteredQuestion, humanReadableDate, isImage);

            case 12:
              result = _context.sent;
              console.log(result);
              event.target.reset(); // This resets the form

              setIsLoading(false);
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](9);
              console.log(_context.t0);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 18]]);
    }));

    return function postSubmitHandler(_x8) {
      return _ref.apply(this, arguments);
    };
  }();

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      style: {
        fontSize: "5rem"
      },
      children: "Post new Item as Lost Item"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Please Provide genunine Informations only."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,
      onSubmit: postSubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "item",
        className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
        ref: typeInputRef,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Lost",
          children: "Lost"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "category",
        className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
        ref: categoryInputRef,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "",
          disabled: true,
          selected: true,
          children: "Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Wallet",
          children: "Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ID Card / Student Card",
          children: "ID Card / Student Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Smart Phone / Laptop",
          children: "Smart Phone / Laptop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Keys",
          children: "Keys"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Others",
          children: "Others"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Item Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Title",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          type: "text",
          name: "description",
          placeholder: "Description about item (like location etc...)",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: descriptionInputRef,
          rows: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "question",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Enter question based on an item."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "question",
          placeholder: "Ex:- What is the color of the phone?",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: questionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "date",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Select a Date:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "date",
          name: "date",
          id: "date",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: dateInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        id: "image",
        name: "image",
        accept: "image/*",
        className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
        onChange: converttobase64
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: "Post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      width: 100,
      height: 100,
      src: isImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(PostForm, "cNsKx23FHhilz3LAHnbKyEpw5eY=");

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJzZW5kUG9zdERhdGEiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiaW1hZ2VJbmJhc2U2NCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWR1Y2VkSW1nIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIlBvc3RGb3JtIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0ltYWdlIiwic2V0SXNJbWFnZSIsInR5cGVJbnB1dFJlZiIsInVzZVJlZiIsImNhdGVnb3J5SW5wdXRSZWYiLCJ0aXRsZUlucHV0UmVmIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsInF1ZXN0aW9uSW5wdXRSZWYiLCJkYXRlSW5wdXRSZWYiLCJjb252ZXJ0dG9iYXNlNjQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwb3N0U3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVHlwZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRDYXRlZ29yeSIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRRdWVzdGlvbiIsImVudGVyZWREYXRlIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJyZXNldCIsImZvbnRTaXplIiwiY2xhc3NlcyIsImZvcm0iLCJjdXN0b21zZWxlY3QiLCJkaXNwbGF5IiwiZmxleERpcmVj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O0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsR0Y7QUFBQSxrQkFERjtBQXNHRDs7R0F6S1FKLFE7O0tBQUFBLFE7QUEyS01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3Rsb3N0aXRlbS41OTEzNzUzMGYyNjc5NzBjZGI0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0Rm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL1VJL0xvYWRlclwiO1xyXG5hc3luYyBmdW5jdGlvbiBzZW5kUG9zdERhdGEoXHJcbiAgVHlwZSxcclxuICBDYXRlZ29yeSxcclxuICBUaXRsZSxcclxuICBEZXNjcmlwdGlvbixcclxuICBRdWVzdGlvbixcclxuICBEYXRlLFxyXG4gIGltYWdlSW5iYXNlNjRcclxuKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdC9wb3N0aXRlbVwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBUeXBlLFxyXG4gICAgICBDYXRlZ29yeSxcclxuICAgICAgVGl0bGUsXHJcbiAgICAgIERlc2NyaXB0aW9uLFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgRGF0ZSxcclxuICAgICAgUmVkdWNlZEltZzogaW1hZ2VJbmJhc2U2NCxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5mdW5jdGlvbiBQb3N0Rm9ybSgpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0ltYWdlLCBzZXRJc0ltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHR5cGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNhdGVnb3J5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHF1ZXN0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkYXRlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgZnVuY3Rpb24gY29udmVydHRvYmFzZTY0KGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHNldElzSW1hZ2UocmVhZGVyLnJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IHBvc3RTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWRUeXBlID0gdHlwZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkQ2F0ZWdvcnkgPSBjYXRlZ29yeUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aXRsZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkUXVlc3Rpb24gPSBxdWVzdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkRGF0ZSA9IGRhdGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZW50ZXJlZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZFBvc3REYXRhKFxyXG4gICAgICAgIGVudGVyZWRUeXBlLFxyXG4gICAgICAgIGVudGVyZWRDYXRlZ29yeSxcclxuICAgICAgICBlbnRlcmVkVGl0bGUsXHJcbiAgICAgICAgZW50ZXJlZERlc2NyaXB0aW9uLFxyXG4gICAgICAgIGVudGVyZWRRdWVzdGlvbixcclxuICAgICAgICBodW1hblJlYWRhYmxlRGF0ZSxcclxuICAgICAgICBpc0ltYWdlXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICBldmVudC50YXJnZXQucmVzZXQoKTsgLy8gVGhpcyByZXNldHMgdGhlIGZvcm1cclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRlciAvPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCI1cmVtXCIgfX0+UG9zdCBuZXcgSXRlbSBhcyBMb3N0IEl0ZW08L2gxPlxyXG4gICAgICA8aDI+UGxlYXNlIFByb3ZpZGUgZ2VudW5pbmUgSW5mb3JtYXRpb25zIG9ubHkuPC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtwb3N0U3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiaXRlbVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9IHJlZj17dHlwZUlucHV0UmVmfT5cclxuICAgICAgICAgIHsvKiA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XHJcbiAgICAgICAgICAgIFR5cGVcclxuICAgICAgICAgIDwvb3B0aW9uPiAqL31cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3N0XCI+TG9zdDwvb3B0aW9uPlxyXG4gICAgICAgICAgey8qIDxvcHRpb24gdmFsdWU9XCJGb3VuZFwiPkZvdW5kPC9vcHRpb24+ICovfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgcmVmPXtjYXRlZ29yeUlucHV0UmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5cclxuICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldhbGxldFwiPldhbGxldDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEIENhcmQgLyBTdHVkZW50IENhcmRcIj5JRCBDYXJkIC8gU3R1ZGVudCBDYXJkPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU21hcnQgUGhvbmUgLyBMYXB0b3BcIj5TbWFydCBQaG9uZSAvIExhcHRvcDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktleXNcIj5LZXlzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBJdGVtIE5hbWVcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICByZWY9e3RpdGxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gYWJvdXQgaXRlbSAobGlrZSBsb2NhdGlvbiBldGMuLi4pXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJxdWVzdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFbnRlciBxdWVzdGlvbiBiYXNlZCBvbiBhbiBpdGVtLlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6LSBXaGF0IGlzIHRoZSBjb2xvciBvZiB0aGUgcGhvbmU/XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgcmVmPXtxdWVzdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWxlY3QgYSBEYXRlOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgcmVmPXtkYXRlSW5wdXRSZWZ9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICBvbkNoYW5nZT17Y29udmVydHRvYmFzZTY0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUG9zdFwiPjwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8aW1nIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSBzcmM9e2lzSW1hZ2V9PjwvaW1nPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=