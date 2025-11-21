function rand(min,max){
    min*=1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){
            reject(false)
            return
        }
        setTimeout(()=>{
        resolve(msg.toUpperCase() + 'passou na promessa')
    
        }, tempo)

    })
}

//promise.all promisse.race promisse.resolve promisse.reject
const promisses = [
    esperaAi('Promisse 1', rand(1,5)),
    esperaAi('Promisse 2', rand(1,5)),
    esperaAi('Promisse 3', rand(1,5))
]

function baixaPagina(){
    const emCache = false
    if(emCache){
        return Promise.reject('Pagina em cache')
    }else{
        return esperaAi('Baixei pagina', 3000)
    }
}

baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina)
})
.catch(e => console.log(e))