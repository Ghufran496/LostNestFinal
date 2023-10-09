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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/wVw":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"summary": "event-summary_summary__2aQJk"
};


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nXrA");


/***/ }),

/***/ "BqnO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loader": "Loading_loader__3AIAm",
	"jimuprimaryloading": "Loading_jimuprimaryloading__1GHIl",
	"loading-keys-app-loading": "Loading_loading-keys-app-loading__Yl0sI"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "K4Bz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "event-content_content__30Fxp"
};


/***/ }),

/***/ "VTlJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BqnO");
/* harmony import */ var _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loading_module_css__WEBPACK_IMPORTED_MODULE_2__);




function Loading() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: `${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.justifycontentcenter} ${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jimuprimaryloading}`
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hbaG":
/***/ (function(module, exports) {

module.exports = require("react-ionicons");

/***/ }),

/***/ "nXrA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/feed/FeedDetails/event-summary.module.css
var event_summary_module = __webpack_require__("/wVw");
var event_summary_module_default = /*#__PURE__*/__webpack_require__.n(event_summary_module);

// CONCATENATED MODULE: ./components/feed/FeedDetails/event-summary.js



function EventSummary(props) {
  const {
    Title
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: event_summary_module_default.a.summary,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: Title
    })
  });
}

/* harmony default export */ var event_summary = (EventSummary);
// EXTERNAL MODULE: ./components/feed/FeedDetails/logistics-item.module.css
var logistics_item_module = __webpack_require__("tCnF");
var logistics_item_module_default = /*#__PURE__*/__webpack_require__.n(logistics_item_module);

// CONCATENATED MODULE: ./components/feed/FeedDetails/logistics-item.js



function LogisticsItem(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
    className: logistics_item_module_default.a.item,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: logistics_item_module_default.a.content,
      children: props.children
    })
  });
}

/* harmony default export */ var logistics_item = (LogisticsItem);
// EXTERNAL MODULE: ./components/feed/FeedDetails/event-logistics.module.css
var event_logistics_module = __webpack_require__("qftj");
var event_logistics_module_default = /*#__PURE__*/__webpack_require__.n(event_logistics_module);

// EXTERNAL MODULE: external "react-ionicons"
var external_react_ionicons_ = __webpack_require__("hbaG");

// CONCATENATED MODULE: ./components/feed/FeedDetails/event-logistics.js






 //https://react-ionicons.netlify.app/

function EventLogistics(props) {
  const {
    Type,
    Category,
    Title,
    Date,
    ReducedImg
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: Title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: Title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/font-awesome.min.css",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: event_logistics_module_default.a.logistics,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: event_logistics_module_default.a.image,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: ReducedImg,
          alt: Title,
          width: 400,
          height: 400
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: event_logistics_module_default.a.list,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(logistics_item, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: event_logistics_module_default.a.spaner,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_ionicons_["TodayOutline"], {
              color: "#00000",
              beat: true,
              height: "25px",
              width: "25px"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("time", {
            style: {
              fontSize: "2rem"
            },
            children: Date
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(logistics_item, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: event_logistics_module_default.a.spaner,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_ionicons_["MenuOutline"], {
              color: "#00000",
              beat: true,
              height: "25px",
              width: "25px"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              fontSize: "2rem"
            },
            children: Type
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(logistics_item, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: event_logistics_module_default.a.spaner,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_ionicons_["GridOutline"], {
              color: "#00000",
              beat: true,
              height: "25px",
              width: "25px"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              fontSize: "2rem"
            },
            children: Category
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ var event_logistics = (EventLogistics);
// EXTERNAL MODULE: ./components/feed/FeedDetails/event-content.module.css
var event_content_module = __webpack_require__("K4Bz");
var event_content_module_default = /*#__PURE__*/__webpack_require__.n(event_content_module);

// CONCATENATED MODULE: ./components/feed/FeedDetails/event-content.js



function EventContent(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: event_content_module_default.a.content,
    children: props.children
  });
}

/* harmony default export */ var event_content = (EventContent);
// EXTERNAL MODULE: ./components/UI/Loading.js
var Loading = __webpack_require__("VTlJ");

// EXTERNAL MODULE: ./lib/db.js
var lib_db = __webpack_require__("u1Fb");

// CONCATENATED MODULE: ./pages/dashboard/[itemid].js


// import React from "react";
// import Head from "next/head";
// import { Fragment } from "react";
// import EventSummary from "../../components/feed/FeedDetails/event-summary";
// import EventLogistics from "../../components/feed/FeedDetails/event-logistics";
// import EventContent from "../../components/feed/FeedDetails/event-content";
// const { ObjectId } = require("mongodb");
// import Loading from "../../components/UI/Loading";
// import { connectToDatabase } from "../../lib/db";
// function ItemDetailPage(props) {
//   const event = props.extractedObject;
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
//   const postId = context.params.itemid;
//   const objectId = new ObjectId(postId); // Convert postId to ObjectId
//   const client = await connectToDatabase();
//   const db = client.db();
//   const data = await db.collection("PostedItem").find({}).toArray();
//   const extractedObject = data.find((item) => item._id.equals(objectId));
//   return {
//     props: {
//       extractedObject: JSON.parse(JSON.stringify(extractedObject)),
//     },
//   };
// }
// export default ItemDetailPage;







const {
  ObjectId
} = __webpack_require__("ykE2");




function ItemDetailPage(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    extractedObject
  } = props;

  if (!extractedObject) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Loading["a" /* default */], {}); // Render loading spinner if no data is available
  }

  Object(external_react_["useEffect"])(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 5 seconds
  }, []);

  if (isLoading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Loading["a" /* default */], {});
  }

  const event = extractedObject;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: event.Title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: event.Description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(event_summary, {
      Title: event.Title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(event_logistics, {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(event_content, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: event.Description
      })
    })]
  });
}

async function getServerSideProps(context) {
  const postId = context.params.itemid;
  const objectId = new ObjectId(postId); // Convert postId to ObjectId

  const client = await Object(lib_db["a" /* connectToDatabase */])();
  const db = client.db();
  const data = await db.collection("PostedItem").find({}).toArray();
  const extractedObject = data.find(item => item._id.equals(objectId));
  return {
    props: {
      extractedObject: JSON.parse(JSON.stringify(extractedObject))
    }
  };
}
/* harmony default export */ var _itemid_ = __webpack_exports__["default"] = (ItemDetailPage);

/***/ }),

/***/ "qftj":
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

/***/ "tCnF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "logistics-item_item__8rwgb",
	"icon": "logistics-item_icon__ofHNY"
};


/***/ }),

/***/ "u1Fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connectToDatabase; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ykE2");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function connectToDatabase() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority", {
    useUnifiedTopology: true // Pass the useUnifiedTopology option here

  });
  return client;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });