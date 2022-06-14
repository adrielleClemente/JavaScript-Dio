function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
//criar o objeto//
const pessoa1 = {
    nome: "Maria",
    idade: 30
};
const pessoa2 = {
    nome: "Carla",
    idade: 26
};
const animal = {
    nome: "Menina",
    idade: 5,
    raca: "Galga"
};

console.log(calculaIdade.call(animal,7))//usando método call
//Daqui a 7 anos, Menina terá 12 anos de idade.

console.log(calculaIdade.apply(animal,[7]))//usando método apply
//Daqui a 7 anos, Menina terá 12 anos de idade.
