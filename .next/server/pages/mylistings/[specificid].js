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



function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.justifycontentcenter} ${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jimuprimaryloading}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
      children: "Please be patient..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
	"text": "Loading_text__2auma",
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
            style: {
              fontSize: "2rem"
            },
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
            style: {
              fontSize: "2rem"
            },
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
            style: {
              fontSize: "2rem"
            },
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
	"icon": "event-logistics_icon__2amKr",
	"timer": "event-logistics_timer__2xXoQ"
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
	"borderdiv": "AForm_borderdiv__254Sc",
	"button89": "AForm_button89__29k00",
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
	"button89": "DetailForm_button89__zDt5J"
};


/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase, getAllPosts, getPostDataById, getResponseDataById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDataById", function() { return getPostDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponseDataById", function() { return getResponseDataById; });
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
} // import { MongoClient } from "mongodb";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci1saXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5zd2Vycy9hbnN3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5zd2Vycy9hbnN3ZXJsaXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXJzL3NpbmdsZS1hbnN3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXJzL3NpbmdsZWFucy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvbG9naXN0aWNzLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9BRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL0FGb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9BbnN3ZXJGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vQW5zd2VyRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vRGV0YWlsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL0RldGFpbEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbXlsaXN0aW5ncy9zcGVjaWZpY2lkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlvbmljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJjbGFzc2VzIiwiYnRuIiwiY29udGVudCIsIkxvYWRpbmciLCJsb2FkZXIiLCJqdXN0aWZ5Y29udGVudGNlbnRlciIsImppbXVwcmltYXJ5bG9hZGluZyIsInRleHQiLCJBbnN3ZXJMaXN0IiwiYW5zaXRlbXMiLCJyZXNwb25zZSIsIm1hcCIsIml0ZW0iLCJfaWQiLCJBbnN3ZXIiLCJwb3N0aWQiLCJjb25zb2xlIiwibG9nIiwic2hvd1Jlc3BvbnNlIiwic2V0U2hvd1Jlc3BvbnNlIiwidXNlU3RhdGUiLCJzaG93TG9hZGluZ0NvbnRlbnQiLCJzZXRMb2FkaW5nQ29udGVudCIsInNldHJlc3BvbnNlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInJlc3BvbnNlcyIsImVycm9yIiwibGVuZ3RoIiwidG9nZ2xlUmVzcG9uc2VIYW5kbGVyIiwicHJldlN0YXR1cyIsImJ0bmRpdiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsIlNpbmdsZUFuc3dlciIsIlBvc3RlcklEIiwic2hvd0FGb3JtIiwic2V0SXNTaG93QUZvcm0iLCJzaG93TW9kZUhhbmRsZXIiLCJoaWRlTW9kZUhhbmRsZXIiLCJsaXN0IiwibGlua3BhcmEiLCJsaW5rIiwicmVzcG9uZGVyIiwiRXZlbnRDb250ZW50IiwiY2hpbGRyZW4iLCJFdmVudExvZ2lzdGljcyIsIlR5cGUiLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJsb2dpc3RpY3MiLCJpbWFnZSIsInNwYW5lciIsInRpbWVyIiwiRXZlbnRTdW1tYXJ5Iiwic3VtbWFyeSIsIkxvZ2lzdGljc0l0ZW0iLCJBRm9ybSIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlF1ZXN0aW9uIiwiU3VibWl0dGVkRGF0ZVRpbWUiLCJkYXRhMiIsImlzWWVzIiwic2V0SXNZZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ5ZXNIYW5kbGVyIiwic2VuZE1lc3NhZ2UiLCJlbnRlcmVkSW5mb3JtYXRpb25zIiwiY29tYmluZWREYXRlVGltZSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm9rIiwiY3VycmVudERhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsIm5vSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJvbmNhbmNsZSIsImRpdmVyIiwicGFyYTEiLCJidG5kaXZlciIsImJ1dHRvbjkwIiwiQW5zd2VyRm9ybSIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiYmFja2VyIiwiZm9ybUNvbnRhaW5lciIsIm9uY2xvc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRGV0YWlsRm9ybSIsInNlbmRlckRhdGEiLCJSZXNwb25zZURhdGEiLCJ1c2VSZWYiLCJJbmZvc3VibWl0SGFuZGxlciIsImN1cnJlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInJlc2V0IiwiZm9ybSIsImJ1dHRvbjg5IiwiY2xvc2UiLCJPYmplY3RJZCIsInJlcXVpcmUiLCJjYWNoZWRDbGllbnQiLCJjbGllbnRTZXQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY29ubmVjdFRpbWVvdXRNUyIsInBvb2xTaXplIiwib24iLCJnZXRBbGxQb3N0cyIsImRiIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiZ2V0UG9zdERhdGFCeUlkIiwiaWQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJwb3N0b2JqZWN0SWQiLCJ1c2VyIiwiZmluZE9uZSIsImdldFJlc3BvbnNlRGF0YUJ5SWQiLCJzcGVjaWZpY2lkIiwicHJvY2Vzc2VkT2JqZWN0Iiwic2V0UHJvY2Vzc2VkT2JqZWN0IiwiZXh0cmFjdGVkT2JqZWN0IiwiRGVzY3JpcHRpb24iLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwicG9zdERhdGEiLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInJlcSIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLHNCQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFQyx5REFBTyxDQUFDQyxHQUF6QztBQUFBLGNBQ0dGLEtBQUssQ0FBQ0c7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFlSixxRUFBZixFOzs7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QU87QUFDTGhLLFNBQUssRUFBRTtBQUNMcUoscUJBQWUsRUFBRXBFLElBQUksQ0FBQ2dGLEtBQUwsQ0FBV2hGLElBQUksQ0FBQ0MsU0FBTCxDQUFld0UsUUFBZixDQUFYO0FBRFo7QUFERixHQUFQO0FBS0QsQyxDQUNEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWVSLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL215bGlzdGluZ3MvW3NwZWNpZmljaWRdLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59PlxyXG4gICAgICB7cHJvcHMuY29udGVudH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ0blwiOiBcIkJ1dHRvbl9idG5fXzNJdGMzXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xvYWRpbmcubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5qdXN0aWZ5Y29udGVudGNlbnRlcn0gJHtjbGFzc2VzLmppbXVwcmltYXJ5bG9hZGluZ31gfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkZXJcIjogXCJMb2FkaW5nX2xvYWRlcl9fM0FJQW1cIixcblx0XCJ0ZXh0XCI6IFwiTG9hZGluZ190ZXh0X18yYXVtYVwiLFxuXHRcImppbXVwcmltYXJ5bG9hZGluZ1wiOiBcIkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbFwiLFxuXHRcImxvYWRpbmcta2V5cy1hcHAtbG9hZGluZ1wiOiBcIkxvYWRpbmdfbG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nX19ZbDBzSVwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYW5zd2VybGlzdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBTaW5nbGVBbnN3ZXIgZnJvbSBcIi4vc2luZ2xlLWFuc3dlclwiO1xyXG5mdW5jdGlvbiBBbnN3ZXJMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBhbnNpdGVtcyB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3BvbnNlfT5cclxuICAgICAge2Fuc2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgIDxTaW5nbGVBbnN3ZXIga2V5PXtpdGVtLl9pZH0gZGF0YT17aXRlbX0+PC9TaW5nbGVBbnN3ZXI+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXJMaXN0O1xyXG5cclxuLypcclxuXHJcbnJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3BvbnNlfT5cclxuICAgICAge2Fuc2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgIDxwPntpdGVtLkFuc3dlcn08L3A+XHJcbiAgICAgICAgICA8ZGl2PkJ5IHtpdGVtLlBvc3RlcklEfTwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApOyovXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBBbnN3ZXJMaXN0IGZyb20gXCIuL2Fuc3dlci1saXN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2Fuc3dlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1VJL0J1dHRvblwiO1xyXG4vL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9teWxpc3RpbmdzLzY1NGJjMjkyMWVmYzZjMTA3MDQ2MWUxM1xyXG5mdW5jdGlvbiBBbnN3ZXIocHJvcHMpIHtcclxuICBjb25zdCB7IHBvc3RpZCB9ID0gcHJvcHM7XHJcbiAgY29uc29sZS5sb2cocG9zdGlkKTtcclxuICBjb25zdCBbc2hvd1Jlc3BvbnNlLCBzZXRTaG93UmVzcG9uc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93TG9hZGluZ0NvbnRlbnQsIHNldExvYWRpbmdDb250ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldHJlc3BvbnNlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHNob3dSZXNwb25zZSkge1xyXG4gICAgICAgIHNldExvYWRpbmdDb250ZW50KHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL1wiICsgcG9zdGlkKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBzZXRyZXNwb25zZShkYXRhLnJlc3BvbnNlcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGFzIG5lZWRlZFxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIE9ubHkgZmV0Y2ggZGF0YSBpZiBzaG93UmVzcG9uc2UgaXMgdHJ1ZSBhbmQgcmVzcG9uc2VzIGFyZSBub3QgYWxyZWFkeSBhdmFpbGFibGVcclxuICAgIGlmIChzaG93UmVzcG9uc2UgJiYgcmVzcG9uc2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtzaG93UmVzcG9uc2VdKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlUmVzcG9uc2VIYW5kbGVyKCkge1xyXG4gICAgc2V0U2hvd1Jlc3BvbnNlKChwcmV2U3RhdHVzKSA9PiAhcHJldlN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3BvbnNlc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdn0+XHJcbiAgICAgICAgPGEgb25DbGljaz17dG9nZ2xlUmVzcG9uc2VIYW5kbGVyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29udGVudD17c2hvd1Jlc3BvbnNlID8gXCJIaWRlIFJlc3BvbnNlc1wiIDogXCJTaG93IFJlc3BvbnNlc1wifVxyXG4gICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93TG9hZGluZ0NvbnRlbnQgJiYgKFxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIGdldHRpbmcgcmVzcG9uc2VzLi4uXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICB7cmVzcG9uc2UubGVuZ3RoID09PSAwICYmICFzaG93TG9hZGluZ0NvbnRlbnQgJiYgKFxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vIHJlc3BvbnNlcyBoYXZlIGJlZW4gcmVjZWl2ZWQgeWV0LlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dSZXNwb25zZSAmJiA8QW5zd2VyTGlzdCBhbnNpdGVtcz17cmVzcG9uc2V9IC8+fVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuc3dlcjtcclxuXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgaWYgKHNob3dSZXNwb25zZSkge1xyXG4vLyAgICAgICBzZXRMb2FkaW5nQ29udGVudCh0cnVlKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL1wiICsgcG9zdGlkKTtcclxuLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgICAgIHNldHJlc3BvbnNlKGRhdGEucmVzcG9uc2VzKTtcclxuLy8gICAgICAgICBpZiAoZGF0YS5yZXNwb25zZXMpIHtcclxuLy8gICAgICAgICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuLy8gICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGFzIG5lZWRlZFxyXG4vLyAgICAgICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBmZXRjaERhdGEoKTtcclxuLy8gICAvL3NldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gfSwgW3Nob3dSZXNwb25zZSwgcG9zdGlkLCBzZXRyZXNwb25zZSwgc2V0TG9hZGluZ0NvbnRlbnRdKTtcclxuXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgLy9zZXRMb2FkaW5nQ29udGVudCh0cnVlKTtcclxuLy8gICBpZiAoc2hvd1Jlc3BvbnNlKSB7XHJcbi8vICAgICBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZClcclxuLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi8vICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRyZXNwb25zZShkYXRhLnJlc3BvbnNlcykpO1xyXG4vLyAgIH1cclxuLy8gICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbi8vIH0sIFtzaG93UmVzcG9uc2UsIHNldExvYWRpbmdDb250ZW50XSk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlc3BvbnNlc1wiOiBcImFuc3dlcl9yZXNwb25zZXNfXzRYanJTXCIsXG5cdFwiYnV0dG9uNTJcIjogXCJhbnN3ZXJfYnV0dG9uNTJfX3ZHQlkyXCIsXG5cdFwiYnRuZGl2XCI6IFwiYW5zd2VyX2J0bmRpdl9fMUdPVEZcIixcblx0XCJidXR0b24tNTJcIjogXCJhbnN3ZXJfYnV0dG9uLTUyX19fYkRMOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVzcG9uc2VcIjogXCJhbnN3ZXJsaXN0X3Jlc3BvbnNlX19aa0pXRFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zaW5nbGVhbnMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQW5zd2VyRm9ybSBmcm9tIFwiLi4vb3ZlcmxheUZvcm0vQW5zd2VyRm9ybVwiO1xyXG5cclxuY29uc3QgU2luZ2xlQW5zd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBQb3N0ZXJJRCB9ID0gcHJvcHMuZGF0YTtcclxuICAvL19pZCwgQW5zd2VyLFxyXG4gIGNvbnN0IFtzaG93QUZvcm0sIHNldElzU2hvd0FGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93QUZvcm0odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoaWRlTW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dBRm9ybShmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtwYXJhfT5cclxuICAgICAgICA8YSBvbkNsaWNrPXtzaG93TW9kZUhhbmRsZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgIENoZWNrXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgICZuYnNwOyBSZXNwb25zZSBieSB0aGlzIHVzZXIuXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3BvbmRlcn0+XHJcbiAgICAgICAgPHA+Qnkge1Bvc3RlcklEfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93QUZvcm0gJiYgPEFuc3dlckZvcm0gb25jbG9zZT17aGlkZU1vZGVIYW5kbGVyfSBkYXRhPXtwcm9wcy5kYXRhfSAvPn1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUFuc3dlcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcInNpbmdsZWFuc19saXN0X194b3NXdVwiLFxuXHRcImxpbmtwYXJhXCI6IFwic2luZ2xlYW5zX2xpbmtwYXJhX19URzBvcVwiLFxuXHRcImxpbmtcIjogXCJzaW5nbGVhbnNfbGlua19fM1BicFhcIixcblx0XCJidXR0b241MlwiOiBcInNpbmdsZWFuc19idXR0b241Ml9fMThVemZcIixcblx0XCJidG5kaXZcIjogXCJzaW5nbGVhbnNfYnRuZGl2X18yaEg0X1wiLFxuXHRcImJ1dHRvbi01MlwiOiBcInNpbmdsZWFuc19idXR0b24tNTJfX1lCSlV5XCIsXG5cdFwicmVzcG9uZGVyXCI6IFwic2luZ2xlYW5zX3Jlc3BvbmRlcl9fMy1yR0JcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtY29udGVudC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRDb250ZW50KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb250ZW50O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudFwiOiBcImV2ZW50LWNvbnRlbnRfY29udGVudF9fMzBGeHBcIlxufTtcbiIsImltcG9ydCBMb2dpc3RpY3NJdGVtIGZyb20gXCIuL2xvZ2lzdGljcy1pdGVtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9ldmVudC1sb2dpc3RpY3MubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRvZGF5T3V0bGluZSwgR3JpZE91dGxpbmUsIE1lbnVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWlvbmljb25zXCI7XG4vL2h0dHBzOi8vcmVhY3QtaW9uaWNvbnMubmV0bGlmeS5hcHAvXG5mdW5jdGlvbiBFdmVudExvZ2lzdGljcyhwcm9wcykge1xuICBjb25zdCB7IFR5cGUsIENhdGVnb3J5LCBUaXRsZSwgRGF0ZSwgUmVkdWNlZEltZyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntUaXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtUaXRsZX0gLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNC4yL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgID48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubG9naXN0aWNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtSZWR1Y2VkSW1nfSBhbHQ9e1RpdGxlfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgICAgPExvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT5cbiAgICAgICAgICAgICAgPFRvZGF5T3V0bGluZSBjb2xvcj17XCIjMDAwMDBcIn0gYmVhdCBoZWlnaHQ9XCIyNXB4XCIgd2lkdGg9XCIyNXB4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHRpbWUgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiIH19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGltZXJ9PiB7RGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgPC9Mb2dpc3RpY3NJdGVtPlxuICAgICAgICAgIDxMb2dpc3RpY3NJdGVtPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+XG4gICAgICAgICAgICAgIDxNZW51T3V0bGluZSBjb2xvcj17XCIjMDAwMDBcIn0gYmVhdCBoZWlnaHQ9XCIyNXB4XCIgd2lkdGg9XCIyNXB4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiIH19PntUeXBlfTwvZGl2PlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8R3JpZE91dGxpbmUgY29sb3I9e1wiIzAwMDAwXCJ9IGJlYXQgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiB9fT57Q2F0ZWdvcnl9PC9kaXY+XG4gICAgICAgICAgPC9Mb2dpc3RpY3NJdGVtPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TG9naXN0aWNzO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naXN0aWNzXCI6IFwiZXZlbnQtbG9naXN0aWNzX2xvZ2lzdGljc19fMlFRa3dcIixcblx0XCJpbWFnZVwiOiBcImV2ZW50LWxvZ2lzdGljc19pbWFnZV9fMTh1VllcIixcblx0XCJsaXN0XCI6IFwiZXZlbnQtbG9naXN0aWNzX2xpc3RfXzFCS1BQXCIsXG5cdFwic3BhbmVyXCI6IFwiZXZlbnQtbG9naXN0aWNzX3NwYW5lcl9fM2l6dGVcIixcblx0XCJpY29uXCI6IFwiZXZlbnQtbG9naXN0aWNzX2ljb25fXzJhbUtyXCIsXG5cdFwidGltZXJcIjogXCJldmVudC1sb2dpc3RpY3NfdGltZXJfXzJ4WG9RXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9ldmVudC1zdW1tYXJ5Lm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gRXZlbnRTdW1tYXJ5KHByb3BzKSB7XG4gIGNvbnN0IHsgVGl0bGUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgPGgxPntUaXRsZX08L2gxPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdW1tYXJ5O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3VtbWFyeVwiOiBcImV2ZW50LXN1bW1hcnlfc3VtbWFyeV9fMmFRSmtcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTG9naXN0aWNzSXRlbShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cbiAgICA8L2xpPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpc3RpY3NJdGVtO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcImxvZ2lzdGljcy1pdGVtX2l0ZW1fXzhyd2diXCIsXG5cdFwiaWNvblwiOiBcImxvZ2lzdGljcy1pdGVtX2ljb25fX29mSE5ZXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQUZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgRGV0YWlsRm9ybSBmcm9tIFwiLi9EZXRhaWxGb3JtXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIF9pZCxcclxuICAgIEFuc3dlcixcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBTdWJtaXR0ZWREYXRlVGltZSxcclxuICB9ID0gcHJvcHMuZGF0YTI7XHJcbiAgY29uc3QgW2lzWWVzLCBzZXRJc1llc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeWVzSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzWWVzKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKFxyXG4gICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBjb21iaW5lZERhdGVUaW1lXHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL3NlbmRSZXNwb25zZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgICBQb3N0SUQsXHJcbiAgICAgICAgUG9zdGVySUQsXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgICBBbnN3ZXIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGNvbWJpbmVkRGF0ZVRpbWUgPSBgJHtmb3JtYXR0ZWREYXRlfSAke2Zvcm1hdHRlZFRpbWV9YDtcclxuXHJcbiAgY29uc3Qgbm9IYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgZW50ZXJlZEluZm9ybWF0aW9ucyA9IFwiUmVzcG9uZGVyIGhhcyBudWxsaWZpZWQgdGhlIHZhbGlkYXRpb24uXCI7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2UoXHJcbiAgICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgUG9zdElELFxyXG4gICAgICBQb3N0ZXJJRCxcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICAgIEFuc3dlclxyXG4gICAgKTtcclxuICAgIGlmIChwcm9wcy5vbmNhbmNsZSkge1xyXG4gICAgICBwcm9wcy5vbmNhbmNsZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PlN1Ym1pdGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHtpc1llcyA/IChcclxuICAgICAgICA8RGV0YWlsRm9ybSBjbG9zZT17cHJvcHMub25jYW5jbGV9IHNlbmRlckRhdGE9e3Byb3BzLmRhdGEyfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmVyfT5cclxuICAgICAgICAgIDxoMz57U3VibWl0dGVkRGF0ZVRpbWV9PC9oMz5cclxuICAgICAgICAgIDxoMj5RdWVzdGlvbj88L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmExfT57UXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgPGgyPkFuc3dlcjwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGFyYTF9PntBbnN3ZXJ9PC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdmVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b245MH1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt5ZXNIYW5kbGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgWWVzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjkwfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e25vSGFuZGxlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE5vXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjkwfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uY2FuY2xlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQUZvcm07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRpdmVyXCI6IFwiQUZvcm1fZGl2ZXJfXzFLMzRVXCIsXG5cdFwicGFyYTFcIjogXCJBRm9ybV9wYXJhMV9fMXlrVUZcIixcblx0XCJib3JkZXJkaXZcIjogXCJBRm9ybV9ib3JkZXJkaXZfXzI1NFNjXCIsXG5cdFwiYnV0dG9uODlcIjogXCJBRm9ybV9idXR0b244OV9fMjlrMDBcIixcblx0XCJidG5kaXZlclwiOiBcIkFGb3JtX2J0bmRpdmVyX18zRk1XSFwiLFxuXHRcImJ1dHRvbjkwXCI6IFwiQUZvcm1fYnV0dG9uOTBfXzNqckhFXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBRm9ybSBmcm9tIFwiLi9BRm9ybVwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9BbnN3ZXJGb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEFuc3dlckZvcm0gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEFGb3JtIG9uY2FuY2xlPXtwcm9wcy5vbmNsb3NlfSBkYXRhMj17cHJvcHMuZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFuc3dlcnNcIilcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyRm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2VyXCI6IFwiQW5zd2VyRm9ybV9iYWNrZXJfX2ZnZ0pQXCIsXG5cdFwiZm9ybUNvbnRhaW5lclwiOiBcIkFuc3dlckZvcm1fZm9ybUNvbnRhaW5lcl9fM1EyV2NcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9EZXRhaWxGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRGV0YWlsRm9ybSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgSXRlbVRpdGxlLCBQb3N0SUQsIFBvc3RlcklELCBRdWVzdGlvbiwgQW5zd2VyIH0gPSBwcm9wcy5zZW5kZXJEYXRhO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFJlc3BvbnNlRGF0YSA9IHVzZVJlZigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZShcclxuICAgIGVudGVyZWRJbmZvcm1hdGlvbnMsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBQb3N0SUQsXHJcbiAgICBQb3N0ZXJJRCxcclxuICAgIFF1ZXN0aW9uLFxyXG4gICAgY29tYmluZWREYXRlVGltZSxcclxuICAgIEFuc3dlclxyXG4gICkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYW5zd2Vycy9zZW5kUmVzcG9uc2VcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZW50ZXJlZEluZm9ybWF0aW9ucyxcclxuICAgICAgICBJdGVtVGl0bGUsXHJcbiAgICAgICAgUG9zdElELFxyXG4gICAgICAgIFBvc3RlcklELFxyXG4gICAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICAgIGNvbWJpbmVkRGF0ZVRpbWUsXHJcbiAgICAgICAgQW5zd2VyLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBjb21iaW5lZERhdGVUaW1lID0gYCR7Zm9ybWF0dGVkRGF0ZX0gJHtmb3JtYXR0ZWRUaW1lfWA7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIEluZm9zdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgZW50ZXJlZEluZm9ybWF0aW9ucyA9IFJlc3BvbnNlRGF0YS5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRNZXNzYWdlKFxyXG4gICAgICBlbnRlcmVkSW5mb3JtYXRpb25zLFxyXG4gICAgICBJdGVtVGl0bGUsXHJcbiAgICAgIFBvc3RJRCxcclxuICAgICAgUG9zdGVySUQsXHJcbiAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICBBbnN3ZXJcclxuICAgICk7XHJcbiAgICBldmVudC50YXJnZXQucmVzZXQoKTtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT5TdWJtaXRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17SW5mb3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJjb250YWN0SW5mb3JtYXRpb25zXCI+RW50ZXIgQ29udGFjdCBJbmZvcm1hdGlvbnM8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvcm1hdGlvbnNcIlxyXG4gICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgY29scz1cIjQwXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ciBHbWFpbCBvciBjZWxsIG51bWJlci5cIlxyXG4gICAgICAgICAgcmVmPXtSZXNwb25zZURhdGF9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9IHR5cGU9XCJzdWJtaXRcIiByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5jbG9zZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxGb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwiRGV0YWlsRm9ybV9mb3JtX193d1lWaFwiLFxuXHRcImJ1dHRvbjg5XCI6IFwiRGV0YWlsRm9ybV9idXR0b244OV9fekR0NUpcIlxufTtcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xubGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG5sZXQgY2xpZW50U2V0ID0gZmFsc2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgaWYgKGNsaWVudFNldCkge1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGFscmVhZHkgc3RvcmVkIGNsaWVudFwiKTtcbiAgICByZXR1cm4gY2FjaGVkQ2xpZW50O1xuICB9XG5cbiAgbGV0IGNsaWVudDtcblxuICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5tb25nb2RiX3VzZXJuYW1lfToke3Byb2Nlc3MuZW52Lm1vbmdvZGJfcGFzc3dvcmR9QCR7cHJvY2Vzcy5lbnYubW9uZ29kYl9jbHVzdGVybmFtZX0ucHNpazJhZS5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XG5cbiAgdHJ5IHtcbiAgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcsIHtcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgICAgcG9vbFNpemU6IDEwLCAvLyBBZGp1c3QgdGhpcyBiYXNlZCBvbiB5b3VyIGFwcGxpY2F0aW9uJ3MgbmVlZHNcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgfVxuXG4gIC8vIEhhbmRsZSB0aGUgJ2Nsb3NlJyBldmVudCBmb3IgcG90ZW50aWFsIHJlY29ubmVjdGlvblxuICBjbGllbnQub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uXCIpO1xuICAgIC8vIEltcGxlbWVudCByZWNvbm5lY3Rpb24gbG9naWMgaGVyZSwgc3VjaCBhcyBjYWxsaW5nIGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgICBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgIC8vY2xpZW50LmNvbm5lY3QoKTtcbiAgfSk7XG5cbiAgaWYgKCFjbGllbnRTZXQpIHtcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gICAgY2xpZW50U2V0ID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBuZXcgY2xpZW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5SWQoaWQpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIik7XG4gIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICBfaWQ6IHBvc3RvYmplY3RJZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlFBbnN3ZXJzXCIpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb25cbiAgICAuZmluZCh7XG4gICAgICBQb3N0SUQ6IGlkLFxuICAgIH0pXG4gICAgLnRvQXJyYXkoKTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG4vLyBsZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbi8vIGxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuLy8gICBpZiAoY2xpZW50U2V0KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuLy8gICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4vLyAgIH1cblxuLy8gICBsZXQgY2xpZW50O1xuXG4vLyAgIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS5wc2lrMmFlLm1vbmdvZGIubmV0LyR7cHJvY2Vzcy5lbnYubW9uZ29kYl9kYXRhYmFzZX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YDtcblxuLy8gICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcsIHtcbi8vICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuLy8gICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuLy8gICB9KTtcblxuLy8gICBpZiAoIWNsaWVudFNldCkge1xuLy8gICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbi8vICAgICBjbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gY2xpZW50O1xuLy8gfVxuXG4vKlxuXG5cbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbmxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY2xpZW50U2V0KSB7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4gIH1cblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuICAgIHtcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgIH1cbiAgKTtcblxuICBpZiAoIWNsaWVudFNldCkge1xuICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbiAgICBjbGllbnRTZXQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4gIH1cblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5cbiovXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeUVtYWlsKGVtYWlsKSB7XG4vLyAgIC8vY29uc29sZS5sb2coZW1haWwpO1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpO1xuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyAgIHJldHVybiBhbGxQb3N0cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhQnlJZChpZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7IC8vd1xuXG4vLyAgIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG4vLyAgIC8vY29uc29sZS5sb2cocG9zdG9iamVjdElkKTtcblxuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50Ll9pZCA9PT0gcG9zdG9iamVjdElkKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbmQoXG4vLyAgICAgKGV2ZW50KSA9PiBldmVudC5faWQudG9TdHJpbmcoKSA9PT0gcG9zdG9iamVjdElkLnRvU3RyaW5nKClcbi8vICAgKTtcbi8vIH1cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4vLyAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgcmV0dXJuIGRhdGEuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuUG9zdElEID09PSBpZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpOyBnb29kXG4vLyAgIGNvbnNvbGUubG9nKG9iamVjdElkKTtcbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG4vLyBpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuXG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG4vLyBjb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbi8vIGNsYXNzIERhdGFiYXNlIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgaWYgKCFEYXRhYmFzZS5pbnN0YW5jZSkge1xuLy8gICAgICAgdGhpcy5jbGllbnQgPSBudWxsO1xuLy8gICAgICAgdGhpcy5jbGllbnRTZXQgPSBmYWxzZTtcbi8vICAgICAgIERhdGFiYXNlLmluc3RhbmNlID0gdGhpcztcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gRGF0YWJhc2UuaW5zdGFuY2U7XG4vLyAgIH1cblxuLy8gICBhc3luYyBjb25uZWN0KCkge1xuLy8gICAgIGlmICh0aGlzLmNsaWVudFNldCkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIpO1xuLy8gICAgICAgcmV0dXJuIHRoaXMuY2xpZW50O1xuLy8gICAgIH1cblxuLy8gICAgIHRoaXMuY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbi8vICAgICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuLy8gICAgICAge1xuLy8gICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbi8vICAgICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4vLyAgICAgICB9XG4vLyAgICAgKTtcblxuLy8gICAgIGlmICghdGhpcy5jbGllbnRTZXQpIHtcbi8vICAgICAgIHRoaXMuY2xpZW50U2V0ID0gdHJ1ZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHRoaXMuY2xpZW50O1xuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XG4vLyBleHBvcnQgY29uc3QgY29ubmVjdFRvRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgcmV0dXJuIGF3YWl0IGRhdGFiYXNlLmNvbm5lY3QoKTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAvL2NvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTpcIiwgZXJyb3IpO1xuLy8gICAgIHRocm93IGVycm9yO1xuLy8gICB9XG4vLyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zcGVjaWZpY2lkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeVwiO1xyXG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3NcIjtcclxuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBBbnN3ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYW5zd2Vycy9hbnN3ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YUJ5SWQgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcblxyXG5mdW5jdGlvbiBzcGVjaWZpY2lkKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvY2Vzc2VkT2JqZWN0LCBzZXRQcm9jZXNzZWRPYmplY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZXh0cmFjdGVkT2JqZWN0IH0gPSBwcm9wcztcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZXh0cmFjdGVkT2JqZWN0ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc2V0UHJvY2Vzc2VkT2JqZWN0KGV4dHJhY3RlZE9iamVjdCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW3Byb3BzLmV4dHJhY3RlZE9iamVjdF0pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nIHx8ICFwcm9jZXNzZWRPYmplY3QpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV2ZW50ID0gcHJvY2Vzc2VkT2JqZWN0O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2V2ZW50LlRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXZlbnQuRGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEV2ZW50U3VtbWFyeSBUaXRsZT17ZXZlbnQuVGl0bGV9IC8+XHJcblxyXG4gICAgICA8RXZlbnRMb2dpc3RpY3NcclxuICAgICAgICBEYXRlPXtldmVudC5EYXRlfVxyXG4gICAgICAgIFJlZHVjZWRJbWc9e2V2ZW50LlJlZHVjZWRJbWd9XHJcbiAgICAgICAgVGl0bGU9e2V2ZW50LlRpdGxlfVxyXG4gICAgICAgIFR5cGU9e2V2ZW50LlR5cGV9XHJcbiAgICAgICAgQ2F0ZWdvcnk9e2V2ZW50LkNhdGVnb3J5fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEV2ZW50Q29udGVudD5cclxuICAgICAgICA8cD57ZXZlbnQuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0V2ZW50Q29udGVudD5cclxuXHJcbiAgICAgIDxBbnN3ZXIgcG9zdGlkPXtldmVudC5faWR9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBzcGVjaWZpY2lkIH0gPSBwYXJhbXM7XHJcblxyXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGFCeUlkKHNwZWNpZmljaWQpO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2F1dGhcIixcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBleHRyYWN0ZWRPYmplY3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpKSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XHJcblxyXG4vLyAgIGlmICghc2Vzc2lvbikge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgcmVkaXJlY3Q6IHtcclxuLy8gICAgICAgICBkZXN0aW5hdGlvbjogXCIvYXV0aFwiLFxyXG4vLyAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHNlc3Npb24gfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGVjaWZpY2lkO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b241MlwiOiBcInNwZWNpZmljaWRfYnV0dG9uNTJfX2FET0tFXCIsXG5cdFwiYnRuZGl2XCI6IFwic3BlY2lmaWNpZF9idG5kaXZfXzJxbnVRXCIsXG5cdFwiYnV0dG9uLTUyXCI6IFwic3BlY2lmaWNpZF9idXR0b24tNTJfXzJUZ3FMXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pb25pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==