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

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase, getAllPosts, getPostsByEmail, getPostDataById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsByEmail", function() { return getPostsByEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDataById", function() { return getPostDataById; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


const {
  ObjectId
} = __webpack_require__(/*! mongodb */ "mongodb");

async function connectToDatabase() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority", {
    useUnifiedTopology: true // Pass the useUnifiedTopology option here

  });
  return client;
}
async function getAllPosts() {
  const client = await connectToDatabase();
  const db = client.db();
  const data = await db.collection("PostedItem").find({}).toArray();
  return data;
}
async function getPostsByEmail(email) {
  //console.log(email);
  const allPosts = await getAllPosts(); //console.log(allPosts);
  // return allPosts.find((event) => event.posterEmail === email);

  return allPosts.filter(event => event.posterEmail === email);
}
async function getPostDataById(id) {
  const allPosts = await getAllPosts(); //w

  const postobjectId = new ObjectId(id); //console.log(postobjectId);
  // return allPosts.find((event) => event._id === postobjectId);

  return allPosts.find(event => event._id.toString() === postobjectId.toString());
} // export async function getPostsByObjectId(objectId) {
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
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\mylistings\\[specificid].js";
// import React from "react";
// import classes from "./specificid.module.css";
// import Loading from "../../components/UI/Loading";
// import EventSummary from "../../components/feed/FeedDetails/event-summary";
// import EventLogistics from "../../components/feed/FeedDetails/event-logistics";
// import EventContent from "../../components/feed/FeedDetails/event-content";
// import { useState, useEffect } from "react";
// import { Fragment } from "react";
// import Head from "next/head";
// const { ObjectId } = require("mongodb");
// import { getAllPosts } from "../../lib/db";
// import { connectToDatabase } from "../../lib/db";
// function specificid(props) {
//   const [isLoading, setIsLoading] = useState(false);
//   const { extractedObject } = props;
//   if (!extractedObject) {
//     return <Loading />; // Render loading spinner if no data is available
//   }
//   // console.log(extractedObject);
//   useEffect(() => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Simulate a loading time of 5 seconds
//   }, []);
//   if (isLoading) {
//     return <Loading />;
//   }
//   const event = extractedObject;
//   return (
//     <Fragment>
//       <Head>
//         <title>{event.Title}</title>
//         <meta name="description" content={event.Description} />
//       </Head>
//       <EventSummary Title={event.Title} />
//       <EventLogistics
//         Date={event.Date}
//         ReducedImg={event.ReducedImg}
//         Title={event.Title}
//         Type={event.Type}
//         Category={event.Category}
//       />
//       <EventContent>
//         <p>{event.Description}</p>
//       </EventContent>
//     </Fragment>
//   );
// }
// export async function getServerSideProps(context) {
//   const postId = context.params.specificid;
//   const objectId = new ObjectId(postId); // Convert postId to ObjectId
//   const client = await connectToDatabase();
//   const db = client.db();
//   const data = await db.collection("PostedItem").find({}).toArray();
//   const extractedObject = data.find((item) => item._id.equals(objectId));
//   console.log(extractedObject);
//   return {
//     props: {
//       extractedObject: JSON.parse(JSON.stringify(extractedObject)),
//     },
//   };
// }
// export default specificid;
// import React from "react";
// function specificid() {
//   return <div>i am specifspecifjkicid</div>;
// }
// export default specificid;








 //const { ObjectId } = require("mongodb");
//import { getAllPosts } from "../../lib/db";
//import { connectToDatabase } from "../../lib/db";



function specificid(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    extractedObject
  } = props;

  if (!extractedObject) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }, this); // Render loading spinner if no data is available
  } // console.log(extractedObject);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading ti  me of 5 seconds
  }, []);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 12
    }, this);
  }

  const event = extractedObject;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: event.Title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, this);
}

async function getServerSideProps(context) {
  const {
    params
  } = context;
  const {
    specificid
  } = params; //console.log(specificid);

  const postData = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_8__["getPostDataById"])(specificid); //console.log("postData:", postData);

  console.log(postData); //w
  // const data = postData ? postData : null;

  return {
    props: {
      extractedObject: postData //issue here

    }
  };
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvTG9hZGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvbG9naXN0aWNzLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL215bGlzdGluZ3MvW3NwZWNpZmljaWRdLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL215bGlzdGluZ3Mvc3BlY2lmaWNpZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlvbmljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9hZGluZyIsImNsYXNzZXMiLCJsb2FkZXIiLCJqdXN0aWZ5Y29udGVudGNlbnRlciIsImppbXVwcmltYXJ5bG9hZGluZyIsInRleHQiLCJFdmVudENvbnRlbnQiLCJwcm9wcyIsImNvbnRlbnQiLCJjaGlsZHJlbiIsIkV2ZW50TG9naXN0aWNzIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEYXRlIiwiUmVkdWNlZEltZyIsImxvZ2lzdGljcyIsImltYWdlIiwibGlzdCIsInNwYW5lciIsImZvbnRTaXplIiwiRXZlbnRTdW1tYXJ5Iiwic3VtbWFyeSIsIkxvZ2lzdGljc0l0ZW0iLCJpdGVtIiwiT2JqZWN0SWQiLCJyZXF1aXJlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJnZXRBbGxQb3N0cyIsImRiIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImdldFBvc3RzQnlFbWFpbCIsImVtYWlsIiwiYWxsUG9zdHMiLCJmaWx0ZXIiLCJldmVudCIsInBvc3RlckVtYWlsIiwiZ2V0UG9zdERhdGFCeUlkIiwiaWQiLCJwb3N0b2JqZWN0SWQiLCJfaWQiLCJ0b1N0cmluZyIsInNwZWNpZmljaWQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImV4dHJhY3RlZE9iamVjdCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJEZXNjcmlwdGlvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJwb3N0RGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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SyxVQUFELENBQXRDLENBTGdELENBTWhEOztBQUNBWSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixFQVBnRCxDQU96QjtBQUV2Qjs7QUFFQSxTQUFPO0FBQ0xyRCxTQUFLLEVBQUU7QUFDTDhDLHFCQUFlLEVBQUVPLFFBRFosQ0FDc0I7O0FBRHRCO0FBREYsR0FBUDtBQUtEO0FBRWNYLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL215bGlzdGluZ3MvW3NwZWNpZmljaWRdLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Mb2FkaW5nLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRlcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuanVzdGlmeWNvbnRlbnRjZW50ZXJ9ICR7Y2xhc3Nlcy5qaW11cHJpbWFyeWxvYWRpbmd9YH1cclxuICAgICAgPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5QbGVhc2UgYmUgcGF0aWVudC4uLjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZGVyXCI6IFwiTG9hZGluZ19sb2FkZXJfXzNBSUFtXCIsXG5cdFwidGV4dFwiOiBcIkxvYWRpbmdfdGV4dF9fMmF1bWFcIixcblx0XCJqaW11cHJpbWFyeWxvYWRpbmdcIjogXCJMb2FkaW5nX2ppbXVwcmltYXJ5bG9hZGluZ19fMUdISWxcIixcblx0XCJsb2FkaW5nLWtleXMtYXBwLWxvYWRpbmdcIjogXCJMb2FkaW5nX2xvYWRpbmcta2V5cy1hcHAtbG9hZGluZ19fWWwwc0lcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtY29udGVudC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRXZlbnRDb250ZW50KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb250ZW50O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudFwiOiBcImV2ZW50LWNvbnRlbnRfY29udGVudF9fMzBGeHBcIlxufTtcbiIsImltcG9ydCBMb2dpc3RpY3NJdGVtIGZyb20gXCIuL2xvZ2lzdGljcy1pdGVtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9ldmVudC1sb2dpc3RpY3MubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRvZGF5T3V0bGluZSwgR3JpZE91dGxpbmUsIE1lbnVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWlvbmljb25zXCI7XG4vL2h0dHBzOi8vcmVhY3QtaW9uaWNvbnMubmV0bGlmeS5hcHAvXG5mdW5jdGlvbiBFdmVudExvZ2lzdGljcyhwcm9wcykge1xuICBjb25zdCB7IFR5cGUsIENhdGVnb3J5LCBUaXRsZSwgRGF0ZSwgUmVkdWNlZEltZyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntUaXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtUaXRsZX0gLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNC4yL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgID48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubG9naXN0aWNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtSZWR1Y2VkSW1nfSBhbHQ9e1RpdGxlfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgICAgPExvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT5cbiAgICAgICAgICAgICAgPFRvZGF5T3V0bGluZSBjb2xvcj17XCIjMDAwMDBcIn0gYmVhdCBoZWlnaHQ9XCIyNXB4XCIgd2lkdGg9XCIyNXB4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHRpbWUgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiIH19PntEYXRlfTwvdGltZT5cbiAgICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgPExvZ2lzdGljc0l0ZW0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT5cbiAgICAgICAgICAgICAgPE1lbnVPdXRsaW5lIGNvbG9yPXtcIiMwMDAwMFwifSBiZWF0IGhlaWdodD1cIjI1cHhcIiB3aWR0aD1cIjI1cHhcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIgfX0+e1R5cGV9PC9kaXY+XG4gICAgICAgICAgPC9Mb2dpc3RpY3NJdGVtPlxuICAgICAgICAgIDxMb2dpc3RpY3NJdGVtPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+XG4gICAgICAgICAgICAgIDxHcmlkT3V0bGluZSBjb2xvcj17XCIjMDAwMDBcIn0gYmVhdCBoZWlnaHQ9XCIyNXB4XCIgd2lkdGg9XCIyNXB4XCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiIH19PntDYXRlZ29yeX08L2Rpdj5cbiAgICAgICAgICA8L0xvZ2lzdGljc0l0ZW0+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMb2dpc3RpY3M7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpc3RpY3NcIjogXCJldmVudC1sb2dpc3RpY3NfbG9naXN0aWNzX18yUVFrd1wiLFxuXHRcImltYWdlXCI6IFwiZXZlbnQtbG9naXN0aWNzX2ltYWdlX18xOHVWWVwiLFxuXHRcImxpc3RcIjogXCJldmVudC1sb2dpc3RpY3NfbGlzdF9fMUJLUFBcIixcblx0XCJzcGFuZXJcIjogXCJldmVudC1sb2dpc3RpY3Nfc3BhbmVyX18zaXp0ZVwiLFxuXHRcImljb25cIjogXCJldmVudC1sb2dpc3RpY3NfaWNvbl9fMmFtS3JcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBFdmVudFN1bW1hcnkocHJvcHMpIHtcbiAgY29uc3QgeyBUaXRsZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICA8aDE+e1RpdGxlfTwvaDE+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN1bW1hcnk7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdW1tYXJ5XCI6IFwiZXZlbnQtc3VtbWFyeV9zdW1tYXJ5X18yYVFKa1wiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbG9naXN0aWNzLWl0ZW0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBMb2dpc3RpY3NJdGVtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2lzdGljc0l0ZW07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwibG9naXN0aWNzLWl0ZW1faXRlbV9fOHJ3Z2JcIixcblx0XCJpY29uXCI6IFwibG9naXN0aWNzLWl0ZW1faWNvbl9fb2ZITllcIlxufTtcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4gICAge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLCAvLyBQYXNzIHRoZSB1c2VVbmlmaWVkVG9wb2xvZ3kgb3B0aW9uIGhlcmVcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5RW1haWwoZW1haWwpIHtcbiAgLy9jb25zb2xlLmxvZyhlbWFpbCk7XG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7XG4gIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbiAgcmV0dXJuIGFsbFBvc3RzLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTsgLy93XG5cbiAgY29uc3QgcG9zdG9iamVjdElkID0gbmV3IE9iamVjdElkKGlkKTtcbiAgLy9jb25zb2xlLmxvZyhwb3N0b2JqZWN0SWQpO1xuXG4gIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQuX2lkID09PSBwb3N0b2JqZWN0SWQpO1xuICByZXR1cm4gYWxsUG9zdHMuZmluZChcbiAgICAoZXZlbnQpID0+IGV2ZW50Ll9pZC50b1N0cmluZygpID09PSBwb3N0b2JqZWN0SWQudG9TdHJpbmcoKVxuICApO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeU9iamVjdElkKG9iamVjdElkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gICAvL2NvbnNvbGUubG9nKGFsbFBvc3RzKTsgZ29vZFxuLy8gICBjb25zb2xlLmxvZyhvYmplY3RJZCk7XG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuLy8gaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeU9iamVjdElkKG9iamVjdElkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gICBjb25zdCBkYXRhMiA9IGFsbFBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhMik7XG4vLyAgIHJldHVybiBkYXRhMjtcbi8vIH1cbiIsIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc3BlY2lmaWNpZC5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0xvYWRpbmdcIjtcclxuLy8gaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnlcIjtcclxuLy8gaW1wb3J0IEV2ZW50TG9naXN0aWNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzXCI7XHJcbi8vIGltcG9ydCBFdmVudENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50XCI7XHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG4vLyBjb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcclxuLy8gaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcbi8vIGltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG5cclxuLy8gZnVuY3Rpb24gc3BlY2lmaWNpZChwcm9wcykge1xyXG4vLyAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4vLyAgIGNvbnN0IHsgZXh0cmFjdGVkT2JqZWN0IH0gPSBwcm9wcztcclxuXHJcbi8vICAgaWYgKCFleHRyYWN0ZWRPYmplY3QpIHtcclxuLy8gICAgIHJldHVybiA8TG9hZGluZyAvPjsgLy8gUmVuZGVyIGxvYWRpbmcgc3Bpbm5lciBpZiBubyBkYXRhIGlzIGF2YWlsYWJsZVxyXG4vLyAgIH1cclxuLy8gICAvLyBjb25zb2xlLmxvZyhleHRyYWN0ZWRPYmplY3QpO1xyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgIH0sIDIwMDApOyAvLyBTaW11bGF0ZSBhIGxvYWRpbmcgdGltZSBvZiA1IHNlY29uZHNcclxuLy8gICB9LCBbXSk7XHJcblxyXG4vLyAgIGlmIChpc0xvYWRpbmcpIHtcclxuLy8gICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuLy8gICB9XHJcbi8vICAgY29uc3QgZXZlbnQgPSBleHRyYWN0ZWRPYmplY3Q7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8RnJhZ21lbnQ+XHJcbi8vICAgICAgIDxIZWFkPlxyXG4vLyAgICAgICAgIDx0aXRsZT57ZXZlbnQuVGl0bGV9PC90aXRsZT5cclxuLy8gICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtldmVudC5EZXNjcmlwdGlvbn0gLz5cclxuLy8gICAgICAgPC9IZWFkPlxyXG4vLyAgICAgICA8RXZlbnRTdW1tYXJ5IFRpdGxlPXtldmVudC5UaXRsZX0gLz5cclxuXHJcbi8vICAgICAgIDxFdmVudExvZ2lzdGljc1xyXG4vLyAgICAgICAgIERhdGU9e2V2ZW50LkRhdGV9XHJcbi8vICAgICAgICAgUmVkdWNlZEltZz17ZXZlbnQuUmVkdWNlZEltZ31cclxuLy8gICAgICAgICBUaXRsZT17ZXZlbnQuVGl0bGV9XHJcbi8vICAgICAgICAgVHlwZT17ZXZlbnQuVHlwZX1cclxuLy8gICAgICAgICBDYXRlZ29yeT17ZXZlbnQuQ2F0ZWdvcnl9XHJcbi8vICAgICAgIC8+XHJcblxyXG4vLyAgICAgICA8RXZlbnRDb250ZW50PlxyXG4vLyAgICAgICAgIDxwPntldmVudC5EZXNjcmlwdGlvbn08L3A+XHJcbi8vICAgICAgIDwvRXZlbnRDb250ZW50PlxyXG4vLyAgICAgPC9GcmFnbWVudD5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCBwb3N0SWQgPSBjb250ZXh0LnBhcmFtcy5zcGVjaWZpY2lkO1xyXG4vLyAgIGNvbnN0IG9iamVjdElkID0gbmV3IE9iamVjdElkKHBvc3RJZCk7IC8vIENvbnZlcnQgcG9zdElkIHRvIE9iamVjdElkXHJcbi8vICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuLy8gICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIikuZmluZCh7fSkudG9BcnJheSgpO1xyXG5cclxuLy8gICBjb25zdCBleHRyYWN0ZWRPYmplY3QgPSBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGV4dHJhY3RlZE9iamVjdCk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBleHRyYWN0ZWRPYmplY3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXh0cmFjdGVkT2JqZWN0KSksXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHNwZWNpZmljaWQ7XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBmdW5jdGlvbiBzcGVjaWZpY2lkKCkge1xyXG4vLyAgIHJldHVybiA8ZGl2PmkgYW0gc3BlY2lmc3BlY2lmamtpY2lkPC9kaXY+O1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBzcGVjaWZpY2lkO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zcGVjaWZpY2lkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeVwiO1xyXG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3NcIjtcclxuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbi8vY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XHJcbi8vaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcbi8vaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcbmltcG9ydCB7IGdldFBvc3REYXRhQnlJZCB9IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcclxuXHJcbmZ1bmN0aW9uIHNwZWNpZmljaWQocHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGV4dHJhY3RlZE9iamVjdCB9ID0gcHJvcHM7XHJcblxyXG4gIGlmICghZXh0cmFjdGVkT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47IC8vIFJlbmRlciBsb2FkaW5nIHNwaW5uZXIgaWYgbm8gZGF0YSBpcyBhdmFpbGFibGVcclxuICB9XHJcbiAgLy8gY29uc29sZS5sb2coZXh0cmFjdGVkT2JqZWN0KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCAyMDAwKTsgLy8gU2ltdWxhdGUgYSBsb2FkaW5nIHRpICBtZSBvZiA1IHNlY29uZHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbiAgY29uc3QgZXZlbnQgPSBleHRyYWN0ZWRPYmplY3Q7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57ZXZlbnQuVGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtldmVudC5EZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8RXZlbnRTdW1tYXJ5IFRpdGxlPXtldmVudC5UaXRsZX0gLz5cclxuXHJcbiAgICAgIDxFdmVudExvZ2lzdGljc1xyXG4gICAgICAgIERhdGU9e2V2ZW50LkRhdGV9XHJcbiAgICAgICAgUmVkdWNlZEltZz17ZXZlbnQuUmVkdWNlZEltZ31cclxuICAgICAgICBUaXRsZT17ZXZlbnQuVGl0bGV9XHJcbiAgICAgICAgVHlwZT17ZXZlbnQuVHlwZX1cclxuICAgICAgICBDYXRlZ29yeT17ZXZlbnQuQ2F0ZWdvcnl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8RXZlbnRDb250ZW50PlxyXG4gICAgICAgIDxwPntldmVudC5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvRXZlbnRDb250ZW50PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgc3BlY2lmaWNpZCB9ID0gcGFyYW1zO1xyXG4gIC8vY29uc29sZS5sb2coc3BlY2lmaWNpZCk7XHJcblxyXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGFCeUlkKHNwZWNpZmljaWQpO1xyXG4gIC8vY29uc29sZS5sb2coXCJwb3N0RGF0YTpcIiwgcG9zdERhdGEpO1xyXG4gIGNvbnNvbGUubG9nKHBvc3REYXRhKTsgLy93XHJcblxyXG4gIC8vIGNvbnN0IGRhdGEgPSBwb3N0RGF0YSA/IHBvc3REYXRhIDogbnVsbDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGV4dHJhY3RlZE9iamVjdDogcG9zdERhdGEsIC8vaXNzdWUgaGVyZVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGVjaWZpY2lkO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b241MlwiOiBcInNwZWNpZmljaWRfYnV0dG9uNTJfX2FET0tFXCIsXG5cdFwiYnRuZGl2XCI6IFwic3BlY2lmaWNpZF9idG5kaXZfXzJxbnVRXCIsXG5cdFwiYnV0dG9uLTUyXCI6IFwic3BlY2lmaWNpZF9idXR0b24tNTJfXzJUZ3FMXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pb25pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==