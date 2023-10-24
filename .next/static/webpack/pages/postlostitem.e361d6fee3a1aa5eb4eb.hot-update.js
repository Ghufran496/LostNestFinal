webpackHotUpdate_N_E("pages/postlostitem",{

/***/ "./components/postcomp/PostItem.module.css":
false,

/***/ "./components/postcomp/PostNewItem.js":
/*!********************************************!*\
  !*** ./components/postcomp/PostNewItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostNewItem.module.css */ "./components/postcomp/PostNewItem.module.css");
/* harmony import */ var _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\postcomp\\PostNewItem.js",
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

function PostNewItem() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      isImage = _useState2[0],
      setIsImage = _useState2[1];

  var typeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var categoryInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var titleInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var descriptionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var questionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var dateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.formstyle3,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: postSubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
          children: "Data"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.divider,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            name: "item",
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.inputfield,
            ref: typeInputRef,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Lost",
              children: "Lost"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            name: "category",
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.inputfield,
            ref: categoryInputRef,
            required: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "",
              disabled: true,
              selected: true,
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Wallet",
              children: "Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "ID Card / Student Card",
              children: "ID Card / Student Card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Smart Phone / Laptop",
              children: "Smart Phone / Laptop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Keys",
              children: "Keys"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Others",
              children: "Others"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          "for": "field3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Item Name ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "field3",
            placeholder: "Title",
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.inputfield,
            ref: titleInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          "for": "field4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Enter question based on an item.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "field4",
            placeholder: "Ex:- What is the color of the phone?",
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.inputfield,
            ref: questionInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "date",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Select a Date: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "date",
            name: "date",
            id: "date",
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.customselect,
            ref: dateInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
          children: "Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          "for": "description",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Description ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 27
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            type: "text",
            name: "description",
            placeholder: "Description about item (like location etc...)",
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textareafield,
            ref: descriptionInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          id: "image",
          name: "image",
          accept: "image/*",
          className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.customselect,
          style: {
            width: "100%"
          },
          onChange: converttobase64,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.center,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "Post"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

_s(PostNewItem, "cNsKx23FHhilz3LAHnbKyEpw5eY=");

_c = PostNewItem;
/* harmony default export */ __webpack_exports__["default"] = (PostNewItem);

var _c;

$RefreshReg$(_c, "PostNewItem");

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

/***/ }),

/***/ "./components/postcomp/PostNewItem.module.css":
/*!****************************************************!*\
  !*** ./components/postcomp/PostNewItem.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./PostNewItem.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/postcomp/PostNewItem.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./PostNewItem.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/postcomp/PostNewItem.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./PostNewItem.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/postcomp/PostNewItem.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/postcomp/PostItem.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/postcomp/PostNewItem.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/postcomp/PostNewItem.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".PostNewItem_formstyle3__3srno {\r\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n.PostNewItem_formstyle3__3srno label {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.PostNewItem_divider__j8TdT {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 2rem;\r\n}\r\n.PostNewItem_formstyle3__3srno label > span {\r\n  float: left;\r\n  width: 100%;\r\n  color: #311465;\r\n  font-weight: bold;\r\n  font-size: 13px;\r\n  text-shadow: 1px 1px 1px #fff;\r\n}\r\n.PostNewItem_formstyle3__3srno fieldset {\r\n  border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  margin: 0px 0px 10px 0px;\r\n  border: 1px solid #311465;\r\n  padding: 20px;\r\n  background: #9876d8;\r\n  box-shadow: inset 0px 0px 15px #311465;\r\n  -moz-box-shadow: inset 0px 0px 15px #493b63;\r\n  -webkit-box-shadow: inset 0px 0px 15px #311465;\r\n}\r\n.PostNewItem_formstyle3__3srno fieldset legend {\r\n  color: #311465;\r\n  border-top: 1px solid #311465;\r\n  border-left: 1px solid #311465;\r\n  border-right: 1px solid #311465;\r\n  border-radius: 5px 5px 0px 0px;\r\n  -webkit-border-radius: 5px 5px 0px 0px;\r\n  -moz-border-radius: 5px 5px 0px 0px;\r\n  background: #b79de7;\r\n  padding: 0px 8px 3px 8px;\r\n  box-shadow: -0px -1px 2px #f1f1f1;\r\n  -moz-box-shadow: -0px -1px 2px #f1f1f1;\r\n  -webkit-box-shadow: -0px -1px 2px #f1f1f1;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n}\r\n\r\n.PostNewItem_center__1PBNl {\r\n  text-align: center;\r\n}\r\n.PostNewItem_customselect__21m3O {\r\n  width: auto;\r\n  padding: 5px;\r\n  font-size: 12px;\r\n  border: 2px solid #ccc;\r\n  border-radius: 5px;\r\n  -webkit-box-sizing: border-box;\r\n     -moz-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin-bottom: 10px;\r\n}\r\n.PostNewItem_formstyle3__3srno textarea {\r\n  width: 150px;\r\n  height: 50px;\r\n}\r\n.PostNewItem_formstyle3__3srno input[type=\"text\"],\r\n.PostNewItem_formstyle3__3srno input[type=\"date\"],\r\n.PostNewItem_formstyle3__3srno input[type=\"datetime\"],\r\n.PostNewItem_formstyle3__3srno input[type=\"number\"],\r\n.PostNewItem_formstyle3__3srno input[type=\"search\"],\r\n.PostNewItem_formstyle3__3srno input[type=\"time\"],\r\n.PostNewItem_formstyle3__3srno input[type=\"url\"],\r\n.PostNewItem_formstyle3__3srno input[type=\"email\"],\r\n.PostNewItem_formstyle3__3srno select,\r\n.PostNewItem_formstyle3__3srno textarea {\r\n  border-radius: 3px;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border: 1px solid #311465;\r\n  outline: none;\r\n  color: #311465;\r\n  padding: 2px 8px 2px 8px;\r\n  box-shadow: inset 1px 1px 4px #311465;\r\n  -moz-box-shadow: inset 1px 1px 4px #311465;\r\n  -webkit-box-shadow: inset 1px 1px 4px #311465;\r\n  background: #efeff0;\r\n  width: 100%;\r\n}\r\n.PostNewItem_formstyle3__3srno input[type=\"submit\"],\r\n.PostNewItem_formstyle3__3srno input[type=\"button\"] {\r\n  background: #311465;\r\n  border: 1px solid #311465;\r\n  padding: 5px 15px 5px 15px;\r\n  color: #ffffff;\r\n  box-shadow: inset -1px -1px 3px #311465;\r\n  -moz-box-shadow: inset -1px -1px 3px #311465;\r\n  -webkit-box-shadow: inset -1px -1px 3px #311465;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  font-weight: bold;\r\n}\r\n.PostNewItem_required__3tDwJ {\r\n  color: red;\r\n  font-weight: normal;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/postcomp/PostNewItem.module.css"],"names":[],"mappings":"AAAA;EACE,+DAA+D;AACjE;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAc;AAChB;AACA;EACE,WAAW;EACX,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,wBAAwB;EACxB,wBAAwB;EACxB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,sCAAsC;EACtC,2CAA2C;EAC3C,8CAA8C;AAChD;AACA;EACE,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;EAC/B,8BAA8B;EAC9B,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;EACnB,wBAAwB;EACxB,iCAAiC;EACjC,sCAAsC;EACtC,yCAAyC;EACzC,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,8BAAsB;KAAtB,2BAAsB;UAAtB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;;;;;;;;;;EAUE,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,wBAAwB;EACxB,qCAAqC;EACrC,0CAA0C;EAC1C,6CAA6C;EAC7C,mBAAmB;EACnB,WAAW;AACb;AACA;;EAEE,mBAAmB;EACnB,yBAAyB;EACzB,0BAA0B;EAC1B,cAAc;EACd,uCAAuC;EACvC,4CAA4C;EAC5C,+CAA+C;EAC/C,kBAAkB;EAClB,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,mBAAmB;AACrB","sourcesContent":[".formstyle3 {\r\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n.formstyle3 label {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.divider {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-gap: 2rem;\r\n}\r\n.formstyle3 label > span {\r\n  float: left;\r\n  width: 100%;\r\n  color: #311465;\r\n  font-weight: bold;\r\n  font-size: 13px;\r\n  text-shadow: 1px 1px 1px #fff;\r\n}\r\n.formstyle3 fieldset {\r\n  border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  margin: 0px 0px 10px 0px;\r\n  border: 1px solid #311465;\r\n  padding: 20px;\r\n  background: #9876d8;\r\n  box-shadow: inset 0px 0px 15px #311465;\r\n  -moz-box-shadow: inset 0px 0px 15px #493b63;\r\n  -webkit-box-shadow: inset 0px 0px 15px #311465;\r\n}\r\n.formstyle3 fieldset legend {\r\n  color: #311465;\r\n  border-top: 1px solid #311465;\r\n  border-left: 1px solid #311465;\r\n  border-right: 1px solid #311465;\r\n  border-radius: 5px 5px 0px 0px;\r\n  -webkit-border-radius: 5px 5px 0px 0px;\r\n  -moz-border-radius: 5px 5px 0px 0px;\r\n  background: #b79de7;\r\n  padding: 0px 8px 3px 8px;\r\n  box-shadow: -0px -1px 2px #f1f1f1;\r\n  -moz-box-shadow: -0px -1px 2px #f1f1f1;\r\n  -webkit-box-shadow: -0px -1px 2px #f1f1f1;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n.customselect {\r\n  width: auto;\r\n  padding: 5px;\r\n  font-size: 12px;\r\n  border: 2px solid #ccc;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n  margin-bottom: 10px;\r\n}\r\n.formstyle3 textarea {\r\n  width: 150px;\r\n  height: 50px;\r\n}\r\n.formstyle3 input[type=\"text\"],\r\n.formstyle3 input[type=\"date\"],\r\n.formstyle3 input[type=\"datetime\"],\r\n.formstyle3 input[type=\"number\"],\r\n.formstyle3 input[type=\"search\"],\r\n.formstyle3 input[type=\"time\"],\r\n.formstyle3 input[type=\"url\"],\r\n.formstyle3 input[type=\"email\"],\r\n.formstyle3 select,\r\n.formstyle3 textarea {\r\n  border-radius: 3px;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border: 1px solid #311465;\r\n  outline: none;\r\n  color: #311465;\r\n  padding: 2px 8px 2px 8px;\r\n  box-shadow: inset 1px 1px 4px #311465;\r\n  -moz-box-shadow: inset 1px 1px 4px #311465;\r\n  -webkit-box-shadow: inset 1px 1px 4px #311465;\r\n  background: #efeff0;\r\n  width: 100%;\r\n}\r\n.formstyle3 input[type=\"submit\"],\r\n.formstyle3 input[type=\"button\"] {\r\n  background: #311465;\r\n  border: 1px solid #311465;\r\n  padding: 5px 15px 5px 15px;\r\n  color: #ffffff;\r\n  box-shadow: inset -1px -1px 3px #311465;\r\n  -moz-box-shadow: inset -1px -1px 3px #311465;\r\n  -webkit-box-shadow: inset -1px -1px 3px #311465;\r\n  border-radius: 3px;\r\n  border-radius: 3px;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  font-weight: bold;\r\n}\r\n.required {\r\n  color: red;\r\n  font-weight: normal;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"formstyle3": "PostNewItem_formstyle3__3srno",
	"divider": "PostNewItem_divider__j8TdT",
	"center": "PostNewItem_center__1PBNl",
	"customselect": "PostNewItem_customselect__21m3O",
	"required": "PostNewItem_required__3tDwJ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0TmV3SXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0TmV3SXRlbS5tb2R1bGUuY3NzP2Y0YjAiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdGNvbXAvUG9zdE5ld0l0ZW0ubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJzZW5kUG9zdERhdGEiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiaW1hZ2VJbmJhc2U2NCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWR1Y2VkSW1nIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIlBvc3ROZXdJdGVtIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0ltYWdlIiwic2V0SXNJbWFnZSIsInR5cGVJbnB1dFJlZiIsInVzZVJlZiIsImNhdGVnb3J5SW5wdXRSZWYiLCJ0aXRsZUlucHV0UmVmIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsInF1ZXN0aW9uSW5wdXRSZWYiLCJkYXRlSW5wdXRSZWYiLCJjb252ZXJ0dG9iYXNlNjQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwb3N0U3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVHlwZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRDYXRlZ29yeSIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRRdWVzdGlvbiIsImVudGVyZWREYXRlIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJyZXNldCIsImNsYXNzZXMiLCJmb3Jtc3R5bGUzIiwiZGl2aWRlciIsImlucHV0ZmllbGQiLCJyZXF1aXJlZCIsImN1c3RvbXNlbGVjdCIsInRleHRhcmVhZmllbGQiLCJ3aWR0aCIsImNlbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztTQUNlQSxZOzs7Ozt1UkFBZixrQkFDRUMsSUFERixFQUVFQyxRQUZGLEVBR0VDLEtBSEYsRUFJRUMsV0FKRixFQUtFQyxRQUxGLEVBTUVDLElBTkYsRUFPRUMsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVN5QkMsS0FBSyxDQUFDLG9CQUFELEVBQXVCO0FBQ2pEQyxvQkFBTSxFQUFFLE1BRHlDO0FBRWpEQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlgsb0JBQUksRUFBSkEsSUFEbUI7QUFFbkJDLHdCQUFRLEVBQVJBLFFBRm1CO0FBR25CQyxxQkFBSyxFQUFMQSxLQUhtQjtBQUluQkMsMkJBQVcsRUFBWEEsV0FKbUI7QUFLbkJDLHdCQUFRLEVBQVJBLFFBTG1CO0FBTW5CQyxvQkFBSSxFQUFKQSxJQU5tQjtBQU9uQk8sMEJBQVUsRUFBRU47QUFQTyxlQUFmLENBRjJDO0FBV2pETyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCO0FBRFQ7QUFYd0MsYUFBdkIsQ0FUOUI7O0FBQUE7QUFTUUMsb0JBVFI7QUFBQTtBQUFBLG1CQXlCcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQXpCckI7O0FBQUE7QUF5QlFDLGdCQXpCUjs7QUFBQSxnQkEyQk9GLFFBQVEsQ0FBQ0csRUEzQmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQTRCVSxJQUFJQyxLQUFKLENBQVVGLElBQUksQ0FBQ0csT0FBTCxJQUFnQix1QkFBMUIsQ0E1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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3Rsb3N0aXRlbS5lMzYxZDZmZWUzYTFhYTVlYjRlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdE5ld0l0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuYXN5bmMgZnVuY3Rpb24gc2VuZFBvc3REYXRhKFxyXG4gIFR5cGUsXHJcbiAgQ2F0ZWdvcnksXHJcbiAgVGl0bGUsXHJcbiAgRGVzY3JpcHRpb24sXHJcbiAgUXVlc3Rpb24sXHJcbiAgRGF0ZSxcclxuICBpbWFnZUluYmFzZTY0XHJcbikge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIiwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgVHlwZSxcclxuICAgICAgQ2F0ZWdvcnksXHJcbiAgICAgIFRpdGxlLFxyXG4gICAgICBEZXNjcmlwdGlvbixcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIERhdGUsXHJcbiAgICAgIFJlZHVjZWRJbWc6IGltYWdlSW5iYXNlNjQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZnVuY3Rpb24gUG9zdE5ld0l0ZW0oKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNJbWFnZSwgc2V0SXNJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB0eXBlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYXRlZ29yeUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGl0bGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBxdWVzdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGF0ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbnZlcnR0b2Jhc2U2NChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICBzZXRJc0ltYWdlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBwb3N0U3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkVHlwZSA9IHR5cGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZENhdGVnb3J5ID0gY2F0ZWdvcnlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFF1ZXN0aW9uID0gcXVlc3Rpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERhdGUgPSBkYXRlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGVudGVyZWREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIixcclxuICAgICAge1xyXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRQb3N0RGF0YShcclxuICAgICAgICBlbnRlcmVkVHlwZSxcclxuICAgICAgICBlbnRlcmVkQ2F0ZWdvcnksXHJcbiAgICAgICAgZW50ZXJlZFRpdGxlLFxyXG4gICAgICAgIGVudGVyZWREZXNjcmlwdGlvbixcclxuICAgICAgICBlbnRlcmVkUXVlc3Rpb24sXHJcbiAgICAgICAgaHVtYW5SZWFkYWJsZURhdGUsXHJcbiAgICAgICAgaXNJbWFnZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7IC8vIFRoaXMgcmVzZXRzIHRoZSBmb3JtXHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1zdHlsZTN9PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdFN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgIDxsZWdlbmQ+RGF0YTwvbGVnZW5kPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgICAgICAgcmVmPXt0eXBlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG9zdFwiPkxvc3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17Y2F0ZWdvcnlJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlxyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2FsbGV0XCI+V2FsbGV0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEIENhcmQgLyBTdHVkZW50IENhcmRcIj5cclxuICAgICAgICAgICAgICAgIElEIENhcmQgLyBTdHVkZW50IENhcmRcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU21hcnQgUGhvbmUgLyBMYXB0b3BcIj5TbWFydCBQaG9uZSAvIExhcHRvcDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLZXlzXCI+S2V5czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZmllbGQzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIEl0ZW0gTmFtZSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDNcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17dGl0bGVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZmllbGQ0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIEVudGVyIHF1ZXN0aW9uIGJhc2VkIG9uIGFuIGl0ZW0uXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJlcXVpcmVkfT4qPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmllbGQ0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4Oi0gV2hhdCBpcyB0aGUgY29sb3Igb2YgdGhlIHBob25lP1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgICAgICAgcmVmPXtxdWVzdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgU2VsZWN0IGEgRGF0ZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJlcXVpcmVkfT4qPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICAgIHJlZj17ZGF0ZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgIDxsZWdlbmQ+RGV0YWlsczwvbGVnZW5kPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIERlc2NyaXB0aW9uIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGFib3V0IGl0ZW0gKGxpa2UgbG9jYXRpb24gZXRjLi4uKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhZmllbGR9XHJcbiAgICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb252ZXJ0dG9iYXNlNjR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUG9zdFwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdE5ld0l0ZW07XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vUG9zdE5ld0l0ZW0ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vUG9zdE5ld0l0ZW0ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL1Bvc3ROZXdJdGVtLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlBvc3ROZXdJdGVtX2Zvcm1zdHlsZTNfXzNzcm5vIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLlBvc3ROZXdJdGVtX2Zvcm1zdHlsZTNfXzNzcm5vIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlBvc3ROZXdJdGVtX2RpdmlkZXJfX2o4VGRUIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLWdhcDogMnJlbTtcXHJcXG59XFxyXFxuLlBvc3ROZXdJdGVtX2Zvcm1zdHlsZTNfXzNzcm5vIGxhYmVsID4gc3BhbiB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICMzMTE0NjU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjZmZmO1xcclxcbn1cXHJcXG4uUG9zdE5ld0l0ZW1fZm9ybXN0eWxlM19fM3Nybm8gZmllbGRzZXQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMTE0NjU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogIzk4NzZkODtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCAjMzExNDY1O1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggIzQ5M2I2MztcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4ICMzMTE0NjU7XFxyXFxufVxcclxcbi5Qb3N0TmV3SXRlbV9mb3Jtc3R5bGUzX18zc3JubyBmaWVsZHNldCBsZWdlbmQge1xcclxcbiAgY29sb3I6ICMzMTE0NjU7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzMxMTQ2NTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMxMTQ2NTtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMTE0NjU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2I3OWRlNztcXHJcXG4gIHBhZGRpbmc6IDBweCA4cHggM3B4IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IC0wcHggLTFweCAycHggI2YxZjFmMTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogLTBweCAtMXB4IDJweCAjZjFmMWYxO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMHB4IC0xcHggMnB4ICNmMWYxZjE7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUG9zdE5ld0l0ZW1fY2VudGVyX18xUEJObCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5Qb3N0TmV3SXRlbV9jdXN0b21zZWxlY3RfXzIxbTNPIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5Qb3N0TmV3SXRlbV9mb3Jtc3R5bGUzX18zc3JubyB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbi5Qb3N0TmV3SXRlbV9mb3Jtc3R5bGUzX18zc3JubyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxuLlBvc3ROZXdJdGVtX2Zvcm1zdHlsZTNfXzNzcm5vIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxcXHJcXG4uUG9zdE5ld0l0ZW1fZm9ybXN0eWxlM19fM3Nybm8gaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWVcXFwiXSxcXHJcXG4uUG9zdE5ld0l0ZW1fZm9ybXN0eWxlM19fM3Nybm8gaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxyXFxuLlBvc3ROZXdJdGVtX2Zvcm1zdHlsZTNfXzNzcm5vIGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcclxcbi5Qb3N0TmV3SXRlbV9mb3Jtc3R5bGUzX18zc3JubyBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0sXFxyXFxuLlBvc3ROZXdJdGVtX2Zvcm1zdHlsZTNfXzNzcm5vIGlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcclxcbi5Qb3N0TmV3SXRlbV9mb3Jtc3R5bGUzX18zc3JubyBpbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdLFxcclxcbi5Qb3N0TmV3SXRlbV9mb3Jtc3R5bGUzX18zc3JubyBzZWxlY3QsXFxyXFxuLlBvc3ROZXdJdGVtX2Zvcm1zdHlsZTNfXzNzcm5vIHRleHRhcmVhIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzExNDY1O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMzExNDY1O1xcclxcbiAgcGFkZGluZzogMnB4IDhweCAycHggOHB4O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA0cHggIzMxMTQ2NTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA0cHggIzMxMTQ2NTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA0cHggIzMxMTQ2NTtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZmVmZjA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLlBvc3ROZXdJdGVtX2Zvcm1zdHlsZTNfXzNzcm5vIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcclxcbi5Qb3N0TmV3SXRlbV9mb3Jtc3R5bGUzX18zc3JubyBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzExNDY1O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMxMTQ2NTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggM3B4ICMzMTE0NjU7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAzcHggIzMxMTQ2NTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDNweCAjMzExNDY1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uUG9zdE5ld0l0ZW1fcmVxdWlyZWRfXzN0RHdKIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0TmV3SXRlbS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0RBQStEO0FBQ2pFO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QywyQ0FBMkM7RUFDM0MsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsc0NBQXNDO0VBQ3RDLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw4QkFBc0I7S0FBdEIsMkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTs7Ozs7Ozs7OztFQVVFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixxQ0FBcUM7RUFDckMsMENBQTBDO0VBQzFDLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7O0VBRUUsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLHVDQUF1QztFQUN2Qyw0Q0FBNEM7RUFDNUMsK0NBQStDO0VBQy9DLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvcm1zdHlsZTMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uZm9ybXN0eWxlMyBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXZpZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLWdhcDogMnJlbTtcXHJcXG59XFxyXFxuLmZvcm1zdHlsZTMgbGFiZWwgPiBzcGFuIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogIzMxMTQ2NTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNmZmY7XFxyXFxufVxcclxcbi5mb3Jtc3R5bGUzIGZpZWxkc2V0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzExNDY1O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICM5ODc2ZDg7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1cHggIzMxMTQ2NTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxNXB4ICM0OTNiNjM7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTVweCAjMzExNDY1O1xcclxcbn1cXHJcXG4uZm9ybXN0eWxlMyBmaWVsZHNldCBsZWdlbmQge1xcclxcbiAgY29sb3I6ICMzMTE0NjU7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzMxMTQ2NTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMxMTQ2NTtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMTE0NjU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2I3OWRlNztcXHJcXG4gIHBhZGRpbmc6IDBweCA4cHggM3B4IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IC0wcHggLTFweCAycHggI2YxZjFmMTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogLTBweCAtMXB4IDJweCAjZjFmMWYxO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMHB4IC0xcHggMnB4ICNmMWYxZjE7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmN1c3RvbXNlbGVjdCB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLmZvcm1zdHlsZTMgdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG4uZm9ybXN0eWxlMyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxuLmZvcm1zdHlsZTMgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcclxcbi5mb3Jtc3R5bGUzIGlucHV0W3R5cGU9XFxcImRhdGV0aW1lXFxcIl0sXFxyXFxuLmZvcm1zdHlsZTMgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0sXFxyXFxuLmZvcm1zdHlsZTMgaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0sXFxyXFxuLmZvcm1zdHlsZTMgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdLFxcclxcbi5mb3Jtc3R5bGUzIGlucHV0W3R5cGU9XFxcInVybFxcXCJdLFxcclxcbi5mb3Jtc3R5bGUzIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxyXFxuLmZvcm1zdHlsZTMgc2VsZWN0LFxcclxcbi5mb3Jtc3R5bGUzIHRleHRhcmVhIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzExNDY1O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMzExNDY1O1xcclxcbiAgcGFkZGluZzogMnB4IDhweCAycHggOHB4O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA0cHggIzMxMTQ2NTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA0cHggIzMxMTQ2NTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA0cHggIzMxMTQ2NTtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZmVmZjA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZvcm1zdHlsZTMgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sXFxyXFxuLmZvcm1zdHlsZTMgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogIzMxMTQ2NTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMTE0NjU7XFxyXFxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDNweCAjMzExNDY1O1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggM3B4ICMzMTE0NjU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAzcHggIzMxMTQ2NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnJlcXVpcmVkIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmb3Jtc3R5bGUzXCI6IFwiUG9zdE5ld0l0ZW1fZm9ybXN0eWxlM19fM3Nybm9cIixcblx0XCJkaXZpZGVyXCI6IFwiUG9zdE5ld0l0ZW1fZGl2aWRlcl9fajhUZFRcIixcblx0XCJjZW50ZXJcIjogXCJQb3N0TmV3SXRlbV9jZW50ZXJfXzFQQk5sXCIsXG5cdFwiY3VzdG9tc2VsZWN0XCI6IFwiUG9zdE5ld0l0ZW1fY3VzdG9tc2VsZWN0X18yMW0zT1wiLFxuXHRcInJlcXVpcmVkXCI6IFwiUG9zdE5ld0l0ZW1fcmVxdWlyZWRfXzN0RHdKXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==