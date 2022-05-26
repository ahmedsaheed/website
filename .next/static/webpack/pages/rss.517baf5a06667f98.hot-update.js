"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rss",{

/***/ "./pages/rss.js":
/*!**********************!*\
  !*** ./pages/rss.js ***!
  \**********************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ generateRssFeed; }\n/* harmony export */ });\n/* harmony import */ var _Users_ahmedsaheed_Desktop_Desktop_ahmed_saheed_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! feed */ \"./node_modules/feed/lib/feed.js\");\n/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @octokit/core */ \"./node_modules/@octokit/core/dist-web/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"?3109\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar token = process.env.github_api;\nvar id = \"a928b1fbcf1738da26ea5d7125e911cb\";\n// export default class rss extends Component {\n//   componentDidMount() {\n//     this.generateRssFeed();\n//   }\nfunction generateRssFeed() {\n    return _generateRssFeed.apply(this, arguments);\n};\nfunction _generateRssFeed() {\n    _generateRssFeed = _asyncToGenerator(_Users_ahmedsaheed_Desktop_Desktop_ahmed_saheed_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__.mark(function _callee() {\n        var date, feed, octokit, reply, posts;\n        return _Users_ahmedsaheed_Desktop_Desktop_ahmed_saheed_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__.wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    date = new Date();\n                    feed = new feed__WEBPACK_IMPORTED_MODULE_1__.Feed({\n                        title: \"Saheed's TIL\",\n                        description: \"Welcome to my TIL!\",\n                        id: \"https://www.saheed.codes/til/\",\n                        link: \"https://www.saheed.codes/til/\",\n                        language: \"en\",\n                        copyright: \"\\xa9 Ahmed Saheed \".concat(date.getFullYear()),\n                        updated: date,\n                        generator: \"Next.js using Feed for Node.js\",\n                        feedLinks: {\n                            rss2: \"https://www.saheed.codes/rss/feed.xml\",\n                            json: \"https://www.saheed.codes/rss/feed.json\",\n                            atom: \"https://www.saheed.codes/rss/atom.xml\"\n                        },\n                        author: \"Ahmed Saheed\"\n                    });\n                    octokit = new _octokit_core__WEBPACK_IMPORTED_MODULE_4__.Octokit({\n                        auth: token\n                    });\n                    _ctx.next = 5;\n                    return octokit.request(\"GET /gists/{gist_id}/comments\", {\n                        headers: {\n                            accept: \"application/vnd.github.v3+json\"\n                        },\n                        gist_id: id\n                    });\n                case 5:\n                    reply = _ctx.sent;\n                    posts = _toConsumableArray(reply.data);\n                    if (posts) {\n                        _ctx.next = 9;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\");\n                case 9:\n                    posts === null || posts === void 0 ? void 0 : posts.map(function(post) {\n                        var url = \"https://www.saheed.codes/me/\";\n                        feed.addItem({\n                            title: post.title,\n                            id: url,\n                            link: url,\n                            description: \"TIL on \" + new Date(post.created_at),\n                            content: post.body,\n                            author: \"Ahmed Saheed\",\n                            // contributor: [author],\n                            date: new Date(post.created_at)\n                        });\n                    });\n                    _ctx.next = 12;\n                    return fs__WEBPACK_IMPORTED_MODULE_3__.mkdirSync(\"./public/rss\", {\n                        recursive: true\n                    });\n                case 12:\n                    _ctx.next = 14;\n                    return fs__WEBPACK_IMPORTED_MODULE_3__.writeFileSync(\"./public/rss/feed.xml\", feed.rss2());\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    // fs.writeFileSync('./public/rss/atom.xml', feed.atom1());\n    // fs.writeFileSync('./public/rss/feed.json', feed.json1());\n    }));\n    return _generateRssFeed.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vcGFnZXMvcnNzLmpzPzZiN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmVlZCB9IGZyb20gXCJmZWVkXCI7XG5pbXBvcnQgeyBPY3Rva2l0IH0gZnJvbSBcIkBvY3Rva2l0L2NvcmVcIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuZ2l0aHViX2FwaTtcbmNvbnN0IGlkID0gXCJhOTI4YjFmYmNmMTczOGRhMjZlYTVkNzEyNWU5MTFjYlwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyByc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICB0aGlzLmdlbmVyYXRlUnNzRmVlZCgpO1xuLy8gICB9XG4gIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUnNzRmVlZCgpe1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGZlZWQgPSBuZXcgRmVlZCh7XG4gICAgICB0aXRsZTogYFNhaGVlZCdzIFRJTGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dlbGNvbWUgdG8gbXkgVElMIScsXG4gICAgICBpZDogXCJodHRwczovL3d3dy5zYWhlZWQuY29kZXMvdGlsL1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5zYWhlZWQuY29kZXMvdGlsL1wiLFxuICAgICAgbGFuZ3VhZ2U6ICdlbicsXG4gICAgICBjb3B5cmlnaHQ6IGDCqSBBaG1lZCBTYWhlZWQgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YCxcbiAgICAgIHVwZGF0ZWQ6IGRhdGUsXG4gICAgICBnZW5lcmF0b3I6ICdOZXh0LmpzIHVzaW5nIEZlZWQgZm9yIE5vZGUuanMnLFxuICAgICAgZmVlZExpbmtzOiB7XG4gICAgICAgIHJzczI6IFwiaHR0cHM6Ly93d3cuc2FoZWVkLmNvZGVzL3Jzcy9mZWVkLnhtbFwiLFxuICAgICAgICBqc29uOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy9yc3MvZmVlZC5qc29uXCIsXG4gICAgICAgIGF0b206IFwiaHR0cHM6Ly93d3cuc2FoZWVkLmNvZGVzL3Jzcy9hdG9tLnhtbFwiXG4gICAgICB9LFxuICAgICAgYXV0aG9yOiBcIkFobWVkIFNhaGVlZFwiXG4gICAgfSk7XG4gICAgIGNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7XG4gICAgICBhdXRoOiB0b2tlblxuICAgIH0pO1xuICAgIGNvbnN0IHJlcGx5ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KCdHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cycsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb24nLFxuICAgICAgICB9LFxuICAgICAgZ2lzdF9pZDogaWQsXG4gICAgICBcbiAgICB9KTtcbiAgICBjb25zdCBwb3N0cyA9IFsuLi5yZXBseS5kYXRhXVxuICAgIGlmKCFwb3N0cyl7cmV0dXJuO31cbiAgICBwb3N0cz8ubWFwKChwb3N0KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy9tZS9cIjtcbiAgICAgIGZlZWQuYWRkSXRlbSh7XG4gICAgICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxuICAgICAgICBpZDogdXJsLFxuICAgICAgICBsaW5rOiB1cmwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAgXCJUSUwgb24gXCIgK25ldyBEYXRlKHBvc3QuY3JlYXRlZF9hdCksXG4gICAgICAgIGNvbnRlbnQ6KHBvc3QuYm9keSksXG4gICAgICAgICBhdXRob3I6IFwiQWhtZWQgU2FoZWVkXCIsXG4gICAgICAgIC8vIGNvbnRyaWJ1dG9yOiBbYXV0aG9yXSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUocG9zdC5jcmVhdGVkX2F0KVxuICAgICAgfSk7XG4gICAgfSk7XG4gIFxuICAgIGF3YWl0IGZzLm1rZGlyU3luYygnLi9wdWJsaWMvcnNzJywgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgYXdhaXQgZnMud3JpdGVGaWxlU3luYygnLi9wdWJsaWMvcnNzL2ZlZWQueG1sJywgZmVlZC5yc3MyKCkpO1xuICAgIC8vIGZzLndyaXRlRmlsZVN5bmMoJy4vcHVibGljL3Jzcy9hdG9tLnhtbCcsIGZlZWQuYXRvbTEoKSk7XG4gICAgLy8gZnMud3JpdGVGaWxlU3luYygnLi9wdWJsaWMvcnNzL2ZlZWQuanNvbicsIGZlZWQuanNvbjEoKSk7XG4gICAgXG4gIH1cblxuXG4iXSwibmFtZXMiOlsiRmVlZCIsIk9jdG9raXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImZzIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiZ2l0aHViX2FwaSIsImlkIiwiZ2VuZXJhdGVSc3NGZWVkIiwiZGF0ZSIsImZlZWQiLCJvY3Rva2l0IiwicmVwbHkiLCJwb3N0cyIsIkRhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsImxhbmd1YWdlIiwiY29weXJpZ2h0IiwiZ2V0RnVsbFllYXIiLCJ1cGRhdGVkIiwiZ2VuZXJhdG9yIiwiZmVlZExpbmtzIiwicnNzMiIsImpzb24iLCJhdG9tIiwiYXV0aG9yIiwiYXV0aCIsInJlcXVlc3QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2lzdF9pZCIsImRhdGEiLCJtYXAiLCJwb3N0IiwidXJsIiwiYWRkSXRlbSIsImNyZWF0ZWRfYXQiLCJjb250ZW50IiwiYm9keSIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsIndyaXRlRmlsZVN5bmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/rss.js\n");

/***/ })

});