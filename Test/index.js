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
	this.getId = function(idName) {
		this.__DOM__ = document.getElementById(idName);
		return this;
	}

	this.getClass = function(className) {
		this.__DOM__ = document.getElementsByClassName(className)[0];
		return this;
	}

	this.getTag = function(tagName) {
		this.__DOM__ = document.getElementsByTagName(tagName);
		return this;
	}

	this.selectAll = function(expr) {
		this.__DOM__ = document.querySelectorAll(expr);
		return this;
	}

	this.selectFirst = function(expr) {
		this.__DOM__ = document.querySelector(expr);
		return this;
	}

	this.insertText = function(txt) {
		return this.__DOM__.innerHTML = txt;
		return this;
	}

	this.draggAble = function() {
		var len = this.__DOM__.children.length;

		for (var i = 0 ; i < len; i++) {
			this.__DOM__.children[i].draggable = true;
			this.__DOM__.children[i].ondragstart = this.start;
		}

		return this;
	}

	this.start = function(e) {
		console.log(e)
	}

	this.hide = function() {
		var len = this.__DOM__.length;

		if(len && this.__DOM__) {
			for(var i = 0 ; i < len; i++) {
				this.__DOM__[i].hidden = true;
			}
		} else if( this.__DOM__ ) {
			this.__DOM__.hidden = true;
		}

		return this;
	}

	this.show = function() {
		var len = this.__DOM__.length;

		if(len && this.__DOM__) {
			for(var i = 0 ; i < len; i++) {
				this.__DOM__[i].hidden = false;
			}
		} else if( this.__DOM__ ) {
			this.__DOM__.hidden = false;
		}

		return this;
	}

	this.toggle = function() {
		var len = this.__DOM__.length;

		if(len && this.__DOM__) {
			for(var i = 0 ; i < len; i++) {
				this.__DOM__[i].hidden = ! this.__DOM__[i].hidden;
			}
		} else if( this.__DOM__ ) {
			this.__DOM__.hidden = ! this.__DOM__.hidden;
		}

		return this;
	}

	/**
	 * Event
	 */
	this.on = function(type, fn) {
		return this.__DOM__.addEventListener(type, fn);
	}
	this.click = function(fn) {
		return this.__DOM__.addEventListener('click', fn);
	}

	/**
	 * Array
	 */
	this.Arr = function(arr) {
		this.__Array__ = arr;
		return this;
	}

	this.Str = function(str) {
		this.__STR__ = str;
		return this;
	}

	/**
	 * template instace
	 */
	this.instance = function(obj) {

		let make = {
			...obj.data(),
			...obj.methods,
			...obj.computed,
			get template() {
				return obj.template
			}
		}


		let computed = Object.keys(obj.computed)

		let methods = Object.keys(obj.methods);



		computed.forEach(function(item) {
			obj.computed[item].bind(make)
		})

		methods.forEach(function(item) {
			obj.methods[item].bind(make);
		})


		var b = obj.mounted.bind(make);
		//obj.methods.hello();
		// console.log()
		Mustache.parse(make.template);

		b();

		this.__DOM__.innerHTML = Mustache.render(make.template, make);
		
		return this;
	}
}

/**
 * Prototype of jsMixer
 */
jsMixer.prototype = {
	chunk: function(piece) {

		let chunckArray = [];

		if( piece ) {
			let arrayLength = this.__Array__.length;

			let chunkSubArray = [];

			this.__Array__.forEach((item, key) => {
				chunkSubArray.push(item)

				if(chunkSubArray.length == piece) {
					chunckArray.push(chunkSubArray);
					chunkSubArray = [];
				}
				if( key+1 == arrayLength && chunkSubArray.length > 0 ) {
					chunckArray.push(chunkSubArray);
					chunkSubArray = [];
				}
			})

		} else {
			chunckArray = this.__Array__;
		}

		return chunckArray;
	},
	capitalize: function() {
		return this.__STR__.charAt(0).toUpperCase() + this.__STR__.slice(1);
	}
}

/**
 * Make Instance
 */
var _$ = new jsMixer();

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

