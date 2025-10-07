/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescripitor(o, 'prop')
...(spread)

// ja vimos 
Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperties(define varias propriedades)
Object.defineProperty(defina uma propriedade)

*/

const produto = {nome: 'Produto', preco: 1.8}
console.log(Object.entries(produto))

for(let entry of Object.entries(produto)){
    console.log(entry)
}