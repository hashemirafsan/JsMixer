require('../src/index.js');

let tes = [1,false,0,'',6,7,8];

let ca = [1,2,3,4,5];

let a = [
	{
		id: 1
	},
	{
		id: 2
	}
]

var as = a.remove(function(n) {
    return n.id == 1;
})

console.log(as)

