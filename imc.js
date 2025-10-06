const peso=71
const altura=1.71


const imc=(peso/Math.pow(altura,2)).toFixed(2)
if(imc<18.5){
    console.log("O IMC é ", imc, " então está abaixo do peso")
}else if(imc=>18.5 && imc<=25){
    console.log("O IMC é ", imc, " então está no peso normal")
}else if(imc>25 && imc<=30){
    console.log("O IMC é ", imc, " então está acima do peso")
}else if(imc>30 && imc<=40){
    console.log("O IMC é ", imc, " então está obeso")
}else{
    console.log("O IMC é ", imc, " então está com obesidade mórbida")
}

