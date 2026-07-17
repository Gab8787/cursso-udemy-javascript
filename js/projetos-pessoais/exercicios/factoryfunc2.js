function criaPessoa(nome, idade){
    return{
        nome,
        idade,

        idadeDaqui5Anos(){
            console.log(`${this.nome} daqui 5 anos tera ${this.idade+5}`)
        },

        felizAniversario(){
            return this.idade++

        }

    }
}

const p1 = criaPessoa('GAB', 16)

p1.idadeDaqui5Anos()
p1.felizAniversario()
p1.idadeDaqui5Anos()