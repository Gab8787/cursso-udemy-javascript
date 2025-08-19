function soma(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('x e y precisam ser numeros')
    }
    return a + b
}
try{
console.log(soma('1', 2))
}
catch(e){
    console.log(e)}