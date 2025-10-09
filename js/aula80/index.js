const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]





const novaspessoas  = new Map()
for(const pessoa of pessoas ){
    const {id} = pessoa
    novaspessoas.set(id,{...pessoa})
}
novaspessoas.delete(2)
console.log(novaspessoas)

