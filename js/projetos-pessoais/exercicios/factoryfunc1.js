function criaPesssoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        falar(){
            return console.log(`${nome} esta falando oi`)
        }
    }

}

const p1 = criaPesssoa('petter', 'alderson', 11)

console.log(p1.falar())