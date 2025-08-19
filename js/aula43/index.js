function recebeNum (x){
let analise1 = x % 3 === 0 && x % 5 === 0
let analise2 = x % 3 === 0
let analise3 = x % 5 === 0
let analise4 = x % 3 !== 0 && x % 5 !== 0
if(typeof x !== 'number') return numero;

if(analise1 == true){
    console.log('FizzBuzz')

}if(analise2 === true){
    console.log('Fizz')
} if(analise3 === true){
    console.log('Buzz')
} if(analise4 === true){
    console.log(x)
}

}

for(let i = 0; i <= 100; i++){
    console.log(i, recebeNum(i))
}

