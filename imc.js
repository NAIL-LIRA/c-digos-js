function calcimc(peso, altura){
    return peso/Math.pow(altura,2)
}


function ClasImc(imc){

if(imc<18.5){
    return("O IMC é "+imc+ " então está abaixo do peso")
}else if(imc>=18.5 && imc<=25){
    return("O IMC é "+imc+ " então está no peso normal")
}else if(imc>25 && imc<=30){
    return("O IMC é "+imc+ " então está acima do peso")
}else if(imc>30 && imc<=40){
    return("O IMC é "+imc+ " então está obeso")
}else{
    return("O IMC é "+imc+ " então está com obesidade mórbida")

}
}

function main(){
    const peso=71
    const altura=1.71
    const imc=calcimc(peso,altura).toFixed(2)
    console.log(ClasImc(imc))
    
}

main()