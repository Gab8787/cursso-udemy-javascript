function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break
    case 1:
        diaSemanaTexto = 'Segunda'
        break
    case 2:
        diaSemanaTexto = 'Terça'
    case 3:
        diaSemanaTexto = 'Quarta'
        break
    case 4:
        diaSemanaTexto = 'Quinta'
        break
    case 5:
        diaSemanaTexto = 'Sexta'
        break
    case 6:
        diaSemanaTexto = 'Sabado'
        break
    default:
        diaSemanaTexto = ''
        break
}
return diaSemanaTexto
}

const data = new Date('1987-04-21 00:00:00')
const diaSemana = data.getDay()
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
console.log(diaSemana, diaSemanaTexto)
















//if (diaSemana === 0){
    //diaSemana = 'Domingo'
//}
//else if (diaSemana === 1){
    //diaSemanaTexto = 'Segunda'
//}
//else if (diaSemana === 2){
    //diaSemanaTexto = 'Terça'}

    //else if (diaSemana === 3){
    //diaSemanaTexto = 'Quarta'}

    //else if (diaSemana === 4){
    //diaSemanaTexto = 'Quinta'}

    //else if (diaSemana === 5){
    //diaSemanaTexto = 'Sexta'}

    //else if (diaSemana === 6){
   // diaSemanaTexto = 'Sabado'}

    //else{
        //diaSemana = ''
    //}
//console.log(diaSemana, diaSemanaTexto)