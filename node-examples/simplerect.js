var rect = {
	perimeter: function(x, y){
		return (2*(x+y));
	},
	area: function(x, y){
		return (x*y);
	}
};

function solveRect(l, b){

	console.log("Solving : l = " + l + " and b = " + b);
	if(l < 0 || b < 0) {
		console.log("Error < 0");
	}
	else{
		console.log("Area : " + rect.area(l,b));
		console.log("Perimeter : " + rect.perimeter(l,b));
	}
}

solveRect(2,4);
solveRect(3,5);
solveRect(-2,4);
