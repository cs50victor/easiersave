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
exports.id = "pages/api/downloader";
exports.ids = ["pages/api/downloader"];
exports.modules = {

/***/ "youtube-dl-exec":
/*!**********************************!*\
  !*** external "youtube-dl-exec" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("youtube-dl-exec");

/***/ }),

/***/ "(api)/./pages/api/downloader.js":
/*!*********************************!*\
  !*** ./pages/api/downloader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ downloader)\n/* harmony export */ });\nconst youtubedl = __webpack_require__(/*! youtube-dl-exec */ \"youtube-dl-exec\");\n\nconst urlChecker = new RegExp(\"^(http|https)://\");\nasync function downloader(req, res) {\n  if (req.method !== \"GET\") {\n    res.setHeader(\"Allow\", \"GET\");\n    return res.status(405).json({\n      error: \"Method Not Allowed\"\n    });\n  }\n\n  const {\n    videoUrl\n  } = req.query;\n\n  if (urlChecker.test(videoUrl)) {\n    try {\n      const {\n        url,\n        title,\n        thumbnail,\n        formats\n      } = await youtubedl(videoUrl, {\n        dumpSingleJson: true,\n        noWarnings: true,\n        noCallHome: true,\n        noCheckCertificate: true,\n        preferFreeFormats: true,\n        youtubeSkipDashManifest: true,\n        referer: videoUrl,\n        socketTimeout: 10\n      });\n      const fileUrl = url || formats.filter(format => format.vcodec !== \"none\" && format.acodec !== \"none\").sort().pop().url;\n      return res.status(200).json({\n        fileUrl,\n        thumbnail,\n        title\n      });\n    } catch {\n      return res.status(400).json({\n        error: \"Unable to download video. Please try a different url.\"\n      });\n    }\n  } else {\n    return res.status(400).json({\n      error: \"Invalid Url. Make sure your link starts with 'http:// or https://'\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG93bmxvYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLHdDQUFELENBQXpCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxNQUFKLENBQVcsa0JBQVgsQ0FBbkI7QUFFZSxlQUFlQyxVQUFmLENBQTBCQyxHQUExQixFQUErQkMsR0FBL0IsRUFBb0M7QUFDakQsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEJELElBQUFBLEdBQUcsQ0FBQ0UsU0FBSixDQUFjLE9BQWQsRUFBdUIsS0FBdkI7QUFDQSxXQUFPRixHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFyQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWVQLEdBQUcsQ0FBQ1EsS0FBekI7O0FBRUEsTUFBSVgsVUFBVSxDQUFDWSxJQUFYLENBQWdCRixRQUFoQixDQUFKLEVBQStCO0FBQzdCLFFBQUk7QUFDRixZQUFNO0FBQUVHLFFBQUFBLEdBQUY7QUFBT0MsUUFBQUEsS0FBUDtBQUFjQyxRQUFBQSxTQUFkO0FBQXlCQyxRQUFBQTtBQUF6QixVQUFxQyxNQUFNbEIsU0FBUyxDQUFDWSxRQUFELEVBQVc7QUFDbkVPLFFBQUFBLGNBQWMsRUFBRSxJQURtRDtBQUVuRUMsUUFBQUEsVUFBVSxFQUFFLElBRnVEO0FBR25FQyxRQUFBQSxVQUFVLEVBQUUsSUFIdUQ7QUFJbkVDLFFBQUFBLGtCQUFrQixFQUFFLElBSitDO0FBS25FQyxRQUFBQSxpQkFBaUIsRUFBRSxJQUxnRDtBQU1uRUMsUUFBQUEsdUJBQXVCLEVBQUUsSUFOMEM7QUFPbkVDLFFBQUFBLE9BQU8sRUFBRWIsUUFQMEQ7QUFRbkVjLFFBQUFBLGFBQWEsRUFBRTtBQVJvRCxPQUFYLENBQTFEO0FBV0EsWUFBTUMsT0FBTyxHQUNYWixHQUFHLElBQ0hHLE9BQU8sQ0FDSlUsTUFESCxDQUNXQyxNQUFELElBQVlBLE1BQU0sQ0FBQ0MsTUFBUCxLQUFrQixNQUFsQixJQUE0QkQsTUFBTSxDQUFDRSxNQUFQLEtBQWtCLE1BRHBFLEVBRUdDLElBRkgsR0FHR0MsR0FISCxHQUdTbEIsR0FMWDtBQU9BLGFBQU9ULEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVpQixRQUFBQSxPQUFGO0FBQVdWLFFBQUFBLFNBQVg7QUFBc0JELFFBQUFBO0FBQXRCLE9BQXJCLENBQVA7QUFDRCxLQXBCRCxDQW9CRSxNQUFNO0FBQ04sYUFBT1YsR0FBRyxDQUNQRyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FGRCxDQUFQO0FBR0Q7QUFDRixHQTFCRCxNQTBCTztBQUNMLFdBQU9MLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxNQUFBQSxLQUFLLEVBQUU7QUFEbUIsS0FBckIsQ0FBUDtBQUdEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0d2luLy4vcGFnZXMvYXBpL2Rvd25sb2FkZXIuanM/ZGQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB5b3V0dWJlZGwgPSByZXF1aXJlKFwieW91dHViZS1kbC1leGVjXCIpXG5jb25zdCB1cmxDaGVja2VyID0gbmV3IFJlZ0V4cChcIl4oaHR0cHxodHRwcyk6Ly9cIilcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBcIkdFVFwiKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pXG4gIH1cblxuICBjb25zdCB7IHZpZGVvVXJsIH0gPSByZXEucXVlcnlcblxuICBpZiAodXJsQ2hlY2tlci50ZXN0KHZpZGVvVXJsKSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHVybCwgdGl0bGUsIHRodW1ibmFpbCwgZm9ybWF0cyB9ID0gYXdhaXQgeW91dHViZWRsKHZpZGVvVXJsLCB7XG4gICAgICAgIGR1bXBTaW5nbGVKc29uOiB0cnVlLFxuICAgICAgICBub1dhcm5pbmdzOiB0cnVlLFxuICAgICAgICBub0NhbGxIb21lOiB0cnVlLFxuICAgICAgICBub0NoZWNrQ2VydGlmaWNhdGU6IHRydWUsXG4gICAgICAgIHByZWZlckZyZWVGb3JtYXRzOiB0cnVlLFxuICAgICAgICB5b3V0dWJlU2tpcERhc2hNYW5pZmVzdDogdHJ1ZSxcbiAgICAgICAgcmVmZXJlcjogdmlkZW9VcmwsXG4gICAgICAgIHNvY2tldFRpbWVvdXQ6IDEwLFxuICAgICAgfSlcblxuICAgICAgY29uc3QgZmlsZVVybCA9XG4gICAgICAgIHVybCB8fFxuICAgICAgICBmb3JtYXRzXG4gICAgICAgICAgLmZpbHRlcigoZm9ybWF0KSA9PiBmb3JtYXQudmNvZGVjICE9PSBcIm5vbmVcIiAmJiBmb3JtYXQuYWNvZGVjICE9PSBcIm5vbmVcIilcbiAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgLnBvcCgpLnVybFxuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBmaWxlVXJsLCB0aHVtYm5haWwsIHRpdGxlIH0pXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAuanNvbih7IGVycm9yOiBcIlVuYWJsZSB0byBkb3dubG9hZCB2aWRlby4gUGxlYXNlIHRyeSBhIGRpZmZlcmVudCB1cmwuXCIgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIGVycm9yOiBcIkludmFsaWQgVXJsLiBNYWtlIHN1cmUgeW91ciBsaW5rIHN0YXJ0cyB3aXRoICdodHRwOi8vIG9yIGh0dHBzOi8vJ1wiLFxuICAgIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ5b3V0dWJlZGwiLCJyZXF1aXJlIiwidXJsQ2hlY2tlciIsIlJlZ0V4cCIsImRvd25sb2FkZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJ2aWRlb1VybCIsInF1ZXJ5IiwidGVzdCIsInVybCIsInRpdGxlIiwidGh1bWJuYWlsIiwiZm9ybWF0cyIsImR1bXBTaW5nbGVKc29uIiwibm9XYXJuaW5ncyIsIm5vQ2FsbEhvbWUiLCJub0NoZWNrQ2VydGlmaWNhdGUiLCJwcmVmZXJGcmVlRm9ybWF0cyIsInlvdXR1YmVTa2lwRGFzaE1hbmlmZXN0IiwicmVmZXJlciIsInNvY2tldFRpbWVvdXQiLCJmaWxlVXJsIiwiZmlsdGVyIiwiZm9ybWF0IiwidmNvZGVjIiwiYWNvZGVjIiwic29ydCIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/downloader.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/downloader.js"));
module.exports = __webpack_exports__;

})();