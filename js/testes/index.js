function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo= () =>{
        console.log('sou um metodo')
    }
}

const p1 = new Pessoa('Luiz', 'Gabriel')
const p2 = new Pessoa('Maria', 'Joana')
