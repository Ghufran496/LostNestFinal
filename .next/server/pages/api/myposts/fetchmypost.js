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

class Database {
  constructor() {
    if (!Database.instance) {
      this.client = null;
      this.clientSet = false;
      Database.instance = this;
    }

    return Database.instance;
  }

  async connect() {
    if (this.clientSet) {
      console.log("return already stored client" + this.client);
      return this.client;
    }

    this.client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      connectTimeoutMS: 30000
    });

    if (!this.clientSet) {
      this.clientSet = true;
      console.log("return new client");
    }

    return this.client;
  }

}

const database = new Database();
const connectToDatabase = database.connect.bind(database); // import { MongoClient } from "mongodb";
// const { ObjectId } = require("mongodb");
// let cachedClient = null;
// let clientSet = false;
// export async function connectToDatabase() {
//   if (clientSet) {
//     console.log("return already stored client" + cachedClient);
//     return cachedClient;
//   }
//   const client = await MongoClient.connect(
//     "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority",
//     {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       connectTimeoutMS: 30000,
//     }
//   );
//   if (!clientSet) {
//     cachedClient = client;
//     clientSet = true;
//     console.log("return new client");
//   }
//   return client;
// }

async function getAllPosts() {
  const client = await connectToDatabase();
  const db = client.db(); //const data = await db.collection("PostedItem").find({}).toArray();

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

/***/ }),

/***/ "./pages/api/myposts/fetchmypost.js":
/*!******************************************!*\
  !*** ./pages/api/myposts/fetchmypost.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");



async function handler(req, res) {
  if (req.method === "POST") {
    return;
  } else {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_0__["getSession"])({
      req: req
    });

    if (!session) {
      res.status(401).json({
        message: "Not authenticated!"
      });
      return;
    }

    try {
      const userEmail = session.user.email; //const data = await getPostsByEmail(userEmail);

      const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__["connectToDatabase"])();
      const usersCollection = client.db().collection("PostedItem");
      const data = await usersCollection.find({
        posterEmail: userEmail
      }).toArray();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9teXBvc3RzL2ZldGNobXlwb3N0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJyZXF1aXJlIiwiRGF0YWJhc2UiLCJjb25zdHJ1Y3RvciIsImluc3RhbmNlIiwiY2xpZW50IiwiY2xpZW50U2V0IiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJNb25nb0NsaWVudCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNvbm5lY3RUaW1lb3V0TVMiLCJkYXRhYmFzZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiYmluZCIsImdldEFsbFBvc3RzIiwiZGIiLCJkYXRhIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiZ2V0UG9zdERhdGFCeUlkIiwiaWQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJwb3N0b2JqZWN0SWQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImdldFJlc3BvbnNlRGF0YUJ5SWQiLCJQb3N0SUQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJFbWFpbCIsImVtYWlsIiwicG9zdGVyRW1haWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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Rjs7QUFDQSxZQUFNckMsTUFBTSxHQUFHLE1BQU1VLGlFQUFpQixFQUF0QztBQUVBLFlBQU1VLGVBQWUsR0FBR3BCLE1BQU0sQ0FBQ2EsRUFBUCxHQUFZRSxVQUFaLENBQXVCLFlBQXZCLENBQXhCO0FBRUEsWUFBTUQsSUFBSSxHQUFHLE1BQU1NLGVBQWUsQ0FDL0JKLElBRGdCLENBQ1g7QUFDSnNCLG1CQUFXLEVBQUVGO0FBRFQsT0FEVyxFQUloQm5CLE9BSmdCLEVBQW5CO0FBTUFZLFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCcEIsSUFBckI7QUFDRCxLQWZELENBZUUsT0FBT3lCLEtBQVAsRUFBYztBQUNkcEMsYUFBTyxDQUFDb0MsS0FBUixDQUFjLFFBQWQsRUFBd0JBLEtBQXhCO0FBQ0FWLFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxlQUFPLEVBQ0w7QUFGaUIsT0FBckI7QUFJQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFY1Isc0VBQWYsRSxDQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDBCOzs7Ozs7Ozs7OztBQ3pFQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9hcGkvbXlwb3N0cy9mZXRjaG15cG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL215cG9zdHMvZmV0Y2hteXBvc3QuanNcIik7XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbmNsYXNzIERhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFEYXRhYmFzZS5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5jbGllbnQgPSBudWxsO1xuICAgICAgdGhpcy5jbGllbnRTZXQgPSBmYWxzZTtcbiAgICAgIERhdGFiYXNlLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gRGF0YWJhc2UuaW5zdGFuY2U7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KCkge1xuICAgIGlmICh0aGlzLmNsaWVudFNldCkge1xuICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyB0aGlzLmNsaWVudCk7XG4gICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5jbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4gICAgICB7XG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCF0aGlzLmNsaWVudFNldCkge1xuICAgICAgdGhpcy5jbGllbnRTZXQgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4gIH1cbn1cblxuY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGRhdGFiYXNlLmNvbm5lY3QuYmluZChkYXRhYmFzZSk7XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG4vLyBsZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbi8vIGxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuLy8gICBpZiAoY2xpZW50U2V0KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuLy8gICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4vLyAgIH1cblxuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuLy8gICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuLy8gICAgIHtcbi8vICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbi8vICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbi8vICAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuLy8gICAgIH1cbi8vICAgKTtcblxuLy8gICBpZiAoIWNsaWVudFNldCkge1xuLy8gICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbi8vICAgICBjbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gY2xpZW50O1xuLy8gfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgLy9jb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIikuZmluZCh7fSkudG9BcnJheSgpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIikuZmluZCh7fSkudG9BcnJheSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpO1xuICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgX2lkOiBwb3N0b2JqZWN0SWQsXG4gIH0pO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VEYXRhQnlJZChpZCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uXG4gICAgLmZpbmQoe1xuICAgICAgUG9zdElEOiBpZCxcbiAgICB9KVxuICAgIC50b0FycmF5KCk7XG4gIHJldHVybiB1c2VyO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeUVtYWlsKGVtYWlsKSB7XG4vLyAgIC8vY29uc29sZS5sb2coZW1haWwpO1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpO1xuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyAgIHJldHVybiBhbGxQb3N0cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhQnlJZChpZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7IC8vd1xuXG4vLyAgIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG4vLyAgIC8vY29uc29sZS5sb2cocG9zdG9iamVjdElkKTtcblxuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50Ll9pZCA9PT0gcG9zdG9iamVjdElkKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbmQoXG4vLyAgICAgKGV2ZW50KSA9PiBldmVudC5faWQudG9TdHJpbmcoKSA9PT0gcG9zdG9iamVjdElkLnRvU3RyaW5nKClcbi8vICAgKTtcbi8vIH1cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4vLyAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgcmV0dXJuIGRhdGEuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuUG9zdElEID09PSBpZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpOyBnb29kXG4vLyAgIGNvbnNvbGUubG9nKG9iamVjdElkKTtcbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG4vLyBpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuIiwiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogcmVxIH0pO1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOb3QgYXV0aGVudGljYXRlZCFcIiB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24udXNlci5lbWFpbDtcclxuXHJcbiAgICAgIC8vY29uc3QgZGF0YSA9IGF3YWl0IGdldFBvc3RzQnlFbWFpbCh1c2VyRW1haWwpO1xyXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIik7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uXHJcbiAgICAgICAgLmZpbmQoe1xyXG4gICAgICAgICAgcG9zdGVyRW1haWw6IHVzZXJFbWFpbCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50b0FycmF5KCk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgIFwiSW50ZXJuYWwgU2VydmVyIEVycm9yOiBVbmFibGUgdG8gZmV0Y2ggYW5kIERpc3BsYXkgU3BlY2lmaWMgUG9zdHNcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRQb3N0c0J5RW1haWwgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcbi8vIGltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4vLyAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4vLyAgICAgcmV0dXJuO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogcmVxIH0pO1xyXG4vLyAgICAgaWYgKCFzZXNzaW9uKSB7XHJcbi8vICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOb3QgYXV0aGVudGljYXRlZCFcIiB9KTtcclxuLy8gICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24udXNlci5lbWFpbDtcclxuXHJcbi8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0c0J5RW1haWwodXNlckVtYWlsKTtcclxuLy8gICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbi8vICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4vLyAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4vLyAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbi8vICAgICAgICAgbWVzc2FnZTpcclxuLy8gICAgICAgICAgIFwiSW50ZXJuYWwgU2VydmVyIEVycm9yOiBVbmFibGUgdG8gZmV0Y2ggYW5kIERpc3BsYXkgU3BlY2lmaWMgUG9zdHNcIixcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=