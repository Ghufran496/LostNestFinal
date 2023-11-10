webpackHotUpdate_N_E("pages/mylistings/[specificid]",{

/***/ "./pages/mylistings/[specificid].js":
/*!******************************************!*\
  !*** ./pages/mylistings/[specificid].js ***!
  \******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _specificid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specificid.module.css */ "./pages/mylistings/specificid.module.css");
/* harmony import */ var _specificid_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_specificid_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");
/* harmony import */ var _components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-summary */ "./components/feed/FeedDetails/event-summary.js");
/* harmony import */ var _components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-logistics */ "./components/feed/FeedDetails/event-logistics.js");
/* harmony import */ var _components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-content */ "./components/feed/FeedDetails/event-content.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\mylistings\\[specificid].js",
    _s = $RefreshSig$();

// import React from "react";
// import classes from "./specificid.module.css";
// import Loading from "../../components/UI/Loading";
// import EventSummary from "../../components/feed/FeedDetails/event-summary";
// import EventLogistics from "../../components/feed/FeedDetails/event-logistics";
// import EventContent from "../../components/feed/FeedDetails/event-content";
// import { useState, useEffect } from "react";
// import { Fragment } from "react";
// import Head from "next/head";
// const { ObjectId } = require("mongodb");
// import { getAllPosts } from "../../lib/db";
// import { connectToDatabase } from "../../lib/db";
// function specificid(props) {
//   const [isLoading, setIsLoading] = useState(false);
//   const { extractedObject } = props;
//   if (!extractedObject) {
//     return <Loading />; // Render loading spinner if no data is available
//   }
//   // console.log(extractedObject);
//   useEffect(() => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Simulate a loading time of 5 seconds
//   }, []);
//   if (isLoading) {
//     return <Loading />;
//   }
//   const event = extractedObject;
//   return (
//     <Fragment>
//       <Head>
//         <title>{event.Title}</title>
//         <meta name="description" content={event.Description} />
//       </Head>
//       <EventSummary Title={event.Title} />
//       <EventLogistics
//         Date={event.Date}
//         ReducedImg={event.ReducedImg}
//         Title={event.Title}
//         Type={event.Type}
//         Category={event.Category}
//       />
//       <EventContent>
//         <p>{event.Description}</p>
//       </EventContent>
//     </Fragment>
//   );
// }
// export async function getServerSideProps(context) {
//   const postId = context.params.specificid;
//   const objectId = new ObjectId(postId); // Convert postId to ObjectId
//   const client = await connectToDatabase();
//   const db = client.db();
//   const data = await db.collection("PostedItem").find({}).toArray();
//   const extractedObject = data.find((item) => item._id.equals(objectId));
//   console.log(extractedObject);
//   return {
//     props: {
//       extractedObject: JSON.parse(JSON.stringify(extractedObject)),
//     },
//   };
// }
// export default specificid;
// import React from "react";
// function specificid() {
//   return <div>i am specifspecifjkicid</div>;
// }
// export default specificid;








 //const { ObjectId } = require("mongodb");
//import { getAllPosts } from "../../lib/db";
//import { connectToDatabase } from "../../lib/db";

function specificid(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var extractedObject = props.extractedObject;

  if (!extractedObject) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }, this); // Render loading spinner if no data is available
  } // console.log(extractedObject);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 2000); // Simulate a loading time of 5 seconds
  }, []);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 12
    }, this);
  }

  var event = extractedObject;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_5__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, this);
}

_s(specificid, "DlrQjwOD5XS1kcZJvMHoaf7KaZ8=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (specificid);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uanMiXSwibmFtZXMiOlsic3BlY2lmaWNpZCIsInByb3BzIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJleHRyYWN0ZWRPYmplY3QiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJEYXRlIiwiUmVkdWNlZEltZyIsIlRpdGxlIiwiVHlwZSIsIkNhdGVnb3J5IiwiRGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLEtBQUQsQ0FEakI7QUFBQSxNQUNsQkMsU0FEa0I7QUFBQSxNQUNQQyxZQURPOztBQUFBLE1BR2pCQyxlQUhpQixHQUdHSixLQUhILENBR2pCSSxlQUhpQjs7QUFLekIsTUFBSSxDQUFDQSxlQUFMLEVBQXNCO0FBQ3BCLHdCQUFPLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUCxDQURvQixDQUNBO0FBQ3JCLEdBUHdCLENBUXpCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FHLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVixDQUZjLENBSUo7QUFDWCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLE1BQUlELFNBQUosRUFBZTtBQUNiLHdCQUFPLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNELE1BQU1LLEtBQUssR0FBR0gsZUFBZDtBQUVBLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBT0UscUVBQUMsb0ZBQUQ7QUFDRSxVQUFJLEVBQUVHLEtBQUssQ0FBQ0MsSUFEZDtBQUVFLGdCQUFVLEVBQUVELEtBQUssQ0FBQ0UsVUFGcEI7QUFHRSxXQUFLLEVBQUVGLEtBQUssQ0FBQ0csS0FIZjtBQUlFLFVBQUksRUFBRUgsS0FBSyxDQUFDSSxJQUpkO0FBS0UsY0FBUSxFQUFFSixLQUFLLENBQUNLO0FBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQWVFLHFFQUFDLGtGQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBSUwsS0FBSyxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0dBMUNRZCxVOzs7QUE0RE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215bGlzdGluZ3MvW3NwZWNpZmljaWRdLjM0Mjc3M2ZlYmZmOGY0YTRlYmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3NwZWNpZmljaWQubW9kdWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Mb2FkaW5nXCI7XHJcbi8vIGltcG9ydCBFdmVudFN1bW1hcnkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1zdW1tYXJ5XCI7XHJcbi8vIGltcG9ydCBFdmVudExvZ2lzdGljcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWxvZ2lzdGljc1wiO1xyXG4vLyBpbXBvcnQgRXZlbnRDb250ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtY29udGVudFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuLy8gY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XHJcbi8vIGltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG4vLyBpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIHNwZWNpZmljaWQocHJvcHMpIHtcclxuLy8gICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuLy8gICBjb25zdCB7IGV4dHJhY3RlZE9iamVjdCB9ID0gcHJvcHM7XHJcblxyXG4vLyAgIGlmICghZXh0cmFjdGVkT2JqZWN0KSB7XHJcbi8vICAgICByZXR1cm4gPExvYWRpbmcgLz47IC8vIFJlbmRlciBsb2FkaW5nIHNwaW5uZXIgaWYgbm8gZGF0YSBpcyBhdmFpbGFibGVcclxuLy8gICB9XHJcbi8vICAgLy8gY29uc29sZS5sb2coZXh0cmFjdGVkT2JqZWN0KTtcclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICB9LCAyMDAwKTsgLy8gU2ltdWxhdGUgYSBsb2FkaW5nIHRpbWUgb2YgNSBzZWNvbmRzXHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBpZiAoaXNMb2FkaW5nKSB7XHJcbi8vICAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbi8vICAgfVxyXG4vLyAgIGNvbnN0IGV2ZW50ID0gZXh0cmFjdGVkT2JqZWN0O1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPEZyYWdtZW50PlxyXG4vLyAgICAgICA8SGVhZD5cclxuLy8gICAgICAgICA8dGl0bGU+e2V2ZW50LlRpdGxlfTwvdGl0bGU+XHJcbi8vICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXZlbnQuRGVzY3JpcHRpb259IC8+XHJcbi8vICAgICAgIDwvSGVhZD5cclxuLy8gICAgICAgPEV2ZW50U3VtbWFyeSBUaXRsZT17ZXZlbnQuVGl0bGV9IC8+XHJcblxyXG4vLyAgICAgICA8RXZlbnRMb2dpc3RpY3NcclxuLy8gICAgICAgICBEYXRlPXtldmVudC5EYXRlfVxyXG4vLyAgICAgICAgIFJlZHVjZWRJbWc9e2V2ZW50LlJlZHVjZWRJbWd9XHJcbi8vICAgICAgICAgVGl0bGU9e2V2ZW50LlRpdGxlfVxyXG4vLyAgICAgICAgIFR5cGU9e2V2ZW50LlR5cGV9XHJcbi8vICAgICAgICAgQ2F0ZWdvcnk9e2V2ZW50LkNhdGVnb3J5fVxyXG4vLyAgICAgICAvPlxyXG5cclxuLy8gICAgICAgPEV2ZW50Q29udGVudD5cclxuLy8gICAgICAgICA8cD57ZXZlbnQuRGVzY3JpcHRpb259PC9wPlxyXG4vLyAgICAgICA8L0V2ZW50Q29udGVudD5cclxuLy8gICAgIDwvRnJhZ21lbnQ+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgY29uc3QgcG9zdElkID0gY29udGV4dC5wYXJhbXMuc3BlY2lmaWNpZDtcclxuLy8gICBjb25zdCBvYmplY3RJZCA9IG5ldyBPYmplY3RJZChwb3N0SWQpOyAvLyBDb252ZXJ0IHBvc3RJZCB0byBPYmplY3RJZFxyXG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbi8vICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJQb3N0ZWRJdGVtXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcclxuXHJcbi8vICAgY29uc3QgZXh0cmFjdGVkT2JqZWN0ID0gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLl9pZC5lcXVhbHMob2JqZWN0SWQpKTtcclxuLy8gICBjb25zb2xlLmxvZyhleHRyYWN0ZWRPYmplY3QpO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgZXh0cmFjdGVkT2JqZWN0OiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4dHJhY3RlZE9iamVjdCkpLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBzcGVjaWZpY2lkO1xyXG5cclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gZnVuY3Rpb24gc3BlY2lmaWNpZCgpIHtcclxuLy8gICByZXR1cm4gPGRpdj5pIGFtIHNwZWNpZnNwZWNpZmpraWNpZDwvZGl2PjtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgc3BlY2lmaWNpZDtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc3BlY2lmaWNpZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0xvYWRpbmdcIjtcclxuaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LXN1bW1hcnlcIjtcclxuaW1wb3J0IEV2ZW50TG9naXN0aWNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtbG9naXN0aWNzXCI7XHJcbmltcG9ydCBFdmVudENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1jb250ZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG4vL2NvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xyXG4vL2ltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG4vL2ltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YUJ5SWQgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcblxyXG5mdW5jdGlvbiBzcGVjaWZpY2lkKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBleHRyYWN0ZWRPYmplY3QgfSA9IHByb3BzO1xyXG5cclxuICBpZiAoIWV4dHJhY3RlZE9iamVjdCkge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+OyAvLyBSZW5kZXIgbG9hZGluZyBzcGlubmVyIGlmIG5vIGRhdGEgaXMgYXZhaWxhYmxlXHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKGV4dHJhY3RlZE9iamVjdCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgMjAwMCk7IC8vIFNpbXVsYXRlIGEgbG9hZGluZyB0aW1lIG9mIDUgc2Vjb25kc1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIH1cclxuICBjb25zdCBldmVudCA9IGV4dHJhY3RlZE9iamVjdDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgey8qIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57ZXZlbnQuVGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtldmVudC5EZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPiAqL31cclxuICAgICAgey8qIDxFdmVudFN1bW1hcnkgVGl0bGU9e2V2ZW50LlRpdGxlfSAvPiAqL31cclxuXHJcbiAgICAgIDxFdmVudExvZ2lzdGljc1xyXG4gICAgICAgIERhdGU9e2V2ZW50LkRhdGV9XHJcbiAgICAgICAgUmVkdWNlZEltZz17ZXZlbnQuUmVkdWNlZEltZ31cclxuICAgICAgICBUaXRsZT17ZXZlbnQuVGl0bGV9XHJcbiAgICAgICAgVHlwZT17ZXZlbnQuVHlwZX1cclxuICAgICAgICBDYXRlZ29yeT17ZXZlbnQuQ2F0ZWdvcnl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8RXZlbnRDb250ZW50PlxyXG4gICAgICAgIDxwPntldmVudC5EZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvRXZlbnRDb250ZW50PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IHNwZWNpZmljaWQgfSA9IHBhcmFtcztcclxuICAvLyBjb25zb2xlLmxvZyhzcGVjaWZpY2lkLnRvU3RyaW5nKCkpO1xyXG5cclxuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhQnlJZChzcGVjaWZpY2lkKTtcclxuICAvL2NvbnNvbGUubG9nKHBvc3REYXRhKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGV4dHJhY3RlZE9iamVjdDogcG9zdERhdGEsXHJcbiAgICAgIC8vIG90aGVyIHByb3BzIGlmIGFueVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGVjaWZpY2lkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9