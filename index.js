/*
exercicio 1

1) console.log, vai imprimir
false

2) console.log, vai imprimir
false

3) console.log, vai imprimir
true

4) console.log, vai imprimir
boolean


exercicio 2

se o colega rodar o codigo assim como ele esta codado
no console vai mostrar os numeros que o usuario digitou
um do lado do outro e não fazendo a adiçao correspondente

o que o colega tem que fazer é passar as variaveis (primeiroNumero) e (segundoNumero)
que são string para number usando o convertor ( Number() ). teria que fazer o siguiente


exercicio 3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

*/

//exercicio 1 codigo
const idade = prompt("qual é sua idade")
const idadeAmigo = prompt("qual é a idade de seu melhor amigo(a)")

let comparacaoIdades = Number(idade) > Number(idadeAmigo)
console.log("sua idade é maior do que a do seu melhor amigo?",comparacaoIdades)
console.log(Number(idade) - Number(idadeAmigo))

//exercicio 2 codigo
const numero = prompt("introduça um numero par")
const numeroPar = Number(numero)
console.log(numeroPar%2)
//com uns numeros pares da 0
//com uns numeros impar da 1

//exercicio 3
const ano = prompt("sua idade")
const ano2 = Number(ano)

console.log("sua idade em meses é",ano2*12)
console.log("sua idade em dias é", ano2*365)

const horas = 365 * 24

console.log("sua idade em horas é",ano2*horas)


//exercicio 4
const primeiroNumero = prompt("introduça o primeiro numero")
const segundoNumero = prompt("introduça o segundo numero")

const primeiroNumeroN = Number(primeiroNumero)
const segundoNumeroN = Number(segundoNumero)

console.log("o primeiro numero é maior que segundo?",primeiroNumeroN > segundoNumeroN)
console.log("o primeiro numero é igual ao segundo?",primeiroNumeroN===segundoNumeroN)
const div1 = primeiroNumeroN % segundoNumeroN
const div2 = segundoNumeroN % primeiroNumeroN

const restDiv1 = div1 === 0 
let restDiv2 = div2 >= 1

console.log("o primeiro numero é divisivel pelo segundo?",restDiv1 )
console.log("o segundo numero é divisivel pelo primeiro?",restDiv2)
console.log(div2)
console.log(div1)