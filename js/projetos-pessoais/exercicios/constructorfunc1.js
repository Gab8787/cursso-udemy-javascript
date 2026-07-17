function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade

    this.apresentar = () =>{
        console.log(`ola, meu nome é ${this.nome}, eu tenho ${this.idade} anos`)

    }

}

const p1 = new Pessoa('joao', 18)

p1.apresentar()