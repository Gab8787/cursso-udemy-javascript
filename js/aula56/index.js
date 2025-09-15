//factory function(funçao de fabrica)
//construtctor function (funçao construtora)

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`

        },
        set nomeCompleto(val){
            val = val.split(' ')
            this.nome = val.shift()
            this.sobrenome = val.join(' ')
            console.log(val)
        },

        fala:function (assunto= 'falando sobre nada'){
            return`${this.nome} esta ${assunto}`
        },

        altura: a,
        peso: p,

        get imc(){
            const indice = this.peso / (this.altura**2)
            return indice.toFixed(2)

        }
    }
}

const p1 = criaPessoa('luiz', 'otavio', 1.8, 80)
p1.nomeCompleto = 'maria oliveira silva'
console.log(p1.nomeCompleto)
