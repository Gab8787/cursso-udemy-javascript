//define property - define properties
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
            throw new TypeError('nao é um numero')

            }


        }

    });

}

function criaProduto(){
    return{
        get nome (){
            return nome
        },
        set nome (valor){
            nome =  valor

        }
    }
}

const p2 = criaProduto('camiseta')
p2.nome = 'qualquer coisa'
console.log(p2.nome)
