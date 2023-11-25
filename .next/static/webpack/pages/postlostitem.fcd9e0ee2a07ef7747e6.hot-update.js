webpackHotUpdate_N_E("pages/postlostitem",{

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
/* harmony import */ var _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostNewItem.module.css */ "./components/postcomp/PostNewItem.module.css");
/* harmony import */ var _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _UI_ErrorComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/ErrorComp */ "./components/UI/ErrorComp.js");
/* harmony import */ var _components_notificationOverlay_noti__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/notificationOverlay/noti */ "./components/notificationOverlay/noti.js");
/* harmony import */ var _notificationOverlay_Loadings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notificationOverlay/Loadings */ "./components/notificationOverlay/Loadings.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\postcomp\\PostNewItem.js",
    _s = $RefreshSig$();










function PostNewItem() {
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
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
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
      className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formstyle3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: postSubmitHandler,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
            children: "Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.divider,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              name: "item",
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
              ref: typeInputRef,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Lost",
                children: "Lost"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              defaultValue: "Category",
              name: "category",
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
              ref: categoryInputRef,
              required: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Category",
                disabled: true,
                children: "Category"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Wallet",
                children: "Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "ID Card / Student Card",
                children: "ID Card / Student Card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Smart Phone / Laptop",
                children: "Smart Phone / Laptop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Keys",
                children: "Keys"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Others",
                children: "Others"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "field3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Item Name ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 27
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "field3",
              placeholder: "Title",
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
              ref: titleInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "field4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Enter question based on an item.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "field4",
              placeholder: "Ex:- What is the color of the phone?",
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputfield,
              ref: questionInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "date",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Select a Date: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 32
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "date",
              name: "date",
              id: "date",
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.customselect,
              ref: dateInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "description",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Description ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: "description",
              placeholder: "Description about item (like location etc...)",
              className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textareafield,
              ref: descriptionInputRef,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            id: "image",
            name: "image",
            accept: "image/*",
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.customselect,
            style: {
              width: "100%"
            },
            onChange: converttobase64,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              content: "Post"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this), sendEmail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_notificationOverlay_noti__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: "Email Successfully Sent to LostNest Registered Users!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_notificationOverlay_Loadings__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 5
  }, this);
}

_s(PostNewItem, "NIya+hWBHorh79F+gl3a/3F+tgk=");

_c = PostNewItem;
/* harmony default export */ __webpack_exports__["default"] = (PostNewItem);
/*

import classes from "./PostNewItem.module.css";

import React from "react";
import Button from "../UI/Button";

import { useRef, useState } from "react";
import Loading from "../UI/Loading";
import ErrorComp from "../UI/ErrorComp";

function PostNewItem() {
  const [isLoading, setIsLoading] = useState(false);
  const [isImage, setIsImage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isErrorData, setIsErrorData] = useState(
    "Sorry but the page you are looking for does not exist."
  );

  const typeInputRef = useRef();
  const categoryInputRef = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const questionInputRef = useRef();
  const dateInputRef = useRef();

  async function sendEmails(
    Type,
    Category,
    Title,
    Description,
    Question,
    Date,
    imageInbase64
  ) {
    const response = await fetch("/api/post/postitem", {
      method: "POST",
      body: JSON.stringify({
        Type,
        Category,
        Title,
        Description,
        Question,
        Date,
        ReducedImg: imageInbase64,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Response not ok");
    }

    return data;
  }

  async function sendPostData(
    Type,
    Category,
    Title,
    Description,
    Question,
    Date,
    imageInbase64
  ) {
    const response = await fetch("/api/post/postitem", {
      method: "POST",
      body: JSON.stringify({
        Type,
        Category,
        Title,
        Description,
        Question,
        Date,
        ReducedImg: imageInbase64,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setIsErrorData(data.message);
      setIsLoading(false);
      setIsError(true);
    }

    return data;
  }

  function converttobase64(e) {
    // console.log(e);

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      //console.log(reader.result);
      setIsImage(reader.result);
    };

    reader.onerror = () => {
      console.log("error", error);
    };
  }
  const postSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredType = typeInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredQuestion = questionInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const humanReadableDate = new Date(enteredDate).toLocaleDateString(
      "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
    const message = ``;

    const emailres = await sendEmails(subject, message);

    const result = await sendPostData(
      enteredType,
      enteredCategory,
      enteredTitle,
      enteredDescription,
      enteredQuestion,
      humanReadableDate,
      isImage
    );

    event.target.reset(); // This resets the form
    setIsImage(""); // Clear the image state
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorComp errorData={isErrorData} />;
  }

  return (
    <div className={classes.formstyle3}>
      <form onSubmit={postSubmitHandler}>
        <fieldset>
          <legend>Data</legend>
          <div className={classes.divider}>
            <select
              name="item"
              className={classes.inputfield}
              ref={typeInputRef}
            >
              <option value="Lost">Lost</option>
            </select>
            <select
              defaultValue="Category"
              name="category"
              className={classes.inputfield}
              ref={categoryInputRef}
              required
            >
              <option value="Category" disabled>
                Category
              </option>
              <option value="Wallet">Wallet</option>
              <option value="ID Card / Student Card">
                ID Card / Student Card
              </option>
              <option value="Smart Phone / Laptop">Smart Phone / Laptop</option>
              <option value="Keys">Keys</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <label htmlFor="field3">
            <span>
              Item Name <span className={classes.required}>*</span>
            </span>
            <input
              type="text"
              name="field3"
              placeholder="Title"
              className={classes.inputfield}
              ref={titleInputRef}
              required
            ></input>
          </label>
          <label htmlFor="field4">
            <span>
              Enter question based on an item.
              <span className={classes.required}>*</span>
            </span>
            <input
              type="text"
              name="field4"
              placeholder="Ex:- What is the color of the phone?"
              className={classes.inputfield}
              ref={questionInputRef}
              required
            ></input>
          </label>

          <label htmlFor="date">
            <span>
              Select a Date: <span className={classes.required}>*</span>
            </span>
            <input
              type="date"
              name="date"
              id="date"
              className={classes.customselect}
              ref={dateInputRef}
              required
            ></input>
          </label>
        </fieldset>
        <fieldset>
          <legend>Details</legend>
          <label htmlFor="description">
            <span>
              Description <span className={classes.required}>*</span>
            </span>
            <textarea
              type="text"
              name="description"
              placeholder="Description about item (like location etc...)"
              className={classes.textareafield}
              ref={descriptionInputRef}
              required
            ></textarea>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className={classes.customselect}
            style={{ width: "100%" }}
            onChange={converttobase64}
            required
          />
          <div className={classes.center}>
            <Button content="Post"></Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default PostNewItem;
*/

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0TmV3SXRlbS5qcyJdLCJuYW1lcyI6WyJQb3N0TmV3SXRlbSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJbWFnZSIsInNldElzSW1hZ2UiLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImlzRXJyb3JEYXRhIiwic2V0SXNFcnJvckRhdGEiLCJzZW5kRW1haWwiLCJzZXRJc1NlbmRFbWFpbCIsInR5cGVJbnB1dFJlZiIsInVzZVJlZiIsImNhdGVnb3J5SW5wdXRSZWYiLCJ0aXRsZUlucHV0UmVmIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsInF1ZXN0aW9uSW5wdXRSZWYiLCJkYXRlSW5wdXRSZWYiLCJzZW5kRW1haWxzIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJzZW5kUG9zdERhdGEiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiaW1hZ2VJbmJhc2U2NCIsIlJlZHVjZWRJbWciLCJjb252ZXJ0dG9iYXNlNjQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJsb2ciLCJwb3N0U3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVHlwZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRDYXRlZ29yeSIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRRdWVzdGlvbiIsImVudGVyZWREYXRlIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJlbWFpbHJlcyIsInJlc2V0IiwiY2xhc3NlcyIsImZvcm1zdHlsZTMiLCJkaXZpZGVyIiwiaW5wdXRmaWVsZCIsInJlcXVpcmVkIiwiY3VzdG9tc2VsZWN0IiwidGV4dGFyZWFmaWVsZCIsIndpZHRoIiwiY2VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNkQyxTQURjO0FBQUEsTUFDSEMsWUFERzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFZEcsT0FGYztBQUFBLE1BRUxDLFVBRks7O0FBQUEsbUJBR1NKLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR2RLLE9BSGM7QUFBQSxNQUdMQyxVQUhLOztBQUFBLG1CQUlpQk4sc0RBQVEsQ0FDNUMsd0RBRDRDLENBSnpCO0FBQUEsTUFJZE8sV0FKYztBQUFBLE1BSURDLGNBSkM7O0FBQUEsbUJBT2VSLHNEQUFRLENBQUMsS0FBRCxDQVB2QjtBQUFBLE1BT2RTLFNBUGM7QUFBQSxNQU9IQyxjQVBHOztBQVNyQixNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdELG9EQUFNLEVBQS9CO0FBQ0EsTUFBTUUsYUFBYSxHQUFHRixvREFBTSxFQUE1QjtBQUNBLE1BQU1HLG1CQUFtQixHQUFHSCxvREFBTSxFQUFsQztBQUNBLE1BQU1JLGdCQUFnQixHQUFHSixvREFBTSxFQUEvQjtBQUNBLE1BQU1LLFlBQVksR0FBR0wsb0RBQU0sRUFBM0I7O0FBZHFCLFdBZ0JOTSxVQWhCTTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1UkFnQnJCLGtCQUEwQkMsT0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3Rsb3N0aXRlbS5mY2Q5ZTBlZTJhMDdlZjc3NDdlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdE5ld0l0ZW0ubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXJyb3JDb21wIGZyb20gXCIuLi9VSS9FcnJvckNvbXBcIjtcclxuaW1wb3J0IE5vdGkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uT3ZlcmxheS9ub3RpXCI7XHJcbmltcG9ydCBMb2FkaW5ncyBmcm9tIFwiLi4vbm90aWZpY2F0aW9uT3ZlcmxheS9Mb2FkaW5nc1wiO1xyXG5cclxuZnVuY3Rpb24gUG9zdE5ld0l0ZW0oKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNJbWFnZSwgc2V0SXNJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3JEYXRhLCBzZXRJc0Vycm9yRGF0YV0gPSB1c2VTdGF0ZShcclxuICAgIFwiU29ycnkgYnV0IHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3QuXCJcclxuICApO1xyXG4gIGNvbnN0IFtzZW5kRW1haWwsIHNldElzU2VuZEVtYWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdHlwZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2F0ZWdvcnlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcXVlc3Rpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRhdGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZW5kRW1haWxzKHN1YmplY3QsIG1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2VtYWlsL3NlbmRFbWFpbFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBzdWJqZWN0LFxyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIC8vIEhhbmRsZSBub24tMnh4IEhUVFAgcmVzcG9uc2Ugc3RhdHVzXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHNlbmRpbmcgZW1haWwuIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIHNldElzU2VuZEVtYWlsKHRydWUpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRQb3N0RGF0YShcclxuICAgIFR5cGUsXHJcbiAgICBDYXRlZ29yeSxcclxuICAgIFRpdGxlLFxyXG4gICAgRGVzY3JpcHRpb24sXHJcbiAgICBRdWVzdGlvbixcclxuICAgIERhdGUsXHJcbiAgICBpbWFnZUluYmFzZTY0XHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb3N0L3Bvc3RpdGVtXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIFR5cGUsXHJcbiAgICAgICAgQ2F0ZWdvcnksXHJcbiAgICAgICAgVGl0bGUsXHJcbiAgICAgICAgRGVzY3JpcHRpb24sXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgRGF0ZSxcclxuICAgICAgICBSZWR1Y2VkSW1nOiBpbWFnZUluYmFzZTY0LFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRJc1NlbmRFbWFpbChmYWxzZSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0Vycm9yRGF0YShkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRJc0Vycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbnZlcnR0b2Jhc2U2NChlKSB7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc0ltYWdlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBwb3N0U3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkVHlwZSA9IHR5cGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZENhdGVnb3J5ID0gY2F0ZWdvcnlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFF1ZXN0aW9uID0gcXVlc3Rpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERhdGUgPSBkYXRlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGVudGVyZWREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIixcclxuICAgICAge1xyXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtlbnRlcmVkVHlwZX0gJHtlbnRlcmVkQ2F0ZWdvcnl9XHJcbiAgXHJcbkl0ZW0gTmFtZTogJHtlbnRlcmVkVGl0bGV9XHJcbkRhdGU6ICR7aHVtYW5SZWFkYWJsZURhdGV9XHJcbkRlc2NyaXB0aW9uOiAke2VudGVyZWREZXNjcmlwdGlvbn1cclxuXHJcbklmIHlvdSBoYXZlIGFueSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgJHtlbnRlcmVkVHlwZX0gaXRlbSwga2luZGx5IHZpc2l0IHRoZSBMb3N0TmVzdCB3ZWIgYXBwbGljYXRpb24uXHJcblxyXG5UaGFuayB5b3VcclxuYDtcclxuXHJcbiAgICBjb25zdCBzdWJqZWN0ID0gYCR7ZW50ZXJlZFR5cGV9IDogJHtlbnRlcmVkVGl0bGV9YDtcclxuXHJcbiAgICBjb25zdCBlbWFpbHJlcyA9IGF3YWl0IHNlbmRFbWFpbHMoc3ViamVjdCwgbWVzc2FnZSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZFBvc3REYXRhKFxyXG4gICAgICBlbnRlcmVkVHlwZSxcclxuICAgICAgZW50ZXJlZENhdGVnb3J5LFxyXG4gICAgICBlbnRlcmVkVGl0bGUsXHJcbiAgICAgIGVudGVyZWREZXNjcmlwdGlvbixcclxuICAgICAgZW50ZXJlZFF1ZXN0aW9uLFxyXG4gICAgICBodW1hblJlYWRhYmxlRGF0ZSxcclxuICAgICAgaXNJbWFnZVxyXG4gICAgKTtcclxuXHJcbiAgICBldmVudC50YXJnZXQucmVzZXQoKTsgLy8gVGhpcyByZXNldHMgdGhlIGZvcm1cclxuICAgIHNldElzSW1hZ2UoXCJcIik7IC8vIENsZWFyIHRoZSBpbWFnZSBzdGF0ZVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldElzU2VuZEVtYWlsKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvckNvbXAgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3Jtc3R5bGUzfT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdFN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8bGVnZW5kPkRhdGE8L2xlZ2VuZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgICAgICAgICByZWY9e3R5cGVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG9zdFwiPkxvc3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgICAgICAgICByZWY9e2NhdGVnb3J5SW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXRlZ29yeVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2FsbGV0XCI+V2FsbGV0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICBJRCBDYXJkIC8gU3R1ZGVudCBDYXJkXHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTbWFydCBQaG9uZSAvIExhcHRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICBTbWFydCBQaG9uZSAvIExhcHRvcFxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS2V5c1wiPktleXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpZWxkM1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgSXRlbSBOYW1lIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmllbGQzXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgICAgICAgICByZWY9e3RpdGxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpZWxkNFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgRW50ZXIgcXVlc3Rpb24gYmFzZWQgb24gYW4gaXRlbS5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmllbGQ0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6LSBXaGF0IGlzIHRoZSBjb2xvciBvZiB0aGUgcGhvbmU/XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtxdWVzdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgRGF0ZTogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJlcXVpcmVkfT4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgcmVmPXtkYXRlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGxlZ2VuZD5EZXRhaWxzPC9sZWdlbmQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBhYm91dCBpdGVtIChsaWtlIGxvY2F0aW9uIGV0Yy4uLilcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhZmllbGR9XHJcbiAgICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9uSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb252ZXJ0dG9iYXNlNjR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJQb3N0XCI+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3NlbmRFbWFpbCAmJiAoXHJcbiAgICAgICAgPE5vdGkgZGF0YT1cIkVtYWlsIFN1Y2Nlc3NmdWxseSBTZW50IHRvIExvc3ROZXN0IFJlZ2lzdGVyZWQgVXNlcnMhXCIgLz5cclxuICAgICAgKX1cclxuICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZ3MgLz59XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3ROZXdJdGVtO1xyXG5cclxuLypcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3ROZXdJdGVtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmltcG9ydCBFcnJvckNvbXAgZnJvbSBcIi4uL1VJL0Vycm9yQ29tcFwiO1xyXG5cclxuZnVuY3Rpb24gUG9zdE5ld0l0ZW0oKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNJbWFnZSwgc2V0SXNJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3JEYXRhLCBzZXRJc0Vycm9yRGF0YV0gPSB1c2VTdGF0ZShcclxuICAgIFwiU29ycnkgYnV0IHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3QuXCJcclxuICApO1xyXG5cclxuICBjb25zdCB0eXBlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYXRlZ29yeUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGl0bGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBxdWVzdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGF0ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbHMoXHJcbiAgICBUeXBlLFxyXG4gICAgQ2F0ZWdvcnksXHJcbiAgICBUaXRsZSxcclxuICAgIERlc2NyaXB0aW9uLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBEYXRlLFxyXG4gICAgaW1hZ2VJbmJhc2U2NFxyXG4gICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdC9wb3N0aXRlbVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBUeXBlLFxyXG4gICAgICAgIENhdGVnb3J5LFxyXG4gICAgICAgIFRpdGxlLFxyXG4gICAgICAgIERlc2NyaXB0aW9uLFxyXG4gICAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICAgIERhdGUsXHJcbiAgICAgICAgUmVkdWNlZEltZzogaW1hZ2VJbmJhc2U2NCxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIG5vdCBva1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRQb3N0RGF0YShcclxuICAgIFR5cGUsXHJcbiAgICBDYXRlZ29yeSxcclxuICAgIFRpdGxlLFxyXG4gICAgRGVzY3JpcHRpb24sXHJcbiAgICBRdWVzdGlvbixcclxuICAgIERhdGUsXHJcbiAgICBpbWFnZUluYmFzZTY0XHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb3N0L3Bvc3RpdGVtXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIFR5cGUsXHJcbiAgICAgICAgQ2F0ZWdvcnksXHJcbiAgICAgICAgVGl0bGUsXHJcbiAgICAgICAgRGVzY3JpcHRpb24sXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgRGF0ZSxcclxuICAgICAgICBSZWR1Y2VkSW1nOiBpbWFnZUluYmFzZTY0LFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzRXJyb3JEYXRhKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldElzRXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb252ZXJ0dG9iYXNlNjQoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0KTtcclxuICAgICAgc2V0SXNJbWFnZShyZWFkZXIucmVzdWx0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgcG9zdFN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZFR5cGUgPSB0eXBlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRDYXRlZ29yeSA9IGNhdGVnb3J5SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRpdGxlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWREYXRlID0gZGF0ZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShlbnRlcmVkRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICBcImVuLVVTXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgYDtcclxuXHJcbiAgICBjb25zdCBlbWFpbHJlcyA9IGF3YWl0IHNlbmRFbWFpbHMoc3ViamVjdCwgbWVzc2FnZSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZFBvc3REYXRhKFxyXG4gICAgICBlbnRlcmVkVHlwZSxcclxuICAgICAgZW50ZXJlZENhdGVnb3J5LFxyXG4gICAgICBlbnRlcmVkVGl0bGUsXHJcbiAgICAgIGVudGVyZWREZXNjcmlwdGlvbixcclxuICAgICAgZW50ZXJlZFF1ZXN0aW9uLFxyXG4gICAgICBodW1hblJlYWRhYmxlRGF0ZSxcclxuICAgICAgaXNJbWFnZVxyXG4gICAgKTtcclxuXHJcbiAgICBldmVudC50YXJnZXQucmVzZXQoKTsgLy8gVGhpcyByZXNldHMgdGhlIGZvcm1cclxuICAgIHNldElzSW1hZ2UoXCJcIik7IC8vIENsZWFyIHRoZSBpbWFnZSBzdGF0ZVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoaXNFcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvckNvbXAgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybXN0eWxlM30+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtwb3N0U3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgPGxlZ2VuZD5EYXRhPC9sZWdlbmQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfT5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpdGVtXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e3R5cGVJbnB1dFJlZn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3N0XCI+TG9zdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17Y2F0ZWdvcnlJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNhdGVnb3J5XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXYWxsZXRcIj5XYWxsZXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgSUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZFxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTbWFydCBQaG9uZSAvIExhcHRvcFwiPlNtYXJ0IFBob25lIC8gTGFwdG9wPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktleXNcIj5LZXlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk90aGVyc1wiPk90aGVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmllbGQzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIEl0ZW0gTmFtZSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDNcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17dGl0bGVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpZWxkNFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBFbnRlciBxdWVzdGlvbiBiYXNlZCBvbiBhbiBpdGVtLlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImZpZWxkNFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDotIFdoYXQgaXMgdGhlIGNvbG9yIG9mIHRoZSBwaG9uZT9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgIHJlZj17cXVlc3Rpb25JbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIFNlbGVjdCBhIERhdGU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgICByZWY9e2RhdGVJbnB1dFJlZn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICA8bGVnZW5kPkRldGFpbHM8L2xlZ2VuZD5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgRGVzY3JpcHRpb24gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJlcXVpcmVkfT4qPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gYWJvdXQgaXRlbSAobGlrZSBsb2NhdGlvbiBldGMuLi4pXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGFyZWFmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9uSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbnZlcnR0b2Jhc2U2NH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJQb3N0XCI+PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TmV3SXRlbTtcclxuKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==