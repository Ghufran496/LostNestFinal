webpackHotUpdate_N_E("pages/dashboard/[itemid]",{

/***/ "./pages/dashboard/[itemid].js":
/*!*************************************!*\
  !*** ./pages/dashboard/[itemid].js ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-summary */ "./components/feed/FeedDetails/event-summary.js");
/* harmony import */ var _components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-logistics */ "./components/feed/FeedDetails/event-logistics.js");
/* harmony import */ var _components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/feed/FeedDetails/event-content */ "./components/feed/FeedDetails/event-content.js");
/* harmony import */ var _components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/overlayForm/QuestionForm */ "./components/overlayForm/QuestionForm.js");
/* harmony import */ var _itemid_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./itemid.module.css */ "./pages/dashboard/itemid.module.css");
/* harmony import */ var _itemid_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_itemid_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_UI_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/UI/Loading */ "./components/UI/Loading.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\pages\\dashboard\\[itemid].js",
    _s = $RefreshSig$();

// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import { Fragment } from "react";
// import EventSummary from "../../components/feed/FeedDetails/event-summary";
// import EventLogistics from "../../components/feed/FeedDetails/event-logistics";
// import EventContent from "../../components/feed/FeedDetails/event-content";
// import QuestionForm from "../../components/overlayForm/QuestionForm";
// import classes from "./itemid.module.css";
// const { ObjectId } = require("mongodb");
// import Loading from "../../components/UI/Loading";
// import { connectToDatabase } from "../../lib/db";
// function ItemDetailPage(props) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showQForm, setIsShowQForm] = useState(false);
//   const { extractedObject } = props;
//   if (!extractedObject) {
//     return <Loading />; // Render loading spinner if no data is available
//   }
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
//   const showModeHandler = () => {
//     setIsShowQForm(true);
//   };
//   const hideModeHandler = () => {
//     setIsShowQForm(false);
//   };
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
//       <div className={classes.btndiv}>
//         <button
//           onClick={showModeHandler}
//           className={classes.button52}
//           role="button"
//         >
//           Claim this {event.Title}
//         </button>
//       </div>
//       {showQForm && <QuestionForm onclose={hideModeHandler} data={event} />}
//     </Fragment>
//   );
// }
// export async function getServerSideProps(context) {
//   const postId = context.params.itemid;
//   const objectId = new ObjectId(postId); // Convert postId to ObjectId
//   const client = await connectToDatabase();
//   const db = client.db();
//   const data = await db.collection("PostedItem").find({}).toArray();
//   const extractedObject = data.find((item) => item._id.equals(objectId));
//   return {
//     props: {
//       extractedObject: JSON.parse(JSON.stringify(extractedObject)),
//     },
//   };
// }
// export default ItemDetailPage;











function ItemDetailPage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showQForm = _useState2[0],
      setIsShowQForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      processedObject = _useState3[0],
      setProcessedObject = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var extractedObject;
        return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                extractedObject = props.extractedObject;

                if (typeof extractedObject === "object") {
                  setProcessedObject(extractedObject);
                  setIsLoading(false);
                } else {
                  setIsLoading(true);
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [props.extractedObject]);

  if (isLoading || !processedObject) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 12
    }, this);
  }

  var event = processedObject;

  var showModeHandler = function showModeHandler() {
    setIsShowQForm(true);
  };

  var hideModeHandler = function hideModeHandler() {
    setIsShowQForm(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: event.Title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
      Title: event.Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_logistics__WEBPACK_IMPORTED_MODULE_6__["default"], {
      Date: event.Date,
      ReducedImg: event.ReducedImg,
      Title: event.Title,
      Type: event.Type,
      Category: event.Category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feed_FeedDetails_event_content__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.Description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _itemid_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: showModeHandler,
        className: _itemid_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.button52,
        role: "button",
        children: ["Claim this ", event.Title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, this), showQForm && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_overlayForm_QuestionForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onclose: hideModeHandler,
      data: event
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 5
  }, this);
}

_s(ItemDetailPage, "A8gaV+mEMmFSuhQ1NAYkkes+Wqo=");

_c = ItemDetailPage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ItemDetailPage);

var _c;

$RefreshReg$(_c, "ItemDetailPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL1tpdGVtaWRdLmpzIl0sIm5hbWVzIjpbIkl0ZW1EZXRhaWxQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNob3dRRm9ybSIsInNldElzU2hvd1FGb3JtIiwicHJvY2Vzc2VkT2JqZWN0Iiwic2V0UHJvY2Vzc2VkT2JqZWN0IiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZXh0cmFjdGVkT2JqZWN0IiwiZXZlbnQiLCJzaG93TW9kZUhhbmRsZXIiLCJoaWRlTW9kZUhhbmRsZXIiLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiRGF0ZSIsIlJlZHVjZWRJbWciLCJUeXBlIiwiQ2F0ZWdvcnkiLCJjbGFzc2VzIiwiYnRuZGl2IiwiYnV0dG9uNTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBLE1BQ1hDLFlBRFc7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUEsTUFFdEJHLFNBRnNCO0FBQUEsTUFFWEMsY0FGVzs7QUFBQSxtQkFHaUJKLHNEQUFRLENBQUMsSUFBRCxDQUh6QjtBQUFBLE1BR3RCSyxlQUhzQjtBQUFBLE1BR0xDLGtCQUhLOztBQUs3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUztBQUFBLHNSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQywrQkFEUSxHQUNZVixLQURaLENBQ1JVLGVBRFE7O0FBR2hCLG9CQUFJLE9BQU9BLGVBQVAsS0FBMkIsUUFBL0IsRUFBeUM7QUFDdkNILG9DQUFrQixDQUFDRyxlQUFELENBQWxCO0FBQ0FQLDhCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsaUJBSEQsTUFHTztBQUNMQSw4QkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQVJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRNLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFXQUEsYUFBUztBQUNWLEdBYlEsRUFhTixDQUFDVCxLQUFLLENBQUNVLGVBQVAsQ0FiTSxDQUFUOztBQWVBLE1BQUlSLFNBQVMsSUFBSSxDQUFDSSxlQUFsQixFQUFtQztBQUNqQyx3QkFBTyxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFNSyxLQUFLLEdBQUdMLGVBQWQ7O0FBRUEsTUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCUCxrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBR0EsTUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCUixrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFNLEtBQUssQ0FBQ0c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUgsS0FBSyxDQUFDSTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxrRkFBRDtBQUFjLFdBQUssRUFBRUosS0FBSyxDQUFDRztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRSxxRUFBQyxvRkFBRDtBQUNFLFVBQUksRUFBRUgsS0FBSyxDQUFDSyxJQURkO0FBRUUsZ0JBQVUsRUFBRUwsS0FBSyxDQUFDTSxVQUZwQjtBQUdFLFdBQUssRUFBRU4sS0FBSyxDQUFDRyxLQUhmO0FBSUUsVUFBSSxFQUFFSCxLQUFLLENBQUNPLElBSmQ7QUFLRSxjQUFRLEVBQUVQLEtBQUssQ0FBQ1E7QUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBZUUscUVBQUMsa0ZBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFJUixLQUFLLENBQUNJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQWtCRTtBQUFLLGVBQVMsRUFBRUsseURBQU8sQ0FBQ0MsTUFBeEI7QUFBQSw2QkFDRTtBQUNFLGVBQU8sRUFBRVQsZUFEWDtBQUVFLGlCQUFTLEVBQUVRLHlEQUFPLENBQUNFLFFBRnJCO0FBR0UsWUFBSSxFQUFDLFFBSFA7QUFBQSxrQ0FLY1gsS0FBSyxDQUFDRyxLQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLEVBNEJHVixTQUFTLGlCQUFJLHFFQUFDLDRFQUFEO0FBQWMsYUFBTyxFQUFFUyxlQUF2QjtBQUF3QyxVQUFJLEVBQUVGO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQWpFUVosYzs7S0FBQUEsYzs7QUErRU1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9baXRlbWlkXS4xMTgxZGNkYzdiMmIxNDAwMmNhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG4vLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeVwiO1xyXG4vLyBpbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3NcIjtcclxuLy8gaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnRcIjtcclxuLy8gaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9RdWVzdGlvbkZvcm1cIjtcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vaXRlbWlkLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xyXG4vLyBpbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9Mb2FkaW5nXCI7XHJcbi8vIGltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG5cclxuLy8gZnVuY3Rpb24gSXRlbURldGFpbFBhZ2UocHJvcHMpIHtcclxuLy8gICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4vLyAgIGNvbnN0IFtzaG93UUZvcm0sIHNldElzU2hvd1FGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbi8vICAgY29uc3QgeyBleHRyYWN0ZWRPYmplY3QgfSA9IHByb3BzO1xyXG5cclxuLy8gICBpZiAoIWV4dHJhY3RlZE9iamVjdCkge1xyXG4vLyAgICAgcmV0dXJuIDxMb2FkaW5nIC8+OyAvLyBSZW5kZXIgbG9hZGluZyBzcGlubmVyIGlmIG5vIGRhdGEgaXMgYXZhaWxhYmxlXHJcbi8vICAgfVxyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICB9LCAyMDAwKTsgLy8gU2ltdWxhdGUgYSBsb2FkaW5nIHRpbWUgb2YgNSBzZWNvbmRzXHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBpZiAoaXNMb2FkaW5nKSB7XHJcbi8vICAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbi8vICAgfVxyXG4vLyAgIGNvbnN0IGV2ZW50ID0gZXh0cmFjdGVkT2JqZWN0O1xyXG5cclxuLy8gICBjb25zdCBzaG93TW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbi8vICAgICBzZXRJc1Nob3dRRm9ybSh0cnVlKTtcclxuLy8gICB9O1xyXG4vLyAgIGNvbnN0IGhpZGVNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuLy8gICAgIHNldElzU2hvd1FGb3JtKGZhbHNlKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPEZyYWdtZW50PlxyXG4vLyAgICAgICA8SGVhZD5cclxuLy8gICAgICAgICA8dGl0bGU+e2V2ZW50LlRpdGxlfTwvdGl0bGU+XHJcbi8vICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXZlbnQuRGVzY3JpcHRpb259IC8+XHJcbi8vICAgICAgIDwvSGVhZD5cclxuLy8gICAgICAgPEV2ZW50U3VtbWFyeSBUaXRsZT17ZXZlbnQuVGl0bGV9IC8+XHJcblxyXG4vLyAgICAgICA8RXZlbnRMb2dpc3RpY3NcclxuLy8gICAgICAgICBEYXRlPXtldmVudC5EYXRlfVxyXG4vLyAgICAgICAgIFJlZHVjZWRJbWc9e2V2ZW50LlJlZHVjZWRJbWd9XHJcbi8vICAgICAgICAgVGl0bGU9e2V2ZW50LlRpdGxlfVxyXG4vLyAgICAgICAgIFR5cGU9e2V2ZW50LlR5cGV9XHJcbi8vICAgICAgICAgQ2F0ZWdvcnk9e2V2ZW50LkNhdGVnb3J5fVxyXG4vLyAgICAgICAvPlxyXG5cclxuLy8gICAgICAgPEV2ZW50Q29udGVudD5cclxuLy8gICAgICAgICA8cD57ZXZlbnQuRGVzY3JpcHRpb259PC9wPlxyXG4vLyAgICAgICA8L0V2ZW50Q29udGVudD5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuLy8gICAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kZUhhbmRsZXJ9XHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uNTJ9XHJcbi8vICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICBDbGFpbSB0aGlzIHtldmVudC5UaXRsZX1cclxuLy8gICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICB7c2hvd1FGb3JtICYmIDxRdWVzdGlvbkZvcm0gb25jbG9zZT17aGlkZU1vZGVIYW5kbGVyfSBkYXRhPXtldmVudH0gLz59XHJcbi8vICAgICA8L0ZyYWdtZW50PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHBvc3RJZCA9IGNvbnRleHQucGFyYW1zLml0ZW1pZDtcclxuLy8gICBjb25zdCBvYmplY3RJZCA9IG5ldyBPYmplY3RJZChwb3N0SWQpOyAvLyBDb252ZXJ0IHBvc3RJZCB0byBPYmplY3RJZFxyXG5cclxuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4vLyAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiUG9zdGVkSXRlbVwiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcblxyXG4vLyAgIGNvbnN0IGV4dHJhY3RlZE9iamVjdCA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5faWQuZXF1YWxzKG9iamVjdElkKSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBleHRyYWN0ZWRPYmplY3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXh0cmFjdGVkT2JqZWN0KSksXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWxQYWdlO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRXZlbnRTdW1tYXJ5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlZWQvRmVlZERldGFpbHMvZXZlbnQtc3VtbWFyeVwiO1xyXG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVlZC9GZWVkRGV0YWlscy9ldmVudC1sb2dpc3RpY3NcIjtcclxuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWVkL0ZlZWREZXRhaWxzL2V2ZW50LWNvbnRlbnRcIjtcclxuaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdmVybGF5Rm9ybS9RdWVzdGlvbkZvcm1cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vaXRlbWlkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdERhdGFCeUlkIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0xvYWRpbmdcIjtcclxuXHJcbmZ1bmN0aW9uIEl0ZW1EZXRhaWxQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1FGb3JtLCBzZXRJc1Nob3dRRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2Nlc3NlZE9iamVjdCwgc2V0UHJvY2Vzc2VkT2JqZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGV4dHJhY3RlZE9iamVjdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGV4dHJhY3RlZE9iamVjdCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHNldFByb2Nlc3NlZE9iamVjdChleHRyYWN0ZWRPYmplY3QpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtwcm9wcy5leHRyYWN0ZWRPYmplY3RdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZyB8fCAhcHJvY2Vzc2VkT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCBldmVudCA9IHByb2Nlc3NlZE9iamVjdDtcclxuXHJcbiAgY29uc3Qgc2hvd01vZGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93UUZvcm0odHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoaWRlTW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dRRm9ybShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntldmVudC5UaXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2V2ZW50LkRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxFdmVudFN1bW1hcnkgVGl0bGU9e2V2ZW50LlRpdGxlfSAvPlxyXG5cclxuICAgICAgPEV2ZW50TG9naXN0aWNzXHJcbiAgICAgICAgRGF0ZT17ZXZlbnQuRGF0ZX1cclxuICAgICAgICBSZWR1Y2VkSW1nPXtldmVudC5SZWR1Y2VkSW1nfVxyXG4gICAgICAgIFRpdGxlPXtldmVudC5UaXRsZX1cclxuICAgICAgICBUeXBlPXtldmVudC5UeXBlfVxyXG4gICAgICAgIENhdGVnb3J5PXtldmVudC5DYXRlZ29yeX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxFdmVudENvbnRlbnQ+XHJcbiAgICAgICAgPHA+e2V2ZW50LkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9FdmVudENvbnRlbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bmRpdn0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17c2hvd01vZGVIYW5kbGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjUyfVxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xhaW0gdGhpcyB7ZXZlbnQuVGl0bGV9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Nob3dRRm9ybSAmJiA8UXVlc3Rpb25Gb3JtIG9uY2xvc2U9e2hpZGVNb2RlSGFuZGxlcn0gZGF0YT17ZXZlbnR9IC8+fVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBwb3N0SWQgPSBjb250ZXh0LnBhcmFtcy5pdGVtaWQ7XHJcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YUJ5SWQocG9zdElkKTtcclxuICAvL2NvbnNvbGUubG9nKHBvc3REYXRhKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGV4dHJhY3RlZE9iamVjdDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkpLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtRGV0YWlsUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==