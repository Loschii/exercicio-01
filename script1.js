console.log('Praticando')

const nome = prompt('Digite seu nome: ')
 let idade = Number(prompt('Digite sua idade: '))
let altura = prompt('Digite sua altura: ')
let time = prompt('Para qual time de futebol você torce? ')
let comida = prompt('Digite sua comida favorita: ')
let jogo = prompt('Digite seu jogo favorito: ')

console.log (`Olá ${nome}, tudo bem?
dados: 
idade: ${idade} anos
altura: ${altura} m
time do coração: ${time}
comida favorita: ${comida}
jogo favorito: ${jogo}`)

console.log ('Olá',nome, 'tudo bem?',
            '\ndados:',
            '\nidade:',idade,'anos',
            '\naltura:',altura,'m',
            '\ntime do coração:',time,
            '\ncomida favorita:',comida,
            '\njogo favorito:',jogo,)          

console.log ('Olá ' + nome + 'tudo bem?',
            '\ndados:',
            '\nidade: ' + idade +' anos',
            '\naltura: ' + altura +' m',
            '\ntime do coração: ' + time +
            '\ncomida favorita: ' + comida + 
            '\njogo favorito: ' + jogo + '')            

const nota1 = Number(prompt('Digite a nota do primeiro bimestre: '))
const nota2 = Number(prompt('Digite a nota do segundo bimestre: '))
const nota3 = Number(prompt('Digite a nota do terceiro bimestre: '))
const nota4 = Number(prompt('Digite a nota do quarto bimestre: '))
const media = (nota1 + nota2 + nota3 + nota4)/4


console.log(typeof(nota1))
console.log(typeof(nota2))
console.log(typeof(nota3))
console.log(typeof(nota4))
console.log(typeof(media))

console.log(nota1)
console.log(nota2)
console.log(nota3)
console.log(nota4)
console.log(media)

if (media >= 6){
    console.log(`Sua nota foi ${media}, PARABÉNS, você foi Aprovado`)
} else{
    console.log(`Sua nota foi ${media}, você foi Reprovado`)
}

if (idade < 16){
    console.log('Você não pode votar')
}
else if (idade > 70 || idade >= 16 && idade < 18 ) {
    console.log('Você pode votar, mas não é obrigatorio')
}
else {
    console.log('Seu voto é obrigatório')
}

const primeiraNota = Number(prompt("Digite sua nota do primeiro Bimestre: 0 a 10"));
const segundaNota = Number(prompt("Digite sua nota do segundo Bimestre: 0 a 10"));
const terceiraNota = Number(prompt("Digite sua nota do terceiro Bimestre: 0 a 10"));
const quartaNota = Number(prompt("Digite sua nota do quarto Bimestre: 0 a 10"));
if (!isNaN(primeiraNota) && !isNaN(segundaNota) && !isNaN(terceiraNota) && !isNaN(quartaNota) && primeiraNota >= 0 && primeiraNota <= 10 && segundaNota >= 0 && segundaNota <= 10 && terceiraNota >= 0 && terceiraNota <= 10 && quartaNota >= 0 && quartaNota <= 10) 
{ 
    const media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4; if (media >= 7) { console.log("Aprovado"); } else if (media >= 5 && media < 7) { console.log("Recuperação"); } 
else { console.log("Reprovado"); } } else { alert("Por favor, digite um valor válido"); }