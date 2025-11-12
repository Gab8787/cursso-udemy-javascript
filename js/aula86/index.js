function rand(min, max){
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function espera(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject()
        setTimeout(()=>{
        resolve(msg)
        }, tempo)
    })
}
espera('Frase1', rand(1,3))
.then(resposta =>{
    console.log(resposta)
    return espera(2222, rand(1,3))
})
.then(resposta =>{
    console.log(resposta)
    return espera('Frase 3', rand(1,3))
})

.then(resposta=>{
    console.log(resposta)
})
