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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      sendPost = _useState6[0],
      setIsSendPost = _useState6[1];

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

              if (data.success) {//setIsSendPost(true);
                //console.log("success");
              }

              return _context3.abrupt("return", data);

            case 10:
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

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_ErrorComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
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
            lineNumber: 171,
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
                lineNumber: 178,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
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
                lineNumber: 187,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Wallet",
                children: "Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "ID Card / Student Card",
                children: "ID Card / Student Card"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Smart Phone / Laptop",
                children: "Smart Phone / Laptop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Keys",
                children: "Keys"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "Others",
                children: "Others"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "field3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Item Name ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 27
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
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
              lineNumber: 206,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "field4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Enter question based on an item.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 216,
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
              lineNumber: 220,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "date",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Select a Date: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 32
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 231,
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
              lineNumber: 234,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "description",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["Description ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.required,
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 247,
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
              lineNumber: 250,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
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
            lineNumber: 259,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _PostNewItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              content: "Post"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this), sendEmail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_notificationOverlay_noti__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: "Email Successfully Sent to LostNest Registered Users!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_notificationOverlay_Loadings__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 5
  }, this);
}

_s(PostNewItem, "1LLTfHra28EkThYsajxtMFs9OSs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0TmV3SXRlbS5qcyJdLCJuYW1lcyI6WyJQb3N0TmV3SXRlbSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJbWFnZSIsInNldElzSW1hZ2UiLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImlzRXJyb3JEYXRhIiwic2V0SXNFcnJvckRhdGEiLCJzZW5kRW1haWwiLCJzZXRJc1NlbmRFbWFpbCIsInNlbmRQb3N0Iiwic2V0SXNTZW5kUG9zdCIsInR5cGVJbnB1dFJlZiIsInVzZVJlZiIsImNhdGVnb3J5SW5wdXRSZWYiLCJ0aXRsZUlucHV0UmVmIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsInF1ZXN0aW9uSW5wdXRSZWYiLCJkYXRlSW5wdXRSZWYiLCJzZW5kRW1haWxzIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJzZW5kUG9zdERhdGEiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiUXVlc3Rpb24iLCJEYXRlIiwiaW1hZ2VJbmJhc2U2NCIsIlJlZHVjZWRJbWciLCJjb252ZXJ0dG9iYXNlNjQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJsb2ciLCJwb3N0U3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVHlwZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRDYXRlZ29yeSIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRRdWVzdGlvbiIsImVudGVyZWREYXRlIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJlbWFpbHJlcyIsInJlc2V0IiwiY2xhc3NlcyIsImZvcm1zdHlsZTMiLCJkaXZpZGVyIiwiaW5wdXRmaWVsZCIsInJlcXVpcmVkIiwiY3VzdG9tc2VsZWN0IiwidGV4dGFyZWFmaWVsZCIsIndpZHRoIiwiY2VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNkQyxTQURjO0FBQUEsTUFDSEMsWUFERzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFZEcsT0FGYztBQUFBLE1BRUxDLFVBRks7O0FBQUEsbUJBR1NKLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR2RLLE9BSGM7QUFBQSxNQUdMQyxVQUhLOztBQUFBLG1CQUlpQk4sc0RBQVEsQ0FDNUMsd0RBRDRDLENBSnpCO0FBQUEsTUFJZE8sV0FKYztBQUFBLE1BSURDLGNBSkM7O0FBQUEsbUJBT2VSLHNEQUFRLENBQUMsS0FBRCxDQVB2QjtBQUFBLE1BT2RTLFNBUGM7QUFBQSxNQU9IQyxjQVBHOztBQUFBLG1CQVFhVixzREFBUSxDQUFDLEtBQUQsQ0FSckI7QUFBQSxNQVFkVyxRQVJjO0FBQUEsTUFRSkMsYUFSSTs7QUFVckIsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRCxvREFBTSxFQUEvQjtBQUNBLE1BQU1FLGFBQWEsR0FBR0Ysb0RBQU0sRUFBNUI7QUFDQSxNQUFNRyxtQkFBbUIsR0FBR0gsb0RBQU0sRUFBbEM7QUFDQSxNQUFNSSxnQkFBZ0IsR0FBR0osb0RBQU0sRUFBL0I7QUFDQSxNQUFNSyxZQUFZLEdBQUdMLG9EQUFNLEVBQTNCOztBQWZxQixXQWlCTk0sVUFqQk07QUFBQTtBQUFBOztBQUFBO0FBQUEsdVJBaUJyQixrQkFBMEJDLE9BQTFCLEVBQW1DQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN5QkMsS0FBSyxDQUFDLHNCQUFELEVBQXlCO0FBQ25EQyxzQkFBTSxFQUFFLE1BRDJDO0FBRW5EQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQk4seUJBQU8sRUFBUEEsT0FEbUI7QUFFbkJDLHlCQUFPLEVBQVBBO0FBRm1CLGlCQUFmLENBRjZDO0FBTW5ETSx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFOMEMsZUFBekIsQ0FEOUI7O0FBQUE7QUFDUUMsc0JBRFI7O0FBWUUsa0JBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFkLEVBQWtCO0FBQ2hCO0FBQ0FDLHVCQUFPLENBQUNDLEtBQVIsd0NBQThDSCxRQUFRLENBQUNJLE1BQXZEO0FBQ0Q7O0FBZkg7QUFBQSxxQkFpQnFCSixRQUFRLENBQUNLLElBQVQsRUFqQnJCOztBQUFBO0FBaUJRQyxrQkFqQlI7O0FBbUJFLGtCQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFBa0I7QUFDaEIxQiw4QkFBYyxDQUFDLElBQUQsQ0FBZCxDQURnQixDQUVoQjtBQUNEOztBQXRCSCxnREF3QlN5QixJQXhCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpCcUI7QUFBQTtBQUFBOztBQUFBLFdBNENORSxZQTVDTTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5UkE0Q3JCLGtCQUNFQyxJQURGLEVBRUVDLFFBRkYsRUFHRUMsS0FIRixFQUlFQyxXQUpGLEVBS0VDLFFBTEYsRUFNRUMsSUFORixFQU9FQyxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBU3lCckIsS0FBSyxDQUFDLG9CQUFELEVBQXVCO0FBQ2pEQyxzQkFBTSxFQUFFLE1BRHlDO0FBRWpEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlcsc0JBQUksRUFBSkEsSUFEbUI7QUFFbkJDLDBCQUFRLEVBQVJBLFFBRm1CO0FBR25CQyx1QkFBSyxFQUFMQSxLQUhtQjtBQUluQkMsNkJBQVcsRUFBWEEsV0FKbUI7QUFLbkJDLDBCQUFRLEVBQVJBLFFBTG1CO0FBTW5CQyxzQkFBSSxFQUFKQSxJQU5tQjtBQU9uQkUsNEJBQVUsRUFBRUQ7QUFQTyxpQkFBZixDQUYyQztBQVdqRGhCLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQVh3QyxlQUF2QixDQVQ5Qjs7QUFBQTtBQVNRQyxzQkFUUjtBQXdCRW5CLDRCQUFjLENBQUMsS0FBRCxDQUFkOztBQUVBLGtCQUFJLENBQUNtQixRQUFRLENBQUNDLEVBQWQsRUFBa0I7QUFDaEJ0Qiw4QkFBYyxDQUFDMkIsSUFBSSxDQUFDYixPQUFOLENBQWQ7QUFDQXBCLDRCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FJLDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0Q7O0FBOUJIO0FBQUEscUJBK0JxQnVCLFFBQVEsQ0FBQ0ssSUFBVCxFQS9CckI7O0FBQUE7QUErQlFDLGtCQS9CUjs7QUFpQ0Usa0JBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUFrQixDQUNoQjtBQUNBO0FBQ0Q7O0FBcENILGdEQXFDU0QsSUFyQ1Q7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E1Q3FCO0FBQUE7QUFBQTs7QUFvRnJCLFdBQVNXLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRCO0FBQzFCO0FBRUEsUUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUNBRCxVQUFNLENBQUNFLGFBQVAsQ0FBcUJILENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFyQjs7QUFFQUosVUFBTSxDQUFDSyxNQUFQLEdBQWdCLFlBQU07QUFDcEI7QUFDQWpELGdCQUFVLENBQUM0QyxNQUFNLENBQUNNLE1BQVIsQ0FBVjtBQUNELEtBSEQ7O0FBS0FOLFVBQU0sQ0FBQ08sT0FBUCxHQUFpQixZQUFNO0FBQ3JCeEIsYUFBTyxDQUFDeUIsR0FBUixDQUFZLE9BQVosRUFBcUJ4QixLQUFyQjtBQUNELEtBRkQ7QUFHRDs7QUFDRCxNQUFNeUIsaUJBQWlCO0FBQUEsb1JBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ0F6RCwwQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVNMEQseUJBSmtCLEdBSUovQyxZQUFZLENBQUNnRCxPQUFiLENBQXFCQyxLQUpqQjtBQUtsQkMsNkJBTGtCLEdBS0FoRCxnQkFBZ0IsQ0FBQzhDLE9BQWpCLENBQXlCQyxLQUx6QjtBQU1sQkUsMEJBTmtCLEdBTUhoRCxhQUFhLENBQUM2QyxPQUFkLENBQXNCQyxLQU5uQjtBQU9sQkcsZ0NBUGtCLEdBT0doRCxtQkFBbUIsQ0FBQzRDLE9BQXBCLENBQTRCQyxLQVAvQjtBQVFsQkksNkJBUmtCLEdBUUFoRCxnQkFBZ0IsQ0FBQzJDLE9BQWpCLENBQXlCQyxLQVJ6QjtBQVNsQksseUJBVGtCLEdBU0poRCxZQUFZLENBQUMwQyxPQUFiLENBQXFCQyxLQVRqQjtBQVdsQk0sK0JBWGtCLEdBV0UsSUFBSXpCLElBQUosQ0FBU3dCLFdBQVQsRUFBc0JFLGtCQUF0QixDQUN4QixPQUR3QixFQUV4QjtBQUNFQyxtQkFBRyxFQUFFLFNBRFA7QUFFRUMscUJBQUssRUFBRSxNQUZUO0FBR0VDLG9CQUFJLEVBQUU7QUFIUixlQUZ3QixDQVhGO0FBb0JsQmxELHFCQXBCa0IsYUFvQkxzQyxXQXBCSyxjQW9CVUcsZUFwQlYsOEJBc0JmQyxZQXRCZSxxQkF1QnBCSSxpQkF2Qm9CLDRCQXdCYkgsa0JBeEJhLHVEQTBCWUwsV0ExQlo7QUErQmxCdkMscUJBL0JrQixhQStCTHVDLFdBL0JLLGdCQStCWUksWUEvQlo7QUFBQTtBQUFBLHFCQWlDRDVDLFVBQVUsQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLENBakNUOztBQUFBO0FBaUNsQm1ELHNCQWpDa0I7QUFBQTtBQUFBLHFCQW9DSHBDLFlBQVksQ0FDL0J1QixXQUQrQixFQUUvQkcsZUFGK0IsRUFHL0JDLFlBSCtCLEVBSS9CQyxrQkFKK0IsRUFLL0JDLGVBTCtCLEVBTS9CRSxpQkFOK0IsRUFPL0JqRSxPQVArQixDQXBDVDs7QUFBQTtBQW9DbEJtRCxvQkFwQ2tCO0FBOEN4QkksbUJBQUssQ0FBQ1AsTUFBTixDQUFhdUIsS0FBYixHQTlDd0IsQ0E4Q0Y7O0FBQ3RCdEUsd0JBQVUsQ0FBQyxFQUFELENBQVYsQ0EvQ3dCLENBK0NSOztBQUNoQkYsMEJBQVksQ0FBQyxLQUFELENBQVo7O0FBaER3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQnVELGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxLQUF2Qjs7QUFtREEsTUFBSXBELE9BQUosRUFBYTtBQUNYLHdCQUFPLHFFQUFDLHFEQUFEO0FBQVcsZUFBUyxFQUFFRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFb0UsOERBQU8sQ0FBQ0MsVUFBeEI7QUFBQSw2QkFDRTtBQUFNLGdCQUFRLEVBQUVuQixpQkFBaEI7QUFBQSxnQ0FDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFFa0IsOERBQU8sQ0FBQ0UsT0FBeEI7QUFBQSxvQ0FDRTtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLHVCQUFTLEVBQUVGLDhEQUFPLENBQUNHLFVBRnJCO0FBR0UsaUJBQUcsRUFBRWpFLFlBSFA7QUFBQSxxQ0FLRTtBQUFRLHFCQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFRRTtBQUNFLDBCQUFZLEVBQUMsVUFEZjtBQUVFLGtCQUFJLEVBQUMsVUFGUDtBQUdFLHVCQUFTLEVBQUU4RCw4REFBTyxDQUFDRyxVQUhyQjtBQUlFLGlCQUFHLEVBQUUvRCxnQkFKUDtBQUtFLHNCQUFRLE1BTFY7QUFBQSxzQ0FPRTtBQUFRLHFCQUFLLEVBQUMsVUFBZDtBQUF5Qix3QkFBUSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRixlQVVFO0FBQVEscUJBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZGLGVBV0U7QUFBUSxxQkFBSyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhGLGVBY0U7QUFBUSxxQkFBSyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWRGLGVBaUJFO0FBQVEscUJBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCRixlQWtCRTtBQUFRLHFCQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQWdDRTtBQUFPLG1CQUFPLEVBQUMsUUFBZjtBQUFBLG9DQUNFO0FBQUEsb0RBQ1k7QUFBTSx5QkFBUyxFQUFFNEQsOERBQU8sQ0FBQ0ksUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUU7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSxrQkFBSSxFQUFDLFFBRlA7QUFHRSx5QkFBVyxFQUFDLE9BSGQ7QUFJRSx1QkFBUyxFQUFFSiw4REFBTyxDQUFDRyxVQUpyQjtBQUtFLGlCQUFHLEVBQUU5RCxhQUxQO0FBTUUsc0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0YsZUE2Q0U7QUFBTyxtQkFBTyxFQUFDLFFBQWY7QUFBQSxvQ0FDRTtBQUFBLDBFQUVFO0FBQU0seUJBQVMsRUFBRTJELDhEQUFPLENBQUNJLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUtFO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyxRQUZQO0FBR0UseUJBQVcsRUFBQyxzQ0FIZDtBQUlFLHVCQUFTLEVBQUVKLDhEQUFPLENBQUNHLFVBSnJCO0FBS0UsaUJBQUcsRUFBRTVELGdCQUxQO0FBTUUsc0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3Q0YsZUE0REU7QUFBTyxtQkFBTyxFQUFDLE1BQWY7QUFBQSxvQ0FDRTtBQUFBLHlEQUNpQjtBQUFNLHlCQUFTLEVBQUV5RCw4REFBTyxDQUFDSSxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUU7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSxrQkFBSSxFQUFDLE1BRlA7QUFHRSxnQkFBRSxFQUFDLE1BSEw7QUFJRSx1QkFBUyxFQUFFSiw4REFBTyxDQUFDSyxZQUpyQjtBQUtFLGlCQUFHLEVBQUU3RCxZQUxQO0FBTUUsc0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBMkVFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFPLG1CQUFPLEVBQUMsYUFBZjtBQUFBLG9DQUNFO0FBQUEsc0RBQ2M7QUFBTSx5QkFBUyxFQUFFd0QsOERBQU8sQ0FBQ0ksUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUU7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSxrQkFBSSxFQUFDLGFBRlA7QUFHRSx5QkFBVyxFQUFDLCtDQUhkO0FBSUUsdUJBQVMsRUFBRUosOERBQU8sQ0FBQ00sYUFKckI7QUFLRSxpQkFBRyxFQUFFaEUsbUJBTFA7QUFNRSxzQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBZUU7QUFDRSxnQkFBSSxFQUFDLE1BRFA7QUFFRSxjQUFFLEVBQUMsT0FGTDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLGtCQUFNLEVBQUMsU0FKVDtBQUtFLHFCQUFTLEVBQUUwRCw4REFBTyxDQUFDSyxZQUxyQjtBQU1FLGlCQUFLLEVBQUU7QUFBRUUsbUJBQUssRUFBRTtBQUFULGFBTlQ7QUFPRSxvQkFBUSxFQUFFcEMsZUFQWjtBQVFFLG9CQUFRO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmRixlQXlCRTtBQUFLLHFCQUFTLEVBQUU2Qiw4REFBTyxDQUFDUSxNQUF4QjtBQUFBLG1DQUNFLHFFQUFDLGtEQUFEO0FBQVEscUJBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUE2R0cxRSxTQUFTLGlCQUNSLHFFQUFDLDRFQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlHSixFQWdIR1IsU0FBUyxpQkFBSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9IRDs7R0E5UVFGLFc7O0tBQUFBLFc7QUFnUk1BLDBFQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdGxvc3RpdGVtLjU3OTRiNDQ0MmE3OWE1YjVlODk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0TmV3SXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9VSS9Mb2FkaW5nXCI7XHJcbmltcG9ydCBFcnJvckNvbXAgZnJvbSBcIi4uL1VJL0Vycm9yQ29tcFwiO1xyXG5pbXBvcnQgTm90aSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25PdmVybGF5L25vdGlcIjtcclxuaW1wb3J0IExvYWRpbmdzIGZyb20gXCIuLi9ub3RpZmljYXRpb25PdmVybGF5L0xvYWRpbmdzXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0TmV3SXRlbSgpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0ltYWdlLCBzZXRJc0ltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNFcnJvckRhdGEsIHNldElzRXJyb3JEYXRhXSA9IHVzZVN0YXRlKFxyXG4gICAgXCJTb3JyeSBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdC5cIlxyXG4gICk7XHJcbiAgY29uc3QgW3NlbmRFbWFpbCwgc2V0SXNTZW5kRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZW5kUG9zdCwgc2V0SXNTZW5kUG9zdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHR5cGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNhdGVnb3J5SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHF1ZXN0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkYXRlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlscyhzdWJqZWN0LCBtZXNzYWdlKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9lbWFpbC9zZW5kRW1haWxcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgc3ViamVjdCxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAvLyBIYW5kbGUgbm9uLTJ4eCBIVFRQIHJlc3BvbnNlIHN0YXR1c1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBzZW5kaW5nIGVtYWlsLiBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICBzZXRJc1NlbmRFbWFpbCh0cnVlKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZW5kUG9zdERhdGEoXHJcbiAgICBUeXBlLFxyXG4gICAgQ2F0ZWdvcnksXHJcbiAgICBUaXRsZSxcclxuICAgIERlc2NyaXB0aW9uLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBEYXRlLFxyXG4gICAgaW1hZ2VJbmJhc2U2NFxyXG4gICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdC9wb3N0aXRlbVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBUeXBlLFxyXG4gICAgICAgIENhdGVnb3J5LFxyXG4gICAgICAgIFRpdGxlLFxyXG4gICAgICAgIERlc2NyaXB0aW9uLFxyXG4gICAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICAgIERhdGUsXHJcbiAgICAgICAgUmVkdWNlZEltZzogaW1hZ2VJbmJhc2U2NCxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgc2V0SXNTZW5kRW1haWwoZmFsc2UpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNFcnJvckRhdGEoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAvL3NldElzU2VuZFBvc3QodHJ1ZSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb252ZXJ0dG9iYXNlNjQoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0KTtcclxuICAgICAgc2V0SXNJbWFnZShyZWFkZXIucmVzdWx0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgcG9zdFN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZFR5cGUgPSB0eXBlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRDYXRlZ29yeSA9IGNhdGVnb3J5SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRpdGxlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWREYXRlID0gZGF0ZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShlbnRlcmVkRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICBcImVuLVVTXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gYCR7ZW50ZXJlZFR5cGV9ICR7ZW50ZXJlZENhdGVnb3J5fVxyXG4gIFxyXG5JdGVtIE5hbWU6ICR7ZW50ZXJlZFRpdGxlfVxyXG5EYXRlOiAke2h1bWFuUmVhZGFibGVEYXRlfVxyXG5EZXNjcmlwdGlvbjogJHtlbnRlcmVkRGVzY3JpcHRpb259XHJcblxyXG5JZiB5b3UgaGF2ZSBhbnkgaW5mb3JtYXRpb24gYWJvdXQgdGhlICR7ZW50ZXJlZFR5cGV9IGl0ZW0sIGtpbmRseSB2aXNpdCB0aGUgTG9zdE5lc3Qgd2ViIGFwcGxpY2F0aW9uLlxyXG5cclxuVGhhbmsgeW91XHJcbmA7XHJcblxyXG4gICAgY29uc3Qgc3ViamVjdCA9IGAke2VudGVyZWRUeXBlfSA6ICR7ZW50ZXJlZFRpdGxlfWA7XHJcblxyXG4gICAgY29uc3QgZW1haWxyZXMgPSBhd2FpdCBzZW5kRW1haWxzKHN1YmplY3QsIG1lc3NhZ2UpO1xyXG4gICAgLy8gc2V0SXNTZW5kRW1haWwoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRQb3N0RGF0YShcclxuICAgICAgZW50ZXJlZFR5cGUsXHJcbiAgICAgIGVudGVyZWRDYXRlZ29yeSxcclxuICAgICAgZW50ZXJlZFRpdGxlLFxyXG4gICAgICBlbnRlcmVkRGVzY3JpcHRpb24sXHJcbiAgICAgIGVudGVyZWRRdWVzdGlvbixcclxuICAgICAgaHVtYW5SZWFkYWJsZURhdGUsXHJcbiAgICAgIGlzSW1hZ2VcclxuICAgICk7XHJcblxyXG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7IC8vIFRoaXMgcmVzZXRzIHRoZSBmb3JtXHJcbiAgICBzZXRJc0ltYWdlKFwiXCIpOyAvLyBDbGVhciB0aGUgaW1hZ2Ugc3RhdGVcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JDb21wIGVycm9yRGF0YT17aXNFcnJvckRhdGF9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybXN0eWxlM30+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3Bvc3RTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGxlZ2VuZD5EYXRhPC9sZWdlbmQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9PlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgICAgcmVmPXt0eXBlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvc3RcIj5Mb3N0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtjYXRlZ29yeUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2F0ZWdvcnlcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldhbGxldFwiPldhbGxldDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEIENhcmQgLyBTdHVkZW50IENhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgSUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZFxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU21hcnQgUGhvbmUgLyBMYXB0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgU21hcnQgUGhvbmUgLyBMYXB0b3BcclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktleXNcIj5LZXlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWVsZDNcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIEl0ZW0gTmFtZSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkM1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dGZpZWxkfVxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aXRsZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWVsZDRcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIEVudGVyIHF1ZXN0aW9uIGJhc2VkIG9uIGFuIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkNFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4Oi0gV2hhdCBpcyB0aGUgY29sb3Igb2YgdGhlIHBob25lP1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICAgIHJlZj17cXVlc3Rpb25JbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIFNlbGVjdCBhIERhdGU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgICAgIHJlZj17ZGF0ZUlucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgIDxsZWdlbmQ+RGV0YWlsczwvbGVnZW5kPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gYWJvdXQgaXRlbSAobGlrZSBsb2NhdGlvbiBldGMuLi4pXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0YXJlYWZpZWxkfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y29udmVydHRvYmFzZTY0fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUG9zdFwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzZW5kRW1haWwgJiYgKFxyXG4gICAgICAgIDxOb3RpIGRhdGE9XCJFbWFpbCBTdWNjZXNzZnVsbHkgU2VudCB0byBMb3N0TmVzdCBSZWdpc3RlcmVkIFVzZXJzIVwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmdzIC8+fVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TmV3SXRlbTtcclxuXHJcbi8qXHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0TmV3SXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXJyb3JDb21wIGZyb20gXCIuLi9VSS9FcnJvckNvbXBcIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3ROZXdJdGVtKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzSW1hZ2UsIHNldElzSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yRGF0YSwgc2V0SXNFcnJvckRhdGFdID0gdXNlU3RhdGUoXHJcbiAgICBcIlNvcnJ5IGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IGV4aXN0LlwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdHlwZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2F0ZWdvcnlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcXVlc3Rpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRhdGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZW5kRW1haWxzKFxyXG4gICAgVHlwZSxcclxuICAgIENhdGVnb3J5LFxyXG4gICAgVGl0bGUsXHJcbiAgICBEZXNjcmlwdGlvbixcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgRGF0ZSxcclxuICAgIGltYWdlSW5iYXNlNjRcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgVHlwZSxcclxuICAgICAgICBDYXRlZ29yeSxcclxuICAgICAgICBUaXRsZSxcclxuICAgICAgICBEZXNjcmlwdGlvbixcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBEYXRlLFxyXG4gICAgICAgIFJlZHVjZWRJbWc6IGltYWdlSW5iYXNlNjQsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBub3Qgb2tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZW5kUG9zdERhdGEoXHJcbiAgICBUeXBlLFxyXG4gICAgQ2F0ZWdvcnksXHJcbiAgICBUaXRsZSxcclxuICAgIERlc2NyaXB0aW9uLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBEYXRlLFxyXG4gICAgaW1hZ2VJbmJhc2U2NFxyXG4gICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdC9wb3N0aXRlbVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBUeXBlLFxyXG4gICAgICAgIENhdGVnb3J5LFxyXG4gICAgICAgIFRpdGxlLFxyXG4gICAgICAgIERlc2NyaXB0aW9uLFxyXG4gICAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICAgIERhdGUsXHJcbiAgICAgICAgUmVkdWNlZEltZzogaW1hZ2VJbmJhc2U2NCxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0Vycm9yRGF0YShkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRJc0Vycm9yKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29udmVydHRvYmFzZTY0KGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIHNldElzSW1hZ2UocmVhZGVyLnJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IHBvc3RTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWRUeXBlID0gdHlwZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkQ2F0ZWdvcnkgPSBjYXRlZ29yeUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aXRsZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkUXVlc3Rpb24gPSBxdWVzdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkRGF0ZSA9IGRhdGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGh1bWFuUmVhZGFibGVEYXRlID0gbmV3IERhdGUoZW50ZXJlZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gYGA7XHJcblxyXG4gICAgY29uc3QgZW1haWxyZXMgPSBhd2FpdCBzZW5kRW1haWxzKHN1YmplY3QsIG1lc3NhZ2UpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRQb3N0RGF0YShcclxuICAgICAgZW50ZXJlZFR5cGUsXHJcbiAgICAgIGVudGVyZWRDYXRlZ29yeSxcclxuICAgICAgZW50ZXJlZFRpdGxlLFxyXG4gICAgICBlbnRlcmVkRGVzY3JpcHRpb24sXHJcbiAgICAgIGVudGVyZWRRdWVzdGlvbixcclxuICAgICAgaHVtYW5SZWFkYWJsZURhdGUsXHJcbiAgICAgIGlzSW1hZ2VcclxuICAgICk7XHJcblxyXG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7IC8vIFRoaXMgcmVzZXRzIHRoZSBmb3JtXHJcbiAgICBzZXRJc0ltYWdlKFwiXCIpOyAvLyBDbGVhciB0aGUgaW1hZ2Ugc3RhdGVcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRXJyb3IpIHtcclxuICAgIHJldHVybiA8RXJyb3JDb21wIGVycm9yRGF0YT17aXNFcnJvckRhdGF9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1zdHlsZTN9PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cG9zdFN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgIDxsZWdlbmQ+RGF0YTwvbGVnZW5kPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBuYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgICAgICAgcmVmPXt0eXBlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG9zdFwiPkxvc3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e2NhdGVnb3J5SW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXRlZ29yeVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2FsbGV0XCI+V2FsbGV0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEIENhcmQgLyBTdHVkZW50IENhcmRcIj5cclxuICAgICAgICAgICAgICAgIElEIENhcmQgLyBTdHVkZW50IENhcmRcclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU21hcnQgUGhvbmUgLyBMYXB0b3BcIj5TbWFydCBQaG9uZSAvIExhcHRvcDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLZXlzXCI+S2V5czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpZWxkM1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBJdGVtIE5hbWUgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJlcXVpcmVkfT4qPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmllbGQzXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e3RpdGxlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWVsZDRcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgRW50ZXIgcXVlc3Rpb24gYmFzZWQgb24gYW4gaXRlbS5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJmaWVsZDRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6LSBXaGF0IGlzIHRoZSBjb2xvciBvZiB0aGUgcGhvbmU/XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICAgICAgICByZWY9e3F1ZXN0aW9uSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBTZWxlY3QgYSBEYXRlOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucmVxdWlyZWR9Pio8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgICAgcmVmPXtkYXRlSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgPGxlZ2VuZD5EZXRhaWxzPC9sZWdlbmQ+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIERlc2NyaXB0aW9uIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXF1aXJlZH0+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGFib3V0IGl0ZW0gKGxpa2UgbG9jYXRpb24gZXRjLi4uKVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRhcmVhZmllbGR9XHJcbiAgICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb252ZXJ0dG9iYXNlNjR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiUG9zdFwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdE5ld0l0ZW07XHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=