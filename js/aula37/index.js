const pessoa  = {
    nome : 'Sobrenome',
    sobrenome: 'oliveira'
}
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

//for classico- com array interavel
//for in- retorna indice ou chaves
//for of- retorna o valor
//for (let i in nome){
//    console.log(nome[i])
//}
//const nomes = ['luiz', 'Otavio', 'Henrique']

//for(let i in nomes){
//    console.log(nomes[i])
//}
//console.log('############')
//for(let valor of nomes){
//    console.log(valor)
//}


//nomes.forEach(function (el, indice){
//    console.log(el,indice)
//})