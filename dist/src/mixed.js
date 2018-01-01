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


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.jsMixer = jsMixer;
__webpack_require__(1);

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

		Object.observe(make, function (changes) {});

		var computed = Object.keys(obj.computed);

		var methods = Object.keys(obj.methods);

		computed.forEach(function (item) {
			obj.computed[item].bind(make);
		});

		methods.forEach(function (item) {
			obj.methods[item].bind(make);
		});

		var b = obj.mounted.bind(make);
		//obj.methods.hello();
		// console.log()
		console.log(Mustache.parse(make.template));

		this.__DOM__.innerHTML = Mustache.render(make.template, make);
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
	// var _$ = new jsMixer();

	// var a = [1,2,3];
	// var b = [
	// 	{
	// 		id: 1
	// 	},
	// 	{
	// 		id: 3
	// 	}
	// ]

	/**
  * Testing
  */
	// _$.selectFirst('div#c').instance({
	// 	template: '<div>{{as}}</div><button id="asa">sub</button>',
	// 	data: function() {
	// 		return {
	// 			as: 'Hi'
	// 		}
	// 	},
	// 	computed: {
	// 		a() {
	// 			return this.as;
	// 		}
	// 	},
	// 	methods: {
	// 		hello(a) {
	// 			this.as = 'Hello';
	// 			console.log(this);
	// 		},
	// 		jan() {
	// 			console.log(this.a())
	// 		}
	// 	},
	// 	mounted() {
	// 		// this.hello('Hello');
	// 		// this.methods.hello('aa')
	// 		var self = this;
	// 		_$.getId('asa').on('click', function() {
	// 			self.hello('a');

	// 		})
	// 	}
	// });
	// console.log();

};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function defineMustache(global, factory) {
  if (( false ? "undefined" : _typeof(exports)) === "object" && exports && typeof exports.nodeName !== "string") {
    factory(exports);
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    global.Mustache = {};factory(global.Mustache);
  }
})(undefined, function mustacheFactory(mustache) {
  var objectToString = Object.prototype.toString;var isArray = Array.isArray || function isArrayPolyfill(object) {
    return objectToString.call(object) === "[object Array]";
  };function isFunction(object) {
    return typeof object === "function";
  }function typeStr(obj) {
    return isArray(obj) ? "array" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
  }function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }function hasProperty(obj, propName) {
    return obj != null && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && propName in obj;
  }var regExpTest = RegExp.prototype.test;function testRegExp(re, string) {
    return regExpTest.call(re, string);
  }var nonSpaceRe = /\S/;function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }var entityMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
      return entityMap[s];
    });
  }var whiteRe = /\s*/;var spaceRe = /\s+/;var equalsRe = /\s*=/;var curlyRe = /\s*\}/;var tagRe = /#|\^|\/|>|\{|&|=|!/;function parseTemplate(template, tags) {
    if (!template) return [];var sections = [];var tokens = [];var spaces = [];var hasTag = false;var nonSpace = false;function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          delete tokens[spaces.pop()];
        }
      } else {
        spaces = [];
      }hasTag = false;nonSpace = false;
    }var openingTagRe, closingTagRe, closingCurlyRe;function compileTags(tagsToCompile) {
      if (typeof tagsToCompile === "string") tagsToCompile = tagsToCompile.split(spaceRe, 2);if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error("Invalid tags: " + tagsToCompile);openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
    }compileTags(tags || mustache.tags);var scanner = new Scanner(template);var start, type, value, chr, token, openSection;while (!scanner.eos()) {
      start = scanner.pos;value = scanner.scanUntil(openingTagRe);if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }tokens.push(["text", chr, start, start + 1]);start += 1;if (chr === "\n") stripSpace();
        }
      }if (!scanner.scan(openingTagRe)) break;hasTag = true;type = scanner.scan(tagRe) || "name";scanner.scan(whiteRe);if (type === "=") {
        value = scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe);
      } else if (type === "{") {
        value = scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type = "&";
      } else {
        value = scanner.scanUntil(closingTagRe);
      }if (!scanner.scan(closingTagRe)) throw new Error("Unclosed tag at " + scanner.pos);token = [type, value, start, scanner.pos];tokens.push(token);if (type === "#" || type === "^") {
        sections.push(token);
      } else if (type === "/") {
        openSection = sections.pop();if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      } else if (type === "=") {
        compileTags(value);
      }
    }openSection = sections.pop();if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);return nestTokens(squashTokens(tokens));
  }function squashTokens(tokens) {
    var squashedTokens = [];var token, lastToken;for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];if (token) {
        if (token[0] === "text" && lastToken && lastToken[0] === "text") {
          lastToken[1] += token[1];lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);lastToken = token;
        }
      }
    }return squashedTokens;
  }function nestTokens(tokens) {
    var nestedTokens = [];var collector = nestedTokens;var sections = [];var token, section;for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];switch (token[0]) {case "#":case "^":
          collector.push(token);sections.push(token);collector = token[4] = [];break;case "/":
          section = sections.pop();section[5] = token[2];collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;break;default:
          collector.push(token);}
    }return nestedTokens;
  }function Scanner(string) {
    this.string = string;this.tail = string;this.pos = 0;
  }Scanner.prototype.eos = function eos() {
    return this.tail === "";
  };Scanner.prototype.scan = function scan(re) {
    var match = this.tail.match(re);if (!match || match.index !== 0) return "";var string = match[0];this.tail = this.tail.substring(string.length);this.pos += string.length;return string;
  };Scanner.prototype.scanUntil = function scanUntil(re) {
    var index = this.tail.search(re),
        match;switch (index) {case -1:
        match = this.tail;this.tail = "";break;case 0:
        match = "";break;default:
        match = this.tail.substring(0, index);this.tail = this.tail.substring(index);}this.pos += match.length;return match;
  };function Context(view, parentContext) {
    this.view = view;this.cache = { ".": this.view };this.parent = parentContext;
  }Context.prototype.push = function push(view) {
    return new Context(view, this);
  };Context.prototype.lookup = function lookup(name) {
    var cache = this.cache;var value;if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this,
          names,
          index,
          lookupHit = false;while (context) {
        if (name.indexOf(".") > 0) {
          value = context.view;names = name.split(".");index = 0;while (value != null && index < names.length) {
            if (index === names.length - 1) lookupHit = hasProperty(value, names[index]);value = value[names[index++]];
          }
        } else {
          value = context.view[name];lookupHit = hasProperty(context.view, name);
        }if (lookupHit) break;context = context.parent;
      }cache[name] = value;
    }if (isFunction(value)) value = value.call(this.view);return value;
  };function Writer() {
    this.cache = {};
  }Writer.prototype.clearCache = function clearCache() {
    this.cache = {};
  };Writer.prototype.parse = function parse(template, tags) {
    var cache = this.cache;var tokens = cache[template];if (tokens == null) tokens = cache[template] = parseTemplate(template, tags);return tokens;
  };Writer.prototype.render = function render(template, view, partials) {
    var tokens = this.parse(template);var context = view instanceof Context ? view : new Context(view);return this.renderTokens(tokens, context, partials, template);
  };Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
    var buffer = "";var token, symbol, value;for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;token = tokens[i];symbol = token[0];if (symbol === "#") value = this.renderSection(token, context, partials, originalTemplate);else if (symbol === "^") value = this.renderInverted(token, context, partials, originalTemplate);else if (symbol === ">") value = this.renderPartial(token, context, partials, originalTemplate);else if (symbol === "&") value = this.unescapedValue(token, context);else if (symbol === "name") value = this.escapedValue(token, context);else if (symbol === "text") value = this.rawValue(token);if (value !== undefined) buffer += value;
    }return buffer;
  };Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
    var self = this;var buffer = "";var value = context.lookup(token[1]);function subRender(template) {
      return self.render(template, context, partials);
    }if (!value) return;if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" || typeof value === "string" || typeof value === "number") {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== "string") throw new Error("Cannot use higher-order sections without the original template");value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);if (value != null) buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }return buffer;
  };Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);if (!value || isArray(value) && value.length === 0) return this.renderTokens(token[4], context, partials, originalTemplate);
  };Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
    if (!partials) return;var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];if (value != null) return this.renderTokens(this.parse(value), context, partials, value);
  };Writer.prototype.unescapedValue = function unescapedValue(token, context) {
    var value = context.lookup(token[1]);if (value != null) return value;
  };Writer.prototype.escapedValue = function escapedValue(token, context) {
    var value = context.lookup(token[1]);if (value != null) return mustache.escape(value);
  };Writer.prototype.rawValue = function rawValue(token) {
    return token[1];
  };mustache.name = "mustache.js";mustache.version = "2.3.0";mustache.tags = ["{{", "}}"];var defaultWriter = new Writer();mustache.clearCache = function clearCache() {
    return defaultWriter.clearCache();
  };mustache.parse = function parse(template, tags) {
    return defaultWriter.parse(template, tags);
  };mustache.render = function render(template, view, partials) {
    if (typeof template !== "string") {
      throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + "argument for mustache#render(template, view, partials)");
    }return defaultWriter.render(template, view, partials);
  };mustache.to_html = function to_html(template, view, partials, send) {
    var result = mustache.render(template, view, partials);if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };mustache.escape = escapeHtml;mustache.Scanner = Scanner;mustache.Context = Context;mustache.Writer = Writer;return mustache;
});

/***/ })
/******/ ]);
//# sourceMappingURL=mixed.js.map