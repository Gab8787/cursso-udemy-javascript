function criaHoraDosSegundos(segundos){
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR',{
        timeZone: 'GMT'
    
    })}


const relogio =  document.querySelector('.relogio')
const iniciar =  document.querySelector('.iniciar')
const pausar =  document.querySelector('.pausar')
const zerar =  document.querySelector('.zerar')
let segundos = 0
let timer;

function iniciaRelogio(){
timer = setInterval(function(){
    segundos++
    relogio.innerHTML = criaHoraDosSegundos(segundos)

},1000)
}


iniciar.addEventListener('click', function(){
    relogio.classList.remove('pausado')
    setInterval(timer)
    iniciaRelogio()
})



pausar.addEventListener('click', function (){
clearInterval(timer)
    relogio.classList.add('pausado')

})


zerar.addEventListener('click', function (){
relogio.innerHTML = '00:00:00'
})