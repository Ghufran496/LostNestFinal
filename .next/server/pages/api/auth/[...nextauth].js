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
/*! exports provided: connectToDatabase, getAllPosts, getPostDataById, getResponseDataById, fetchallemails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostDataById", function() { return getPostDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponseDataById", function() { return getResponseDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchallemails", function() { return fetchallemails; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


const {
  ObjectId
} = __webpack_require__(/*! mongodb */ "mongodb");

let cachedClient = null;
let clientSet = false;
async function connectToDatabase() {
  if (clientSet) {
    console.log("return already stored client");
    return cachedClient;
  }

  let client;
  const connectionString = `mongodb+srv://${"ghufran"}:${"Allahis1"}@${"cluster0"}.psik2ae.mongodb.net/${"authSec14"}?retryWrites=true&w=majority`;

  try {
    client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
      poolSize: 10 // Adjust this based on your application's needs

    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } // Handle the 'close' event for potential reconnection


  client.on("close", () => {
    console.log("Connection closed. Reconnecting..."); // Implement reconnection logic here, such as calling connectToDatabase()

    connectToDatabase(); //client.connect();
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
}
async function fetchallemails() {
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const allemails = await usersCollection.find({}, {
    projection: {
      password: 0,
      name: 0,
      _id: 0
    }
  }).toArray();
  return allemails;
} // export async function getProfileData(userEmail) {
//   const client = await connectToDatabase();
//   const usersCollection = client.db().collection("users");
//   const user = await usersCollection.findOne(
//     { email: userEmail },
//     { projection: { password: 0 } }
//   );
//   return user;
// }
// import { MongoClient } from "mongodb";
// const { ObjectId } = require("mongodb");
// let cachedClient = null;
// let clientSet = false;
// export async function connectToDatabase() {
//   if (clientSet) {
//     console.log("return already stored client" + cachedClient);
//     return cachedClient;
//   }
//   let client;
//   const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.psik2ae.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
//   client = await MongoClient.connect(connectionString, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     connectTimeoutMS: 30000,
//   });
//   if (!clientSet) {
//     cachedClient = client;
//     clientSet = true;
//     console.log("return new client");
//   }
//   return client;
// }

/*


import { MongoClient } from "mongodb";
const { ObjectId } = require("mongodb");

let cachedClient = null;
let clientSet = false;

export async function connectToDatabase() {
  if (clientSet) {
    console.log("return already stored client" + cachedClient);
    return cachedClient;
  }

  const client = await MongoClient.connect(
    "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
    }
  );

  if (!clientSet) {
    cachedClient = client;
    clientSet = true;
    console.log("return new client");
  }

  return client;
}


*/
// export async function getPostsByEmail(email) {
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
        //client.close();
        throw new Error("User does not exist");
      }

      const isValid = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_2__["verifyPassword"])(credentials.password, user.password);

      if (!isValid) {
        //client.close();
        throw new Error("Incorrect Password");
      } //client.close();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5UGFzc3dvcmQiLCJpc1ZhbGlkIiwiY29tcGFyZSIsIk9iamVjdElkIiwicmVxdWlyZSIsImNhY2hlZENsaWVudCIsImNsaWVudFNldCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY29ubmVjdFRpbWVvdXRNUyIsInBvb2xTaXplIiwiZXJyb3IiLCJvbiIsImdldEFsbFBvc3RzIiwiZGIiLCJkYXRhIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwiZ2V0UG9zdERhdGFCeUlkIiwiaWQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJwb3N0b2JqZWN0SWQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImdldFJlc3BvbnNlRGF0YUJ5SWQiLCJQb3N0SUQiLCJmZXRjaGFsbGVtYWlscyIsImFsbGVtYWlscyIsInByb2plY3Rpb24iLCJuYW1lIiwiTmV4dEF1dGgiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiQ3Jl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eHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc1wiKTtcbiIsImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuICByZXR1cm4gaXNWYWxpZDtcbn0iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xubGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjbGllbnRTZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIik7XG4gICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbiAgfVxuXG4gIGxldCBjbGllbnQ7XG5cbiAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiK3NydjovLyR7cHJvY2Vzcy5lbnYubW9uZ29kYl91c2VybmFtZX06JHtwcm9jZXNzLmVudi5tb25nb2RiX3Bhc3N3b3JkfUAke3Byb2Nlc3MuZW52Lm1vbmdvZGJfY2x1c3Rlcm5hbWV9LnBzaWsyYWUubW9uZ29kYi5uZXQvJHtwcm9jZXNzLmVudi5tb25nb2RiX2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4gIHRyeSB7XG4gICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChjb25uZWN0aW9uU3RyaW5nLCB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbiAgICAgIHBvb2xTaXplOiAxMCwgLy8gQWRqdXN0IHRoaXMgYmFzZWQgb24geW91ciBhcHBsaWNhdGlvbidzIG5lZWRzXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4gIH1cblxuICAvLyBIYW5kbGUgdGhlICdjbG9zZScgZXZlbnQgZm9yIHBvdGVudGlhbCByZWNvbm5lY3Rpb25cbiAgY2xpZW50Lm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBjbG9zZWQuIFJlY29ubmVjdGluZy4uLlwiKTtcbiAgICAvLyBJbXBsZW1lbnQgcmVjb25uZWN0aW9uIGxvZ2ljIGhlcmUsIHN1Y2ggYXMgY2FsbGluZyBjb25uZWN0VG9EYXRhYmFzZSgpXG4gICAgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAvL2NsaWVudC5jb25uZWN0KCk7XG4gIH0pO1xuXG4gIGlmICghY2xpZW50U2V0KSB7XG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNsaWVudFNldCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIikuZmluZCh7fSkudG9BcnJheSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpO1xuICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgX2lkOiBwb3N0b2JqZWN0SWQsXG4gIH0pO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VEYXRhQnlJZChpZCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uXG4gICAgLmZpbmQoe1xuICAgICAgUG9zdElEOiBpZCxcbiAgICB9KVxuICAgIC50b0FycmF5KCk7XG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hhbGxlbWFpbHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuXG4gIGNvbnN0IGFsbGVtYWlscyA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvblxuICAgIC5maW5kKHt9LCB7IHByb2plY3Rpb246IHsgcGFzc3dvcmQ6IDAsIG5hbWU6IDAsIF9pZDogMCB9IH0pXG4gICAgLnRvQXJyYXkoKTtcblxuICByZXR1cm4gYWxsZW1haWxzO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZURhdGEodXNlckVtYWlsKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4vLyAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcbi8vICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKFxuLy8gICAgIHsgZW1haWw6IHVzZXJFbWFpbCB9LFxuLy8gICAgIHsgcHJvamVjdGlvbjogeyBwYXNzd29yZDogMCB9IH1cbi8vICAgKTtcblxuLy8gICByZXR1cm4gdXNlcjtcbi8vIH1cblxuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuLy8gY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbi8vIGxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xuLy8gbGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4vLyAgIGlmIChjbGllbnRTZXQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIiArIGNhY2hlZENsaWVudCk7XG4vLyAgICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbi8vICAgfVxuXG4vLyAgIGxldCBjbGllbnQ7XG5cbi8vICAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiK3NydjovLyR7cHJvY2Vzcy5lbnYubW9uZ29kYl91c2VybmFtZX06JHtwcm9jZXNzLmVudi5tb25nb2RiX3Bhc3N3b3JkfUAke3Byb2Nlc3MuZW52Lm1vbmdvZGJfY2x1c3Rlcm5hbWV9LnBzaWsyYWUubW9uZ29kYi5uZXQvJHtwcm9jZXNzLmVudi5tb25nb2RiX2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4vLyAgIGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoY29ubmVjdGlvblN0cmluZywge1xuLy8gICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbi8vICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4vLyAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4vLyAgIH0pO1xuXG4vLyAgIGlmICghY2xpZW50U2V0KSB7XG4vLyAgICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuLy8gICAgIGNsaWVudFNldCA9IHRydWU7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiBjbGllbnQ7XG4vLyB9XG5cbi8qXG5cblxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xubGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjbGllbnRTZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIiArIGNhY2hlZENsaWVudCk7XG4gICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4gICAge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4gICAgfVxuICApO1xuXG4gIGlmICghY2xpZW50U2V0KSB7XG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNsaWVudFNldCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cblxuKi9cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5RW1haWwoZW1haWwpIHtcbi8vICAgLy9jb25zb2xlLmxvZyhlbWFpbCk7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbi8vICAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7XG4vLyAgIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyB9XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTsgLy93XG5cbi8vICAgY29uc3QgcG9zdG9iamVjdElkID0gbmV3IE9iamVjdElkKGlkKTtcbi8vICAgLy9jb25zb2xlLmxvZyhwb3N0b2JqZWN0SWQpO1xuXG4vLyAgIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQuX2lkID09PSBwb3N0b2JqZWN0SWQpO1xuLy8gICByZXR1cm4gYWxsUG9zdHMuZmluZChcbi8vICAgICAoZXZlbnQpID0+IGV2ZW50Ll9pZC50b1N0cmluZygpID09PSBwb3N0b2JqZWN0SWQudG9TdHJpbmcoKVxuLy8gICApO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YUJ5SWQoaWQpIHtcbi8vICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbi8vICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlFBbnN3ZXJzXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblxuLy8gICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuLy8gICByZXR1cm4gZGF0YS5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5Qb3N0SUQgPT09IGlkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlPYmplY3RJZChvYmplY3RJZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7IGdvb2Rcbi8vICAgY29uc29sZS5sb2cob2JqZWN0SWQpO1xuLy8gICBjb25zdCBkYXRhMiA9IGFsbFBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhMik7XG4vLyAgIHJldHVybiBkYXRhMjtcbi8vIH1cbi8vIGltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlPYmplY3RJZChvYmplY3RJZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuLy8gY2xhc3MgRGF0YWJhc2Uge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XG4vLyAgICAgICB0aGlzLmNsaWVudCA9IG51bGw7XG4vLyAgICAgICB0aGlzLmNsaWVudFNldCA9IGZhbHNlO1xuLy8gICAgICAgRGF0YWJhc2UuaW5zdGFuY2UgPSB0aGlzO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBEYXRhYmFzZS5pbnN0YW5jZTtcbi8vICAgfVxuXG4vLyAgIGFzeW5jIGNvbm5lY3QoKSB7XG4vLyAgICAgaWYgKHRoaXMuY2xpZW50U2V0KSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIik7XG4vLyAgICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4vLyAgICAgfVxuXG4vLyAgICAgdGhpcy5jbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuLy8gICAgICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbi8vICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuLy8gICAgICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbi8vICAgICAgIH1cbi8vICAgICApO1xuXG4vLyAgICAgaWYgKCF0aGlzLmNsaWVudFNldCkge1xuLy8gICAgICAgdGhpcy5jbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcbi8vIGV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGFzeW5jICgpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICByZXR1cm4gYXdhaXQgZGF0YWJhc2UuY29ubmVjdCgpO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIC8vY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4vLyAgICAgdGhyb3cgZXJyb3I7XG4vLyAgIH1cbi8vIH07XG4iLCJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuXG5pbXBvcnQgeyB2ZXJpZnlQYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZSxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLkNyZWRlbnRpYWxzKHtcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgLy9jbGllbnQuY2xvc2UoKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIucGFzc3dvcmRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAvL2NsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBQYXNzd29yZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY2xpZW50LmNsb3NlKCk7XG4gICAgICAgIHJldHVybiB7IGVtYWlsOiB1c2VyLmVtYWlsIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=