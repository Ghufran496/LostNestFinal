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

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\overlayForm\\Form.js";



function Form(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "question",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.labels,
      children: "Question"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      id: "questionContent",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.span1,
      children: props.data2.Question
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "answer",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.labels,
      children: "Answer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      id: "answer",
      className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputfield,
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button89,
        type: "submit",
        role: "button",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
  }, this), document.getElementById("notifications"));
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
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function connectToDatabase() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority", {
    useUnifiedTopology: true // Pass the useUnifiedTopology option here

  });
  return client;
}

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
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\dashboard\\[itemid].js";









const {
  ObjectId
} = __webpack_require__(/*! mongodb */ "mongodb");




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
    extractedObject
  } = props;

  if (!extractedObject) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }, this); // Render loading spinner if no data is available
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 5 seconds
  }, []);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }, this);
  }

  const event = extractedObject; // const changeModeHandler = () => {
  //   setIsShowQForm((prevState) => !prevState);
  // };

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
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), showQForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onclose: hideModeHandler,
      data: event
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

async function getServerSideProps(context) {
  const postId = context.params.itemid;
  const objectId = new ObjectId(postId); // Convert postId to ObjectId

  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_9__["connectToDatabase"])();
  const db = client.db();
  const data = await db.collection("PostedItem").find({}).toArray();
  const extractedObject = data.find(item => item._id.equals(objectId));
  return {
    props: {
      extractedObject: JSON.parse(JSON.stringify(extractedObject))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvTG9hZGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvbG9naXN0aWNzLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vUXVlc3Rpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3ZlcmxheUZvcm0vUXVlc3Rpb25Gb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9baXRlbWlkXS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaXRlbWlkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW9uaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2FkaW5nIiwiY2xhc3NlcyIsImxvYWRlciIsImp1c3RpZnljb250ZW50Y2VudGVyIiwiamltdXByaW1hcnlsb2FkaW5nIiwidGV4dCIsIkV2ZW50Q29udGVudCIsInByb3BzIiwiY29udGVudCIsImNoaWxkcmVuIiwiRXZlbnRMb2dpc3RpY3MiLCJUeXBlIiwiQ2F0ZWdvcnkiLCJUaXRsZSIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwibG9naXN0aWNzIiwiaW1hZ2UiLCJsaXN0Iiwic3BhbmVyIiwiZm9udFNpemUiLCJFdmVudFN1bW1hcnkiLCJzdW1tYXJ5IiwiTG9naXN0aWNzSXRlbSIsIml0ZW0iLCJGb3JtIiwibWFpbiIsImxhYmVscyIsInNwYW4xIiwiZGF0YTIiLCJRdWVzdGlvbiIsImlucHV0ZmllbGQiLCJidG5kaXYiLCJidXR0b244OSIsIm9uY2FuY2xlIiwiUXVlc3Rpb25Gb3JtIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJiYWNrZXIiLCJmb3JtQ29udGFpbmVyIiwib25jbG9zZSIsImRhdGEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJPYmplY3RJZCIsInJlcXVpcmUiLCJJdGVtRGV0YWlsUGFnZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwic2hvd1FGb3JtIiwic2V0SXNTaG93UUZvcm0iLCJleHRyYWN0ZWRPYmplY3QiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJzaG93TW9kZUhhbmRsZXIiLCJoaWRlTW9kZUhhbmRsZXIiLCJEZXNjcmlwdGlvbiIsImJ1dHRvbjUyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBvc3RJZCIsInBhcmFtcyIsIml0ZW1pZCIsIm9iamVjdElkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJfaWQiLCJlcXVhbHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNFLFNBQUwsQ0FBZXRCLGVBQWYsQ0FBWDtBQURaO0FBREYsR0FBUDtBQUtEO0FBRWNOLDZFQUFmLEU7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQvW2l0ZW1pZF0uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xvYWRpbmcubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5qdXN0aWZ5Y29udGVudGNlbnRlcn0gJHtjbGFzc2VzLmppbXVwcmltYXJ5bG9hZGluZ31gfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlBsZWFzZSBiZSBwYXRpZW50Li4uPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkZXJcIjogXCJMb2FkaW5nX2xvYWRlcl9fM0FJQW1cIixcblx0XCJ0ZXh0XCI6IFwiTG9hZGluZ190ZXh0X18yYXVtYVwiLFxuXHRcImppbXVwcmltYXJ5bG9hZGluZ1wiOiBcIkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbFwiLFxuXHRcImxvYWRpbmcta2V5cy1hcHAtbG9hZGluZ1wiOiBcIkxvYWRpbmdfbG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nX19ZbDBzSVwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBFdmVudENvbnRlbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudENvbnRlbnQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50XCI6IFwiZXZlbnQtY29udGVudF9jb250ZW50X18zMEZ4cFwiXG59O1xuIiwiaW1wb3J0IExvZ2lzdGljc0l0ZW0gZnJvbSBcIi4vbG9naXN0aWNzLWl0ZW1cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVG9kYXlPdXRsaW5lLCBHcmlkT3V0bGluZSwgTWVudU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaW9uaWNvbnNcIjtcbi8vaHR0cHM6Ly9yZWFjdC1pb25pY29ucy5uZXRsaWZ5LmFwcC9cbmZ1bmN0aW9uIEV2ZW50TG9naXN0aWNzKHByb3BzKSB7XG4gIGNvbnN0IHsgVHlwZSwgQ2F0ZWdvcnksIFRpdGxlLCBEYXRlLCBSZWR1Y2VkSW1nIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e1RpdGxlfSAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi40LjIvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpc3RpY3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e1JlZHVjZWRJbWd9IGFsdD17VGl0bGV9IHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8VG9kYXlPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8dGltZSBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIgfX0+e0RhdGV9PC90aW1lPlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgICA8TG9naXN0aWNzSXRlbT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PlxuICAgICAgICAgICAgICA8TWVudU91dGxpbmUgY29sb3I9e1wiIzAwMDAwXCJ9IGJlYXQgaGVpZ2h0PVwiMjVweFwiIHdpZHRoPVwiMjVweFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjJyZW1cIiB9fT57VHlwZX08L2Rpdj5cbiAgICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgPExvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT5cbiAgICAgICAgICAgICAgPEdyaWRPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIgfX0+e0NhdGVnb3J5fTwvZGl2PlxuICAgICAgICAgIDwvTG9naXN0aWNzSXRlbT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudExvZ2lzdGljcztcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2lzdGljc1wiOiBcImV2ZW50LWxvZ2lzdGljc19sb2dpc3RpY3NfXzJRUWt3XCIsXG5cdFwiaW1hZ2VcIjogXCJldmVudC1sb2dpc3RpY3NfaW1hZ2VfXzE4dVZZXCIsXG5cdFwibGlzdFwiOiBcImV2ZW50LWxvZ2lzdGljc19saXN0X18xQktQUFwiLFxuXHRcInNwYW5lclwiOiBcImV2ZW50LWxvZ2lzdGljc19zcGFuZXJfXzNpenRlXCIsXG5cdFwiaWNvblwiOiBcImV2ZW50LWxvZ2lzdGljc19pY29uX18yYW1LclwiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZXZlbnQtc3VtbWFyeS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEV2ZW50U3VtbWFyeShwcm9wcykge1xuICBjb25zdCB7IFRpdGxlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cbiAgICAgIDxoMT57VGl0bGV9PC9oMT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U3VtbWFyeTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlcIjogXCJldmVudC1zdW1tYXJ5X3N1bW1hcnlfXzJhUUprXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9sb2dpc3RpY3MtaXRlbS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIExvZ2lzdGljc0l0ZW0ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naXN0aWNzSXRlbTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJsb2dpc3RpY3MtaXRlbV9pdGVtX184cndnYlwiLFxuXHRcImljb25cIjogXCJsb2dpc3RpY3MtaXRlbV9pY29uX19vZkhOWVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Gb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInF1ZXN0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgUXVlc3Rpb25cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzcGFuIGlkPVwicXVlc3Rpb25Db250ZW50XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW4xfT5cclxuICAgICAgICB7cHJvcHMuZGF0YTIuUXVlc3Rpb259XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5zd2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsc30+XHJcbiAgICAgICAgQW5zd2VyXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYW5zd2VyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0ZmllbGR9IHJlcXVpcmVkIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5kaXZ9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b244OX1cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbmNhbmNsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDbG9zZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjg5fSB0eXBlPVwic3VibWl0XCIgcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJGb3JtX21haW5fX3hIcUVOXCIsXG5cdFwibGFiZWxzXCI6IFwiRm9ybV9sYWJlbHNfX2hrMGY1XCIsXG5cdFwic3BhbjFcIjogXCJGb3JtX3NwYW4xX194cWNMOVwiLFxuXHRcImlucHV0ZmllbGRcIjogXCJGb3JtX2lucHV0ZmllbGRfXzJ3R3N5XCIsXG5cdFwiYnV0dG9uODlcIjogXCJGb3JtX2J1dHRvbjg5X18yU09uUFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9RdWVzdGlvbkZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBRdWVzdGlvbkZvcm0ocHJvcHMpIHtcclxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2VyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEZvcm0gb25jYW5jbGU9e3Byb3BzLm9uY2xvc2V9IGRhdGEyPXtwcm9wcy5kYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90aWZpY2F0aW9uc1wiKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uRm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFja2VyXCI6IFwiUXVlc3Rpb25Gb3JtX2JhY2tlcl9fMXotUGJcIixcblx0XCJmb3JtQ29udGFpbmVyXCI6IFwiUXVlc3Rpb25Gb3JtX2Zvcm1Db250YWluZXJfXzNnTjJXXCJcbn07XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZ2h1ZnJhbjpBbGxhaGlzMUBjbHVzdGVyMC5wc2lrMmFlLm1vbmdvZGIubmV0L2F1dGhTZWMxND9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIixcbiAgICB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsIC8vIFBhc3MgdGhlIHVzZVVuaWZpZWRUb3BvbG9neSBvcHRpb24gaGVyZVxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeVwiO1xyXG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3NcIjtcclxuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnRcIjtcclxuaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9RdWVzdGlvbkZvcm1cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vaXRlbWlkLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG5cclxuZnVuY3Rpb24gSXRlbURldGFpbFBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UUZvcm0sIHNldElzU2hvd1FGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBleHRyYWN0ZWRPYmplY3QgfSA9IHByb3BzO1xyXG5cclxuICBpZiAoIWV4dHJhY3RlZE9iamVjdCkge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+OyAvLyBSZW5kZXIgbG9hZGluZyBzcGlubmVyIGlmIG5vIGRhdGEgaXMgYXZhaWxhYmxlXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCAyMDAwKTsgLy8gU2ltdWxhdGUgYSBsb2FkaW5nIHRpbWUgb2YgNSBzZWNvbmRzXHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG4gIGNvbnN0IGV2ZW50ID0gZXh0cmFjdGVkT2JqZWN0O1xyXG4gIC8vIGNvbnN0IGNoYW5nZU1vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gIC8vICAgc2V0SXNTaG93UUZvcm0oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgLy8gfTtcclxuICBjb25zdCBzaG93TW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dRRm9ybSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpZGVNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd1FGb3JtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2V2ZW50LlRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXZlbnQuRGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEV2ZW50U3VtbWFyeSBUaXRsZT17ZXZlbnQuVGl0bGV9IC8+XHJcblxyXG4gICAgICA8RXZlbnRMb2dpc3RpY3NcclxuICAgICAgICBEYXRlPXtldmVudC5EYXRlfVxyXG4gICAgICAgIFJlZHVjZWRJbWc9e2V2ZW50LlJlZHVjZWRJbWd9XHJcbiAgICAgICAgVGl0bGU9e2V2ZW50LlRpdGxlfVxyXG4gICAgICAgIFR5cGU9e2V2ZW50LlR5cGV9XHJcbiAgICAgICAgQ2F0ZWdvcnk9e2V2ZW50LkNhdGVnb3J5fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEV2ZW50Q29udGVudD5cclxuICAgICAgICA8cD57ZXZlbnQuRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L0V2ZW50Q29udGVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kZUhhbmRsZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uNTJ9XHJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBDbGFpbSB0aGlzIHtldmVudC5UaXRsZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd1FGb3JtICYmIDxRdWVzdGlvbkZvcm0gb25jbG9zZT17aGlkZU1vZGVIYW5kbGVyfSBkYXRhPXtldmVudH0gLz59XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBvc3RJZCA9IGNvbnRleHQucGFyYW1zLml0ZW1pZDtcclxuICBjb25zdCBvYmplY3RJZCA9IG5ldyBPYmplY3RJZChwb3N0SWQpOyAvLyBDb252ZXJ0IHBvc3RJZCB0byBPYmplY3RJZFxyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcblxyXG4gIGNvbnN0IGV4dHJhY3RlZE9iamVjdCA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBleHRyYWN0ZWRPYmplY3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXh0cmFjdGVkT2JqZWN0KSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWxQYWdlO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b241MlwiOiBcIml0ZW1pZF9idXR0b241Ml9fMnZULW9cIixcblx0XCJidG5kaXZcIjogXCJpdGVtaWRfYnRuZGl2X19JckZUbFwiLFxuXHRcImJ1dHRvbi01MlwiOiBcIml0ZW1pZF9idXR0b24tNTJfXzNka2hUXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW9uaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=