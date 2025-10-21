const alunos=['joao', 'maria', 'jose']
console.log(alunos[0]) //imprime a posição 0 da array
console.log(alunos) //imprime toda a array

alunos.push('paulo') //adiciona ao final do array
console.log(alunos)
alunos[4]='plinio' //adiciona na posição 4 do array
console.log(alunos)
alunos.pop() //exclui o ultimo registro
//console.log(alunos.pop()) //faz a mesma coisa, mas já imprimindo
console.log(alunos)
alunos.shift() //exclui o primeiro registro
console.log(alunos)