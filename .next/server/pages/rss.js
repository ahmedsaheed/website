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
exports.id = "pages/rss";
exports.ids = ["pages/rss"];
exports.modules = {

/***/ "@octokit/core":
/*!********************************!*\
  !*** external "@octokit/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@octokit/core");

/***/ }),

/***/ "feed":
/*!***********************!*\
  !*** external "feed" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("feed");

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

/***/ "./pages/rss.js":
/*!**********************!*\
  !*** ./pages/rss.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! feed */ \"feed\");\n/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/core */ \"@octokit/core\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n\n\n\n\n// var fs = require('browserify-fs');\nconst token = process.env.github_api;\nconst id = \"a928b1fbcf1738da26ea5d7125e911cb\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_3__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            posts: []\n        };\n    }\n    async componentDidMount() {\n        const octokit = new _octokit_core__WEBPACK_IMPORTED_MODULE_2__.Octokit({\n            auth: token\n        });\n        const response = await octokit.request(\"GET /gists/{gist_id}/comments\", {\n            headers: {\n                accept: \"application/vnd.github.v3+json\"\n            },\n            gist_id: id\n        });\n        const date = new Date();\n        const feed = new feed__WEBPACK_IMPORTED_MODULE_1__.Feed({\n            title: \"Saheed's TIL\",\n            description: \"Kinda my daily Encyclopedia\",\n            id: \"https://saheed.codes/TIL\",\n            link: \"https://saheed.codes/TIL\",\n            language: \"en\",\n            copyright: `© Ahmed Saheed ${date.getFullYear()}`,\n            updated: date,\n            generator: \"Feed\",\n            feedLinks: {\n                json: \"https://www.saheed.codes/til/\",\n                atom: \"https://www.saheed.codes/til/\"\n            },\n            author: {\n                name: \"Ahmed Saheed\",\n                email: \"ahmedsaheed2@outlook.com\",\n                link: \"https://saheed.codes/TIL\"\n            }\n        });\n        response.data.forEach((post)=>{\n            feed.addItem({\n                title: post.body.substring(0, 45) + \"...\",\n                id: \"https://saheed.codes/TIL\",\n                link: \"https://saheed.codes/TIL\",\n                description: post.description,\n                content: post.body,\n                author: [\n                    {\n                        name: \"Ahmed Saheed\",\n                        email: \"ahmedsaheed2@outlook.com\",\n                        link: \"https://saheed.codes/TIL\"\n                    }, \n                ],\n                date: new Date(post.created_at)\n            });\n        });\n        feed.addCategory(\"Today I Learnt\");\n        feed.addContributor({\n            name: \"Ahmed Saheed\",\n            email: \"ahmedsaheed2@outlook.com\",\n            link: \"https://saheed.codes/til\"\n        });\n        console.log(feed.rss2());\n    //  fs.mkdirSync('./public/rss', { recursive: true });\n    //fs.writeFile('./public/rss/feed.xml', feed.rss2());\n    // fs.writeFileSync('./public/rss/atom.xml', feed.atom1());\n    // fs.writeFileSync('./public/rss/feed.json', feed.json1());\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }\n});;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxHQUFJO1FBRVIscUJBQVEsNklBQUssQ0FBQztLQUNmO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haG1lZC1zYWhlZWQvLi9wYWdlcy9yc3MuanM/NmI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGZWVkIH0gZnJvbSBcImZlZWRcIjtcbmltcG9ydCB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2Jyb3dzZXJpZnktZnMnKTtcblxuY29uc3QgdG9rZW4gPSBwcm9jZXNzLmVudi5naXRodWJfYXBpO1xuY29uc3QgaWQgPSBcImE5MjhiMWZiY2YxNzM4ZGEyNmVhNWQ3MTI1ZTkxMWNiXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgcG9zdHM6IFtdLFxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpICB7XG4gICAgICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xuICAgICAgICBhdXRoOiB0b2tlblxuICAgICAgfSlcbiAgICAgIFxuICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KCdHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICBnaXN0X2lkOiBpZCxcbiAgICAgICAgXG4gICAgICB9KVxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBmZWVkID0gbmV3IEZlZWQoe1xuICAgICAgICB0aXRsZTogXCJTYWhlZWQncyBUSUxcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiS2luZGEgbXkgZGFpbHkgRW5jeWNsb3BlZGlhXCIsXG4gICAgICAgIGlkOiBcImh0dHBzOi8vc2FoZWVkLmNvZGVzL1RJTFwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vc2FoZWVkLmNvZGVzL1RJTFwiLFxuICAgICAgICBsYW5ndWFnZTogXCJlblwiLFxuICAgICAgICBjb3B5cmlnaHQ6IGDCqSBBaG1lZCBTYWhlZWQgJHtkYXRlLmdldEZ1bGxZZWFyKCl9YCxcbiAgICAgICAgdXBkYXRlZDogZGF0ZSwgXG4gICAgICAgIGdlbmVyYXRvcjogXCJGZWVkXCIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0ID0gJ0ZlZWQgZm9yIE5vZGUuanMnXG4gICAgICAgIGZlZWRMaW5rczoge1xuICAgICAgICAgIGpzb246IFwiaHR0cHM6Ly93d3cuc2FoZWVkLmNvZGVzL3RpbC9cIixcbiAgICAgICAgICBhdG9tOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy90aWwvXCJcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgbmFtZTogXCJBaG1lZCBTYWhlZWRcIixcbiAgICAgICAgICBlbWFpbDogXCJhaG1lZHNhaGVlZDJAb3V0bG9vay5jb21cIixcbiAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vc2FoZWVkLmNvZGVzL1RJTFwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICByZXNwb25zZS5kYXRhLmZvckVhY2gocG9zdCA9PiB7XG4gICAgICAgICBmZWVkLmFkZEl0ZW0oe1xuICAgICAgICAgIHRpdGxlOiBwb3N0LmJvZHkuc3Vic3RyaW5nKDAsIDQ1KSArIFwiLi4uXCIsXG4gICAgICAgICAgaWQ6IFwiaHR0cHM6Ly9zYWhlZWQuY29kZXMvVElMXCIsXG4gICAgICAgICAgbGluazogXCJodHRwczovL3NhaGVlZC5jb2Rlcy9USUxcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogcG9zdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBjb250ZW50OiAgcG9zdC5ib2R5LFxuICAgICAgICAgIGF1dGhvcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIkFobWVkIFNhaGVlZFwiLFxuICAgICAgICAgICAgICBlbWFpbDogXCJhaG1lZHNhaGVlZDJAb3V0bG9vay5jb21cIixcbiAgICAgICAgICAgICAgbGluazogXCJodHRwczovL3NhaGVlZC5jb2Rlcy9USUxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHBvc3QuY3JlYXRlZF9hdClcbiAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBmZWVkLmFkZENhdGVnb3J5KFwiVG9kYXkgSSBMZWFybnRcIik7XG4gICAgICBcbiAgICAgIGZlZWQuYWRkQ29udHJpYnV0b3Ioe1xuICAgICAgICBuYW1lOiBcIkFobWVkIFNhaGVlZFwiLFxuICAgICAgICBlbWFpbDogXCJhaG1lZHNhaGVlZDJAb3V0bG9vay5jb21cIixcbiAgICAgICAgbGluazogXCJodHRwczovL3NhaGVlZC5jb2Rlcy90aWxcIlxuICAgICAgfSk7XG4gICAgICBcbiAgIFxuICAgICAgY29uc29sZS5sb2coZmVlZC5yc3MyKCkpO1xuICAgICAgICAgLy8gIGZzLm1rZGlyU3luYygnLi9wdWJsaWMvcnNzJywgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICAvL2ZzLndyaXRlRmlsZSgnLi9wdWJsaWMvcnNzL2ZlZWQueG1sJywgZmVlZC5yc3MyKCkpO1xuICAgIC8vIGZzLndyaXRlRmlsZVN5bmMoJy4vcHVibGljL3Jzcy9hdG9tLnhtbCcsIGZlZWQuYXRvbTEoKSk7XG4gICAgLy8gZnMud3JpdGVGaWxlU3luYygnLi9wdWJsaWMvcnNzL2ZlZWQuanNvbicsIGZlZWQuanNvbjEoKSk7XG4gICBcblxuICB9XG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4gKDw+PC8+KVxuICB9XG59XG4iXSwibmFtZXMiOlsiRmVlZCIsIk9jdG9raXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInRva2VuIiwicHJvY2VzcyIsImVudiIsImdpdGh1Yl9hcGkiLCJpZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInBvc3RzIiwiY29tcG9uZW50RGlkTW91bnQiLCJvY3Rva2l0IiwiYXV0aCIsInJlc3BvbnNlIiwicmVxdWVzdCIsImhlYWRlcnMiLCJhY2NlcHQiLCJnaXN0X2lkIiwiZGF0ZSIsIkRhdGUiLCJmZWVkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJsYW5ndWFnZSIsImNvcHlyaWdodCIsImdldEZ1bGxZZWFyIiwidXBkYXRlZCIsImdlbmVyYXRvciIsImZlZWRMaW5rcyIsImpzb24iLCJhdG9tIiwiYXV0aG9yIiwibmFtZSIsImVtYWlsIiwiZGF0YSIsImZvckVhY2giLCJwb3N0IiwiYWRkSXRlbSIsImJvZHkiLCJzdWJzdHJpbmciLCJjb250ZW50IiwiY3JlYXRlZF9hdCIsImFkZENhdGVnb3J5IiwiYWRkQ29udHJpYnV0b3IiLCJjb25zb2xlIiwibG9nIiwicnNzMiIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/rss.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/rss.js"));
module.exports = __webpack_exports__;

})();