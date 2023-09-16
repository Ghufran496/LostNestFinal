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
/* harmony import */ var _Loader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.module.css */ "./components/UI/Loader.module.css");
/* harmony import */ var _Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_css__WEBPACK_IMPORTED_MODULE_2__);


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
      className: _Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader
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

/***/ "./components/UI/Loader.module.css":
/*!*****************************************!*\
  !*** ./components/UI/Loader.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loader": "Loader_loader__a7gPQ",
	"loaderhidden": "Loader_loaderhidden__343g-",
	"loading": "Loader_loading__2ewxn"
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
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Wallet",
          children: "Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "ID Card / Student Card",
          children: "ID Card / Student Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Smart Phone / Laptop",
          children: "Smart Phone / Laptop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Keys",
          children: "Keys"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Others",
          children: "Others"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
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
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Title",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
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
          lineNumber: 144,
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
          lineNumber: 150,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
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
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "question",
          placeholder: "Ex:- What is the color of the phone?",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
          ref: questionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
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
          lineNumber: 175,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "date",
          name: "date",
          id: "date",
          className: _PostForm_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.customselect,
          ref: dateInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
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
        lineNumber: 190,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: "Post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
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
      lineNumber: 201,
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\postlostitem\\index.js";






function PostItem() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Post Lost Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "If you have Lost anything post here"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/images/logos.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.center,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_postcomp_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0xvYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdGNvbXAvUG9zdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0Rm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3Rsb3N0aXRlbS9Qb3N0SXRlbS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3Rsb3N0aXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImNsYXNzZXMiLCJidG4iLCJjb250ZW50IiwiTG9hZGVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImNvbG9yIiwic2VuZFBvc3REYXRhIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsImltYWdlSW5iYXNlNjQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIlJlZHVjZWRJbWciLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIlBvc3RGb3JtIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpc0ltYWdlIiwic2V0SXNJbWFnZSIsInR5cGVJbnB1dFJlZiIsInVzZVJlZiIsImNhdGVnb3J5SW5wdXRSZWYiLCJ0aXRsZUlucHV0UmVmIiwiZGVzY3JpcHRpb25JbnB1dFJlZiIsInF1ZXN0aW9uSW5wdXRSZWYiLCJkYXRlSW5wdXRSZWYiLCJjb252ZXJ0dG9iYXNlNjQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwb3N0U3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVHlwZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRDYXRlZ29yeSIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRRdWVzdGlvbiIsImVudGVyZWREYXRlIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJyZXNldCIsImZvbnRTaXplIiwiZm9ybSIsImN1c3RvbXNlbGVjdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZm9udFdlaWdodCIsIlBvc3RJdGVtIiwiY2VudGVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwicmVxIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUFPO0FBQ0xHLGNBQVEsRUFBRTtBQUNSQyxtQkFBVyxFQUFFLE9BREw7QUFFUkMsaUJBQVMsRUFBRTtBQUZIO0FBREwsS0FBUDtBQU1EOztBQUVELFNBQU87QUFDTDlGLFNBQUssRUFBRTtBQUFFeUY7QUFBRjtBQURGLEdBQVA7QUFHRDtBQUNjSix1RUFBZixFOzs7Ozs7Ozs7OztBQ3ZDQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wb3N0bG9zdGl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Bvc3Rsb3N0aXRlbS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufT5cclxuICAgICAge3Byb3BzLmNvbnRlbnR9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidG5cIjogXCJCdXR0b25fYnRuX18zSXRjM1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Mb2FkZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGVyKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKTtcclxuXHJcbiAgICAgIGlmIChsb2FkZXIpIHtcclxuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImxvYWRlcmhpZGRlblwiKTtcclxuXHJcbiAgICAgICAgbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobG9hZGVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyfT48L2Rpdj5cclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+S2VlcCBwYXRpZW5jZS4uLi4uLi4uLi48L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlclwiOiBcIkxvYWRlcl9sb2FkZXJfX2E3Z1BRXCIsXG5cdFwibG9hZGVyaGlkZGVuXCI6IFwiTG9hZGVyX2xvYWRlcmhpZGRlbl9fMzQzZy1cIixcblx0XCJsb2FkaW5nXCI6IFwiTG9hZGVyX2xvYWRpbmdfXzJld3huXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3RGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vVUkvTG9hZGVyXCI7XHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRQb3N0RGF0YShcclxuICBUeXBlLFxyXG4gIENhdGVnb3J5LFxyXG4gIFRpdGxlLFxyXG4gIERlc2NyaXB0aW9uLFxyXG4gIFF1ZXN0aW9uLFxyXG4gIERhdGUsXHJcbiAgaW1hZ2VJbmJhc2U2NFxyXG4pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb3N0L3Bvc3RpdGVtXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIFR5cGUsXHJcbiAgICAgIENhdGVnb3J5LFxyXG4gICAgICBUaXRsZSxcclxuICAgICAgRGVzY3JpcHRpb24sXHJcbiAgICAgIFF1ZXN0aW9uLFxyXG4gICAgICBEYXRlLFxyXG4gICAgICBSZWR1Y2VkSW1nOiBpbWFnZUluYmFzZTY0LFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbmZ1bmN0aW9uIFBvc3RGb3JtKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzSW1hZ2UsIHNldElzSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgdHlwZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgY2F0ZWdvcnlJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcXVlc3Rpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRhdGVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBmdW5jdGlvbiBjb252ZXJ0dG9iYXNlNjQoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0KTtcclxuICAgICAgc2V0SXNJbWFnZShyZWFkZXIucmVzdWx0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgcG9zdFN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZFR5cGUgPSB0eXBlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRDYXRlZ29yeSA9IGNhdGVnb3J5SW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRpdGxlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWRRdWVzdGlvbiA9IHF1ZXN0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIGNvbnN0IGVudGVyZWREYXRlID0gZGF0ZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShlbnRlcmVkRGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICBcImVuLVVTXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kUG9zdERhdGEoXHJcbiAgICAgICAgZW50ZXJlZFR5cGUsXHJcbiAgICAgICAgZW50ZXJlZENhdGVnb3J5LFxyXG4gICAgICAgIGVudGVyZWRUaXRsZSxcclxuICAgICAgICBlbnRlcmVkRGVzY3JpcHRpb24sXHJcbiAgICAgICAgZW50ZXJlZFF1ZXN0aW9uLFxyXG4gICAgICAgIGh1bWFuUmVhZGFibGVEYXRlLFxyXG4gICAgICAgIGlzSW1hZ2VcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpOyAvLyBUaGlzIHJlc2V0cyB0aGUgZm9ybVxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGVyIC8+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiBcIjVyZW1cIiB9fT5Qb3N0IG5ldyBJdGVtIGFzIExvc3QgSXRlbTwvaDE+XHJcbiAgICAgIDxoMj5QbGVhc2UgUHJvdmlkZSBnZW51bmluZSBJbmZvcm1hdGlvbnMgb25seS48L2gyPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3Bvc3RTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJpdGVtXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH0gcmVmPXt0eXBlSW5wdXRSZWZ9PlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvc3RcIj5Mb3N0PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICByZWY9e2NhdGVnb3J5SW5wdXRSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPlxyXG4gICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiV2FsbGV0XCI+V2FsbGV0PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSUQgQ2FyZCAvIFN0dWRlbnQgQ2FyZFwiPklEIENhcmQgLyBTdHVkZW50IENhcmQ8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTbWFydCBQaG9uZSAvIExhcHRvcFwiPlNtYXJ0IFBob25lIC8gTGFwdG9wPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS2V5c1wiPktleXM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEl0ZW0gTmFtZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21zZWxlY3R9XHJcbiAgICAgICAgICAgIHJlZj17dGl0bGVJbnB1dFJlZn1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBhYm91dCBpdGVtIChsaWtlIGxvY2F0aW9uIGV0Yy4uLilcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9uSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cInF1ZXN0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVudGVyIHF1ZXN0aW9uIGJhc2VkIG9uIGFuIGl0ZW0uXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInF1ZXN0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeDotIFdoYXQgaXMgdGhlIGNvbG9yIG9mIHRoZSBwaG9uZT9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICByZWY9e3F1ZXN0aW9uSW5wdXRSZWZ9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJkYXRlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMnJlbVwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNlbGVjdCBhIERhdGU6XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tc2VsZWN0fVxyXG4gICAgICAgICAgICByZWY9e2RhdGVJbnB1dFJlZn1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbXNlbGVjdH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtjb252ZXJ0dG9iYXNlNjR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJQb3N0XCI+PC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxpbWcgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IHNyYz17aXNJbWFnZX0+PC9pbWc+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybVwiOiBcIlBvc3RGb3JtX2Zvcm1fXzNYQlFsXCIsXG5cdFwiY3VzdG9tc2VsZWN0XCI6IFwiUG9zdEZvcm1fY3VzdG9tc2VsZWN0X18ycnZnUVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2VudGVyXCI6IFwiUG9zdEl0ZW1fY2VudGVyX19icHRJNFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0Y29tcC9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Qb3N0SXRlbS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmZ1bmN0aW9uIFBvc3RJdGVtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb3N0IExvc3QgSXRlbTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiSWYgeW91IGhhdmUgTG9zdCBhbnl0aGluZyBwb3N0IGhlcmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2xvZ29zLnBuZ1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2VudGVyfT5cclxuICAgICAgICA8UG9zdEZvcm0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgc2Vzc2lvbiB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEl0ZW07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9