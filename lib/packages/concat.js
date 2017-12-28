Array.prototype.concats = function() {
	
	let concatValue = Object.values(arguments).compact();

	let newConCatValue = [];

	concatValue.forEach(function(item) {
		item.compact().forEach(function(litem) {
			newConCatValue.push(litem) ;
		})
	})
	return this.compact().concat(newConCatValue);
}