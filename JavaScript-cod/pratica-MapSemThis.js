function mapSemThis(lista){
    return lista.map(function(item) {
        return item*9;
    });
}

const num = [2, 4, 6, 7, 8, 9];
console.log(mapSemThis(num));
//[ 18, 36, 54, 63, 72, 81 ]