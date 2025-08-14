//for in -> le os indices ou chaves do objeto

const pessoa = {
    nome: 'luiz',
    sobrenome: 'araujo',
    idade: 13
};

for (let chhave in pessoa) {
    console.log(chhave, pessoa[chhave]); // tudo certo aqui!
}