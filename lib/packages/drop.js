Array.prototype.drop = function(start = 0, right = false) {
	if ( right ) {
		return this.slice(0, this.length - start);
	}
	return this.slice(start);
}