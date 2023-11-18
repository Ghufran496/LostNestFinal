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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/profile/profiledata.js");
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
} // import { MongoClient } from "mongodb";
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

/***/ "./pages/api/profile/profiledata.js":
/*!******************************************!*\
  !*** ./pages/api/profile/profiledata.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");



async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method Not Allowed"
    });
  }

  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_1__["connectToDatabase"])();

  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_0__["getSession"])({
      req
    });

    if (!session) {
      return res.status(401).json({
        message: "Not authenticated!"
      });
    }

    const userEmail = session.user.email;
    const usersCollection = client.db().collection("users");
    const user = await usersCollection.findOne({
      email: userEmail
    }, {
      projection: {
        password: 0
      }
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found."
      });
    } //const profileData = JSON.parse(JSON.stringify(user));


    return res.status(200).json(user);
  } catch (error) {
    console.error("Error handling profile data:", error);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler); // import { getSession } from "next-auth/client";
// import { connectToDatabase } from "../../../lib/db";
// async function handler(req, res) {
//   if (req.method === "GET") {
//     const session = await getSession({ req: req });
//     if (!session) {
//       res.status(401).json({ message: "Not authenticated!" });
//       return;
//     }
//     //console.log(session);
//     const userEmail = session.user.email;
//     const client = await connectToDatabase();
//     const usersCollection = client.db().collection("users");
//     const user = await usersCollection.findOne(
//       { email: userEmail },
//       { projection: { password: 0 } }
//     );
//     if (!user) {
//       res.status(404).json({ message: "User not found." });
//       client.close();
//       return;
//     }
//     const Profiledata = JSON.parse(JSON.stringify(user));
//     res.status(200).json(Profiledata);
//     client.close();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9maWxlL3Byb2ZpbGVkYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJyZXF1aXJlIiwiY2FjaGVkQ2xpZW50IiwiY2xpZW50U2V0IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uZWN0VGltZW91dE1TIiwicG9vbFNpemUiLCJlcnJvciIsIm9uIiwiZ2V0QWxsUG9zdHMiLCJkYiIsImRhdGEiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJnZXRQb3N0RGF0YUJ5SWQiLCJpZCIsInVzZXJzQ29sbGVjdGlvbiIsInBvc3RvYmplY3RJZCIsInVzZXIiLCJmaW5kT25lIiwiX2lkIiwiZ2V0UmVzcG9uc2VEYXRhQnlJZCIsIlBvc3RJRCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwidXNlckVtYWlsIiwiZW1haWwiLCJwcm9qZWN0aW9uIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7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RUEsV0FBT0osR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJWLElBQXJCLENBQVA7QUFDRCxHQXRCRCxDQXNCRSxPQUFPWixLQUFQLEVBQWM7QUFDZFgsV0FBTyxDQUFDVyxLQUFSLENBQWMsOEJBQWQsRUFBOENBLEtBQTlDO0FBQ0EsV0FBT21CLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDtBQUNGOztBQUVjTixzRUFBZixFLENBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsMEI7Ozs7Ozs7Ozs7O0FDdkVBLG9DOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9maWxlL3Byb2ZpbGVkYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvcHJvZmlsZS9wcm9maWxlZGF0YS5qc1wiKTtcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xubGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG5sZXQgY2xpZW50U2V0ID0gZmFsc2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgaWYgKGNsaWVudFNldCkge1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIGFscmVhZHkgc3RvcmVkIGNsaWVudFwiKTtcbiAgICByZXR1cm4gY2FjaGVkQ2xpZW50O1xuICB9XG5cbiAgbGV0IGNsaWVudDtcblxuICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5tb25nb2RiX3VzZXJuYW1lfToke3Byb2Nlc3MuZW52Lm1vbmdvZGJfcGFzc3dvcmR9QCR7cHJvY2Vzcy5lbnYubW9uZ29kYl9jbHVzdGVybmFtZX0ucHNpazJhZS5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XG5cbiAgdHJ5IHtcbiAgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcsIHtcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgICAgcG9vbFNpemU6IDEwLCAvLyBBZGp1c3QgdGhpcyBiYXNlZCBvbiB5b3VyIGFwcGxpY2F0aW9uJ3MgbmVlZHNcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgfVxuXG4gIC8vIEhhbmRsZSB0aGUgJ2Nsb3NlJyBldmVudCBmb3IgcG90ZW50aWFsIHJlY29ubmVjdGlvblxuICBjbGllbnQub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uXCIpO1xuICAgIC8vIEltcGxlbWVudCByZWNvbm5lY3Rpb24gbG9naWMgaGVyZSwgc3VjaCBhcyBjYWxsaW5nIGNvbm5lY3RUb0RhdGFiYXNlKClcbiAgICBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgIC8vY2xpZW50LmNvbm5lY3QoKTtcbiAgfSk7XG5cbiAgaWYgKCFjbGllbnRTZXQpIHtcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gICAgY2xpZW50U2V0ID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBuZXcgY2xpZW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YUJ5SWQoaWQpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIik7XG4gIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICBfaWQ6IHBvc3RvYmplY3RJZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHVzZXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcIlFBbnN3ZXJzXCIpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb25cbiAgICAuZmluZCh7XG4gICAgICBQb3N0SUQ6IGlkLFxuICAgIH0pXG4gICAgLnRvQXJyYXkoKTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG4vLyBsZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbi8vIGxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuLy8gICBpZiAoY2xpZW50U2V0KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuLy8gICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4vLyAgIH1cblxuLy8gICBsZXQgY2xpZW50O1xuXG4vLyAgIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS5wc2lrMmFlLm1vbmdvZGIubmV0LyR7cHJvY2Vzcy5lbnYubW9uZ29kYl9kYXRhYmFzZX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YDtcblxuLy8gICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcsIHtcbi8vICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuLy8gICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuLy8gICB9KTtcblxuLy8gICBpZiAoIWNsaWVudFNldCkge1xuLy8gICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbi8vICAgICBjbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gY2xpZW50O1xuLy8gfVxuXG4vKlxuXG5cbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbmxldCBjbGllbnRTZXQgPSBmYWxzZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY2xpZW50U2V0KSB7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIgKyBjYWNoZWRDbGllbnQpO1xuICAgIHJldHVybiBjYWNoZWRDbGllbnQ7XG4gIH1cblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuICAgIHtcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLFxuICAgIH1cbiAgKTtcblxuICBpZiAoIWNsaWVudFNldCkge1xuICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbiAgICBjbGllbnRTZXQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4gIH1cblxuICByZXR1cm4gY2xpZW50O1xufVxuXG5cbiovXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHNCeUVtYWlsKGVtYWlsKSB7XG4vLyAgIC8vY29uc29sZS5sb2coZW1haWwpO1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpO1xuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyAgIHJldHVybiBhbGxQb3N0cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5wb3N0ZXJFbWFpbCA9PT0gZW1haWwpO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhQnlJZChpZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7IC8vd1xuXG4vLyAgIGNvbnN0IHBvc3RvYmplY3RJZCA9IG5ldyBPYmplY3RJZChpZCk7XG4vLyAgIC8vY29uc29sZS5sb2cocG9zdG9iamVjdElkKTtcblxuLy8gICAvLyByZXR1cm4gYWxsUG9zdHMuZmluZCgoZXZlbnQpID0+IGV2ZW50Ll9pZCA9PT0gcG9zdG9iamVjdElkKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbmQoXG4vLyAgICAgKGV2ZW50KSA9PiBldmVudC5faWQudG9TdHJpbmcoKSA9PT0gcG9zdG9iamVjdElkLnRvU3RyaW5nKClcbi8vICAgKTtcbi8vIH1cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZURhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4vLyAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgcmV0dXJuIGRhdGEuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuUG9zdElEID09PSBpZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIC8vY29uc29sZS5sb2coYWxsUG9zdHMpOyBnb29kXG4vLyAgIGNvbnNvbGUubG9nKG9iamVjdElkKTtcbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG4vLyBpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5T2JqZWN0SWQob2JqZWN0SWQpIHtcbi8vICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygpO1xuXG4vLyAgIGNvbnN0IGRhdGEyID0gYWxsUG9zdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEyKTtcbi8vICAgcmV0dXJuIGRhdGEyO1xuLy8gfVxuXG4vLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG4vLyBjb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbi8vIGNsYXNzIERhdGFiYXNlIHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgaWYgKCFEYXRhYmFzZS5pbnN0YW5jZSkge1xuLy8gICAgICAgdGhpcy5jbGllbnQgPSBudWxsO1xuLy8gICAgICAgdGhpcy5jbGllbnRTZXQgPSBmYWxzZTtcbi8vICAgICAgIERhdGFiYXNlLmluc3RhbmNlID0gdGhpcztcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gRGF0YWJhc2UuaW5zdGFuY2U7XG4vLyAgIH1cblxuLy8gICBhc3luYyBjb25uZWN0KCkge1xuLy8gICAgIGlmICh0aGlzLmNsaWVudFNldCkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gYWxyZWFkeSBzdG9yZWQgY2xpZW50XCIpO1xuLy8gICAgICAgcmV0dXJuIHRoaXMuY2xpZW50O1xuLy8gICAgIH1cblxuLy8gICAgIHRoaXMuY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbi8vICAgICAgIFwibW9uZ29kYitzcnY6Ly9naHVmcmFuOkFsbGFoaXMxQGNsdXN0ZXIwLnBzaWsyYWUubW9uZ29kYi5uZXQvYXV0aFNlYzE0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxuLy8gICAgICAge1xuLy8gICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbi8vICAgICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4vLyAgICAgICB9XG4vLyAgICAgKTtcblxuLy8gICAgIGlmICghdGhpcy5jbGllbnRTZXQpIHtcbi8vICAgICAgIHRoaXMuY2xpZW50U2V0ID0gdHJ1ZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuIG5ldyBjbGllbnRcIik7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHRoaXMuY2xpZW50O1xuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XG4vLyBleHBvcnQgY29uc3QgY29ubmVjdFRvRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgcmV0dXJuIGF3YWl0IGRhdGFiYXNlLmNvbm5lY3QoKTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAvL2NvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTpcIiwgZXJyb3IpO1xuLy8gICAgIHRocm93IGVycm9yO1xuLy8gICB9XG4vLyB9O1xuIiwiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pO1xyXG4gIH1cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XHJcblxyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiTm90IGF1dGhlbnRpY2F0ZWQhXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xyXG5cclxuICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZShcclxuICAgICAgeyBlbWFpbDogdXNlckVtYWlsIH0sXHJcbiAgICAgIHsgcHJvamVjdGlvbjogeyBwYXNzd29yZDogMCB9IH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmQuXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zdCBwcm9maWxlRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGhhbmRsaW5nIHByb2ZpbGUgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuLy8gaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuLy8gICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXEgfSk7XHJcblxyXG4vLyAgICAgaWYgKCFzZXNzaW9uKSB7XHJcbi8vICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOb3QgYXV0aGVudGljYXRlZCFcIiB9KTtcclxuLy8gICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vY29uc29sZS5sb2coc2Vzc2lvbik7XHJcbi8vICAgICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XHJcbi8vICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4vLyAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcInVzZXJzXCIpO1xyXG4vLyAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKFxyXG4vLyAgICAgICB7IGVtYWlsOiB1c2VyRW1haWwgfSxcclxuLy8gICAgICAgeyBwcm9qZWN0aW9uOiB7IHBhc3N3b3JkOiAwIH0gfVxyXG4vLyAgICAgKTtcclxuLy8gICAgIGlmICghdXNlcikge1xyXG4vLyAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmQuXCIgfSk7XHJcbi8vICAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcbi8vICAgICBjb25zdCBQcm9maWxlZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cclxuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFByb2ZpbGVkYXRhKTtcclxuLy8gICAgIGNsaWVudC5jbG9zZSgpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=