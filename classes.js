//melhoramento do arquivo objetos1.js

class pessoa{//aqui é uma classe, que é uma definição do que uma pessoa deve ter.
    nome;
    idade;

    constructor(){
        this.nome="teste"
        this.idade=20
    }
descrever(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }    
}

const nailson =new pessoa()//aqui é uma instância da classe, uma ocorrência de uma pessoa.
    nailson.nome= "nailson l silva";
    nailson.idade= 37
const kalel =new pessoa()
kalel.nome= "Elon Kalel";
kalel.idade= 5

kalel.descrever()//chamando a função