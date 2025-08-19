// escreva uma função que receba 2 numeros e retorne o maior dele
    function recebeNum(x, y){
        let maior = x > y ? console.log(`o numero ${x} é maior`) : console.log(`o numero ${y} é maior`)
        return maior
    }
recebeNum(10,11)