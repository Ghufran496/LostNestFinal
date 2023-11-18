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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/[itemid].js");
/******/ })
/************************************************************************/
/******/ ({

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
            children: Date
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
              lineNumber: 34,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: "2rem"
            },
            children: Type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
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
              lineNumber: 40,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: "2rem"
            },
            children: Category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
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

/***/ "./components/overlayForm/Form.js":
/*!****************************************!*\
  !*** ./components/overlayForm/Form.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.module.css */ "./components/overlayForm/Form.module.css");
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\Form.js";



 // http://localhost:3000/dashboard/654bc2921efc6c1070461e13

function Form(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const answerInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  async function sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime) {
    const response = await fetch("/api/qresponse/QuestionResponse", {
      method: "POST",
      body: JSON.stringify({
        enteredAnswer,
        postID,
        ItemTitle,
        Question,
        combinedDateTime
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

  const postID = props.data2._id;
  const ItemTitle = props.data2.Title;
  const Question = props.data2.Question;
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US");
  const formattedTime = currentDate.toLocaleTimeString("en-US");
  const combinedDateTime = `${formattedDate} ${formattedTime}`; //console.log(postID);

  const answerSubmitHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    const enteredAnswer = answerInputRef.current.value;
    const result = await sendQuestionData(enteredAnswer, postID, ItemTitle, Question, combinedDateTime); // console.log(result);

    event.target.reset(); // This resets the form

    setIsLoading(false);
  };

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "1.5rem"
      },
      children: "Submiting response..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    onSubmit: answerSubmitHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "question",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.labels,
      children: "Question"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      id: "questionContent",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.span1,
      children: props.data2.Question
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "answer",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.labels,
      children: "Answer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      id: "answer",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputfield,
      ref: answerInputRef,
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btndiv,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button89,
        type: "button",
        role: "button",
        onClick: props.oncancle,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button89,
        type: "submit",
        role: "button",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/overlayForm/Form.module.css":
/*!************************************************!*\
  !*** ./components/overlayForm/Form.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Form_main__xHqEN",
	"labels": "Form_labels__hk0f5",
	"span1": "Form_span1__xqcL9",
	"inputfield": "Form_inputfield__2wGsy",
	"button89": "Form_button89__2SOnP"
};


/***/ }),

/***/ "./components/overlayForm/QuestionForm.js":
/*!************************************************!*\
  !*** ./components/overlayForm/QuestionForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QuestionForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionForm.module.css */ "./components/overlayForm/QuestionForm.module.css");
/* harmony import */ var _QuestionForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_QuestionForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ "./components/overlayForm/Form.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\QuestionForm.js";





function QuestionForm(props) {
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _QuestionForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _QuestionForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
        oncancle: props.onclose,
        data2: props.data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this), document.getElementById("Questions"));
}

/* harmony default export */ __webpack_exports__["default"] = (QuestionForm);

/***/ }),

/***/ "./components/overlayForm/QuestionForm.module.css":
/*!********************************************************!*\
  !*** ./components/overlayForm/QuestionForm.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"backer": "QuestionForm_backer__1z-Pb",
	"formContainer": "QuestionForm_formContainer__3gN2W"
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

/***/ "./pages/dashboard/[itemid].js":
/*!*************************************!*\
  !*** ./pages/dashboard/[itemid].js ***!
  \*************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-summary */ "./components/feed/FeedDetails/event-summary.js");
/* harmony import */ var _components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-logistics */ "./components/feed/FeedDetails/event-logistics.js");
/* harmony import */ var _components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-content */ "./components/feed/FeedDetails/event-content.js");
/* harmony import */ var _components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/overlayForm/QuestionForm */ "./components/overlayForm/QuestionForm.js");
/* harmony import */ var _itemid_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itemid.module.css */ "./pages/dashboard/itemid.module.css");
/* harmony import */ var _itemid_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_itemid_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\dashboard\\[itemid].js";












function ItemDetailPage(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showQForm,
    1: setIsShowQForm
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }, this);
  }

  const event = processedObject;

  const showModeHandler = () => {
    setIsShowQForm(true);
  };

  const hideModeHandler = () => {
    setIsShowQForm(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: event.Title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _itemid_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: showModeHandler,
        className: _itemid_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button52,
        role: "button",
        children: ["Claim this ", event.Title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), showQForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onclose: hideModeHandler,
      data: event
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

async function getServerSideProps(context) {
  const postId = context.params.itemid;
  const postData = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_8__["getPostDataById"])(postId);
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
}
/* harmony default export */ __webpack_exports__["default"] = (ItemDetailPage);

/***/ }),

/***/ "./pages/dashboard/itemid.module.css":
/*!*******************************************!*\
  !*** ./pages/dashboard/itemid.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button52": "itemid_button52__2vT-o",
	"btndiv": "itemid_btndiv__IrFTl",
	"button-52": "itemid_button-52__3dkhT"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvTG9hZGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvbG9naXN0aWNzLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vUXVlc3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vUXVlc3Rpb25Gb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9baXRlbWlkXS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaXRlbWlkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlvbmljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9hZGluZyIsImNsYXNzZXMiLCJsb2FkZXIiLCJqdXN0aWZ5Y29udGVudGNlbnRlciIsImppbXVwcmltYXJ5bG9hZGluZyIsInRleHQiLCJFdmVudENvbnRlbnQiLCJwcm9wcyIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIkV2ZW50TG9naXN0aWNzIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEYXRlIiwiUmVkdWNlZEltZyIsImxvZ2lzdGljcyIsImltYWdlIiwibGlzdCIsInNwYW5lciIsImZvbnRTaXplIiwiRXZlbnRTdW1tYXJ5Iiwic3VtbWFyeSIsIkxvZ2lzdGljc0l0ZW0iLCJpdGVtIiwiRm9ybSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiYW5zd2VySW5wdXRSZWYiLCJ1c2VSZWYiLCJzZW5kUXVlc3Rpb25EYXRhIiwiZW50ZXJlZEFuc3dlciIsInBvc3RJRCIsIkl0ZW1UaXRsZSIsIlF1ZXN0aW9uIiwiY29tYmluZWREYXRlVGltZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIm9rIiwiZGF0YTIiLCJfaWQiLCJjdXJyZW50RGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJmb3JtYXR0ZWRUaW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiYW5zd2VyU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJyZXN1bHQiLCJ0YXJnZXQiLCJyZXNldCIsIm1haW4iLCJsYWJlbHMiLCJzcGFuMSIsImlucHV0ZmllbGQiLCJidG5kaXYiLCJidXR0b244OSIsIm9uY2FuY2xlIiwiUXVlc3Rpb25Gb3JtIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJiYWNrZXIiLCJmb3JtQ29udGFpbmVyIiwib25jbG9zZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJPYmplY3RJZCIsInJlcXVpcmUiLCJjYWNoZWRDbGllbnQiLCJjbGllbnRTZXQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnQiLCJjb25uZWN0aW9uU3RyaW5nIiwicHJvY2VzcyIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNvbm5lY3RUaW1lb3V0TVMiLCJwb29sU2l6ZSIsImVycm9yIiwib24iLCJnZXRBbGxQb3N0cyIsImRiIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiZ2V0UG9zdERhdGFCeUlkIiwiaWQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJwb3N0b2JqZWN0SWQiLCJ1c2VyIiwiZmluZE9uZSIsImdldFJlc3BvbnNlRGF0YUJ5SWQiLCJQb3N0SUQiLCJJdGVtRGV0YWlsUGFnZSIsInNob3dRRm9ybSIsInNldElzU2hvd1FGb3JtIiwicHJvY2Vzc2VkT2JqZWN0Iiwic2V0UHJvY2Vzc2VkT2JqZWN0IiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZXh0cmFjdGVkT2JqZWN0Iiwic2hvd01vZGVIYW5kbGVyIiwiaGlkZU1vZGVIYW5kbGVyIiwiRGVzY3JpcHRpb24iLCJidXR0b241MiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwb3N0SWQiLCJwYXJhbXMiLCJpdGVtaWQiLCJwb3N0RGF0YSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwicmVxIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMERBQU8sQ0FBQ0MsTUFBeEI7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRyxHQUFFRCwwREFBTyxDQUFDRSxvQkFBcUIsSUFBR0YsMERBQU8sQ0FBQ0csa0JBQW1CO0FBRDNFO0FBQUE7QUFBQTtBQUFBO0FB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a0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQvW2l0ZW1pZF0uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xvYWRpbmcubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5qdXN0aWZ5Y29udGVudGNlbnRlcn0gJHtjbGFzc2VzLmppbXVwcmltYXJ5bG9hZGluZ31gfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkZXJcIjogXCJMb2FkaW5nX2xvYWRlcl9fM0FJQW1cIixcblx0XCJ0ZXh0XCI6IFwiTG9hZGluZ190ZXh0X18yYXVtYVwiLFxuXHRcImppbXVwcmltYXJ5bG9hZGluZ1wiOiBcIkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbFwiLFxuXHRcImxvYWRpbmcta2V5cy1hcHAtbG9hZGluZ1wiOiBcIkxvYWRpbmdfbG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nX19ZbDBzSVwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBFdmVudENvbnRlbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudENvbnRlbnQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50XCI6IFwiZXZlbnQtY29udGVudF9jb250ZW50X18zMEZ4cFwiXG59O1xuIiwiaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSBcIi4vbG9naXN0aWNzLWl0ZW1cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVG9kYXlPdXRsaW5lLCBHcmlkT3V0bGluZSwgTWVudU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaW9uaWNvbnNcIjtcbi8vaHR0cHM6Ly9yZWFjdC1pb25pY29ucy5uZXRsaWZ5LmFwcC9cbmZ1bmN0aW9uIEV2ZW50TG9naXN0aWNzKHByb3BzKSB7XG4gIGNvbnN0IHsgVHlwZSwgQ2F0ZWdvcnksIFRpdGxlLCBEYXRlLCBSZWR1Y2VkSW1nIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e1RpdGxlfSAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi40LjIvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e1JlZHVjZWRJbWd9IGFsdD17VGl0bGV9IHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8VG9kYXlPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8dGltZSBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIgfX0+e0RhdGV9PC90aW1lPlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8TWVudU91dGxpbmUgY29sb3I9e1wiIzAwMDAwXCJ9IGJlYXQgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiB9fT57VHlwZX08L2Rpdj5cbiAgICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgPExvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT5cbiAgICAgICAgICAgICAgPEdyaWRPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIgfX0+e0NhdGVnb3J5fTwvZGl2PlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudExvZ2lzdGljcztcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2lzdGljc1wiOiBcImV2ZW50LWxvZ2lzdGljc19sb2dpc3RpY3NfXzJRUWt3XCIsXG5cdFwiaW1hZ2VcIjogXCJldmVudC1sb2dpc3RpY3NfaW1hZ2VfXzE4dVZZXCIsXG5cdFwibGlzdFwiOiBcImV2ZW50LWxvZ2lzdGljc19saXN0X18xQktQUFwiLFxuXHRcInNwYW5lclwiOiBcImV2ZW50LWxvZ2lzdGljc19zcGFuZXJfXzNpenRlXCIsXG5cdFwiaWNvblwiOiBcImV2ZW50LWxvZ2lzdGljc19pY29uX18yYW1LclwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEV2ZW50U3VtbWFyeShwcm9wcykge1xuICBjb25zdCB7IFRpdGxlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cbiAgICAgIDxoMT57VGl0bGV9PC9oMT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U3VtbWFyeTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlcIjogXCJldmVudC1zdW1tYXJ5X3N1bW1hcnlfXzJhUUprXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9sb2dpc3RpY3MtaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIExvZ2lzdGljc0l0ZW0ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naXN0aWNzSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJsb2dpc3RpY3MtaXRlbV9pdGVtX184cndnYlwiLFxuXHRcImljb25cIjogXCJsb2dpc3RpY3MtaXRlbV9pY29uX19vZkhOWVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Gb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGFzaGJvYXJkLzY1NGJjMjkyMWVmYzZjMTA3MDQ2MWUxM1xyXG5cclxuZnVuY3Rpb24gRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgYW5zd2VySW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZFF1ZXN0aW9uRGF0YShcclxuICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICBwb3N0SUQsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIGNvbWJpbmVkRGF0ZVRpbWVcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3FyZXNwb25zZS9RdWVzdGlvblJlc3BvbnNlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICAgICAgcG9zdElELFxyXG4gICAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIGNvbnN0IHBvc3RJRCA9IHByb3BzLmRhdGEyLl9pZDtcclxuICBjb25zdCBJdGVtVGl0bGUgPSBwcm9wcy5kYXRhMi5UaXRsZTtcclxuICBjb25zdCBRdWVzdGlvbiA9IHByb3BzLmRhdGEyLlF1ZXN0aW9uO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBjb21iaW5lZERhdGVUaW1lID0gYCR7Zm9ybWF0dGVkRGF0ZX0gJHtmb3JtYXR0ZWRUaW1lfWA7XHJcblxyXG4gIC8vY29uc29sZS5sb2cocG9zdElEKTtcclxuICBjb25zdCBhbnN3ZXJTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWRBbnN3ZXIgPSBhbnN3ZXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRRdWVzdGlvbkRhdGEoXHJcbiAgICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICAgIHBvc3RJRCxcclxuICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgY29tYmluZWREYXRlVGltZVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7IC8vIFRoaXMgcmVzZXRzIHRoZSBmb3JtXHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PlN1Ym1pdGluZyByZXNwb25zZS4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0gb25TdWJtaXQ9e2Fuc3dlclN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInF1ZXN0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgUXVlc3Rpb25cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzcGFuIGlkPVwicXVlc3Rpb25Db250ZW50XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW4xfT5cclxuICAgICAgICB7cHJvcHMuZGF0YTIuUXVlc3Rpb259XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgQW5zd2VyXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBpZD1cImFuc3dlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgcmVmPXthbnN3ZXJJbnB1dFJlZn1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25jYW5jbGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xvc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX0gdHlwZT1cInN1Ym1pdFwiIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiRm9ybV9tYWluX194SHFFTlwiLFxuXHRcImxhYmVsc1wiOiBcIkZvcm1fbGFiZWxzX19oazBmNVwiLFxuXHRcInNwYW4xXCI6IFwiRm9ybV9zcGFuMV9feHFjTDlcIixcblx0XCJpbnB1dGZpZWxkXCI6IFwiRm9ybV9pbnB1dGZpZWxkX18yd0dzeVwiLFxuXHRcImJ1dHRvbjg5XCI6IFwiRm9ybV9idXR0b244OV9fMlNPblBcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUXVlc3Rpb25Gb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb25Gb3JtKHByb3BzKSB7XHJcbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgIDxGb3JtIG9uY2FuY2xlPXtwcm9wcy5vbmNsb3NlfSBkYXRhMj17cHJvcHMuZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlF1ZXN0aW9uc1wiKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uRm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2VyXCI6IFwiUXVlc3Rpb25Gb3JtX2JhY2tlcl9fMXotUGJcIixcblx0XCJmb3JtQ29udGFpbmVyXCI6IFwiUXVlc3Rpb25Gb3JtX2Zvcm1Db250YWluZXJfXzNnTjJXXCJcbn07XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xubGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjbGllbnRTZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIik7XG4gICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbiAgfVxuXG4gIGxldCBjbGllbnQ7XG5cbiAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiK3NydjovLyR7cHJvY2Vzcy5lbnYubW9uZ29kYl91c2VybmFtZX06JHtwcm9jZXNzLmVudi5tb25nb2RiX3Bhc3N3b3JkfUAke3Byb2Nlc3MuZW52Lm1vbmdvZGJfY2x1c3Rlcm5hbWV9LnBzaWsyYWUubW9uZ29kYi5uZXQvJHtwcm9jZXNzLmVudi5tb25nb2RiX2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4gIHRyeSB7XG4gICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChjb25uZWN0aW9uU3RyaW5nLCB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbiAgICAgIHBvb2xTaXplOiAxMCwgLy8gQWRqdXN0IHRoaXMgYmFzZWQgb24geW91ciBhcHBsaWNhdGlvbidzIG5lZWRzXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4gIH1cblxuICAvLyBIYW5kbGUgdGhlICdjbG9zZScgZXZlbnQgZm9yIHBvdGVudGlhbCByZWNvbm5lY3Rpb25cbiAgY2xpZW50Lm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBjbG9zZWQuIFJlY29ubmVjdGluZy4uLlwiKTtcbiAgICAvLyBJbXBsZW1lbnQgcmVjb25uZWN0aW9uIGxvZ2ljIGhlcmUsIHN1Y2ggYXMgY2FsbGluZyBjb25uZWN0VG9EYXRhYmFzZSgpXG4gICAgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAvL2NsaWVudC5jb25uZWN0KCk7XG4gIH0pO1xuXG4gIGlmICghY2xpZW50U2V0KSB7XG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNsaWVudFNldCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIikuZmluZCh7fSkudG9BcnJheSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpO1xuICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgX2lkOiBwb3N0b2JqZWN0SWQsXG4gIH0pO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VEYXRhQnlJZChpZCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uXG4gICAgLmZpbmQoe1xuICAgICAgUG9zdElEOiBpZCxcbiAgICB9KVxuICAgIC50b0FycmF5KCk7XG4gIHJldHVybiB1c2VyO1xufVxuXG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG4vLyBjb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcblxuLy8gbGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG4vLyBsZXQgY2xpZW50U2V0ID0gZmFsc2U7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbi8vICAgaWYgKGNsaWVudFNldCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGFscmVhZHkgc3RvcmVkIGNsaWVudFwiICsgY2FjaGVkQ2xpZW50KTtcbi8vICAgICByZXR1cm4gY2FjaGVkQ2xpZW50O1xuLy8gICB9XG5cbi8vICAgbGV0IGNsaWVudDtcblxuLy8gICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5tb25nb2RiX3VzZXJuYW1lfToke3Byb2Nlc3MuZW52Lm1vbmdvZGJfcGFzc3dvcmR9QCR7cHJvY2Vzcy5lbnYubW9uZ29kYl9jbHVzdGVybmFtZX0ucHNpazJhZS5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XG5cbi8vICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChjb25uZWN0aW9uU3RyaW5nLCB7XG4vLyAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuLy8gICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbi8vICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbi8vICAgfSk7XG5cbi8vICAgaWYgKCFjbGllbnRTZXQpIHtcbi8vICAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4vLyAgICAgY2xpZW50U2V0ID0gdHJ1ZTtcbi8vICAgICBjb25zb2xlLmxvZyhcInJldHVybiBuZXcgY2xpZW50XCIpO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIGNsaWVudDtcbi8vIH1cblxuLypcblxuXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcblxubGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG5sZXQgY2xpZW50U2V0ID0gZmFsc2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgaWYgKGNsaWVudFNldCkge1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGFscmVhZHkgc3RvcmVkIGNsaWVudFwiICsgY2FjaGVkQ2xpZW50KTtcbiAgICByZXR1cm4gY2FjaGVkQ2xpZW50O1xuICB9XG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZ2h1ZnJhbjpBbGxhaGlzMUBjbHVzdGVyMC5wc2lrMmFlLm1vbmdvZGIubmV0L2F1dGhTZWMxND9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIixcbiAgICB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbiAgICB9XG4gICk7XG5cbiAgaWYgKCFjbGllbnRTZXQpIHtcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gICAgY2xpZW50U2V0ID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBuZXcgY2xpZW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuXG4qL1xuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlFbWFpbChlbWFpbCkge1xuLy8gICAvL2NvbnNvbGUubG9nKGVtYWlsKTtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuLy8gICAvL2NvbnNvbGUubG9nKGFsbFBvc3RzKTtcbi8vICAgLy8gcmV0dXJuIGFsbFBvc3RzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuLy8gICByZXR1cm4gYWxsUG9zdHMuZmlsdGVyKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbi8vIH1cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5SWQoaWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpOyAvL3dcblxuLy8gICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuLy8gICAvL2NvbnNvbGUubG9nKHBvc3RvYmplY3RJZCk7XG5cbi8vICAgLy8gcmV0dXJuIGFsbFBvc3RzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5faWQgPT09IHBvc3RvYmplY3RJZCk7XG4vLyAgIHJldHVybiBhbGxQb3N0cy5maW5kKFxuLy8gICAgIChldmVudCkgPT4gZXZlbnQuX2lkLnRvU3RyaW5nKCkgPT09IHBvc3RvYmplY3RJZC50b1N0cmluZygpXG4vLyAgICk7XG4vLyB9XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VEYXRhQnlJZChpZCkge1xuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuLy8gICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUUFuc3dlcnNcIikuZmluZCh7fSkudG9BcnJheSgpO1xuXG4vLyAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIHJldHVybiBkYXRhLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LlBvc3RJRCA9PT0gaWQpO1xuLy8gfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeU9iamVjdElkKG9iamVjdElkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gICAvL2NvbnNvbGUubG9nKGFsbFBvc3RzKTsgZ29vZFxuLy8gICBjb25zb2xlLmxvZyhvYmplY3RJZCk7XG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuLy8gaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeU9iamVjdElkKG9iamVjdElkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gICBjb25zdCBkYXRhMiA9IGFsbFBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhMik7XG4vLyAgIHJldHVybiBkYXRhMjtcbi8vIH1cblxuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuLy8gY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG4vLyBjbGFzcyBEYXRhYmFzZSB7XG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIGlmICghRGF0YWJhc2UuaW5zdGFuY2UpIHtcbi8vICAgICAgIHRoaXMuY2xpZW50ID0gbnVsbDtcbi8vICAgICAgIHRoaXMuY2xpZW50U2V0ID0gZmFsc2U7XG4vLyAgICAgICBEYXRhYmFzZS5pbnN0YW5jZSA9IHRoaXM7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIERhdGFiYXNlLmluc3RhbmNlO1xuLy8gICB9XG5cbi8vICAgYXN5bmMgY29ubmVjdCgpIHtcbi8vICAgICBpZiAodGhpcy5jbGllbnRTZXQpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGFscmVhZHkgc3RvcmVkIGNsaWVudFwiKTtcbi8vICAgICAgIHJldHVybiB0aGlzLmNsaWVudDtcbi8vICAgICB9XG5cbi8vICAgICB0aGlzLmNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4vLyAgICAgICBcIm1vbmdvZGIrc3J2Oi8vZ2h1ZnJhbjpBbGxhaGlzMUBjbHVzdGVyMC5wc2lrMmFlLm1vbmdvZGIubmV0L2F1dGhTZWMxND9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIixcbi8vICAgICAgIHtcbi8vICAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuLy8gICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4vLyAgICAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuLy8gICAgICAgfVxuLy8gICAgICk7XG5cbi8vICAgICBpZiAoIXRoaXMuY2xpZW50U2V0KSB7XG4vLyAgICAgICB0aGlzLmNsaWVudFNldCA9IHRydWU7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBuZXcgY2xpZW50XCIpO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiB0aGlzLmNsaWVudDtcbi8vICAgfVxuLy8gfVxuXG4vLyBjb25zdCBkYXRhYmFzZSA9IG5ldyBEYXRhYmFzZSgpO1xuLy8gZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIHJldHVybiBhd2FpdCBkYXRhYmFzZS5jb25uZWN0KCk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgLy9jb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcbi8vICAgICB0aHJvdyBlcnJvcjtcbi8vICAgfVxuLy8gfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnlcIjtcclxuaW1wb3J0IEV2ZW50TG9naXN0aWNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzXCI7XHJcbmltcG9ydCBFdmVudENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50XCI7XHJcbmltcG9ydCBRdWVzdGlvbkZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vUXVlc3Rpb25Gb3JtXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2l0ZW1pZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldFBvc3REYXRhQnlJZCB9IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Mb2FkaW5nXCI7XHJcblxyXG5mdW5jdGlvbiBJdGVtRGV0YWlsUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dRRm9ybSwgc2V0SXNTaG93UUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwcm9jZXNzZWRPYmplY3QsIHNldFByb2Nlc3NlZE9iamVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBleHRyYWN0ZWRPYmplY3QgfSA9IHByb3BzO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBleHRyYWN0ZWRPYmplY3QgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBzZXRQcm9jZXNzZWRPYmplY3QoZXh0cmFjdGVkT2JqZWN0KTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbcHJvcHMuZXh0cmFjdGVkT2JqZWN0XSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcgfHwgIXByb2Nlc3NlZE9iamVjdCkge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXZlbnQgPSBwcm9jZXNzZWRPYmplY3Q7XHJcblxyXG4gIGNvbnN0IHNob3dNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd1FGb3JtKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGlkZU1vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93UUZvcm0oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57ZXZlbnQuVGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtldmVudC5EZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8RXZlbnRTdW1tYXJ5IFRpdGxlPXtldmVudC5UaXRsZX0gLz5cclxuXHJcbiAgICAgIDxFdmVudExvZ2lzdGljc1xyXG4gICAgICAgIERhdGU9e2V2ZW50LkRhdGV9XHJcbiAgICAgICAgUmVkdWNlZEltZz17ZXZlbnQuUmVkdWNlZEltZ31cclxuICAgICAgICBUaXRsZT17ZXZlbnQuVGl0bGV9XHJcbiAgICAgICAgVHlwZT17ZXZlbnQuVHlwZX1cclxuICAgICAgICBDYXRlZ29yeT17ZXZlbnQuQ2F0ZWdvcnl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8RXZlbnRDb250ZW50PlxyXG4gICAgICAgIDxwPntldmVudC5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvRXZlbnRDb250ZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5kaXZ9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RlSGFuZGxlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b241Mn1cclxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIENsYWltIHRoaXMge2V2ZW50LlRpdGxlfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzaG93UUZvcm0gJiYgPFF1ZXN0aW9uRm9ybSBvbmNsb3NlPXtoaWRlTW9kZUhhbmRsZXJ9IGRhdGE9e2V2ZW50fSAvPn1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcG9zdElkID0gY29udGV4dC5wYXJhbXMuaXRlbWlkO1xyXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGFCeUlkKHBvc3RJZCk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IGNvbnRleHQucmVxIH0pO1xyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogXCIvYXV0aFwiLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGV4dHJhY3RlZE9iamVjdDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkpLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtRGV0YWlsUGFnZTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uNTJcIjogXCJpdGVtaWRfYnV0dG9uNTJfXzJ2VC1vXCIsXG5cdFwiYnRuZGl2XCI6IFwiaXRlbWlkX2J0bmRpdl9fSXJGVGxcIixcblx0XCJidXR0b24tNTJcIjogXCJpdGVtaWRfYnV0dG9uLTUyX18zZGtoVFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW9uaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=