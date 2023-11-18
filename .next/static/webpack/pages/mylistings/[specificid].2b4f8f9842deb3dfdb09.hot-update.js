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
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button.js");




var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\answers\\answer.js",
    _s = $RefreshSig$();




 //http://localhost:3000/mylistings/654bc2921efc6c1070461e13

function Answer(props) {
  _s();

  var postid = props.postid;
  console.log(postid);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showResponse = _useState[0],
      setShowResponse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showLoadingContent = _useState2[0],
      setLoadingContent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      response = _useState3[0],
      setresponse = _useState3[1];

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
                setresponse(data.responses);
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
  }, [showResponse]);

  function toggleResponseHandler() {
    setShowResponse(function (prevStatus) {
      return !prevStatus;
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _answer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.responses,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _answer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.btndiv,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: toggleResponseHandler,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          content: showResponse ? "Hide" : "Show"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), showLoadingContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        marginBottom: "1rem",
        fontSize: "1.5rem",
        textTransform: "capitalize"
      },
      children: "No responses yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this), response.length === 0 && !showLoadingContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        marginBottom: "1rem",
        fontSize: "1.5rem",
        textTransform: "capitalize"
      },
      children: "Noone has responded yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_answer_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ansitems: response
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_s(Answer, "BbOgmyP67gNN0QdHBhtOnSCD/0w=");

_c = Answer;
/* harmony default export */ __webpack_exports__["default"] = (Answer); // useEffect(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5qcyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsInBvc3RpZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInNob3dSZXNwb25zZSIsInNldFNob3dSZXNwb25zZSIsInNob3dMb2FkaW5nQ29udGVudCIsInNldExvYWRpbmdDb250ZW50IiwicmVzcG9uc2UiLCJzZXRyZXNwb25zZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImZldGNoIiwianNvbiIsImRhdGEiLCJyZXNwb25zZXMiLCJlcnJvciIsImxlbmd0aCIsInRvZ2dsZVJlc3BvbnNlSGFuZGxlciIsInByZXZTdGF0dXMiLCJjbGFzc2VzIiwiYnRuZGl2IiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtDQUVBOztBQUNBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQUEsTUFDYkMsTUFEYSxHQUNGRCxLQURFLENBQ2JDLE1BRGE7QUFFckJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQUZxQixrQkFHbUJHLHNEQUFRLENBQUMsS0FBRCxDQUgzQjtBQUFBLE1BR2RDLFlBSGM7QUFBQSxNQUdBQyxlQUhBOztBQUFBLG1CQUkyQkYsc0RBQVEsQ0FBQyxLQUFELENBSm5DO0FBQUEsTUFJZEcsa0JBSmM7QUFBQSxNQUlNQyxpQkFKTjs7QUFBQSxtQkFLV0osc0RBQVEsQ0FBQyxFQUFELENBTG5CO0FBQUEsTUFLZEssUUFMYztBQUFBLE1BS0pDLFdBTEk7O0FBT3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTO0FBQUEsc1JBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNaUCxZQURZO0FBQUE7QUFBQTtBQUFBOztBQUVkRyxpQ0FBaUIsQ0FBQyxJQUFELENBQWpCO0FBRmM7QUFBQTtBQUFBLHVCQUlXSyxLQUFLLENBQUMsa0JBQWtCWixNQUFuQixDQUpoQjs7QUFBQTtBQUlOUSx5QkFKTTtBQUFBO0FBQUEsdUJBS09BLFNBQVEsQ0FBQ0ssSUFBVCxFQUxQOztBQUFBO0FBS05DLG9CQUxNO0FBTVpMLDJCQUFXLENBQUNLLElBQUksQ0FBQ0MsU0FBTixDQUFYO0FBTlk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRWmQsdUJBQU8sQ0FBQ2UsS0FBUixDQUFjLHNCQUFkLGVBUlksQ0FTWjs7QUFUWTtBQUFBO0FBV1pULGlDQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFYWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUSSxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWYsQ0FEYyxDQWlCZDs7O0FBQ0EsUUFBSVAsWUFBWSxJQUFJSSxRQUFRLENBQUNTLE1BQVQsS0FBb0IsQ0FBeEMsRUFBMkM7QUFDekNOLGVBQVM7QUFDVjtBQUNGLEdBckJRLEVBcUJOLENBQUNQLFlBQUQsQ0FyQk0sQ0FBVDs7QUF1QkEsV0FBU2MscUJBQVQsR0FBaUM7QUFDL0JiLG1CQUFlLENBQUMsVUFBQ2MsVUFBRDtBQUFBLGFBQWdCLENBQUNBLFVBQWpCO0FBQUEsS0FBRCxDQUFmO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLHlEQUFPLENBQUNMLFNBQTVCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVLLHlEQUFPLENBQUNDLE1BQXhCO0FBQUEsNkJBQ0U7QUFBRyxlQUFPLEVBQUVILHFCQUFaO0FBQUEsK0JBQ0UscUVBQUMsa0RBQUQ7QUFBUSxpQkFBTyxFQUFFZCxZQUFZLEdBQUcsTUFBSCxHQUFZO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBTUdFLGtCQUFrQixpQkFDakI7QUFDRSxXQUFLLEVBQUU7QUFDTGdCLG9CQUFZLEVBQUUsTUFEVDtBQUdMQyxnQkFBUSxFQUFFLFFBSEw7QUFJTEMscUJBQWEsRUFBRTtBQUpWLE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixFQWtCR2hCLFFBQVEsQ0FBQ1MsTUFBVCxLQUFvQixDQUFwQixJQUF5QixDQUFDWCxrQkFBMUIsaUJBQ0M7QUFDRSxXQUFLLEVBQUU7QUFDTGdCLG9CQUFZLEVBQUUsTUFEVDtBQUdMQyxnQkFBUSxFQUFFLFFBSEw7QUFJTEMscUJBQWEsRUFBRTtBQUpWLE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkosRUE4QkdwQixZQUFZLGlCQUFJLHFFQUFDLG9EQUFEO0FBQVksY0FBUSxFQUFFSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0FwRVFWLE07O0tBQUFBLE07QUFzRU1BLHFFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teWxpc3RpbmdzL1tzcGVjaWZpY2lkXS4yYjRmOGY5ODQyZGViM2RmZGIwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEFuc3dlckxpc3QgZnJvbSBcIi4vYW5zd2VyLWxpc3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYW5zd2VyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uXCI7XHJcbi8vaHR0cDovL2xvY2FsaG9zdDozMDAwL215bGlzdGluZ3MvNjU0YmMyOTIxZWZjNmMxMDcwNDYxZTEzXHJcbmZ1bmN0aW9uIEFuc3dlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgcG9zdGlkIH0gPSBwcm9wcztcclxuICBjb25zb2xlLmxvZyhwb3N0aWQpO1xyXG4gIGNvbnN0IFtzaG93UmVzcG9uc2UsIHNldFNob3dSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2FkaW5nQ29udGVudCwgc2V0TG9hZGluZ0NvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0cmVzcG9uc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc2hvd1Jlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvXCIgKyBwb3N0aWQpO1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHNldHJlc3BvbnNlKGRhdGEucmVzcG9uc2VzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgYXMgbmVlZGVkXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gT25seSBmZXRjaCBkYXRhIGlmIHNob3dSZXNwb25zZSBpcyB0cnVlIGFuZCByZXNwb25zZXMgYXJlIG5vdCBhbHJlYWR5IGF2YWlsYWJsZVxyXG4gICAgaWYgKHNob3dSZXNwb25zZSAmJiByZXNwb25zZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW3Nob3dSZXNwb25zZV0pO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVSZXNwb25zZUhhbmRsZXIoKSB7XHJcbiAgICBzZXRTaG93UmVzcG9uc2UoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uc2VzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YSBvbkNsaWNrPXt0b2dnbGVSZXNwb25zZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb250ZW50PXtzaG93UmVzcG9uc2UgPyBcIkhpZGVcIiA6IFwiU2hvd1wifT48L0J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0xvYWRpbmdDb250ZW50ICYmIChcclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gcmVzcG9uc2VzIHlldCFcclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIHtyZXNwb25zZS5sZW5ndGggPT09IDAgJiYgIXNob3dMb2FkaW5nQ29udGVudCAmJiAoXHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcblxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vb25lIGhhcyByZXNwb25kZWQgeWV0IVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dSZXNwb25zZSAmJiA8QW5zd2VyTGlzdCBhbnNpdGVtcz17cmVzcG9uc2V9IC8+fVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuc3dlcjtcclxuXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgaWYgKHNob3dSZXNwb25zZSkge1xyXG4vLyAgICAgICBzZXRMb2FkaW5nQ29udGVudCh0cnVlKTtcclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL1wiICsgcG9zdGlkKTtcclxuLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgICAgIHNldHJlc3BvbnNlKGRhdGEucmVzcG9uc2VzKTtcclxuLy8gICAgICAgICBpZiAoZGF0YS5yZXNwb25zZXMpIHtcclxuLy8gICAgICAgICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuLy8gICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGFzIG5lZWRlZFxyXG4vLyAgICAgICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBmZXRjaERhdGEoKTtcclxuLy8gICAvL3NldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gfSwgW3Nob3dSZXNwb25zZSwgcG9zdGlkLCBzZXRyZXNwb25zZSwgc2V0TG9hZGluZ0NvbnRlbnRdKTtcclxuXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgLy9zZXRMb2FkaW5nQ29udGVudCh0cnVlKTtcclxuLy8gICBpZiAoc2hvd1Jlc3BvbnNlKSB7XHJcbi8vICAgICBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZClcclxuLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi8vICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRyZXNwb25zZShkYXRhLnJlc3BvbnNlcykpO1xyXG4vLyAgIH1cclxuLy8gICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbi8vIH0sIFtzaG93UmVzcG9uc2UsIHNldExvYWRpbmdDb250ZW50XSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=