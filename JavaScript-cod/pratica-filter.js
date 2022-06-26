function impares(lista){
    return lista.filter(callback);
}

function callback(item){
    return item % 2 !==0;
}

const MinhaLista = [2, 5, 9, 88, 10, 30,7];

console.log('Os números ípares são: ',impares(MinhaLista))
//Os números ípares são:  [ 5, 9, 7 ]