"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"@react-three/fiber\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ \"@react-three/drei\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"three\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_4__]);\nthree__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Cube = ({ position  })=>{\n    const cube = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const a = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(position[0], position[1], position[2]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: cube,\n        position: a,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxBufferGeometry\", {\n                args: [\n                    1,\n                    1,\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                color: \"#0391BA\"\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\nconst Scene = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"gridHelper\", {}, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"axesHelper\", {}, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                intensity: 1.0,\n                position: [\n                    500,\n                    0,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                intensity: 1.0,\n                position: [\n                    -500,\n                    0,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                intensity: 1.0,\n                position: [\n                    0,\n                    500,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                intensity: 1.0,\n                position: [\n                    0,\n                    -500,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                intensity: 1.0,\n                position: [\n                    0,\n                    0,\n                    500\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                intensity: 1.0,\n                position: [\n                    0,\n                    0,\n                    -500\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                intensity: 1.0,\n                position: [\n                    0,\n                    0,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cube, {\n                position: [\n                    1,\n                    0.5,\n                    0\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cube, {\n                position: [\n                    0,\n                    0.5,\n                    3\n                ]\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nconst Index = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" 3D ENV IN PROGRESS ... \"\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"100vh\",\n                    width: \"100vw\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {\n                    camera: {\n                        near: 0.1,\n                        far: 1000,\n                        zoom: 1\n                    },\n                    onCreated: ({ gl  })=>{\n                        gl.setClearColor(\"#252934\");\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.Stats, {}, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.OrbitControls, {}, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                            fallback: null,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Scene, {}, void 0, false, {\n                                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/husnain/frontend/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNjO0FBQ0U7QUFDMUI7QUFFL0IsTUFBTU0sT0FBTyxDQUFDLEVBQUVDLFNBQVEsRUFBMEIsR0FBSztJQUNyRCxNQUFNQyxPQUFPUCw2Q0FBTUE7SUFFbkIsTUFBTVEsSUFBSSxJQUFJSiwwQ0FBYSxDQUFDRSxRQUFRLENBQUMsRUFBRSxFQUFFQSxRQUFRLENBQUMsRUFBRSxFQUFFQSxRQUFRLENBQUMsRUFBRTtJQUNqRSxxQkFDRSw4REFBQ0k7UUFBS0MsS0FBS0o7UUFBTUQsVUFBVUU7OzBCQUN6Qiw4REFBQ0k7Z0JBQWtCQyxNQUFNO29CQUFDO29CQUFHO29CQUFHO2lCQUFFOzs7Ozs7MEJBQ2xDLDhEQUFDQztnQkFBcUJDLE9BQU07Ozs7Ozs7Ozs7OztBQUdsQztBQUVBLE1BQU1DLFFBQVEsSUFBTTtJQUNsQixxQkFDRTs7MEJBQ0UsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7Ozs7OzBCQUVELDhEQUFDQztnQkFBV0MsV0FBVztnQkFBS2QsVUFBVTtvQkFBQztvQkFBSztvQkFBRztpQkFBRTs7Ozs7OzBCQUNqRCw4REFBQ2E7Z0JBQVdDLFdBQVc7Z0JBQUtkLFVBQVU7b0JBQUMsQ0FBQztvQkFBSztvQkFBRztpQkFBRTs7Ozs7OzBCQUNsRCw4REFBQ2E7Z0JBQVdDLFdBQVc7Z0JBQUtkLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUs7aUJBQUU7Ozs7OzswQkFDakQsOERBQUNhO2dCQUFXQyxXQUFXO2dCQUFLZCxVQUFVO29CQUFDO29CQUFHLENBQUM7b0JBQUs7aUJBQUU7Ozs7OzswQkFDbEQsOERBQUNhO2dCQUFXQyxXQUFXO2dCQUFLZCxVQUFVO29CQUFDO29CQUFHO29CQUFHO2lCQUFJOzs7Ozs7MEJBQ2pELDhEQUFDYTtnQkFBV0MsV0FBVztnQkFBS2QsVUFBVTtvQkFBQztvQkFBRztvQkFBRyxDQUFDO2lCQUFJOzs7Ozs7MEJBRWxELDhEQUFDYTtnQkFBV0MsV0FBVztnQkFBS2QsVUFBVTtvQkFBQztvQkFBRztvQkFBRztpQkFBRTs7Ozs7OzBCQUMvQyw4REFBQ0Q7Z0JBQUtDLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUs7aUJBQUU7Ozs7OzswQkFDM0IsOERBQUNEO2dCQUFLQyxVQUFVO29CQUFDO29CQUFHO29CQUFLO2lCQUFFOzs7Ozs7OztBQUdqQztBQUNBLE1BQU1lLFFBQVEsSUFBTTtJQUNsQixxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUNDQyxPQUFPO29CQUNMQyxRQUFRO29CQUNSQyxPQUFPO2dCQUNUOzBCQUVBLDRFQUFDekIsc0RBQU1BO29CQUNMMEIsUUFBUTt3QkFDTkMsTUFBTTt3QkFDTkMsS0FBSzt3QkFDTEMsTUFBTTtvQkFDUjtvQkFDQUMsV0FBVyxDQUFDLEVBQUVDLEdBQUUsRUFBRSxHQUFLO3dCQUNyQkEsR0FBR0MsYUFBYSxDQUFDO29CQUNuQjs7c0NBRUEsOERBQUMvQixvREFBS0E7Ozs7O3NDQUNOLDhEQUFDQyw0REFBYUE7Ozs7O3NDQUNkLDhEQUFDSiwyQ0FBUUE7NEJBQUNtQyxVQUFVLElBQUk7c0NBQ3RCLDRFQUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7QUFFQSxpRUFBZUssS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BraXNzYW4vZnJvbnRlbmQvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VzcGVuc2UsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FudmFzLCBNZXNoUHJvcHMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBTdGF0cywgT3JiaXRDb250cm9scyB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0ICogYXMgdGhyZWUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IEN1YmUgPSAoeyBwb3NpdGlvbiB9OiB7IHBvc2l0aW9uOiBudW1iZXJbXSB9KSA9PiB7XG4gIGNvbnN0IGN1YmUgPSB1c2VSZWY8YW55PigpO1xuXG4gIGNvbnN0IGEgPSBuZXcgdGhyZWUuVmVjdG9yMyhwb3NpdGlvblswXSwgcG9zaXRpb25bMV0sIHBvc2l0aW9uWzJdKTtcbiAgcmV0dXJuIChcbiAgICA8bWVzaCByZWY9e2N1YmV9IHBvc2l0aW9uPXthfT5cbiAgICAgIDxib3hCdWZmZXJHZW9tZXRyeSBhcmdzPXtbMSwgMSwgMV19IC8+XG4gICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9XCIjMDM5MUJBXCIgLz5cbiAgICA8L21lc2g+XG4gICk7XG59O1xuXG5jb25zdCBTY2VuZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGdyaWRIZWxwZXIgLz5cbiAgICAgIDxheGVzSGVscGVyIC8+XG5cbiAgICAgIDxwb2ludExpZ2h0IGludGVuc2l0eT17MS4wfSBwb3NpdGlvbj17WzUwMCwgMCwgMF19IC8+XG4gICAgICA8cG9pbnRMaWdodCBpbnRlbnNpdHk9ezEuMH0gcG9zaXRpb249e1stNTAwLCAwLCAwXX0gLz5cbiAgICAgIDxwb2ludExpZ2h0IGludGVuc2l0eT17MS4wfSBwb3NpdGlvbj17WzAsIDUwMCwgMF19IC8+XG4gICAgICA8cG9pbnRMaWdodCBpbnRlbnNpdHk9ezEuMH0gcG9zaXRpb249e1swLCAtNTAwLCAwXX0gLz5cbiAgICAgIDxwb2ludExpZ2h0IGludGVuc2l0eT17MS4wfSBwb3NpdGlvbj17WzAsIDAsIDUwMF19IC8+XG4gICAgICA8cG9pbnRMaWdodCBpbnRlbnNpdHk9ezEuMH0gcG9zaXRpb249e1swLCAwLCAtNTAwXX0gLz5cblxuICAgICAgPHBvaW50TGlnaHQgaW50ZW5zaXR5PXsxLjB9IHBvc2l0aW9uPXtbMCwgMCwgMF19IC8+XG4gICAgICA8Q3ViZSBwb3NpdGlvbj17WzEsIDAuNSwgMF19IC8+XG4gICAgICA8Q3ViZSBwb3NpdGlvbj17WzAsIDAuNSwgM119IC8+XG4gICAgPC8+XG4gICk7XG59O1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT4gM0QgRU5WIElOIFBST0dSRVNTIC4uLiA8L2gxPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENhbnZhc1xuICAgICAgICAgIGNhbWVyYT17e1xuICAgICAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICAgICAgZmFyOiAxMDAwLFxuICAgICAgICAgICAgem9vbTogMSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ3JlYXRlZD17KHsgZ2wgfSkgPT4ge1xuICAgICAgICAgICAgZ2wuc2V0Q2xlYXJDb2xvcihcIiMyNTI5MzRcIik7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdGF0cyAvPlxuICAgICAgICAgIDxPcmJpdENvbnRyb2xzIC8+XG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cbiAgICAgICAgICAgIDxTY2VuZSAvPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvQ2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJTdXNwZW5zZSIsInVzZVJlZiIsIkNhbnZhcyIsIlN0YXRzIiwiT3JiaXRDb250cm9scyIsInRocmVlIiwiQ3ViZSIsInBvc2l0aW9uIiwiY3ViZSIsImEiLCJWZWN0b3IzIiwibWVzaCIsInJlZiIsImJveEJ1ZmZlckdlb21ldHJ5IiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiLCJTY2VuZSIsImdyaWRIZWxwZXIiLCJheGVzSGVscGVyIiwicG9pbnRMaWdodCIsImludGVuc2l0eSIsIkluZGV4IiwiaDEiLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiY2FtZXJhIiwibmVhciIsImZhciIsInpvb20iLCJvbkNyZWF0ZWQiLCJnbCIsInNldENsZWFyQ29sb3IiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@react-three/drei":
/*!************************************!*\
  !*** external "@react-three/drei" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ "@react-three/fiber":
/*!*************************************!*\
  !*** external "@react-three/fiber" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ ((module) => {

module.exports = import("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();