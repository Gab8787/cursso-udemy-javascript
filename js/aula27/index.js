//const pontuacaoUsuario = 1000;
//if(pontuacaoUsuario >= 1000){
//console.log('Usuario VIP')
//}else{
  //  console.log('Usuário normal')
//}

const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
const corUsuario = null;
const corPadrao = corUsuario || 'preto'
console.log(nivelUsuario,corPadrao)