// produto -> aumento, desconto
//produto
// Camiseta = cor, Caneca = material

function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(val){
    this.preco += val
}
Produto.prototype.desconto = function(val){
    this.preco -= val
}
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
//Camiseta.prototype.constructor = Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual){
    this.preco += (this.preco*(percentual/100))

}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material 
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
const camiseta = new Camiseta('Regata', 7.5, 'Preta')

const caneca = new Caneca('Caneca', 13, 'plastico', 5)

console.log(caneca)