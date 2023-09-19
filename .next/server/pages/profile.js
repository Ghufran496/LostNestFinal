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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile/index.js");
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

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.module.css */ "./components/profile/profile-form.module.css");
/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\profile\\profile-form.js";



function ProfileForm(props) {
  const oldPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const newPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function submitHandler(event) {
    event.preventDefault();
    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value; // optional: Add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,
    onSubmit: submitHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "new-password",
        children: "New Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "password",
        id: "new-password",
        ref: newPasswordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "old-password",
        children: "Old Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "password",
        id: "old-password",
        ref: oldPasswordRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.action,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Change Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileForm);

/***/ }),

/***/ "./components/profile/profile-form.module.css":
/*!****************************************************!*\
  !*** ./components/profile/profile-form.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "profile-form_form__3U8O4",
	"control": "profile-form_control__3DY65",
	"action": "profile-form_action__23LLQ"
};


/***/ }),

/***/ "./components/profile/user-profile.js":
/*!********************************************!*\
  !*** ./components/profile/user-profile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-form */ "./components/profile/profile-form.js");
/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.module.css */ "./components/profile/user-profile.module.css");
/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\profile\\user-profile.js";



function UserProfile() {
  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Your User Profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_profile_form__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onChangePassword: changePasswordHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./components/profile/user-profile.module.css":
/*!****************************************************!*\
  !*** ./components/profile/user-profile.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profile": "user-profile_profile__2YJCq"
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

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");
/* harmony import */ var _components_profile_user_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/profile/user-profile */ "./components/profile/user-profile.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");

var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\profile\\index.js";








function ProfilePage(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    profileData
  } = props;

  if (!profileData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this); // Render loading spinner if no data is available
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 5 seconds
  }, []);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Your Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Your Profile content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/images/logos.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: profileData.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

async function getServerSideProps(context) {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])({
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

  const userEmail = session.user.email;
  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_2__["connectToDatabase"])();
  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne({
    email: userEmail
  }, {
    projection: {
      password: 0
    }
  });
  return {
    props: {
      session,
      profileData: JSON.parse(JSON.stringify(user))
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvTG9hZGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS91c2VyLXByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2xpYi9kYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2FkaW5nIiwiY2xhc3NlcyIsImxvYWRlciIsImp1c3RpZnljb250ZW50Y2VudGVyIiwiamltdXByaW1hcnlsb2FkaW5nIiwiUHJvZmlsZUZvcm0iLCJwcm9wcyIsIm9sZFBhc3N3b3JkUmVmIiwidXNlUmVmIiwibmV3UGFzc3dvcmRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRPbGRQYXNzd29yZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWROZXdQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb24iLCJVc2VyUHJvZmlsZSIsImNoYW5nZVBhc3N3b3JkSGFuZGxlciIsInBhc3N3b3JkRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJQcm9maWxlUGFnZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwicHJvZmlsZURhdGEiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInJlcSIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJ1c2VyRW1haWwiLCJ1c2VyIiwiZW1haWwiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwicHJvamVjdGlvbiIsInBhc3N3b3JkIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QjtBQUNBLFFBQU10QixNQUFNLEdBQUcsTUFBTUQsaUVBQWlCLEVBQXRDO0FBQ0EsUUFBTXdCLGVBQWUsR0FBR3ZCLE1BQU0sQ0FBQ3dCLEVBQVAsR0FBWUMsVUFBWixDQUF1QixPQUF2QixDQUF4QjtBQUNBLFFBQU1KLElBQUksR0FBRyxNQUFNRSxlQUFlLENBQUNHLE9BQWhCLENBQ2pCO0FBQUVKLFNBQUssRUFBRUY7QUFBVCxHQURpQixFQUVqQjtBQUFFTyxjQUFVLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVo7QUFBZCxHQUZpQixDQUFuQjtBQUtBLFNBQU87QUFDTDdELFNBQUssRUFBRTtBQUNMK0MsYUFESztBQUVMTixpQkFBVyxFQUFFakIsSUFBSSxDQUFDc0MsS0FBTCxDQUFXdEMsSUFBSSxDQUFDQyxTQUFMLENBQWU2QixJQUFmLENBQVg7QUFGUjtBQURGLEdBQVA7QUFNRDtBQUVjakIsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNoRUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZmlsZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTG9hZGluZy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmp1c3RpZnljb250ZW50Y2VudGVyfSAke2NsYXNzZXMuamltdXByaW1hcnlsb2FkaW5nfWB9XHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlclwiOiBcIkxvYWRpbmdfbG9hZGVyX18zQUlBbVwiLFxuXHRcImppbXVwcmltYXJ5bG9hZGluZ1wiOiBcIkxvYWRpbmdfamltdXByaW1hcnlsb2FkaW5nX18xR0hJbFwiLFxuXHRcImxvYWRpbmcta2V5cy1hcHAtbG9hZGluZ1wiOiBcIkxvYWRpbmdfbG9hZGluZy1rZXlzLWFwcC1sb2FkaW5nX19ZbDBzSVwiXG59O1xuIiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3Byb2ZpbGUtZm9ybS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gUHJvZmlsZUZvcm0ocHJvcHMpIHtcbiAgY29uc3Qgb2xkUGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbmV3UGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcblxuICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRPbGRQYXNzd29yZCA9IG9sZFBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZE5ld1Bhc3N3b3JkID0gbmV3UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIC8vIG9wdGlvbmFsOiBBZGQgdmFsaWRhdGlvblxuXG4gICAgcHJvcHMub25DaGFuZ2VQYXNzd29yZCh7XG4gICAgICBvbGRQYXNzd29yZDogZW50ZXJlZE9sZFBhc3N3b3JkLFxuICAgICAgbmV3UGFzc3dvcmQ6IGVudGVyZWROZXdQYXNzd29yZFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSduZXctcGFzc3dvcmQnPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J25ldy1wYXNzd29yZCcgcmVmPXtuZXdQYXNzd29yZFJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdvbGQtcGFzc3dvcmQnPk9sZCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgaWQ9J29sZC1wYXNzd29yZCcgcmVmPXtvbGRQYXNzd29yZFJlZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cbiAgICAgICAgPGJ1dHRvbj5DaGFuZ2UgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwicHJvZmlsZS1mb3JtX2Zvcm1fXzNVOE80XCIsXG5cdFwiY29udHJvbFwiOiBcInByb2ZpbGUtZm9ybV9jb250cm9sX18zRFk2NVwiLFxuXHRcImFjdGlvblwiOiBcInByb2ZpbGUtZm9ybV9hY3Rpb25fXzIzTExRXCJcbn07XG4iLCJpbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSBcIi4vcHJvZmlsZS1mb3JtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi91c2VyLXByb2ZpbGUubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmRIYW5kbGVyKHBhc3N3b3JkRGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXIvY2hhbmdlLXBhc3N3b3JkXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFzc3dvcmREYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZX0+XG4gICAgICA8aDE+WW91ciBVc2VyIFByb2ZpbGU8L2gxPlxuICAgICAgPFByb2ZpbGVGb3JtIG9uQ2hhbmdlUGFzc3dvcmQ9e2NoYW5nZVBhc3N3b3JkSGFuZGxlcn0gLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZVwiOiBcInVzZXItcHJvZmlsZV9wcm9maWxlX18yWUpDcVwiXG59O1xuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4gICAge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLCAvLyBQYXNzIHRoZSB1c2VVbmlmaWVkVG9wb2xvZ3kgb3B0aW9uIGhlcmVcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cbiIsImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvTG9hZGluZ1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBwcm9maWxlRGF0YSB9ID0gcHJvcHM7XHJcbiAgaWYgKCFwcm9maWxlRGF0YSkge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+OyAvLyBSZW5kZXIgbG9hZGluZyBzcGlubmVyIGlmIG5vIGRhdGEgaXMgYXZhaWxhYmxlXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDIwMDApOyAvLyBTaW11bGF0ZSBhIGxvYWRpbmcgdGltZSBvZiA1IHNlY29uZHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8TG9hZGluZyAvPjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPllvdXIgUHJvZmlsZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIllvdXIgUHJvZmlsZSBjb250ZW50XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWFnZXMvbG9nb3MucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8cD57cHJvZmlsZURhdGEubmFtZX08L3A+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9hdXRoXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKFxyXG4gICAgeyBlbWFpbDogdXNlckVtYWlsIH0sXHJcbiAgICB7IHByb2plY3Rpb246IHsgcGFzc3dvcmQ6IDAgfSB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlc3Npb24sXHJcbiAgICAgIHByb2ZpbGVEYXRhOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVzZXIpKSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=