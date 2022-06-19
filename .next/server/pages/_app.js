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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useLocalStorage */ \"./hooks/useLocalStorage.js\");\n/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/wi */ \"react-icons/wi\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n\n\n\n\n\nfunction mode() {\n    const [theme, setTheme] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__.useLocalStorage)(\"theme\", \"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage)) {\n            document.getElementsByTagName(\"html\")[0].classList.add(\"dark\");\n        } else {\n            document.getElementsByTagName(\"html\")[0].classList.remove(\"dark\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (theme == \"dark\") {\n            document.getElementsByTagName(\"html\")[0].classList.add(\"dark\");\n            localStorage.theme = \"dark\";\n        } else {\n            document.getElementsByTagName(\"html\")[0].classList.remove(\"dark\");\n            localStorage.theme = \"light\";\n        }\n    }, [\n        theme\n    ]);\n    const toggleDarkMode = ()=>{\n        if (theme == \"dark\") {\n            setTheme(\"light\");\n        } else {\n            setTheme(\"dark\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"keydown\", detectKeydown, true);\n    }, []);\n    const detectKeydown = (e)=>{\n        if (e.key === \"x\" && (e.ctrlKey || e.metaKey) || e.key === \"l\" && (e.ctrlKey || e.metaKey)) {\n            toggleDarkMode();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: toggleDarkMode,\n        children: theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_3__.WiDaySunny, {\n            style: {\n                color: \"black\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n            lineNumber: 52,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineDarkMode, {\n            style: {\n                color: \"white\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n            lineNumber: 54,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mode);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDVTtBQUNmO0FBQ087QUFFbEQsU0FBU0ssSUFBSSxHQUFHO0lBQ1osTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHTCx1RUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFFM0RELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQ0VPLFlBQVksQ0FBQ0YsS0FBSyxLQUFLLE1BQU0sSUFDNUIsQ0FBQyxDQUFDLE9BQU8sSUFBSUUsWUFBWSxDQUFDLEVBQzNCO1lBQ0FDLFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUMvRCxNQUFNO1lBQ0xILFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNsRTtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU5aLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlLLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDbkJHLFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUM5REosWUFBWSxDQUFDRixLQUFLLEdBQUcsTUFBTTtTQUM1QixNQUFNO1lBQ0xHLFFBQVEsQ0FBQ0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqRUwsWUFBWSxDQUFDRixLQUFLLEdBQUcsT0FBTztTQUM3QjtLQUNGLEVBQUU7UUFBQ0EsS0FBSztLQUFDLENBQUM7SUFFWCxNQUFNUSxjQUFjLEdBQUcsSUFBTTtRQUMzQixJQUFJUixLQUFLLElBQUksTUFBTSxFQUFFO1lBQ25CQyxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQ2xCLE1BQU07WUFDTEEsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUNqQjtLQUNGO0lBRUROLGdEQUFTLENBQUMsSUFBTTtRQUNaUSxRQUFRLENBQUNNLGdCQUFnQixDQUFDLFNBQVMsRUFBRUMsYUFBYSxFQUFFLElBQUksQ0FBQztLQUM1RCxFQUFFLEVBQUUsQ0FBQztJQUNOLE1BQU1BLGFBQWEsR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDekIsSUFDSSxDQUFFLENBQUNDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQ0QsQ0FBQyxDQUFDRSxPQUFPLElBQUlGLENBQUMsQ0FBQ0csT0FBTyxDQUFDLElBQ3pDSCxDQUFDLENBQUNDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQ0QsQ0FBQyxDQUFDRSxPQUFPLElBQUlGLENBQUMsQ0FBQ0csT0FBTyxDQUFDLEVBQzVDO1lBQ0VOLGNBQWMsRUFBRTtTQUNuQjtLQUNKO0lBQ0QscUJBQ0ksOERBQUNPLFFBQU07UUFBQ0MsT0FBTyxFQUFFUixjQUFjO2tCQUMxQlIsS0FBSyxLQUFLLE9BQU8saUJBQ2QsOERBQUNILHNEQUFVO1lBQUNvQixLQUFLLEVBQUU7Z0JBQUVDLEtBQUssRUFBRSxPQUFPO2FBQUU7Ozs7O2dCQUFJLGlCQUV6Qyw4REFBQ3BCLDZEQUFpQjtZQUFDbUIsS0FBSyxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsT0FBTzthQUFFOzs7OztnQkFBSTs7Ozs7WUFFL0MsQ0FDWjtDQUNKO0FBRUQsaUVBQWVuQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWhtZWQtc2FoZWVkLy4vY29tcG9uZW50L3RoZW1lLmpzPzNhMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IHsgV2lEYXlTdW5ueSB9IGZyb20gXCJyZWFjdC1pY29ucy93aVwiXG5pbXBvcnQgeyBNZE91dGxpbmVEYXJrTW9kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5cbmZ1bmN0aW9uIG1vZGUoKSB7XG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ3RoZW1lJywgJ2xpZ2h0JylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gJ2RhcmsnIHx8XG4gICAgICAgICghKCd0aGVtZScgaW4gbG9jYWxTdG9yYWdlKSlcbiAgICAgICkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh0aGVtZSA9PSAnZGFyaycpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnRoZW1lID0gJ2RhcmsnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgICAgICBsb2NhbFN0b3JhZ2UudGhlbWUgPSAnbGlnaHQnXG4gICAgICB9XG4gICAgfSwgW3RoZW1lXSlcbiAgXG4gICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhlbWUgPT0gJ2RhcmsnKSB7XG4gICAgICAgIHNldFRoZW1lKCdsaWdodCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaGVtZSgnZGFyaycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZGV0ZWN0S2V5ZG93biwgdHJ1ZSlcbiAgICB9LCBbXSlcbiAgICBjb25zdCBkZXRlY3RLZXlkb3duID0gKGUpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGUua2V5ID09PSBcInhcIiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8XG4gICAgICAgICAgICAoZS5rZXkgPT09IFwibFwiICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0b2dnbGVEYXJrTW9kZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX0+XG4gICAgICAgICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcbiAgICAgICAgICAgICAgICA8V2lEYXlTdW5ueSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNZE91dGxpbmVEYXJrTW9kZSBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTG9jYWxTdG9yYWdlIiwiV2lEYXlTdW5ueSIsIk1kT3V0bGluZURhcmtNb2RlIiwibW9kZSIsInRoZW1lIiwic2V0VGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlRGFya01vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV0ZWN0S2V5ZG93biIsImUiLCJrZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/theme.js\n");

/***/ }),

/***/ "./hooks/useLocalStorage.js":
/*!**********************************!*\
  !*** ./hooks/useLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLocalStorage\": () => (/* binding */ useLocalStorage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n\nfunction useLocalStorage(key, initialValue) {\n    // State to store our value\n    // Pass initial state function to useState so logic is only executed once\n    const { 0: storedValue , 1: setStoredValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{\n        if (true) {\n            return initialValue;\n        }\n        try {\n            // Get from local storage by key\n            const item = window.localStorage.getItem(key);\n            // Parse stored json or if none return initialValue\n            return item ? JSON.parse(item) : initialValue;\n        } catch (error) {\n            // If error also return initialValue\n            console.log(error);\n            return initialValue;\n        }\n    });\n    // Return a wrapped version of useState's setter function that ...\n    // ... persists the new value to localStorage.\n    const setValue = (value)=>{\n        try {\n            // Allow value to be a function so we have same API as useState\n            const valueToStore = value instanceof Function ? value(storedValue) : value;\n            // Save state\n            setStoredValue(valueToStore);\n            // Save to local storage\n            if (false) {}\n        } catch (error) {\n            // A more advanced implementation would handle the error case\n            console.log(error);\n        }\n    };\n    return [\n        storedValue,\n        setValue\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFekIsU0FBU0MsZUFBZSxDQUFDQyxHQUFHLEVBQUVDLFlBQVksRUFBRTtJQUMvQywyQkFBMkI7SUFDM0IseUVBQXlFO0lBQ3pFLE1BQU0sRUFMVixHQUtXQyxXQUFXLEdBTHRCLEdBS3dCQyxjQUFjLE1BQUlMLCtDQUFRLENBQUMsSUFBTTtRQUNuRCxJQUFJLElBQTZCLEVBQUU7WUFDakMsT0FBT0csWUFBWSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSTtZQUNGLGdDQUFnQztZQUNoQyxNQUFNRyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUNQLEdBQUcsQ0FBQztZQUM3QyxtREFBbUQ7WUFDbkQsT0FBT0ksSUFBSSxHQUFHSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsSUFBSSxDQUFDLEdBQUdILFlBQVksQ0FBQztTQUMvQyxDQUFDLE9BQU9TLEtBQUssRUFBRTtZQUNkLG9DQUFvQztZQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU9ULFlBQVksQ0FBQztTQUNyQjtLQUNGLENBQUM7SUFDRixrRUFBa0U7SUFDbEUsOENBQThDO0lBQzlDLE1BQU1ZLFFBQVEsR0FBRyxDQUFDQyxLQUFLLEdBQUs7UUFDMUIsSUFBSTtZQUNGLCtEQUErRDtZQUMvRCxNQUFNQyxZQUFZLEdBQ2hCRCxLQUFLLFlBQVlFLFFBQVEsR0FBR0YsS0FBSyxDQUFDWixXQUFXLENBQUMsR0FBR1ksS0FBSztZQUN4RCxhQUFhO1lBQ2JYLGNBQWMsQ0FBQ1ksWUFBWSxDQUFDLENBQUM7WUFDN0Isd0JBQXdCO1lBQ3hCLElBQUksS0FBNkIsRUFBRSxFQUVsQztTQUNGLENBQUMsT0FBT0wsS0FBSyxFQUFFO1lBQ2QsNkRBQTZEO1lBQzdEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7U0FDcEI7S0FDRjtJQUNELE9BQU87UUFBQ1IsV0FBVztRQUFFVyxRQUFRO0tBQUMsQ0FBQztDQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FobWVkLXNhaGVlZC8uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZS5qcz8zM2RhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZShrZXksIGluaXRpYWxWYWx1ZSkge1xuICAgIC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuICAgIC8vIFBhc3MgaW5pdGlhbCBzdGF0ZSBmdW5jdGlvbiB0byB1c2VTdGF0ZSBzbyBsb2dpYyBpcyBvbmx5IGV4ZWN1dGVkIG9uY2VcbiAgICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxuICAgICAgICBjb25zdCBpdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIC8vIFBhcnNlIHN0b3JlZCBqc29uIG9yIGlmIG5vbmUgcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgICAgICByZXR1cm4gaXRlbSA/IEpTT04ucGFyc2UoaXRlbSkgOiBpbml0aWFsVmFsdWU7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJZiBlcnJvciBhbHNvIHJldHVybiBpbml0aWFsVmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFJldHVybiBhIHdyYXBwZWQgdmVyc2lvbiBvZiB1c2VTdGF0ZSdzIHNldHRlciBmdW5jdGlvbiB0aGF0IC4uLlxuICAgIC8vIC4uLiBwZXJzaXN0cyB0aGUgbmV3IHZhbHVlIHRvIGxvY2FsU3RvcmFnZS5cbiAgICBjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQWxsb3cgdmFsdWUgdG8gYmUgYSBmdW5jdGlvbiBzbyB3ZSBoYXZlIHNhbWUgQVBJIGFzIHVzZVN0YXRlXG4gICAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9XG4gICAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAvLyBTYXZlIHN0YXRlXG4gICAgICAgIHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSk7XG4gICAgICAgIC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBBIG1vcmUgYWR2YW5jZWQgaW1wbGVtZW50YXRpb24gd291bGQgaGFuZGxlIHRoZSBlcnJvciBjYXNlXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXTtcbiAgfSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUxvY2FsU3RvcmFnZSIsImtleSIsImluaXRpYWxWYWx1ZSIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJpdGVtIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFZhbHVlIiwidmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJGdW5jdGlvbiIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useLocalStorage.js\n");

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