webpackHotUpdate_N_E("pages/mylistings/[specificid]",{

/***/ "./components/answers/answer.js":
/*!**************************************!*\
  !*** ./components/answers/answer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _answer_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./answer-list */ "./components/answers/answer-list.js");
/* harmony import */ var _answer_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answer.module.css */ "./components/answers/answer.module.css");
/* harmony import */ var _answer_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_answer_module_css__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\answers\\answer.js",
    _s = $RefreshSig$();





function Answer(props) {
  _s();

  var postid = props.postid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showResponse = _useState[0],
      setShowResponse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showLoadingContent = _useState2[0],
      setLoadingContent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      response = _useState3[0],
      setResponse = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _response, data;

        return G_FYP_LostNestfyp_lostnestprj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!showResponse) {
                  _context.next = 18;
                  break;
                }

                setLoadingContent(true);
                _context.prev = 2;
                _context.next = 5;
                return fetch("/api/answers/" + postid);

              case 5:
                _response = _context.sent;
                _context.next = 8;
                return _response.json();

              case 8:
                data = _context.sent;
                setResponse(data.responses);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                console.error("Error fetching data:", _context.t0); // Handle errors as needed

              case 15:
                _context.prev = 15;
                setLoadingContent(false);
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12, 15, 18]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }(); // Only fetch data if showResponse is true and responses are not already available


    if (showResponse && response.length === 0) {
      fetchData();
    }
  }, [showResponse, postid, setResponse, setLoadingContent]);

  function toggleResponseHandler() {
    setShowResponse(function (prevStatus) {
      return !prevStatus;
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _answer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.responses,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _answer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: toggleResponseHandler,
        className: _answer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button52,
        children: [showResponse ? "Hide" : "Show", " Responses"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), showLoadingContent && response.length === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        marginBottom: "1rem"
      },
      children: "No responses yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_answer_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ansitems: response
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Answer, "bH81Bz/lNSt08RYxKV0lXdhngRs=");

_c = Answer;
/* harmony default export */ __webpack_exports__["default"] = (Answer); // import { useEffect, useState } from "react";
// import AnswerList from "./answer-list";
// import classes from "./answer.module.css";
// function Answer(props) {
//   const { postid } = props;
//   //console.log(postid);
//   const [showResponse, setShowResponse] = useState(false);
//   const [showLoadingContent, setLoadingContent] = useState(false);
//   const [response, setresponse] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       if (showResponse) {
//         setLoadingContent(true);
//         try {
//           const response = await fetch("/api/answers/" + postid);
//           const data = await response.json();
//           setresponse(data.responses);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//           // Handle errors as needed
//         } finally {
//           setLoadingContent(false);
//         }
//       }
//     };
//     // Only fetch data if showResponse is true and responses are not already available
//     if (showResponse && response.length === 0) {
//       fetchData();
//     }
//   }, [showResponse, postid, setresponse, setLoadingContent]);
//   function toggleResponseHandler() {
//     setShowResponse((prevStatus) => !prevStatus);
//   }
//   return (
//     <section className={classes.responses}>
//       <div className={classes.btndiv}>
//         <button onClick={toggleResponseHandler} className={classes.button52}>
//           {showResponse ? "Hide" : "Show"} Responses
//         </button>
//       </div>
//       {showLoadingContent && (
//         <p style={{ marginBottom: "1rem" }}>No responses yet!</p>
//       )}
//       {showResponse && <AnswerList ansitems={response} />}
//     </section>
//   );
// }
// export default Answer;
// useEffect(() => {
//   const fetchData = async () => {
//     if (showResponse) {
//       setLoadingContent(true);
//       try {
//         const response = await fetch("/api/answers/" + postid);
//         const data = await response.json();
//         setresponse(data.responses);
//         if (data.responses) {
//           setLoadingContent(false);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Handle errors as needed
//         setLoadingContent(false);
//       }
//     }
//     setLoadingContent(false);
//   };
//   fetchData();
//   //setLoadingContent(false);
// }, [showResponse, postid, setresponse, setLoadingContent]);
// useEffect(() => {
//   //setLoadingContent(true);
//   if (showResponse) {
//     fetch("/api/answers/" + postid)
//       .then((response) => response.json())
//       .then((data) => setresponse(data.responses));
//   }
//   setLoadingContent(false);
// }, [showResponse, setLoadingContent]);

var _c;

$RefreshReg$(_c, "Answer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5qcyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsInBvc3RpZCIsInVzZVN0YXRlIiwic2hvd1Jlc3BvbnNlIiwic2V0U2hvd1Jlc3BvbnNlIiwic2hvd0xvYWRpbmdDb250ZW50Iiwic2V0TG9hZGluZ0NvbnRlbnQiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJqc29uIiwiZGF0YSIsInJlc3BvbnNlcyIsImNvbnNvbGUiLCJlcnJvciIsImxlbmd0aCIsInRvZ2dsZVJlc3BvbnNlSGFuZGxlciIsInByZXZTdGF0dXMiLCJjbGFzc2VzIiwiYnRuZGl2IiwiYnV0dG9uNTIiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxNQUNiQyxNQURhLEdBQ0ZELEtBREUsQ0FDYkMsTUFEYTs7QUFBQSxrQkFFbUJDLHNEQUFRLENBQUMsS0FBRCxDQUYzQjtBQUFBLE1BRWRDLFlBRmM7QUFBQSxNQUVBQyxlQUZBOztBQUFBLG1CQUcyQkYsc0RBQVEsQ0FBQyxLQUFELENBSG5DO0FBQUEsTUFHZEcsa0JBSGM7QUFBQSxNQUdNQyxpQkFITjs7QUFBQSxtQkFJV0osc0RBQVEsQ0FBQyxFQUFELENBSm5CO0FBQUEsTUFJZEssUUFKYztBQUFBLE1BSUpDLFdBSkk7O0FBTXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTO0FBQUEsc1JBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNaUCxZQURZO0FBQUE7QUFBQTtBQUFBOztBQUVkRyxpQ0FBaUIsQ0FBQyxJQUFELENBQWpCO0FBRmM7QUFBQTtBQUFBLHVCQUlXSyxLQUFLLENBQUMsa0JBQWtCVixNQUFuQixDQUpoQjs7QUFBQTtBQUlOTSx5QkFKTTtBQUFBO0FBQUEsdUJBS09BLFNBQVEsQ0FBQ0ssSUFBVCxFQUxQOztBQUFBO0FBS05DLG9CQUxNO0FBTVpMLDJCQUFXLENBQUNLLElBQUksQ0FBQ0MsU0FBTixDQUFYO0FBTlk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRWkMsdUJBQU8sQ0FBQ0MsS0FBUixDQUFjLHNCQUFkLGVBUlksQ0FTWjs7QUFUWTtBQUFBO0FBV1pWLGlDQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFYWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUSSxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWYsQ0FEYyxDQWlCZDs7O0FBQ0EsUUFBSVAsWUFBWSxJQUFJSSxRQUFRLENBQUNVLE1BQVQsS0FBb0IsQ0FBeEMsRUFBMkM7QUFDekNQLGVBQVM7QUFDVjtBQUNGLEdBckJRLEVBcUJOLENBQUNQLFlBQUQsRUFBZUYsTUFBZixFQUF1Qk8sV0FBdkIsRUFBb0NGLGlCQUFwQyxDQXJCTSxDQUFUOztBQXVCQSxXQUFTWSxxQkFBVCxHQUFpQztBQUMvQmQsbUJBQWUsQ0FBQyxVQUFDZSxVQUFEO0FBQUEsYUFBZ0IsQ0FBQ0EsVUFBakI7QUFBQSxLQUFELENBQWY7QUFDRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRUMseURBQU8sQ0FBQ04sU0FBNUI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRU0seURBQU8sQ0FBQ0MsTUFBeEI7QUFBQSw2QkFDRTtBQUFRLGVBQU8sRUFBRUgscUJBQWpCO0FBQXdDLGlCQUFTLEVBQUVFLHlEQUFPLENBQUNFLFFBQTNEO0FBQUEsbUJBQ0duQixZQUFZLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQU1HRSxrQkFBa0IsSUFBSUUsUUFBUSxDQUFDVSxNQUFULEtBQW9CLENBQTFDLGlCQUNDO0FBQUcsV0FBSyxFQUFFO0FBQUVNLG9CQUFZLEVBQUU7QUFBaEIsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLEVBU0dwQixZQUFZLGlCQUFJLHFFQUFDLG9EQUFEO0FBQVksY0FBUSxFQUFFSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBOUNRUixNOztLQUFBQSxNO0FBZ0RNQSxxRUFBZixFLENBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uMmFjNDRmNmVmOWE1Zjc0NzFkNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBBbnN3ZXJMaXN0IGZyb20gXCIuL2Fuc3dlci1saXN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2Fuc3dlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBBbnN3ZXIocHJvcHMpIHtcclxuICBjb25zdCB7IHBvc3RpZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3Nob3dSZXNwb25zZSwgc2V0U2hvd1Jlc3BvbnNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0xvYWRpbmdDb250ZW50LCBzZXRMb2FkaW5nQ29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzaG93UmVzcG9uc2UpIHtcclxuICAgICAgICBzZXRMb2FkaW5nQ29udGVudCh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZCk7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgc2V0UmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBhcyBuZWVkZWRcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBPbmx5IGZldGNoIGRhdGEgaWYgc2hvd1Jlc3BvbnNlIGlzIHRydWUgYW5kIHJlc3BvbnNlcyBhcmUgbm90IGFscmVhZHkgYXZhaWxhYmxlXHJcbiAgICBpZiAoc2hvd1Jlc3BvbnNlICYmIHJlc3BvbnNlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICAgIH1cclxuICB9LCBbc2hvd1Jlc3BvbnNlLCBwb3N0aWQsIHNldFJlc3BvbnNlLCBzZXRMb2FkaW5nQ29udGVudF0pO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVSZXNwb25zZUhhbmRsZXIoKSB7XHJcbiAgICBzZXRTaG93UmVzcG9uc2UoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uc2VzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVJlc3BvbnNlSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjUyfT5cclxuICAgICAgICAgIHtzaG93UmVzcG9uc2UgPyBcIkhpZGVcIiA6IFwiU2hvd1wifSBSZXNwb25zZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93TG9hZGluZ0NvbnRlbnQgJiYgcmVzcG9uc2UubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19Pk5vIHJlc3BvbnNlcyB5ZXQhPC9wPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd1Jlc3BvbnNlICYmIDxBbnN3ZXJMaXN0IGFuc2l0ZW1zPXtyZXNwb25zZX0gLz59XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyO1xyXG5cclxuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0IEFuc3dlckxpc3QgZnJvbSBcIi4vYW5zd2VyLWxpc3RcIjtcclxuLy8gaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYW5zd2VyLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIEFuc3dlcihwcm9wcykge1xyXG4vLyAgIGNvbnN0IHsgcG9zdGlkIH0gPSBwcm9wcztcclxuLy8gICAvL2NvbnNvbGUubG9nKHBvc3RpZCk7XHJcbi8vICAgY29uc3QgW3Nob3dSZXNwb25zZSwgc2V0U2hvd1Jlc3BvbnNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuLy8gICBjb25zdCBbc2hvd0xvYWRpbmdDb250ZW50LCBzZXRMb2FkaW5nQ29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbi8vICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRyZXNwb25zZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgIGlmIChzaG93UmVzcG9uc2UpIHtcclxuLy8gICAgICAgICBzZXRMb2FkaW5nQ29udGVudCh0cnVlKTtcclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZCk7XHJcbi8vICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgICAgICAgc2V0cmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpO1xyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4vLyAgICAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBhcyBuZWVkZWRcclxuLy8gICAgICAgICB9IGZpbmFsbHkge1xyXG4vLyAgICAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICAvLyBPbmx5IGZldGNoIGRhdGEgaWYgc2hvd1Jlc3BvbnNlIGlzIHRydWUgYW5kIHJlc3BvbnNlcyBhcmUgbm90IGFscmVhZHkgYXZhaWxhYmxlXHJcbi8vICAgICBpZiAoc2hvd1Jlc3BvbnNlICYmIHJlc3BvbnNlLmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICBmZXRjaERhdGEoKTtcclxuLy8gICAgIH1cclxuLy8gICB9LCBbc2hvd1Jlc3BvbnNlLCBwb3N0aWQsIHNldHJlc3BvbnNlLCBzZXRMb2FkaW5nQ29udGVudF0pO1xyXG5cclxuLy8gICBmdW5jdGlvbiB0b2dnbGVSZXNwb25zZUhhbmRsZXIoKSB7XHJcbi8vICAgICBzZXRTaG93UmVzcG9uc2UoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uc2VzfT5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVJlc3BvbnNlSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjUyfT5cclxuLy8gICAgICAgICAgIHtzaG93UmVzcG9uc2UgPyBcIkhpZGVcIiA6IFwiU2hvd1wifSBSZXNwb25zZXNcclxuLy8gICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICAgIHtzaG93TG9hZGluZ0NvbnRlbnQgJiYgKFxyXG4vLyAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX0+Tm8gcmVzcG9uc2VzIHlldCE8L3A+XHJcbi8vICAgICAgICl9XHJcbi8vICAgICAgIHtzaG93UmVzcG9uc2UgJiYgPEFuc3dlckxpc3QgYW5zaXRlbXM9e3Jlc3BvbnNlfSAvPn1cclxuLy8gICAgIDwvc2VjdGlvbj5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBbnN3ZXI7XHJcblxyXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIGlmIChzaG93UmVzcG9uc2UpIHtcclxuLy8gICAgICAgc2V0TG9hZGluZ0NvbnRlbnQodHJ1ZSk7XHJcbi8vICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZCk7XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICAgICAgICBzZXRyZXNwb25zZShkYXRhLnJlc3BvbnNlcyk7XHJcbi8vICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2VzKSB7XHJcbi8vICAgICAgICAgICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbi8vICAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBhcyBuZWVkZWRcclxuLy8gICAgICAgICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgZmV0Y2hEYXRhKCk7XHJcbi8vICAgLy9zZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbi8vIH0sIFtzaG93UmVzcG9uc2UsIHBvc3RpZCwgc2V0cmVzcG9uc2UsIHNldExvYWRpbmdDb250ZW50XSk7XHJcblxyXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIC8vc2V0TG9hZGluZ0NvbnRlbnQodHJ1ZSk7XHJcbi8vICAgaWYgKHNob3dSZXNwb25zZSkge1xyXG4vLyAgICAgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvXCIgKyBwb3N0aWQpXHJcbi8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4vLyAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0cmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpKTtcclxuLy8gICB9XHJcbi8vICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyB9LCBbc2hvd1Jlc3BvbnNlLCBzZXRMb2FkaW5nQ29udGVudF0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9