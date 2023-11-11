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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/myposts/fetchmypost.js");
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

/***/ "./pages/api/myposts/fetchmypost.js":
/*!******************************************!*\
  !*** ./pages/api/myposts/fetchmypost.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);



async function handler(req, res) {
  if (req.method === "POST") {
    return;
  } else {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])({
      req: req
    });

    if (!session) {
      res.status(401).json({
        message: "Not authenticated!"
      });
      return;
    }

    try {
      const userEmail = session.user.email;
      const data = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_0__["getPostsByEmail"])(userEmail);
      res.status(200).json(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Internal Server Error: Unable to fetch and Display Specific Posts"
      });
      return;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler); // import { getPostsByEmail } from "../../../lib/db";
// import { getSession } from "next-auth/client";
// async function handler(req, res) {
//   if (req.method === "POST") {
//     return;
//   } else {
//     const session = await getSession({ req: req });
//     if (!session) {
//       res.status(401).json({ message: "Not authenticated!" });
//       return;
//     }
//     try {
//       const userEmail = session.user.email;
//       const data = await getPostsByEmail(userEmail);
//       //console.log(data);
//       res.status(200).json(data);
//       client.close();
//     } catch (error) {
//       // console.error("Error:", error);
//       res.status(500).json({
//         message:
//           "Internal Server Error: Unable to fetch and Display Specific Posts",
//       });
//       client.close();
//     }
//   }
// }
// export default handler;

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9teXBvc3RzL2ZldGNobXlwb3N0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJyZXF1aXJlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uZWN0VGltZW91dE1TIiwiZ2V0QWxsUG9zdHMiLCJkYiIsImRhdGEiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJnZXRQb3N0c0J5RW1haWwiLCJlbWFpbCIsImFsbFBvc3RzIiwiZmlsdGVyIiwiZXZlbnQiLCJwb3N0ZXJFbWFpbCIsImdldFBvc3REYXRhQnlJZCIsImlkIiwicG9zdG9iamVjdElkIiwiX2lkIiwidG9TdHJpbmciLCJnZXRSZXNwb25zZURhdGFCeUlkIiwiUG9zdElEIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VyRW1haWwiLCJ1c2VyIiwiZXJyb3IiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FB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bkIsRUFBMkI7QUFDekI7QUFDRCxHQUZELE1BRU87QUFDTCxVQUFNQyxPQUFPLEdBQUcsTUFBTUMsbUVBQVUsQ0FBQztBQUFFSixTQUFHLEVBQUVBO0FBQVAsS0FBRCxDQUFoQzs7QUFDQSxRQUFJLENBQUNHLE9BQUwsRUFBYztBQUNaRixTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0Q7O0FBRUQsUUFBSTtBQUNGLFlBQU1DLFNBQVMsR0FBR0wsT0FBTyxDQUFDTSxJQUFSLENBQWF0QixLQUEvQjtBQUVBLFlBQU1MLElBQUksR0FBRyxNQUFNSSwrREFBZSxDQUFDc0IsU0FBRCxDQUFsQztBQUVBUCxTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQnhCLElBQXJCO0FBQ0QsS0FORCxDQU1FLE9BQU80QixLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDRCxLQUFSLENBQWMsUUFBZCxFQUF3QkEsS0FBeEI7QUFDQVQsU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLGVBQU8sRUFDTDtBQUZpQixPQUFyQjtBQUlBO0FBQ0Q7QUFDRjtBQUNGOztBQUVjUixzRUFBZixFLENBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsMEI7Ozs7Ozs7Ozs7O0FDaEVBLG9DOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2FwaS9teXBvc3RzL2ZldGNobXlwb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvbXlwb3N0cy9mZXRjaG15cG9zdC5qc1wiKTtcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4gICAge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLCAvLyBQYXNzIHRoZSB1c2VVbmlmaWVkVG9wb2xvZ3kgb3B0aW9uIGhlcmVcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlFbWFpbChlbWFpbCkge1xuICAvL2NvbnNvbGUubG9nKGVtYWlsKTtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuICAvL2NvbnNvbGUubG9nKGFsbFBvc3RzKTtcbiAgLy8gcmV0dXJuIGFsbFBvc3RzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuICByZXR1cm4gYWxsUG9zdHMuZmlsdGVyKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5SWQoaWQpIHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpOyAvL3dcblxuICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuICAvL2NvbnNvbGUubG9nKHBvc3RvYmplY3RJZCk7XG5cbiAgLy8gcmV0dXJuIGFsbFBvc3RzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5faWQgPT09IHBvc3RvYmplY3RJZCk7XG4gIHJldHVybiBhbGxQb3N0cy5maW5kKFxuICAgIChldmVudCkgPT4gZXZlbnQuX2lkLnRvU3RyaW5nKCkgPT09IHBvc3RvYmplY3RJZC50b1N0cmluZygpXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG4gIC8vY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBkYXRhLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LlBvc3RJRCA9PT0gaWQpO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeU9iamVjdElkKG9iamVjdElkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gICAvL2NvbnNvbGUubG9nKGFsbFBvc3RzKTsgZ29vZFxuLy8gICBjb25zb2xlLmxvZyhvYmplY3RJZCk7XG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuLy8gaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeU9iamVjdElkKG9iamVjdElkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuLy8gICBjb25zdCBkYXRhMiA9IGFsbFBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhMik7XG4vLyAgIHJldHVybiBkYXRhMjtcbi8vIH1cbiIsImltcG9ydCB7IGdldFBvc3RzQnlFbWFpbCB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXEgfSk7XHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIk5vdCBhdXRoZW50aWNhdGVkIVwiIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBvc3RzQnlFbWFpbCh1c2VyRW1haWwpO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICBcIkludGVybmFsIFNlcnZlciBFcnJvcjogVW5hYmxlIHRvIGZldGNoIGFuZCBEaXNwbGF5IFNwZWNpZmljIFBvc3RzXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0UG9zdHNCeUVtYWlsIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG4vLyBpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuLy8gICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuLy8gICAgIHJldHVybjtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IHJlcSB9KTtcclxuLy8gICAgIGlmICghc2Vzc2lvbikge1xyXG4vLyAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiTm90IGF1dGhlbnRpY2F0ZWQhXCIgfSk7XHJcbi8vICAgICAgIHJldHVybjtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XHJcblxyXG4vLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdHNCeUVtYWlsKHVzZXJFbWFpbCk7XHJcbi8vICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4vLyAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuLy8gICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuLy8gICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4vLyAgICAgICAgIG1lc3NhZ2U6XHJcbi8vICAgICAgICAgICBcIkludGVybmFsIFNlcnZlciBFcnJvcjogVW5hYmxlIHRvIGZldGNoIGFuZCBEaXNwbGF5IFNwZWNpZmljIFBvc3RzXCIsXHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9