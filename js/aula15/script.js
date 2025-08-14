const numero = Number(prompt ('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const notna = document.getElementById('notna');
const cima = document.getElementById('cima');
const baixo = document.getElementById('baixo');
const decimal = document.getElementById('decimal');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p>Raiz quadrada ${Math.sqrt(numero)}</p>`;
inteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
notna.innerHTML = `<p>é NaN :${isNaN(numero)}</p>`;
cima.innerHTML = `<p>Arredondando para baixo é ${Math.floor(numero)} </p>`;
baixo.innerHTML = `<p>Arredondando para cima é ${Math.ceil(numero)}</p>`;
decimal.innerHTML = `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;