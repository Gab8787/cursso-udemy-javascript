const falar = {
Falar(){
            
            console.log(`${this.nome} esta falando`)
        }
}

const comer = {
comer(){
            
            console.log(`${this.nome} esta comendo`)
        }

}

const beber = {
beber(){
            
            console.log(`${this.nome} esta bebendo`)
        }
}
const pessoaPrototype= {...falar, ...comer,...beber}

function criaPessoa(nome, sobrenome){
return Object.create(pessoaPrototype),{
    nome: {value: nome},
    sobrenome: {value: sobrenome}
}}

const p1 = criaPessoa('Luiz', 'Otavio')
const p2 = criaPessoa ('maria', 'julia')
console.log(p2.falar())
