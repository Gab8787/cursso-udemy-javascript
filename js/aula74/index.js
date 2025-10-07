//construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome  = nome
    this.sobrenome =sobrenome
    this.nomecompleto=()=> this.nome + ' ' + this.sobrenome
}
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}


//instancia
const p1 = new Pessoa('Luiz', 'O.') // < - Pessoa Função construtora
const p2 = new Pessoa('Maria', 'A.') // < - Pessoa Função construtora

console.dir(p1)
console.dir(p2)