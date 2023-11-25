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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3MubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9sb2dpc3RpY3MtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvbG9naXN0aWNzLWl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9Gb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9RdWVzdGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9RdWVzdGlvbkZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9pdGVtaWQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW9uaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImNsYXNzZXMiLCJidG4iLCJjb250ZW50IiwiTG9hZGluZyIsImxvYWRlciIsImp1c3RpZnljb250ZW50Y2VudGVyIiwiamltdXByaW1hcnlsb2FkaW5nIiwidGV4dCIsIkV2ZW50Q29udGVudCIsImNoaWxkcmVuIiwiRXZlbnRMb2dpc3RpY3MiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwibG9naXN0aWNzIiwiaW1hZ2UiLCJsaXN0Iiwic3BhbmVyIiwiZm9udFNpemUiLCJ0aW1lciIsIkV2ZW50U3VtbWFyeSIsInN1bW1hcnkiLCJMb2dpc3RpY3NJdGVtIiwiaXRlbSIsIkZvcm0iLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImFuc3dlcklucHV0UmVmIiwidXNlUmVmIiwic2VuZFF1ZXN0aW9uRGF0YSIsImVudGVyZWRBbnN3ZXIiLCJwb3N0SUQiLCJJdGVtVGl0bGUiLCJRdWVzdGlvbiIsImNvbWJpbmVkRGF0ZVRpbWUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsImRhdGEyIiwiX2lkIiwiY3VycmVudERhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImFuc3dlclN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwicmVzdWx0IiwidGFyZ2V0IiwicmVzZXQiLCJtYWluIiwibGFiZWxzIiwic3BhbjEiLCJpbnB1dGZpZWxkIiwiYnRuZGl2IiwiYnV0dG9uODkiLCJvbmNhbmNsZSIsIlF1ZXN0aW9uRm9ybSIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiYmFja2VyIiwiZm9ybUNvbnRhaW5lciIsIm9uY2xvc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiT2JqZWN0SWQiLCJyZXF1aXJlIiwiY2FjaGVkQ2xpZW50IiwiY2xpZW50U2V0IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uZWN0VGltZW91dE1TIiwicG9vbFNpemUiLCJlcnJvciIsIm9uIiwiZ2V0QWxsUG9zdHMiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImdldFBvc3REYXRhQnlJZCIsImlkIiwidXNlcnNDb2xsZWN0aW9uIiwicG9zdG9iamVjdElkIiwidXNlciIsImZpbmRPbmUiLCJnZXRSZXNwb25zZURhdGFCeUlkIiwiUG9zdElEIiwiZmV0Y2hhbGxlbWFpbHMiLCJhbGxlbWFpbHMiLCJwcm9qZWN0aW9uIiwicGFzc3dvcmQiLCJuYW1lIiwiSXRlbURldGFpbFBhZ2UiLCJzaG93UUZvcm0iLCJzZXRJc1Nob3dRRm9ybSIsInByb2Nlc3NlZE9iamVjdCIsInNldFByb2Nlc3NlZE9iamVjdCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImV4dHJhY3RlZE9iamVjdCIsInNob3dNb2RlSGFuZGxlciIsImhpZGVNb2RlSGFuZGxlciIsIkRlc2NyaXB0aW9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBvc3RJZCIsInBhcmFtcyIsIml0ZW1pZCIsInBvc3REYXRhIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJyZXEiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFFQSxNQUFN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OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC9baXRlbWlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59PlxyXG4gICAgICB7cHJvcHMuY29udGVudH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ0blwiOiBcIkJ1dHRvbl9idG5fXzNJdGMzXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xvYWRpbmcubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5qdXN0aWZ5Y29udGVudGNlbnRlcn0gJHtjbGFzc2VzLmppbXVwcmltYXJ5bG9hZGluZ31gfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkZXJcIjogXCJMb2FkaW5nX2xvYWRlcl9fM0FJQW1cIixcblx0XCJ0ZXh0XCI6IFwiTG9hZGluZ190ZXh0X18yYXVtYVwiLFxuXHRcImppbXVwcmltYXJ5bG9hZGluZ1wiOiBcIkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbFwiLFxuXHRcImxvYWRpbmcta2V5cy1hcHAtbG9hZGluZ1wiOiBcIkxvYWRpbmdfbG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nX19ZbDBzSVwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBFdmVudENvbnRlbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudENvbnRlbnQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50XCI6IFwiZXZlbnQtY29udGVudF9jb250ZW50X18zMEZ4cFwiXG59O1xuIiwiaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSBcIi4vbG9naXN0aWNzLWl0ZW1cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVG9kYXlPdXRsaW5lLCBHcmlkT3V0bGluZSwgTWVudU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaW9uaWNvbnNcIjtcbi8vaHR0cHM6Ly9yZWFjdC1pb25pY29ucy5uZXRsaWZ5LmFwcC9cbmZ1bmN0aW9uIEV2ZW50TG9naXN0aWNzKHByb3BzKSB7XG4gIGNvbnN0IHsgVHlwZSwgQ2F0ZWdvcnksIFRpdGxlLCBEYXRlLCBSZWR1Y2VkSW1nIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e1RpdGxlfSAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi40LjIvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e1JlZHVjZWRJbWd9IGFsdD17VGl0bGV9IHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8VG9kYXlPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8dGltZSBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lcn0+IHtEYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgPExvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT5cbiAgICAgICAgICAgICAgPE1lbnVPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIgfX0+e1R5cGV9PC9kaXY+XG4gICAgICAgICAgPC9Mb2dpc3RpY3NJdGVtPlxuICAgICAgICAgIDxMb2dpc3RpY3NJdGVtPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+XG4gICAgICAgICAgICAgIDxHcmlkT3V0bGluZSBjb2xvcj17XCIjMDAwMDBcIn0gYmVhdCBoZWlnaHQ9XCIyNXB4XCIgd2lkdGg9XCIyNXB4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiIH19PntDYXRlZ29yeX08L2Rpdj5cbiAgICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMb2dpc3RpY3M7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpc3RpY3NcIjogXCJldmVudC1sb2dpc3RpY3NfbG9naXN0aWNzX18yUVFrd1wiLFxuXHRcImltYWdlXCI6IFwiZXZlbnQtbG9naXN0aWNzX2ltYWdlX18xOHVWWVwiLFxuXHRcImxpc3RcIjogXCJldmVudC1sb2dpc3RpY3NfbGlzdF9fMUJLUFBcIixcblx0XCJzcGFuZXJcIjogXCJldmVudC1sb2dpc3RpY3Nfc3BhbmVyX18zaXp0ZVwiLFxuXHRcImljb25cIjogXCJldmVudC1sb2dpc3RpY3NfaWNvbl9fMmFtS3JcIixcblx0XCJ0aW1lclwiOiBcImV2ZW50LWxvZ2lzdGljc190aW1lcl9fMnhYb1FcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBFdmVudFN1bW1hcnkocHJvcHMpIHtcbiAgY29uc3QgeyBUaXRsZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICA8aDE+e1RpdGxlfTwvaDE+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN1bW1hcnk7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdW1tYXJ5XCI6IFwiZXZlbnQtc3VtbWFyeV9zdW1tYXJ5X18yYVFKa1wiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbG9naXN0aWNzLWl0ZW0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBMb2dpc3RpY3NJdGVtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2lzdGljc0l0ZW07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwibG9naXN0aWNzLWl0ZW1faXRlbV9fOHJ3Z2JcIixcblx0XCJpY29uXCI6IFwibG9naXN0aWNzLWl0ZW1faWNvbl9fb2ZITllcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1VJL0xvYWRpbmdcIjtcclxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2Rhc2hib2FyZC82NTRiYzI5MjFlZmM2YzEwNzA0NjFlMTNcclxuXHJcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGFuc3dlcklucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRRdWVzdGlvbkRhdGEoXHJcbiAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgcG9zdElELFxyXG4gICAgSXRlbVRpdGxlLFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBjb21iaW5lZERhdGVUaW1lXHJcbiAgKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9xcmVzcG9uc2UvUXVlc3Rpb25SZXNwb25zZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgICAgIHBvc3RJRCxcclxuICAgICAgICBJdGVtVGl0bGUsXHJcbiAgICAgICAgUXVlc3Rpb24sXHJcbiAgICAgICAgY29tYmluZWREYXRlVGltZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuICBjb25zdCBwb3N0SUQgPSBwcm9wcy5kYXRhMi5faWQ7XHJcbiAgY29uc3QgSXRlbVRpdGxlID0gcHJvcHMuZGF0YTIuVGl0bGU7XHJcbiAgY29uc3QgUXVlc3Rpb24gPSBwcm9wcy5kYXRhMi5RdWVzdGlvbjtcclxuXHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgY29uc3QgY29tYmluZWREYXRlVGltZSA9IGAke2Zvcm1hdHRlZERhdGV9ICR7Zm9ybWF0dGVkVGltZX1gO1xyXG5cclxuICAvL2NvbnNvbGUubG9nKHBvc3RJRCk7XHJcbiAgY29uc3QgYW5zd2VyU3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkQW5zd2VyID0gYW5zd2VySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kUXVlc3Rpb25EYXRhKFxyXG4gICAgICBlbnRlcmVkQW5zd2VyLFxyXG4gICAgICBwb3N0SUQsXHJcbiAgICAgIEl0ZW1UaXRsZSxcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIGNvbWJpbmVkRGF0ZVRpbWVcclxuICAgICk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpOyAvLyBUaGlzIHJlc2V0cyB0aGUgZm9ybVxyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fT5TdWJtaXR0aW5nIHJlc3BvbnNlLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufSBvblN1Ym1pdD17YW5zd2VyU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVlc3Rpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWxzfT5cclxuICAgICAgICBRdWVzdGlvbj9cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzcGFuIGlkPVwicXVlc3Rpb25Db250ZW50XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW4xfT5cclxuICAgICAgICB7cHJvcHMuZGF0YTIuUXVlc3Rpb259XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgQW5zd2VyXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBpZD1cImFuc3dlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9XHJcbiAgICAgICAgcmVmPXthbnN3ZXJJbnB1dFJlZn1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uODl9XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25jYW5jbGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xvc2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX0gdHlwZT1cInN1Ym1pdFwiIHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiRm9ybV9tYWluX194SHFFTlwiLFxuXHRcImxhYmVsc1wiOiBcIkZvcm1fbGFiZWxzX19oazBmNVwiLFxuXHRcInNwYW4xXCI6IFwiRm9ybV9zcGFuMV9feHFjTDlcIixcblx0XCJpbnB1dGZpZWxkXCI6IFwiRm9ybV9pbnB1dGZpZWxkX18yd0dzeVwiLFxuXHRcImJ1dHRvbjg5XCI6IFwiRm9ybV9idXR0b244OV9fMlNPblBcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUXVlc3Rpb25Gb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gUXVlc3Rpb25Gb3JtKHByb3BzKSB7XHJcbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgIDxGb3JtIG9uY2FuY2xlPXtwcm9wcy5vbmNsb3NlfSBkYXRhMj17cHJvcHMuZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlF1ZXN0aW9uc1wiKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uRm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2VyXCI6IFwiUXVlc3Rpb25Gb3JtX2JhY2tlcl9fMXotUGJcIixcblx0XCJmb3JtQ29udGFpbmVyXCI6IFwiUXVlc3Rpb25Gb3JtX2Zvcm1Db250YWluZXJfXzNnTjJXXCJcbn07XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xubGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjbGllbnRTZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIik7XG4gICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbiAgfVxuXG4gIGxldCBjbGllbnQ7XG5cbiAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiK3NydjovLyR7cHJvY2Vzcy5lbnYubW9uZ29kYl91c2VybmFtZX06JHtwcm9jZXNzLmVudi5tb25nb2RiX3Bhc3N3b3JkfUAke3Byb2Nlc3MuZW52Lm1vbmdvZGJfY2x1c3Rlcm5hbWV9LnBzaWsyYWUubW9uZ29kYi5uZXQvJHtwcm9jZXNzLmVudi5tb25nb2RiX2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4gIHRyeSB7XG4gICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChjb25uZWN0aW9uU3RyaW5nLCB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbiAgICAgIHBvb2xTaXplOiAxMCwgLy8gQWRqdXN0IHRoaXMgYmFzZWQgb24geW91ciBhcHBsaWNhdGlvbidzIG5lZWRzXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4gIH1cblxuICAvLyBIYW5kbGUgdGhlICdjbG9zZScgZXZlbnQgZm9yIHBvdGVudGlhbCByZWNvbm5lY3Rpb25cbiAgY2xpZW50Lm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBjbG9zZWQuIFJlY29ubmVjdGluZy4uLlwiKTtcbiAgICAvLyBJbXBsZW1lbnQgcmVjb25uZWN0aW9uIGxvZ2ljIGhlcmUsIHN1Y2ggYXMgY2FsbGluZyBjb25uZWN0VG9EYXRhYmFzZSgpXG4gICAgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAvL2NsaWVudC5jb25uZWN0KCk7XG4gIH0pO1xuXG4gIGlmICghY2xpZW50U2V0KSB7XG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNsaWVudFNldCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIikuZmluZCh7fSkudG9BcnJheSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpO1xuICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgX2lkOiBwb3N0b2JqZWN0SWQsXG4gIH0pO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VEYXRhQnlJZChpZCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uXG4gICAgLmZpbmQoe1xuICAgICAgUG9zdElEOiBpZCxcbiAgICB9KVxuICAgIC50b0FycmF5KCk7XG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hhbGxlbWFpbHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuXG4gIGNvbnN0IGFsbGVtYWlscyA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvblxuICAgIC5maW5kKHt9LCB7IHByb2plY3Rpb246IHsgcGFzc3dvcmQ6IDAsIG5hbWU6IDAsIF9pZDogMCB9IH0pXG4gICAgLnRvQXJyYXkoKTtcblxuICByZXR1cm4gYWxsZW1haWxzO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZURhdGEodXNlckVtYWlsKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4vLyAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcbi8vICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKFxuLy8gICAgIHsgZW1haWw6IHVzZXJFbWFpbCB9LFxuLy8gICAgIHsgcHJvamVjdGlvbjogeyBwYXNzd29yZDogMCB9IH1cbi8vICAgKTtcblxuLy8gICByZXR1cm4gdXNlcjtcbi8vIH1cblxuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuLy8gY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbi8vIGxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xuLy8gbGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4vLyAgIGlmIChjbGllbnRTZXQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIiArIGNhY2hlZENsaWVudCk7XG4vLyAgICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbi8vICAgfVxuXG4vLyAgIGxldCBjbGllbnQ7XG5cbi8vICAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiK3NydjovLyR7cHJvY2Vzcy5lbnYubW9uZ29kYl91c2VybmFtZX06JHtwcm9jZXNzLmVudi5tb25nb2RiX3Bhc3N3b3JkfUAke3Byb2Nlc3MuZW52Lm1vbmdvZGJfY2x1c3Rlcm5hbWV9LnBzaWsyYWUubW9uZ29kYi5uZXQvJHtwcm9jZXNzLmVudi5tb25nb2RiX2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4vLyAgIGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoY29ubmVjdGlvblN0cmluZywge1xuLy8gICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbi8vICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4vLyAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4vLyAgIH0pO1xuXG4vLyAgIGlmICghY2xpZW50U2V0KSB7XG4vLyAgICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuLy8gICAgIGNsaWVudFNldCA9IHRydWU7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiBjbGllbnQ7XG4vLyB9XG5cbi8qXG5cblxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xubGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjbGllbnRTZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIiArIGNhY2hlZENsaWVudCk7XG4gICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4gICAge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4gICAgfVxuICApO1xuXG4gIGlmICghY2xpZW50U2V0KSB7XG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNsaWVudFNldCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cblxuKi9cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5RW1haWwoZW1haWwpIHtcbi8vICAgLy9jb25zb2xlLmxvZyhlbWFpbCk7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbi8vICAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7XG4vLyAgIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyB9XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTsgLy93XG5cbi8vICAgY29uc3QgcG9zdG9iamVjdElkID0gbmV3IE9iamVjdElkKGlkKTtcbi8vICAgLy9jb25zb2xlLmxvZyhwb3N0b2JqZWN0SWQpO1xuXG4vLyAgIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQuX2lkID09PSBwb3N0b2JqZWN0SWQpO1xuLy8gICByZXR1cm4gYWxsUG9zdHMuZmluZChcbi8vICAgICAoZXZlbnQpID0+IGV2ZW50Ll9pZC50b1N0cmluZygpID09PSBwb3N0b2JqZWN0SWQudG9TdHJpbmcoKVxuLy8gICApO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YUJ5SWQoaWQpIHtcbi8vICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbi8vICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlFBbnN3ZXJzXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblxuLy8gICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuLy8gICByZXR1cm4gZGF0YS5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5Qb3N0SUQgPT09IGlkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlPYmplY3RJZChvYmplY3RJZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7IGdvb2Rcbi8vICAgY29uc29sZS5sb2cob2JqZWN0SWQpO1xuLy8gICBjb25zdCBkYXRhMiA9IGFsbFBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhMik7XG4vLyAgIHJldHVybiBkYXRhMjtcbi8vIH1cbi8vIGltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlPYmplY3RJZChvYmplY3RJZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuLy8gY2xhc3MgRGF0YWJhc2Uge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XG4vLyAgICAgICB0aGlzLmNsaWVudCA9IG51bGw7XG4vLyAgICAgICB0aGlzLmNsaWVudFNldCA9IGZhbHNlO1xuLy8gICAgICAgRGF0YWJhc2UuaW5zdGFuY2UgPSB0aGlzO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBEYXRhYmFzZS5pbnN0YW5jZTtcbi8vICAgfVxuXG4vLyAgIGFzeW5jIGNvbm5lY3QoKSB7XG4vLyAgICAgaWYgKHRoaXMuY2xpZW50U2V0KSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIik7XG4vLyAgICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4vLyAgICAgfVxuXG4vLyAgICAgdGhpcy5jbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuLy8gICAgICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbi8vICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuLy8gICAgICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbi8vICAgICAgIH1cbi8vICAgICApO1xuXG4vLyAgICAgaWYgKCF0aGlzLmNsaWVudFNldCkge1xuLy8gICAgICAgdGhpcy5jbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcbi8vIGV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGFzeW5jICgpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICByZXR1cm4gYXdhaXQgZGF0YWJhc2UuY29ubmVjdCgpO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIC8vY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4vLyAgICAgdGhyb3cgZXJyb3I7XG4vLyAgIH1cbi8vIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFdmVudFN1bW1hcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1zdW1tYXJ5XCI7XHJcbmltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljc1wiO1xyXG5pbXBvcnQgRXZlbnRDb250ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtY29udGVudFwiO1xyXG5pbXBvcnQgUXVlc3Rpb25Gb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL292ZXJsYXlGb3JtL1F1ZXN0aW9uRm9ybVwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9pdGVtaWQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YUJ5SWQgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTG9hZGluZ1wiO1xyXG5cclxuZnVuY3Rpb24gSXRlbURldGFpbFBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UUZvcm0sIHNldElzU2hvd1FGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvY2Vzc2VkT2JqZWN0LCBzZXRQcm9jZXNzZWRPYmplY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZXh0cmFjdGVkT2JqZWN0IH0gPSBwcm9wcztcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZXh0cmFjdGVkT2JqZWN0ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgc2V0UHJvY2Vzc2VkT2JqZWN0KGV4dHJhY3RlZE9iamVjdCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW3Byb3BzLmV4dHJhY3RlZE9iamVjdF0pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nIHx8ICFwcm9jZXNzZWRPYmplY3QpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGV2ZW50ID0gcHJvY2Vzc2VkT2JqZWN0O1xyXG5cclxuICBjb25zdCBzaG93TW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dRRm9ybSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpZGVNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd1FGb3JtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2V2ZW50LlRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXZlbnQuRGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEV2ZW50U3VtbWFyeSBUaXRsZT17ZXZlbnQuVGl0bGV9IC8+XHJcblxyXG4gICAgICA8RXZlbnRMb2dpc3RpY3NcclxuICAgICAgICBEYXRlPXtldmVudC5EYXRlfVxyXG4gICAgICAgIFJlZHVjZWRJbWc9e2V2ZW50LlJlZHVjZWRJbWd9XHJcbiAgICAgICAgVGl0bGU9e2V2ZW50LlRpdGxlfVxyXG4gICAgICAgIFR5cGU9e2V2ZW50LlR5cGV9XHJcbiAgICAgICAgQ2F0ZWdvcnk9e2V2ZW50LkNhdGVnb3J5fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEV2ZW50Q29udGVudD5cclxuICAgICAgICA8cD57ZXZlbnQuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0V2ZW50Q29udGVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YSBvbkNsaWNrPXtzaG93TW9kZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb250ZW50PXtgQ2xhaW0gVGhpcyAke2V2ZW50LlRpdGxlfWB9PjwvQnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd1FGb3JtICYmIDxRdWVzdGlvbkZvcm0gb25jbG9zZT17aGlkZU1vZGVIYW5kbGVyfSBkYXRhPXtldmVudH0gLz59XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBvc3RJZCA9IGNvbnRleHQucGFyYW1zLml0ZW1pZDtcclxuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhQnlJZChwb3N0SWQpO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2F1dGhcIixcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBleHRyYWN0ZWRPYmplY3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpKSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbURldGFpbFBhZ2U7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbjUyXCI6IFwiaXRlbWlkX2J1dHRvbjUyX18ydlQtb1wiLFxuXHRcImJ0bmRpdlwiOiBcIml0ZW1pZF9idG5kaXZfX0lyRlRsXCIsXG5cdFwiYnV0dG9uLTUyXCI6IFwiaXRlbWlkX2J1dHRvbi01Ml9fM2RraFRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlvbmljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9