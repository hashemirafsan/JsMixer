Array.prototype.compact = function() {
	let compactArray = [];

	this.forEach((item) => {
		item ? compactArray.push(item) : null;
	})

	return compactArray;
}