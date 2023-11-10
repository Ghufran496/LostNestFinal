module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: hashPassword, verifyPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashPassword", function() { return hashPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyPassword", function() { return verifyPassword; });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

async function hashPassword(password) {
  const hashedPassword = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["hash"])(password, 12);
  return hashedPassword;
}
async function verifyPassword(password, hashedPassword) {
  const isValid = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["compare"])(password, hashedPassword);
  return isValid;
}

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

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ "./lib/auth.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");




/* harmony default export */ __webpack_exports__["default"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  session: {
    jwt: true
  },
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    async authorize(credentials) {
      const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_3__["connectToDatabase"])();
      const usersCollection = client.db().collection("users");
      const user = await usersCollection.findOne({
        email: credentials.email
      });

      if (!user) {
        client.close();
        throw new Error("User does not exist");
      }

      const isValid = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_2__["verifyPassword"])(credentials.password, user.password);

      if (!isValid) {
        client.close();
        throw new Error("Incorrect Password");
      }

      client.close();
      return {
        email: user.email
      };
    }

  })]
}));

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5UGFzc3dvcmQiLCJpc1ZhbGlkIiwiY29tcGFyZSIsIk9iamVjdElkIiwicmVxdWlyZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZ2V0QWxsUG9zdHMiLCJkYiIsImRhdGEiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJnZXRQb3N0c0J5RW1haWwiLCJlbWFpbCIsImFsbFBvc3RzIiwiZmlsdGVyIiwiZXZlbnQiLCJwb3N0ZXJFbWFpbCIsImdldFBvc3REYXRhQnlJZCIsImlkIiwicG9zdG9iamVjdElkIiwiX2lkIiwidG9TdHJpbmciLCJOZXh0QXV0aCIsInNlc3Npb24iLCJqd3QiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJDcmVkZW50aWFscyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwidXNlcnNDb2xsZWN0aW9uIiwidXNlciIsImZpbmRPbmUiLCJjbG9zZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanNcIik7XG4iLCJpbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSAnYmNyeXB0anMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaChwYXNzd29yZCwgMTIpO1xuICByZXR1cm4gaGFzaGVkUGFzc3dvcmQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlQYXNzd29yZChwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpIHtcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcbiAgcmV0dXJuIGlzVmFsaWQ7XG59IiwiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZ2h1ZnJhbjpBbGxhaGlzMUBjbHVzdGVyMC5wc2lrMmFlLm1vbmdvZGIubmV0L2F1dGhTZWMxND9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIixcbiAgICB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsIC8vIFBhc3MgdGhlIHVzZVVuaWZpZWRUb3BvbG9neSBvcHRpb24gaGVyZVxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlFbWFpbChlbWFpbCkge1xuICAvL2NvbnNvbGUubG9nKGVtYWlsKTtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICAvL2NvbnNvbGUubG9nKGFsbFBvc3RzKTtcbiAgLy8gcmV0dXJuIGFsbFBvc3RzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuICByZXR1cm4gYWxsUG9zdHMuZmlsdGVyKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5SWQoaWQpIHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpOyAvL3dcblxuICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuICAvL2NvbnNvbGUubG9nKHBvc3RvYmplY3RJZCk7XG5cbiAgLy8gcmV0dXJuIGFsbFBvc3RzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5faWQgPT09IHBvc3RvYmplY3RJZCk7XG4gIHJldHVybiBhbGxQb3N0cy5maW5kKFxuICAgIChldmVudCkgPT4gZXZlbnQuX2lkLnRvU3RyaW5nKCkgPT09IHBvc3RvYmplY3RJZC50b1N0cmluZygpXG4gICk7XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpOyBnb29kXG4vLyAgIGNvbnNvbGUubG9nKG9iamVjdElkKTtcbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG4vLyBpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuIiwiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIjtcblxuaW1wb3J0IHsgdmVyaWZ5UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHNlc3Npb246IHtcbiAgICBqd3Q6IHRydWUsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5UGFzc3dvcmQoXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBQYXNzd29yZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICByZXR1cm4geyBlbWFpbDogdXNlci5lbWFpbCB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9