const lista = [
    {
        nome: 'Brócolis',
        valor: 11,
    },
    {
        nome: 'Detergente',
        valor: 2,
    },
    {
        nome: 'Arroz',
        valor: 6,
    },
    {
        nome: 'Vinho',
        valor: 23,
    },
];
const saldo = 100;
function calcula(saldo,lista){
    return lista.reduce(function(anterior,atual,index){
        console.log('Rodada',index + 1);//acumulador
        console.log({anterior});
        console.log({atual});
        return anterior -atual.valor;
    },saldo);
}
console.log(calcula(saldo,lista));