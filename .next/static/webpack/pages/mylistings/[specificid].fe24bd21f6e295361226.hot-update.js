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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: toggleResponseHandler,
        className: _answer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button52,
        children: [showResponse ? "Hide" : "Show", " Responses"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 48,
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
      lineNumber: 60,
      columnNumber: 9
    }, this), showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_answer_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ansitems: response
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5qcyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsInBvc3RpZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInNob3dSZXNwb25zZSIsInNldFNob3dSZXNwb25zZSIsInNob3dMb2FkaW5nQ29udGVudCIsInNldExvYWRpbmdDb250ZW50IiwicmVzcG9uc2UiLCJzZXRyZXNwb25zZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImZldGNoIiwianNvbiIsImRhdGEiLCJyZXNwb25zZXMiLCJlcnJvciIsImxlbmd0aCIsInRvZ2dsZVJlc3BvbnNlSGFuZGxlciIsInByZXZTdGF0dXMiLCJjbGFzc2VzIiwiYnRuZGl2IiwiYnV0dG9uNTIiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBRUE7O0FBQ0EsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxNQUNiQyxNQURhLEdBQ0ZELEtBREUsQ0FDYkMsTUFEYTtBQUVyQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7O0FBRnFCLGtCQUdtQkcsc0RBQVEsQ0FBQyxLQUFELENBSDNCO0FBQUEsTUFHZEMsWUFIYztBQUFBLE1BR0FDLGVBSEE7O0FBQUEsbUJBSTJCRixzREFBUSxDQUFDLEtBQUQsQ0FKbkM7QUFBQSxNQUlkRyxrQkFKYztBQUFBLE1BSU1DLGlCQUpOOztBQUFBLG1CQUtXSixzREFBUSxDQUFDLEVBQUQsQ0FMbkI7QUFBQSxNQUtkSyxRQUxjO0FBQUEsTUFLSkMsV0FMSTs7QUFPckJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSxzUkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1pQLFlBRFk7QUFBQTtBQUFBO0FBQUE7O0FBRWRHLGlDQUFpQixDQUFDLElBQUQsQ0FBakI7QUFGYztBQUFBO0FBQUEsdUJBSVdLLEtBQUssQ0FBQyxrQkFBa0JaLE1BQW5CLENBSmhCOztBQUFBO0FBSU5RLHlCQUpNO0FBQUE7QUFBQSx1QkFLT0EsU0FBUSxDQUFDSyxJQUFULEVBTFA7O0FBQUE7QUFLTkMsb0JBTE07QUFNWkwsMkJBQVcsQ0FBQ0ssSUFBSSxDQUFDQyxTQUFOLENBQVg7QUFOWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFaZCx1QkFBTyxDQUFDZSxLQUFSLENBQWMsc0JBQWQsZUFSWSxDQVNaOztBQVRZO0FBQUE7QUFXWlQsaUNBQWlCLENBQUMsS0FBRCxDQUFqQjtBQVhZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRJLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZixDQURjLENBaUJkOzs7QUFDQSxRQUFJUCxZQUFZLElBQUlJLFFBQVEsQ0FBQ1MsTUFBVCxLQUFvQixDQUF4QyxFQUEyQztBQUN6Q04sZUFBUztBQUNWO0FBQ0YsR0FyQlEsRUFxQk4sQ0FBQ1AsWUFBRCxDQXJCTSxDQUFUOztBQXVCQSxXQUFTYyxxQkFBVCxHQUFpQztBQUMvQmIsbUJBQWUsQ0FBQyxVQUFDYyxVQUFEO0FBQUEsYUFBZ0IsQ0FBQ0EsVUFBakI7QUFBQSxLQUFELENBQWY7QUFDRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRUMseURBQU8sQ0FBQ0wsU0FBNUI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUsseURBQU8sQ0FBQ0MsTUFBeEI7QUFBQSw2QkFDRTtBQUFRLGVBQU8sRUFBRUgscUJBQWpCO0FBQXdDLGlCQUFTLEVBQUVFLHlEQUFPLENBQUNFLFFBQTNEO0FBQUEsbUJBQ0dsQixZQUFZLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQU1HRSxrQkFBa0IsaUJBQ2pCO0FBQ0UsV0FBSyxFQUFFO0FBQ0xpQixvQkFBWSxFQUFFLE1BRFQ7QUFHTEMsZ0JBQVEsRUFBRSxRQUhMO0FBSUxDLHFCQUFhLEVBQUU7QUFKVixPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFrQkdqQixRQUFRLENBQUNTLE1BQVQsS0FBb0IsQ0FBcEIsSUFBeUIsQ0FBQ1gsa0JBQTFCLGlCQUNDO0FBQ0UsV0FBSyxFQUFFO0FBQ0xpQixvQkFBWSxFQUFFLE1BRFQ7QUFHTEMsZ0JBQVEsRUFBRSxRQUhMO0FBSUxDLHFCQUFhLEVBQUU7QUFKVixPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJKLEVBOEJHckIsWUFBWSxpQkFBSSxxRUFBQyxvREFBRDtBQUFZLGNBQVEsRUFBRUk7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlCbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBcEVRVixNOztLQUFBQSxNO0FBc0VNQSxxRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uZmUyNGJkMjFmNmUyOTUzNjEyMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBBbnN3ZXJMaXN0IGZyb20gXCIuL2Fuc3dlci1saXN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2Fuc3dlci5tb2R1bGUuY3NzXCI7XHJcbi8vaHR0cDovL2xvY2FsaG9zdDozMDAwL215bGlzdGluZ3MvNjU0YmMyOTIxZWZjNmMxMDcwNDYxZTEzXHJcbmZ1bmN0aW9uIEFuc3dlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgcG9zdGlkIH0gPSBwcm9wcztcclxuICBjb25zb2xlLmxvZyhwb3N0aWQpO1xyXG4gIGNvbnN0IFtzaG93UmVzcG9uc2UsIHNldFNob3dSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2FkaW5nQ29udGVudCwgc2V0TG9hZGluZ0NvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0cmVzcG9uc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc2hvd1Jlc3BvbnNlKSB7XHJcbiAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvXCIgKyBwb3N0aWQpO1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHNldHJlc3BvbnNlKGRhdGEucmVzcG9uc2VzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgYXMgbmVlZGVkXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gT25seSBmZXRjaCBkYXRhIGlmIHNob3dSZXNwb25zZSBpcyB0cnVlIGFuZCByZXNwb25zZXMgYXJlIG5vdCBhbHJlYWR5IGF2YWlsYWJsZVxyXG4gICAgaWYgKHNob3dSZXNwb25zZSAmJiByZXNwb25zZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW3Nob3dSZXNwb25zZV0pO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVSZXNwb25zZUhhbmRsZXIoKSB7XHJcbiAgICBzZXRTaG93UmVzcG9uc2UoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uc2VzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVJlc3BvbnNlSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjUyfT5cclxuICAgICAgICAgIHtzaG93UmVzcG9uc2UgPyBcIkhpZGVcIiA6IFwiU2hvd1wifSBSZXNwb25zZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93TG9hZGluZ0NvbnRlbnQgJiYgKFxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiLFxyXG5cclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBObyByZXNwb25zZXMgeWV0IVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgICAge3Jlc3BvbnNlLmxlbmd0aCA9PT0gMCAmJiAhc2hvd0xvYWRpbmdDb250ZW50ICYmIChcclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcclxuXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm9vbmUgaGFzIHJlc3BvbmRlZCB5ZXQhXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd1Jlc3BvbnNlICYmIDxBbnN3ZXJMaXN0IGFuc2l0ZW1zPXtyZXNwb25zZX0gLz59XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyO1xyXG5cclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICBpZiAoc2hvd1Jlc3BvbnNlKSB7XHJcbi8vICAgICAgIHNldExvYWRpbmdDb250ZW50KHRydWUpO1xyXG4vLyAgICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Fuc3dlcnMvXCIgKyBwb3N0aWQpO1xyXG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgICAgICAgc2V0cmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpO1xyXG4vLyAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlcykge1xyXG4vLyAgICAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4vLyAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgYXMgbmVlZGVkXHJcbi8vICAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGZldGNoRGF0YSgpO1xyXG4vLyAgIC8vc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4vLyB9LCBbc2hvd1Jlc3BvbnNlLCBwb3N0aWQsIHNldHJlc3BvbnNlLCBzZXRMb2FkaW5nQ29udGVudF0pO1xyXG5cclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAvL3NldExvYWRpbmdDb250ZW50KHRydWUpO1xyXG4vLyAgIGlmIChzaG93UmVzcG9uc2UpIHtcclxuLy8gICAgIGZldGNoKFwiL2FwaS9hbnN3ZXJzL1wiICsgcG9zdGlkKVxyXG4vLyAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHNldHJlc3BvbnNlKGRhdGEucmVzcG9uc2VzKSk7XHJcbi8vICAgfVxyXG4vLyAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuLy8gfSwgW3Nob3dSZXNwb25zZSwgc2V0TG9hZGluZ0NvbnRlbnRdKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==