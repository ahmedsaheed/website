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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! feed */ \"feed\");\n/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @octokit/core */ \"@octokit/core\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n\n\n\n\n// var fs = require('browserify-fs');\nconst token = process.env.github_api;\nconst id = \"a928b1fbcf1738da26ea5d7125e911cb\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_3__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            posts: []\n        };\n    }\n    async componentDidMount() {\n        const octokit = new _octokit_core__WEBPACK_IMPORTED_MODULE_2__.Octokit({\n            auth: token\n        });\n        const response = await octokit.request(\"GET /gists/{gist_id}/comments\", {\n            headers: {\n                accept: \"application/vnd.github.v3+json\"\n            },\n            gist_id: id\n        });\n        const date = new Date();\n        const feed = new feed__WEBPACK_IMPORTED_MODULE_1__.Feed({\n            title: \"Saheed's TIL\",\n            description: \"Kinda my daily Encyclopedia\",\n            id: \"https://www.saheed.codes/til/\",\n            link: \"https://www.saheed.codes/til/\",\n            language: \"en\",\n            copyright: `© Ahmed Saheed ${date.getFullYear()}`,\n            updated: date,\n            generator: \"Feed\",\n            feedLinks: {\n                json: \"https://www.saheed.codes/til/\",\n                atom: \"https://www.saheed.codes/til/\"\n            },\n            author: {\n                name: \"Ahmed Saheed\",\n                email: \"ahmedsaheed2@outlook.com\",\n                link: \"https://www.saheed.codes/til/\"\n            }\n        });\n        response.data.forEach((post)=>{\n            feed.addItem({\n                title: post.body.substring(0, 45) + \"...\",\n                id: \"https://www.saheed.codes/til/\",\n                link: \"https://www.saheed.codes/til/\",\n                description: post.description,\n                content: post.body,\n                author: [\n                    {\n                        name: \"Ahmed Saheed\",\n                        email: \"ahmedsaheed2@outlook.com\",\n                        link: \"https://saheed.codes/til\"\n                    }, \n                ],\n                date: new Date(post.created_at)\n            });\n        });\n        feed.addCategory(\"Today I Learnt\");\n        feed.addContributor({\n            name: \"Ahmed Saheed\",\n            email: \"ahmedsaheed2@outlook.com\",\n            link: \"https://saheed.codes/til\"\n        });\n        console.log(feed.rss2());\n    //  fs.mkdirSync('./public/rss', { recursive: true });\n    //fs.writeFile('./public/rss/feed.xml', feed.rss2());\n    // fs.writeFileSync('./public/rss/atom.xml', feed.atom1());\n    // fs.writeFileSync('./public/rss/feed.json', feed.json1());\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }\n});;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxHQUFJO1FBRVIscUJBQVEsNklBQUssQ0FBQztLQUNmO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haG1lZC1zYWhlZWQvLi9wYWdlcy9yc3MuanM/NmI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGZWVkIH0gZnJvbSBcImZlZWRcIjtcbmltcG9ydCB7IE9jdG9raXQgfSBmcm9tIFwiQG9jdG9raXQvY29yZVwiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2Jyb3dzZXJpZnktZnMnKTtcblxuY29uc3QgdG9rZW4gPSBwcm9jZXNzLmVudi5naXRodWJfYXBpO1xuY29uc3QgaWQgPSBcImE5MjhiMWZiY2YxNzM4ZGEyNmVhNWQ3MTI1ZTkxMWNiXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgcG9zdHM6IFtdLFxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpICB7XG4gICAgICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xuICAgICAgICBhdXRoOiB0b2tlblxuICAgICAgfSlcbiAgICAgIFxuICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KCdHRVQgL2dpc3RzL3tnaXN0X2lkfS9jb21tZW50cycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICBnaXN0X2lkOiBpZCxcbiAgICAgICAgXG4gICAgICB9KVxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBmZWVkID0gbmV3IEZlZWQoe1xuICAgICAgICB0aXRsZTogXCJTYWhlZWQncyBUSUxcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiS2luZGEgbXkgZGFpbHkgRW5jeWNsb3BlZGlhXCIsXG4gICAgICAgIGlkOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy90aWwvXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuc2FoZWVkLmNvZGVzL3RpbC9cIixcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZW5cIixcbiAgICAgICAgY29weXJpZ2h0OiBgwqkgQWhtZWQgU2FoZWVkICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWAsXG4gICAgICAgIHVwZGF0ZWQ6IGRhdGUsIFxuICAgICAgICBnZW5lcmF0b3I6IFwiRmVlZFwiLCAvLyBvcHRpb25hbCwgZGVmYXVsdCA9ICdGZWVkIGZvciBOb2RlLmpzJ1xuICAgICAgICBmZWVkTGlua3M6IHtcbiAgICAgICAgICBqc29uOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy90aWwvXCIsXG4gICAgICAgICAgYXRvbTogXCJodHRwczovL3d3dy5zYWhlZWQuY29kZXMvdGlsL1wiXG4gICAgICAgIH0sXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIG5hbWU6IFwiQWhtZWQgU2FoZWVkXCIsXG4gICAgICAgICAgZW1haWw6IFwiYWhtZWRzYWhlZWQyQG91dGxvb2suY29tXCIsXG4gICAgICAgICAgbGluazogXCJodHRwczovL3d3dy5zYWhlZWQuY29kZXMvdGlsL1wiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICByZXNwb25zZS5kYXRhLmZvckVhY2gocG9zdCA9PiB7XG4gICAgICAgICBmZWVkLmFkZEl0ZW0oe1xuICAgICAgICAgIHRpdGxlOiBwb3N0LmJvZHkuc3Vic3RyaW5nKDAsIDQ1KSArIFwiLi4uXCIsXG4gICAgICAgICAgaWQ6IFwiaHR0cHM6Ly93d3cuc2FoZWVkLmNvZGVzL3RpbC9cIixcbiAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy90aWwvXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHBvc3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgY29udGVudDogIHBvc3QuYm9keSxcbiAgICAgICAgICBhdXRob3I6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJBaG1lZCBTYWhlZWRcIixcbiAgICAgICAgICAgICAgZW1haWw6IFwiYWhtZWRzYWhlZWQyQG91dGxvb2suY29tXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9zYWhlZWQuY29kZXMvdGlsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShwb3N0LmNyZWF0ZWRfYXQpXG4gICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgZmVlZC5hZGRDYXRlZ29yeShcIlRvZGF5IEkgTGVhcm50XCIpO1xuICAgICAgXG4gICAgICBmZWVkLmFkZENvbnRyaWJ1dG9yKHtcbiAgICAgICAgbmFtZTogXCJBaG1lZCBTYWhlZWRcIixcbiAgICAgICAgZW1haWw6IFwiYWhtZWRzYWhlZWQyQG91dGxvb2suY29tXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9zYWhlZWQuY29kZXMvdGlsXCJcbiAgICAgIH0pO1xuICAgICAgXG4gICBcbiAgICAgIGNvbnNvbGUubG9nKGZlZWQucnNzMigpKTtcbiAgICAgICAgIC8vICBmcy5ta2RpclN5bmMoJy4vcHVibGljL3JzcycsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgLy9mcy53cml0ZUZpbGUoJy4vcHVibGljL3Jzcy9mZWVkLnhtbCcsIGZlZWQucnNzMigpKTtcbiAgICAvLyBmcy53cml0ZUZpbGVTeW5jKCcuL3B1YmxpYy9yc3MvYXRvbS54bWwnLCBmZWVkLmF0b20xKCkpO1xuICAgIC8vIGZzLndyaXRlRmlsZVN5bmMoJy4vcHVibGljL3Jzcy9mZWVkLmpzb24nLCBmZWVkLmpzb24xKCkpO1xuICAgXG5cbiAgfVxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuICg8PjwvPilcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZlZWQiLCJPY3Rva2l0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJnaXRodWJfYXBpIiwiaWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJwb3N0cyIsImNvbXBvbmVudERpZE1vdW50Iiwib2N0b2tpdCIsImF1dGgiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2lzdF9pZCIsImRhdGUiLCJEYXRlIiwiZmVlZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibGFuZ3VhZ2UiLCJjb3B5cmlnaHQiLCJnZXRGdWxsWWVhciIsInVwZGF0ZWQiLCJnZW5lcmF0b3IiLCJmZWVkTGlua3MiLCJqc29uIiwiYXRvbSIsImF1dGhvciIsIm5hbWUiLCJlbWFpbCIsImRhdGEiLCJmb3JFYWNoIiwicG9zdCIsImFkZEl0ZW0iLCJib2R5Iiwic3Vic3RyaW5nIiwiY29udGVudCIsImNyZWF0ZWRfYXQiLCJhZGRDYXRlZ29yeSIsImFkZENvbnRyaWJ1dG9yIiwiY29uc29sZSIsImxvZyIsInJzczIiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/rss.js\n");

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