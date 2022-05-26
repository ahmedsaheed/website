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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rss)\n/* harmony export */ });\n/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! feed */ \"feed\");\n/* harmony import */ var _octokit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/core */ \"@octokit/core\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n\n\n\n\nconst token = process.env.github_api;\nconst id = \"a928b1fbcf1738da26ea5d7125e911cb\";\nclass rss extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n    componentDidMount() {\n        this.generateRssFeed();\n    }\n    generateRssFeed = async ()=>{\n        const date = new Date();\n        const feed = new feed__WEBPACK_IMPORTED_MODULE_0__.Feed({\n            title: `Saheed's TIL`,\n            description: \"Welcome to my TIL!\",\n            id: \"https://www.saheed.codes/til/\",\n            link: \"https://www.saheed.codes/til/\",\n            language: \"en\",\n            copyright: `© Ahmed Saheed ${date.getFullYear()}`,\n            updated: date,\n            generator: \"Next.js using Feed for Node.js\",\n            feedLinks: {\n                rss2: \"https://www.saheed.codes/rss/feed.xml\",\n                json: \"https://www.saheed.codes/rss/feed.json\",\n                atom: \"https://www.saheed.codes/rss/atom.xml\"\n            },\n            author: \"Ahmed Saheed\"\n        });\n        const octokit = new _octokit_core__WEBPACK_IMPORTED_MODULE_1__.Octokit({\n            auth: token\n        });\n        const reply = await octokit.request(\"GET /gists/{gist_id}/comments\", {\n            headers: {\n                accept: \"application/vnd.github.v3+json\"\n            },\n            gist_id: id\n        });\n        const posts = [\n            ...reply.data\n        ];\n        if (!posts) {\n            return;\n        }\n        posts?.map((post)=>{\n            const url = \"https://www.saheed.codes/me/\";\n            feed.addItem({\n                title: post.title,\n                id: url,\n                link: url,\n                description: \"TIL on \" + new Date(post.created_at),\n                content: post.body,\n                author: \"Ahmed Saheed\",\n                // contributor: [author],\n                date: new Date(post.created_at)\n            });\n        });\n    // await fs.mkdirSync('./public/rss', { recursive: true });\n    // await fs.writeFileSync('./public/rss/feed.xml', feed.rss2());\n    // fs.writeFileSync('./public/rss/atom.xml', feed.atom1());\n    // fs.writeFileSync('./public/rss/feed.json', feed.json1());\n    };\n    render() {\n        return null;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDVztBQUNDO0FBQ2Y7QUFFekIsTUFBTUssS0FBSyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtBQUNwQyxNQUFNQyxFQUFFLEdBQUcsa0NBQWtDO0FBRTlCLE1BQU1DLEdBQUcsU0FBU1AsNENBQVM7SUFDeENRLGlCQUFpQixHQUFHO1FBQ2xCLElBQUksQ0FBQ0MsZUFBZSxFQUFFLENBQUM7S0FDeEI7SUFDREEsZUFBZSxHQUFHLFVBQVk7UUFDNUIsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUksRUFBRTtRQUN2QixNQUFNQyxJQUFJLEdBQUcsSUFBSWYsc0NBQUksQ0FBQztZQUNwQmdCLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQkMsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQ1IsRUFBRSxFQUFFLCtCQUErQjtZQUNuQ1MsSUFBSSxFQUFFLCtCQUErQjtZQUNyQ0MsUUFBUSxFQUFFLElBQUk7WUFDZEMsU0FBUyxFQUFFLENBQUMsZ0JBQWUsRUFBRVAsSUFBSSxDQUFDUSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2pEQyxPQUFPLEVBQUVULElBQUk7WUFDYlUsU0FBUyxFQUFFLGdDQUFnQztZQUMzQ0MsU0FBUyxFQUFFO2dCQUNUQyxJQUFJLEVBQUUsdUNBQXVDO2dCQUM3Q0MsSUFBSSxFQUFFLHdDQUF3QztnQkFDOUNDLElBQUksRUFBRSx1Q0FBdUM7YUFDOUM7WUFDREMsTUFBTSxFQUFFLGNBQWM7U0FDdkIsQ0FBQztRQUNELE1BQU1DLE9BQU8sR0FBRyxJQUFJNUIsa0RBQU8sQ0FBQztZQUMzQjZCLElBQUksRUFBRXpCLEtBQUs7U0FDWixDQUFDO1FBQ0YsTUFBTTBCLEtBQUssR0FBRyxNQUFNRixPQUFPLENBQUNHLE9BQU8sQ0FBQywrQkFBK0IsRUFBRTtZQUNuRUMsT0FBTyxFQUFFO2dCQUNMQyxNQUFNLEVBQUUsZ0NBQWdDO2FBQ3pDO1lBQ0hDLE9BQU8sRUFBRTFCLEVBQUU7U0FFWixDQUFDO1FBQ0YsTUFBTTJCLEtBQUssR0FBRztlQUFJTCxLQUFLLENBQUNNLElBQUk7U0FBQztRQUM3QixJQUFHLENBQUNELEtBQUssRUFBQztZQUFDLE9BQU87U0FBQztRQUNuQkEsS0FBSyxFQUFFRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1lBQ25CLE1BQU1DLEdBQUcsR0FBRyw4QkFBOEI7WUFDMUN6QixJQUFJLENBQUMwQixPQUFPLENBQUM7Z0JBQ1h6QixLQUFLLEVBQUV1QixJQUFJLENBQUN2QixLQUFLO2dCQUNqQlAsRUFBRSxFQUFFK0IsR0FBRztnQkFDUHRCLElBQUksRUFBRXNCLEdBQUc7Z0JBQ1R2QixXQUFXLEVBQUcsU0FBUyxHQUFFLElBQUlILElBQUksQ0FBQ3lCLElBQUksQ0FBQ0csVUFBVSxDQUFDO2dCQUNsREMsT0FBTyxFQUFFSixJQUFJLENBQUNLLElBQUk7Z0JBQ2pCaEIsTUFBTSxFQUFFLGNBQWM7Z0JBQ3ZCLHlCQUF5QjtnQkFDekJmLElBQUksRUFBRSxJQUFJQyxJQUFJLENBQUN5QixJQUFJLENBQUNHLFVBQVUsQ0FBQzthQUNoQyxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7SUFFSCwyREFBMkQ7SUFDM0QsZ0VBQWdFO0lBQ2hFLDJEQUEyRDtJQUMzRCw0REFBNEQ7S0FFN0Q7SUFDREcsTUFBTSxHQUFJO1FBRVIsT0FBUSxJQUFJLENBQUM7S0FDaEI7Q0FFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FobWVkLXNhaGVlZC8uL3BhZ2VzL3Jzcy5qcz82YjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlZWQgfSBmcm9tIFwiZmVlZFwiO1xuaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gXCJAb2N0b2tpdC9jb3JlXCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCB0b2tlbiA9IHByb2Nlc3MuZW52LmdpdGh1Yl9hcGk7XG5jb25zdCBpZCA9IFwiYTkyOGIxZmJjZjE3MzhkYTI2ZWE1ZDcxMjVlOTExY2JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcnNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZVJzc0ZlZWQoKTtcbiAgfVxuICBnZW5lcmF0ZVJzc0ZlZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZmVlZCA9IG5ldyBGZWVkKHtcbiAgICAgIHRpdGxlOiBgU2FoZWVkJ3MgVElMYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2VsY29tZSB0byBteSBUSUwhJyxcbiAgICAgIGlkOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy90aWwvXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnNhaGVlZC5jb2Rlcy90aWwvXCIsXG4gICAgICBsYW5ndWFnZTogJ2VuJyxcbiAgICAgIGNvcHlyaWdodDogYMKpIEFobWVkIFNhaGVlZCAke2RhdGUuZ2V0RnVsbFllYXIoKX1gLFxuICAgICAgdXBkYXRlZDogZGF0ZSxcbiAgICAgIGdlbmVyYXRvcjogJ05leHQuanMgdXNpbmcgRmVlZCBmb3IgTm9kZS5qcycsXG4gICAgICBmZWVkTGlua3M6IHtcbiAgICAgICAgcnNzMjogXCJodHRwczovL3d3dy5zYWhlZWQuY29kZXMvcnNzL2ZlZWQueG1sXCIsXG4gICAgICAgIGpzb246IFwiaHR0cHM6Ly93d3cuc2FoZWVkLmNvZGVzL3Jzcy9mZWVkLmpzb25cIixcbiAgICAgICAgYXRvbTogXCJodHRwczovL3d3dy5zYWhlZWQuY29kZXMvcnNzL2F0b20ueG1sXCJcbiAgICAgIH0sXG4gICAgICBhdXRob3I6IFwiQWhtZWQgU2FoZWVkXCJcbiAgICB9KTtcbiAgICAgY29uc3Qgb2N0b2tpdCA9IG5ldyBPY3Rva2l0KHtcbiAgICAgIGF1dGg6IHRva2VuXG4gICAgfSk7XG4gICAgY29uc3QgcmVwbHkgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoJ0dFVCAvZ2lzdHMve2dpc3RfaWR9L2NvbW1lbnRzJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvbicsXG4gICAgICAgIH0sXG4gICAgICBnaXN0X2lkOiBpZCxcbiAgICAgIFxuICAgIH0pO1xuICAgIGNvbnN0IHBvc3RzID0gWy4uLnJlcGx5LmRhdGFdXG4gICAgaWYoIXBvc3RzKXtyZXR1cm47fVxuICAgIHBvc3RzPy5tYXAoKHBvc3QpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly93d3cuc2FoZWVkLmNvZGVzL21lL1wiO1xuICAgICAgZmVlZC5hZGRJdGVtKHtcbiAgICAgICAgdGl0bGU6IHBvc3QudGl0bGUsXG4gICAgICAgIGlkOiB1cmwsXG4gICAgICAgIGxpbms6IHVybCxcbiAgICAgICAgZGVzY3JpcHRpb246ICBcIlRJTCBvbiBcIiArbmV3IERhdGUocG9zdC5jcmVhdGVkX2F0KSxcbiAgICAgICAgY29udGVudDoocG9zdC5ib2R5KSxcbiAgICAgICAgIGF1dGhvcjogXCJBaG1lZCBTYWhlZWRcIixcbiAgICAgICAgLy8gY29udHJpYnV0b3I6IFthdXRob3JdLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShwb3N0LmNyZWF0ZWRfYXQpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgXG4gICAgLy8gYXdhaXQgZnMubWtkaXJTeW5jKCcuL3B1YmxpYy9yc3MnLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAvLyBhd2FpdCBmcy53cml0ZUZpbGVTeW5jKCcuL3B1YmxpYy9yc3MvZmVlZC54bWwnLCBmZWVkLnJzczIoKSk7XG4gICAgLy8gZnMud3JpdGVGaWxlU3luYygnLi9wdWJsaWMvcnNzL2F0b20ueG1sJywgZmVlZC5hdG9tMSgpKTtcbiAgICAvLyBmcy53cml0ZUZpbGVTeW5jKCcuL3B1YmxpYy9yc3MvZmVlZC5qc29uJywgZmVlZC5qc29uMSgpKTtcbiAgICBcbiAgfVxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuIChudWxsKVxufVxuXG59XG5cbiJdLCJuYW1lcyI6WyJGZWVkIiwiT2N0b2tpdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZnMiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJnaXRodWJfYXBpIiwiaWQiLCJyc3MiLCJjb21wb25lbnREaWRNb3VudCIsImdlbmVyYXRlUnNzRmVlZCIsImRhdGUiLCJEYXRlIiwiZmVlZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibGFuZ3VhZ2UiLCJjb3B5cmlnaHQiLCJnZXRGdWxsWWVhciIsInVwZGF0ZWQiLCJnZW5lcmF0b3IiLCJmZWVkTGlua3MiLCJyc3MyIiwianNvbiIsImF0b20iLCJhdXRob3IiLCJvY3Rva2l0IiwiYXV0aCIsInJlcGx5IiwicmVxdWVzdCIsImhlYWRlcnMiLCJhY2NlcHQiLCJnaXN0X2lkIiwicG9zdHMiLCJkYXRhIiwibWFwIiwicG9zdCIsInVybCIsImFkZEl0ZW0iLCJjcmVhdGVkX2F0IiwiY29udGVudCIsImJvZHkiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/rss.js\n");

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