"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Cube = (param)=>{\n    let { position  } = param;\n    _s();\n    const cube = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const a = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(position[0], position[1], position[2]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: cube,\n        position: a,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxBufferGeometry\", {\n                args: [\n                    1,\n                    1,\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                color: \"#0391BA\"\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Cube, \"bwK3/8VJ3BSujZm3SbGNTIlFC9Q=\");\n_c = Cube;\nconst Scene = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"gridHelper\", {}, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"axesHelper\", {}, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                intensity: 1.0,\n                position: [\n                    50,\n                    50,\n                    50\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cube, {\n                position: [\n                    1,\n                    0.5,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cube, {\n                position: [\n                    0,\n                    0.5,\n                    3\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Scene;\nconst Index = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" 3D ENV IN PROGRESS ... \"\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"100vh\",\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {\n                    camera: {\n                        near: 0.1,\n                        far: 1000,\n                        zoom: 1\n                    },\n                    onCreated: (param)=>{\n                        let { gl  } = param;\n                        gl.setClearColor(\"#252934\");\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Stats, {}, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {}, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                            fallback: null,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {}, void 0, false, {\n                                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Cube\");\n$RefreshReg$(_c1, \"Scene\");\n$RefreshReg$(_c2, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ2M7QUFDRTtBQUMxQjtBQUUvQixNQUFNTSxPQUFPLFNBQTBDO1FBQXpDLEVBQUVDLFNBQVEsRUFBMEI7O0lBQ2hELE1BQU1DLE9BQU9QLDZDQUFNQTtJQUVuQixNQUFNUSxJQUFJLElBQUlKLDBDQUFhLENBQUNFLFFBQVEsQ0FBQyxFQUFFLEVBQUVBLFFBQVEsQ0FBQyxFQUFFLEVBQUVBLFFBQVEsQ0FBQyxFQUFFO0lBQ2pFLHFCQUNFLDhEQUFDSTtRQUFLQyxLQUFLSjtRQUFNRCxVQUFVRTs7MEJBQ3pCLDhEQUFDSTtnQkFBa0JDLE1BQU07b0JBQUM7b0JBQUc7b0JBQUc7aUJBQUU7Ozs7OzswQkFDbEMsOERBQUNDO2dCQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7O0FBR2xDO0dBVk1WO0tBQUFBO0FBWU4sTUFBTVcsUUFBUSxJQUFNO0lBQ2xCLHFCQUNFOzswQkFDRSw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNDO2dCQUFpQkMsV0FBVztnQkFBS2QsVUFBVTtvQkFBQztvQkFBSTtvQkFBSTtpQkFBRzs7Ozs7OzBCQUV4RCw4REFBQ0Q7Z0JBQUtDLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUs7aUJBQUU7Ozs7OzswQkFDM0IsOERBQUNEO2dCQUFLQyxVQUFVO29CQUFDO29CQUFHO29CQUFLO2lCQUFFOzs7Ozs7OztBQUdqQztNQVpNVTtBQWFOLE1BQU1LLFFBQVEsSUFBTTtJQUNsQixxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUNDQyxPQUFPO29CQUNMQyxRQUFRO29CQUNSQyxPQUFPO2dCQUNUOzBCQUVBLDRFQUFDekIsc0RBQU1BO29CQUNMMEIsUUFBUTt3QkFDTkMsTUFBTTt3QkFDTkMsS0FBSzt3QkFDTEMsTUFBTTtvQkFDUjtvQkFDQUMsV0FBVyxTQUFZOzRCQUFYLEVBQUVDLEdBQUUsRUFBRTt3QkFDaEJBLEdBQUdDLGFBQWEsQ0FBQztvQkFDbkI7O3NDQUVBLDhEQUFDL0Isb0RBQUtBOzs7OztzQ0FDTiw4REFBQ0MsNERBQWFBOzs7OztzQ0FDZCw4REFBQ0osMkNBQVFBOzRCQUFDbUMsVUFBVSxJQUFJO3NDQUN0Qiw0RUFBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO01BOUJNSztBQWdDTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VzcGVuc2UsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FudmFzLCBNZXNoUHJvcHMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBTdGF0cywgT3JiaXRDb250cm9scyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0ICogYXMgdGhyZWUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IEN1YmUgPSAoeyBwb3NpdGlvbiB9OiB7IHBvc2l0aW9uOiBudW1iZXJbXSB9KSA9PiB7XG4gIGNvbnN0IGN1YmUgPSB1c2VSZWY8YW55PigpO1xuXG4gIGNvbnN0IGEgPSBuZXcgdGhyZWUuVmVjdG9yMyhwb3NpdGlvblswXSwgcG9zaXRpb25bMV0sIHBvc2l0aW9uWzJdKTtcbiAgcmV0dXJuIChcbiAgICA8bWVzaCByZWY9e2N1YmV9IHBvc2l0aW9uPXthfT5cbiAgICAgIDxib3hCdWZmZXJHZW9tZXRyeSBhcmdzPXtbMSwgMSwgMV19IC8+XG4gICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9XCIjMDM5MUJBXCIgLz5cbiAgICA8L21lc2g+XG4gICk7XG59O1xuXG5jb25zdCBTY2VuZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGdyaWRIZWxwZXIgLz5cbiAgICAgIDxheGVzSGVscGVyIC8+XG5cbiAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IGludGVuc2l0eT17MS4wfSBwb3NpdGlvbj17WzUwLCA1MCwgNTBdfSAvPlxuICAgICAgey8qIDxwb2ludExpZ2h0IGludGVuc2l0eT17MS4wfSBwb3NpdGlvbj17WzAsIDAsIDBdfSAvPiAqL31cbiAgICAgIDxDdWJlIHBvc2l0aW9uPXtbMSwgMC41LCAwXX0gLz5cbiAgICAgIDxDdWJlIHBvc2l0aW9uPXtbMCwgMC41LCAzXX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPiAzRCBFTlYgSU4gUFJPR1JFU1MgLi4uIDwvaDE+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2FudmFzXG4gICAgICAgICAgY2FtZXJhPXt7XG4gICAgICAgICAgICBuZWFyOiAwLjEsXG4gICAgICAgICAgICBmYXI6IDEwMDAsXG4gICAgICAgICAgICB6b29tOiAxLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DcmVhdGVkPXsoeyBnbCB9KSA9PiB7XG4gICAgICAgICAgICBnbC5zZXRDbGVhckNvbG9yKFwiIzI1MjkzNFwiKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0YXRzIC8+XG4gICAgICAgICAgPE9yYml0Q29udHJvbHMgLz5cbiAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxuICAgICAgICAgICAgPFNjZW5lIC8+XG4gICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9DYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlN1c3BlbnNlIiwidXNlUmVmIiwiQ2FudmFzIiwiU3RhdHMiLCJPcmJpdENvbnRyb2xzIiwidGhyZWUiLCJDdWJlIiwicG9zaXRpb24iLCJjdWJlIiwiYSIsIlZlY3RvcjMiLCJtZXNoIiwicmVmIiwiYm94QnVmZmVyR2VvbWV0cnkiLCJhcmdzIiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciIsIlNjZW5lIiwiZ3JpZEhlbHBlciIsImF4ZXNIZWxwZXIiLCJkaXJlY3Rpb25hbExpZ2h0IiwiaW50ZW5zaXR5IiwiSW5kZXgiLCJoMSIsImRpdiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjYW1lcmEiLCJuZWFyIiwiZmFyIiwiem9vbSIsIm9uQ3JlYXRlZCIsImdsIiwic2V0Q2xlYXJDb2xvciIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});