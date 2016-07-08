var rect = require('./rectangle-2');

function solveRect(l, b){

	console.log("Solving : l = " + l + " and b = " + b);
	
	rect(l,b, function(err, rectangle){
		if(err) {
			console.log(err);
		}
		else{
			console.log("Area : " + rectangle.area(l,b));
			console.log("Perimeter : " + rectangle.perimeter(l,b));
		}
	});
};

solveRect(2,4);
solveRect(3,5);
solveRect(-2,4);
