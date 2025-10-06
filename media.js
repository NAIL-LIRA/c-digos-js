const nota1=8
const nota2=5
const nota3=7

const media=(nota1+nota2+nota3)/3


if (media<5) {
console.log("O aluno foi reprovado, pois sua média é menor que ", media.toFixed(2))
}else if(media>5, media<7){
    console.log("O aluno está de recuperação, pois sua média é menor que ", media.toFixed(2))
}else{
    console.log("O aluno foi aprovado, pois sua média é maior que ", media.toFixed(2))
}
