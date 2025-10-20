class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, '')
        })

    }

    éSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfSemdigitos= this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemdigitos)
        const digito2 = this.geraDigito(cpfSemdigitos + digito1)
        
        this.novoCPF = cpfSemdigitos  + digito1 + digito2
    }
geraDigito(cpfParcial){
    let total = 0;
    let reverso = cpfParcial.length + 1;

    for(let numero of cpfParcial){
        total += reverso * Number(numero);
        reverso--;
    }

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}


  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.éSequencia()) return false;

    this.geraNovoCpf(); 

    console.log(this.novoCPF);
    return this.novoCPF === this.cpfLimpo;
}

}

const validacpf = new ValidaCPF('070.987.720-03')

if(validacpf.valida === true){
    console.log('CPF valido')
}else{
    console.log('cpf invalido')

}