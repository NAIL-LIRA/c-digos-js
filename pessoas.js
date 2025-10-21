class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome=nome;
        this.peso=peso;
        this.altura=altura;
    }
    calcularPeso(){
    return this.peso/Math.pow(this.altura,2)
    }


    classificarIMC() {
        const imc = this.calcularPeso(); // pega o valor do IMC

        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Acima do peso";
        } else if (imc >= 30 && imc < 40) {
            return "Obeso";
        } else {
            return "Obesidade mórbida";
        }
    }
    
}


const nailson =new Pessoas('nailson', 70,1.71);
console.log("O IMC de nailson é ", nailson.calcularPeso())
console.log(nailson.classificarIMC())