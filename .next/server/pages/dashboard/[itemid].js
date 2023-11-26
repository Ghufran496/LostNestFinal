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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nXrA");


/***/ }),

/***/ "7Ic1":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button52": "itemid_button52__2vT-o",
	"btndiv": "itemid_btndiv__IrFTl",
	"button-52": "itemid_button-52__3dkhT"
};


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

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "K4Bz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "event-content_content__30Fxp"
};


/***/ }),

/***/ "SRNB":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"backer": "QuestionForm_backer__1z-Pb",
	"formContainer": "QuestionForm_formContainer__3gN2W"
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: `${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.justifycontentcenter} ${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jimuprimaryloading}`
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "WiO3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vMJK");
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_2__);




const Button = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    role: "button",
    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
    children: props.content
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

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
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: event_logistics_module_default.a.timer,
              children: [" ", Date]
            })
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
            children: Category
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ var event_logistics = __webpack_exports__["a"] = (EventLogistics);

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

// EXTERNAL MODULE: ./components/feed/FeedDetails/event-summary.js
var event_summary = __webpack_require__("qd9H");

// EXTERNAL MODULE: ./components/feed/FeedDetails/event-logistics.js + 1 modules
var event_logistics = __webpack_require__("mu74");

// EXTERNAL MODULE: ./components/feed/FeedDetails/event-content.js
var event_content = __webpack_require__("tTgv");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./components/overlayForm/QuestionForm.module.css
var QuestionForm_module = __webpack_require__("SRNB");
var QuestionForm_module_default = /*#__PURE__*/__webpack_require__.n(QuestionForm_module);

// EXTERNAL MODULE: ./components/overlayForm/Form.module.css
var Form_module = __webpack_require__("xV+P");
var Form_module_default = /*#__PURE__*/__webpack_require__.n(Form_module);

// EXTERNAL MODULE: ./components/UI/Loading.js
var Loading = __webpack_require__("VTlJ");

// CONCATENATED MODULE: ./components/overlayForm/Form.js





 // http://localhost:3000/dashboard/654bc2921efc6c1070461e13

function Form(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const answerInputRef = Object(external_react_["useRef"])();

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
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        fontSize: "1.5rem"
      },
      children: "Submitting response..."
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    className: Form_module_default.a.main,
    onSubmit: answerSubmitHandler,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "question",
      className: Form_module_default.a.labels,
      children: "Question?"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      id: "questionContent",
      className: Form_module_default.a.span1,
      children: props.data2.Question
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "answer",
      className: Form_module_default.a.labels,
      children: "Answer"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "text",
      id: "answer",
      className: Form_module_default.a.inputfield,
      ref: answerInputRef,
      required: true
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Form_module_default.a.btndiv,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: Form_module_default.a.button89,
        type: "button",
        role: "button",
        onClick: props.oncancle,
        children: "Close"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: Form_module_default.a.button89,
        type: "submit",
        role: "button",
        children: "Submit"
      })]
    })]
  });
}

/* harmony default export */ var overlayForm_Form = (Form);
// CONCATENATED MODULE: ./components/overlayForm/QuestionForm.js






function QuestionForm(props) {
  return /*#__PURE__*/external_react_dom_default.a.createPortal( /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: QuestionForm_module_default.a.backer,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: QuestionForm_module_default.a.formContainer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(overlayForm_Form, {
        oncancle: props.onclose,
        data2: props.data
      })
    })
  }), document.getElementById("Questions"));
}

/* harmony default export */ var overlayForm_QuestionForm = (QuestionForm);
// EXTERNAL MODULE: ./pages/dashboard/itemid.module.css
var itemid_module = __webpack_require__("7Ic1");
var itemid_module_default = /*#__PURE__*/__webpack_require__.n(itemid_module);

// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__("u1Fb");

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// EXTERNAL MODULE: ./components/UI/Button.js
var Button = __webpack_require__("WiO3");

// CONCATENATED MODULE: ./pages/dashboard/[itemid].js















function ItemDetailPage(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: showQForm,
    1: setIsShowQForm
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

  const showModeHandler = () => {
    setIsShowQForm(true);
  };

  const hideModeHandler = () => {
    setIsShowQForm(false);
  };

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
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: itemid_module_default.a.btndiv,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: showModeHandler,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
          content: `Claim This ${event.Title}`
        })
      })
    }), showQForm && /*#__PURE__*/Object(jsx_runtime_["jsx"])(overlayForm_QuestionForm, {
      onclose: hideModeHandler,
      data: event
    })]
  });
}

async function getServerSideProps(context) {
  const postId = context.params.itemid;
  const postData = await Object(db["d" /* getPostDataById */])(postId);
  const session = await Object(client_["getSession"])({
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
/* harmony default export */ var _itemid_ = __webpack_exports__["default"] = (ItemDetailPage);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPostDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getResponseDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchallemails; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ykE2");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const {
  ObjectId
} = __webpack_require__("ykE2");


let cachedClient = null;
let clientSet = false;
async function connectToDatabase() {
  if (clientSet) {
    console.log("return already stored client");
    return cachedClient;
  }

  let client;
  const connectionString = `mongodb+srv://${"ghufran"}:${"Allahis1"}@${"cluster0"}.psik2ae.mongodb.net/${"Production"}?retryWrites=true&w=majority`;

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
} // export async function countTotalPosts() {
//   useEffect(() => {
//     fetch("/api/stats/getposts")
//       .then((response) => response.json())
//       .then((data) => {
//         return data;
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   }, []);
// }
// export async function getProfileData(userEmail) {
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

/***/ "vMJK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Button_btn__3Itc3"
};


/***/ }),

/***/ "xV+P":
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });