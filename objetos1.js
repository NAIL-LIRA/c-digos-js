const nome={
    nome: "nailson",
    idade: 37,
    nascimento: "10/02/1988",
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}
nome.altura=1.71 //incremento de uma chave valor a const nome

nome.descrever()

const atributo ="nascimento"

console.log(nome[atributo])
