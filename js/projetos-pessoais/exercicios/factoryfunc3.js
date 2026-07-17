function criaCarro(marca, modelo, ano){
    return{
        marca,
        modelo,
        ano,
        ligado:false,

        ligar(){
            if(this.ligado === true){
                console.log('ja esta ligado')
            }else{
                this.ligado = true
                console.log('carro ligando')

            }
        },
        desligar(){
            if(this.ligado === false){
                console.log('ja esta desligado')
            }else{
                this.ligado = false
                console.log('carro desligando')

            }

        },

        mostraInformacoes(){
            console.log(`marca: ${this.marca}`)
            console.log(`modelo: ${this.modelo}`)
            console.log(`ano: ${this.ano}`)
            console.log(`ligado: ${this.ligado ? 'sim' : 'nao'}`)
        }

    }
}
const c1 = criaCarro('honda', 'civic', 2010)

c1.mostraInformacoes()


