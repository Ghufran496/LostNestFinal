module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/mylistings/[specificid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UI/Button.js":
/*!*********************************!*\
  !*** ./components/UI/Button.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.css */ "./components/UI/Button.module.css");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\UI\\Button.js";



const Button = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    role: "button",
    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
    children: props.content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/UI/Button.module.css":
/*!*****************************************!*\
  !*** ./components/UI/Button.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Button_btn__3Itc3"
};


/***/ }),

/***/ "./components/UI/Loading.js":
/*!**********************************!*\
  !*** ./components/UI/Loading.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.module.css */ "./components/UI/Loading.module.css");
/* harmony import */ var _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loading_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\UI\\Loading.js";
// import React from "react";
// import classes from "./Loading.module.css";
// function Loading() {
//   return (
//     <div className={classes.loader}>
//       <div
//         className={`${classes.justifycontentcenter} ${classes.jimuprimaryloading}`}
//       ></div>
//     </div>
//   );
// }
// export default Loading;



function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.justifycontentcenter} ${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jimuprimaryloading}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/UI/Loading.module.css":
/*!******************************************!*\
  !*** ./components/UI/Loading.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loader": "Loading_loader__3AIAm",
	"jimuprimaryloading": "Loading_jimuprimaryloading__1GHIl",
	"loading-keys-app-loading": "Loading_loading-keys-app-loading__Yl0sI"
};


/***/ }),

/***/ "./components/answers/answer-list.js":
/*!*******************************************!*\
  !*** ./components/answers/answer-list.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _answerlist_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answerlist.module.css */ "./components/answers/answerlist.module.css");
/* harmony import */ var _answerlist_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_answerlist_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _single_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-answer */ "./components/answers/single-answer.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\answers\\answer-list.js";



function AnswerList(props) {
  const {
    ansitems
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _answerlist_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.response,
    children: ansitems.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_single_answer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: item
    }, item._id, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AnswerList);
/*

return (
    <ul className={classes.response}>
      {ansitems.map((item) => (
        <li key={item._id}>
          <p>{item.Answer}</p>
          <div>By {item.PosterID}</div>
        </li>
      ))}
    </ul>
  );*/

/***/ }),

/***/ "./components/answers/answer.js":
/*!**************************************!*\
  !*** ./components/answers/answer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _answer_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer-list */ "./components/answers/answer-list.js");
/* harmony import */ var _answer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answer.module.css */ "./components/answers/answer.module.css");
/* harmony import */ var _answer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_answer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\answers\\answer.js";



 //http://localhost:3000/mylistings/654bc2921efc6c1070461e13

function Answer(props) {
  const {
    postid
  } = props;
  console.log(postid);
  const {
    0: showResponse,
    1: setShowResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showLoadingContent,
    1: setLoadingContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: response,
    1: setresponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchData = async () => {
      if (showResponse) {
        setLoadingContent(true);

        try {
          const response = await fetch("/api/answers/" + postid);
          const data = await response.json();
          setresponse(data.responses);
        } catch (error) {
          console.error("Error fetching data:", error); // Handle errors as needed
        } finally {
          setLoadingContent(false);
        }
      }
    }; // Only fetch data if showResponse is true and responses are not already available


    if (showResponse && response.length === 0) {
      fetchData();
    }
  }, [showResponse]);

  function toggleResponseHandler() {
    setShowResponse(prevStatus => !prevStatus);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _answer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.responses,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _answer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: toggleResponseHandler,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          content: showResponse ? "Hide Responses" : "Show Responses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), showLoadingContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        marginBottom: "1rem",
        marginTop: "1rem",
        fontSize: "1.5rem",
        textTransform: "capitalize"
      },
      children: "getting responses..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), response.length === 0 && !showLoadingContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        marginBottom: "1rem",
        marginTop: "1rem",
        fontSize: "1.5rem",
        textTransform: "capitalize"
      },
      children: "No responses have been received yet."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this), showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_answer_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ansitems: response
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Answer); // useEffect(() => {
//   const fetchData = async () => {
//     if (showResponse) {
//       setLoadingContent(true);
//       try {
//         const response = await fetch("/api/answers/" + postid);
//         const data = await response.json();
//         setresponse(data.responses);
//         if (data.responses) {
//           setLoadingContent(false);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Handle errors as needed
//         setLoadingContent(false);
//       }
//     }
//     setLoadingContent(false);
//   };
//   fetchData();
//   //setLoadingContent(false);
// }, [showResponse, postid, setresponse, setLoadingContent]);
// useEffect(() => {
//   //setLoadingContent(true);
//   if (showResponse) {
//     fetch("/api/answers/" + postid)
//       .then((response) => response.json())
//       .then((data) => setresponse(data.responses));
//   }
//   setLoadingContent(false);
// }, [showResponse, setLoadingContent]);

/***/ }),

/***/ "./components/answers/answer.module.css":
/*!**********************************************!*\
  !*** ./components/answers/answer.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"responses": "answer_responses__4XjrS",
	"button52": "answer_button52__vGBY2",
	"btndiv": "answer_btndiv__1GOTF",
	"button-52": "answer_button-52___bDL9"
};


/***/ }),

/***/ "./components/answers/answerlist.module.css":
/*!**************************************************!*\
  !*** ./components/answers/answerlist.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"response": "answerlist_response__ZkJWD"
};


/***/ }),

/***/ "./components/answers/single-answer.js":
/*!*********************************************!*\
  !*** ./components/answers/single-answer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleans_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleans.module.css */ "./components/answers/singleans.module.css");
/* harmony import */ var _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_singleans_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _overlayForm_AnswerForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../overlayForm/AnswerForm */ "./components/overlayForm/AnswerForm.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\answers\\single-answer.js";





const SingleAnswer = props => {
  const {
    PosterID
  } = props.data; //_id, Answer,

  const {
    0: showAForm,
    1: setIsShowAForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const showModeHandler = () => {
    setIsShowAForm(true);
  };

  const hideModeHandler = () => {
    setIsShowAForm(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.linkpara,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: showModeHandler,
        className: _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
        children: "Check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), "\xA0 Response by this user."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _singleans_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.responder,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["By ", PosterID]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), showAForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_overlayForm_AnswerForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onclose: hideModeHandler,
      data: props.data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SingleAnswer);

/***/ }),

/***/ "./components/answers/singleans.module.css":
/*!*************************************************!*\
  !*** ./components/answers/singleans.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "singleans_list__xosWu",
	"linkpara": "singleans_linkpara__TG0oq",
	"link": "singleans_link__3PbpX",
	"button52": "singleans_button52__18Uzf",
	"btndiv": "singleans_btndiv__2hH4_",
	"button-52": "singleans_button-52__YBJUy",
	"responder": "singleans_responder__3-rGB"
};


/***/ }),

/***/ "./components/feed/FeedDetails/event-content.js":
/*!******************************************************!*\
  !*** ./components/feed/FeedDetails/event-content.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-content.module.css */ "./components/feed/FeedDetails/event-content.module.css");
/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_content_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\FeedDetails\\event-content.js";


function EventContent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EventContent);

/***/ }),

/***/ "./components/feed/FeedDetails/event-content.module.css":
/*!**************************************************************!*\
  !*** ./components/feed/FeedDetails/event-content.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "event-content_content__30Fxp"
};


/***/ }),

/***/ "./components/feed/FeedDetails/event-logistics.js":
/*!********************************************************!*\
  !*** ./components/feed/FeedDetails/event-logistics.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logistics_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logistics-item */ "./components/feed/FeedDetails/logistics-item.js");
/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-logistics.module.css */ "./components/feed/FeedDetails/event-logistics.module.css");
/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_ionicons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ionicons */ "react-ionicons");
/* harmony import */ var react_ionicons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ionicons__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\FeedDetails\\event-logistics.js";




 //https://react-ionicons.netlify.app/

function EventLogistics(props) {
  const {
    Type,
    Category,
    Title,
    Date,
    ReducedImg
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: Title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: Title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/font-awesome.min.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logistics,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: ReducedImg,
          alt: Title,
          width: 400,
          height: 400
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_ionicons__WEBPACK_IMPORTED_MODULE_5__["TodayOutline"], {
              color: "#00000",
              beat: true,
              height: "25px",
              width: "25px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.timer,
              children: [" ", Date]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_ionicons__WEBPACK_IMPORTED_MODULE_5__["MenuOutline"], {
              color: "#00000",
              beat: true,
              height: "25px",
              width: "25px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: Type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_ionicons__WEBPACK_IMPORTED_MODULE_5__["GridOutline"], {
              color: "#00000",
              beat: true,
              height: "25px",
              width: "25px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: Category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EventLogistics);

/***/ }),

/***/ "./components/feed/FeedDetails/event-logistics.module.css":
/*!****************************************************************!*\
  !*** ./components/feed/FeedDetails/event-logistics.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"logistics": "event-logistics_logistics__2QQkw",
	"image": "event-logistics_image__18uVY",
	"list": "event-logistics_list__1BKPP",
	"spaner": "event-logistics_spaner__3izte",
	"icon": "event-logistics_icon__2amKr"
};


/***/ }),

/***/ "./components/feed/FeedDetails/event-summary.js":
/*!******************************************************!*\
  !*** ./components/feed/FeedDetails/event-summary.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-summary.module.css */ "./components/feed/FeedDetails/event-summary.module.css");
/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\FeedDetails\\event-summary.js";


function EventSummary(props) {
  const {
    Title
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (EventSummary);

/***/ }),

/***/ "./components/feed/FeedDetails/event-summary.module.css":
/*!**************************************************************!*\
  !*** ./components/feed/FeedDetails/event-summary.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"summary": "event-summary_summary__2aQJk"
};


/***/ }),

/***/ "./components/feed/FeedDetails/logistics-item.js":
/*!*******************************************************!*\
  !*** ./components/feed/FeedDetails/logistics-item.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logistics-item.module.css */ "./components/feed/FeedDetails/logistics-item.module.css");
/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\feed\\FeedDetails\\logistics-item.js";


function LogisticsItem(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LogisticsItem);

/***/ }),

/***/ "./components/feed/FeedDetails/logistics-item.module.css":
/*!***************************************************************!*\
  !*** ./components/feed/FeedDetails/logistics-item.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "logistics-item_item__8rwgb",
	"icon": "logistics-item_icon__ofHNY"
};


/***/ }),

/***/ "./components/overlayForm/AForm.js":
/*!*****************************************!*\
  !*** ./components/overlayForm/AForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AForm.module.css */ "./components/overlayForm/AForm.module.css");
/* harmony import */ var _AForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AForm_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DetailForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailForm */ "./components/overlayForm/DetailForm.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\AForm.js";





function AForm(props) {
  const {
    _id,
    Answer,
    ItemTitle,
    PostID,
    PosterID,
    Question,
    SubmittedDateTime
  } = props.data2;
  const {
    0: isYes,
    1: setIsYes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const yesHandler = () => {
    setIsYes(true);
  };

  async function sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime) {
    const response = await fetch("/api/answers/sendResponse", {
      method: "POST",
      body: JSON.stringify({
        enteredInformations,
        ItemTitle,
        PostID,
        PosterID,
        Question,
        combinedDateTime,
        Answer
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
    }

    return data;
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US");
  const formattedTime = currentDate.toLocaleTimeString("en-US");
  const combinedDateTime = `${formattedDate} ${formattedTime}`;

  const noHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    const enteredInformations = "Responder has nullified the validation.";
    const result = await sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer);

    if (props.oncancle) {
      props.oncancle();
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "1.5rem"
      },
      children: "Submiting..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: isYes ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      close: props.oncancle,
      senderData: props.data2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.diver,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: SubmittedDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Question?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.para1,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Answer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.para1,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btndiver,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button90,
          type: "button",
          role: "button",
          onClick: yesHandler,
          children: "Yes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button90,
          type: "button",
          role: "button",
          onClick: noHandler,
          children: "No"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _AForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button90,
          type: "button",
          role: "button",
          onClick: props.oncancle,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AForm);

/***/ }),

/***/ "./components/overlayForm/AForm.module.css":
/*!*************************************************!*\
  !*** ./components/overlayForm/AForm.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"diver": "AForm_diver__1K34U",
	"para1": "AForm_para1__1ykUF",
	"btndiver": "AForm_btndiver__3FMWH",
	"button90": "AForm_button90__3jrHE"
};


/***/ }),

/***/ "./components/overlayForm/AnswerForm.js":
/*!**********************************************!*\
  !*** ./components/overlayForm/AnswerForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AForm */ "./components/overlayForm/AForm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnswerForm.module.css */ "./components/overlayForm/AnswerForm.module.css");
/* harmony import */ var _AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\AnswerForm.js";





const AnswerForm = props => {
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.backer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _AnswerForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.formContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        oncancle: props.onclose,
        data2: props.data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), document.getElementById("Answers"));
};

/* harmony default export */ __webpack_exports__["default"] = (AnswerForm);

/***/ }),

/***/ "./components/overlayForm/AnswerForm.module.css":
/*!******************************************************!*\
  !*** ./components/overlayForm/AnswerForm.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"backer": "AnswerForm_backer__fggJP",
	"formContainer": "AnswerForm_formContainer__3Q2Wc"
};


/***/ }),

/***/ "./components/overlayForm/DetailForm.js":
/*!**********************************************!*\
  !*** ./components/overlayForm/DetailForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailForm.module.css */ "./components/overlayForm/DetailForm.module.css");
/* harmony import */ var _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\DetailForm.js";




const DetailForm = props => {
  const {
    ItemTitle,
    PostID,
    PosterID,
    Question,
    Answer
  } = props.senderData;
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const ResponseData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  async function sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer) {
    const response = await fetch("/api/answers/sendResponse", {
      method: "POST",
      body: JSON.stringify({
        enteredInformations,
        ItemTitle,
        PostID,
        PosterID,
        Question,
        combinedDateTime,
        Answer
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
    }

    return data;
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US");
  const formattedTime = currentDate.toLocaleTimeString("en-US");
  const combinedDateTime = `${formattedDate} ${formattedTime}`;

  async function InfosubmitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    const enteredInformations = ResponseData.current.value;
    const result = await sendMessage(enteredInformations, ItemTitle, PostID, PosterID, Question, combinedDateTime, Answer);
    event.target.reset();
    setIsLoading(false);
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "1.5rem"
      },
      children: "Submiting..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,
      onSubmit: InfosubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        for: "contactInformations",
        children: "Enter Contact Informations"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        type: "text",
        name: "contactInformations",
        rows: "4",
        cols: "40",
        placeholder: "your Gmail or cell number.",
        ref: ResponseData,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.twobtn,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button89,
          type: "submit",
          role: "button",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _DetailForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button89,
          type: "button",
          role: "button",
          onClick: props.close,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DetailForm);

/***/ }),

/***/ "./components/overlayForm/DetailForm.module.css":
/*!******************************************************!*\
  !*** ./components/overlayForm/DetailForm.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "DetailForm_form__wwYVh",
	"button89": "DetailForm_button89__zDt5J",
	"twobtn": "DetailForm_twobtn__OgCvO"
};


/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase, getAllPosts, getPostDataById, getResponseDataById, fetchallemails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDataById", function() { return getPostDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponseDataById", function() { return getResponseDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchallemails", function() { return fetchallemails; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


const {
  ObjectId
} = __webpack_require__(/*! mongodb */ "mongodb");

let cachedClient = null;
let clientSet = false;
async function connectToDatabase() {
  if (clientSet) {
    console.log("return already stored client");
    return cachedClient;
  }

  let client;
  const connectionString = `mongodb+srv://${"ghufran"}:${"Allahis1"}@${"cluster0"}.psik2ae.mongodb.net/${"authSec14"}?retryWrites=true&w=majority`;

  try {
    client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
      poolSize: 10 // Adjust this based on your application's needs

    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } // Handle the 'close' event for potential reconnection


  client.on("close", () => {
    console.log("Connection closed. Reconnecting..."); // Implement reconnection logic here, such as calling connectToDatabase()

    connectToDatabase(); //client.connect();
  });

  if (!clientSet) {
    cachedClient = client;
    clientSet = true;
    console.log("return new client");
  }

  return client;
}
async function getAllPosts() {
  const client = await connectToDatabase();
  const db = client.db();
  const data = await db.collection("PostedItem").find({}).toArray();
  return data;
}
async function getPostDataById(id) {
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("PostedItem");
  const postobjectId = new ObjectId(id);
  const user = await usersCollection.findOne({
    _id: postobjectId
  });
  return user;
}
async function getResponseDataById(id) {
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("QAnswers");
  const user = await usersCollection.find({
    PostID: id
  }).toArray();
  return user;
}
async function fetchallemails() {
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const allemails = await usersCollection.find({}, {
    projection: {
      password: 0,
      name: 0,
      _id: 0
    }
  }).toArray();
  return allemails;
} // export async function getProfileData(userEmail) {
//   const client = await connectToDatabase();
//   const usersCollection = client.db().collection("users");
//   const user = await usersCollection.findOne(
//     { email: userEmail },
//     { projection: { password: 0 } }
//   );
//   return user;
// }
// import { MongoClient } from "mongodb";
// const { ObjectId } = require("mongodb");
// let cachedClient = null;
// let clientSet = false;
// export async function connectToDatabase() {
//   if (clientSet) {
//     console.log("return already stored client" + cachedClient);
//     return cachedClient;
//   }
//   let client;
//   const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.psik2ae.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
//   client = await MongoClient.connect(connectionString, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     connectTimeoutMS: 30000,
//   });
//   if (!clientSet) {
//     cachedClient = client;
//     clientSet = true;
//     console.log("return new client");
//   }
//   return client;
// }

/*


import { MongoClient } from "mongodb";
const { ObjectId } = require("mongodb");

let cachedClient = null;
let clientSet = false;

export async function connectToDatabase() {
  if (clientSet) {
    console.log("return already stored client" + cachedClient);
    return cachedClient;
  }

  const client = await MongoClient.connect(
    "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
    }
  );

  if (!clientSet) {
    cachedClient = client;
    clientSet = true;
    console.log("return new client");
  }

  return client;
}


*/
// export async function getPostsByEmail(email) {
//   //console.log(email);
//   const allPosts = await getAllPosts();
//   //console.log(allPosts);
//   // return allPosts.find((event) => event.posterEmail === email);
//   return allPosts.filter((event) => event.posterEmail === email);
// }
// export async function getPostDataById(id) {
//   const allPosts = await getAllPosts(); //w
//   const postobjectId = new ObjectId(id);
//   //console.log(postobjectId);
//   // return allPosts.find((event) => event._id === postobjectId);
//   return allPosts.find(
//     (event) => event._id.toString() === postobjectId.toString()
//   );
// }
// export async function getResponseDataById(id) {
//   const client = await connectToDatabase();
//   const db = client.db();
//   const data = await db.collection("QAnswers").find({}).toArray();
//   //console.log(data);
//   return data.filter((event) => event.PostID === id);
// }
// export async function getPostsByObjectId(objectId) {
//   const allPosts = await getAllPosts();
//   //console.log(allPosts); good
//   console.log(objectId);
//   const data2 = allPosts.find((item) => item._id.equals(objectId));
//   console.log(data2);
//   return data2;
// }
// import { ObjectId } from "mongodb";
// export async function getPostsByObjectId(objectId) {
//   const allPosts = await getAllPosts();
//   const data2 = allPosts.find((item) => item._id.equals(objectId));
//   console.log(data2);
//   return data2;
// }
// import { MongoClient } from "mongodb";
// const { ObjectId } = require("mongodb");
// class Database {
//   constructor() {
//     if (!Database.instance) {
//       this.client = null;
//       this.clientSet = false;
//       Database.instance = this;
//     }
//     return Database.instance;
//   }
//   async connect() {
//     if (this.clientSet) {
//       console.log("return already stored client");
//       return this.client;
//     }
//     this.client = await MongoClient.connect(
//       "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority",
//       {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//         connectTimeoutMS: 30000,
//       }
//     );
//     if (!this.clientSet) {
//       this.clientSet = true;
//       console.log("return new client");
//     }
//     return this.client;
//   }
// }
// const database = new Database();
// export const connectToDatabase = async () => {
//   try {
//     return await database.connect();
//   } catch (error) {
//     //console.error("Error connecting to the database:", error);
//     throw error;
//   }
// };

/***/ }),

/***/ "./pages/mylistings/[specificid].js":
/*!******************************************!*\
  !*** ./pages/mylistings/[specificid].js ***!
  \******************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _specificid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specificid.module.css */ "./pages/mylistings/specificid.module.css");
/* harmony import */ var _specificid_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_specificid_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-summary */ "./components/feed/FeedDetails/event-summary.js");
/* harmony import */ var _components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-logistics */ "./components/feed/FeedDetails/event-logistics.js");
/* harmony import */ var _components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-content */ "./components/feed/FeedDetails/event-content.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_answers_answer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/answers/answer */ "./components/answers/answer.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\mylistings\\[specificid].js";













function specificid(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: processedObject,
    1: setProcessedObject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchData = async () => {
      const {
        extractedObject
      } = props;

      if (typeof extractedObject === "object") {
        setProcessedObject(extractedObject);
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    };

    fetchData();
  }, [props.extractedObject]);

  if (isLoading || !processedObject) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }, this);
  }

  const event = processedObject;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: event.Title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_answers_answer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      postid: event._id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

async function getServerSideProps(context) {
  const {
    params
  } = context;
  const {
    specificid
  } = params;
  const postData = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_10__["getPostDataById"])(specificid);
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_9__["getSession"])({
    req: context.req
  });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    };
  }

  return {
    props: {
      extractedObject: JSON.parse(JSON.stringify(postData))
    }
  };
} // export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// }

/* harmony default export */ __webpack_exports__["default"] = (specificid);

/***/ }),

/***/ "./pages/mylistings/specificid.module.css":
/*!************************************************!*\
  !*** ./pages/mylistings/specificid.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button52": "specificid_button52__aDOKE",
	"btndiv": "specificid_btndiv__2qnuQ",
	"button-52": "specificid_button-52__2TgqL"
};


/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-ionicons":
/*!*********************************!*\
  !*** external "react-ionicons" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci1saXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5zd2Vycy9hbnN3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5zd2Vycy9hbnN3ZXJsaXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXJzL3NpbmdsZS1hbnN3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXJzL3NpbmdsZWFucy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvbG9naXN0aWNzLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9BRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL0FGb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9BbnN3ZXJGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vQW5zd2VyRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vRGV0YWlsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL0RldGFpbEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbXlsaXN0aW5ncy9zcGVjaWZpY2lkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlvbmljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJjbGFzc2VzIiwiYnRuIiwiY29udGVudCIsIkxvYWRpbmciLCJsb2FkZXIiLCJqdXN0aWZ5Y29udGVudGNlbnRlciIsImppbXVwcmltYXJ5bG9hZGluZyIsIkFuc3dlckxpc3QiLCJhbnNpdGVtcyIsInJlc3BvbnNlIiwibWFwIiwiaXRlbSIsIl9pZCIsIkFuc3dlciIsInBvc3RpZCIsImNvbnNvbGUiLCJsb2ciLCJzaG93UmVzcG9uc2UiLCJzZXRTaG93UmVzcG9uc2UiLCJ1c2VTdGF0ZSIsInNob3dMb2FkaW5nQ29udGVudCIsInNldExvYWRpbmdDb250ZW50Iiwic2V0cmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicmVzcG9uc2VzIiwiZXJyb3IiLCJsZW5ndGgiLCJ0b2dnbGVSZXNwb25zZUhhbmRsZXIiLCJwcmV2U3RhdHVzIiwiYnRuZGl2IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiU2luZ2xlQW5zd2VyIiwiUG9zdGVySUQiLCJzaG93QUZvcm0iLCJzZXRJc1Nob3dBRm9ybSIsInNob3dNb2RlSGFuZGxlciIsImhpZGVNb2RlSGFuZGxlciIsImxpc3QiLCJsaW5rcGFyYSIsImxpbmsiLCJyZXNwb25kZXIiLCJFdmVudENvbnRlbnQiLCJjaGlsZHJlbiIsIkV2ZW50TG9naXN0aWNzIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEYXRlIiwiUmVkdWNlZEltZyIsImxvZ2lzdGljcyIsImltYWdlIiwic3BhbmVyIiwidGltZXIiLCJFdmVudFN1bW1hcnkiLCJzdW1tYXJ5IiwiTG9naXN0aWNzSXRlbSIsIkFGb3JtIiwiSXRlbVRpdGxlIiwiUG9zdElEIiwiUXVlc3Rpb24iLCJTdWJtaXR0ZWREYXRlVGltZSIsImRhdGEyIiwiaXNZZXMiLCJzZXRJc1llcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInllc0hhbmRsZXIiLCJzZW5kTWVzc2FnZSIsImVudGVyZWRJbmZvcm1hdGlvbnMiLCJjb21iaW5lZERhdGVUaW1lIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJjdXJyZW50RGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJmb3JtYXR0ZWRUaW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibm9IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsIm9uY2FuY2xlIiwiZGl2ZXIiLCJwYXJhMSIsImJ0bmRpdmVyIiwiYnV0dG9uOTAiLCJBbnN3ZXJGb3JtIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJiYWNrZXIiLCJmb3JtQ29udGFpbmVyIiwib25jbG9zZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJEZXRhaWxGb3JtIiwic2VuZGVyRGF0YSIsIlJlc3BvbnNlRGF0YSIsInVzZVJlZiIsIkluZm9zdWJtaXRIYW5kbGVyIiwiY3VycmVudCIsInZhbHVlIiwidGFyZ2V0IiwicmVzZXQiLCJmb3JtIiwidHdvYnRuIiwiYnV0dG9uODkiLCJjbG9zZSIsIk9iamVjdElkIiwicmVxdWlyZSIsImNhY2hlZENsaWVudCIsImNsaWVudFNldCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uZWN0VGltZW91dE1TIiwicG9vbFNpemUiLCJvbiIsImdldEFsbFBvc3RzIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJnZXRQb3N0RGF0YUJ5SWQiLCJpZCIsInVzZXJzQ29sbGVjdGlvbiIsInBvc3RvYmplY3RJZCIsInVzZXIiLCJmaW5kT25lIiwiZ2V0UmVzcG9uc2VEYXRhQnlJZCIsImZldGNoYWxsZW1haWxzIiwiYWxsZW1haWxzIiwicHJvamVjdGlvbiIsInBhc3N3b3JkIiwibmFtZSIsInNwZWNpZmljaWQiLCJwcm9jZXNzZWRPYmplY3QiLCJzZXRQcm9jZXNzZWRPYmplY3QiLCJleHRyYWN0ZWRPYmplY3QiLCJEZXNjcmlwdGlvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJwb3N0RGF0YSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwicmVxIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQVc7QUFDeEIsc0JBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUVDLHlEQUFPLENBQUNDLEdBQXpDO0FBQUEsY0FDR0YsS0FBSyxD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RUM7QUFBRixNQUFhRCxPQUFuQjtBQUNBLFFBQU07QUFBRU47QUFBRixNQUFpQk8sTUFBdkI7QUFFQSxRQUFNQyxRQUFRLEdBQUcsTUFBTXBCLGdFQUFlLENBQUNZLFVBQUQsQ0FBdEM7QUFDQSxRQUFNUyxPQUFPLEdBQUcsTUFBTUMsbUVBQVUsQ0FBQztBQUFFQyxPQUFHLEVBQUVMLE9BQU8sQ0FBQ0s7QUFBZixHQUFELENBQWhDOztBQUNBLE1BQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1osV0FBTztBQUNMRyxjQUFRLEVBQUU7QUFDUkMsbUJBQVcsRUFBRSxPQURMO0FBRVJDLGlCQUFTLEVBQUU7QUFGSDtBQURMLEtBQVA7QUFNRDs7QUFFRCxTQUFPO0FBQ0xySyxTQUFLLEVBQUU7QUFDTDBKLHFCQUFlLEVBQUUxRSxJQUFJLENBQUNzRixLQUFMLENBQVd0RixJQUFJLENBQUNDLFNBQUwsQ0FBZThFLFFBQWYsQ0FBWDtBQURaO0FBREYsR0FBUDtBQUtELEMsQ0FDRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlUix5RUFBZixFOzs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBLG9DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL215bGlzdGluZ3MvW3NwZWNpZmljaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9teWxpc3RpbmdzL1tzcGVjaWZpY2lkXS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufT5cclxuICAgICAge3Byb3BzLmNvbnRlbnR9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidG5cIjogXCJCdXR0b25fYnRuX18zSXRjM1wiXG59O1xuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Mb2FkaW5nLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRlcn0+XHJcbi8vICAgICAgIDxkaXZcclxuLy8gICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuanVzdGlmeWNvbnRlbnRjZW50ZXJ9ICR7Y2xhc3Nlcy5qaW11cHJpbWFyeWxvYWRpbmd9YH1cclxuLy8gICAgICAgPjwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Mb2FkaW5nLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRlcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuanVzdGlmeWNvbnRlbnRjZW50ZXJ9ICR7Y2xhc3Nlcy5qaW11cHJpbWFyeWxvYWRpbmd9YH1cclxuICAgICAgPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZGVyXCI6IFwiTG9hZGluZ19sb2FkZXJfXzNBSUFtXCIsXG5cdFwiamltdXByaW1hcnlsb2FkaW5nXCI6IFwiTG9hZGluZ19qaW11cHJpbWFyeWxvYWRpbmdfXzFHSElsXCIsXG5cdFwibG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nXCI6IFwiTG9hZGluZ19sb2FkaW5nLWtleXMtYXBwLWxvYWRpbmdfX1lsMHNJXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hbnN3ZXJsaXN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFNpbmdsZUFuc3dlciBmcm9tIFwiLi9zaW5nbGUtYW5zd2VyXCI7XHJcbmZ1bmN0aW9uIEFuc3dlckxpc3QocHJvcHMpIHtcclxuICBjb25zdCB7IGFuc2l0ZW1zIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uc2V9PlxyXG4gICAgICB7YW5zaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPFNpbmdsZUFuc3dlciBrZXk9e2l0ZW0uX2lkfSBkYXRhPXtpdGVtfT48L1NpbmdsZUFuc3dlcj5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuc3dlckxpc3Q7XHJcblxyXG4vKlxyXG5cclxucmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uc2V9PlxyXG4gICAgICB7YW5zaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgPHA+e2l0ZW0uQW5zd2VyfTwvcD5cclxuICAgICAgICAgIDxkaXY+Qnkge2l0ZW0uUG9zdGVySUR9PC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7Ki9cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEFuc3dlckxpc3QgZnJvbSBcIi4vYW5zd2VyLWxpc3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYW5zd2VyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbi8vaHR0cDovL2xvY2FsaG9zdDozMDAwL215bGlzdGluZ3MvNjU0YmMyOTIxZWZjNmMxMDcwNDYxZTEzXHJcbmZ1bmN0aW9uIEFuc3dlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgcG9zdGlkIH0gPSBwcm9wcztcclxuICBjb25zb2xlLmxvZyhwb3N0aWQpO1xyXG4gIGNvbnN0IFtzaG93UmVzcG9uc2UsIHNldFNob3dSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2FkaW5nQ29udGVudCwgc2V0TG9hZGluZ0NvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0cmVzcG9uc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc2hvd1Jlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvXCIgKyBwb3N0aWQpO1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHNldHJlc3BvbnNlKGRhdGEucmVzcG9uc2VzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgYXMgbmVlZGVkXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gT25seSBmZXRjaCBkYXRhIGlmIHNob3dSZXNwb25zZSBpcyB0cnVlIGFuZCByZXNwb25zZXMgYXJlIG5vdCBhbHJlYWR5IGF2YWlsYWJsZVxyXG4gICAgaWYgKHNob3dSZXNwb25zZSAmJiByZXNwb25zZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW3Nob3dSZXNwb25zZV0pO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVSZXNwb25zZUhhbmRsZXIoKSB7XHJcbiAgICBzZXRTaG93UmVzcG9uc2UoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uc2VzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVSZXNwb25zZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb250ZW50PXtzaG93UmVzcG9uc2UgPyBcIkhpZGUgUmVzcG9uc2VzXCIgOiBcIlNob3cgUmVzcG9uc2VzXCJ9XHJcbiAgICAgICAgICA+PC9CdXR0b24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dMb2FkaW5nQ29udGVudCAmJiAoXHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgZ2V0dGluZyByZXNwb25zZXMuLi5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIHtyZXNwb25zZS5sZW5ndGggPT09IDAgJiYgIXNob3dMb2FkaW5nQ29udGVudCAmJiAoXHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gcmVzcG9uc2VzIGhhdmUgYmVlbiByZWNlaXZlZCB5ZXQuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd1Jlc3BvbnNlICYmIDxBbnN3ZXJMaXN0IGFuc2l0ZW1zPXtyZXNwb25zZX0gLz59XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyO1xyXG5cclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICBpZiAoc2hvd1Jlc3BvbnNlKSB7XHJcbi8vICAgICAgIHNldExvYWRpbmdDb250ZW50KHRydWUpO1xyXG4vLyAgICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvXCIgKyBwb3N0aWQpO1xyXG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgICAgICAgc2V0cmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpO1xyXG4vLyAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlcykge1xyXG4vLyAgICAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4vLyAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgYXMgbmVlZGVkXHJcbi8vICAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGZldGNoRGF0YSgpO1xyXG4vLyAgIC8vc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyB9LCBbc2hvd1Jlc3BvbnNlLCBwb3N0aWQsIHNldHJlc3BvbnNlLCBzZXRMb2FkaW5nQ29udGVudF0pO1xyXG5cclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAvL3NldExvYWRpbmdDb250ZW50KHRydWUpO1xyXG4vLyAgIGlmIChzaG93UmVzcG9uc2UpIHtcclxuLy8gICAgIGZldGNoKFwiL2FwaS9hbnN3ZXJzL1wiICsgcG9zdGlkKVxyXG4vLyAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHNldHJlc3BvbnNlKGRhdGEucmVzcG9uc2VzKSk7XHJcbi8vICAgfVxyXG4vLyAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gfSwgW3Nob3dSZXNwb25zZSwgc2V0TG9hZGluZ0NvbnRlbnRdKTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVzcG9uc2VzXCI6IFwiYW5zd2VyX3Jlc3BvbnNlc19fNFhqclNcIixcblx0XCJidXR0b241MlwiOiBcImFuc3dlcl9idXR0b241Ml9fdkdCWTJcIixcblx0XCJidG5kaXZcIjogXCJhbnN3ZXJfYnRuZGl2X18xR09URlwiLFxuXHRcImJ1dHRvbi01MlwiOiBcImFuc3dlcl9idXR0b24tNTJfX19iREw5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZXNwb25zZVwiOiBcImFuc3dlcmxpc3RfcmVzcG9uc2VfX1prSldEXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3NpbmdsZWFucy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbnN3ZXJGb3JtIGZyb20gXCIuLi9vdmVybGF5Rm9ybS9BbnN3ZXJGb3JtXCI7XHJcblxyXG5jb25zdCBTaW5nbGVBbnN3ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IFBvc3RlcklEIH0gPSBwcm9wcy5kYXRhO1xyXG4gIC8vX2lkLCBBbnN3ZXIsXHJcbiAgY29uc3QgW3Nob3dBRm9ybSwgc2V0SXNTaG93QUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaG93TW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dBRm9ybSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpZGVNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd0FGb3JtKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua3BhcmF9PlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9e3Nob3dNb2RlSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgQ2hlY2tcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgJm5ic3A7IFJlc3BvbnNlIGJ5IHRoaXMgdXNlci5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uZGVyfT5cclxuICAgICAgICA8cD5CeSB7UG9zdGVySUR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dBRm9ybSAmJiA8QW5zd2VyRm9ybSBvbmNsb3NlPXtoaWRlTW9kZUhhbmRsZXJ9IGRhdGE9e3Byb3BzLmRhdGF9IC8+fVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQW5zd2VyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwic2luZ2xlYW5zX2xpc3RfX3hvc1d1XCIsXG5cdFwibGlua3BhcmFcIjogXCJzaW5nbGVhbnNfbGlua3BhcmFfX1RHMG9xXCIsXG5cdFwibGlua1wiOiBcInNpbmdsZWFuc19saW5rX18zUGJwWFwiLFxuXHRcImJ1dHRvbjUyXCI6IFwic2luZ2xlYW5zX2J1dHRvbjUyX18xOFV6ZlwiLFxuXHRcImJ0bmRpdlwiOiBcInNpbmdsZWFuc19idG5kaXZfXzJoSDRfXCIsXG5cdFwiYnV0dG9uLTUyXCI6IFwic2luZ2xlYW5zX2J1dHRvbi01Ml9fWUJKVXlcIixcblx0XCJyZXNwb25kZXJcIjogXCJzaW5nbGVhbnNfcmVzcG9uZGVyX18zLXJHQlwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBFdmVudENvbnRlbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudENvbnRlbnQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50XCI6IFwiZXZlbnQtY29udGVudF9jb250ZW50X18zMEZ4cFwiXG59O1xuIiwiaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSBcIi4vbG9naXN0aWNzLWl0ZW1cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVG9kYXlPdXRsaW5lLCBHcmlkT3V0bGluZSwgTWVudU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaW9uaWNvbnNcIjtcbi8vaHR0cHM6Ly9yZWFjdC1pb25pY29ucy5uZXRsaWZ5LmFwcC9cbmZ1bmN0aW9uIEV2ZW50TG9naXN0aWNzKHByb3BzKSB7XG4gIGNvbnN0IHsgVHlwZSwgQ2F0ZWdvcnksIFRpdGxlLCBEYXRlLCBSZWR1Y2VkSW1nIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e1RpdGxlfSAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi40LjIvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e1JlZHVjZWRJbWd9IGFsdD17VGl0bGV9IHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8VG9kYXlPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8dGltZT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVyfT4ge0RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8TWVudU91dGxpbmUgY29sb3I9e1wiIzAwMDAwXCJ9IGJlYXQgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2PntUeXBlfTwvZGl2PlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8R3JpZE91dGxpbmUgY29sb3I9e1wiIzAwMDAwXCJ9IGJlYXQgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2PntDYXRlZ29yeX08L2Rpdj5cbiAgICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMb2dpc3RpY3M7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpc3RpY3NcIjogXCJldmVudC1sb2dpc3RpY3NfbG9naXN0aWNzX18yUVFrd1wiLFxuXHRcImltYWdlXCI6IFwiZXZlbnQtbG9naXN0aWNzX2ltYWdlX18xOHVWWVwiLFxuXHRcImxpc3RcIjogXCJldmVudC1sb2dpc3RpY3NfbGlzdF9fMUJLUFBcIixcblx0XCJzcGFuZXJcIjogXCJldmVudC1sb2dpc3RpY3Nfc3BhbmVyX18zaXp0ZVwiLFxuXHRcImljb25cIjogXCJldmVudC1sb2dpc3RpY3NfaWNvbl9fMmFtS3JcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBFdmVudFN1bW1hcnkocHJvcHMpIHtcbiAgY29uc3QgeyBUaXRsZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICA8aDE+e1RpdGxlfTwvaDE+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN1bW1hcnk7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdW1tYXJ5XCI6IFwiZXZlbnQtc3VtbWFyeV9zdW1tYXJ5X18yYVFKa1wiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbG9naXN0aWNzLWl0ZW0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBMb2dpc3RpY3NJdGVtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2lzdGljc0l0ZW07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwibG9naXN0aWNzLWl0ZW1faXRlbV9fOHJ3Z2JcIixcblx0XCJpY29uXCI6IFwibG9naXN0aWNzLWl0ZW1faWNvbl9fb2ZITllcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9BRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBEZXRhaWxGb3JtIGZyb20gXCIuL0RldGFpbEZvcm1cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEFGb3JtKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgX2lkLFxyXG4gICAgQW5zd2VyLFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIFN1Ym1pdHRlZERhdGVUaW1lLFxyXG4gIH0gPSBwcm9wcy5kYXRhMjtcclxuICBjb25zdCBbaXNZZXMsIHNldElzWWVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB5ZXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNZZXModHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoXHJcbiAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUG9zdElELFxyXG4gICAgUG9zdGVySUQsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIGNvbWJpbmVkRGF0ZVRpbWVcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvc2VuZFJlc3BvbnNlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICAgIFBvc3RJRCxcclxuICAgICAgICBQb3N0ZXJJRCxcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICAgIEFuc3dlcixcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgY29tYmluZWREYXRlVGltZSA9IGAke2Zvcm1hdHRlZERhdGV9ICR7Zm9ybWF0dGVkVGltZX1gO1xyXG5cclxuICBjb25zdCBub0hhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBlbnRlcmVkSW5mb3JtYXRpb25zID0gXCJSZXNwb25kZXIgaGFzIG51bGxpZmllZCB0aGUgdmFsaWRhdGlvbi5cIjtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZShcclxuICAgICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICBQb3N0SUQsXHJcbiAgICAgIFBvc3RlcklELFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgQW5zd2VyXHJcbiAgICApO1xyXG4gICAgaWYgKHByb3BzLm9uY2FuY2xlKSB7XHJcbiAgICAgIHByb3BzLm9uY2FuY2xlKCk7XHJcbiAgICB9XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0+U3VibWl0aW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAge2lzWWVzID8gKFxyXG4gICAgICAgIDxEZXRhaWxGb3JtIGNsb3NlPXtwcm9wcy5vbmNhbmNsZX0gc2VuZGVyRGF0YT17cHJvcHMuZGF0YTJ9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2ZXJ9PlxyXG4gICAgICAgICAgPGgzPntTdWJtaXR0ZWREYXRlVGltZX08L2gzPlxyXG4gICAgICAgICAgPGgyPlF1ZXN0aW9uPzwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGFyYTF9PntRdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICA8aDI+QW5zd2VyPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhMX0+e0Fuc3dlcn08L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2ZXJ9PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjkwfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3llc0hhbmRsZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBZZXNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uOTB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17bm9IYW5kbGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uOTB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25jYW5jbGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBRm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGl2ZXJcIjogXCJBRm9ybV9kaXZlcl9fMUszNFVcIixcblx0XCJwYXJhMVwiOiBcIkFGb3JtX3BhcmExX18xeWtVRlwiLFxuXHRcImJ0bmRpdmVyXCI6IFwiQUZvcm1fYnRuZGl2ZXJfXzNGTVdIXCIsXG5cdFwiYnV0dG9uOTBcIjogXCJBRm9ybV9idXR0b245MF9fM2pySEVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFGb3JtIGZyb20gXCIuL0FGb3JtXCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0Fuc3dlckZvcm0ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQW5zd2VyRm9ybSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICA8QUZvcm0gb25jYW5jbGU9e3Byb3BzLm9uY2xvc2V9IGRhdGEyPXtwcm9wcy5kYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQW5zd2Vyc1wiKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJGb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYWNrZXJcIjogXCJBbnN3ZXJGb3JtX2JhY2tlcl9fZmdnSlBcIixcblx0XCJmb3JtQ29udGFpbmVyXCI6IFwiQW5zd2VyRm9ybV9mb3JtQ29udGFpbmVyX18zUTJXY1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0RldGFpbEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEZXRhaWxGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBJdGVtVGl0bGUsIFBvc3RJRCwgUG9zdGVySUQsIFF1ZXN0aW9uLCBBbnN3ZXIgfSA9IHByb3BzLnNlbmRlckRhdGE7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgUmVzcG9uc2VEYXRhID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKFxyXG4gICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgQW5zd2VyXHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL3NlbmRSZXNwb25zZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgICBQb3N0SUQsXHJcbiAgICAgICAgUG9zdGVySUQsXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgICBBbnN3ZXIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGNvbWJpbmVkRGF0ZVRpbWUgPSBgJHtmb3JtYXR0ZWREYXRlfSAke2Zvcm1hdHRlZFRpbWV9YDtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gSW5mb3N1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBlbnRlcmVkSW5mb3JtYXRpb25zID0gUmVzcG9uc2VEYXRhLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2UoXHJcbiAgICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgUG9zdElELFxyXG4gICAgICBQb3N0ZXJJRCxcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICAgIEFuc3dlclxyXG4gICAgKTtcclxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PlN1Ym1pdGluZy4uLjwvZGl2PjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtJbmZvc3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RJbmZvcm1hdGlvbnNcIj5FbnRlciBDb250YWN0IEluZm9ybWF0aW9uczwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9ybWF0aW9uc1wiXHJcbiAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICBjb2xzPVwiNDBcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyIEdtYWlsIG9yIGNlbGwgbnVtYmVyLlwiXHJcbiAgICAgICAgICByZWY9e1Jlc3BvbnNlRGF0YX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnR3b2J0bn0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX0gdHlwZT1cInN1Ym1pdFwiIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbEZvcm07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1cIjogXCJEZXRhaWxGb3JtX2Zvcm1fX3d3WVZoXCIsXG5cdFwiYnV0dG9uODlcIjogXCJEZXRhaWxGb3JtX2J1dHRvbjg5X196RHQ1SlwiLFxuXHRcInR3b2J0blwiOiBcIkRldGFpbEZvcm1fdHdvYnRuX19PZ0N2T1wiXG59O1xuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbmxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY2xpZW50U2V0KSB7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIpO1xuICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4gIH1cblxuICBsZXQgY2xpZW50O1xuXG4gIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS5wc2lrMmFlLm1vbmdvZGIubmV0LyR7cHJvY2Vzcy5lbnYubW9uZ29kYl9kYXRhYmFzZX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YDtcblxuICB0cnkge1xuICAgIGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoY29ubmVjdGlvblN0cmluZywge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4gICAgICBwb29sU2l6ZTogMTAsIC8vIEFkanVzdCB0aGlzIGJhc2VkIG9uIHlvdXIgYXBwbGljYXRpb24ncyBuZWVkc1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTpcIiwgZXJyb3IpO1xuICB9XG5cbiAgLy8gSGFuZGxlIHRoZSAnY2xvc2UnIGV2ZW50IGZvciBwb3RlbnRpYWwgcmVjb25uZWN0aW9uXG4gIGNsaWVudC5vbihcImNsb3NlXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi5cIik7XG4gICAgLy8gSW1wbGVtZW50IHJlY29ubmVjdGlvbiBsb2dpYyBoZXJlLCBzdWNoIGFzIGNhbGxpbmcgY29ubmVjdFRvRGF0YWJhc2UoKVxuICAgIGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgLy9jbGllbnQuY29ubmVjdCgpO1xuICB9KTtcblxuICBpZiAoIWNsaWVudFNldCkge1xuICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbiAgICBjbGllbnRTZXQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4gIH1cblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhQnlJZChpZCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKTtcbiAgY29uc3QgcG9zdG9iamVjdElkID0gbmV3IE9iamVjdElkKGlkKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgIF9pZDogcG9zdG9iamVjdElkLFxuICB9KTtcblxuICByZXR1cm4gdXNlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YUJ5SWQoaWQpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwiUUFuc3dlcnNcIik7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvblxuICAgIC5maW5kKHtcbiAgICAgIFBvc3RJRDogaWQsXG4gICAgfSlcbiAgICAudG9BcnJheSgpO1xuICByZXR1cm4gdXNlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoYWxsZW1haWxzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcblxuICBjb25zdCBhbGxlbWFpbHMgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb25cbiAgICAuZmluZCh7fSwgeyBwcm9qZWN0aW9uOiB7IHBhc3N3b3JkOiAwLCBuYW1lOiAwLCBfaWQ6IDAgfSB9KVxuICAgIC50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGFsbGVtYWlscztcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2ZpbGVEYXRhKHVzZXJFbWFpbCkge1xuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuLy8gICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XG4vLyAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZShcbi8vICAgICB7IGVtYWlsOiB1c2VyRW1haWwgfSxcbi8vICAgICB7IHByb2plY3Rpb246IHsgcGFzc3dvcmQ6IDAgfSB9XG4vLyAgICk7XG5cbi8vICAgcmV0dXJuIHVzZXI7XG4vLyB9XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG4vLyBsZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbi8vIGxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuLy8gICBpZiAoY2xpZW50U2V0KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuLy8gICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4vLyAgIH1cblxuLy8gICBsZXQgY2xpZW50O1xuXG4vLyAgIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS5wc2lrMmFlLm1vbmdvZGIubmV0LyR7cHJvY2Vzcy5lbnYubW9uZ29kYl9kYXRhYmFzZX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YDtcblxuLy8gICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcsIHtcbi8vICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuLy8gICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuLy8gICB9KTtcblxuLy8gICBpZiAoIWNsaWVudFNldCkge1xuLy8gICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbi8vICAgICBjbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gY2xpZW50O1xuLy8gfVxuXG4vKlxuXG5cbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbmxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY2xpZW50U2V0KSB7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4gIH1cblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuICAgIHtcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgIH1cbiAgKTtcblxuICBpZiAoIWNsaWVudFNldCkge1xuICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbiAgICBjbGllbnRTZXQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4gIH1cblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5cbiovXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeUVtYWlsKGVtYWlsKSB7XG4vLyAgIC8vY29uc29sZS5sb2coZW1haWwpO1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpO1xuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyAgIHJldHVybiBhbGxQb3N0cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhQnlJZChpZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7IC8vd1xuXG4vLyAgIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG4vLyAgIC8vY29uc29sZS5sb2cocG9zdG9iamVjdElkKTtcblxuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50Ll9pZCA9PT0gcG9zdG9iamVjdElkKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbmQoXG4vLyAgICAgKGV2ZW50KSA9PiBldmVudC5faWQudG9TdHJpbmcoKSA9PT0gcG9zdG9iamVjdElkLnRvU3RyaW5nKClcbi8vICAgKTtcbi8vIH1cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4vLyAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgcmV0dXJuIGRhdGEuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuUG9zdElEID09PSBpZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpOyBnb29kXG4vLyAgIGNvbnNvbGUubG9nKG9iamVjdElkKTtcbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG4vLyBpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuXG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG4vLyBjb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbi8vIGNsYXNzIERhdGFiYXNlIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgaWYgKCFEYXRhYmFzZS5pbnN0YW5jZSkge1xuLy8gICAgICAgdGhpcy5jbGllbnQgPSBudWxsO1xuLy8gICAgICAgdGhpcy5jbGllbnRTZXQgPSBmYWxzZTtcbi8vICAgICAgIERhdGFiYXNlLmluc3RhbmNlID0gdGhpcztcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gRGF0YWJhc2UuaW5zdGFuY2U7XG4vLyAgIH1cblxuLy8gICBhc3luYyBjb25uZWN0KCkge1xuLy8gICAgIGlmICh0aGlzLmNsaWVudFNldCkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIpO1xuLy8gICAgICAgcmV0dXJuIHRoaXMuY2xpZW50O1xuLy8gICAgIH1cblxuLy8gICAgIHRoaXMuY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbi8vICAgICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuLy8gICAgICAge1xuLy8gICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbi8vICAgICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4vLyAgICAgICB9XG4vLyAgICAgKTtcblxuLy8gICAgIGlmICghdGhpcy5jbGllbnRTZXQpIHtcbi8vICAgICAgIHRoaXMuY2xpZW50U2V0ID0gdHJ1ZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHRoaXMuY2xpZW50O1xuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XG4vLyBleHBvcnQgY29uc3QgY29ubmVjdFRvRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgcmV0dXJuIGF3YWl0IGRhdGFiYXNlLmNvbm5lY3QoKTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAvL2NvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTpcIiwgZXJyb3IpO1xuLy8gICAgIHRocm93IGVycm9yO1xuLy8gICB9XG4vLyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zcGVjaWZpY2lkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeVwiO1xyXG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3NcIjtcclxuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBBbnN3ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYW5zd2Vycy9hbnN3ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YUJ5SWQgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcblxyXG5mdW5jdGlvbiBzcGVjaWZpY2lkKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvY2Vzc2VkT2JqZWN0LCBzZXRQcm9jZXNzZWRPYmplY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZXh0cmFjdGVkT2JqZWN0IH0gPSBwcm9wcztcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZXh0cmFjdGVkT2JqZWN0ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc2V0UHJvY2Vzc2VkT2JqZWN0KGV4dHJhY3RlZE9iamVjdCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW3Byb3BzLmV4dHJhY3RlZE9iamVjdF0pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nIHx8ICFwcm9jZXNzZWRPYmplY3QpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV2ZW50ID0gcHJvY2Vzc2VkT2JqZWN0O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2V2ZW50LlRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXZlbnQuRGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEV2ZW50U3VtbWFyeSBUaXRsZT17ZXZlbnQuVGl0bGV9IC8+XHJcblxyXG4gICAgICA8RXZlbnRMb2dpc3RpY3NcclxuICAgICAgICBEYXRlPXtldmVudC5EYXRlfVxyXG4gICAgICAgIFJlZHVjZWRJbWc9e2V2ZW50LlJlZHVjZWRJbWd9XHJcbiAgICAgICAgVGl0bGU9e2V2ZW50LlRpdGxlfVxyXG4gICAgICAgIFR5cGU9e2V2ZW50LlR5cGV9XHJcbiAgICAgICAgQ2F0ZWdvcnk9e2V2ZW50LkNhdGVnb3J5fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEV2ZW50Q29udGVudD5cclxuICAgICAgICA8cD57ZXZlbnQuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0V2ZW50Q29udGVudD5cclxuXHJcbiAgICAgIDxBbnN3ZXIgcG9zdGlkPXtldmVudC5faWR9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBzcGVjaWZpY2lkIH0gPSBwYXJhbXM7XHJcblxyXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGFCeUlkKHNwZWNpZmljaWQpO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2F1dGhcIixcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBleHRyYWN0ZWRPYmplY3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpKSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XHJcblxyXG4vLyAgIGlmICghc2Vzc2lvbikge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgcmVkaXJlY3Q6IHtcclxuLy8gICAgICAgICBkZXN0aW5hdGlvbjogXCIvYXV0aFwiLFxyXG4vLyAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHNlc3Npb24gfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGVjaWZpY2lkO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b241MlwiOiBcInNwZWNpZmljaWRfYnV0dG9uNTJfX2FET0tFXCIsXG5cdFwiYnRuZGl2XCI6IFwic3BlY2lmaWNpZF9idG5kaXZfXzJxbnVRXCIsXG5cdFwiYnV0dG9uLTUyXCI6IFwic3BlY2lmaWNpZF9idXR0b24tNTJfXzJUZ3FMXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pb25pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==