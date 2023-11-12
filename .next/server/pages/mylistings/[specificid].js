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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7lW0");


/***/ }),

/***/ "7lW0":
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

// EXTERNAL MODULE: ./components/UI/Loading.js
var Loading = __webpack_require__("VTlJ");

// EXTERNAL MODULE: ./components/feed/FeedDetails/event-summary.js
var event_summary = __webpack_require__("qd9H");

// EXTERNAL MODULE: ./components/feed/FeedDetails/event-logistics.js + 1 modules
var event_logistics = __webpack_require__("mu74");

// EXTERNAL MODULE: ./components/feed/FeedDetails/event-content.js
var event_content = __webpack_require__("tTgv");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/answers/answerlist.module.css
var answerlist_module = __webpack_require__("U3/k");
var answerlist_module_default = /*#__PURE__*/__webpack_require__.n(answerlist_module);

// CONCATENATED MODULE: ./components/answers/answer-list.js




function AnswerList(props) {
  const {
    ansitems
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: answerlist_module_default.a.response,
    children: ansitems.map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: item.Answer
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: ["By ", item.PosterID]
      })]
    }, item._id))
  });
}

/* harmony default export */ var answer_list = (AnswerList);
// EXTERNAL MODULE: ./components/answers/answer.module.css
var answer_module = __webpack_require__("GlPF");
var answer_module_default = /*#__PURE__*/__webpack_require__.n(answer_module);

// CONCATENATED MODULE: ./components/answers/answer.js






function Answer(props) {
  const {
    postid
  } = props; //console.log(postid);

  const {
    0: showResponse,
    1: setShowResponse
  } = Object(external_react_["useState"])(false);
  const {
    0: showLoadingContent,
    1: setLoadingContent
  } = Object(external_react_["useState"])(false);
  const {
    0: response,
    1: setresponse
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
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
  }, [showResponse, postid, setresponse, setLoadingContent]);

  function toggleResponseHandler() {
    setShowResponse(prevStatus => !prevStatus);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: answer_module_default.a.responses,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: answer_module_default.a.btndiv,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
        onClick: toggleResponseHandler,
        className: answer_module_default.a.button52,
        children: [showResponse ? "Hide" : "Show", " Responses"]
      })
    }), showLoadingContent && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: {
        marginBottom: "1rem",
        color: "red",
        fontSize: "2rem",
        textTransform: "capitalize"
      },
      children: "No responses yet!"
    }), response.length === 0 && !showLoadingContent && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: {
        marginBottom: "1rem",
        color: "red",
        fontSize: "2rem",
        textTransform: "capitalize"
      },
      children: "NoOne has responded yet!"
    }), showResponse && /*#__PURE__*/Object(jsx_runtime_["jsx"])(answer_list, {
      ansitems: response
    })]
  });
}

/* harmony default export */ var answer = (Answer); // useEffect(() => {
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
// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__("u1Fb");

// CONCATENATED MODULE: ./pages/mylistings/[specificid].js














function _specificid_specificid(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: processedObject,
    1: setProcessedObject
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
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
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Loading["a" /* default */], {});
  }

  const event = processedObject;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: event.Title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: event.Description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(event_summary["a" /* default */], {
      Title: event.Title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(event_logistics["a" /* default */], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(event_content["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: event.Description
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(answer, {
      postid: event._id
    })]
  });
}

async function getServerSideProps(context) {
  const {
    params
  } = context;
  const {
    specificid
  } = params;
  const postData = await Object(db["c" /* getPostDataById */])(specificid);
  return {
    props: {
      extractedObject: JSON.parse(JSON.stringify(postData))
    }
  };
}
/* harmony default export */ var _specificid_ = __webpack_exports__["default"] = (_specificid_specificid);

/***/ }),

/***/ "BqnO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loader": "Loading_loader__3AIAm",
	"text": "Loading_text__2auma",
	"jimuprimaryloading": "Loading_jimuprimaryloading__1GHIl",
	"loading-keys-app-loading": "Loading_loading-keys-app-loading__Yl0sI"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GlPF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"responses": "answer_responses__4XjrS",
	"button52": "answer_button52__vGBY2",
	"btndiv": "answer_btndiv__1GOTF",
	"button-52": "answer_button-52___bDL9"
};


/***/ }),

/***/ "K4Bz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "event-content_content__30Fxp"
};


/***/ }),

/***/ "U3/k":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"response": "answerlist_response__ZkJWD"
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: `${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.justifycontentcenter} ${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jimuprimaryloading}`
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
      children: "Please be patient..."
    })]
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

/***/ "mu74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

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

/* harmony default export */ var event_logistics = __webpack_exports__["a"] = (EventLogistics);

/***/ }),

/***/ "qd9H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/wVw");
/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__);



function EventSummary(props) {
  const {
    Title
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    className: _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      children: Title
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (EventSummary);

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

/***/ "tTgv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K4Bz");
/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_content_module_css__WEBPACK_IMPORTED_MODULE_1__);



function EventContent(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    className: _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["a"] = (EventContent);

/***/ }),

/***/ "u1Fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connectToDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPostDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getResponseDataById; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ykE2");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


const {
  ObjectId
} = __webpack_require__("ykE2");

let cachedClient = null;
let clientSet = false;
async function connectToDatabase() {
  if (clientSet) {
    console.log("return already stored client" + cachedClient);
    return cachedClient;
  }

  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    connectTimeoutMS: 30000
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
} // export async function getPostsByEmail(email) {
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });