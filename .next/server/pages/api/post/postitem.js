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
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
// import { MongoClient } from "mongodb";
// export async function connectToDatabase() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority"
//   );
//   return client;
// }

async function connectToDatabase() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect("mongodb+srv://ghufran:Allahis1@cluster0.psik2ae.mongodb.net/authSec14?retryWrites=true&w=majority", {
    useUnifiedTopology: true // Pass the useUnifiedTopology option here

  });
  return client;
}

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


async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
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
      ReducedImg: ReducedImg
    });
    res.status(201).json({
      message: "Item Posted!"
    });
    client.close();
  } else {
    try {
      const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_0__["connectToDatabase"])();
      const db = client.db();
      const data = await db.collection("PostedItem").find({}).toArray();
      res.status(200).json(data);
      client.close();
    } catch (error) {
      // console.error("Error:", error);
      res.status(500).json({
        message: "Internal Server Error: Unable to fetch data..."
      });
      client.close();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0L3Bvc3RpdGVtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsIlR5cGUiLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJRdWVzdGlvbiIsIkRhdGUiLCJSZWR1Y2VkSW1nIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkYiIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJjbG9zZSIsImZpbmQiLCJ0b0FycmF5IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRU8sZUFBZUEsaUJBQWYsR0FBbUM7QUFDeEMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsbUdBRG1CLEVBRW5CO0FBQ0VDLHNCQUFrQixFQUFFLElBRHRCLENBQzRCOztBQUQ1QixHQUZtQixDQUFyQjtBQU9BLFNBQU9ILE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFBOztBQUVBLGVBQWVJLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBakI7QUFFQSxVQUFNO0FBQUVDLFVBQUY7QUFBUUMsY0FBUjtBQUFrQkMsV0FBbEI7QUFBeUJDLGlCQUF6QjtBQUFzQ0MsY0FBdEM7QUFBZ0RDLFVBQWhEO0FBQXNEQztBQUF0RCxRQUNKUixJQURGOztBQUdBLFFBQ0UsQ0FBQ0UsSUFBRCxJQUNBLENBQUNDLFFBREQsSUFFQSxDQUFDQyxLQUZELElBR0EsQ0FBQ0MsV0FIRCxJQUlBLENBQUNDLFFBSkQsSUFLQSxDQUFDQyxJQUxELElBTUEsQ0FBQ0MsVUFQSCxFQVFFO0FBQ0EsYUFBT1YsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckIsQ0FBUDtBQUNEOztBQUNELFVBQU1uQixNQUFNLEdBQUcsTUFBTUQsaUVBQWlCLEVBQXRDO0FBRUEsVUFBTXFCLEVBQUUsR0FBR3BCLE1BQU0sQ0FBQ29CLEVBQVAsRUFBWDtBQUVBLFVBQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxZQUFkLEVBQTRCQyxTQUE1QixDQUFzQztBQUN6RGIsVUFBSSxFQUFFQSxJQURtRDtBQUV6REMsY0FBUSxFQUFFQSxRQUYrQztBQUd6REMsV0FBSyxFQUFFQSxLQUhrRDtBQUl6REMsaUJBQVcsRUFBRUEsV0FKNEM7QUFLekRDLGNBQVEsRUFBRUEsUUFMK0M7QUFNekRDLFVBQUksRUFBRUEsSUFObUQ7QUFPekRDLGdCQUFVLEVBQUVBO0FBUDZDLEtBQXRDLENBQXJCO0FBVUFWLE9BQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0FuQixVQUFNLENBQUN3QixLQUFQO0FBQ0QsR0FqQ0QsTUFpQ087QUFDTCxRQUFJO0FBQ0YsWUFBTXhCLE1BQU0sR0FBRyxNQUFNRCxpRUFBaUIsRUFBdEM7QUFDQSxZQUFNcUIsRUFBRSxHQUFHcEIsTUFBTSxDQUFDb0IsRUFBUCxFQUFYO0FBRUEsWUFBTVosSUFBSSxHQUFHLE1BQU1ZLEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFlBQWQsRUFBNEJHLElBQTVCLENBQWlDLEVBQWpDLEVBQXFDQyxPQUFyQyxFQUFuQjtBQUVBcEIsU0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJWLElBQXJCO0FBQ0FSLFlBQU0sQ0FBQ3dCLEtBQVA7QUFDRCxLQVJELENBUUUsT0FBT0csS0FBUCxFQUFjO0FBQ2Q7QUFDQXJCLFNBQUcsQ0FDQVcsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRlI7QUFHQW5CLFlBQU0sQ0FBQ3dCLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRWNwQixzRUFBZixFOzs7Ozs7Ozs7OztBQ3ZEQSxvQyIsImZpbGUiOiJwYWdlcy9hcGkvcG9zdC9wb3N0aXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Bvc3QvcG9zdGl0ZW0uanNcIik7XG4iLCIvLyBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4vLyAgICAgXCJtb25nb2RiK3NydjovL2dodWZyYW46QWxsYWhpczFAY2x1c3RlcjAucHNpazJhZS5tb25nb2RiLm5ldC9hdXRoU2VjMTQ/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbi8vICAgKTtcblxuLy8gICByZXR1cm4gY2xpZW50O1xuLy8gfVxuXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZ2h1ZnJhbjpBbGxhaGlzMUBjbHVzdGVyMC5wc2lrMmFlLm1vbmdvZGIubmV0L2F1dGhTZWMxND9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIixcbiAgICB7XG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsIC8vIFBhc3MgdGhlIHVzZVVuaWZpZWRUb3BvbG9neSBvcHRpb24gaGVyZVxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuIiwiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgeyBUeXBlLCBDYXRlZ29yeSwgVGl0bGUsIERlc2NyaXB0aW9uLCBRdWVzdGlvbiwgRGF0ZSwgUmVkdWNlZEltZyB9ID1cclxuICAgICAgZGF0YTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFUeXBlIHx8XHJcbiAgICAgICFDYXRlZ29yeSB8fFxyXG4gICAgICAhVGl0bGUgfHxcclxuICAgICAgIURlc2NyaXB0aW9uIHx8XHJcbiAgICAgICFRdWVzdGlvbiB8fFxyXG4gICAgICAhRGF0ZSB8fFxyXG4gICAgICAhUmVkdWNlZEltZ1xyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIiB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5pbnNlcnRPbmUoe1xyXG4gICAgICBUeXBlOiBUeXBlLFxyXG4gICAgICBDYXRlZ29yeTogQ2F0ZWdvcnksXHJcbiAgICAgIFRpdGxlOiBUaXRsZSxcclxuICAgICAgRGVzY3JpcHRpb246IERlc2NyaXB0aW9uLFxyXG4gICAgICBRdWVzdGlvbjogUXVlc3Rpb24sXHJcbiAgICAgIERhdGU6IERhdGUsXHJcbiAgICAgIFJlZHVjZWRJbWc6IFJlZHVjZWRJbWcsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiSXRlbSBQb3N0ZWQhXCIgfSk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgcmVzXHJcbiAgICAgICAgLnN0YXR1cyg1MDApXHJcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvcjogVW5hYmxlIHRvIGZldGNoIGRhdGEuLi5cIiB9KTtcclxuICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=