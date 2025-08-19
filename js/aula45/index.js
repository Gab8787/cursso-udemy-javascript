function RetornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando instancia de date')
    }

    if(!data){
    data = new Date()
}

return data.toLocaleTimeString('pt-BR', {

})
}
try{
const data = new Date('01-01-1970 12:45:55')
const horas = RetornaHora(data)
console.log(horas)}
catch(e){


}finally{
    console.log('tenha um bom dia')
}


