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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/answers/[postid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase, getAllPosts, getPostsByEmail, getPostDataById, getResponseDataById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsByEmail", function() { return getPostsByEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDataById", function() { return getPostDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponseDataById", function() { return getResponseDataById; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


const {
  ObjectId
} = __webpack_require__(/*! mongodb */ "mongodb");

async function connectToDatabase() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    // Pass the useUnifiedTopology option here
    useNewUrlParser: true,
    connectTimeoutMS: 30000
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
}
async function getResponseDataById(id) {
  const client = await connectToDatabase();
  const db = client.db();
  const data = await db.collection("QAnswers").find({}).toArray(); //console.log(data);

  return data.filter(event => event.PostID === id);
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

/***/ "./pages/api/answers/[postid].js":
/*!***************************************!*\
  !*** ./pages/api/answers/[postid].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");


async function handler(req, res) {
  const PostId = req.query.postid; //console.log(PostId);

  if (req.method === "POST") {
    return;
  }

  if (req.method === "GET") {
    try {
      //console.log(PostId);
      const documents = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_0__["getResponseDataById"])(PostId);
      res.status(200).json({
        responses: documents
      });
    } catch (err) {
      res.status(500).json({
        message: "getting response failed"
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hbnN3ZXJzL1twb3N0aWRdLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJPYmplY3RJZCIsInJlcXVpcmUiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNvbm5lY3RUaW1lb3V0TVMiLCJnZXRBbGxQb3N0cyIsImRiIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImdldFBvc3RzQnlFbWFpbCIsImVtYWlsIiwiYWxsUG9zdHMiLCJmaWx0ZXIiLCJldmVudCIsInBvc3RlckVtYWlsIiwiZ2V0UG9zdERhdGFCeUlkIiwiaWQiLCJwb3N0b2JqZWN0SWQiLCJfaWQiLCJ0b1N0cmluZyIsImdldFJlc3BvbnNlRGF0YUJ5SWQiLCJQb3N0SUQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiUG9zdElkIiwicXVlcnkiLCJwb3N0aWQiLCJtZXRob2QiLCJkb2N1bWVudHMiLCJzdGF0dXMiLCJqc29uIiwicmVzcG9uc2VzIiwiZXJyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxp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LEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsTUFBSUwsR0FBRyxDQUFDSyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSTtBQUNGO0FBQ0EsWUFBTUMsU0FBUyxHQUFHLE1BQU1ULG1FQUFtQixDQUFDSyxNQUFELENBQTNDO0FBRUFELFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxpQkFBUyxFQUFFSDtBQURRLE9BQXJCO0FBR0QsS0FQRCxDQU9FLE9BQU9JLEdBQVAsRUFBWTtBQUNaVCxTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkcsZUFBTyxFQUFFO0FBRFUsT0FBckI7QUFHRDtBQUNGO0FBQ0Y7O0FBRWNaLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDekJBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9hbnN3ZXJzL1twb3N0aWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYW5zd2Vycy9bcG9zdGlkXS5qc1wiKTtcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4gICAge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLCAvLyBQYXNzIHRoZSB1c2VVbmlmaWVkVG9wb2xvZ3kgb3B0aW9uIGhlcmVcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlFbWFpbChlbWFpbCkge1xuICAvL2NvbnNvbGUubG9nKGVtYWlsKTtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICAvL2NvbnNvbGUubG9nKGFsbFBvc3RzKTtcbiAgLy8gcmV0dXJuIGFsbFBvc3RzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuICByZXR1cm4gYWxsUG9zdHMuZmlsdGVyKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5SWQoaWQpIHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpOyAvL3dcblxuICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuICAvL2NvbnNvbGUubG9nKHBvc3RvYmplY3RJZCk7XG5cbiAgLy8gcmV0dXJuIGFsbFBvc3RzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5faWQgPT09IHBvc3RvYmplY3RJZCk7XG4gIHJldHVybiBhbGxQb3N0cy5maW5kKFxuICAgIChldmVudCkgPT4gZXZlbnQuX2lkLnRvU3RyaW5nKCkgPT09IHBvc3RvYmplY3RJZC50b1N0cmluZygpXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG4gIC8vY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBkYXRhLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LlBvc3RJRCA9PT0gaWQpO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeU9iamVjdElkKG9iamVjdElkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gICAvL2NvbnNvbGUubG9nKGFsbFBvc3RzKTsgZ29vZFxuLy8gICBjb25zb2xlLmxvZyhvYmplY3RJZCk7XG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuLy8gaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeU9iamVjdElkKG9iamVjdElkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gICBjb25zdCBkYXRhMiA9IGFsbFBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhMik7XG4vLyAgIHJldHVybiBkYXRhMjtcbi8vIH1cbiIsImltcG9ydCB7IGdldFJlc3BvbnNlRGF0YUJ5SWQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgUG9zdElkID0gcmVxLnF1ZXJ5LnBvc3RpZDtcclxuICAvL2NvbnNvbGUubG9nKFBvc3RJZCk7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhQb3N0SWQpO1xyXG4gICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBnZXRSZXNwb25zZURhdGFCeUlkKFBvc3RJZCk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgcmVzcG9uc2VzOiBkb2N1bWVudHMsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiBcImdldHRpbmcgcmVzcG9uc2UgZmFpbGVkXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9