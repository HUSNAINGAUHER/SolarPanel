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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Cube = (param)=>{\n    let { position  } = param;\n    _s();\n    const cube = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const a = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(position[0], position[1], position[2]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: cube,\n        position: a,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxBufferGeometry\", {\n                args: [\n                    1,\n                    1,\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                color: \"#0391BA\"\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Cube, \"bwK3/8VJ3BSujZm3SbGNTIlFC9Q=\");\n_c = Cube;\nconst Scene = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"gridHelper\", {}, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"axesHelper\", {}, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                intensity: 1.0,\n                position: [\n                    6,\n                    6,\n                    6\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cube, {\n                position: [\n                    1,\n                    0,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cube, {\n                position: [\n                    0,\n                    0,\n                    3\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Scene;\nconst Index = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" 3D ENV IN PROGRESS ... \"\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"100vh\",\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {\n                    camera: {\n                        near: 0.1,\n                        far: 1000,\n                        zoom: 1\n                    },\n                    onCreated: (param)=>{\n                        let { gl  } = param;\n                        gl.setClearColor(\"#252934\");\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Stats, {}, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {}, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                            fallback: null,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {}, void 0, false, {\n                                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Cube\");\n$RefreshReg$(_c1, \"Scene\");\n$RefreshReg$(_c2, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ2M7QUFDRTtBQUMxQjtBQUUvQixNQUFNTSxPQUFPLFNBQTBDO1FBQXpDLEVBQUVDLFNBQVEsRUFBMEI7O0lBQ2hELE1BQU1DLE9BQU9QLDZDQUFNQTtJQUVuQixNQUFNUSxJQUFJLElBQUlKLDBDQUFhLENBQUNFLFFBQVEsQ0FBQyxFQUFFLEVBQUVBLFFBQVEsQ0FBQyxFQUFFLEVBQUVBLFFBQVEsQ0FBQyxFQUFFO0lBQ2pFLHFCQUNFLDhEQUFDSTtRQUFLQyxLQUFLSjtRQUFNRCxVQUFVRTs7MEJBQ3pCLDhEQUFDSTtnQkFBa0JDLE1BQU07b0JBQUM7b0JBQUc7b0JBQUc7aUJBQUU7Ozs7OzswQkFDbEMsOERBQUNDO2dCQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7O0FBR2xDO0dBVk1WO0tBQUFBO0FBWU4sTUFBTVcsUUFBUSxJQUFNO0lBQ2xCLHFCQUNFOzswQkFDRSw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNDO2dCQUFXQyxXQUFXO2dCQUFLZCxVQUFVO29CQUFDO29CQUFHO29CQUFHO2lCQUFFOzs7Ozs7MEJBQy9DLDhEQUFDRDtnQkFBS0MsVUFBVTtvQkFBQztvQkFBRztvQkFBRztpQkFBRTs7Ozs7OzBCQUN6Qiw4REFBQ0Q7Z0JBQUtDLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUc7aUJBQUU7Ozs7Ozs7O0FBRy9CO01BVk1VO0FBV04sTUFBTUssUUFBUSxJQUFNO0lBQ2xCLHFCQUNFOzswQkFDRSw4REFBQ0M7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0M7Z0JBQ0NDLE9BQU87b0JBQ0xDLFFBQVE7b0JBQ1JDLE9BQU87Z0JBQ1Q7MEJBRUEsNEVBQUN6QixzREFBTUE7b0JBQ0wwQixRQUFRO3dCQUNOQyxNQUFNO3dCQUNOQyxLQUFLO3dCQUNMQyxNQUFNO29CQUNSO29CQUNBQyxXQUFXLFNBQVk7NEJBQVgsRUFBRUMsR0FBRSxFQUFFO3dCQUNoQkEsR0FBR0MsYUFBYSxDQUFDO29CQUNuQjs7c0NBRUEsOERBQUMvQixvREFBS0E7Ozs7O3NDQUNOLDhEQUFDQyw0REFBYUE7Ozs7O3NDQUNkLDhEQUFDSiwyQ0FBUUE7NEJBQUNtQyxVQUFVLElBQUk7c0NBQ3RCLDRFQUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7TUE5Qk1LO0FBZ0NOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdXNwZW5zZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYW52YXMsIE1lc2hQcm9wcyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IFN0YXRzLCBPcmJpdENvbnRyb2xzIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgKiBhcyB0aHJlZSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgQ3ViZSA9ICh7IHBvc2l0aW9uIH06IHsgcG9zaXRpb246IG51bWJlcltdIH0pID0+IHtcbiAgY29uc3QgY3ViZSA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgY29uc3QgYSA9IG5ldyB0aHJlZS5WZWN0b3IzKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSwgcG9zaXRpb25bMl0pO1xuICByZXR1cm4gKFxuICAgIDxtZXNoIHJlZj17Y3ViZX0gcG9zaXRpb249e2F9PlxuICAgICAgPGJveEJ1ZmZlckdlb21ldHJ5IGFyZ3M9e1sxLCAxLCAxXX0gLz5cbiAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBjb2xvcj1cIiMwMzkxQkFcIiAvPlxuICAgIDwvbWVzaD5cbiAgKTtcbn07XG5cbmNvbnN0IFNjZW5lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Z3JpZEhlbHBlciAvPlxuICAgICAgPGF4ZXNIZWxwZXIgLz5cbiAgICAgIDxwb2ludExpZ2h0IGludGVuc2l0eT17MS4wfSBwb3NpdGlvbj17WzYsIDYsIDZdfSAvPlxuICAgICAgPEN1YmUgcG9zaXRpb249e1sxLCAwLCAwXX0gLz5cbiAgICAgIDxDdWJlIHBvc2l0aW9uPXtbMCwgMCwgM119IC8+XG4gICAgPC8+XG4gICk7XG59O1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT4gM0QgRU5WIElOIFBST0dSRVNTIC4uLiA8L2gxPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENhbnZhc1xuICAgICAgICAgIGNhbWVyYT17e1xuICAgICAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICAgICAgZmFyOiAxMDAwLFxuICAgICAgICAgICAgem9vbTogMSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ3JlYXRlZD17KHsgZ2wgfSkgPT4ge1xuICAgICAgICAgICAgZ2wuc2V0Q2xlYXJDb2xvcihcIiMyNTI5MzRcIik7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGF0cyAvPlxuICAgICAgICAgIDxPcmJpdENvbnRyb2xzIC8+XG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cbiAgICAgICAgICAgIDxTY2VuZSAvPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvQ2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJTdXNwZW5zZSIsInVzZVJlZiIsIkNhbnZhcyIsIlN0YXRzIiwiT3JiaXRDb250cm9scyIsInRocmVlIiwiQ3ViZSIsInBvc2l0aW9uIiwiY3ViZSIsImEiLCJWZWN0b3IzIiwibWVzaCIsInJlZiIsImJveEJ1ZmZlckdlb21ldHJ5IiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiLCJTY2VuZSIsImdyaWRIZWxwZXIiLCJheGVzSGVscGVyIiwicG9pbnRMaWdodCIsImludGVuc2l0eSIsIkluZGV4IiwiaDEiLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiY2FtZXJhIiwibmVhciIsImZhciIsInpvb20iLCJvbkNyZWF0ZWQiLCJnbCIsInNldENsZWFyQ29sb3IiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});