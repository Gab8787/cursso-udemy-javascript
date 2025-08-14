
function envia(){
const peso = parseFloat(document.querySelector("#peso").value)
const altura = parseFloat( document.querySelector("#altura").value)
const imc = peso / (altura * altura)
let exam = ''
if(imc <= 18.5){
    exam = 'Abaixo do peso'
}else if(imc > 18.5 && imc <= 24.9){
    exam = 'Peso normal'
}else if (imc > 24.9 && imc < 29.9){
    exam = 'Acima do peso'
}else if(imc > 30 && imc < 35.9){
    exam = 'Obesidade grau 1'
}else if(imc > 35.9 && imc < 40){
exam = 'Obesidade grau 2'}
else if(imc > 40){
exam = 'Obesidade grau 3'}

document.querySelector("#resultado").innerHTML = `<p> Seu imc foi de  ${imc.toFixed(2)} seu resultado foi:  ${exam}</p>`;

}
