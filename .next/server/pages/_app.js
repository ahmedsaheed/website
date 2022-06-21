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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/highlight.js/styles/atom-one-dark-reasonable.css":
/*!***********************************************************************!*\
  !*** ./node_modules/highlight.js/styles/atom-one-dark-reasonable.css ***!
  \***********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/blog.css":
/*!*************************!*\
  !*** ./styles/blog.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ "react-icons/wi":
/*!*********************************!*\
  !*** external "react-icons/wi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/wi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./component/theme.js":
/*!****************************!*\
  !*** ./component/theme.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useLocalStorage */ \"./hooks/useLocalStorage.js\");\n/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/wi */ \"react-icons/wi\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n\n\n\n\n\nfunction mode() {\n    const [theme, setTheme] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__.useLocalStorage)(\"theme\", \"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            document.getElementsByTagName(\"html\")[0].classList.remove(\"dark\");\n        } else {\n            document.getElementsByTagName(\"html\")[0].classList.add(\"dark\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (theme == \"dark\") {\n            document.getElementsByTagName(\"html\")[0].classList.add(\"light\");\n            localStorage.theme = \"light\";\n        } else {\n            document.getElementsByTagName(\"html\")[0].classList.remove(\"light\");\n            localStorage.theme = \"dark\";\n        }\n    }, [\n        theme\n    ]);\n    const toggleDarkMode = ()=>{\n        if (theme == \"dark\") {\n            setTheme(\"light\");\n        } else {\n            setTheme(\"dark\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"keydown\", detectKeydown, true);\n    }, []);\n    const detectKeydown = (e)=>{\n        if (e.key === \"x\" && (e.ctrlKey || e.metaKey) || e.key === \"l\" && (e.ctrlKey || e.metaKey)) {\n            toggleDarkMode();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: toggleDarkMode,\n        children: theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineDarkMode, {\n            style: {\n                color: \"white\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n            lineNumber: 53,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_3__.WiDaySunny, {\n            style: {\n                color: \"black\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n            lineNumber: 55,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mode);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDVTtBQUNmO0FBQ087QUFFbEQsU0FBU0ssSUFBSSxHQUFHO0lBQ1osTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHTCx1RUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFFM0RELGdEQUFTLENBQUMsSUFBTTtRQUNaLElBQ0lPLFlBQVksQ0FBQ0YsS0FBSyxLQUFLLE1BQU0sSUFDNUIsQ0FBQyxDQUFDLE9BQU8sSUFBSUUsWUFBWSxDQUFDLElBQ3ZCQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxPQUFPLEVBQy9EO1lBQ0VDLFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNwRSxNQUFNO1lBQ0hILFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUNqRTtLQUNKLEVBQUUsRUFBRSxDQUFDO0lBRU5mLGdEQUFTLENBQUMsSUFBTTtRQUNaLElBQUlLLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDakJNLFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMvRFIsWUFBWSxDQUFDRixLQUFLLEdBQUcsT0FBTztTQUMvQixNQUFNO1lBQ0hNLFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsRVAsWUFBWSxDQUFDRixLQUFLLEdBQUcsTUFBTTtTQUM5QjtLQUNKLEVBQUU7UUFBQ0EsS0FBSztLQUFDLENBQUM7SUFFWCxNQUFNVyxjQUFjLEdBQUcsSUFBTTtRQUN6QixJQUFJWCxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ2pCQyxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQ3BCLE1BQU07WUFDSEEsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNuQjtLQUNKO0lBRUROLGdEQUFTLENBQUMsSUFBTTtRQUNaVyxRQUFRLENBQUNNLGdCQUFnQixDQUFDLFNBQVMsRUFBRUMsYUFBYSxFQUFFLElBQUksQ0FBQztLQUM1RCxFQUFFLEVBQUUsQ0FBQztJQUNOLE1BQU1BLGFBQWEsR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDekIsSUFDSSxDQUFFLENBQUNDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQ0QsQ0FBQyxDQUFDRSxPQUFPLElBQUlGLENBQUMsQ0FBQ0csT0FBTyxDQUFDLElBQ3pDSCxDQUFDLENBQUNDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQ0QsQ0FBQyxDQUFDRSxPQUFPLElBQUlGLENBQUMsQ0FBQ0csT0FBTyxDQUFDLEVBQzVDO1lBQ0VOLGNBQWMsRUFBRTtTQUNuQjtLQUNKO0lBQ0QscUJBQ0ksOERBQUNPLFFBQU07UUFBQ0MsT0FBTyxFQUFFUixjQUFjO2tCQUMxQlgsS0FBSyxLQUFLLE9BQU8saUJBQ2QsOERBQUNGLDZEQUFpQjtZQUFDc0IsS0FBSyxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsT0FBTzthQUFFOzs7OztnQkFBSSxpQkFFaEQsOERBQUN4QixzREFBVTtZQUFDdUIsS0FBSyxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsT0FBTzthQUFFOzs7OztnQkFBSTs7Ozs7WUFFeEMsQ0FDWjtDQUNKO0FBRUQsaUVBQWV0QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWhtZWQtc2FoZWVkLy4vY29tcG9uZW50L3RoZW1lLmpzPzNhMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IHsgV2lEYXlTdW5ueSB9IGZyb20gXCJyZWFjdC1pY29ucy93aVwiXG5pbXBvcnQgeyBNZE91dGxpbmVEYXJrTW9kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5cbmZ1bmN0aW9uIG1vZGUoKSB7XG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VMb2NhbFN0b3JhZ2UoXCJ0aGVtZVwiLCBcImxpZ2h0XCIpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGhlbWUgPT09IFwiZGFya1wiIHx8XG4gICAgICAgICAgICAoIShcInRoZW1lXCIgaW4gbG9jYWxTdG9yYWdlKSAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGVtZSA9PSBcImRhcmtcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRoZW1lID0gXCJsaWdodFwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGhlbWUgPSBcImRhcmtcIlxuICAgICAgICB9XG4gICAgfSwgW3RoZW1lXSlcblxuICAgIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhlbWUgPT0gXCJkYXJrXCIpIHtcbiAgICAgICAgICAgIHNldFRoZW1lKFwibGlnaHRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRoZW1lKFwiZGFya1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZGV0ZWN0S2V5ZG93biwgdHJ1ZSlcbiAgICB9LCBbXSlcbiAgICBjb25zdCBkZXRlY3RLZXlkb3duID0gKGUpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGUua2V5ID09PSBcInhcIiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8XG4gICAgICAgICAgICAoZS5rZXkgPT09IFwibFwiICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0b2dnbGVEYXJrTW9kZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX0+XG4gICAgICAgICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcbiAgICAgICAgICAgICAgICA8TWRPdXRsaW5lRGFya01vZGUgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8V2lEYXlTdW5ueSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTG9jYWxTdG9yYWdlIiwiV2lEYXlTdW5ueSIsIk1kT3V0bGluZURhcmtNb2RlIiwibW9kZSIsInRoZW1lIiwic2V0VGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0b2dnbGVEYXJrTW9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRlY3RLZXlkb3duIiwiZSIsImtleSIsImN0cmxLZXkiLCJtZXRhS2V5IiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/theme.js\n");

/***/ }),

/***/ "./hooks/useLocalStorage.js":
/*!**********************************!*\
  !*** ./hooks/useLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLocalStorage\": () => (/* binding */ useLocalStorage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n\nfunction useLocalStorage(key, initialValue) {\n    const { 0: storedValue , 1: setStoredValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{\n        if (true) {\n            return initialValue;\n        }\n        try {\n            const item = window.localStorage.getItem(key);\n            return item ? JSON.parse(item) : initialValue;\n        } catch (error) {\n            console.log(error);\n            return initialValue;\n        }\n    });\n    const setValue = (value)=>{\n        try {\n            const valueToStore = value instanceof Function ? value(storedValue) : value;\n            setStoredValue(valueToStore);\n            if (false) {}\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return [\n        storedValue,\n        setValue\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFekIsU0FBU0MsZUFBZSxDQUFDQyxHQUFHLEVBQUVDLFlBQVksRUFBRTtJQUMvQyxNQUFNLEVBSFYsR0FHV0MsV0FBVyxHQUh0QixHQUd3QkMsY0FBYyxNQUFJTCwrQ0FBUSxDQUFDLElBQU07UUFDakQsSUFBSSxJQUE2QixFQUFFO1lBQy9CLE9BQU9HLFlBQVk7U0FDdEI7UUFDRCxJQUFJO1lBQ0EsTUFBTUcsSUFBSSxHQUFHQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDUCxHQUFHLENBQUM7WUFDN0MsT0FBT0ksSUFBSSxHQUFHSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsSUFBSSxDQUFDLEdBQUdILFlBQVk7U0FDaEQsQ0FBQyxPQUFPUyxLQUFLLEVBQUU7WUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztZQUNsQixPQUFPVCxZQUFZO1NBQ3RCO0tBQ0osQ0FBQztJQUNGLE1BQU1ZLFFBQVEsR0FBRyxDQUFDQyxLQUFLLEdBQUs7UUFDeEIsSUFBSTtZQUNBLE1BQU1DLFlBQVksR0FBR0QsS0FBSyxZQUFZRSxRQUFRLEdBQUdGLEtBQUssQ0FBQ1osV0FBVyxDQUFDLEdBQUdZLEtBQUs7WUFDM0VYLGNBQWMsQ0FBQ1ksWUFBWSxDQUFDO1lBQzVCLElBQUksS0FBNkIsRUFBRSxFQUVsQztTQUNKLENBQUMsT0FBT0wsS0FBSyxFQUFFO1lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7U0FDckI7S0FDSjtJQUNELE9BQU87UUFBQ1IsV0FBVztRQUFFVyxRQUFRO0tBQUM7Q0FDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haG1lZC1zYWhlZWQvLi9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanM/MzNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2Uoa2V5LCBpbml0aWFsVmFsdWUpIHtcbiAgICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsVmFsdWVcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgICAgICAgICByZXR1cm4gaXRlbSA/IEpTT04ucGFyc2UoaXRlbSkgOiBpbml0aWFsVmFsdWVcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVUb1N0b3JlID0gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlXG4gICAgICAgICAgICBzZXRTdG9yZWRWYWx1ZSh2YWx1ZVRvU3RvcmUpXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUxvY2FsU3RvcmFnZSIsImtleSIsImluaXRpYWxWYWx1ZSIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJpdGVtIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFZhbHVlIiwidmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJGdW5jdGlvbiIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useLocalStorage.js\n");

/***/ }),

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    titleTemplate: \"Ahmed Saheed\",\n    canonical: \"https://saheed.codes\",\n    openGraph: {\n        type: \"website\",\n        locale: \"en_IE\",\n        url: \"https://saheed.codes/\",\n        site_name: \"Ahmed Saheed\"\n    },\n    twitter: {\n        handle: \"@helloahmed_\",\n        cardType: \"summary_large_image\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LXNlby5jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlO0lBQ1hBLGFBQWEsRUFBRSxjQUFjO0lBQzdCQyxTQUFTLEVBQUUsc0JBQXNCO0lBQ2pDQyxTQUFTLEVBQUU7UUFDUEMsSUFBSSxFQUFFLFNBQVM7UUFDZkMsTUFBTSxFQUFFLE9BQU87UUFDZkMsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QkMsU0FBUyxFQUFFLGNBQWM7S0FDNUI7SUFDREMsT0FBTyxFQUFFO1FBQ0xDLE1BQU0sRUFBRSxjQUFjO1FBQ3RCQyxRQUFRLEVBQUUscUJBQXFCO0tBQ2xDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haG1lZC1zYWhlZWQvLi9uZXh0LXNlby5jb25maWcuanM/NGIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGVUZW1wbGF0ZTogXCJBaG1lZCBTYWhlZWRcIixcbiAgICBjYW5vbmljYWw6IFwiaHR0cHM6Ly9zYWhlZWQuY29kZXNcIixcbiAgICBvcGVuR3JhcGg6IHtcbiAgICAgICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gICAgICAgIGxvY2FsZTogXCJlbl9JRVwiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zYWhlZWQuY29kZXMvXCIsXG4gICAgICAgIHNpdGVfbmFtZTogXCJBaG1lZCBTYWhlZWRcIixcbiAgICB9LFxuICAgIHR3aXR0ZXI6IHtcbiAgICAgICAgaGFuZGxlOiBcIkBoZWxsb2FobWVkX1wiLFxuICAgICAgICBjYXJkVHlwZTogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG4gICAgfSxcbn1cbiJdLCJuYW1lcyI6WyJ0aXRsZVRlbXBsYXRlIiwiY2Fub25pY2FsIiwib3BlbkdyYXBoIiwidHlwZSIsImxvY2FsZSIsInVybCIsInNpdGVfbmFtZSIsInR3aXR0ZXIiLCJoYW5kbGUiLCJjYXJkVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./next-seo.config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_blog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/blog.css */ \"./styles/blog.css\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-seo.config */ \"./next-seo.config.js\");\n/* harmony import */ var _component_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/theme */ \"./component/theme.js\");\n/* harmony import */ var highlight_js_styles_atom_one_dark_reasonable_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark-reasonable.css */ \"./node_modules/highlight.js/styles/atom-one-dark-reasonable.css\");\n\n\n\n\n\n\n\n// This default export is required in a new `pages/_app.js` file.\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.DefaultSeo, {\n                ..._next_seo_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"zero\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDRDtBQUNVO0FBQ0Q7QUFDRTtBQUVtQjtBQUV6RCxpRUFBaUU7QUFDbEQsU0FBU0csS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQscUJBQ0k7OzBCQUNJLDhEQUFDTCxnREFBVTtnQkFBRSxHQUFHQyx3REFBRzs7Ozs7b0JBQUk7MEJBQ3ZCLDhEQUFDRyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzBCQUM1Qiw4REFBQ0MsR0FBQztnQkFBQ0MsU0FBUyxFQUFDLE1BQU07MEJBQ2YsNEVBQUNMLHdEQUFLOzs7O3dCQUFHOzs7OztvQkFDVDs7b0JBQ0wsQ0FDTjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWhtZWQtc2FoZWVkLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi4vc3R5bGVzL2Jsb2cuY3NzXCJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIlxuaW1wb3J0IFNFTyBmcm9tIFwiLi4vbmV4dC1zZW8uY29uZmlnXCJcbmltcG9ydCBUaGVtZSBmcm9tIFwiLi4vY29tcG9uZW50L3RoZW1lXCJcblxuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLXJlYXNvbmFibGUuY3NzXCJcblxuLy8gVGhpcyBkZWZhdWx0IGV4cG9ydCBpcyByZXF1aXJlZCBpbiBhIG5ldyBgcGFnZXMvX2FwcC5qc2AgZmlsZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8RGVmYXVsdFNlbyB7Li4uU0VPfSAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiemVyb1wiPlxuICAgICAgICAgICAgICAgIDxUaGVtZSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiRGVmYXVsdFNlbyIsIlNFTyIsIlRoZW1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();