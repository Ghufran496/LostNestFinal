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
      children: "Submitting response..."
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
      children: "Question?"
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
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _itemid_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: showModeHandler,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
          content: `Claim This ${event.Title}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), showQForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onclose: hideModeHandler,
      data: event
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3MubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9sb2dpc3RpY3MtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvbG9naXN0aWNzLWl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9Gb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9RdWVzdGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9RdWVzdGlvbkZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9pdGVtaWQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW9uaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImNsYXNzZXMiLCJidG4iLCJjb250ZW50IiwiTG9hZGluZyIsImxvYWRlciIsImp1c3RpZnljb250ZW50Y2VudGVyIiwiamltdXByaW1hcnlsb2FkaW5nIiwidGV4dCIsIkV2ZW50Q29udGVudCIsImNoaWxkcmVuIiwiRXZlbnRMb2dpc3RpY3MiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwibG9naXN0aWNzIiwiaW1hZ2UiLCJsaXN0Iiwic3BhbmVyIiwiZm9udFNpemUiLCJ0aW1lciIsIkV2ZW50U3VtbWFyeSIsInN1bW1hcnkiLCJMb2dpc3RpY3NJdGVtIiwiaXRlbSIsIkZvcm0iLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImFuc3dlcklucHV0UmVmIiwidXNlUmVmIiwic2VuZFF1ZXN0aW9uRGF0YSIsImVudGVyZWRBbnN3ZXIiLCJwb3N0SUQiLCJJdGVtVGl0bGUiLCJRdWVzdGlvbiIsImNvbWJpbmVkRGF0ZVRpbWUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsImRhdGEyIiwiX2lkIiwiY3VycmVudERhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImFuc3dlclN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwicmVzdWx0IiwidGFyZ2V0IiwicmVzZXQiLCJtYWluIiwibGFiZWxzIiwic3BhbjEiLCJpbnB1dGZpZWxkIiwiYnRuZGl2IiwiYnV0dG9uODkiLCJvbmNhbmNsZSIsIlF1ZXN0aW9uRm9ybSIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiYmFja2VyIiwiZm9ybUNvbnRhaW5lciIsIm9uY2xvc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiT2JqZWN0SWQiLCJyZXF1aXJlIiwiY2FjaGVkQ2xpZW50IiwiY2xpZW50U2V0IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uZWN0VGltZW91dE1TIiwicG9vbFNpemUiLCJlcnJvciIsIm9uIiwiZ2V0QWxsUG9zdHMiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImdldFBvc3REYXRhQnlJZCIsImlkIiwidXNlcnNDb2xsZWN0aW9uIiwicG9zdG9iamVjdElkIiwidXNlciIsImZpbmRPbmUiLCJnZXRSZXNwb25zZURhdGFCeUlkIiwiUG9zdElEIiwiSXRlbURldGFpbFBhZ2UiLCJzaG93UUZvcm0iLCJzZXRJc1Nob3dRRm9ybSIsInByb2Nlc3NlZE9iamVjdCIsInNldFByb2Nlc3NlZE9iamVjdCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImV4dHJhY3RlZE9iamVjdCIsInNob3dNb2RlSGFuZGxlciIsImhpZGVNb2RlSGFuZGxlciIsIkRlc2NyaXB0aW9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBvc3RJZCIsInBhcmFtcyIsIml0ZW1pZCIsInBvc3REYXRhIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJyZXEiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN4QixzQkFDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNC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QU8sR0FBRyxNQUFNQyxtRUFBVSxDQUFDO0FBQUVDLE9BQUcsRUFBRVAsT0FBTyxDQUFDTztBQUFmLEdBQUQsQ0FBaEM7O0FBQ0EsTUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDWixXQUFPO0FBQ0xHLGNBQVEsRUFBRTtBQUNSQyxtQkFBVyxFQUFFLE9BREw7QUFFUkMsaUJBQVMsRUFBRTtBQUZIO0FBREwsS0FBUDtBQU1EOztBQUVELFNBQU87QUFDTHBJLFNBQUssRUFBRTtBQUNMcUgscUJBQWUsRUFBRTFFLElBQUksQ0FBQzBGLEtBQUwsQ0FBVzFGLElBQUksQ0FBQ0MsU0FBTCxDQUFla0YsUUFBZixDQUFYO0FBRFo7QUFERixHQUFQO0FBS0Q7QUFFY2hCLDZFQUFmLEU7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQvW2l0ZW1pZF0uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0J1dHRvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0+XHJcbiAgICAgIHtwcm9wcy5jb250ZW50fVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnRuXCI6IFwiQnV0dG9uX2J0bl9fM0l0YzNcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTG9hZGluZy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmp1c3RpZnljb250ZW50Y2VudGVyfSAke2NsYXNzZXMuamltdXByaW1hcnlsb2FkaW5nfWB9XHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+UGxlYXNlIGJlIHBhdGllbnQuLi48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlclwiOiBcIkxvYWRpbmdfbG9hZGVyX18zQUlBbVwiLFxuXHRcInRleHRcIjogXCJMb2FkaW5nX3RleHRfXzJhdW1hXCIsXG5cdFwiamltdXByaW1hcnlsb2FkaW5nXCI6IFwiTG9hZGluZ19qaW11cHJpbWFyeWxvYWRpbmdfXzFHSElsXCIsXG5cdFwibG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nXCI6IFwiTG9hZGluZ19sb2FkaW5nLWtleXMtYXBwLWxvYWRpbmdfX1lsMHNJXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LWNvbnRlbnQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIEV2ZW50Q29udGVudChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q29udGVudDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRcIjogXCJldmVudC1jb250ZW50X2NvbnRlbnRfXzMwRnhwXCJcbn07XG4iLCJpbXBvcnQgTG9naXN0aWNzSXRlbSBmcm9tIFwiLi9sb2dpc3RpY3MtaXRlbVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUb2RheU91dGxpbmUsIEdyaWRPdXRsaW5lLCBNZW51T3V0bGluZSB9IGZyb20gXCJyZWFjdC1pb25pY29uc1wiO1xuLy9odHRwczovL3JlYWN0LWlvbmljb25zLm5ldGxpZnkuYXBwL1xuZnVuY3Rpb24gRXZlbnRMb2dpc3RpY3MocHJvcHMpIHtcbiAgY29uc3QgeyBUeXBlLCBDYXRlZ29yeSwgVGl0bGUsIERhdGUsIFJlZHVjZWRJbWcgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57VGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17VGl0bGV9IC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjQuMi9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2lzdGljc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICA8aW1nIHNyYz17UmVkdWNlZEltZ30gYWx0PXtUaXRsZX0gd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgIDxMb2dpc3RpY3NJdGVtPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+XG4gICAgICAgICAgICAgIDxUb2RheU91dGxpbmUgY29sb3I9e1wiIzAwMDAwXCJ9IGJlYXQgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDx0aW1lIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVyfT4ge0RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8TWVudU91dGxpbmUgY29sb3I9e1wiIzAwMDAwXCJ9IGJlYXQgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiB9fT57VHlwZX08L2Rpdj5cbiAgICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgPExvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT5cbiAgICAgICAgICAgICAgPEdyaWRPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIgfX0+e0NhdGVnb3J5fTwvZGl2PlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudExvZ2lzdGljcztcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2lzdGljc1wiOiBcImV2ZW50LWxvZ2lzdGljc19sb2dpc3RpY3NfXzJRUWt3XCIsXG5cdFwiaW1hZ2VcIjogXCJldmVudC1sb2dpc3RpY3NfaW1hZ2VfXzE4dVZZXCIsXG5cdFwibGlzdFwiOiBcImV2ZW50LWxvZ2lzdGljc19saXN0X18xQktQUFwiLFxuXHRcInNwYW5lclwiOiBcImV2ZW50LWxvZ2lzdGljc19zcGFuZXJfXzNpenRlXCIsXG5cdFwiaWNvblwiOiBcImV2ZW50LWxvZ2lzdGljc19pY29uX18yYW1LclwiLFxuXHRcInRpbWVyXCI6IFwiZXZlbnQtbG9naXN0aWNzX3RpbWVyX18yeFhvUVwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEV2ZW50U3VtbWFyeShwcm9wcykge1xuICBjb25zdCB7IFRpdGxlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cbiAgICAgIDxoMT57VGl0bGV9PC9oMT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U3VtbWFyeTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlcIjogXCJldmVudC1zdW1tYXJ5X3N1bW1hcnlfXzJhUUprXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9sb2dpc3RpY3MtaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIExvZ2lzdGljc0l0ZW0ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naXN0aWNzSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJsb2dpc3RpY3MtaXRlbV9pdGVtX184cndnYlwiLFxuXHRcImljb25cIjogXCJsb2dpc3RpY3MtaXRlbV9pY29uX19vZkhOWVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Gb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xyXG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvZGFzaGJvYXJkLzY1NGJjMjkyMWVmYzZjMTA3MDQ2MWUxM1xyXG5cclxuZnVuY3Rpb24gRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgYW5zd2VySW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZFF1ZXN0aW9uRGF0YShcclxuICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICBwb3N0SUQsXHJcbiAgICBJdGVtVGl0bGUsXHJcbiAgICBRdWVzdGlvbixcclxuICAgIGNvbWJpbmVkRGF0ZVRpbWVcclxuICApIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3FyZXNwb25zZS9RdWVzdGlvblJlc3BvbnNlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICAgICAgcG9zdElELFxyXG4gICAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgICBRdWVzdGlvbixcclxuICAgICAgICBjb21iaW5lZERhdGVUaW1lLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIGNvbnN0IHBvc3RJRCA9IHByb3BzLmRhdGEyLl9pZDtcclxuICBjb25zdCBJdGVtVGl0bGUgPSBwcm9wcy5kYXRhMi5UaXRsZTtcclxuICBjb25zdCBRdWVzdGlvbiA9IHByb3BzLmRhdGEyLlF1ZXN0aW9uO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBjb21iaW5lZERhdGVUaW1lID0gYCR7Zm9ybWF0dGVkRGF0ZX0gJHtmb3JtYXR0ZWRUaW1lfWA7XHJcblxyXG4gIC8vY29uc29sZS5sb2cocG9zdElEKTtcclxuICBjb25zdCBhbnN3ZXJTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWRBbnN3ZXIgPSBhbnN3ZXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRRdWVzdGlvbkRhdGEoXHJcbiAgICAgIGVudGVyZWRBbnN3ZXIsXHJcbiAgICAgIHBvc3RJRCxcclxuICAgICAgSXRlbVRpdGxlLFxyXG4gICAgICBRdWVzdGlvbixcclxuICAgICAgY29tYmluZWREYXRlVGltZVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7IC8vIFRoaXMgcmVzZXRzIHRoZSBmb3JtXHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19PlN1Ym1pdHRpbmcgcmVzcG9uc2UuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59IG9uU3VibWl0PXthbnN3ZXJTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWVzdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbHN9PlxyXG4gICAgICAgIFF1ZXN0aW9uP1xyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHNwYW4gaWQ9XCJxdWVzdGlvbkNvbnRlbnRcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbjF9PlxyXG4gICAgICAgIHtwcm9wcy5kYXRhMi5RdWVzdGlvbn1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxzfT5cclxuICAgICAgICBBbnN3ZXJcclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGlkPVwiYW5zd2VyXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRmaWVsZH1cclxuICAgICAgICByZWY9e2Fuc3dlcklucHV0UmVmfVxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5kaXZ9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX1cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbmNhbmNsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDbG9zZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fSB0eXBlPVwic3VibWl0XCIgcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJGb3JtX21haW5fX3hIcUVOXCIsXG5cdFwibGFiZWxzXCI6IFwiRm9ybV9sYWJlbHNfX2hrMGY1XCIsXG5cdFwic3BhbjFcIjogXCJGb3JtX3NwYW4xX194cWNMOVwiLFxuXHRcImlucHV0ZmllbGRcIjogXCJGb3JtX2lucHV0ZmllbGRfXzJ3R3N5XCIsXG5cdFwiYnV0dG9uODlcIjogXCJGb3JtX2J1dHRvbjg5X18yU09uUFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9RdWVzdGlvbkZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbkZvcm0ocHJvcHMpIHtcclxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEZvcm0gb25jYW5jbGU9e3Byb3BzLm9uY2xvc2V9IGRhdGEyPXtwcm9wcy5kYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUXVlc3Rpb25zXCIpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25Gb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYWNrZXJcIjogXCJRdWVzdGlvbkZvcm1fYmFja2VyX18xei1QYlwiLFxuXHRcImZvcm1Db250YWluZXJcIjogXCJRdWVzdGlvbkZvcm1fZm9ybUNvbnRhaW5lcl9fM2dOMldcIlxufTtcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xubGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG5sZXQgY2xpZW50U2V0ID0gZmFsc2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgaWYgKGNsaWVudFNldCkge1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGFscmVhZHkgc3RvcmVkIGNsaWVudFwiKTtcbiAgICByZXR1cm4gY2FjaGVkQ2xpZW50O1xuICB9XG5cbiAgbGV0IGNsaWVudDtcblxuICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5tb25nb2RiX3VzZXJuYW1lfToke3Byb2Nlc3MuZW52Lm1vbmdvZGJfcGFzc3dvcmR9QCR7cHJvY2Vzcy5lbnYubW9uZ29kYl9jbHVzdGVybmFtZX0ucHNpazJhZS5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XG5cbiAgdHJ5IHtcbiAgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcsIHtcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgICAgcG9vbFNpemU6IDEwLCAvLyBBZGp1c3QgdGhpcyBiYXNlZCBvbiB5b3VyIGFwcGxpY2F0aW9uJ3MgbmVlZHNcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgfVxuXG4gIC8vIEhhbmRsZSB0aGUgJ2Nsb3NlJyBldmVudCBmb3IgcG90ZW50aWFsIHJlY29ubmVjdGlvblxuICBjbGllbnQub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uXCIpO1xuICAgIC8vIEltcGxlbWVudCByZWNvbm5lY3Rpb24gbG9naWMgaGVyZSwgc3VjaCBhcyBjYWxsaW5nIGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgICBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgIC8vY2xpZW50LmNvbm5lY3QoKTtcbiAgfSk7XG5cbiAgaWYgKCFjbGllbnRTZXQpIHtcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gICAgY2xpZW50U2V0ID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBuZXcgY2xpZW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5SWQoaWQpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIik7XG4gIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICBfaWQ6IHBvc3RvYmplY3RJZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlFBbnN3ZXJzXCIpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb25cbiAgICAuZmluZCh7XG4gICAgICBQb3N0SUQ6IGlkLFxuICAgIH0pXG4gICAgLnRvQXJyYXkoKTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG4vLyBsZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbi8vIGxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuLy8gICBpZiAoY2xpZW50U2V0KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuLy8gICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4vLyAgIH1cblxuLy8gICBsZXQgY2xpZW50O1xuXG4vLyAgIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS5wc2lrMmFlLm1vbmdvZGIubmV0LyR7cHJvY2Vzcy5lbnYubW9uZ29kYl9kYXRhYmFzZX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YDtcblxuLy8gICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcsIHtcbi8vICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuLy8gICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuLy8gICB9KTtcblxuLy8gICBpZiAoIWNsaWVudFNldCkge1xuLy8gICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbi8vICAgICBjbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gY2xpZW50O1xuLy8gfVxuXG4vKlxuXG5cbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbmxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY2xpZW50U2V0KSB7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4gIH1cblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuICAgIHtcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgIH1cbiAgKTtcblxuICBpZiAoIWNsaWVudFNldCkge1xuICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbiAgICBjbGllbnRTZXQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4gIH1cblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5cbiovXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeUVtYWlsKGVtYWlsKSB7XG4vLyAgIC8vY29uc29sZS5sb2coZW1haWwpO1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpO1xuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyAgIHJldHVybiBhbGxQb3N0cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhQnlJZChpZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7IC8vd1xuXG4vLyAgIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG4vLyAgIC8vY29uc29sZS5sb2cocG9zdG9iamVjdElkKTtcblxuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50Ll9pZCA9PT0gcG9zdG9iamVjdElkKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbmQoXG4vLyAgICAgKGV2ZW50KSA9PiBldmVudC5faWQudG9TdHJpbmcoKSA9PT0gcG9zdG9iamVjdElkLnRvU3RyaW5nKClcbi8vICAgKTtcbi8vIH1cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4vLyAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgcmV0dXJuIGRhdGEuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuUG9zdElEID09PSBpZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpOyBnb29kXG4vLyAgIGNvbnNvbGUubG9nKG9iamVjdElkKTtcbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG4vLyBpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuXG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG4vLyBjb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbi8vIGNsYXNzIERhdGFiYXNlIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgaWYgKCFEYXRhYmFzZS5pbnN0YW5jZSkge1xuLy8gICAgICAgdGhpcy5jbGllbnQgPSBudWxsO1xuLy8gICAgICAgdGhpcy5jbGllbnRTZXQgPSBmYWxzZTtcbi8vICAgICAgIERhdGFiYXNlLmluc3RhbmNlID0gdGhpcztcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gRGF0YWJhc2UuaW5zdGFuY2U7XG4vLyAgIH1cblxuLy8gICBhc3luYyBjb25uZWN0KCkge1xuLy8gICAgIGlmICh0aGlzLmNsaWVudFNldCkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIpO1xuLy8gICAgICAgcmV0dXJuIHRoaXMuY2xpZW50O1xuLy8gICAgIH1cblxuLy8gICAgIHRoaXMuY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbi8vICAgICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuLy8gICAgICAge1xuLy8gICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbi8vICAgICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4vLyAgICAgICB9XG4vLyAgICAgKTtcblxuLy8gICAgIGlmICghdGhpcy5jbGllbnRTZXQpIHtcbi8vICAgICAgIHRoaXMuY2xpZW50U2V0ID0gdHJ1ZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHRoaXMuY2xpZW50O1xuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XG4vLyBleHBvcnQgY29uc3QgY29ubmVjdFRvRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgcmV0dXJuIGF3YWl0IGRhdGFiYXNlLmNvbm5lY3QoKTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAvL2NvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTpcIiwgZXJyb3IpO1xuLy8gICAgIHRocm93IGVycm9yO1xuLy8gICB9XG4vLyB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeVwiO1xyXG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3NcIjtcclxuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnRcIjtcclxuaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9RdWVzdGlvbkZvcm1cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vaXRlbWlkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdERhdGFCeUlkIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9CdXR0b25cIjtcclxuXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0xvYWRpbmdcIjtcclxuXHJcbmZ1bmN0aW9uIEl0ZW1EZXRhaWxQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1FGb3JtLCBzZXRJc1Nob3dRRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2Nlc3NlZE9iamVjdCwgc2V0UHJvY2Vzc2VkT2JqZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGV4dHJhY3RlZE9iamVjdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGV4dHJhY3RlZE9iamVjdCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHNldFByb2Nlc3NlZE9iamVjdChleHRyYWN0ZWRPYmplY3QpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtwcm9wcy5leHRyYWN0ZWRPYmplY3RdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZyB8fCAhcHJvY2Vzc2VkT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCBldmVudCA9IHByb2Nlc3NlZE9iamVjdDtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93UUZvcm0odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoaWRlTW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dRRm9ybShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntldmVudC5UaXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2V2ZW50LkRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxFdmVudFN1bW1hcnkgVGl0bGU9e2V2ZW50LlRpdGxlfSAvPlxyXG5cclxuICAgICAgPEV2ZW50TG9naXN0aWNzXHJcbiAgICAgICAgRGF0ZT17ZXZlbnQuRGF0ZX1cclxuICAgICAgICBSZWR1Y2VkSW1nPXtldmVudC5SZWR1Y2VkSW1nfVxyXG4gICAgICAgIFRpdGxlPXtldmVudC5UaXRsZX1cclxuICAgICAgICBUeXBlPXtldmVudC5UeXBlfVxyXG4gICAgICAgIENhdGVnb3J5PXtldmVudC5DYXRlZ29yeX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxFdmVudENvbnRlbnQ+XHJcbiAgICAgICAgPHA+e2V2ZW50LkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9FdmVudENvbnRlbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdn0+XHJcbiAgICAgICAgPGEgb25DbGljaz17c2hvd01vZGVIYW5kbGVyfT5cclxuICAgICAgICAgIDxCdXR0b24gY29udGVudD17YENsYWltIFRoaXMgJHtldmVudC5UaXRsZX1gfT48L0J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Nob3dRRm9ybSAmJiA8UXVlc3Rpb25Gb3JtIG9uY2xvc2U9e2hpZGVNb2RlSGFuZGxlcn0gZGF0YT17ZXZlbnR9IC8+fVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBwb3N0SWQgPSBjb250ZXh0LnBhcmFtcy5pdGVtaWQ7XHJcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YUJ5SWQocG9zdElkKTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZXh0cmFjdGVkT2JqZWN0OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWxQYWdlO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b241MlwiOiBcIml0ZW1pZF9idXR0b241Ml9fMnZULW9cIixcblx0XCJidG5kaXZcIjogXCJpdGVtaWRfYnRuZGl2X19JckZUbFwiLFxuXHRcImJ1dHRvbi01MlwiOiBcIml0ZW1pZF9idXR0b24tNTJfXzNka2hUXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pb25pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==