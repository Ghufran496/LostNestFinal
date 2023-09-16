webpackHotUpdate_N_E("pages/postfounditem",{

/***/ "./components/postcomp/FoundForm.js":
/*!******************************************!*\
  !*** ./components/postcomp/FoundForm.js ***!
  \******************************************/
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
/* harmony import */ var _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FoundForm.module.css */ "./components/postcomp/FoundForm.module.css");
/* harmony import */ var _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loader */ "./components/UI/Loader.js");





var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\postcomp\\FoundForm.js",
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

function FoundForm() {
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
      children: "Post new Item as Found Item"
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
      className: _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,
      onSubmit: postSubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "item",
        className: _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
        ref: typeInputRef,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Found",
          selected: true,
          children: "Found"
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
        className: _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
        ref: categoryInputRef,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "",
          disabled: true,
          selected: true,
          children: "Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Wallet",
          children: "Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ID Card / Student Card",
          children: "ID Card / Student Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Smart Phone / Laptop",
          children: "Smart Phone / Laptop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Keys",
          children: "Keys"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Others",
          children: "Others"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Title",
          className: _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
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
          lineNumber: 146,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          type: "text",
          name: "description",
          placeholder: "Description about item (like location etc...)",
          className: _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: descriptionInputRef,
          rows: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
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
          lineNumber: 162,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "question",
          placeholder: "Ex:- What is the color of the phone?",
          className: _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: questionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
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
          lineNumber: 177,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "date",
          name: "date",
          id: "date",
          className: _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
          ref: dateInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        id: "image",
        name: "image",
        accept: "image/*",
        className: _FoundForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.customselect,
        onChange: converttobase64
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: "Post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
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
      lineNumber: 203,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(FoundForm, "cNsKx23FHhilz3LAHnbKyEpw5eY=");

_c = FoundForm;
/* harmony default export */ __webpack_exports__["default"] = (FoundForm);

var _c;

$RefreshReg$(_c, "FoundForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Gb3VuZEZvcm0uanMiXSwibmFtZXMiOlsic2VuZFBvc3REYXRhIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsImltYWdlSW5iYXNlNjQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiUmVkdWNlZEltZyIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJGb3VuZEZvcm0iLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzSW1hZ2UiLCJzZXRJc0ltYWdlIiwidHlwZUlucHV0UmVmIiwidXNlUmVmIiwiY2F0ZWdvcnlJbnB1dFJlZiIsInRpdGxlSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwicXVlc3Rpb25JbnB1dFJlZiIsImRhdGVJbnB1dFJlZiIsImNvbnZlcnR0b2Jhc2U2NCIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsInRhcmdldCIsImZpbGVzIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInBvc3RTdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRUeXBlIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZENhdGVnb3J5IiwiZW50ZXJlZFRpdGxlIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwiZW50ZXJlZFF1ZXN0aW9uIiwiZW50ZXJlZERhdGUiLCJodW1hblJlYWRhYmxlRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInJlc2V0IiwiZm9udFNpemUiLCJjbGFzc2VzIiwiZm9ybSIsImN1c3RvbXNlbGVjdCIsImRpc3BsYXkiLCJmbGV4RGly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ekI7QUFBOEIsU0FBRyxFQUFFVDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEdGO0FBQUEsa0JBREY7QUFvR0Q7O0dBdktRSixTOztLQUFBQSxTO0FBeUtNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0Zm91bmRpdGVtLjRiYTAxMDYzZjFjY2IxOGExMmNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0ZvdW5kRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL1VJL0xvYWRlclwiO1xyXG5hc3luYyBmdW5jdGlvbiBzZW5kUG9zdERhdGEoXHJcbiAgVHlwZSxcclxuICBDYXRlZ29yeSxcclxuICBUaXRsZSxcclxuICBEZXNjcmlwdGlvbixcclxuICBRdWVzdGlvbixcclxuICBEYXRlLFxyXG4gIGltYWdlSW5iYXNlNjRcclxuKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdC9wb3N0aXRlbVwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBUeXBlLFxyXG4gICAgICBDYXRlZ29yeSxcclxuICAgICAgVGl0bGUsXHJcbiAgICAgIERlc2NyaXB0aW9uLFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgRGF0ZSxcclxuICAgICAgUmVkdWNlZEltZzogaW1hZ2VJbmJhc2U2NCxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5mdW5jdGlvbiBGb3VuZEZvcm0oKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNJbWFnZSwgc2V0SXNJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB0eXBlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYXRlZ29yeUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGl0bGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBxdWVzdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGF0ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbnZlcnR0b2Jhc2U2NChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICBzZXRJc0ltYWdlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBwb3N0U3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkVHlwZSA9IHR5cGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZENhdGVnb3J5ID0gY2F0ZWdvcnlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFF1ZXN0aW9uID0gcXVlc3Rpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERhdGUgPSBkYXRlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGVudGVyZWREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIixcclxuICAgICAge1xyXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRQb3N0RGF0YShcclxuICAgICAgICBlbnRlcmVkVHlwZSxcclxuICAgICAgICBlbnRlcmVkQ2F0ZWdvcnksXHJcbiAgICAgICAgZW50ZXJlZFRpdGxlLFxyXG4gICAgICAgIGVudGVyZWREZXNjcmlwdGlvbixcclxuICAgICAgICBlbnRlcmVkUXVlc3Rpb24sXHJcbiAgICAgICAgaHVtYW5SZWFkYWJsZURhdGUsXHJcbiAgICAgICAgaXNJbWFnZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7IC8vIFRoaXMgcmVzZXRzIHRoZSBmb3JtXHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkZXIgLz47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiNXJlbVwiIH19PlBvc3QgbmV3IEl0ZW0gYXMgRm91bmQgSXRlbTwvaDE+XHJcbiAgICAgIDxoMj5QbGVhc2UgUHJvdmlkZSBnZW51bmluZSBJbmZvcm1hdGlvbnMgb25seS48L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3Bvc3RTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJpdGVtXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH0gcmVmPXt0eXBlSW5wdXRSZWZ9PlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZvdW5kXCIgc2VsZWN0ZWQ+XHJcbiAgICAgICAgICAgIEZvdW5kXHJcbiAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgIHJlZj17Y2F0ZWdvcnlJbnB1dFJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XHJcbiAgICAgICAgICAgIENhdGVnb3J5XHJcbiAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXYWxsZXRcIj5XYWxsZXQ8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJRCBDYXJkIC8gU3R1ZGVudCBDYXJkXCI+SUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNtYXJ0IFBob25lIC8gTGFwdG9wXCI+U21hcnQgUGhvbmUgLyBMYXB0b3A8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLZXlzXCI+S2V5czwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk90aGVyc1wiPk90aGVyczwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSXRlbSBOYW1lXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgcmVmPXt0aXRsZUlucHV0UmVmfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGFib3V0IGl0ZW0gKGxpa2UgbG9jYXRpb24gZXRjLi4uKVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25JbnB1dFJlZn1cclxuICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwicXVlc3Rpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRW50ZXIgcXVlc3Rpb24gYmFzZWQgb24gYW4gaXRlbS5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicXVlc3Rpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4Oi0gV2hhdCBpcyB0aGUgY29sb3Igb2YgdGhlIHBob25lP1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgIHJlZj17cXVlc3Rpb25JbnB1dFJlZn1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cImRhdGVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2VsZWN0IGEgRGF0ZTpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgIHJlZj17ZGF0ZUlucHV0UmVmfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2NvbnZlcnR0b2Jhc2U2NH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gY29udGVudD1cIlBvc3RcIj48L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPGltZyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gc3JjPXtpc0ltYWdlfT48L2ltZz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvdW5kRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==