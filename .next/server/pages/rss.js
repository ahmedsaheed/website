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

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ "rehype-katex":
/*!*******************************!*\
  !*** external "rehype-katex" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ "remark-math":
/*!******************************!*\
  !*** external "remark-math" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./pages/rss.js":
/*!**********************!*\
  !*** ./pages/rss.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! feed */ \"feed\");\n/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/core */ \"@octokit/core\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-math */ \"remark-math\");\n/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rehype-katex */ \"rehype-katex\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_math__WEBPACK_IMPORTED_MODULE_3__, rehype_katex__WEBPACK_IMPORTED_MODULE_4__]);\n([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_math__WEBPACK_IMPORTED_MODULE_3__, rehype_katex__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst token = process.env.github_api;\nconst id = \"a928b1fbcf1738da26ea5d7125e911cb\";\nclass rss {\n    componentDidMount() {\n        this.generateRssFeed();\n    }\n}\nasync function generateRssFeed() {\n    const date = new Date();\n    const feed = new feed__WEBPACK_IMPORTED_MODULE_0__.Feed({\n        title: `Saheed's TIL`,\n        description: \"Welcome to my TIL!\",\n        id: \"https://www.saheed.codes/til/\",\n        link: \"https://www.saheed.codes/til/\",\n        language: \"en\",\n        copyright: `© Ahmed Saheed ${date.getFullYear()}`,\n        updated: date,\n        generator: \"Next.js using Feed for Node.js\",\n        feedLinks: {\n            rss2: \"https://www.saheed.codes/rss/feed.xml\",\n            json: \"https://www.saheed.codes/rss/feed.json\",\n            atom: \"https://www.saheed.codes/rss/atom.xml\"\n        },\n        author: \"Ahmed Saheed\"\n    });\n    const octokit = new _octokit_core__WEBPACK_IMPORTED_MODULE_1__.Octokit({\n        auth: token\n    });\n    const reply = await octokit.request(\"GET /gists/{gist_id}/comments\", {\n        headers: {\n            accept: \"application/vnd.github.v3+json\"\n        },\n        gist_id: id\n    });\n    const posts = [\n        ...reply.data\n    ];\n    if (!posts) {\n        return;\n    }\n    posts.forEach((post)=>{\n        const url = \"https://www.saheed.codes/me/\";\n        feed.addItem({\n            title: post.title,\n            id: url,\n            link: url,\n            description: \"TIL on \" + new Date(post.created_at),\n            content: post.body,\n            author: \"Ahmed Saheed\",\n            // contributor: [author],\n            date: new Date(post.created_at)\n        });\n    });\n    fs__WEBPACK_IMPORTED_MODULE_5__.mkdirSync(\"./public/rss\", {\n        recursive: true\n    });\n    fs__WEBPACK_IMPORTED_MODULE_5__.writeFileSync(\"./public/rss/feed.xml\", feed.rss2());\n// fs.writeFileSync('./public/rss/atom.xml', feed.atom1());\n// fs.writeFileSync('./public/rss/feed.json', feed.json1());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateRssFeed);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNXO0FBQ0c7QUFDTjtBQUNFO0FBQ2I7QUFFekIsTUFBTU0sS0FBSyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtBQUNwQyxNQUFNQyxFQUFFLEdBQUcsa0NBQWtDO0FBRTdDLE1BQU1DLEdBQUc7SUFDUEMsaUJBQWlCLEdBQUc7UUFDbEIsSUFBSSxDQUFDQyxlQUFlLEVBQUUsQ0FBQztLQUN4QjtDQUNGO0FBRUQsZUFBZUEsZUFBZSxHQUFHO0lBRy9CLE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFFdkIsTUFBTUMsSUFBSSxHQUFHLElBQUloQixzQ0FBSSxDQUFDO1FBQ3BCaUIsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3JCQyxXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDUixFQUFFLEVBQUUsK0JBQStCO1FBQ25DUyxJQUFJLEVBQUUsK0JBQStCO1FBQ3JDQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZSxFQUFFUCxJQUFJLENBQUNRLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDakRDLE9BQU8sRUFBRVQsSUFBSTtRQUNiVSxTQUFTLEVBQUUsZ0NBQWdDO1FBQzNDQyxTQUFTLEVBQUU7WUFDVEMsSUFBSSxFQUFFLHVDQUF1QztZQUM3Q0MsSUFBSSxFQUFFLHdDQUF3QztZQUM5Q0MsSUFBSSxFQUFFLHVDQUF1QztTQUM5QztRQUNEQyxNQUFNLEVBQUUsY0FBYztLQUN2QixDQUFDO0lBQ0YsTUFBTUMsT0FBTyxHQUFHLElBQUk3QixrREFBTyxDQUFDO1FBQzFCOEIsSUFBSSxFQUFFekIsS0FBSztLQUNaLENBQUM7SUFDRixNQUFNMEIsS0FBSyxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLCtCQUErQixFQUFFO1FBQ25FQyxPQUFPLEVBQUU7WUFDTEMsTUFBTSxFQUFFLGdDQUFnQztTQUN6QztRQUNIQyxPQUFPLEVBQUUxQixFQUFFO0tBRVosQ0FBQztJQUVGLE1BQU0yQixLQUFLLEdBQUc7V0FBSUwsS0FBSyxDQUFDTSxJQUFJO0tBQUM7SUFDN0IsSUFBRyxDQUFDRCxLQUFLLEVBQUM7UUFBQyxPQUFPO0tBQUM7SUFDbkJBLEtBQUssQ0FBQ0UsT0FBTyxDQUFDLENBQUNDLElBQUksR0FBSztRQUN0QixNQUFNQyxHQUFHLEdBQUcsOEJBQThCO1FBQzFDekIsSUFBSSxDQUFDMEIsT0FBTyxDQUFDO1lBQ1h6QixLQUFLLEVBQUV1QixJQUFJLENBQUN2QixLQUFLO1lBQ2pCUCxFQUFFLEVBQUUrQixHQUFHO1lBQ1B0QixJQUFJLEVBQUVzQixHQUFHO1lBQ1R2QixXQUFXLEVBQUcsU0FBUyxHQUFFLElBQUlILElBQUksQ0FBQ3lCLElBQUksQ0FBQ0csVUFBVSxDQUFDO1lBQ2xEQyxPQUFPLEVBQUVKLElBQUksQ0FBQ0ssSUFBSTtZQUNqQmhCLE1BQU0sRUFBRSxjQUFjO1lBQ3ZCLHlCQUF5QjtZQUN6QmYsSUFBSSxFQUFFLElBQUlDLElBQUksQ0FBQ3lCLElBQUksQ0FBQ0csVUFBVSxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztJQUVIdEMseUNBQVksQ0FBQyxjQUFjLEVBQUU7UUFBRTBDLFNBQVMsRUFBRSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0lBQ2xEMUMsNkNBQWdCLENBQUMsdUJBQXVCLEVBQUVXLElBQUksQ0FBQ1UsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN2RCwyREFBMkQ7QUFDM0QsNERBQTREO0NBQzdEO0FBRUQsaUVBQWViLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FobWVkLXNhaGVlZC8uL3BhZ2VzL3Jzcy5qcz82YjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlZWQgfSBmcm9tIFwiZmVlZFwiO1xuaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IHJlbWFya01hdGggZnJvbSAncmVtYXJrLW1hdGgnXG5pbXBvcnQgcmVoeXBlS2F0ZXggZnJvbSAncmVoeXBlLWthdGV4J1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCB0b2tlbiA9IHByb2Nlc3MuZW52LmdpdGh1Yl9hcGk7XG5jb25zdCBpZCA9IFwiYTkyOGIxZmJjZjE3MzhkYTI2ZWE1ZDcxMjVlOTExY2JcIjtcblxuY2xhc3MgcnNze1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlUnNzRmVlZCgpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUnNzRmVlZCgpIHtcbiBcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuICBjb25zdCBmZWVkID0gbmV3IEZlZWQoe1xuICAgIHRpdGxlOiBgU2FoZWVkJ3MgVElMYCxcbiAgICBkZXNjcmlwdGlvbjogJ1dlbGNvbWUgdG8gbXkgVElMIScsXG4gICAgaWQ6IFwiaHR0cHM6Ly93d3cuc2FoZWVkLmNvZGVzL3RpbC9cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy90aWwvXCIsXG4gICAgbGFuZ3VhZ2U6ICdlbicsXG4gICAgY29weXJpZ2h0OiBgwqkgQWhtZWQgU2FoZWVkICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWAsXG4gICAgdXBkYXRlZDogZGF0ZSxcbiAgICBnZW5lcmF0b3I6ICdOZXh0LmpzIHVzaW5nIEZlZWQgZm9yIE5vZGUuanMnLFxuICAgIGZlZWRMaW5rczoge1xuICAgICAgcnNzMjogXCJodHRwczovL3d3dy5zYWhlZWQuY29kZXMvcnNzL2ZlZWQueG1sXCIsXG4gICAgICBqc29uOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy9yc3MvZmVlZC5qc29uXCIsXG4gICAgICBhdG9tOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy9yc3MvYXRvbS54bWxcIlxuICAgIH0sXG4gICAgYXV0aG9yOiBcIkFobWVkIFNhaGVlZFwiXG4gIH0pO1xuICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xuICAgIGF1dGg6IHRva2VuXG4gIH0pO1xuICBjb25zdCByZXBseSA9IGF3YWl0IG9jdG9raXQucmVxdWVzdCgnR0VUIC9naXN0cy97Z2lzdF9pZH0vY29tbWVudHMnLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb24nLFxuICAgICAgfSxcbiAgICBnaXN0X2lkOiBpZCxcbiAgICBcbiAgfSk7XG5cbiAgY29uc3QgcG9zdHMgPSBbLi4ucmVwbHkuZGF0YV1cbiAgaWYoIXBvc3RzKXtyZXR1cm47fVxuICBwb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL3d3dy5zYWhlZWQuY29kZXMvbWUvXCI7XG4gICAgZmVlZC5hZGRJdGVtKHtcbiAgICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxuICAgICAgaWQ6IHVybCxcbiAgICAgIGxpbms6IHVybCxcbiAgICAgIGRlc2NyaXB0aW9uOiAgXCJUSUwgb24gXCIgK25ldyBEYXRlKHBvc3QuY3JlYXRlZF9hdCksXG4gICAgICBjb250ZW50Oihwb3N0LmJvZHkpLFxuICAgICAgIGF1dGhvcjogXCJBaG1lZCBTYWhlZWRcIixcbiAgICAgIC8vIGNvbnRyaWJ1dG9yOiBbYXV0aG9yXSxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKHBvc3QuY3JlYXRlZF9hdClcbiAgICB9KTtcbiAgfSk7XG5cbiAgZnMubWtkaXJTeW5jKCcuL3B1YmxpYy9yc3MnLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgZnMud3JpdGVGaWxlU3luYygnLi9wdWJsaWMvcnNzL2ZlZWQueG1sJywgZmVlZC5yc3MyKCkpO1xuICAvLyBmcy53cml0ZUZpbGVTeW5jKCcuL3B1YmxpYy9yc3MvYXRvbS54bWwnLCBmZWVkLmF0b20xKCkpO1xuICAvLyBmcy53cml0ZUZpbGVTeW5jKCcuL3B1YmxpYy9yc3MvZmVlZC5qc29uJywgZmVlZC5qc29uMSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVSc3NGZWVkO1xuIl0sIm5hbWVzIjpbIkZlZWQiLCJPY3Rva2l0IiwiUmVhY3RNYXJrZG93biIsInJlbWFya01hdGgiLCJyZWh5cGVLYXRleCIsImZzIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiZ2l0aHViX2FwaSIsImlkIiwicnNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZW5lcmF0ZVJzc0ZlZWQiLCJkYXRlIiwiRGF0ZSIsImZlZWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsImxhbmd1YWdlIiwiY29weXJpZ2h0IiwiZ2V0RnVsbFllYXIiLCJ1cGRhdGVkIiwiZ2VuZXJhdG9yIiwiZmVlZExpbmtzIiwicnNzMiIsImpzb24iLCJhdG9tIiwiYXV0aG9yIiwib2N0b2tpdCIsImF1dGgiLCJyZXBseSIsInJlcXVlc3QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiZ2lzdF9pZCIsInBvc3RzIiwiZGF0YSIsImZvckVhY2giLCJwb3N0IiwidXJsIiwiYWRkSXRlbSIsImNyZWF0ZWRfYXQiLCJjb250ZW50IiwiYm9keSIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsIndyaXRlRmlsZVN5bmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/rss.js\n");

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