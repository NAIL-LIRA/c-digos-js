class Carro{
    marca//=tesla;
    cor//=prata;
    kmPorLitro//=15;

    constructor(marca,cor,kmPorLitro){
        this.marca=marca;
        this.cor=cor;
        this.kmPorLitro=kmPorLitro;
    }

    calcularGasto(distancia,precoCombustivel){
        return distancia*this.kmPorLitro*precoCombustivel;
    }
}
const model_1 = new Carro('tesla','prata',1/15);
const palio=new Carro('fiat','vermelho',1/10)
//console.log(model_1)

console.log(model_1.calcularGasto(20,3.5))
console.log(palio.calcularGasto(300,3.5))