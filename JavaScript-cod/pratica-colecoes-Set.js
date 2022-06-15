const meuArray = [30,30,40,5,223,2049,3034,5]

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return mySet;
}
console.log(valoresUnicos(meuArray));
//Set(6) { 30, 40, 5, 223, 2049, 3034 } retorna um Set
//Para retornar um array faça:

const meuArray = [30,30,40,5,223,2049,3034,5]

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}
console.log(valoresUnicos(meuArray));
//[ 30, 40, 5, 223, 2049, 3034 ] - novo array