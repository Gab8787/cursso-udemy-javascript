
//sueper classe
function Conta(agencia, conta, saldo){
this.agencia = agencia
this.conta = conta
this.saldo = saldo}


Conta.prototype.sacar = function(valor){
if(valor > this.saldo){
    console.log(`saldo insuficiente ${this.saldo}`)
    this.verSaldo()
    return
}
this.saldo -= valor
this.verSaldo()
}


Conta.prototype.depositar = function(valor){
this.saldo += valor
this.verSaldo()
}

Conta.prototype.verSaldo = function(){
console.log(`ag/c: ${this.agencia}---  ${this.conta}---  ${this.saldo}`)
}

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function(valor){
if(valor > (this.saldo + this.limite)){
    console.log(`saldo insuficiente ${this.saldo}`)
    return
}
this.saldo -= valor
this.verSaldo()

}


function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP



const contacc = new CC(11, 22, 0, 100)
const contacorr = new CP(11, 22, 33)

contacc.depositar(10)
contacc.sacar(110)

