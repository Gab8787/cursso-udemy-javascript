const data = new Date()
const dia = data.getDate()
const mes = data.getMonth()
const ano = data.getFullYear()
const hora = data.getHours()
const minutos = data.getMinutes()

let diaTexto;
let mesTexto
if(dia === 0){
    diaTexto = 'Domingo'
}else if(dia === 1){
    diaTexto = 'Segunda-feira'
}else if(dia === 2){
    diaTexto = 'Terça-feira'
}else if(dia === 3 ){
    diaTexto = 'Quarta-feira'
}else if(dia === 4){
    diaTexto = 'Quinta-feira'
}else if (dia === 5 ){
    diaTexto = 'Sexta-feira'
}else if(dia === 6){
    diaTexto = 'Sabado'
}

if(mes === 1){
    mesTexto = 'Janeiro'
}else if (mes === 2){
    mesTexto = 'Fevereiro'
}else if (mes === 3){
    mesTexto = 'Março'
}
else if (mes === 4){
    mesTexto = 'Abril'
}
else if (mes === 5){
    mesTexto = 'Maio'
}
else if (mes === 6){
    mesTexto = 'Junho'
}
else if (mes === 7){
    mesTexto = 'julho'
}
else if (mes === 8){
    mesTexto = 'Agosto'
}
else if (mes === 9){
    mesTexto = 'Setembro'
}
else if (mes === 10){
    mesTexto = 'Outubro'
}
else if (mes === 11){
    mesTexto = 'Novembro'
}
else if (mes === 12){
    mesTexto = 'Dezembro'
}


document.querySelector('#place').innerHTML = `<p>${diaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minutos} </p>`


