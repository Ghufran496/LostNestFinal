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
                setLoadingContent(false);
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);
                console.error("Error fetching data:", _context.t0); // Handle errors as needed

                setLoadingContent(false);

              case 17:
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

    fetchData();
    setLoadingContent(false);
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
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), showLoadingContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        marginBottom: "5rem"
      },
      children: "No responses yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this), showResponse && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_answer_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ansitems: response
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hbnN3ZXJzL2Fuc3dlci5qcyJdLCJuYW1lcyI6WyJBbnN3ZXIiLCJwcm9wcyIsInBvc3RpZCIsInVzZVN0YXRlIiwic2hvd1Jlc3BvbnNlIiwic2V0U2hvd1Jlc3BvbnNlIiwic2hvd0xvYWRpbmdDb250ZW50Iiwic2V0TG9hZGluZ0NvbnRlbnQiLCJyZXNwb25zZSIsInNldHJlc3BvbnNlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJqc29uIiwiZGF0YSIsInJlc3BvbnNlcyIsImNvbnNvbGUiLCJlcnJvciIsInRvZ2dsZVJlc3BvbnNlSGFuZGxlciIsInByZXZTdGF0dXMiLCJjbGFzc2VzIiwiYnRuZGl2IiwiYnV0dG9uNTIiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxNQUNiQyxNQURhLEdBQ0ZELEtBREUsQ0FDYkMsTUFEYSxFQUVyQjs7QUFGcUIsa0JBR21CQyxzREFBUSxDQUFDLEtBQUQsQ0FIM0I7QUFBQSxNQUdkQyxZQUhjO0FBQUEsTUFHQUMsZUFIQTs7QUFBQSxtQkFJMkJGLHNEQUFRLENBQUMsS0FBRCxDQUpuQztBQUFBLE1BSWRHLGtCQUpjO0FBQUEsTUFJTUMsaUJBSk47O0FBQUEsbUJBS1dKLHNEQUFRLENBQUMsRUFBRCxDQUxuQjtBQUFBLE1BS2RLLFFBTGM7QUFBQSxNQUtKQyxXQUxJOztBQU9yQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUztBQUFBLHNSQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJKLGlDQUFpQixDQUFDLElBQUQsQ0FBakI7O0FBRGdCLHFCQUdaSCxZQUhZO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFLV1EsS0FBSyxDQUFDLGtCQUFrQlYsTUFBbkIsQ0FMaEI7O0FBQUE7QUFLTk0seUJBTE07QUFBQTtBQUFBLHVCQU1PQSxTQUFRLENBQUNLLElBQVQsRUFOUDs7QUFBQTtBQU1OQyxvQkFOTTtBQU9aTCwyQkFBVyxDQUFDSyxJQUFJLENBQUNDLFNBQU4sQ0FBWDtBQUNBUixpQ0FBaUIsQ0FBQyxLQUFELENBQWpCO0FBUlk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVWlMsdUJBQU8sQ0FBQ0MsS0FBUixDQUFjLHNCQUFkLGVBVlksQ0FXWjs7QUFDQVYsaUNBQWlCLENBQUMsS0FBRCxDQUFqQjs7QUFaWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUSSxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBbUJBQSxhQUFTO0FBQ1RKLHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDRCxHQXRCUSxFQXNCTixDQUFDSCxZQUFELEVBQWVGLE1BQWYsRUFBdUJPLFdBQXZCLEVBQW9DRixpQkFBcEMsQ0F0Qk0sQ0FBVCxDQVBxQixDQStCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVNXLHFCQUFULEdBQWlDO0FBQy9CYixtQkFBZSxDQUFDLFVBQUNjLFVBQUQ7QUFBQSxhQUFnQixDQUFDQSxVQUFqQjtBQUFBLEtBQUQsQ0FBZjtBQUNEOztBQUVELHNCQUNFO0FBQVMsYUFBUyxFQUFFQyx5REFBTyxDQUFDTCxTQUE1QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFSyx5REFBTyxDQUFDQyxNQUF4QjtBQUFBLDZCQUNFO0FBQVEsZUFBTyxFQUFFSCxxQkFBakI7QUFBd0MsaUJBQVMsRUFBRUUseURBQU8sQ0FBQ0UsUUFBM0Q7QUFBQSxtQkFDR2xCLFlBQVksR0FBRyxNQUFILEdBQVksTUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBTUdFLGtCQUFrQixpQkFDakI7QUFBRyxXQUFLLEVBQUU7QUFBRWlCLG9CQUFZLEVBQUU7QUFBaEIsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLEVBU0duQixZQUFZLGlCQUFJLHFFQUFDLG9EQUFEO0FBQVksY0FBUSxFQUFFSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBMURRUixNOztLQUFBQSxNO0FBNERNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teWxpc3RpbmdzL1tzcGVjaWZpY2lkXS42OTAzYWU3YjM0OGQ3YjQ3MjRlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEFuc3dlckxpc3QgZnJvbSBcIi4vYW5zd2VyLWxpc3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYW5zd2VyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEFuc3dlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgcG9zdGlkIH0gPSBwcm9wcztcclxuICAvL2NvbnNvbGUubG9nKHBvc3RpZCk7XHJcbiAgY29uc3QgW3Nob3dSZXNwb25zZSwgc2V0U2hvd1Jlc3BvbnNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0xvYWRpbmdDb250ZW50LCBzZXRMb2FkaW5nQ29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRyZXNwb25zZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmdDb250ZW50KHRydWUpO1xyXG5cclxuICAgICAgaWYgKHNob3dSZXNwb25zZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hbnN3ZXJzL1wiICsgcG9zdGlkKTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBzZXRyZXNwb25zZShkYXRhLnJlc3BvbnNlcyk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGFzIG5lZWRlZFxyXG4gICAgICAgICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9zZXRMb2FkaW5nQ29udGVudChmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gICAgc2V0TG9hZGluZ0NvbnRlbnQoZmFsc2UpO1xyXG4gIH0sIFtzaG93UmVzcG9uc2UsIHBvc3RpZCwgc2V0cmVzcG9uc2UsIHNldExvYWRpbmdDb250ZW50XSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAvL3NldExvYWRpbmdDb250ZW50KHRydWUpO1xyXG4gIC8vICAgaWYgKHNob3dSZXNwb25zZSkge1xyXG4gIC8vICAgICBmZXRjaChcIi9hcGkvYW5zd2Vycy9cIiArIHBvc3RpZClcclxuICAvLyAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAvLyAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0cmVzcG9uc2UoZGF0YS5yZXNwb25zZXMpKTtcclxuICAvLyAgIH1cclxuICAvLyAgIHNldExvYWRpbmdDb250ZW50KGZhbHNlKTtcclxuICAvLyB9LCBbc2hvd1Jlc3BvbnNlLCBzZXRMb2FkaW5nQ29udGVudF0pO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVSZXNwb25zZUhhbmRsZXIoKSB7XHJcbiAgICBzZXRTaG93UmVzcG9uc2UoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVzcG9uc2VzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuZGl2fT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVJlc3BvbnNlSGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjUyfT5cclxuICAgICAgICAgIHtzaG93UmVzcG9uc2UgPyBcIkhpZGVcIiA6IFwiU2hvd1wifSBSZXNwb25zZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93TG9hZGluZ0NvbnRlbnQgJiYgKFxyXG4gICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cmVtXCIgfX0+Tm8gcmVzcG9uc2VzIHlldCE8L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93UmVzcG9uc2UgJiYgPEFuc3dlckxpc3QgYW5zaXRlbXM9e3Jlc3BvbnNlfSAvPn1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=