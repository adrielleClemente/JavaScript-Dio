function minhaArr (lista, number){
    try{
        if(!lista && !number) throw new ReferenceError("Envie os parâmetros");

        if(typeof lista !== 'object') throw new TypeError("O array precisa ser do tipo Object");
    
        if(typeof number !== 'number') throw new TypeError("O segundo parâmetro precisa ser do tipo Number");
    
        if (lista.length !== number) throw new RangeError("Tamanho inválido");

        return lista;

    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Esse erro é um ReferenceError!')
            console.log(e.message)
        }
            else if(e instanceof TypeError){
            console.log('Esse erro é um TypeError!')
            console.log(e.message)
        }
            else if(e instanceof RangeError){
            console.log('Esse erro é um RangeError!')
            console.log(e.message)
        }
            else{
            console.log('Ocorreu um erro inesperado.'+ e)
        }
    }
}
console.log(minhaArr([3,6],1))