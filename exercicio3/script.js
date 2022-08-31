const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
const fraseNova = frase.replace("verde","rosa").replace("azul", "laranja")
const trechoFrase = "mas não deixe o gato sair"

console.log("*Primeira parte do exercício: frase com aspas*")
console.log(frase)

console.log("*Segunda parte do exercício: trocar verde por rosa e azul por laranja*")
console.log(fraseNova)

console.log("*Terceira parte do exercício: verificar se tem verde e laranja*")
console.log(fraseNova.includes("verde"))
console.log(fraseNova.includes("laranja"))

console.log("*Parte extra do exercício: adicionar o trecho da frase em letra maiúscula*")
console.log(`Jorge tem uma casa rosa e com portão laranja, com os dizeres : "BOAS VINDAS, ${trechoFrase.toUpperCase()}`)












