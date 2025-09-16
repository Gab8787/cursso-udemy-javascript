// função construtora -> objetos
// função fabrica -> objetos 
// construtora ->Pessoa (new)
function Pessoa(nome, sobrenome){
    const ID = 123456
    const metodoInterno = () =>{
        
    }
    this.nome = nome; 
    this.sobrenome = sobrenome;
    this.metodo = () =>{
        console.log('sou um metodo')
    }
}

const p1 = new Pessoa('Luiz', 'Otavio')
const p2 = new Pessoa('Maria', 'Oliveira')
p1.metodo()