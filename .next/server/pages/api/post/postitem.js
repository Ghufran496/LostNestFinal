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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/post/postitem.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase, getAllPosts, getPostDataById, getResponseDataById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDataById", function() { return getPostDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponseDataById", function() { return getResponseDataById; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


const {
  ObjectId
} = __webpack_require__(/*! mongodb */ "mongodb");

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

/***/ "./pages/api/post/postitem.js":
/*!************************************!*\
  !*** ./pages/api/post/postitem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);



async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])({
      req: req
    });

    if (!session) {
      res.status(401).json({
        message: "Not authenticated!"
      });
      return;
    }

    const posterEmail = session.user.email;
    const {
      Type,
      Category,
      Title,
      Description,
      Question,
      Date,
      ReducedImg
    } = data;

    if (!Type || !Category || !Title || !Description || !Question || !Date || !ReducedImg) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_0__["connectToDatabase"])();
    const db = client.db();
    const result = await db.collection("PostedItem").insertOne({
      Type: Type,
      Category: Category,
      Title: Title,
      Description: Description,
      Question: Question,
      Date: Date,
      ReducedImg: ReducedImg,
      posterEmail: posterEmail
    });
    res.status(201).json({
      message: "Item Posted!"
    });
    client.close();
  } else {
    try {
      const data = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_0__["getAllPosts"])();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Internal Server Error: Unable to fetch and Display Posts"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0L3Bvc3RpdGVtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJyZXF1aXJlIiwiY2FjaGVkQ2xpZW50IiwiY2xpZW50U2V0IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY29ubmVjdFRpbWVvdXRNUyIsImdldEFsbFBvc3RzIiwiZGIiLCJkYXRhIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiZ2V0UG9zdERhdGFCeUlkIiwiaWQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJwb3N0b2JqZWN0SWQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImdldFJlc3BvbnNlRGF0YUJ5SWQiLCJQb3N0SUQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwb3N0ZXJFbWFpbCIsImVtYWlsIiwiVHlwZSIsIkNhdGVnb3J5IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIlF1ZXN0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjbG9zZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7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QU8sRUFBRTtBQURVLE9BQXJCO0FBR0Q7QUFDRjtBQUNGOztBQUVjVCxzRUFBZixFOzs7Ozs7Ozs7OztBQ3hEQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9hcGkvcG9zdC9wb3N0aXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Bvc3QvcG9zdGl0ZW0uanNcIik7XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcblxubGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG5sZXQgY2xpZW50U2V0ID0gZmFsc2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgaWYgKGNsaWVudFNldCkge1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGFscmVhZHkgc3RvcmVkIGNsaWVudFwiICsgY2FjaGVkQ2xpZW50KTtcbiAgICByZXR1cm4gY2FjaGVkQ2xpZW50O1xuICB9XG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZ2h1ZnJhbjpBbGxhaGlzMUBjbHVzdGVyMC5wc2lrMmFlLm1vbmdvZGIubmV0L2F1dGhTZWMxND9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIixcbiAgICB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbiAgICB9XG4gICk7XG5cbiAgaWYgKCFjbGllbnRTZXQpIHtcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gICAgY2xpZW50U2V0ID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBuZXcgY2xpZW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5SWQoaWQpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIik7XG4gIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICBfaWQ6IHBvc3RvYmplY3RJZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlFBbnN3ZXJzXCIpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb25cbiAgICAuZmluZCh7XG4gICAgICBQb3N0SUQ6IGlkLFxuICAgIH0pXG4gICAgLnRvQXJyYXkoKTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5RW1haWwoZW1haWwpIHtcbi8vICAgLy9jb25zb2xlLmxvZyhlbWFpbCk7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbi8vICAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7XG4vLyAgIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyB9XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTsgLy93XG5cbi8vICAgY29uc3QgcG9zdG9iamVjdElkID0gbmV3IE9iamVjdElkKGlkKTtcbi8vICAgLy9jb25zb2xlLmxvZyhwb3N0b2JqZWN0SWQpO1xuXG4vLyAgIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQuX2lkID09PSBwb3N0b2JqZWN0SWQpO1xuLy8gICByZXR1cm4gYWxsUG9zdHMuZmluZChcbi8vICAgICAoZXZlbnQpID0+IGV2ZW50Ll9pZC50b1N0cmluZygpID09PSBwb3N0b2JqZWN0SWQudG9TdHJpbmcoKVxuLy8gICApO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YUJ5SWQoaWQpIHtcbi8vICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbi8vICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlFBbnN3ZXJzXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblxuLy8gICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuLy8gICByZXR1cm4gZGF0YS5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5Qb3N0SUQgPT09IGlkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlPYmplY3RJZChvYmplY3RJZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7IGdvb2Rcbi8vICAgY29uc29sZS5sb2cob2JqZWN0SWQpO1xuLy8gICBjb25zdCBkYXRhMiA9IGFsbFBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhMik7XG4vLyAgIHJldHVybiBkYXRhMjtcbi8vIH1cbi8vIGltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlPYmplY3RJZChvYmplY3RJZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuLy8gY2xhc3MgRGF0YWJhc2Uge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XG4vLyAgICAgICB0aGlzLmNsaWVudCA9IG51bGw7XG4vLyAgICAgICB0aGlzLmNsaWVudFNldCA9IGZhbHNlO1xuLy8gICAgICAgRGF0YWJhc2UuaW5zdGFuY2UgPSB0aGlzO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBEYXRhYmFzZS5pbnN0YW5jZTtcbi8vICAgfVxuXG4vLyAgIGFzeW5jIGNvbm5lY3QoKSB7XG4vLyAgICAgaWYgKHRoaXMuY2xpZW50U2V0KSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIik7XG4vLyAgICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4vLyAgICAgfVxuXG4vLyAgICAgdGhpcy5jbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuLy8gICAgICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbi8vICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuLy8gICAgICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbi8vICAgICAgIH1cbi8vICAgICApO1xuXG4vLyAgICAgaWYgKCF0aGlzLmNsaWVudFNldCkge1xuLy8gICAgICAgdGhpcy5jbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcbi8vIGV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGFzeW5jICgpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICByZXR1cm4gYXdhaXQgZGF0YWJhc2UuY29ubmVjdCgpO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIC8vY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4vLyAgICAgdGhyb3cgZXJyb3I7XG4vLyAgIH1cbi8vIH07XG4iLCJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSwgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXE6IHJlcSB9KTtcclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiTm90IGF1dGhlbnRpY2F0ZWQhXCIgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBvc3RlckVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xyXG4gICAgY29uc3QgeyBUeXBlLCBDYXRlZ29yeSwgVGl0bGUsIERlc2NyaXB0aW9uLCBRdWVzdGlvbiwgRGF0ZSwgUmVkdWNlZEltZyB9ID1cclxuICAgICAgZGF0YTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFUeXBlIHx8XHJcbiAgICAgICFDYXRlZ29yeSB8fFxyXG4gICAgICAhVGl0bGUgfHxcclxuICAgICAgIURlc2NyaXB0aW9uIHx8XHJcbiAgICAgICFRdWVzdGlvbiB8fFxyXG4gICAgICAhRGF0ZSB8fFxyXG4gICAgICAhUmVkdWNlZEltZ1xyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIiB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5pbnNlcnRPbmUoe1xyXG4gICAgICBUeXBlOiBUeXBlLFxyXG4gICAgICBDYXRlZ29yeTogQ2F0ZWdvcnksXHJcbiAgICAgIFRpdGxlOiBUaXRsZSxcclxuICAgICAgRGVzY3JpcHRpb246IERlc2NyaXB0aW9uLFxyXG4gICAgICBRdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICAgIERhdGU6IERhdGUsXHJcbiAgICAgIFJlZHVjZWRJbWc6IFJlZHVjZWRJbWcsXHJcbiAgICAgIHBvc3RlckVtYWlsOiBwb3N0ZXJFbWFpbCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJJdGVtIFBvc3RlZCFcIiB9KTtcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yOiBVbmFibGUgdG8gZmV0Y2ggYW5kIERpc3BsYXkgUG9zdHNcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==