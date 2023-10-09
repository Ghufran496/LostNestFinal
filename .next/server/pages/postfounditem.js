module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IsbP");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "IsbP":
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

// EXTERNAL MODULE: ./components/postcomp/FoundForm.module.css
var FoundForm_module = __webpack_require__("oL2S");
var FoundForm_module_default = /*#__PURE__*/__webpack_require__.n(FoundForm_module);

// EXTERNAL MODULE: ./components/UI/Button.js
var Button = __webpack_require__("WiO3");

// EXTERNAL MODULE: ./components/UI/Loader.js
var Loader = __webpack_require__("wbHB");

// CONCATENATED MODULE: ./components/postcomp/FoundForm.js









async function sendPostData(Type, Category, Title, Description, Question, Date, imageInbase64) {
  const response = await fetch("/api/post/postitem", {
    method: "POST",
    body: JSON.stringify({
      Type,
      Category,
      Title,
      Description,
      Question,
      Date,
      ReducedImg: imageInbase64
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

function FoundForm() {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isImage,
    1: setIsImage
  } = Object(external_react_["useState"])("");
  const typeInputRef = Object(external_react_["useRef"])();
  const categoryInputRef = Object(external_react_["useRef"])();
  const titleInputRef = Object(external_react_["useRef"])();
  const descriptionInputRef = Object(external_react_["useRef"])();
  const questionInputRef = Object(external_react_["useRef"])();
  const dateInputRef = Object(external_react_["useRef"])();

  function converttobase64(e) {
    // console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      //console.log(reader.result);
      setIsImage(reader.result);
    };

    reader.onerror = () => {
      console.log("error", error);
    };
  }

  const postSubmitHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    const enteredType = typeInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredQuestion = questionInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const humanReadableDate = new Date(enteredDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    try {
      const result = await sendPostData(enteredType, enteredCategory, enteredTitle, enteredDescription, enteredQuestion, humanReadableDate, isImage);
      console.log(result);
      event.target.reset(); // This resets the form

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Loader["a" /* default */], {});
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: FoundForm_module_default.a.head1,
      children: "Post new Item as Found Item"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: "Please Provide genunine Informations only."
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      className: FoundForm_module_default.a.form,
      onSubmit: postSubmitHandler,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("select", {
        name: "item",
        className: FoundForm_module_default.a.customselect,
        ref: typeInputRef,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "Found",
          children: "Found"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        name: "category",
        className: FoundForm_module_default.a.customselect,
        ref: categoryInputRef,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "",
          disabled: true,
          selected: true,
          children: "Category"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "Wallet",
          children: "Wallet"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "ID Card / Student Card",
          children: "ID Card / Student Card"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "Smart Phone / Laptop",
          children: "Smart Phone / Laptop"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "Keys",
          children: "Keys"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "Others",
          children: "Others"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          htmlFor: "name",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Item Name"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          name: "name",
          placeholder: "Title",
          className: FoundForm_module_default.a.customselect,
          ref: titleInputRef
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          htmlFor: "description",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Description"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
          type: "text",
          name: "description",
          placeholder: "Description about item (like location etc...)",
          className: FoundForm_module_default.a.customselect,
          ref: descriptionInputRef,
          rows: "5"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          htmlFor: "question",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Enter question based on an item."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          name: "question",
          placeholder: "Ex:- What is the color of the phone?",
          className: FoundForm_module_default.a.customselect,
          ref: questionInputRef
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          htmlFor: "date",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Select a Date:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "date",
          name: "date",
          id: "date",
          className: FoundForm_module_default.a.customselect,
          ref: dateInputRef
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "file",
        id: "image",
        name: "image",
        accept: "image/*",
        className: FoundForm_module_default.a.customselect,
        onChange: converttobase64
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
        content: "Post"
      })]
    })]
  });
}

/* harmony default export */ var postcomp_FoundForm = (FoundForm);
// EXTERNAL MODULE: ./pages/postfounditem/PostItem.module.css
var PostItem_module = __webpack_require__("tJer");
var PostItem_module_default = /*#__PURE__*/__webpack_require__.n(PostItem_module);

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/postfounditem/index.js









function PostLostItem() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Post Found Item"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "If you have found anything post here"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "/images/logos.png"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: PostItem_module_default.a.center,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(postcomp_FoundForm, {})
    })]
  });
}

async function getServerSideProps(context) {
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
      session
    }
  };
}
/* harmony default export */ var postfounditem = __webpack_exports__["default"] = (PostLostItem);

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

/***/ "epZT":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loader": "Loader_loader__a7gPQ",
	"loaderhidden": "Loader_loaderhidden__343g-",
	"loading": "Loader_loading__2ewxn"
};


/***/ }),

/***/ "oL2S":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "FoundForm_form__2Vhzh",
	"customselect": "FoundForm_customselect__2zyUp",
	"head1": "FoundForm_head1__3i7M6"
};


/***/ }),

/***/ "tJer":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"center": "PostItem_center__1ufd8"
};


/***/ }),

/***/ "vMJK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Button_btn__3Itc3"
};


/***/ }),

/***/ "wbHB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("epZT");
/* harmony import */ var _Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_css__WEBPACK_IMPORTED_MODULE_2__);






function Loader() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener("load", () => {
      const loader = document.querySelector(".loader");

      if (loader) {
        loader.classList.add("loaderhidden");
        loader.addEventListener("transitionend", () => {
          document.body.removeChild(loader);
        });
      }
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      style: {
        color: "red"
      },
      children: "Keep patience.........."
    })]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });