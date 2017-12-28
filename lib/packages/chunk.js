Array.prototype.chunk = function(piece) {
	let chunckArray = [];

	if( piece ) {
		let arrayLength = this.length;

		let chunkSubArray = [];

		this.forEach((item, key) => {
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
		chunckArray = this;
	}

	return chunckArray;
}