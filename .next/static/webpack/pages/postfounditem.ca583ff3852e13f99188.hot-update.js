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

              if (!response.ok) {
                // Handle non-2xx HTTP response status
                console.error("Error sending email. Status: ".concat(response.status));
              }

              _context2.next = 6;
              return response.json();

            case 6:
              data = _context2.sent;

              if (data.success) {
                setIsSendEmail(true); //console.log("success");
              }

              return _context2.abrupt("return", data);

            case 9:
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
              setIsSendEmail(false);

              if (!response.ok) {
                setIsErrorData(data.message);
                setIsLoading(false);
                setIsError(true);
              }

              _context3.next = 7;
              return response.json();

            case 7:
              data = _context3.sent;
              return _context3.abrupt("return", data);

            case 9:
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
              setIsSendEmail(false);

            case 21:
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

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formstyle3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: postSubmitHandler,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
            children: "Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
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
                lineNumber: 169,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
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
                lineNumber: 178,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Wallet",
                children: "Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "ID Card / Student Card",
                children: "ID Card / Student Card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Smart Phone / Laptop",
                children: "Smart Phone / Laptop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Keys",
                children: "Keys"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Others",
                children: "Others"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "field3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Item Name ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 27
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "field3",
              placeholder: "Title",
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
              ref: titleInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "field4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Enter question based on an item.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "field4",
              placeholder: "Ex:- What is the color of the phone?",
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
              ref: questionInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "date",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Select a Date: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 32
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "date",
              name: "date",
              id: "date",
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.customselect,
              ref: dateInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "description",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Description ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: "description",
              placeholder: "Description about item (like location etc...)",
              className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textareafield,
              ref: descriptionInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
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
            lineNumber: 250,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _FoundNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              content: "Post"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), sendEmail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_notificationOverlay_noti__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: "Email Successfully Sent to LostNest Registered Users!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_notificationOverlay_Loadings__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Gb3VuZE5ld0l0ZW0uanMiXSwibmFtZXMiOlsiRm91bmROZXdJdGVtIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0ltYWdlIiwic2V0SXNJbWFnZSIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaXNFcnJvckRhdGEiLCJzZXRJc0Vycm9yRGF0YSIsInNlbmRFbWFpbCIsInNldElzU2VuZEVtYWlsIiwidHlwZUlucHV0UmVmIiwidXNlUmVmIiwiY2F0ZWdvcnlJbnB1dFJlZiIsInRpdGxlSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwicXVlc3Rpb25JbnB1dFJlZiIsImRhdGVJbnB1dFJlZiIsInNlbmRFbWFpbHMiLCJzdWJqZWN0IiwibWVzc2FnZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInNlbmRQb3N0RGF0YSIsIlR5cGUiLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJRdWVzdGlvbiIsIkRhdGUiLCJpbWFnZUluYmFzZTY0IiwiUmVkdWNlZEltZyIsImNvbnZlcnR0b2Jhc2U2NCIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsInRhcmdldCIsImZpbGVzIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImxvZyIsInBvc3RTdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRUeXBlIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZENhdGVnb3J5IiwiZW50ZXJlZFRpdGxlIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwiZW50ZXJlZFF1ZXN0aW9uIiwiZW50ZXJlZERhdGUiLCJodW1hblJlYWRhYmxlRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImVtYWlscmVzIiwicmVzZXQiLCJjbGFzc2VzIiwiZm9ybXN0eWxlMyIsImRpdmlkZXIiLCJpbnB1dGZpZWxkIiwicmVxdWlyZWQiLCJjdXN0b21zZWxlY3QiLCJ0ZXh0YXJlYWZpZWxkIiwid2lkdGgiLCJjZW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsS0FBRCxDQURwQjtBQUFBLE1BQ2ZDLFNBRGU7QUFBQSxNQUNKQyxZQURJOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVmRyxPQUZlO0FBQUEsTUFFTkMsVUFGTTs7QUFBQSxtQkFHUUosc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHZkssT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSWdCTixzREFBUSxDQUM1Qyx3REFENEMsQ0FKeEI7QUFBQSxNQUlmTyxXQUplO0FBQUEsTUFJRkMsY0FKRTs7QUFBQSxtQkFPY1Isc0RBQVEsQ0FBQyxLQUFELENBUHRCO0FBQUEsTUFPZlMsU0FQZTtBQUFBLE1BT0pDLGNBUEk7O0FBU3RCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0Qsb0RBQU0sRUFBL0I7QUFDQSxNQUFNRSxhQUFhLEdBQUdGLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUcsbUJBQW1CLEdBQUdILG9EQUFNLEVBQWxDO0FBQ0EsTUFBTUksZ0JBQWdCLEdBQUdKLG9EQUFNLEVBQS9CO0FBQ0EsTUFBTUssWUFBWSxHQUFHTCxvREFBTSxFQUEzQjs7QUFkc0IsV0FnQlBNLFVBaEJPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVSQWdCdEIsa0JBQTBCQyxP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O0FBSUUsdUJBQVMsRUFBRUosK0RBQU8sQ0FBQ00sYUFKckI7QUFLRSxpQkFBRyxFQUFFaEUsbUJBTFA7QUFNRSxzQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBZUU7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxjQUFFLEVBQUMsT0FGTDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLGtCQUFNLEVBQUMsU0FKVDtBQUtFLHFCQUFTLEVBQUUwRCwrREFBTyxDQUFDSyxZQUxyQjtBQU1FLGlCQUFLLEVBQUU7QUFBRUUsbUJBQUssRUFBRTtBQUFULGFBTlQ7QUFPRSxvQkFBUSxFQUFFcEMsZUFQWjtBQVFFLG9CQUFRO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmRixlQXlCRTtBQUFLLHFCQUFTLEVBQUU2QiwrREFBTyxDQUFDUSxNQUF4QjtBQUFBLG1DQUNFLHFFQUFDLGtEQUFEO0FBQVEscUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUE0R0d4RSxTQUFTLGlCQUNSLHFFQUFDLDRFQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdHSixFQStHR1IsU0FBUyxpQkFBSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0doQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1IRDs7R0FyUVFGLFk7O0tBQUFBLFk7QUF1UU1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3Rmb3VuZGl0ZW0uY2E1ODNmZjM4NTJlMTNmOTkxODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0ZvdW5kTmV3SXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuaW1wb3J0IEVycm9yQ29tcCBmcm9tIFwiLi4vVUkvRXJyb3JDb21wXCI7XHJcbmltcG9ydCBOb3RpIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbk92ZXJsYXkvbm90aVwiO1xyXG5pbXBvcnQgTG9hZGluZ3MgZnJvbSBcIi4uL25vdGlmaWNhdGlvbk92ZXJsYXkvTG9hZGluZ3NcIjtcclxuXHJcbmZ1bmN0aW9uIEZvdW5kTmV3SXRlbSgpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0ltYWdlLCBzZXRJc0ltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNFcnJvckRhdGEsIHNldElzRXJyb3JEYXRhXSA9IHVzZVN0YXRlKFxyXG4gICAgXCJTb3JyeSBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdC5cIlxyXG4gICk7XHJcbiAgY29uc3QgW3NlbmRFbWFpbCwgc2V0SXNTZW5kRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0eXBlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYXRlZ29yeUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGl0bGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBxdWVzdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGF0ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbHMoc3ViamVjdCwgbWVzc2FnZSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZW1haWwvc2VuZEVtYWlsXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHN1YmplY3QsXHJcbiAgICAgICAgbWVzc2FnZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgLy8gSGFuZGxlIG5vbi0yeHggSFRUUCByZXNwb25zZSBzdGF0dXNcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igc2VuZGluZyBlbWFpbC4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgc2V0SXNTZW5kRW1haWwodHJ1ZSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZFBvc3REYXRhKFxyXG4gICAgVHlwZSxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgVGl0bGUsXHJcbiAgICBEZXNjcmlwdGlvbixcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgRGF0ZSxcclxuICAgIGltYWdlSW5iYXNlNjRcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgVHlwZSxcclxuICAgICAgICBDYXRlZ29yeSxcclxuICAgICAgICBUaXRsZSxcclxuICAgICAgICBEZXNjcmlwdGlvbixcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBEYXRlLFxyXG4gICAgICAgIFJlZHVjZWRJbWc6IGltYWdlSW5iYXNlNjQsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHNldElzU2VuZEVtYWlsKGZhbHNlKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzRXJyb3JEYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNvbnZlcnR0b2Jhc2U2NChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICBzZXRJc0ltYWdlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBwb3N0U3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkVHlwZSA9IHR5cGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZENhdGVnb3J5ID0gY2F0ZWdvcnlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFF1ZXN0aW9uID0gcXVlc3Rpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERhdGUgPSBkYXRlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGVudGVyZWREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIixcclxuICAgICAge1xyXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtlbnRlcmVkVHlwZX0gJHtlbnRlcmVkQ2F0ZWdvcnl9XHJcbiAgXHJcbkl0ZW0gTmFtZTogJHtlbnRlcmVkVGl0bGV9XHJcbkRhdGU6ICR7aHVtYW5SZWFkYWJsZURhdGV9XHJcbkRlc2NyaXB0aW9uOiAke2VudGVyZWREZXNjcmlwdGlvbn1cclxuXHJcbklmIHlvdSBoYXZlIGFueSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgJHtlbnRlcmVkVHlwZX0gaXRlbSwga2luZGx5IHZpc2l0IHRoZSBMb3N0TmVzdCB3ZWIgYXBwbGljYXRpb24uXHJcblxyXG5UaGFuayB5b3VcclxuYDtcclxuXHJcbiAgICBjb25zdCBzdWJqZWN0ID0gYCR7ZW50ZXJlZFR5cGV9IDogJHtlbnRlcmVkVGl0bGV9YDtcclxuXHJcbiAgICBjb25zdCBlbWFpbHJlcyA9IGF3YWl0IHNlbmRFbWFpbHMoc3ViamVjdCwgbWVzc2FnZSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kUG9zdERhdGEoXHJcbiAgICAgIGVudGVyZWRUeXBlLFxyXG4gICAgICBlbnRlcmVkQ2F0ZWdvcnksXHJcbiAgICAgIGVudGVyZWRUaXRsZSxcclxuICAgICAgZW50ZXJlZERlc2NyaXB0aW9uLFxyXG4gICAgICBlbnRlcmVkUXVlc3Rpb24sXHJcbiAgICAgIGh1bWFuUmVhZGFibGVEYXRlLFxyXG4gICAgICBpc0ltYWdlXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBldmVudC50YXJnZXQucmVzZXQoKTsgLy8gVGhpcyByZXNldHMgdGhlIGZvcm1cclxuICAgIHNldElzSW1hZ2UoXCJcIik7IC8vIENsZWFyIHRoZSBpbWFnZSBzdGF0ZVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldElzU2VuZEVtYWlsKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvckNvbXAgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1zdHlsZTN9PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtwb3N0U3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxsZWdlbmQ+RGF0YTwvbGVnZW5kPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfT5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICAgIHJlZj17dHlwZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGb3VuZFwiPkZvdW5kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtjYXRlZ29yeUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2F0ZWdvcnlcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldhbGxldFwiPldhbGxldDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEIENhcmQgLyBTdHVkZW50IENhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgSUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZFxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU21hcnQgUGhvbmUgLyBMYXB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgU21hcnQgUGhvbmUgLyBMYXB0b3BcclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktleXNcIj5LZXlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWVsZDNcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIEl0ZW0gTmFtZSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkM1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aXRsZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWVsZDRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIEVudGVyIHF1ZXN0aW9uIGJhc2VkIG9uIGFuIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkNFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4Oi0gV2hhdCBpcyB0aGUgY29sb3Igb2YgdGhlIHBob25lP1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICAgIHJlZj17cXVlc3Rpb25JbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIFNlbGVjdCBhIERhdGU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgICAgIHJlZj17ZGF0ZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxsZWdlbmQ+RGV0YWlsczwvbGVnZW5kPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gYWJvdXQgaXRlbSAobGlrZSBsb2NhdGlvbiBldGMuLi4pXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYWZpZWxkfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y29udmVydHRvYmFzZTY0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUG9zdFwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NlbmRFbWFpbCAmJiAoXHJcbiAgICAgICAgPE5vdGkgZGF0YT1cIkVtYWlsIFN1Y2Nlc3NmdWxseSBTZW50IHRvIExvc3ROZXN0IFJlZ2lzdGVyZWQgVXNlcnMhXCIgLz5cclxuICAgICAgKX1cclxuICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZ3MgLz59XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvdW5kTmV3SXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==