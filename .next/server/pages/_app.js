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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useLocalStorage */ \"./hooks/useLocalStorage.js\");\n/* harmony import */ var react_icons_wi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/wi */ \"react-icons/wi\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n\n\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction mode() {\n    const [theme, setTheme] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__.useLocalStorage)(\"theme\", \"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n            document.getElementsByTagName(\"html\")[0].classList.add(\"dark\");\n        } else {\n            document.getElementsByTagName(\"html\")[0].classList.remove(\"dark\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (theme == \"dark\") {\n            document.getElementsByTagName(\"html\")[0].classList.add(\"dark\");\n            localStorage.theme = \"dark\";\n        } else {\n            document.getElementsByTagName(\"html\")[0].classList.remove(\"dark\");\n            localStorage.theme = \"light\";\n        }\n    }, [\n        theme\n    ]);\n    const toggleDarkMode = ()=>{\n        if (theme == \"dark\") {\n            setTheme(\"light\");\n        } else {\n            setTheme(\"dark\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: toggleDarkMode,\n        children: theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdOutlineDarkMode, {\n            style: {\n                color: \"black\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n            lineNumber: 42,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_wi__WEBPACK_IMPORTED_MODULE_3__.WiDaySunny, {\n            style: {\n                color: \"white\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n            lineNumber: 44,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/component/theme.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mode);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBQ1U7QUFDZjtBQUNPO0FBRTNDLE1BQU1LLFlBQVksaUJBQUdMLG9EQUFhLENBQUMsSUFBSSxDQUFDO0FBQy9DLFNBQVNNLElBQUksR0FBRztJQUNaLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR04sdUVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzNERCxnREFBUyxDQUFDLElBQU07UUFDWixJQUNJUSxZQUFZLENBQUNGLEtBQUssS0FBSyxNQUFNLElBQzVCLENBQUMsQ0FBQyxPQUFPLElBQUlFLFlBQVksQ0FBQyxJQUN2QkMsTUFBTSxDQUFDQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsT0FBTyxFQUMvRDtZQUNFQyxRQUFRLENBQUNDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDakUsTUFBTTtZQUNISCxRQUFRLENBQUNDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDcEU7S0FDSixFQUFFLEVBQUUsQ0FBQztJQUVOaEIsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osSUFBSU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUNqQk0sUUFBUSxDQUFDQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzlEUCxZQUFZLENBQUNGLEtBQUssR0FBRyxNQUFNO1NBQzlCLE1BQU07WUFDSE0sUUFBUSxDQUFDQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2pFUixZQUFZLENBQUNGLEtBQUssR0FBRyxPQUFPO1NBQy9CO0tBQ0osRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQztJQUVYLE1BQU1XLGNBQWMsR0FBRyxJQUFNO1FBQ3pCLElBQUlYLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDakJDLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDcEIsTUFBTTtZQUNIQSxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ25CO0tBQ0o7SUFFRCxxQkFDSSw4REFBQ1csUUFBTTtRQUFDQyxPQUFPLEVBQUVGLGNBQWM7a0JBQzFCWCxLQUFLLEtBQUssT0FBTyxpQkFDZCw4REFBQ0gsNkRBQWlCO1lBQUNpQixLQUFLLEVBQUU7Z0JBQUVDLEtBQUssRUFBRSxPQUFPO2FBQUU7Ozs7O2dCQUFJLGlCQUVoRCw4REFBQ25CLHNEQUFVO1lBQUNrQixLQUFLLEVBQUU7Z0JBQUVDLEtBQUssRUFBRSxPQUFPO2FBQUU7Ozs7O2dCQUFJOzs7OztZQUV4QyxDQUNaO0NBQ0o7QUFFRCxpRUFBZWhCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haG1lZC1zYWhlZWQvLi9jb21wb25lbnQvdGhlbWUuanM/M2ExOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVwiXG5pbXBvcnQgeyBXaURheVN1bm55IH0gZnJvbSBcInJlYWN0LWljb25zL3dpXCJcbmltcG9ydCB7IE1kT3V0bGluZURhcmtNb2RlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcblxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbClcbmZ1bmN0aW9uIG1vZGUoKSB7XG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VMb2NhbFN0b3JhZ2UoXCJ0aGVtZVwiLCBcImxpZ2h0XCIpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRoZW1lID09PSBcImRhcmtcIiB8fFxuICAgICAgICAgICAgKCEoXCJ0aGVtZVwiIGluIGxvY2FsU3RvcmFnZSkgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGhlbWUgPT0gXCJkYXJrXCIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRoZW1lID0gXCJkYXJrXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRoZW1lID0gXCJsaWdodFwiXG4gICAgICAgIH1cbiAgICB9LCBbdGhlbWVdKVxuXG4gICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGVtZSA9PSBcImRhcmtcIikge1xuICAgICAgICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGhlbWUoXCJkYXJrXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfT5cbiAgICAgICAgICAgIHt0aGVtZSA9PT0gXCJsaWdodFwiID8gKFxuICAgICAgICAgICAgICAgIDxNZE91dGxpbmVEYXJrTW9kZSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxXaURheVN1bm55IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kZVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJXaURheVN1bm55IiwiTWRPdXRsaW5lRGFya01vZGUiLCJUaGVtZUNvbnRleHQiLCJtb2RlIiwidGhlbWUiLCJzZXRUaGVtZSIsImxvY2FsU3RvcmFnZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZURhcmtNb2RlIiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/theme.js\n");

/***/ }),

/***/ "./hooks/useLocalStorage.js":
/*!**********************************!*\
  !*** ./hooks/useLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLocalStorage\": () => (/* binding */ useLocalStorage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n\nfunction useLocalStorage(key, initialValue) {\n    // State to store our value\n    // Pass initial state function to useState so logic is only executed once\n    const { 0: storedValue , 1: setStoredValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{\n        try {\n            // Get from local storage by key\n            const item = window.localStorage.getItem(key);\n            return item ? item : initialValue;\n        } catch (error) {\n            // If error also return initialValue\n            console.log(error);\n            return initialValue;\n        }\n    });\n    // Return a wrapped version of useState's setter function that ...\n    // ... persists the new value to localStorage.\n    const setValue = (value)=>{\n        try {\n            // Allow value to be a function so we have same API as useState\n            const valueToStore = value instanceof Function ? value(storedValue) : value;\n            // Save state\n            setStoredValue(valueToStore);\n            // Save to local storage\n            window.localStorage.setItem(key, JSON.stringify(valueToStore));\n        } catch (error) {\n            // A more advanced implementation would handle the error case\n            console.log(error);\n        }\n    };\n    return [\n        storedValue,\n        setValue\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0M7QUFFekIsU0FBU0MsZUFBZSxDQUFDQyxHQUFHLEVBQUVDLFlBQVksRUFBRTtJQUMvQywyQkFBMkI7SUFDM0IseUVBQXlFO0lBQ3pFLE1BQU0sRUFMVixHQUtXQyxXQUFXLEdBTHRCLEdBS3dCQyxjQUFjLE1BQUlMLCtDQUFRLENBQUMsSUFBTTtRQUNqRCxJQUFJO1lBQ0EsZ0NBQWdDO1lBQ2hDLE1BQU1NLElBQUksR0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ1AsR0FBRyxDQUFDO1lBRTdDLE9BQU9JLElBQUksR0FBR0EsSUFBSSxHQUFHSCxZQUFZO1NBQ3BDLENBQUMsT0FBT08sS0FBSyxFQUFFO1lBQ1osb0NBQW9DO1lBQ3BDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO1lBQ2xCLE9BQU9QLFlBQVk7U0FDdEI7S0FDSixDQUFDO0lBRUYsa0VBQWtFO0lBQ2xFLDhDQUE4QztJQUM5QyxNQUFNVSxRQUFRLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO1FBQ3hCLElBQUk7WUFDQSwrREFBK0Q7WUFDL0QsTUFBTUMsWUFBWSxHQUFHRCxLQUFLLFlBQVlFLFFBQVEsR0FBR0YsS0FBSyxDQUFDVixXQUFXLENBQUMsR0FBR1UsS0FBSztZQUMzRSxhQUFhO1lBQ2JULGNBQWMsQ0FBQ1UsWUFBWSxDQUFDO1lBQzVCLHdCQUF3QjtZQUN4QlIsTUFBTSxDQUFDQyxZQUFZLENBQUNTLE9BQU8sQ0FBQ2YsR0FBRyxFQUFFZ0IsSUFBSSxDQUFDQyxTQUFTLENBQUNKLFlBQVksQ0FBQyxDQUFDO1NBQ2pFLENBQUMsT0FBT0wsS0FBSyxFQUFFO1lBQ1osNkRBQTZEO1lBQzdEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO1NBQ3JCO0tBQ0o7SUFFRCxPQUFPO1FBQUNOLFdBQVc7UUFBRVMsUUFBUTtLQUFDO0NBQ2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWhtZWQtc2FoZWVkLy4vaG9va3MvdXNlTG9jYWxTdG9yYWdlLmpzPzMzZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgLy8gU3RhdGUgdG8gc3RvcmUgb3VyIHZhbHVlXG4gICAgLy8gUGFzcyBpbml0aWFsIHN0YXRlIGZ1bmN0aW9uIHRvIHVzZVN0YXRlIHNvIGxvZ2ljIGlzIG9ubHkgZXhlY3V0ZWQgb25jZVxuICAgIGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gR2V0IGZyb20gbG9jYWwgc3RvcmFnZSBieSBrZXlcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuXG4gICAgICAgICAgICByZXR1cm4gaXRlbSA/IGl0ZW0gOiBpbml0aWFsVmFsdWVcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIElmIGVycm9yIGFsc28gcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFZhbHVlXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXG4gICAgLy8gLi4uIHBlcnNpc3RzIHRoZSBuZXcgdmFsdWUgdG8gbG9jYWxTdG9yYWdlLlxuICAgIGNvbnN0IHNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBBbGxvdyB2YWx1ZSB0byBiZSBhIGZ1bmN0aW9uIHNvIHdlIGhhdmUgc2FtZSBBUEkgYXMgdXNlU3RhdGVcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZVxuICAgICAgICAgICAgLy8gU2F2ZSBzdGF0ZVxuICAgICAgICAgICAgc2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKVxuICAgICAgICAgICAgLy8gU2F2ZSB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZVRvU3RvcmUpKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gQSBtb3JlIGFkdmFuY2VkIGltcGxlbWVudGF0aW9uIHdvdWxkIGhhbmRsZSB0aGUgZXJyb3IgY2FzZVxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUxvY2FsU3RvcmFnZSIsImtleSIsImluaXRpYWxWYWx1ZSIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJpdGVtIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFZhbHVlIiwidmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJGdW5jdGlvbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useLocalStorage.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_blog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/blog.css */ \"./styles/blog.css\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next-seo.config */ \"./next-seo.config.js\");\n/* harmony import */ var _component_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/theme */ \"./component/theme.js\");\n\n\n\n\n\n\n// This default export is required in a new `pages/_app.js` file.\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"third moveRight\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.DefaultSeo, {\n                ..._next_seo_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ahmedsaheed/Desktop/Desktop/saheed.codes/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNEO0FBQ1U7QUFDRDtBQUNFO0FBRXRDLGlFQUFpRTtBQUNsRCxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNwRCxxQkFDSTs7MEJBQ0ksOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxpQkFBaUI7MEJBQzNCLDRFQUFDTCx3REFBSzs7Ozt3QkFBRzs7Ozs7b0JBQ1I7MEJBQ0wsOERBQUNGLGdEQUFVO2dCQUFFLEdBQUdDLHdEQUFHOzs7OztvQkFBSTswQkFDdkIsOERBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7O29CQUM3QixDQUNOO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haG1lZC1zYWhlZWQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmNzc1wiXG5pbXBvcnQgXCIuLi9zdHlsZXMvYmxvZy5jc3NcIlxuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiXG5pbXBvcnQgU0VPIGZyb20gXCIuLi9uZXh0LXNlby5jb25maWdcIlxuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9jb21wb25lbnQvdGhlbWVcIlxuXG4vLyBUaGlzIGRlZmF1bHQgZXhwb3J0IGlzIHJlcXVpcmVkIGluIGEgbmV3IGBwYWdlcy9fYXBwLmpzYCBmaWxlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aGlyZCBtb3ZlUmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8VGhlbWUgLz5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8RGVmYXVsdFNlbyB7Li4uU0VPfSAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiRGVmYXVsdFNlbyIsIlNFTyIsIlRoZW1lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJoMiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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