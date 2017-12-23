/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chunk = __webpack_require__(1);
var compact = __webpack_require__(2);
var concats = __webpack_require__(3);
var drop = __webpack_require__(4);

module.exports = {
	chunk: chunk,
	compact: compact,
	concats: concats,
	drop: drop
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Array.prototype.chunk = function (piece) {
	var chunckArray = [];

	if (piece) {
		var arrayLength = this.length;

		var chunkSubArray = [];

		this.forEach(function (item, key) {
			chunkSubArray.push(item);

			if (chunkSubArray.length == piece) {
				chunckArray.push(chunkSubArray);
				chunkSubArray = [];
			}
			if (key + 1 == arrayLength && chunkSubArray.length > 0) {
				chunckArray.push(chunkSubArray);
				chunkSubArray = [];
			}
		});
	} else {
		chunckArray = this;
	}

	return chunckArray;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Array.prototype.compact = function () {
	var compactArray = [];

	this.forEach(function (item) {
		item ? compactArray.push(item) : null;
	});

	return compactArray;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Array.prototype.concats = function () {

	var concatValue = Object.values(arguments).compact();

	var newConCatValue = [];

	concatValue.forEach(function (item) {
		item.compact().forEach(function (litem) {
			newConCatValue.push(litem);
		});
	});
	return this.compact().concat(newConCatValue);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Array.prototype.drop = function () {
	var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	if (right) {
		return this.slice(0, this.length - start);
	}
	return this.slice(start);
};

/***/ })
/******/ ]);
//# sourceMappingURL=mixed.js.map