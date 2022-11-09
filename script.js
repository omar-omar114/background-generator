// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

const object = {
	a: function(){
		console.log(this)
	}
}

class Player{
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`hi i'm ${this.name}, i'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type){
		super(name, type);
		console.log(this);
	}
	play() {
		console.log(`WEEEEEEE i'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Salim', 'Healer');
const wizard2 = new Wizard('Karim', 'fighter');