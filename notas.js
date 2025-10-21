const notas=[]

notas.push(5);
notas.push(8);
notas.push(6);
notas.push(5);

/*console.log(notas)
console.log(notas[0,1,2])
console.log(notas.length)// imprime a quantidade de itens, ou o comprimento da array
*/
const media=(notas[0]+notas[1]+notas[2]+notas[3])/notas.length

for (let i = 0; i < notas.length; i++) {
    //const element = array[i];
    console.log(i)
}
console.log(`A média é: ${media}`)