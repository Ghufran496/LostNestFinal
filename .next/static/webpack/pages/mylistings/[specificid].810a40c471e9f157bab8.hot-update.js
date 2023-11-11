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

  var postid = props.postid; //console.log(postid);

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
                setLoadingContent(true);

                if (!showResponse) {
                  _context.next = 17;
                  break;
                }

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

                if (data.responses) {
                  setLoadingContent(false);
                }

                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);
                console.error("Error fetching data:", _context.t0); // Handle errors as needed

                setLoadingContent(false);

              case 17:
                setLoadingContent(false);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 13]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData(); //setLoadingContent(false);
  }, [showResponse, postid, setresponse, setLoadingContent]); // useEffect(() => {
  //   //setLoadingContent(true);
  //   if (showResponse) {
  //     fetch("/api/answers/" + postid)
  //       .then((response) => response.json())
  //       .then((data) => setresponse(data.responses));
  //   }
  //   setLoadingContent(false);
  // }, [showResponse, setLoadingContent]);

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
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), showLoadingContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        marginBottom: "5rem"
      },
      children: "No responses yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_answer_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ansitems: response
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(Answer, "BbOgmyP67gNN0QdHBhtOnSCD/0w=");

_c = Answer;
/* harmony default export */ __webpack_exports__["default"] = (Answer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5qcyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsInBvc3RpZCIsInVzZVN0YXRlIiwic2hvd1Jlc3BvbnNlIiwic2V0U2hvd1Jlc3BvbnNlIiwic2hvd0xvYWRpbmdDb250ZW50Iiwic2V0TG9hZGluZ0NvbnRlbnQiLCJyZXNwb25zZSIsInNldHJlc3BvbnNlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJqc29uIiwiZGF0YSIsInJlc3BvbnNlcyIsImNvbnNvbGUiLCJlcnJvciIsInRvZ2dsZVJlc3BvbnNlSGFuZGxlciIsInByZXZTdGF0dXMiLCJjbGFzc2VzIiwiYnRuZGl2IiwiYnV0dG9uNTIiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxNQUNiQyxNQURhLEdBQ0ZELEtBREUsQ0FDYkMsTUFEYSxFQUVyQjs7QUFGcUIsa0JBR21CQyxzREFBUSxDQUFDLEtBQUQsQ0FIM0I7QUFBQSxNQUdkQyxZQUhjO0FBQUEsTUFHQUMsZUFIQTs7QUFBQSxtQkFJMkJGLHNEQUFRLENBQUMsS0FBRCxDQUpuQztBQUFBLE1BSWRHLGtCQUpjO0FBQUEsTUFJTUMsaUJBSk47O0FBQUEsbUJBS1dKLHNEQUFRLENBQUMsRUFBRCxDQUxuQjtBQUFBLE1BS2RLLFFBTGM7QUFBQSxNQUtKQyxXQUxJOztBQU9yQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUztBQUFBLHNSQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJKLGlDQUFpQixDQUFDLElBQUQsQ0FBakI7O0FBRGdCLHFCQUdaSCxZQUhZO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFLV1EsS0FBSyxDQUFDLGtCQUFrQlYsTUFBbkIsQ0FMaEI7O0FBQUE7QUFLTk0seUJBTE07QUFBQTtBQUFBLHVCQU1PQSxTQUFRLENBQUNLLElBQVQsRUFOUDs7QUFBQTtBQU1OQyxvQkFOTTtBQU9aTCwyQkFBVyxDQUFDSyxJQUFJLENBQUNDLFNBQU4sQ0FBWDs7QUFDQSxvQkFBSUQsSUFBSSxDQUFDQyxTQUFULEVBQW9CO0FBQ2xCUixtQ0FBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0Q7O0FBVlc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZWlMsdUJBQU8sQ0FBQ0MsS0FBUixDQUFjLHNCQUFkLGVBWlksQ0FhWjs7QUFDQVYsaUNBQWlCLENBQUMsS0FBRCxDQUFqQjs7QUFkWTtBQWtCaEJBLGlDQUFpQixDQUFDLEtBQUQsQ0FBakI7O0FBbEJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUSSxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBcUJBQSxhQUFTLEdBdEJLLENBdUJkO0FBQ0QsR0F4QlEsRUF3Qk4sQ0FBQ1AsWUFBRCxFQUFlRixNQUFmLEVBQXVCTyxXQUF2QixFQUFvQ0YsaUJBQXBDLENBeEJNLENBQVQsQ0FQcUIsQ0FpQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFTVyxxQkFBVCxHQUFpQztBQUMvQmIsbUJBQWUsQ0FBQyxVQUFDYyxVQUFEO0FBQUEsYUFBZ0IsQ0FBQ0EsVUFBakI7QUFBQSxLQUFELENBQWY7QUFDRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRUMseURBQU8sQ0FBQ0wsU0FBNUI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUsseURBQU8sQ0FBQ0MsTUFBeEI7QUFBQSw2QkFDRTtBQUFRLGVBQU8sRUFBRUgscUJBQWpCO0FBQXdDLGlCQUFTLEVBQUVFLHlEQUFPLENBQUNFLFFBQTNEO0FBQUEsbUJBQ0dsQixZQUFZLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQU1HRSxrQkFBa0IsaUJBQ2pCO0FBQUcsV0FBSyxFQUFFO0FBQUVpQixvQkFBWSxFQUFFO0FBQWhCLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixFQVNHbkIsWUFBWSxpQkFBSSxxRUFBQyxvREFBRDtBQUFZLGNBQVEsRUFBRUk7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQTVEUVIsTTs7S0FBQUEsTTtBQThETUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlsaXN0aW5ncy9bc3BlY2lmaWNpZF0uODEwYTQwYzQ3MWU5ZjE1N2JhYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBBbnN3ZXJMaXN0IGZyb20gXCIuL2Fuc3dlci1saXN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2Fuc3dlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBBbnN3ZXIocHJvcHMpIHtcclxuICBjb25zdCB7IHBvc3RpZCB9ID0gcHJvcHM7XHJcbiAgLy9jb25zb2xlLmxvZyhwb3N0aWQpO1xyXG4gIGNvbnN0IFtzaG93UmVzcG9uc2UsIHNldFNob3dSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dMb2FkaW5nQ29udGVudCwgc2V0TG9hZGluZ0NvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0cmVzcG9uc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nQ29udGVudCh0cnVlKTtcclxuXHJcbiAgICAgIGlmIChzaG93UmVzcG9uc2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZCk7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgc2V0cmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpO1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2VzKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgYXMgbmVlZGVkXHJcbiAgICAgICAgICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gICAgLy9zZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbiAgfSwgW3Nob3dSZXNwb25zZSwgcG9zdGlkLCBzZXRyZXNwb25zZSwgc2V0TG9hZGluZ0NvbnRlbnRdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIC8vc2V0TG9hZGluZ0NvbnRlbnQodHJ1ZSk7XHJcbiAgLy8gICBpZiAoc2hvd1Jlc3BvbnNlKSB7XHJcbiAgLy8gICAgIGZldGNoKFwiL2FwaS9hbnN3ZXJzL1wiICsgcG9zdGlkKVxyXG4gIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRyZXNwb25zZShkYXRhLnJlc3BvbnNlcykpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4gIC8vIH0sIFtzaG93UmVzcG9uc2UsIHNldExvYWRpbmdDb250ZW50XSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVJlc3BvbnNlSGFuZGxlcigpIHtcclxuICAgIHNldFNob3dSZXNwb25zZSgocHJldlN0YXR1cykgPT4gIXByZXZTdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNwb25zZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5kaXZ9PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUmVzcG9uc2VIYW5kbGVyfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uNTJ9PlxyXG4gICAgICAgICAge3Nob3dSZXNwb25zZSA/IFwiSGlkZVwiIDogXCJTaG93XCJ9IFJlc3BvbnNlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dMb2FkaW5nQ29udGVudCAmJiAoXHJcbiAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjVyZW1cIiB9fT5ObyByZXNwb25zZXMgeWV0ITwvcD5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dSZXNwb25zZSAmJiA8QW5zd2VyTGlzdCBhbnNpdGVtcz17cmVzcG9uc2V9IC8+fVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuc3dlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==