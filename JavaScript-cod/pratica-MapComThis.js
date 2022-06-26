const lasanha = {
    value : 4,
}
const risoto = {
    value : 7,
}

function mapThis (lista,thisArg){
    return lista.map(function(itemLista){
        return itemLista * this.value;
    },thisArg);

}
const nums = [2, 5];

console.log ('Quando this é Lasanha', mapThis(nums, lasanha));
console.log ('Quando this é Risoto', mapThis(nums, risoto));