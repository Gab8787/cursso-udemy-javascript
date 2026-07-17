const btn = document.querySelectorAll('button')
const display = document.querySelector('#display')

btn.forEach(botao =>{
    botao.addEventListener('click', () =>{
        if(botao.textContent === "C"){
            display.textContent = "0"
        }else if(display.textContent === "0"){
            display.textContent = botao.textContent
        }else if(botao.textContent === "="){
            display.textContent = eval(display.textContent)
        }else if(botao.textContent === "<<"){
            display.textContent = display.textContent.slice(0, -1)
        }
        else{
            display.textContent += botao.textContent
        }
    })
})