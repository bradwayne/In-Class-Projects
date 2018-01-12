function Character(name, profession, gender, age, strength, hp) {

	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hp = hp;
}

var Jennifer = new Character('Jennifer', 'office manager', 'F', 32, 1000, 1000);
var Chris = new Character('Chris', 'mechanic', 'M', 28, 2800, 780);

console.log(Jennifer);
console.log('-----------------------');
console.log(Chris);