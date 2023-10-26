webpackHotUpdate_N_E("pages/stats",{

/***/ "./components/UI/Loading.js":
/*!**********************************!*\
  !*** ./components/UI/Loading.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.module.css */ "./components/UI/Loading.module.css");
/* harmony import */ var _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loading_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\UI\\Loading.js";



function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "".concat(_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.justifycontentcenter, " ").concat(_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jimuprimaryloading)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

$RefreshReg$(_c, "Loading");

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

/***/ "./components/UI/Loading.module.css":
/*!******************************************!*\
  !*** ./components/UI/Loading.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Loading.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loading.module.css");

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
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Loading.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loading.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Loading.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loading.module.css");

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

/***/ "./components/stats/ContactForm.js":
/*!*****************************************!*\
  !*** ./components/stats/ContactForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactForm.module.css */ "./components/stats/ContactForm.module.css");
/* harmony import */ var _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\stats\\ContactForm.js",
    _s = $RefreshSig$();







function sendMessage(_x, _x2, _x3) {
  return _sendMessage.apply(this, arguments);
}

function _sendMessage() {
  _sendMessage = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, message, enteredName) {
    var response, data;
    return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("/api/auth/signup", {
              method: "POST",
              body: JSON.stringify({
                email: email,
                message: message,
                enteredName: enteredName
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
  return _sendMessage.apply(this, arguments);
}

function ContactForm() {
  _s();

  var contactEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var contactMessageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var contactNameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function submitHandler(_x4) {
    return _submitHandler.apply(this, arguments);
  }

  function _submitHandler() {
    _submitHandler = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var enteredEmail, enteredMessage, enteredName, result;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setIsLoading(true);
              enteredEmail = contactEmailInputRef.current.value;
              enteredMessage = contactMessageInputRef.current.value;
              enteredName = contactNameInputRef.current.value;
              _context.prev = 5;
              _context.next = 8;
              return sendMessage(enteredEmail, enteredMessage, enteredName);

            case 8:
              result = _context.sent;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](5);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 11]]);
    }));
    return _submitHandler.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.totalcontactform,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contacttitle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
        className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sectionheading,
        children: "Contact Form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "If there is something you want to suggest or simply want to say hello, do reach out."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _ContactForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contactform,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            "for": "field1",
            children: "Name :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            name: "field1",
            placeholder: "Enter name",
            ref: contactNameInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            "for": "field2",
            children: "Email address :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "email",
            name: "field2",
            placeholder: "Enter email",
            ref: contactEmailInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            "for": "description",
            children: "Message :"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
            type: "text",
            name: "description",
            rows: "4",
            cols: "5",
            ref: contactMessageInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          content: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(ContactForm, "LWLUlgTHkNeocThbgIESmu6ulic=");

_c = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c;

$RefreshReg$(_c, "ContactForm");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/UI/Loading.module.css":
/*!******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/UI/Loading.module.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Loading_loader__3AIAm {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.Loading_jimuprimaryloading__1GHIl:before,\r\n.Loading_jimuprimaryloading__1GHIl:after {\r\n  position: absolute;\r\n  top: 0;\r\n  content: \"\";\r\n}\r\n\r\n.Loading_jimuprimaryloading__1GHIl:before {\r\n  left: -19.992px;\r\n}\r\n\r\n.Loading_jimuprimaryloading__1GHIl:after {\r\n  left: 19.992px;\r\n  -webkit-animation-delay: 0.32s !important;\r\n  -moz-animation-delay: 0.32s !important;\r\n       animation-delay: 0.32s !important;\r\n}\r\n\r\n.Loading_jimuprimaryloading__1GHIl:before,\r\n.Loading_jimuprimaryloading__1GHIl:after,\r\n.Loading_jimuprimaryloading__1GHIl {\r\n  background: #311465;\r\n  -webkit-animation: Loading_loading-keys-app-loading__Yl0sI 0.8s infinite ease-in-out;\r\n  -moz-animation: Loading_loading-keys-app-loading__Yl0sI 0.8s infinite ease-in-out;\r\n       animation: Loading_loading-keys-app-loading__Yl0sI 0.8s infinite ease-in-out;\r\n  width: 13.6px;\r\n  height: 32px;\r\n}\r\n\r\n.Loading_jimuprimaryloading__1GHIl {\r\n  text-indent: -9999em;\r\n  margin: auto;\r\n  position: absolute;\r\n  right: -moz-calc(50% - 6.8px);\r\n  right: calc(50% - 6.8px);\r\n  top: -moz-calc(50% - 16px);\r\n  top: calc(50% - 16px);\r\n  -webkit-animation-delay: 0.16s !important;\r\n  -moz-animation-delay: 0.16s !important;\r\n       animation-delay: 0.16s !important;\r\n}\r\n\r\n@-webkit-keyframes Loading_loading-keys-app-loading__Yl0sI {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    opacity: 0.75;\r\n    -webkit-box-shadow: 0 0 #311465;\r\n            box-shadow: 0 0 #311465;\r\n    height: 32px;\r\n  }\r\n\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-box-shadow: 0 -8px #311465;\r\n            box-shadow: 0 -8px #311465;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n@-moz-keyframes Loading_loading-keys-app-loading__Yl0sI {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    opacity: 0.75;\r\n    box-shadow: 0 0 #311465;\r\n    height: 32px;\r\n  }\r\n\r\n  40% {\r\n    opacity: 1;\r\n    box-shadow: 0 -8px #311465;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n@keyframes Loading_loading-keys-app-loading__Yl0sI {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    opacity: 0.75;\r\n    -webkit-box-shadow: 0 0 #311465;\r\n            box-shadow: 0 0 #311465;\r\n    height: 32px;\r\n  }\r\n\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-box-shadow: 0 -8px #311465;\r\n            box-shadow: 0 -8px #311465;\r\n    height: 40px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://components/UI/Loading.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;;EAEE,kBAAkB;EAClB,MAAM;EACN,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,yCAAyC;EACzC,sCAAiC;OAAjC,iCAAiC;AACnC;;AAEA;;;EAGE,mBAAmB;EACnB,oFAAqE;EACrE,iFAA6D;OAA7D,4EAA6D;EAC7D,aAAa;EACb,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,6BAAwB;EAAxB,wBAAwB;EACxB,0BAAqB;EAArB,qBAAqB;EACrB,yCAAyC;EACzC,sCAAiC;OAAjC,iCAAiC;AACnC;;AAEA;EACE;;;IAGE,aAAa;IACb,+BAAuB;YAAvB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,YAAY;EACd;AACF;;AAEA;EACE;;;IAGE,aAAa;IACb,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,UAAU;IACV,0BAA0B;IAC1B,YAAY;EACd;AACF;;AAdA;EACE;;;IAGE,aAAa;IACb,+BAAuB;YAAvB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,UAAU;IACV,kCAA0B;YAA1B,0BAA0B;IAC1B,YAAY;EACd;AACF","sourcesContent":[".loader {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.jimuprimaryloading:before,\r\n.jimuprimaryloading:after {\r\n  position: absolute;\r\n  top: 0;\r\n  content: \"\";\r\n}\r\n\r\n.jimuprimaryloading:before {\r\n  left: -19.992px;\r\n}\r\n\r\n.jimuprimaryloading:after {\r\n  left: 19.992px;\r\n  -webkit-animation-delay: 0.32s !important;\r\n  animation-delay: 0.32s !important;\r\n}\r\n\r\n.jimuprimaryloading:before,\r\n.jimuprimaryloading:after,\r\n.jimuprimaryloading {\r\n  background: #311465;\r\n  -webkit-animation: loading-keys-app-loading 0.8s infinite ease-in-out;\r\n  animation: loading-keys-app-loading 0.8s infinite ease-in-out;\r\n  width: 13.6px;\r\n  height: 32px;\r\n}\r\n\r\n.jimuprimaryloading {\r\n  text-indent: -9999em;\r\n  margin: auto;\r\n  position: absolute;\r\n  right: calc(50% - 6.8px);\r\n  top: calc(50% - 16px);\r\n  -webkit-animation-delay: 0.16s !important;\r\n  animation-delay: 0.16s !important;\r\n}\r\n\r\n@-webkit-keyframes loading-keys-app-loading {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    opacity: 0.75;\r\n    box-shadow: 0 0 #311465;\r\n    height: 32px;\r\n  }\r\n\r\n  40% {\r\n    opacity: 1;\r\n    box-shadow: 0 -8px #311465;\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n@keyframes loading-keys-app-loading {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    opacity: 0.75;\r\n    box-shadow: 0 0 #311465;\r\n    height: 32px;\r\n  }\r\n\r\n  40% {\r\n    opacity: 1;\r\n    box-shadow: 0 -8px #311465;\r\n    height: 40px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loader": "Loading_loader__3AIAm",
	"jimuprimaryloading": "Loading_jimuprimaryloading__1GHIl",
	"loading-keys-app-loading": "Loading_loading-keys-app-loading__Yl0sI"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL0xvYWRpbmcubW9kdWxlLmNzcz8yYWNmIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N0YXRzL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL0xvYWRpbmcubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJMb2FkaW5nIiwiY2xhc3NlcyIsImxvYWRlciIsImp1c3RpZnljb250ZW50Y2VudGVyIiwiamltdXByaW1hcnlsb2FkaW5nIiwic2VuZE1lc3NhZ2UiLCJlbWFpbCIsIm1lc3NhZ2UiLCJlbnRlcmVkTmFtZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiRXJyb3IiLCJDb250YWN0Rm9ybSIsImNvbnRhY3RFbWFpbElucHV0UmVmIiwidXNlUmVmIiwiY29udGFjdE1lc3NhZ2VJbnB1dFJlZiIsImNvbnRhY3ROYW1lSW5wdXRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldElzTG9hZGluZyIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRNZXNzYWdlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRvdGFsY29udGFjdGZvcm0iLCJjb250YWN0dGl0bGUiLCJzZWN0aW9uaGVhZGluZyIsImNvbnRhY3Rmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLHNCQUNFO0FBQUssYUFBUyxFQUFFQywwREFBTyxDQUFDQyxNQUF4QjtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxZQUFLRCwwREFBTyxDQUFDRSxvQkFBYixjQUFxQ0Ys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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRzLjZiZWQ0ODBkNjkxZjJjNWM0ZTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xvYWRpbmcubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5qdXN0aWZ5Y29udGVudGNlbnRlcn0gJHtjbGFzc2VzLmppbXVwcmltYXJ5bG9hZGluZ31gfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0xvYWRpbmcubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTG9hZGluZy5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTG9hZGluZy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ29udGFjdEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZShlbWFpbCwgbWVzc2FnZSwgZW50ZXJlZE5hbWUpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgbWVzc2FnZSwgZW50ZXJlZE5hbWUgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBjb250YWN0RW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNvbnRhY3RNZXNzYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjb250YWN0TmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gY29udGFjdEVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRNZXNzYWdlID0gY29udGFjdE1lc3NhZ2VJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZE5hbWUgPSBjb250YWN0TmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2UoXHJcbiAgICAgICAgZW50ZXJlZEVtYWlsLFxyXG4gICAgICAgIGVudGVyZWRNZXNzYWdlLFxyXG4gICAgICAgIGVudGVyZWROYW1lXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnRvdGFsY29udGFjdGZvcm19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0dGl0bGV9PlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbmhlYWRpbmd9PkNvbnRhY3QgRm9ybTwvaDY+XHJcblxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgSWYgdGhlcmUgaXMgc29tZXRoaW5nIHlvdSB3YW50IHRvIHN1Z2dlc3Qgb3Igc2ltcGx5IHdhbnQgdG8gc2F5IGhlbGxvLFxyXG4gICAgICAgICAgZG8gcmVhY2ggb3V0LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0Zm9ybX0+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmllbGQxXCI+TmFtZSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDFcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgcmVmPXtjb250YWN0TmFtZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmllbGQyXCI+RW1haWwgYWRkcmVzcyA6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmllbGQyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICByZWY9e2NvbnRhY3RFbWFpbElucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5NZXNzYWdlIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgY29scz1cIjVcIlxyXG4gICAgICAgICAgICAgIHJlZj17Y29udGFjdE1lc3NhZ2VJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiU3VibWl0XCI+PC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkxvYWRpbmdfbG9hZGVyX18zQUlBbSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5Mb2FkaW5nX2ppbXVwcmltYXJ5bG9hZGluZ19fMUdISWw6YmVmb3JlLFxcclxcbi5Mb2FkaW5nX2ppbXVwcmltYXJ5bG9hZGluZ19fMUdISWw6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5Mb2FkaW5nX2ppbXVwcmltYXJ5bG9hZGluZ19fMUdISWw6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6IC0xOS45OTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbDphZnRlciB7XFxyXFxuICBsZWZ0OiAxOS45OTJweDtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjMycyAhaW1wb3J0YW50O1xcclxcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMzJzICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zMnMgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbDpiZWZvcmUsXFxyXFxuLkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbDphZnRlcixcXHJcXG4uTG9hZGluZ19qaW11cHJpbWFyeWxvYWRpbmdfXzFHSElsIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMzMTE0NjU7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogTG9hZGluZ19sb2FkaW5nLWtleXMtYXBwLWxvYWRpbmdfX1lsMHNJIDAuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxyXFxuICAtbW96LWFuaW1hdGlvbjogTG9hZGluZ19sb2FkaW5nLWtleXMtYXBwLWxvYWRpbmdfX1lsMHNJIDAuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgIGFuaW1hdGlvbjogTG9hZGluZ19sb2FkaW5nLWtleXMtYXBwLWxvYWRpbmdfX1lsMHNJIDAuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxyXFxuICB3aWR0aDogMTMuNnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uTG9hZGluZ19qaW11cHJpbWFyeWxvYWRpbmdfXzFHSElsIHtcXHJcXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IC1tb3otY2FsYyg1MCUgLSA2LjhweCk7XFxyXFxuICByaWdodDogY2FsYyg1MCUgLSA2LjhweCk7XFxyXFxuICB0b3A6IC1tb3otY2FsYyg1MCUgLSAxNnB4KTtcXHJcXG4gIHRvcDogY2FsYyg1MCUgLSAxNnB4KTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjE2cyAhaW1wb3J0YW50O1xcclxcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMTZzICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNnMgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIExvYWRpbmdfbG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nX19ZbDBzSSB7XFxyXFxuICAwJSxcXHJcXG4gIDgwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAjMzExNDY1O1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAjMzExNDY1O1xcclxcbiAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA0MCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLThweCAjMzExNDY1O1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLThweCAjMzExNDY1O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkAtbW96LWtleWZyYW1lcyBMb2FkaW5nX2xvYWRpbmcta2V5cy1hcHAtbG9hZGluZ19fWWwwc0kge1xcclxcbiAgMCUsXFxyXFxuICA4MCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwICMzMTE0NjU7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDQwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgLThweCAjMzExNDY1O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgTG9hZGluZ19sb2FkaW5nLWtleXMtYXBwLWxvYWRpbmdfX1lsMHNJIHtcXHJcXG4gIDAlLFxcclxcbiAgODAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNzU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwICMzMTE0NjU7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwICMzMTE0NjU7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDQwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtOHB4ICMzMTE0NjU7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtOHB4ICMzMTE0NjU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvVUkvTG9hZGluZy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLHNDQUFpQztPQUFqQyxpQ0FBaUM7QUFDbkM7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixvRkFBcUU7RUFDckUsaUZBQTZEO09BQTdELDRFQUE2RDtFQUM3RCxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQXdCO0VBQXhCLHdCQUF3QjtFQUN4QiwwQkFBcUI7RUFBckIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxzQ0FBaUM7T0FBakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7OztJQUdFLGFBQWE7SUFDYiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7OztJQUdFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixZQUFZO0VBQ2Q7QUFDRjs7QUFkQTtFQUNFOzs7SUFHRSxhQUFhO0lBQ2IsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9hZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmppbXVwcmltYXJ5bG9hZGluZzpiZWZvcmUsXFxyXFxuLmppbXVwcmltYXJ5bG9hZGluZzphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmppbXVwcmltYXJ5bG9hZGluZzpiZWZvcmUge1xcclxcbiAgbGVmdDogLTE5Ljk5MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uamltdXByaW1hcnlsb2FkaW5nOmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDE5Ljk5MnB4O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMzJzICFpbXBvcnRhbnQ7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuMzJzICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5qaW11cHJpbWFyeWxvYWRpbmc6YmVmb3JlLFxcclxcbi5qaW11cHJpbWFyeWxvYWRpbmc6YWZ0ZXIsXFxyXFxuLmppbXVwcmltYXJ5bG9hZGluZyB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzExNDY1O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmcta2V5cy1hcHAtbG9hZGluZyAwLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcclxcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLWtleXMtYXBwLWxvYWRpbmcgMC44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXHJcXG4gIHdpZHRoOiAxMy42cHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5qaW11cHJpbWFyeWxvYWRpbmcge1xcclxcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogY2FsYyg1MCUgLSA2LjhweCk7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gMTZweCk7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xNnMgIWltcG9ydGFudDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4xNnMgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmcta2V5cy1hcHAtbG9hZGluZyB7XFxyXFxuICAwJSxcXHJcXG4gIDgwJSxcXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgIzMxMTQ2NTtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgNDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAtOHB4ICMzMTE0NjU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2FkaW5nLWtleXMtYXBwLWxvYWRpbmcge1xcclxcbiAgMCUsXFxyXFxuICA4MCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwICMzMTE0NjU7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDQwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgLThweCAjMzExNDY1O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxvYWRlclwiOiBcIkxvYWRpbmdfbG9hZGVyX18zQUlBbVwiLFxuXHRcImppbXVwcmltYXJ5bG9hZGluZ1wiOiBcIkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbFwiLFxuXHRcImxvYWRpbmcta2V5cy1hcHAtbG9hZGluZ1wiOiBcIkxvYWRpbmdfbG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nX19ZbDBzSVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=