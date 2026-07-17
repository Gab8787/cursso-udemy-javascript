fetch('https://jsonplaceholder.typicode.com/users/3')
.then(resposta => resposta.json())
.then(json => carregaElementosNapagina(json))

function carregaElementosNapagina(json){
    for(let pessoa of json){
        console.log(pessoa.id)
    }
}