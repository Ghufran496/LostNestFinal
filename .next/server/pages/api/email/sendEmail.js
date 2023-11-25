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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/email/sendEmail.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/api/email/sendEmail.js":
/*!**************************************!*\
  !*** ./pages/api/email/sendEmail.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
//https://www.youtube.com/watch?v=-qQjyxbla-k
//--------https://www.youtube.com/watch?v=t2LvPXHLrek
//https://www.youtube.com/watch?v=t2LvPXHLrek&t=1s
const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer"); //https://mailtrap.io/inboxes/2499902/messages/3867662540




async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  const {
    subject,
    message
  } = req.body;
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])({
    req: req
  });
  const emailsender = session.user.email;

  if (!subject || !message) {
    return res.status(400).json({
      error: "Missing required parameters"
    });
  }

  const transporter = nodemailer.createTransport({
    port: 587,
    secure: false,
    host: "sandbox.smtp.mailtrap.io",
    auth: {
      user: "6bb4922c65d9b2",
      pass: "1e9e125d684fac"
    }
  });
  const to = (await Object(_lib_db__WEBPACK_IMPORTED_MODULE_0__["fetchallemails"])()).map(user => user.email); // Set up email options

  const mailOptions = {
    from: emailsender,
    to,
    subject: subject,
    text: message
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ");
    res.status(200).json({
      success: true
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
}

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

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9lbWFpbC9zZW5kRW1haWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCIiXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJyZXF1aXJlIiwiY2FjaGVkQ2xpZW50IiwiY2xpZW50U2V0IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uZWN0VGltZW91dE1TIiwicG9vbFNpemUiLCJlcnJvciIsIm9uIiwiZ2V0QWxsUG9zdHMiLCJkYiIsImRhdGEiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJnZXRQb3N0RGF0YUJ5SWQiLCJpZCIsInVzZXJzQ29sbGVjdGlvbiIsInBvc3RvYmplY3RJZCIsInVzZXIiLCJmaW5kT25lIiwiX2lkIiwiZ2V0UmVzcG9uc2VEYXRhQnlJZCIsIlBvc3RJRCIsImZldGNoYWxsZW1haWxzIiwiYWxsZW1haWxzIiwicHJvamVjdGlvbiIsInBhc3N3b3JkIiwibmFtZSIsIm5vZGVtYWlsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsInN1YmplY3QiLCJtZXNzYWdlIiwiYm9keSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiZW1haWxzZW5kZXIiLCJlbWFpbCIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsInNlY3VyZSIsImhvc3QiLCJhdXRoIiwicGFzcyIsInNtdHBfcGFzcyIsInRvIiwibWFwIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidGV4dCIsImluZm8iLCJzZW5kTWFpbCIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBLE1BQU07QUFBRUE7QUFBRixJQUFlQyxtQkFBTyxDQUFDLHdCQUFELENBQTVCOztBQUNBLElBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUNBLElBQUlDLFNBQVMsR0FBRyxLQUFoQjtBQUVPLGVBQWVDLGlCQUFmLEdBQW1DO0FBQ3hDLE1BQUlELFNBQUosRUFBZTtBQUNiRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBLFdBQU9KLFlBQVA7QUFDRDs7QUFFRCxNQUFJSyxNQUFKO0FBRUEsUUFBTUMs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QTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7O0FDbFFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNSSxVQUFVLEdBQUdyQyxtQkFBTyxDQUFDLDhCQUFELENBQTFCLEMsQ0FDQTs7O0FBQ0E7QUFDQTtBQUVlLGVBQWVzQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRTVCLFdBQUssRUFBRTtBQUFULEtBQXJCLENBQVA7QUFDRDs7QUFFRCxRQUFNO0FBQUU2QixXQUFGO0FBQVdDO0FBQVgsTUFBdUJOLEdBQUcsQ0FBQ08sSUFBakM7QUFDQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUMsbUVBQVUsQ0FBQztBQUFFVCxPQUFHLEVBQUVBO0FBQVAsR0FBRCxDQUFoQztBQUVBLFFBQU1VLFdBQVcsR0FBR0YsT0FBTyxDQUFDcEIsSUFBUixDQUFhdUIsS0FBakM7O0FBRUEsTUFBSSxDQUFDTixPQUFELElBQVksQ0FBQ0MsT0FBakIsRUFBMEI7QUFDeEIsV0FBT0wsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRTVCLFdBQUssRUFBRTtBQUFULEtBQXJCLENBQVA7QUFDRDs7QUFFRCxRQUFNb0MsV0FBVyxHQUFHZCxVQUFVLENBQUNlLGVBQVgsQ0FBMkI7QUFDN0NDLFFBQUksRUFBRTdDLEdBRHVDO0FBRTdDOEMsVUFBTSxFQUFFLEtBRnFDO0FBRzdDQyxRQUFJLEVBQUUvQywwQkFIdUM7QUFJN0NnRCxRQUFJLEVBQUU7QUFDSjdCLFVBQUksRUFBRW5CLGdCQURGO0FBRUppRCxVQUFJLEVBQUVqRCxnQkFBcUJrRDtBQUZ2QjtBQUp1QyxHQUEzQixDQUFwQjtBQVNBLFFBQU1DLEVBQUUsR0FBRyxDQUFDLE1BQU0zQiw4REFBYyxFQUFyQixFQUF5QjRCLEdBQXpCLENBQThCakMsSUFBRCxJQUFVQSxJQUFJLENBQUN1QixLQUE1QyxDQUFYLENBdkI4QyxDQXdCOUM7O0FBQ0EsUUFBTVcsV0FBVyxHQUFHO0FBQ2xCQyxRQUFJLEVBQUViLFdBRFk7QUFFbEJVLE1BRmtCO0FBR2xCZixXQUFPLEVBQUVBLE9BSFM7QUFJbEJtQixRQUFJLEVBQUVsQjtBQUpZLEdBQXBCOztBQU9BLE1BQUk7QUFDRixVQUFNbUIsSUFBSSxHQUFHLE1BQU1iLFdBQVcsQ0FBQ2MsUUFBWixDQUFxQkosV0FBckIsQ0FBbkI7QUFDQXpELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQW1DLE9BQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUV1QixhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNELEdBSkQsQ0FJRSxPQUFPbkQsS0FBUCxFQUFjO0FBQ2RYLFdBQU8sQ0FBQ1csS0FBUixDQUFjQSxLQUFkO0FBQ0F5QixPQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFNUIsV0FBSyxFQUFFO0FBQVQsS0FBckI7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7O0FDakRELG9DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2FwaS9lbWFpbC9zZW5kRW1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9lbWFpbC9zZW5kRW1haWwuanNcIik7XG4iLCJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCB7IE9iamVjdElkIH0gPSByZXF1aXJlKFwibW9uZ29kYlwiKTtcbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xubGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjbGllbnRTZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIik7XG4gICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbiAgfVxuXG4gIGxldCBjbGllbnQ7XG5cbiAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiK3NydjovLyR7cHJvY2Vzcy5lbnYubW9uZ29kYl91c2VybmFtZX06JHtwcm9jZXNzLmVudi5tb25nb2RiX3Bhc3N3b3JkfUAke3Byb2Nlc3MuZW52Lm1vbmdvZGJfY2x1c3Rlcm5hbWV9LnBzaWsyYWUubW9uZ29kYi5uZXQvJHtwcm9jZXNzLmVudi5tb25nb2RiX2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4gIHRyeSB7XG4gICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChjb25uZWN0aW9uU3RyaW5nLCB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbiAgICAgIHBvb2xTaXplOiAxMCwgLy8gQWRqdXN0IHRoaXMgYmFzZWQgb24geW91ciBhcHBsaWNhdGlvbidzIG5lZWRzXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4gIH1cblxuICAvLyBIYW5kbGUgdGhlICdjbG9zZScgZXZlbnQgZm9yIHBvdGVudGlhbCByZWNvbm5lY3Rpb25cbiAgY2xpZW50Lm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBjbG9zZWQuIFJlY29ubmVjdGluZy4uLlwiKTtcbiAgICAvLyBJbXBsZW1lbnQgcmVjb25uZWN0aW9uIGxvZ2ljIGhlcmUsIHN1Y2ggYXMgY2FsbGluZyBjb25uZWN0VG9EYXRhYmFzZSgpXG4gICAgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAvL2NsaWVudC5jb25uZWN0KCk7XG4gIH0pO1xuXG4gIGlmICghY2xpZW50U2V0KSB7XG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNsaWVudFNldCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlBvc3RlZEl0ZW1cIikuZmluZCh7fSkudG9BcnJheSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpO1xuICBjb25zdCBwb3N0b2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoaWQpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgX2lkOiBwb3N0b2JqZWN0SWQsXG4gIH0pO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VEYXRhQnlJZChpZCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJRQW5zd2Vyc1wiKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uXG4gICAgLmZpbmQoe1xuICAgICAgUG9zdElEOiBpZCxcbiAgICB9KVxuICAgIC50b0FycmF5KCk7XG4gIHJldHVybiB1c2VyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hhbGxlbWFpbHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcInVzZXJzXCIpO1xuXG4gIGNvbnN0IGFsbGVtYWlscyA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvblxuICAgIC5maW5kKHt9LCB7IHByb2plY3Rpb246IHsgcGFzc3dvcmQ6IDAsIG5hbWU6IDAsIF9pZDogMCB9IH0pXG4gICAgLnRvQXJyYXkoKTtcblxuICByZXR1cm4gYWxsZW1haWxzO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZURhdGEodXNlckVtYWlsKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4vLyAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcbi8vICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKFxuLy8gICAgIHsgZW1haWw6IHVzZXJFbWFpbCB9LFxuLy8gICAgIHsgcHJvamVjdGlvbjogeyBwYXNzd29yZDogMCB9IH1cbi8vICAgKTtcblxuLy8gICByZXR1cm4gdXNlcjtcbi8vIH1cblxuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuLy8gY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbi8vIGxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xuLy8gbGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4vLyAgIGlmIChjbGllbnRTZXQpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIiArIGNhY2hlZENsaWVudCk7XG4vLyAgICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbi8vICAgfVxuXG4vLyAgIGxldCBjbGllbnQ7XG5cbi8vICAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IGBtb25nb2RiK3NydjovLyR7cHJvY2Vzcy5lbnYubW9uZ29kYl91c2VybmFtZX06JHtwcm9jZXNzLmVudi5tb25nb2RiX3Bhc3N3b3JkfUAke3Byb2Nlc3MuZW52Lm1vbmdvZGJfY2x1c3Rlcm5hbWV9LnBzaWsyYWUubW9uZ29kYi5uZXQvJHtwcm9jZXNzLmVudi5tb25nb2RiX2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xuXG4vLyAgIGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoY29ubmVjdGlvblN0cmluZywge1xuLy8gICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbi8vICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4vLyAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4vLyAgIH0pO1xuXG4vLyAgIGlmICghY2xpZW50U2V0KSB7XG4vLyAgICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuLy8gICAgIGNsaWVudFNldCA9IHRydWU7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiBjbGllbnQ7XG4vLyB9XG5cbi8qXG5cblxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xubGV0IGNsaWVudFNldCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjbGllbnRTZXQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIiArIGNhY2hlZENsaWVudCk7XG4gICAgcmV0dXJuIGNhY2hlZENsaWVudDtcbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4gICAge1xuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgY29ubmVjdFRpbWVvdXRNUzogMzAwMDAsXG4gICAgfVxuICApO1xuXG4gIGlmICghY2xpZW50U2V0KSB7XG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNsaWVudFNldCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cblxuKi9cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5RW1haWwoZW1haWwpIHtcbi8vICAgLy9jb25zb2xlLmxvZyhlbWFpbCk7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbi8vICAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7XG4vLyAgIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQucG9zdGVyRW1haWwgPT09IGVtYWlsKTtcbi8vICAgcmV0dXJuIGFsbFBvc3RzLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LnBvc3RlckVtYWlsID09PSBlbWFpbCk7XG4vLyB9XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGFCeUlkKGlkKSB7XG4vLyAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTsgLy93XG5cbi8vICAgY29uc3QgcG9zdG9iamVjdElkID0gbmV3IE9iamVjdElkKGlkKTtcbi8vICAgLy9jb25zb2xlLmxvZyhwb3N0b2JqZWN0SWQpO1xuXG4vLyAgIC8vIHJldHVybiBhbGxQb3N0cy5maW5kKChldmVudCkgPT4gZXZlbnQuX2lkID09PSBwb3N0b2JqZWN0SWQpO1xuLy8gICByZXR1cm4gYWxsUG9zdHMuZmluZChcbi8vICAgICAoZXZlbnQpID0+IGV2ZW50Ll9pZC50b1N0cmluZygpID09PSBwb3N0b2JqZWN0SWQudG9TdHJpbmcoKVxuLy8gICApO1xuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlRGF0YUJ5SWQoaWQpIHtcbi8vICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbi8vICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlFBbnN3ZXJzXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblxuLy8gICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuLy8gICByZXR1cm4gZGF0YS5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5Qb3N0SUQgPT09IGlkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlPYmplY3RJZChvYmplY3RJZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbi8vICAgLy9jb25zb2xlLmxvZyhhbGxQb3N0cyk7IGdvb2Rcbi8vICAgY29uc29sZS5sb2cob2JqZWN0SWQpO1xuLy8gICBjb25zdCBkYXRhMiA9IGFsbFBvc3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkLmVxdWFscyhvYmplY3RJZCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhMik7XG4vLyAgIHJldHVybiBkYXRhMjtcbi8vIH1cbi8vIGltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlPYmplY3RJZChvYmplY3RJZCkge1xuLy8gICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG5cbi8vICAgY29uc3QgZGF0YTIgPSBhbGxQb3N0cy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcbi8vICAgY29uc29sZS5sb2coZGF0YTIpO1xuLy8gICByZXR1cm4gZGF0YTI7XG4vLyB9XG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuLy8gY2xhc3MgRGF0YWJhc2Uge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XG4vLyAgICAgICB0aGlzLmNsaWVudCA9IG51bGw7XG4vLyAgICAgICB0aGlzLmNsaWVudFNldCA9IGZhbHNlO1xuLy8gICAgICAgRGF0YWJhc2UuaW5zdGFuY2UgPSB0aGlzO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBEYXRhYmFzZS5pbnN0YW5jZTtcbi8vICAgfVxuXG4vLyAgIGFzeW5jIGNvbm5lY3QoKSB7XG4vLyAgICAgaWYgKHRoaXMuY2xpZW50U2V0KSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBhbHJlYWR5IHN0b3JlZCBjbGllbnRcIik7XG4vLyAgICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4vLyAgICAgfVxuXG4vLyAgICAgdGhpcy5jbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuLy8gICAgICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbi8vICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuLy8gICAgICAgICBjb25uZWN0VGltZW91dE1TOiAzMDAwMCxcbi8vICAgICAgIH1cbi8vICAgICApO1xuXG4vLyAgICAgaWYgKCF0aGlzLmNsaWVudFNldCkge1xuLy8gICAgICAgdGhpcy5jbGllbnRTZXQgPSB0cnVlO1xuLy8gICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gbmV3IGNsaWVudFwiKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcbi8vIGV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhYmFzZSA9IGFzeW5jICgpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICByZXR1cm4gYXdhaXQgZGF0YWJhc2UuY29ubmVjdCgpO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIC8vY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4vLyAgICAgdGhyb3cgZXJyb3I7XG4vLyAgIH1cbi8vIH07XG4iLCIvL2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9LXFRanl4YmxhLWtcclxuLy8tLS0tLS0tLWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dDJMdlBYSExyZWtcclxuLy9odHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXQyTHZQWEhMcmVrJnQ9MXNcclxuXHJcbmNvbnN0IG5vZGVtYWlsZXIgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTtcclxuLy9odHRwczovL21haWx0cmFwLmlvL2luYm94ZXMvMjQ5OTkwMi9tZXNzYWdlcy8zODY3NjYyNTQwXHJcbmltcG9ydCB7IGZldGNoYWxsZW1haWxzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBzdWJqZWN0LCBtZXNzYWdlIH0gPSByZXEuYm9keTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogcmVxIH0pO1xyXG5cclxuICBjb25zdCBlbWFpbHNlbmRlciA9IHNlc3Npb24udXNlci5lbWFpbDtcclxuXHJcbiAgaWYgKCFzdWJqZWN0IHx8ICFtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnNcIiB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuc210cF9wb3J0LFxyXG4gICAgc2VjdXJlOiBmYWxzZSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LnNtdHBfaG9zdCxcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuc210cF91c2VyLFxyXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5zbXRwX3Bhc3MsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRvID0gKGF3YWl0IGZldGNoYWxsZW1haWxzKCkpLm1hcCgodXNlcikgPT4gdXNlci5lbWFpbCk7XHJcbiAgLy8gU2V0IHVwIGVtYWlsIG9wdGlvbnNcclxuICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcclxuICAgIGZyb206IGVtYWlsc2VuZGVyLFxyXG4gICAgdG8sXHJcbiAgICBzdWJqZWN0OiBzdWJqZWN0LFxyXG4gICAgdGV4dDogbWVzc2FnZSxcclxuICB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRW1haWwgc2VudDogXCIpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=