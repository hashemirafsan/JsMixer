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
/******/ 	__webpack_require__.p = "/dist/src/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// require('../node_modules/mustache/mustache.min.js');

function jsMixer() {
	/**
  * properties
  */
	this.__DOM__ = '';
	this.__Array__ = [];
	this.__STR__ = '';
	/**
  * Method
  */

	/**
  * Get ID
  * @param  {[type]} id [description]
  * @return {[type]}    [description]
  */
	this.getId = function (idName) {
		this.__DOM__ = document.getElementById(idName);
		return this;
	};

	this.getClass = function (className) {
		this.__DOM__ = document.getElementsByClassName(className);
		return this;
	};

	this.getTag = function (tagName) {
		this.__DOM__ = document.getElementsByTagName(tagName);
		return this;
	};

	this.selectAll = function (expr) {
		this.__DOM__ = document.querySelectorAll(expr);
		return this;
	};

	this.selectFirst = function (expr) {
		this.__DOM__ = document.querySelector(expr);
		return this;
	};

	this.insertText = function (txt) {
		return this.__DOM__.innerHTML = txt;
		return this;
	};

	this.draggAble = function () {
		var len = this.__DOM__.children.length;

		for (var i = 0; i < len; i++) {
			this.__DOM__.children[i].draggable = true;
			this.__DOM__.children[i].ondragstart = this.start;
		}

		return this;
	};

	this.start = function (e) {
		console.log(e);
	};

	this.hide = function () {
		var len = this.__DOM__.length;

		if (len && this.__DOM__) {
			for (var i = 0; i < len; i++) {
				this.__DOM__[i].hidden = true;
			}
		} else if (this.__DOM__) {
			this.__DOM__.hidden = true;
		}

		return this;
	};

	this.show = function () {
		var len = this.__DOM__.length;

		if (len && this.__DOM__) {
			for (var i = 0; i < len; i++) {
				this.__DOM__[i].hidden = false;
			}
		} else if (this.__DOM__) {
			this.__DOM__.hidden = false;
		}

		return this;
	};

	this.toggle = function () {
		var len = this.__DOM__.length;

		if (len && this.__DOM__) {
			for (var i = 0; i < len; i++) {
				this.__DOM__[i].hidden = !this.__DOM__[i].hidden;
			}
		} else if (this.__DOM__) {
			this.__DOM__.hidden = !this.__DOM__.hidden;
		}

		return this;
	};

	/**
  * Event
  */
	this.on = function (type, fn) {
		return this.__DOM__.addEventListener(type, fn);
	};
	this.click = function (fn) {
		return this.__DOM__.addEventListener('click', fn);
	};

	/**
  * Array
  */
	this.Arr = function (arr) {
		this.__Array__ = arr;
		return this;
	};

	this.Str = function (str) {
		this.__STR__ = str;
		return this;
	};

	/**
  * template instace
  */
	this.instance = function (obj) {

		var make = _extends({}, obj.data(), obj.methods, obj.computed, {
			get template() {
				return obj.template;
			}
		});

		var computed = Object.keys(obj.computed);

		var watch = Object.keys(obj.watch);

		watch.forEach(function (item) {
			obj.watch[item].bind(make);
		});

		var methods = Object.keys(obj.methods);

		computed.forEach(function (item) {
			obj.computed[item].bind(make);
		});

		methods.forEach(function (item) {
			obj.methods[item].bind(make);
		});

		var startNode = 1;

		var nodes = document.createElement('div');

		nodes.setAttribute('id', 'mixer-' + startNode);

		startNode++;

		nodes.innerHTML = make.template;

		var nodeChild = nodes.children;

		var $scope = {};

		var $model = [];

		var modelName = [];

		for (var i = 0; i < nodeChild.length; i++) {

			var id = 'mixer-' + startNode++;

			nodeChild[i].setAttribute('class', id);

			var nodesChildren = nodeChild[i].attributes;

			var nodesChildrenKeys = Object.values(nodesChildren);

			var getModel = nodesChildrenKeys.map(function (item) {
				return item.name == 'model';
			})[0];

			if (getModel) {

				$model.push(id);

				modelName.push(nodesChildren[0].nodeValue);

				nodeChild[i].value = make[nodesChildren[0].nodeValue];
			}
		}

		this.__DOM__.appendChild(nodes);

		$model.forEach(function (item) {
			var elements = document.getElementsByClassName(item);

			for (var i = 0; i < elements.length; i++) {
				elements[i].onkeyup = function (evt) {
					for (var i = 0; i < $model.length; i++) {
						var cpEelements = document.getElementsByClassName($model[i]);
						make[modelName[i]] = evt.target.value;
						cpEelements[0].value = make[modelName[i]];
						console.log(make);
					}
				};
			}
		});

		var b = obj.mounted.bind(make);

		b();

		return this;
	};
}

/**
 * Prototype of jsMixer
 */
jsMixer.prototype = {
	chunk: function chunk(piece) {

		var chunckArray = [];

		if (piece) {
			var arrayLength = this.__Array__.length;

			var chunkSubArray = [];

			this.__Array__.forEach(function (item, key) {
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
			chunckArray = this.__Array__;
		}

		return chunckArray;
	},
	capitalize: function capitalize() {
		return this.__STR__.charAt(0).toUpperCase() + this.__STR__.slice(1);
	}

	/**
  * Make Instance
  */
};window._$ = new jsMixer();

/***/ })
/******/ ]);
//# sourceMappingURL=mixed.js.map