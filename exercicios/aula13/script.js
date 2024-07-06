let num = [5, 2, 8, 9, 3]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeio valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Valor nao encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}