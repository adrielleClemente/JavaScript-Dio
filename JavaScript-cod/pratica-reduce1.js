function somaNums(lista){
    return lista.reduce(function(anterior, atual){
        console.log({anterior});
        console.log({atual});
        return anterior + atual;
    },5)
}

const lista =[1,2];
console.log(somaNums(lista))
//{ anterior: 5 }
//{ atual: 1 }
//{ anterior: 6 }
//{ atual: 2 }
//soma: 8