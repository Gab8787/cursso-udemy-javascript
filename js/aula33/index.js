const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 12,
    endereco:{
        rua: 'av brasil',
        numero: 320
    }
}
const{ nome, ...resto} = pessoa

console.log(resto)