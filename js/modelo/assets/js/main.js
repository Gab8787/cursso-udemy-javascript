class JogoTerror{
    constructor(nome){
        this.nome = nome
        this.idade = 16

    }

    verificaIdade(valor){
        if(valor < this.idade){
            console.log('nao tem idade suficiente para jogar')
        }else{
            console.log('boa jogatina, voce tem a idade suficiente ')
        }

    }
}

class FilmeTerror extends JogoTerror{}

const p1 = new JogoTerror('dead')
const p2 = new FilmeTerror('jaison')

p1.verificaIdade(15)
p2.verificaIdade(16)

console.log(p2)