webpackHotUpdate_N_E("pages/responses",{

/***/ "./components/MyResponse/ResponseItem.js":
/*!***********************************************!*\
  !*** ./components/MyResponse/ResponseItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponseItem.module.css */ "./components/MyResponse/ResponseItem.module.css");
/* harmony import */ var _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "G:\\FYP\\LostNestfyp\\lostnestprj\\components\\MyResponse\\ResponseItem.js",
    _this = undefined,
    _s = $RefreshSig$();




var ResponseItem = function ResponseItem(props) {
  _s();

  var _props$data = props.data,
      _id = _props$data._id,
      enteredContact = _props$data.enteredContact,
      ItemTitle = _props$data.ItemTitle,
      PostID = _props$data.PostID,
      PosterID = _props$data.PosterID,
      Question = _props$data.Question,
      ValidatorDateTime = _props$data.ValidatorDateTime,
      Answer = _props$data.Answer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isDivVisible = _useState[0],
      setIsDivVisible = _useState[1];

  var handleButtonClick = function handleButtonClick() {
    setIsDivVisible(!isDivVisible);
  };

  var deleteButtonClick = function deleteButtonClick() {
    fetch("/api/answers/sendResponse").then(function (response) {
      return response.json();
    }).then(function (data) {
      //console.log("data in client" + data);
      if (isMounted) {
        setIsData(data);

        if (data.message) {
          setIsErrorData(data.message);
          setIsError(true);
        }

        setIsLoading(false);
      }
    })["catch"](function (error) {
      if (isMounted) {
        setIsError(true);
        setIsErrorData("An error occurred while fetching data.");
        setIsLoading(false);
      }

      console.error("Fetch error:", error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    style: {
      fontSize: "1.5rem",
      border: "1px solid #311465",
      padding: "2rem 8rem 2rem 2rem",
      textTransform: "capitalize",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontWeight: "400",
      borderRadius: "2.5rem",
      position: "relative" // Necessary for positioning the hidden div

    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item ID: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: PostID
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 18
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Item Name: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: ItemTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Question: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: Question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Your Answer: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: Answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 22
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Time: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.spaner,
        children: ValidatorDateTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), isDivVisible || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
      onClick: handleButtonClick,
      children: "Show Response"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, _this), isDivVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: [" Response: ", enteredContact]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1rem"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
          onClick: handleButtonClick,
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _ResponseItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
          onClick: deleteButtonClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(ResponseItem, "oJwIBM4dWp6v6/unmgmtRAQIjvE=");

_c = ResponseItem;
/* harmony default export */ __webpack_exports__["default"] = (ResponseItem);

var _c;

$RefreshReg$(_c, "ResponseItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeVJlc3BvbnNlL1Jlc3BvbnNlSXRlbS5qcyJdLCJuYW1lcyI6WyJSZXNwb25zZUl0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaWQiLCJlbnRlcmVkQ29udGFjdCIsIkl0ZW1UaXRsZSIsIlBvc3RJRCIsIlBvc3RlcklEIiwiUXVlc3Rpb24iLCJWYWxpZGF0b3JEYXRlVGltZSIsIkFuc3dlciIsInVzZVN0YXRlIiwiaXNEaXZWaXNpYmxlIiwic2V0SXNEaXZWaXNpYmxlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkZWxldGVCdXR0b25DbGljayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImlzTW91bnRlZCIsInNldElzRGF0YSIsIm1lc3NhZ2UiLCJzZXRJc0Vycm9yRGF0YSIsInNldElzRXJyb3IiLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJmb250U2l6ZSIsImJvcmRlciIsInBhZGRpbmciLCJ0ZXh0VHJhbnNmb3JtIiwiYm94U2hhZG93IiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiY2xhc3NlcyIsInNwYW5lciIsImJ0biIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRHYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxvQkFVMUJBLEtBQUssQ0FBQ0MsSUFWb0I7QUFBQSxNQUU1QkMsR0FGNEIsZUFFNUJBLEdBRjRCO0FBQUEsTUFHNUJDLGNBSDRCLGVBRzVCQSxjQUg0QjtBQUFBLE1BSTVCQyxTQUo0QixlQUk1QkEsU0FKNEI7QUFBQSxNQUs1QkMsTUFMNEIsZUFLNUJBLE1BTDRCO0FBQUEs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JKLEVBaUNHRixZQUFZLGlCQUNYO0FBQ0UsV0FBSyxFQUFFO0FBQ0xrQixlQUFPLEVBQUUsTUFESjtBQUVMUyxlQUFPLEVBQUUsTUFGSjtBQUdMQyxxQkFBYSxFQUFFLFFBSFY7QUFJTEMsc0JBQWMsRUFBRSxRQUpYO0FBS0xDLGtCQUFVLEVBQUUsUUFMUDtBQU1MUixvQkFBWSxFQUFFO0FBTlQsT0FEVDtBQUFBLDhCQVVFO0FBQUEsa0NBQWdCOUIsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFXRTtBQUNFLGFBQUssRUFBRTtBQUNMbUMsaUJBQU8sRUFBRSxNQURKO0FBRUxJLDZCQUFtQixFQUFFLFNBRmhCO0FBR0xDLGlCQUFPLEVBQUU7QUFISixTQURUO0FBQUEsZ0NBT0U7QUFBUSxtQkFBUyxFQUFFUiwrREFBTyxDQUFDRSxHQUEzQjtBQUFnQyxpQkFBTyxFQUFFeEIsaUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBVUU7QUFBUSxtQkFBUyxFQUFFc0IsK0RBQU8sQ0FBQ0UsR0FBM0I7QUFBZ0MsaUJBQU8sRUFBRXZCLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRUQsQ0F6R0Q7O0dBQU1mLFk7O0tBQUFBLFk7QUEyR1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc3BvbnNlcy41MzMwMjZkNzQ4ZjUyNmE2NDhmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Jlc3BvbnNlSXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBSZXNwb25zZUl0ZW0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBfaWQsXHJcbiAgICBlbnRlcmVkQ29udGFjdCxcclxuICAgIEl0ZW1UaXRsZSxcclxuICAgIFBvc3RJRCxcclxuICAgIFBvc3RlcklELFxyXG4gICAgUXVlc3Rpb24sXHJcbiAgICBWYWxpZGF0b3JEYXRlVGltZSxcclxuICAgIEFuc3dlcixcclxuICB9ID0gcHJvcHMuZGF0YTtcclxuICBjb25zdCBbaXNEaXZWaXNpYmxlLCBzZXRJc0RpdlZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldElzRGl2VmlzaWJsZSghaXNEaXZWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiL2FwaS9hbnN3ZXJzL3NlbmRSZXNwb25zZVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YSBpbiBjbGllbnRcIiArIGRhdGEpO1xyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIHNldElzRGF0YShkYXRhKTtcclxuICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgc2V0SXNFcnJvckRhdGEoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTW91bnRlZCkge1xyXG4gICAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcclxuICAgICAgICAgIHNldElzRXJyb3JEYXRhKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgZGF0YS5cIik7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmV0Y2ggZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMxMTQ2NVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMnJlbSA4cmVtIDJyZW0gMnJlbVwiLFxyXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMi41cmVtXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgLy8gTmVjZXNzYXJ5IGZvciBwb3NpdGlvbmluZyB0aGUgaGlkZGVuIGRpdlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgSXRlbSBJRDogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e1Bvc3RJRH08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBJdGVtIE5hbWU6IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntJdGVtVGl0bGV9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgUXVlc3Rpb246IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFuZXJ9PntRdWVzdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBZb3VyIEFuc3dlcjogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnNwYW5lcn0+e0Fuc3dlcn08L3NwYW4+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICBUaW1lOiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuc3BhbmVyfT57VmFsaWRhdG9yRGF0ZVRpbWV9PC9zcGFuPlxyXG4gICAgICA8L2gzPlxyXG5cclxuICAgICAge2lzRGl2VmlzaWJsZSB8fCAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICBTaG93IFJlc3BvbnNlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0RpdlZpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoND4gUmVzcG9uc2U6IHtlbnRlcmVkQ29udGFjdH08L2g0PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxyXG4gICAgICAgICAgICAgIGdyaWRHYXA6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtkZWxldGVCdXR0b25DbGlja30+XHJcbiAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZUl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=