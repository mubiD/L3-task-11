"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/countryinfo",{

/***/ "./pages/countryinfo.js":
/*!******************************!*\
  !*** ./pages/countryinfo.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout.js */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mubashir/Desktop/Task 11/Task 11 Level 3/pages/countryinfo.js\",\n    _this = undefined;\n\n //Import Layout component.\n\n //Import withRouter: this allows us to access the values of the Route/endpoint within index.js\n\n //Import Link (This allows us to link our pages to one another)\n\n\nvar button = {\n  height: '65px',\n  width: 'auto',\n  margin: '10px'\n};\nvar content = {\n  margin: '10px'\n};\nvar Content = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(_c = function _c(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    style: content,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: [props.router.query.common, \" \", props.router.query.flag]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      children: [\"Continent: \", props.router.query.con]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      children: [\"Population: \", props.router.query.pop]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      children: [\"Capital: \", props.router.query.cap]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      children: [\"Currency: \", props.router.query.curr]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      children: [\"Languages: \", props.router.query.lang]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n});\n_c2 = Content;\n\nvar IndividualPage = function IndividualPage(props) {\n  return (\n    /*#__PURE__*/\n    //Display the Content within the Layout component.\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Layout_js__WEBPACK_IMPORTED_MODULE_0__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Content, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 3\n    }, _this)\n  );\n};\n\n_c3 = IndividualPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndividualPage); // Import IndividualPage component.\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Content$withRouter\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"IndividualPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb3VudHJ5aW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Q0FBNkM7O0NBQ0o7O0NBQ1o7OztBQUU3QixJQUFNRyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLE1BREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLE1BRk07QUFHYkMsRUFBQUEsTUFBTSxFQUFFO0FBSEssQ0FBZjtBQU1BLElBQU1DLE9BQU8sR0FBRztBQUNkRCxFQUFBQSxNQUFNLEVBQUU7QUFETSxDQUFoQjtBQUlBLElBQU1FLE9BQU8sR0FBR1AsdURBQVUsTUFBQyxZQUFBUSxLQUFLO0FBQUEsc0JBQzVCO0FBQUssU0FBSyxFQUFFRixPQUFaO0FBQUEsNEJBQ0k7QUFBQSxpQkFBS0UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLE1BQXhCLE9BQWlDSCxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkUsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLGdDQUFnQkosS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJHLEdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0k7QUFBQSxpQ0FBaUJMLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CSSxHQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUEsOEJBQWNOLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CSyxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQUtJO0FBQUEsK0JBQWVQLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFiLENBQW1CTSxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQU1JO0FBQUEsZ0NBQWdCUixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixDQUFtQk8sSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDRCO0FBQUEsQ0FBTixDQUExQjtNQUFNVjs7QUFXTixJQUFNVyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFWLEtBQUs7QUFBQTtBQUFBO0FBQU07QUFDaEMsa0VBQUMsMERBQUQ7QUFBQSw2QkFDRSw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDBCO0FBQUEsQ0FBNUI7O01BQU1VO0FBU04sK0RBQWVBLGNBQWYsR0FBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY291bnRyeWluZm8uanM/M2MxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJyAvL0ltcG9ydCBMYXlvdXQgY29tcG9uZW50LlxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJyAvL0ltcG9ydCB3aXRoUm91dGVyOiB0aGlzIGFsbG93cyB1cyB0byBhY2Nlc3MgdGhlIHZhbHVlcyBvZiB0aGUgUm91dGUvZW5kcG9pbnQgd2l0aGluIGluZGV4LmpzXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnIC8vSW1wb3J0IExpbmsgKFRoaXMgYWxsb3dzIHVzIHRvIGxpbmsgb3VyIHBhZ2VzIHRvIG9uZSBhbm90aGVyKVxuXG5jb25zdCBidXR0b24gPSB7XG4gIGhlaWdodDogJzY1cHgnLFxuICB3aWR0aDogJ2F1dG8nLFxuICBtYXJnaW46ICcxMHB4J1xufVxuXG5jb25zdCBjb250ZW50ID0ge1xuICBtYXJnaW46ICcxMHB4J1xufVxuXG5jb25zdCBDb250ZW50ID0gd2l0aFJvdXRlcihwcm9wcyA9PiAoXG4gICAgPGRpdiBzdHlsZT17Y29udGVudH0+XG4gICAgICAgIDxoMT57cHJvcHMucm91dGVyLnF1ZXJ5LmNvbW1vbn0ge3Byb3BzLnJvdXRlci5xdWVyeS5mbGFnfTwvaDE+XG4gICAgICAgIDxoMj5Db250aW5lbnQ6IHtwcm9wcy5yb3V0ZXIucXVlcnkuY29ufTwvaDI+XG4gICAgICAgIDxoMj5Qb3B1bGF0aW9uOiB7cHJvcHMucm91dGVyLnF1ZXJ5LnBvcH08L2gyPlxuICAgICAgICA8aDI+Q2FwaXRhbDoge3Byb3BzLnJvdXRlci5xdWVyeS5jYXB9PC9oMj5cbiAgICAgICAgPGgyPkN1cnJlbmN5OiB7cHJvcHMucm91dGVyLnF1ZXJ5LmN1cnJ9PC9oMj5cbiAgICAgICAgPGgyPkxhbmd1YWdlczoge3Byb3BzLnJvdXRlci5xdWVyeS5sYW5nfTwvaDI+XG4gICAgPC9kaXY+XG4pKVxuXG5jb25zdCBJbmRpdmlkdWFsUGFnZSA9IHByb3BzID0+ICggLy9EaXNwbGF5IHRoZSBDb250ZW50IHdpdGhpbiB0aGUgTGF5b3V0IGNvbXBvbmVudC5cbiAgPExheW91dD5cbiAgICA8Q29udGVudCAvPlxuICAgIHsvKiA8TGluayBocmVmPScvJz5cbiAgICAgICAgPGltZyBzdHlsZT17YnV0dG9ufSBjbGFzc05hbWU9XCJpbWdcIiBzcmM9XCIuLi9hcnJvdy5wbmdcIiBhbHQ9XCJCdXR0b25cIiAvPlxuICAgIDwvTGluaz4gKi99XG4gIDwvTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRpdmlkdWFsUGFnZSAvLyBJbXBvcnQgSW5kaXZpZHVhbFBhZ2UgY29tcG9uZW50LiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ3aXRoUm91dGVyIiwiTGluayIsImJ1dHRvbiIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiY29udGVudCIsIkNvbnRlbnQiLCJwcm9wcyIsInJvdXRlciIsInF1ZXJ5IiwiY29tbW9uIiwiZmxhZyIsImNvbiIsInBvcCIsImNhcCIsImN1cnIiLCJsYW5nIiwiSW5kaXZpZHVhbFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/countryinfo.js\n");

/***/ })

});