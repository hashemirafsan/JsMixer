Array.prototype.nthWith = function(key, value) {
	let nthWithKey = -1;
	this.forEach(function(item, index) {
		 if(item[key] == value){
		 	nthWithKey = index;
		 }
	})
	return nthWithKey;
}