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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/index.js");
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

/***/ "./components/UI/Error.js":
/*!********************************!*\
  !*** ./components/UI/Error.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Error_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error.module.css */ "./components/UI/Error.module.css");
/* harmony import */ var _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Error_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\UI\\Error.js";



function Error(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.verticalcenter,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notFound,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.head2,
          children: "Oops! Page Not To Be Found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.para,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Error message: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,
            children: props.errorData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: _Error_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.linker,
          children: "Back to Homepage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
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

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./components/UI/Error.module.css":
/*!****************************************!*\
  !*** ./components/UI/Error.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"verticalcenter": "Error_verticalcenter__2j26Q",
	"container": "Error_container__2B6Bb",
	"linker": "Error_linker__1y2Q_",
	"notfound": "Error_notfound__3eQg2",
	"head1": "Error_head1__3BmbB",
	"head2": "Error_head2__vkwMU",
	"para": "Error_para__1LfmO",
	"underline": "Error_underline__AVJ2X"
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.justifycontentcenter} ${_Loading_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.jimuprimaryloading}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
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
	"jimuprimaryloading": "Loading_jimuprimaryloading__1GHIl",
	"loading-keys-app-loading": "Loading_loading-keys-app-loading__Yl0sI"
};


/***/ }),

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-form.module.css */ "./components/auth/auth-form.module.css");
/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UI_Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Error */ "./components/UI/Error.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\auth\\auth-form.js";








async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new _UI_Error__WEBPACK_IMPORTED_MODULE_7__["default"](data.message || "Something went wrong!");
  }

  return data;
}

function AuthForm() {
  const {
    0: toggleForms,
    1: setToggleForms
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isError,
    1: setIsError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isErrorData,
    1: setIsErrorData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Sorry but the page you are looking for does not exist.");

  const toggleForm = () => {
    setToggleForms(prev => !prev);
  };

  const loginEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const loginPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const registerEmailInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const registerPasswordInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: isLogin,
    1: setIsLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  function switchAuthModeHandler() {
    setIsLogin(prevState => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = loginEmailInputRef.current.value;
    const enteredPassword = loginPasswordInputRef.current.value; // optional: Add validation

    if (isLogin) {
      const result = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["signIn"])("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword
      });

      if (!result.error) {
        // set some auth state
        router.replace("/dashboard"); // console.log(result + "Login success");

        setIsLoading(false);
      }

      if (result.error) {
        setIsLoading(false);
        setIsErrorData(result.error);
        setIsError(true); //console.log(result.error);
        // errorContent(result.error);
      }
    }
  }

  async function submitHandlerRegister(event) {
    setIsLoading(true);
    event.preventDefault();
    const enteredEmail = registerEmailInputRef.current.value;
    const enteredPassword = registerPasswordInputRef.current.value; // optional: Add validation

    try {
      const result = await createUser(enteredEmail, enteredPassword);
      setIsLoading(false); // console.log(result);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setIsErrorData("account already exists");
    }
  }

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 12
    }, this);
  }

  if (isError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Error__WEBPACK_IMPORTED_MODULE_7__["default"], {
      errorData: isErrorData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.col1,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.formbox,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.form,
        children: [!toggleForms && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.loginform,
          onSubmit: submitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mainheading,
              children: "Login Form"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: loginEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: loginPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "LOGIN",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.message,
            children: ["Not Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.link,
              children: "Register"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, this), toggleForms && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.registerform,
          onSubmit: submitHandlerRegister,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("center", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mainheading,
              children: "Register Form"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "user name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            placeholder: "email-id",
            ref: registerEmailInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            placeholder: "password",
            ref: registerPasswordInputRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            content: "REGISTER",
            onClick: switchAuthModeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.message,
            children: ["Already Registered\xA0?\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              onClick: toggleForm,
              className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.link,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AuthForm); // import { useState, useRef } from "react";
// import { signIn } from "next-auth/client";
// import { useRouter } from "next/router";
// import Button from "../UI/Button";
// import classes from "./auth-form.module.css";
// async function createUser(email, password) {
//   const response = await fetch("/api/auth/signup", {
//     method: "POST",
//     body: JSON.stringify({ email, password }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.message || "Something went wrong!");
//   }
//   return data;
// }
// function AuthForm() {
//   const [toggleForms, setToggleForms] = useState(false);
//   const toggleForm = () => {
//     setToggleForms((prev) => !prev);
//   };
//   const loginEmailInputRef = useRef();
//   const loginPasswordInputRef = useRef();
//   const registerEmailInputRef = useRef();
//   const registerPasswordInputRef = useRef();
//   const [isLogin, setIsLogin] = useState(true);
//   const router = useRouter();
//   function switchAuthModeHandler() {
//     setIsLogin((prevState) => !prevState);
//   }
//   async function submitHandler(event) {
//     event.preventDefault();
//     const enteredEmail = loginEmailInputRef.current.value;
//     const enteredPassword = loginPasswordInputRef.current.value;
//     // optional: Add validation
//     if (isLogin) {
//       const result = await signIn("credentials", {
//         redirect: false,
//         email: enteredEmail,
//         password: enteredPassword,
//       });
//       if (!result.error) {
//         // set some auth state
//         router.replace("/dashboard");
//         console.log(result + "Login success");
//       }
//     }
//   }
//   async function submitHandlerRegister(event) {
//     event.preventDefault();
//     const enteredEmail = registerEmailInputRef.current.value;
//     const enteredPassword = registerPasswordInputRef.current.value;
//     // optional: Add validation
//     try {
//       const result = await createUser(enteredEmail, enteredPassword);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <div className={classes.col1}>
//       <div className={classes.formbox}>
//         <div className={classes.form}>
//           {!toggleForms && (
//             <form className={classes.loginform} onSubmit={submitHandler}>
//               <center>
//                 <h1 className={classes.mainheading}>Login Form</h1>
//               </center>
//               <input
//                 type="email"
//                 placeholder="email-id"
//                 ref={loginEmailInputRef}
//               />
//               <input
//                 type="password"
//                 placeholder="password"
//                 ref={loginPasswordInputRef}
//               />
//               <Button content="LOGIN" onClick={switchAuthModeHandler}></Button>
//               <p className={classes.message}>
//                 Not Registered&nbsp;?&nbsp;
//                 <a onClick={toggleForm} className={classes.link}>
//                   Register
//                 </a>
//               </p>
//             </form>
//           )}
//           {toggleForms && (
//             <form
//               className={classes.registerform}
//               onSubmit={submitHandlerRegister}
//             >
//               <center>
//                 <h1 className={classes.mainheading}>Register Form</h1>
//               </center>
//               <input type="text" placeholder="user name" />
//               <input
//                 type="email"
//                 placeholder="email-id"
//                 ref={registerEmailInputRef}
//               />
//               <input
//                 type="password"
//                 placeholder="password"
//                 ref={registerPasswordInputRef}
//               />
//               <Button
//                 content="REGISTER"
//                 onClick={switchAuthModeHandler}
//               ></Button>
//               <p className={classes.message}>
//                 Already Registered&nbsp;?&nbsp;
//                 <a onClick={toggleForm} className={classes.link}>
//                   Login
//                 </a>
//               </p>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AuthForm;

/***/ }),

/***/ "./components/auth/auth-form.module.css":
/*!**********************************************!*\
  !*** ./components/auth/auth-form.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"auth": "auth-form_auth__3FfGf",
	"control": "auth-form_control__2m7EA",
	"actions": "auth-form_actions__2JT2z",
	"toggle": "auth-form_toggle__2PHeb",
	"col1": "auth-form_col1__X03k4",
	"formbox": "auth-form_formbox__2LUr9",
	"mainheading": "auth-form_mainheading__2MU_F",
	"form": "auth-form_form__2RPAc",
	"message": "auth-form_message__1rnC2",
	"link": "auth-form_link__jF6q5",
	"defination": "auth-form_defination__3sTAd"
};


/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/auth/auth-form */ "./components/auth/auth-form.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\auth\\index.js";








function AuthPage() {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])().then(session => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Login/Register in Lost and Found Hub for University Students"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/images/logos.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Vycm9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRXJyb3IubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiY2xhc3NlcyIsImJ0biIsImNvbnRlbnQiLCJFcnJvciIsInZlcnRpY2FsY2VudGVyIiwiY29udGFpbmVyIiwibm90Rm91bmQiLCJoZWFkMiIsInBhcmEiLCJ1bmRlcmxpbmUiLCJlcnJvckRhdGEiLCJsaW5rZXIiLCJMb2FkaW5nIiwibG9hZGVyIiwianVzdGlmeWNvbnRlbnRjZW50ZXIiLCJqaW11cHJpbWFyeWxvYWRpbmciLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIm9rIiwibWVzc2FnZSIsIkF1dGhGb3JtIiwidG9nZ2xlRm9ybXMiLCJzZXRUb2dnbGVGb3JtcyIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJpc0Vycm9yRGF0YSIsInNldElzRXJyb3JEYXRhIiwidG9nZ2xlRm9ybSIsInByZXYiLCJsb2dpbkVtYWlsSW5wdXRSZWYiLCJ1c2VSZWYiLCJsb2dpblBhc3N3b3JkSW5wdXRSZWYiLCJyZWdpc3RlckVtYWlsSW5wdXRSZWYiLCJyZWdpc3RlclBhc3N3b3JkSW5wdXRSZWYiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZEVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZFBhc3N3b3JkIiwicmVzdWx0Iiwic2lnbkluIiwicmVkaXJlY3QiLCJlcnJvciIsInJlcGxhY2UiLCJzdWJtaXRIYW5kbGVyUmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwiY29sMSIsImZvcm1ib3giLCJmb3JtIiwibG9naW5mb3JtIiwibWFpbmhlYWRpbmciLCJsaW5rIiwicmVnaXN0ZXJmb3JtIiwiQXV0aFBhZ2UiLCJ1c2VFZmZlY3QiLCJnZXRTZXNzaW9uIiwidGhlbiIsInNlc3Npb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU1FO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztBQUVjeUMsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUN4Q0EsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufT5cclxuICAgICAge3Byb3BzLmNvbnRlbnR9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidG5cIjogXCJCdXR0b25fYnRuX18zSXRjM1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9FcnJvci5tb2R1bGUuY3NzXCI7XHJcbmZ1bmN0aW9uIEVycm9yKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZlcnRpY2FsY2VudGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdEZvdW5kfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZDJ9Pk9vcHMhIFBhZ2UgTm90IFRvIEJlIEZvdW5kPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmF9PlxyXG4gICAgICAgICAgICA8Yj5FcnJvciBtZXNzYWdlOiA8L2I+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc2VzLnVuZGVybGluZX0+e3Byb3BzLmVycm9yRGF0YX08L3N0cm9uZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua2VyfT5cclxuICAgICAgICAgICAgQmFjayB0byBIb21lcGFnZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ2ZXJ0aWNhbGNlbnRlclwiOiBcIkVycm9yX3ZlcnRpY2FsY2VudGVyX18yajI2UVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkVycm9yX2NvbnRhaW5lcl9fMkI2QmJcIixcblx0XCJsaW5rZXJcIjogXCJFcnJvcl9saW5rZXJfXzF5MlFfXCIsXG5cdFwibm90Zm91bmRcIjogXCJFcnJvcl9ub3Rmb3VuZF9fM2VRZzJcIixcblx0XCJoZWFkMVwiOiBcIkVycm9yX2hlYWQxX18zQm1iQlwiLFxuXHRcImhlYWQyXCI6IFwiRXJyb3JfaGVhZDJfX3Zrd01VXCIsXG5cdFwicGFyYVwiOiBcIkVycm9yX3BhcmFfXzFMZm1PXCIsXG5cdFwidW5kZXJsaW5lXCI6IFwiRXJyb3JfdW5kZXJsaW5lX19BVkoyWFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9Mb2FkaW5nLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRlcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuanVzdGlmeWNvbnRlbnRjZW50ZXJ9ICR7Y2xhc3Nlcy5qaW11cHJpbWFyeWxvYWRpbmd9YH1cclxuICAgICAgPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZGVyXCI6IFwiTG9hZGluZ19sb2FkZXJfXzNBSUFtXCIsXG5cdFwiamltdXByaW1hcnlsb2FkaW5nXCI6IFwiTG9hZGluZ19qaW11cHJpbWFyeWxvYWRpbmdfXzFHSElsXCIsXG5cdFwibG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nXCI6IFwiTG9hZGluZ19sb2FkaW5nLWtleXMtYXBwLWxvYWRpbmdfX1lsMHNJXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vVUkvTG9hZGluZ1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuLi9VSS9FcnJvclwiO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuICBjb25zdCBbdG9nZ2xlRm9ybXMsIHNldFRvZ2dsZUZvcm1zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNFcnJvckRhdGEsIHNldElzRXJyb3JEYXRhXSA9IHVzZVN0YXRlKFxuICAgIFwiU29ycnkgYnV0IHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3QgZXhpc3QuXCJcbiAgKTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZUZvcm1zKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IGxvZ2luRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsb2dpblBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCByZWdpc3RlckVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gbG9naW5FbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gbG9naW5QYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgICAvLyBzZXQgc29tZSBhdXRoIHN0YXRlXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0ICsgXCJMb2dpbiBzdWNjZXNzXCIpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRJc0Vycm9yRGF0YShyZXN1bHQuZXJyb3IpO1xuICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5lcnJvcik7XG4gICAgICAgIC8vIGVycm9yQ29udGVudChyZXN1bHQuZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXJSZWdpc3RlcihldmVudCkge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gcmVnaXN0ZXJFbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyKGVudGVyZWRFbWFpbCwgZW50ZXJlZFBhc3N3b3JkKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldElzRXJyb3IodHJ1ZSk7XG4gICAgICBzZXRJc0Vycm9yRGF0YShcImFjY291bnQgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICB9XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiA8RXJyb3IgZXJyb3JEYXRhPXtpc0Vycm9yRGF0YX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbDF9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybWJveH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICAgIHshdG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMubWFpbmhlYWRpbmd9PkxvZ2luIEZvcm08L2gxPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICByZWY9e2xvZ2luRW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e2xvZ2luUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJMT0dJTlwiIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn0+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIE5vdCBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dG9nZ2xlRm9ybXMgJiYgKFxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZ2lzdGVyZm9ybX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJSZWdpc3Rlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5SZWdpc3RlciBGb3JtPC9oMT5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidXNlciBuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsLWlkXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyRW1haWxJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlJFR0lTVEVSXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgICAgID48L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgQWxyZWFkeSBSZWdpc3RlcmVkJm5ic3A7PyZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RvZ2dsZUZvcm19IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG5cbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuXG4vLyBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKGVtYWlsLCBwYXNzd29yZCkge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4vLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbi8vICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbi8vICAgICB9LFxuLy8gICB9KTtcblxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4vLyAgIGlmICghcmVzcG9uc2Uub2spIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIGRhdGE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuLy8gICBjb25zdCBbdG9nZ2xlRm9ybXMsIHNldFRvZ2dsZUZvcm1zXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuLy8gICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuLy8gICAgIHNldFRvZ2dsZUZvcm1zKChwcmV2KSA9PiAhcHJldik7XG4vLyAgIH07XG4vLyAgIGNvbnN0IGxvZ2luRW1haWxJbnB1dFJlZiA9IHVzZVJlZigpO1xuLy8gICBjb25zdCBsb2dpblBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuLy8gICBjb25zdCByZWdpc3RlckVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbi8vICAgY29uc3QgcmVnaXN0ZXJQYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XG5cbi8vICAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbi8vICAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuLy8gICB9XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbi8vICAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBsb2dpbkVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbi8vICAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBsb2dpblBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuLy8gICAgIC8vIG9wdGlvbmFsOiBBZGQgdmFsaWRhdGlvblxuXG4vLyAgICAgaWYgKGlzTG9naW4pIHtcbi8vICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbi8vICAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuLy8gICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuLy8gICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuLy8gICAgICAgfSk7XG5cbi8vICAgICAgIGlmICghcmVzdWx0LmVycm9yKSB7XG4vLyAgICAgICAgIC8vIHNldCBzb21lIGF1dGggc3RhdGVcbi8vICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQgKyBcIkxvZ2luIHN1Y2Nlc3NcIik7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlclJlZ2lzdGVyKGV2ZW50KSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHJlZ2lzdGVyRW1haWxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuLy8gICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IHJlZ2lzdGVyUGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4vLyAgICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG5cbi8vICAgICB0cnkge1xuLy8gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVXNlcihlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2wxfT5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1ib3h9PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbi8vICAgICAgICAgICB7IXRvZ2dsZUZvcm1zICYmIChcbi8vICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbi8vICAgICAgICAgICAgICAgPGNlbnRlcj5cbi8vICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5oZWFkaW5nfT5Mb2dpbiBGb3JtPC9oMT5cbi8vICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbC1pZFwiXG4vLyAgICAgICAgICAgICAgICAgcmVmPXtsb2dpbkVtYWlsSW5wdXRSZWZ9XG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcmVmPXtsb2dpblBhc3N3b3JkSW5wdXRSZWZ9XG4vLyAgICAgICAgICAgICAgIC8+XG5cbi8vICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiTE9HSU5cIiBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9PjwvQnV0dG9uPlxuXG4vLyAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbi8vICAgICAgICAgICAgICAgICBOb3QgUmVnaXN0ZXJlZCZuYnNwOz8mbmJzcDtcbi8vICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVGb3JtfSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4vLyAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuLy8gICAgICAgICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICAgICl9XG4vLyAgICAgICAgICAge3RvZ2dsZUZvcm1zICYmIChcbi8vICAgICAgICAgICAgIDxmb3JtXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWdpc3RlcmZvcm19XG4vLyAgICAgICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyUmVnaXN0ZXJ9XG4vLyAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgIDxjZW50ZXI+XG4vLyAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluaGVhZGluZ30+UmVnaXN0ZXIgRm9ybTwvaDE+XG4vLyAgICAgICAgICAgICAgIDwvY2VudGVyPlxuLy8gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInVzZXIgbmFtZVwiIC8+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbC1pZFwiXG4vLyAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlckVtYWlsSW5wdXRSZWZ9XG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4vLyAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlclBhc3N3b3JkSW5wdXRSZWZ9XG4vLyAgICAgICAgICAgICAgIC8+XG5cbi8vICAgICAgICAgICAgICAgPEJ1dHRvblxuLy8gICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJSRUdJU1RFUlwiXG4vLyAgICAgICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuLy8gICAgICAgICAgICAgICA+PC9CdXR0b24+XG5cbi8vICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2V9PlxuLy8gICAgICAgICAgICAgICAgIEFscmVhZHkgUmVnaXN0ZXJlZCZuYnNwOz8mbmJzcDtcbi8vICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVGb3JtfSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4vLyAgICAgICAgICAgICAgICAgICBMb2dpblxuLy8gICAgICAgICAgICAgICAgIDwvYT5cbi8vICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICAgICl9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXV0aFwiOiBcImF1dGgtZm9ybV9hdXRoX18zRmZHZlwiLFxuXHRcImNvbnRyb2xcIjogXCJhdXRoLWZvcm1fY29udHJvbF9fMm03RUFcIixcblx0XCJhY3Rpb25zXCI6IFwiYXV0aC1mb3JtX2FjdGlvbnNfXzJKVDJ6XCIsXG5cdFwidG9nZ2xlXCI6IFwiYXV0aC1mb3JtX3RvZ2dsZV9fMlBIZWJcIixcblx0XCJjb2wxXCI6IFwiYXV0aC1mb3JtX2NvbDFfX1gwM2s0XCIsXG5cdFwiZm9ybWJveFwiOiBcImF1dGgtZm9ybV9mb3JtYm94X18yTFVyOVwiLFxuXHRcIm1haW5oZWFkaW5nXCI6IFwiYXV0aC1mb3JtX21haW5oZWFkaW5nX18yTVVfRlwiLFxuXHRcImZvcm1cIjogXCJhdXRoLWZvcm1fZm9ybV9fMlJQQWNcIixcblx0XCJtZXNzYWdlXCI6IFwiYXV0aC1mb3JtX21lc3NhZ2VfXzFybkMyXCIsXG5cdFwibGlua1wiOiBcImF1dGgtZm9ybV9saW5rX19qRjZxNVwiLFxuXHRcImRlZmluYXRpb25cIjogXCJhdXRoLWZvcm1fZGVmaW5hdGlvbl9fM3NUQWRcIlxufTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Mb2FkaW5nXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdXRoRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmZ1bmN0aW9uIEF1dGhQYWdlKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiB7XHJcbiAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNpZ24gSW48L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkxvZ2luL1JlZ2lzdGVyIGluIExvc3QgYW5kIEZvdW5kIEh1YiBmb3IgVW5pdmVyc2l0eSBTdHVkZW50c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWFnZXMvbG9nb3MucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXV0aEZvcm0gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9