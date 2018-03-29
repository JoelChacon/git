let person = {
	name: "Joel",
	age: 31,
	hairColor: "brown",
	funky() {
		console.log(`${this.name} is ${this.age} years of age and has ${this.hairColor} hair`);
	}
}

person.funky();