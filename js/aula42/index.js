//Escreva uma função epaisagem que recebe dois argumentos, altura e largura de uma imagem retorne true se a imagem estiver no modo paisagem

function ePaisagem(altura, largura){
    let discover = altura > largura ? false : true
    return discover
}

const modo = ePaisagem(700, 600)
console.log(modo)