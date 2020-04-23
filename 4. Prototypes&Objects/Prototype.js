//NOT recommended BUT DO READ IT !!
function makeColor(r,g,b){
	
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	
	//method
	color.rgb = function(){
		const {r, g, b} = this;
		return `rgb(${r}, ${g}, ${b})`;
		// return `rgb(${this.r}, ${this.g}, ${this.b})`;
	};

	return color;

};


const firstColor  = makeColor(120, 120, 120);
firstColor.rgb(); //this has it's own rgb funtion
const secondColor = makeColor(140, 140, 140);
secondColor.rgb(); //this has it's own rgb function
//this doesn't make sense because we won't need a new copy 
//of the same funnction every time we make a new instance 
//this can be verified 
firstColor.rgb === secondColor.rgb //returns FALSE!

// what we should be using is the __proto__ 
// that way, all the objects will be reference ONE function
// defined on the prototype  

//BETTER WAY
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;	
}

Color.prototype.rgb = function(){
	const {r, g, b} = this;
	return `rgb(${r}, ${g}, ${b})`;
	// return `rgb(${this.r}, ${this.g}, ${this.b})`;
};

const col1 = new Color(40,50,60);
const col2 = new Color(60,70,80);
console.log(col1.rgb());
console.log(col2.rgb());
col1.rgb === col2.rgb //return TRUE!
//these two objects now have access to the same method but these 
//methods are now defined on the prototype 
