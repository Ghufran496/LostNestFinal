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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      sendEmail = _useState5[0],
      setIsSendEmail = _useState5[1];

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
      lineNumber: 149,
      columnNumber: 12
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
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
          lineNumber: 159,
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
              lineNumber: 166,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
              lineNumber: 175,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Wallet",
              children: "Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "ID Card / Student Card",
              children: "ID Card / Student Card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Smart Phone / Laptop",
              children: "Smart Phone / Laptop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Keys",
              children: "Keys"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "Others",
              children: "Others"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "field3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Item Name ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
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
            lineNumber: 192,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "field4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Enter question based on an item.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
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
            lineNumber: 206,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "date",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Select a Date: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
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
            lineNumber: 220,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
          children: "Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["Description ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
              children: "*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 27
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 233,
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
            lineNumber: 236,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
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
          lineNumber: 245,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "Post"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 5
  }, this);
}

_s(FoundNewItem, "NIya+hWBHorh79F+gl3a/3F+tgk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Gb3VuZE5ld0l0ZW0uanMiXSwibmFtZXMiOlsiRm91bmROZXdJdGVtIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0ltYWdlIiwic2V0SXNJbWFnZSIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInNlbmRFbWFpbCIsInNldElzU2VuZEVtYWlsIiwidHlwZUlucHV0UmVmIiwidXNlUmVmIiwiY2F0ZWdvcnlJbnB1dFJlZiIsInRpdGxlSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwicXVlc3Rpb25JbnB1dFJlZiIsImRhdGVJbnB1dFJlZiIsInNlbmRFbWFpbHMiLCJzdWJqZWN0IiwibWVzc2FnZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwiY29uc29sZSIsImxvZyIsInNlbmRQb3N0RGF0YSIsIlR5cGUiLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJRdWVzdGlvbiIsIkRhdGUiLCJpbWFnZUluYmFzZTY0IiwiUmVkdWNlZEltZyIsImNvbnZlcnR0b2Jhc2U2NCIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsInRhcmdldCIsImZpbGVzIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwicG9zdFN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZFR5cGUiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJlbnRlcmVkVGl0bGUiLCJlbnRlcmVkRGVzY3JpcHRpb24iLCJlbnRlcmVkUXVlc3Rpb24iLCJlbnRlcmVkRGF0ZSIsImh1bWFuUmVhZGFibGVEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZW1haWxyZXMiLCJyZXNldCIsImNsYXNzZXMiLCJmb3Jtc3R5bGUzIiwiZGl2aWRlciIsImlucHV0ZmllbGQiLCJyZXF1aXJlZCIsImN1c3RvbXNlbGVjdCIsInRleHRhcmVhZmllbGQiLCJ3aWR0aCIsImNlbnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDZkMsU0FEZTtBQUFBLE1BQ0pDLFlBREk7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWZHLE9BRmU7QUFBQSxNQUVOQyxVQUZNOztBQUFBLG1CQUdRSixzREFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFBQSxNQUdmSyxPQUhlO0FBQUEsTUFHTkMsVUFITTs7QUFBQSxtQkFJZ0JOLHNEQUFRLENBQzVDLHdEQUQ0QyxDQUp4QjtBQUFBLE1BSWZPLFdBSmU7QUFBQSxNQUlGQyxjQUpFOztBQUFBLG1CQU9jUixzREFBUSxDQUFDLEtBQUQsQ0FQdEI7QUFBQSxNQU9mUyxTQVBlO0FBQUEsTUFPSkMsY0FQSTs7QUFTdEIsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRCxvREFBTSxFQUEvQjtBQUNBLE1BQU1FLGFBQWEsR0FBR0Ysb0RBQU0sRUFBNUI7QUFDQSxNQUFNRyxtQkFBbUIsR0FBR0gsb0RBQU0sRUFBbEM7QUFDQSxNQUFNSSxnQkFBZ0IsR0FBR0osb0RBQU0sRUFBL0I7QUFDQSxNQUFNSyxZQUFZLEdBQUdMLG9EQUFNLEVBQTNCOztBQWRzQixXQWdCUE0sVUFoQk87QUFBQTtBQUFBOztBQUFBO0FBQUEsdVJBZ0J0QixrQkFBMEJDLE9BQTFCLEVBQW1DQyxPQUFuQztB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QUFJLEVBQUMsTUFEUDtBQUVFLFlBQUUsRUFBQyxPQUZMO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSxnQkFBTSxFQUFDLFNBSlQ7QUFLRSxtQkFBUyxFQUFFd0QsK0RBQU8sQ0FBQ0ssWUFMckI7QUFNRSxlQUFLLEVBQUU7QUFBRUUsaUJBQUssRUFBRTtBQUFULFdBTlQ7QUFPRSxrQkFBUSxFQUFFcEMsZUFQWjtBQVFFLGtCQUFRO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRixlQXlCRTtBQUFLLG1CQUFTLEVBQUU2QiwrREFBTyxDQUFDUSxNQUF4QjtBQUFBLGlDQUNFLHFFQUFDLGtEQUFEO0FBQVEsbUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJHRDs7R0EzUFFoRixZOztLQUFBQSxZO0FBNlBNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0Zm91bmRpdGVtLmQyY2YxYzcwYmY0NDRmODgxNmU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Gb3VuZE5ld0l0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXJyb3JDb21wIGZyb20gXCIuLi9VSS9FcnJvckNvbXBcIjtcclxuaW1wb3J0IE5vdGkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uT3ZlcmxheS9ub3RpXCI7XHJcbmltcG9ydCBMb2FkaW5ncyBmcm9tIFwiLi4vbm90aWZpY2F0aW9uT3ZlcmxheS9Mb2FkaW5nc1wiO1xyXG5cclxuZnVuY3Rpb24gRm91bmROZXdJdGVtKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzSW1hZ2UsIHNldElzSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXHJcbiAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgKTtcclxuICBjb25zdCBbc2VuZEVtYWlsLCBzZXRJc1NlbmRFbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHR5cGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNhdGVnb3J5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHF1ZXN0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkYXRlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlscyhzdWJqZWN0LCBtZXNzYWdlKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9lbWFpbC9zZW5kRW1haWxcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgc3ViamVjdCxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2Ugbm90IG9rXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZFBvc3REYXRhKFxyXG4gICAgVHlwZSxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgVGl0bGUsXHJcbiAgICBEZXNjcmlwdGlvbixcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgRGF0ZSxcclxuICAgIGltYWdlSW5iYXNlNjRcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgVHlwZSxcclxuICAgICAgICBDYXRlZ29yeSxcclxuICAgICAgICBUaXRsZSxcclxuICAgICAgICBEZXNjcmlwdGlvbixcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBEYXRlLFxyXG4gICAgICAgIFJlZHVjZWRJbWc6IGltYWdlSW5iYXNlNjQsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNFcnJvckRhdGEoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY29udmVydHRvYmFzZTY0KGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHNldElzSW1hZ2UocmVhZGVyLnJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IHBvc3RTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWRUeXBlID0gdHlwZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkQ2F0ZWdvcnkgPSBjYXRlZ29yeUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aXRsZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkUXVlc3Rpb24gPSBxdWVzdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkRGF0ZSA9IGRhdGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZW50ZXJlZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZSA9IGAke2VudGVyZWRUeXBlfSAke2VudGVyZWRDYXRlZ29yeX1cclxuICBcclxuSXRlbSBOYW1lOiAke2VudGVyZWRUaXRsZX1cclxuRGF0ZTogJHtodW1hblJlYWRhYmxlRGF0ZX1cclxuRGVzY3JpcHRpb246ICR7ZW50ZXJlZERlc2NyaXB0aW9ufVxyXG5cclxuSWYgeW91IGhhdmUgYW55IGluZm9ybWF0aW9uIGFib3V0IHRoZSAke2VudGVyZWRUeXBlfSBpdGVtLCBraW5kbHkgdmlzaXQgdGhlIExvc3ROZXN0IHdlYiBhcHBsaWNhdGlvbi5cclxuXHJcblRoYW5rIHlvdVxyXG5gO1xyXG5cclxuICAgIGNvbnN0IHN1YmplY3QgPSBgJHtlbnRlcmVkVHlwZX0gOiAke2VudGVyZWRUaXRsZX1gO1xyXG5cclxuICAgIGNvbnN0IGVtYWlscmVzID0gYXdhaXQgc2VuZEVtYWlscyhzdWJqZWN0LCBtZXNzYWdlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRQb3N0RGF0YShcclxuICAgICAgZW50ZXJlZFR5cGUsXHJcbiAgICAgIGVudGVyZWRDYXRlZ29yeSxcclxuICAgICAgZW50ZXJlZFRpdGxlLFxyXG4gICAgICBlbnRlcmVkRGVzY3JpcHRpb24sXHJcbiAgICAgIGVudGVyZWRRdWVzdGlvbixcclxuICAgICAgaHVtYW5SZWFkYWJsZURhdGUsXHJcbiAgICAgIGlzSW1hZ2VcclxuICAgICk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpOyAvLyBUaGlzIHJlc2V0cyB0aGUgZm9ybVxyXG4gICAgc2V0SXNJbWFnZShcIlwiKTsgLy8gQ2xlYXIgdGhlIGltYWdlIHN0YXRlXHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGlmIChpc0Vycm9yKSB7XHJcbiAgICByZXR1cm4gPEVycm9yQ29tcCBlcnJvckRhdGE9e2lzRXJyb3JEYXRhfSAvPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1zdHlsZTN9PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdFN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgIDxsZWdlbmQ+RGF0YTwvbGVnZW5kPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgICAgICAgcmVmPXt0eXBlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRm91bmRcIj5Gb3VuZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17Y2F0ZWdvcnlJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNhdGVnb3J5XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXYWxsZXRcIj5XYWxsZXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgSUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZFxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTbWFydCBQaG9uZSAvIExhcHRvcFwiPlNtYXJ0IFBob25lIC8gTGFwdG9wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktleXNcIj5LZXlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk90aGVyc1wiPk90aGVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmllbGQzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIEl0ZW0gTmFtZSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDNcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17dGl0bGVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpZWxkNFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBFbnRlciBxdWVzdGlvbiBiYXNlZCBvbiBhbiBpdGVtLlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpZWxkNFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDotIFdoYXQgaXMgdGhlIGNvbG9yIG9mIHRoZSBwaG9uZT9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17cXVlc3Rpb25JbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIFNlbGVjdCBhIERhdGU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgICByZWY9e2RhdGVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICA8bGVnZW5kPkRldGFpbHM8L2xlZ2VuZD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgRGVzY3JpcHRpb24gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJlcXVpcmVkfT4qPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gYWJvdXQgaXRlbSAobGlrZSBsb2NhdGlvbiBldGMuLi4pXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWFmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9uSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnZlcnR0b2Jhc2U2NH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJQb3N0XCI+PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3VuZE5ld0l0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=