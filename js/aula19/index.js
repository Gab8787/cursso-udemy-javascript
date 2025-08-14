/*
Primitivos (imutaveis) - String, number, boolean, undefined, null (bigint,symbol) - valores copiados
referencia (mutavel) - array, object, functions - passados por referencia 

*/ 

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

const b = {...a}
a.nome = 'joao'
console.log(b)