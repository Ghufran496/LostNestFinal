webpackHotUpdate_N_E("pages/postfounditem",{

/***/ "./components/postcomp/FoundNewItem.js":
/*!*********************************************!*\
  !*** ./components/postcomp/FoundNewItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FoundNewItem.module.css */ "./components/postcomp/FoundNewItem.module.css");
/* harmony import */ var _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _UI_ErrorComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/ErrorComp */ "./components/UI/ErrorComp.js");
/* harmony import */ var _components_notificationOverlay_noti__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/notificationOverlay/noti */ "./components/notificationOverlay/noti.js");
/* harmony import */ var _notificationOverlay_Loadings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notificationOverlay/Loadings */ "./components/notificationOverlay/Loadings.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\postcomp\\FoundNewItem.js",
    _s = $RefreshSig$();










function FoundNewItem() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      isImage = _useState2[0],
      setIsImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isError = _useState3[0],
      setIsError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Sorry but the page you are looking for does not exist."),
      isErrorData = _useState4[0],
      setIsErrorData = _useState4[1];

  var typeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var categoryInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var titleInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var descriptionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var questionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var dateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  function sendEmails(_x, _x2) {
    return _sendEmails.apply(this, arguments);
  }

  function _sendEmails() {
    _sendEmails = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(subject, message) {
      var response, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("/api/email/sendEmail", {
                method: "POST",
                body: JSON.stringify({
                  subject: subject,
                  message: message
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
                console.log("Response not ok");
              }

              return _context2.abrupt("return", data);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _sendEmails.apply(this, arguments);
  }

  function sendPostData(_x3, _x4, _x5, _x6, _x7, _x8, _x9) {
    return _sendPostData.apply(this, arguments);
  }

  function _sendPostData() {
    _sendPostData = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(Type, Category, Title, Description, Question, Date, imageInbase64) {
      var response, data;
      return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
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
              response = _context3.sent;
              _context3.next = 5;
              return response.json();

            case 5:
              data = _context3.sent;

              if (!response.ok) {
                setIsErrorData(data.message);
                setIsLoading(false);
                setIsError(true);
              }

              return _context3.abrupt("return", data);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _sendPostData.apply(this, arguments);
  }

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
      var enteredType, enteredCategory, enteredTitle, enteredDescription, enteredQuestion, enteredDate, humanReadableDate, message, subject, emailres, result;
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
              message = "".concat(enteredType, " ").concat(enteredCategory, "\n  \nItem Name: ").concat(enteredTitle, "\nDate: ").concat(humanReadableDate, "\nDescription: ").concat(enteredDescription, "\n\nIf you have any information about the ").concat(enteredType, " item, kindly visit the LostNest web application.\n\nThank you\n");
              subject = "".concat(enteredType, " : ").concat(enteredTitle);
              _context.next = 13;
              return sendEmails(subject, message);

            case 13:
              emailres = _context.sent;
              _context.next = 16;
              return sendPostData(enteredType, enteredCategory, enteredTitle, enteredDescription, enteredQuestion, humanReadableDate, isImage);

            case 16:
              result = _context.sent;
              // console.log(result);
              event.target.reset(); // This resets the form

              setIsImage(""); // Clear the image state

              setIsLoading(false);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function postSubmitHandler(_x10) {
      return _ref.apply(this, arguments);
    };
  }();

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 12
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formstyle3,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: postSubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
          children: "Data"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.divider,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            name: "item",
            className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
            ref: typeInputRef,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Found",
              children: "Found"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            defaultValue: "Category",
            name: "category",
            className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
            ref: categoryInputRef,
            required: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Category",
              disabled: true,
              children: "Category"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Wallet",
              children: "Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "ID Card / Student Card",
              children: "ID Card / Student Card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Smart Phone / Laptop",
              children: "Smart Phone / Laptop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Keys",
              children: "Keys"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Others",
              children: "Others"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "field3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Item Name ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "field3",
            placeholder: "Title",
            className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
            ref: titleInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "field4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Enter question based on an item.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "field4",
            placeholder: "Ex:- What is the color of the phone?",
            className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
            ref: questionInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "date",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Select a Date: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "date",
            name: "date",
            id: "date",
            className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.customselect,
            ref: dateInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
          children: "Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Description ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 27
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            type: "text",
            name: "description",
            placeholder: "Description about item (like location etc...)",
            className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textareafield,
            ref: descriptionInputRef,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "file",
          id: "image",
          name: "image",
          accept: "image/*",
          className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.customselect,
          style: {
            width: "100%"
          },
          onChange: converttobase64,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "Post"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 5
  }, this);
}

_s(FoundNewItem, "vpDc7St7ZLX3Vjdte79j8wT1xrM=");

_c = FoundNewItem;
/* harmony default export */ __webpack_exports__["default"] = (FoundNewItem);

var _c;

$RefreshReg$(_c, "FoundNewItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Gb3VuZE5ld0l0ZW0uanMiXSwibmFtZXMiOlsiRm91bmROZXdJdGVtIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0ltYWdlIiwic2V0SXNJbWFnZSIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInR5cGVJbnB1dFJlZiIsInVzZVJlZiIsImNhdGVnb3J5SW5wdXRSZWYiLCJ0aXRsZUlucHV0UmVmIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsInF1ZXN0aW9uSW5wdXRSZWYiLCJkYXRlSW5wdXRSZWYiLCJzZW5kRW1haWxzIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJzZW5kUG9zdERhdGEiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiaW1hZ2VJbmJhc2U2NCIsIlJlZHVjZWRJbWciLCJjb252ZXJ0dG9iYXNlNjQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsInBvc3RTdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRUeXBlIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZENhdGVnb3J5IiwiZW50ZXJlZFRpdGxlIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwiZW50ZXJlZFF1ZXN0aW9uIiwiZW50ZXJlZERhdGUiLCJodW1hblJlYWRhYmxlRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImVtYWlscmVzIiwicmVzZXQiLCJjbGFzc2VzIiwiZm9ybXN0eWxlMyIsImRpdmlkZXIiLCJpbnB1dGZpZWxkIiwicmVxdWlyZWQiLCJjdXN0b21zZWxlY3QiLCJ0ZXh0YXJlYWZpZWxkIiwid2lkdGgiLCJjZW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsS0FBRCxDQURwQjtBQUFBLE1BQ2ZDLFNBRGU7QUFBQSxNQUNKQyxZQURJOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVmRyxPQUZlO0FBQUEsTUFFTkMsVUFGTTs7QUFBQSxtQkFHUUosc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHZkssT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSWdCTixzREFBUSxDQUM1Qyx3REFENEMsQ0FKeEI7QUFBQSxNQUlmTyxXQUplO0FBQUEsTUFJRkMsY0FKRTs7QUFRdEIsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRCxvREFBTSxFQUEvQjtBQUNBLE1BQU1FLGFBQWEsR0FBR0Ysb0RBQU0sRUFBNUI7QUFDQSxNQUFNRyxtQkFBbUIsR0FBR0gsb0RBQU0sRUFBbEM7QUFDQSxNQUFNSSxnQkFBZ0IsR0FBR0osb0RBQU0sRUFBL0I7QUFDQSxNQUFNSyxZQUFZLEdBQUdMLG9EQUFNLEVBQTNCOztBQWJzQixXQWVQTSxVQWZPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVSQWV0QixrQkFBMEJDLE9BQTFCLEVBQW1DQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN5QkMsS0FBSyxDQUFDLHNCQUFELEVBQXlCO0FBQ25EQyxzQkFBTSxFQUFFLE1BRDJDO0FBRW5EQyxvQkFB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QUFDSyxZQUxyQjtBQU1FLGVBQUssRUFBRTtBQUFFRSxpQkFBSyxFQUFFO0FBQVQsV0FOVDtBQU9FLGtCQUFRLEVBQUVwQyxlQVBaO0FBUUUsa0JBQVE7QUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGLGVBeUJFO0FBQUssbUJBQVMsRUFBRTZCLCtEQUFPLENBQUNRLE1BQXhCO0FBQUEsaUNBQ0UscUVBQUMsa0RBQUQ7QUFBUSxtQkFBTyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkdEOztHQTFQUTlFLFk7O0tBQUFBLFk7QUE0UE1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3Rmb3VuZGl0ZW0uZDFkNmIxYTE3MDFkYzkzMDQ2MWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0ZvdW5kTmV3SXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmltcG9ydCBFcnJvckNvbXAgZnJvbSBcIi4uL1VJL0Vycm9yQ29tcFwiO1xyXG5pbXBvcnQgTm90aSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25PdmVybGF5L25vdGlcIjtcclxuaW1wb3J0IExvYWRpbmdzIGZyb20gXCIuLi9ub3RpZmljYXRpb25PdmVybGF5L0xvYWRpbmdzXCI7XHJcblxyXG5mdW5jdGlvbiBGb3VuZE5ld0l0ZW0oKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNJbWFnZSwgc2V0SXNJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3JEYXRhLCBzZXRJc0Vycm9yRGF0YV0gPSB1c2VTdGF0ZShcclxuICAgIFwiU29ycnkgYnV0IHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3QuXCJcclxuICApO1xyXG5cclxuICBjb25zdCB0eXBlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYXRlZ29yeUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGl0bGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBxdWVzdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGF0ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbHMoc3ViamVjdCwgbWVzc2FnZSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZW1haWwvc2VuZEVtYWlsXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgbWVzc2FnZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIG5vdCBva1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRQb3N0RGF0YShcclxuICAgIFR5cGUsXHJcbiAgICBDYXRlZ29yeSxcclxuICAgIFRpdGxlLFxyXG4gICAgRGVzY3JpcHRpb24sXHJcbiAgICBRdWVzdGlvbixcclxuICAgIERhdGUsXHJcbiAgICBpbWFnZUluYmFzZTY0XHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb3N0L3Bvc3RpdGVtXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIFR5cGUsXHJcbiAgICAgICAgQ2F0ZWdvcnksXHJcbiAgICAgICAgVGl0bGUsXHJcbiAgICAgICAgRGVzY3JpcHRpb24sXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgRGF0ZSxcclxuICAgICAgICBSZWR1Y2VkSW1nOiBpbWFnZUluYmFzZTY0LFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzRXJyb3JEYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNvbnZlcnR0b2Jhc2U2NChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICBzZXRJc0ltYWdlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBwb3N0U3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkVHlwZSA9IHR5cGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZENhdGVnb3J5ID0gY2F0ZWdvcnlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFF1ZXN0aW9uID0gcXVlc3Rpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERhdGUgPSBkYXRlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGVudGVyZWREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIixcclxuICAgICAge1xyXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtlbnRlcmVkVHlwZX0gJHtlbnRlcmVkQ2F0ZWdvcnl9XHJcbiAgXHJcbkl0ZW0gTmFtZTogJHtlbnRlcmVkVGl0bGV9XHJcbkRhdGU6ICR7aHVtYW5SZWFkYWJsZURhdGV9XHJcbkRlc2NyaXB0aW9uOiAke2VudGVyZWREZXNjcmlwdGlvbn1cclxuXHJcbklmIHlvdSBoYXZlIGFueSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgJHtlbnRlcmVkVHlwZX0gaXRlbSwga2luZGx5IHZpc2l0IHRoZSBMb3N0TmVzdCB3ZWIgYXBwbGljYXRpb24uXHJcblxyXG5UaGFuayB5b3VcclxuYDtcclxuXHJcbiAgICBjb25zdCBzdWJqZWN0ID0gYCR7ZW50ZXJlZFR5cGV9IDogJHtlbnRlcmVkVGl0bGV9YDtcclxuXHJcbiAgICBjb25zdCBlbWFpbHJlcyA9IGF3YWl0IHNlbmRFbWFpbHMoc3ViamVjdCwgbWVzc2FnZSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kUG9zdERhdGEoXHJcbiAgICAgIGVudGVyZWRUeXBlLFxyXG4gICAgICBlbnRlcmVkQ2F0ZWdvcnksXHJcbiAgICAgIGVudGVyZWRUaXRsZSxcclxuICAgICAgZW50ZXJlZERlc2NyaXB0aW9uLFxyXG4gICAgICBlbnRlcmVkUXVlc3Rpb24sXHJcbiAgICAgIGh1bWFuUmVhZGFibGVEYXRlLFxyXG4gICAgICBpc0ltYWdlXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBldmVudC50YXJnZXQucmVzZXQoKTsgLy8gVGhpcyByZXNldHMgdGhlIGZvcm1cclxuICAgIHNldElzSW1hZ2UoXCJcIik7IC8vIENsZWFyIHRoZSBpbWFnZSBzdGF0ZVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvckNvbXAgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3Jtc3R5bGUzfT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3RTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICA8bGVnZW5kPkRhdGE8L2xlZ2VuZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9PlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgbmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17dHlwZUlucHV0UmVmfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZvdW5kXCI+Rm91bmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e2NhdGVnb3J5SW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXRlZ29yeVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2FsbGV0XCI+V2FsbGV0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEIENhcmQgLyBTdHVkZW50IENhcmRcIj5cclxuICAgICAgICAgICAgICAgIElEIENhcmQgLyBTdHVkZW50IENhcmRcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU21hcnQgUGhvbmUgLyBMYXB0b3BcIj5TbWFydCBQaG9uZSAvIExhcHRvcDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLZXlzXCI+S2V5czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpZWxkM1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBJdGVtIE5hbWUgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJlcXVpcmVkfT4qPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmllbGQzXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e3RpdGxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWVsZDRcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgRW50ZXIgcXVlc3Rpb24gYmFzZWQgb24gYW4gaXRlbS5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6LSBXaGF0IGlzIHRoZSBjb2xvciBvZiB0aGUgcGhvbmU/XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e3F1ZXN0aW9uSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBTZWxlY3QgYSBEYXRlOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgICAgcmVmPXtkYXRlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgPGxlZ2VuZD5EZXRhaWxzPC9sZWdlbmQ+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIERlc2NyaXB0aW9uIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGFib3V0IGl0ZW0gKGxpa2UgbG9jYXRpb24gZXRjLi4uKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhZmllbGR9XHJcbiAgICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb252ZXJ0dG9iYXNlNjR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUG9zdFwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm91bmROZXdJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9