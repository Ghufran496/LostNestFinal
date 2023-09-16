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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/postlostitem/index.js");
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

/***/ "./components/UI/Loader.js":
/*!*********************************!*\
  !*** ./components/UI/Loader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.module.css */ "./components/UI/loader.module.css");
/* harmony import */ var _loader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\UI\\Loader.js";



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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _loader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        color: "red"
      },
      children: "Keep patience.........."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/UI/loader.module.css":
/*!*****************************************!*\
  !*** ./components/UI/loader.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loader": "loader_loader__3YCEG",
	"loaderhidden": "loader_loaderhidden__1J7yF",
	"loading": "loader_loading__1MM5W"
};


/***/ }),

/***/ "./components/postcomp/PostForm.js":
/*!*****************************************!*\
  !*** ./components/postcomp/PostForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostForm.module.css */ "./components/postcomp/PostForm.module.css");
/* harmony import */ var _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostForm_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Loader */ "./components/UI/Loader.js");


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\postcomp\\PostForm.js";






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

function PostForm() {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isImage,
    1: setIsImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const typeInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const categoryInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const titleInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const descriptionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const questionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const dateInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      style: {
        fontSize: "5rem"
      },
      children: "Post new Item as Lost Item"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Please Provide genunine Informations only."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,
      onSubmit: postSubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "item",
        className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
        ref: typeInputRef,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Lost",
          selected: true,
          children: "Lost"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "category",
        className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
        ref: categoryInputRef,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "",
          disabled: true,
          selected: true,
          children: "Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Wallet",
          children: "Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ID Card / Student Card",
          children: "ID Card / Student Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Smart Phone / Laptop",
          children: "Smart Phone / Laptop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Keys",
          children: "Keys"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Others",
          children: "Others"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Item Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Title",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          type: "text",
          name: "description",
          placeholder: "Description about item (like location etc...)",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
          ref: descriptionInputRef,
          rows: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "question",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Enter question based on an item."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "question",
          placeholder: "Ex:- What is the color of the phone?",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
          ref: questionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "date",
          style: {
            fontSize: "2rem",
            fontWeight: "bolder"
          },
          children: "Select a Date:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "date",
          name: "date",
          id: "date",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
          ref: dateInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        id: "image",
        name: "image",
        accept: "image/*",
        className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
        onChange: converttobase64
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: "Post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      width: 100,
      height: 100,
      src: isImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/postcomp/PostForm.module.css":
/*!*************************************************!*\
  !*** ./components/postcomp/PostForm.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "PostForm_form__3XBQl",
	"customselect": "PostForm_customselect__2rvgQ"
};


/***/ }),

/***/ "./pages/postlostitem/PostItem.module.css":
/*!************************************************!*\
  !*** ./pages/postlostitem/PostItem.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"center": "PostItem_center__bptI4"
};


/***/ }),

/***/ "./pages/postlostitem/index.js":
/*!*************************************!*\
  !*** ./pages/postlostitem/index.js ***!
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
/* harmony import */ var _components_postcomp_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postcomp/PostForm */ "./components/postcomp/PostForm.js");
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostItem.module.css */ "./pages/postlostitem/PostItem.module.css");
/* harmony import */ var _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\postlostitem\\index.js";





function PostItem() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_postcomp_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
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

async function getServerSideProps(context) {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_4__["getSession"])({
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
/* harmony default export */ __webpack_exports__["default"] = (PostItem);

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL2xvYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdGNvbXAvUG9zdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0Rm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3Rsb3N0aXRlbS9Qb3N0SXRlbS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3Rsb3N0aXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImNsYXNzZXMiLCJidG4iLCJjb250ZW50IiwiTG9hZGVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImNvbG9yIiwic2VuZFBvc3REYXRhIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsImltYWdlSW5iYXNlNjQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIlJlZHVjZWRJbWciLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIlBvc3RGb3JtIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpc0ltYWdlIiwic2V0SXNJbWFnZSIsInR5cGVJbnB1dFJlZiIsInVzZVJlZiIsImNhdGVnb3J5SW5wdXRSZWYiLCJ0aXRsZUlucHV0UmVmIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsInF1ZXN0aW9uSW5wdXRSZWYiLCJkYXRlSW5wdXRSZWYiLCJjb252ZXJ0dG9iYXNlNjQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwb3N0U3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVHlwZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRDYXRlZ29yeSIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRRdWVzdGlvbiIsImVudGVyZWREYXRlIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJyZXNldCIsImZvbnRTaXplIiwiZm9ybSIsImN1c3RvbXNlbGVjdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZm9udFdlaWdodCIsIlBvc3RJdGVtIiwiY2VudGVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwicmVxIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLHNCQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFQyx5REFBTyxDQUFDQyxHQUF6QztBQUFBLGNBQ0dGLEtBQUssQ0FBQ0c7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFlSixxRUFBZixFOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUEsU0FBU0ssTUFBVCxHQUFrQjtBQUNoQkMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtBQUNwQyxZQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmOztBQUVBLFVBQUlGLE1BQUosRUFBWTtBQUNWQSxjQUFNLENBQUNHLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGNBQXJCO0FBRUFKLGNBQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsZUFBeEIsRUFBeUMsTUFBTTtBQUM3Q0Usa0JBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxXQUFkLENBQTBCTixNQUExQjtBQUNELFNBRkQ7QUFHRDtBQUNGLEtBVkQ7QUFXRCxHQVpRLEVBWU4sRUFaTSxDQUFUO0FBY0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRVAseURBQU8sQ0FBQ087QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBRyxXQUFLLEVBQUU7QUFBRU8sYUFBSyxFQUFFO0FBQVQsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFNRDs7QUFFY1gscUVBQWYsRTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxlQUFlWSxZQUFmLENBQ0VDLElBREYsRUFFRUMsUUFGRixFQUdFQyxLQUhGLEVBSUVDLFdBSkYsRUFLRUMsUUFMRixFQU1FQyxJQU5GLEVBT0VDLGFBUEYsRUFRRTtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsb0JBQUQsRUFBdUI7QUFDakRDLFVBQU0sRUFBRSxNQUR5QztBQUVqRGIsUUFBSSxFQUFFYyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlgsVUFEbUI7QUFFbkJDLGNBRm1CO0FBR25CQyxXQUhtQjtBQUluQkMsaUJBSm1CO0FBS25CQyxjQUxtQjtBQU1uQkMsVUFObUI7QUFPbkJPLGdCQUFVLEVBQUVOO0FBUE8sS0FBZixDQUYyQztBQVdqRE8sV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQ7QUFYd0MsR0FBdkIsQ0FBNUI7QUFnQkEsUUFBTUMsSUFBSSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFuQjs7QUFFQSxNQUFJLENBQUNSLFFBQVEsQ0FBQ1MsRUFBZCxFQUFrQjtBQUNoQixVQUFNLElBQUlDLEtBQUosQ0FBVUgsSUFBSSxDQUFDSSxPQUFMLElBQWdCLHVCQUExQixDQUFOO0FBQ0Q7O0FBRUQsU0FBT0osSUFBUDtBQUNEOztBQUNELFNBQVNLLFFBQVQsR0FBb0I7QUFDbEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU1HLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBR0Qsb0RBQU0sRUFBL0I7QUFDQSxRQUFNRSxhQUFhLEdBQUdGLG9EQUFNLEVBQTVCO0FBQ0EsUUFBTUcsbUJBQW1CLEdBQUdILG9EQUFNLEVBQWxDO0FBQ0EsUUFBTUksZ0JBQWdCLEdBQUdKLG9EQUFNLEVBQS9CO0FBQ0EsUUFBTUssWUFBWSxHQUFHTCxvREFBTSxFQUEzQjs7QUFFQSxXQUFTTSxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUMxQjtBQUVBLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFDQUQsVUFBTSxDQUFDRSxhQUFQLENBQXFCSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBckI7O0FBRUFKLFVBQU0sQ0FBQ0ssTUFBUCxHQUFnQixNQUFNO0FBQ3BCO0FBQ0FmLGdCQUFVLENBQUNVLE1BQU0sQ0FBQ00sTUFBUixDQUFWO0FBQ0QsS0FIRDs7QUFLQU4sVUFBTSxDQUFDTyxPQUFQLEdBQWlCLE1BQU07QUFDckJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJDLEtBQXJCO0FBQ0QsS0FGRDtBQUdEOztBQUNELFFBQU1DLGlCQUFpQixHQUFHLE1BQU9DLEtBQVAsSUFBaUI7QUFDekNBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBMUIsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFFQSxVQUFNMkIsV0FBVyxHQUFHdkIsWUFBWSxDQUFDd0IsT0FBYixDQUFxQkMsS0FBekM7QUFDQSxVQUFNQyxlQUFlLEdBQUd4QixnQkFBZ0IsQ0FBQ3NCLE9BQWpCLENBQXlCQyxLQUFqRDtBQUNBLFVBQU1FLFlBQVksR0FBR3hCLGFBQWEsQ0FBQ3FCLE9BQWQsQ0FBc0JDLEtBQTNDO0FBQ0EsVUFBTUcsa0JBQWtCLEdBQUd4QixtQkFBbUIsQ0FBQ29CLE9BQXBCLENBQTRCQyxLQUF2RDtBQUNBLFVBQU1JLGVBQWUsR0FBR3hCLGdCQUFnQixDQUFDbUIsT0FBakIsQ0FBeUJDLEtBQWpEO0FBQ0EsVUFBTUssV0FBVyxHQUFHeEIsWUFBWSxDQUFDa0IsT0FBYixDQUFxQkMsS0FBekM7QUFFQSxVQUFNTSxpQkFBaUIsR0FBRyxJQUFJbkQsSUFBSixDQUFTa0QsV0FBVCxFQUFzQkUsa0JBQXRCLENBQ3hCLE9BRHdCLEVBRXhCO0FBQ0VDLFNBQUcsRUFBRSxTQURQO0FBRUVDLFdBQUssRUFBRSxNQUZUO0FBR0VDLFVBQUksRUFBRTtBQUhSLEtBRndCLENBQTFCOztBQVNBLFFBQUk7QUFDRixZQUFNcEIsTUFBTSxHQUFHLE1BQU16QyxZQUFZLENBQy9CaUQsV0FEK0IsRUFFL0JHLGVBRitCLEVBRy9CQyxZQUgrQixFQUkvQkMsa0JBSitCLEVBSy9CQyxlQUwrQixFQU0vQkUsaUJBTitCLEVBTy9CakMsT0FQK0IsQ0FBakM7QUFVQW1CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0FNLFdBQUssQ0FBQ1QsTUFBTixDQUFhd0IsS0FBYixHQVpFLENBWW9COztBQUN0QnhDLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FkRCxDQWNFLE9BQU91QixLQUFQLEVBQWM7QUFDZEYsYUFBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7QUFDRDtBQUNGLEdBckNEOztBQXVDQSxNQUFJeEIsU0FBSixFQUFlO0FBQ2Isd0JBQU8scUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLFdBQUssRUFBRTtBQUFFMEMsZ0JBQVEsRUFBRTtBQUFaLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFNLGVBQVMsRUFBRTlFLDJEQUFPLENBQUMrRSxJQUF6QjtBQUErQixjQUFRLEVBQUVsQixpQkFBekM7QUFBQSw4QkFDRTtBQUFRLFlBQUksRUFBQyxNQUFiO0FBQW9CLGlCQUFTLEVBQUU3RCwyREFBTyxDQUFDZ0YsWUFBdkM7QUFBcUQsV0FBRyxFQUFFdkMsWUFBMUQ7QUFBQSwrQkFDRTtBQUFRLGVBQUssRUFBQyxNQUFkO0FBQXFCLGtCQUFRLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFTLEVBQUV6QywyREFBTyxDQUFDZ0YsWUFGckI7QUFHRSxXQUFHLEVBQUVyQyxnQkFIUDtBQUFBLGdDQUtFO0FBQVEsZUFBSyxFQUFDLEVBQWQ7QUFBaUIsa0JBQVEsTUFBekI7QUFBMEIsa0JBQVEsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFRRTtBQUFRLGVBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBU0U7QUFBUSxlQUFLLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFVRTtBQUFRLGVBQUssRUFBQyxzQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQVdFO0FBQVEsZUFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsZUFZRTtBQUFRLGVBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBb0JFO0FBQUssYUFBSyxFQUFFO0FBQUVzQyxpQkFBTyxFQUFFLE1BQVg7QUFBbUJDLHVCQUFhLEVBQUU7QUFBbEMsU0FBWjtBQUFBLGdDQUNFO0FBQ0UsaUJBQU8sRUFBQyxNQURWO0FBRUUsZUFBSyxFQUFFO0FBQUVKLG9CQUFRLEVBQUUsTUFBWjtBQUFvQkssc0JBQVUsRUFBRTtBQUFoQyxXQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UscUJBQVcsRUFBQyxPQUhkO0FBSUUsbUJBQVMsRUFBRW5GLDJEQUFPLENBQUNnRixZQUpyQjtBQUtFLGFBQUcsRUFBRXBDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkYsZUFtQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRXFDLGlCQUFPLEVBQUUsTUFBWDtBQUFtQkMsdUJBQWEsRUFBRTtBQUFsQyxTQUFaO0FBQUEsZ0NBQ0U7QUFDRSxpQkFBTyxFQUFDLGFBRFY7QUFFRSxlQUFLLEVBQUU7QUFBRUosb0JBQVEsRUFBRSxNQUFaO0FBQW9CSyxzQkFBVSxFQUFFO0FBQWhDLFdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsY0FBSSxFQUFDLGFBRlA7QUFHRSxxQkFBVyxFQUFDLCtDQUhkO0FBSUUsbUJBQVMsRUFBRW5GLDJEQUFPLENBQUNnRixZQUpyQjtBQUtFLGFBQUcsRUFBRW5DLG1CQUxQO0FBTUUsY0FBSSxFQUFDO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0YsZUFtREU7QUFBSyxhQUFLLEVBQUU7QUFBRW9DLGlCQUFPLEVBQUUsTUFBWDtBQUFtQkMsdUJBQWEsRUFBRTtBQUFsQyxTQUFaO0FBQUEsZ0NBQ0U7QUFDRSxpQkFBTyxFQUFDLFVBRFY7QUFFRSxlQUFLLEVBQUU7QUFBRUosb0JBQVEsRUFBRSxNQUFaO0FBQW9CSyxzQkFBVSxFQUFFO0FBQWhDLFdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDLHNDQUhkO0FBSUUsbUJBQVMsRUFBRW5GLDJEQUFPLENBQUNnRixZQUpyQjtBQUtFLGFBQUcsRUFBRWxDO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuREYsZUFrRUU7QUFBSyxhQUFLLEVBQUU7QUFBRW1DLGlCQUFPLEVBQUUsTUFBWDtBQUFtQkMsdUJBQWEsRUFBRTtBQUFsQyxTQUFaO0FBQUEsZ0NBQ0U7QUFDRSxpQkFBTyxFQUFDLE1BRFY7QUFFRSxlQUFLLEVBQUU7QUFBRUosb0JBQVEsRUFBRSxNQUFaO0FBQW9CSyxzQkFBVSxFQUFFO0FBQWhDLFdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxZQUFFLEVBQUMsTUFITDtBQUlFLG1CQUFTLEVBQUVuRiwyREFBTyxDQUFDZ0YsWUFKckI7QUFLRSxhQUFHLEVBQUVqQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEVGLGVBa0ZFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUMsT0FGTDtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsY0FBTSxFQUFDLFNBSlQ7QUFLRSxpQkFBUyxFQUFFL0MsMkRBQU8sQ0FBQ2dGLFlBTHJCO0FBTUUsZ0JBQVEsRUFBRWhDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxGRixlQTBGRSxxRUFBQyxrREFBRDtBQUFRLGVBQU8sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBZ0dFO0FBQUssV0FBSyxFQUFFLEdBQVo7QUFBaUIsWUFBTSxFQUFFLEdBQXpCO0FBQThCLFNBQUcsRUFBRVQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhHRjtBQUFBLGtCQURGO0FBb0dEOztBQUVjSix1RUFBZixFOzs7Ozs7Ozs7OztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTaUQsUUFBVCxHQUFvQjtBQUNsQixzQkFDRTtBQUFLLGFBQVMsRUFBRXBGLDJEQUFPLENBQUNxRixNQUF4QjtBQUFBLDJCQUNFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFTSxlQUFlQyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLG1FQUFVLENBQUM7QUFBRUMsT0FBRyxFQUFFSCxPQUFPLENBQUNHO0FBQWYsR0FBRCxDQUFoQzs7QUFFQSxNQUFJLENBQUNGLE9BQUwsRUFBYztBQUNaLFdBQU87QUFDTEcsY0FBUSxFQUFFO0FBQ1JDLG1CQUFXLEVBQUUsT0FETDtBQUVSQyxpQkFBUyxFQUFFO0FBRkg7QUFETCxLQUFQO0FBTUQ7O0FBRUQsU0FBTztBQUNMOUYsU0FBSyxFQUFFO0FBQUV5RjtBQUFGO0FBREYsR0FBUDtBQUdEO0FBQ2NKLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Bvc3Rsb3N0aXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcG9zdGxvc3RpdGVtL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59PlxyXG4gICAgICB7cHJvcHMuY29udGVudH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ0blwiOiBcIkJ1dHRvbl9idG5fXzNJdGMzXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2xvYWRlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBMb2FkZXIoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpO1xyXG5cclxuICAgICAgaWYgKGxvYWRlcikge1xyXG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGVyaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsb2FkZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9PjwvZGl2PlxyXG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5LZWVwIHBhdGllbmNlLi4uLi4uLi4uLjwvcD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZGVyXCI6IFwibG9hZGVyX2xvYWRlcl9fM1lDRUdcIixcblx0XCJsb2FkZXJoaWRkZW5cIjogXCJsb2FkZXJfbG9hZGVyaGlkZGVuX18xSjd5RlwiLFxuXHRcImxvYWRpbmdcIjogXCJsb2FkZXJfbG9hZGluZ19fMU1NNVdcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vUG9zdEZvcm0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9VSS9CdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9VSS9Mb2FkZXJcIjtcclxuYXN5bmMgZnVuY3Rpb24gc2VuZFBvc3REYXRhKFxyXG4gIFR5cGUsXHJcbiAgQ2F0ZWdvcnksXHJcbiAgVGl0bGUsXHJcbiAgRGVzY3JpcHRpb24sXHJcbiAgUXVlc3Rpb24sXHJcbiAgRGF0ZSxcclxuICBpbWFnZUluYmFzZTY0XHJcbikge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Bvc3QvcG9zdGl0ZW1cIiwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgVHlwZSxcclxuICAgICAgQ2F0ZWdvcnksXHJcbiAgICAgIFRpdGxlLFxyXG4gICAgICBEZXNjcmlwdGlvbixcclxuICAgICAgUXVlc3Rpb24sXHJcbiAgICAgIERhdGUsXHJcbiAgICAgIFJlZHVjZWRJbWc6IGltYWdlSW5iYXNlNjQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZnVuY3Rpb24gUG9zdEZvcm0oKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNJbWFnZSwgc2V0SXNJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB0eXBlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYXRlZ29yeUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdGl0bGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBxdWVzdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGF0ZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbnZlcnR0b2Jhc2U2NChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICBzZXRJc0ltYWdlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBwb3N0U3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkVHlwZSA9IHR5cGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZENhdGVnb3J5ID0gY2F0ZWdvcnlJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFF1ZXN0aW9uID0gcXVlc3Rpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZERhdGUgPSBkYXRlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGVudGVyZWREYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIixcclxuICAgICAge1xyXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlbmRQb3N0RGF0YShcclxuICAgICAgICBlbnRlcmVkVHlwZSxcclxuICAgICAgICBlbnRlcmVkQ2F0ZWdvcnksXHJcbiAgICAgICAgZW50ZXJlZFRpdGxlLFxyXG4gICAgICAgIGVudGVyZWREZXNjcmlwdGlvbixcclxuICAgICAgICBlbnRlcmVkUXVlc3Rpb24sXHJcbiAgICAgICAgaHVtYW5SZWFkYWJsZURhdGUsXHJcbiAgICAgICAgaXNJbWFnZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7IC8vIFRoaXMgcmVzZXRzIHRoZSBmb3JtXHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkZXIgLz47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiNXJlbVwiIH19PlBvc3QgbmV3IEl0ZW0gYXMgTG9zdCBJdGVtPC9oMT5cclxuICAgICAgPGgyPlBsZWFzZSBQcm92aWRlIGdlbnVuaW5lIEluZm9ybWF0aW9ucyBvbmx5LjwvaDI+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17cG9zdFN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cIml0ZW1cIiBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fSByZWY9e3R5cGVJbnB1dFJlZn0+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG9zdFwiIHNlbGVjdGVkPlxyXG4gICAgICAgICAgICBMb3N0XHJcbiAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgIHJlZj17Y2F0ZWdvcnlJbnB1dFJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+XHJcbiAgICAgICAgICAgIENhdGVnb3J5XHJcbiAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXYWxsZXRcIj5XYWxsZXQ8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJRCBDYXJkIC8gU3R1ZGVudCBDYXJkXCI+SUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNtYXJ0IFBob25lIC8gTGFwdG9wXCI+U21hcnQgUGhvbmUgLyBMYXB0b3A8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLZXlzXCI+S2V5czwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk90aGVyc1wiPk90aGVyczwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSXRlbSBOYW1lXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgICAgcmVmPXt0aXRsZUlucHV0UmVmfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGFib3V0IGl0ZW0gKGxpa2UgbG9jYXRpb24gZXRjLi4uKVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25JbnB1dFJlZn1cclxuICAgICAgICAgICAgcm93cz1cIjVcIlxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwicXVlc3Rpb25cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRW50ZXIgcXVlc3Rpb24gYmFzZWQgb24gYW4gaXRlbS5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicXVlc3Rpb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4Oi0gV2hhdCBpcyB0aGUgY29sb3Igb2YgdGhlIHBob25lP1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgIHJlZj17cXVlc3Rpb25JbnB1dFJlZn1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cImRhdGVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2VsZWN0IGEgRGF0ZTpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgIHJlZj17ZGF0ZUlucHV0UmVmfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2NvbnZlcnR0b2Jhc2U2NH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gY29udGVudD1cIlBvc3RcIj48L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPGltZyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gc3JjPXtpc0ltYWdlfT48L2ltZz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwiUG9zdEZvcm1fZm9ybV9fM1hCUWxcIixcblx0XCJjdXN0b21zZWxlY3RcIjogXCJQb3N0Rm9ybV9jdXN0b21zZWxlY3RfXzJydmdRXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjZW50ZXJcIjogXCJQb3N0SXRlbV9jZW50ZXJfX2JwdEk0XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0SXRlbS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5mdW5jdGlvbiBQb3N0SXRlbSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT5cclxuICAgICAgPFBvc3RGb3JtIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogY29udGV4dC5yZXEgfSk7XHJcblxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogXCIvYXV0aFwiLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHNlc3Npb24gfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9