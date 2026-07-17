fetch('pagina2.html')
.then(resposta=>{
    if(resposta.status !== 200)throw new Error('404')
        return resposta.text()
})
.then(html=> console.log(html))

.catch(e=> console.log(e))