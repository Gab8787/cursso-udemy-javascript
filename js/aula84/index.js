class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    //Metodo de instância

    aumentarVolume(){
        this.volume+= 2
    }
    //Metodo de instância
    diminuirVolume(){
        this.volume-= 2
    }
    
    static trocaPilha(){
        console.log('okei, vou trocar')

    }
}

const c1 = new ControleRemoto('lg')

c1.aumentarVolume()
c1.aumentarVolume()
ControleRemoto.trocaPilha()
console.log(c1)