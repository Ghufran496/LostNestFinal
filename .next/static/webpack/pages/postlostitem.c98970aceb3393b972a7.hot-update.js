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
      className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.head1,
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
          lineNumber: 112,
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
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Wallet",
          children: "Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ID Card / Student Card",
          children: "ID Card / Student Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Smart Phone / Laptop",
          children: "Smart Phone / Laptop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Keys",
          children: "Keys"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Others",
          children: "Others"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
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
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Title",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
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
          lineNumber: 144,
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
          lineNumber: 150,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
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
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "question",
          placeholder: "Ex:- What is the color of the phone?",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: questionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
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
          lineNumber: 175,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "date",
          name: "date",
          id: "date",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: dateInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
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
        lineNumber: 190,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: "Post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJzZW5kUG9zdERhdGEiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiaW1hZ2VJbmJhc2U2NCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWR1Y2VkSW1nIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIlBvc3RGb3JtIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0ltYWdlIiwic2V0SXNJbWFnZSIsInR5cGVJbnB1dFJlZiIsInVzZVJlZiIsImNhdGVnb3J5SW5wdXRSZWYiLCJ0aXRsZUlucHV0UmVmIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsInF1ZXN0aW9uSW5wdXRSZWYiLCJkYXRlSW5wdXRSZWYiLCJjb252ZXJ0dG9iYXNlNjQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwb3N0U3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVHlwZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRDYXRlZ29yeSIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRRdWVzdGlvbiIsImVudGVyZWREYXRlIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJyZXNldCIsImNsYXNzZXMiLCJoZWFkMSIsImZvcm0iLCJjdXN0b21zZWxlY3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlv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L3dlYnBhY2svcGFnZXMvcG9zdGxvc3RpdGVtLmM5ODk3MGFjZWIzMzkzYjk3MmE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vVUkvTG9hZGVyXCI7XHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRQb3N0RGF0YShcclxuICBUeXBlLFxyXG4gIENhdGVnb3J5LFxyXG4gIFRpdGxlLFxyXG4gIERlc2NyaXB0aW9uLFxyXG4gIFF1ZXN0aW9uLFxyXG4gIERhdGUsXHJcbiAgaW1hZ2VJbmJhc2U2NFxyXG4pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb3N0L3Bvc3RpdGVtXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIFR5cGUsXHJcbiAgICAgIENhdGVnb3J5LFxyXG4gICAgICBUaXRsZSxcclxuICAgICAgRGVzY3JpcHRpb24sXHJcbiAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICBEYXRlLFxyXG4gICAgICBSZWR1Y2VkSW1nOiBpbWFnZUluYmFzZTY0LFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbmZ1bmN0aW9uIFBvc3RGb3JtKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzSW1hZ2UsIHNldElzSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgdHlwZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2F0ZWdvcnlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcXVlc3Rpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRhdGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBmdW5jdGlvbiBjb252ZXJ0dG9iYXNlNjQoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0KTtcclxuICAgICAgc2V0SXNJbWFnZShyZWFkZXIucmVzdWx0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgcG9zdFN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZFR5cGUgPSB0eXBlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRDYXRlZ29yeSA9IGNhdGVnb3J5SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRpdGxlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWREYXRlID0gZGF0ZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShlbnRlcmVkRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICBcImVuLVVTXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kUG9zdERhdGEoXHJcbiAgICAgICAgZW50ZXJlZFR5cGUsXHJcbiAgICAgICAgZW50ZXJlZENhdGVnb3J5LFxyXG4gICAgICAgIGVudGVyZWRUaXRsZSxcclxuICAgICAgICBlbnRlcmVkRGVzY3JpcHRpb24sXHJcbiAgICAgICAgZW50ZXJlZFF1ZXN0aW9uLFxyXG4gICAgICAgIGh1bWFuUmVhZGFibGVEYXRlLFxyXG4gICAgICAgIGlzSW1hZ2VcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpOyAvLyBUaGlzIHJlc2V0cyB0aGUgZm9ybVxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGVyIC8+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkMX0+UG9zdCBuZXcgSXRlbSBhcyBMb3N0IEl0ZW08L2gxPlxyXG4gICAgICA8aDI+UGxlYXNlIFByb3ZpZGUgZ2VudW5pbmUgSW5mb3JtYXRpb25zIG9ubHkuPC9oMj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtwb3N0U3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiaXRlbVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9IHJlZj17dHlwZUlucHV0UmVmfT5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3N0XCI+TG9zdDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgcmVmPXtjYXRlZ29yeUlucHV0UmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5cclxuICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldhbGxldFwiPldhbGxldDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEIENhcmQgLyBTdHVkZW50IENhcmRcIj5JRCBDYXJkIC8gU3R1ZGVudCBDYXJkPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU21hcnQgUGhvbmUgLyBMYXB0b3BcIj5TbWFydCBQaG9uZSAvIExhcHRvcDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktleXNcIj5LZXlzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBJdGVtIE5hbWVcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICByZWY9e3RpdGxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gYWJvdXQgaXRlbSAobGlrZSBsb2NhdGlvbiBldGMuLi4pXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJxdWVzdGlvblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFbnRlciBxdWVzdGlvbiBiYXNlZCBvbiBhbiBpdGVtLlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6LSBXaGF0IGlzIHRoZSBjb2xvciBvZiB0aGUgcGhvbmU/XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgcmVmPXtxdWVzdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiwgZm9udFdlaWdodDogXCJib2xkZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWxlY3QgYSBEYXRlOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgcmVmPXtkYXRlSW5wdXRSZWZ9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICBvbkNoYW5nZT17Y29udmVydHRvYmFzZTY0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUG9zdFwiPjwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==