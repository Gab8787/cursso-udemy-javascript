function zeroaEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroaEsquerda(data.getDate())
    const mes = zeroaEsquerda(data.getMonth() + 1)
    const ano = zeroaEsquerda(data.getFullYear())
    const hora = zeroaEsquerda(data.getHours())
    const min = zeroaEsquerda(data.getMinutes())
    const sec = zeroaEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano}/${hora}:${min}:${sec}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)
