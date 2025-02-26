// PRATICANDO FOR IN (object)

// let dados = {
//     nome: "ricardo",
//     sobrenome: "nascimento",
//     rua: "rua primeira",
//     numero: 874
// }
// for (let n in dados){
//     console.log(dados[n])
// }


// PRATICANDO FOR OF (arrays)

// let data = [1, 'casa', 75, "ricardo"]
//
// for (let m of data) {
//     console.log(m)
// }

//Exercício trianguloloop
// function loop() {
//     var str = "#";
//     let i = 0
//     while (i < 8) {
//         console.log(str.repeat(i));
//         i++;
//     }
// }
//
// loop()


//PRATICANDO WHILE and DO-WHILE

// let i = 0
// while (i < 10){
//     console.log(i)
//     i++;
// }

// let i = 0
// do {
//     console.log(i)
//     i++;
// } while (i < 10)


//PRATICANDO foreach

// let animal = ['cat', 'dog', 'horse', 'bird']
//
// animal.forEach(animal => console.log(animal))

// USO DO BIND

// (function () {
//         this.valor = 10
//         const modulo = {
//             valor: 20,
//             getValor: function () {
//                 return this.valor
//             }
//         }
//         console.log(modulo.getValor())
//
//         const getValor = modulo.getValor
//         console.log(getValor())
//     }
// )()


//USO DO THIS E BIND

// function casa() {
//     console.log(this)
//
//     function house() {
//         console.log('segundo',this)
//     }
//
//     house()
// }
// casa()
// saudacao = 'oi'
// let mister = {
//     saudacao: 'bom dia',
//     saudar() {
//         console.log(this.saudacao)
//     }
// }
// mister.saudar()
//
// let falar = mister.saudar
//
// falar()

//como contornar o this no setinterval
// function monster(){
//     this.idade = 0
//     const self = this
//     setInterval(function () {
//         self.idade++
//         console.log(this.idade)
//     }.bind(self),1000)
// }
//
// new monster()


// ARROW FUNCTION

// const isAdult = age => age>=18

// function getRandomNumber() {
//     return Math.random()
// }

// const randomNumber = () => Math.random()
//
// console.log(randomNumber())

// document.addEventListener('click', () => console.log('clicked')
// )


//USO DOS THIS EM ARROW FUNCTION

//1º caso

// const func = function () {
//     console.log(this)
// }
//
// //2º caso
//
// const arrowFunc = () => console.log((this))
//
// func()
// arrowFunc()


//CALLBACK

// let nomes = ['ricardo', 'renata', 'marcos', 'lucio']
//
// function nomear(nome, indice) {
//     console.log(`${indice + 1}. ${nome}`)
// }
//
// nomes.forEach(nomear)
// nomes.forEach(function (a,b){
//     console.log(a,b)
// })

// let notas = [1, 2, 8, 7, 0, 3, 7, 9, 9.7, 10, 5]
// let aprovados = []

// var casa = notas.forEach(function (nota) {
//     if(nota>=7){
//         aprovados.push(nota)
//     }
// })
// console.log(aprovados)

// notasFim = notas.filter(nota => nota > 7)
//
// console.log(notasFim)

// function somar (){
//     let soma = 0
//     for (const i in arguments) {
//         soma -= arguments[i]
//     }
//     return soma
// }

// console.log(somar(1,2))


//FUNÇÃO ANÔNIMA
// const soma = function (verbo) {
//     return `${verbo} é muto bom`
// }
//
// const resultado = function (a,operacao = soma) {
//     console.log(operacao(a))
// }
//
// resultado('sorvete')


//FUNÇÃO FACTORY

// function criarPessoa(nome, idade) {
//     return {
//         nome,
//         idade
//     }
// }
//
// console.log(criarPessoa('casa',34))

// PARADIGMA POO - FUNÇÃO CONSTRUTORA
//
// function controleRemoto(volumeMaximo = 100, passoAumento = 5) {
//     let volumeAtual = 0;
//
//     this.aumentar = () => {
//         if (volumeAtual <= volumeMaximo) {
//             volumeAtual += passoAumento
//         } else {
//             volumeAtual = volumeMaximo
//         }
//     }
//
//     this.diminuir = () => {
//         if (volumeAtual > 5) {
//             volumeAtual -= passoAumento
//         }
//     }
//     this.volumeAtual = () => volumeAtual
// }
//
// const meuControle = new controleRemoto
// meuControle.aumentar()
// meuControle.aumentar()
// meuControle.aumentar()
//
// console.log(meuControle.volumeAtual())

//
// function construtora(nome) {
//     this.nome = nome
//     this.falar =  ()=>{
//         console.log(`meu nome é ${nome}`)
//     }
// }
// const p1 = new construtora('joao')
// p1.falar()


//IIFE - FUNÇÃO AUTOINVOCADA - IMEDIATELY INCOKED FUNCTION EXPRESS

// (_ => console.log('já fui invocada!'))()

// (function (){
//     console.log('já fui invocada!')
// })()

//FUNÇÃO RECURSIVA

// const final = (num) => {
//     if (num === 1) {
//         return 1
//     }
//     return num * final(num - 1)
//
// }
//
// console.log(final(1))

// var response = {
//     "status": "ativo ",
//     "proprietario1": " Fulano",
//     "proprietario2": " Fulano  ",
//     "proprietario3": " Fulano ",
//     "endereco": {
//         "rua": "   Rua de Exemplo ",
//         "bairro": " Bairro de Exemplo  "
//     },
//     "contato": {
//         "telefone": "1199972332 ",
//         "email": " teste@email.com"
//     }
// }

// for (var property in response) {
//     if (typeof response[property] === "string") {
//         response[property] = response[property].trim()
//     }
//
//     for (var property2 in response[property]) {
//         response[property][property2] = response[property][property2].trim()
//     }
// }
//
// console.log(response)

// function trimData(response) {
//     for (var property in response) {
//         if (typeof response[property] === "string") {
//             response[property] = response[property].trim()
//         } else {
//             response[property] = trimData(response[property])
//         }
//     }
//
//     return response
// }
//
// function getCnpjData(cnpj) {
//     const response = ApiService.getCnpjData(cnpj)
//     return trimData(response);
// }

// function isEven(num) {
//     if (num === 0) {
//         return true
//     } else if (num === 1) {
//         return false
//     } else {
//         num = num - 2
//         return isEven(num)
//     }
// }
//
// console.log(isEven(-1))

// function countBs(word, char) {
//     let i = 0
//     word.split('').forEach(_ => {
//         _ === char ? i++ : 0
//     })
//     return (i)
// }

// if (_.includes(char)) {
//     i++
// }


// function countBs(word, char) {
//     for (const posicao in word) {
//         if(word)
//     }
// }


// console.log(countBs('cachorro', 'y'))

// CLASSE

// class MyClass {
//
// }
//
// const meu =new MyClass()
// console.log(typeof MyClass)

// class Reptile {
//     constructor(firstAppearance, local) {
//         this.firstAppearance = firstAppearance
//         this.local = local
//     }
//
//     get firstTimeAppearance() {
//         return this.firstAppearance
//     }
//
//     get locaTime() {
//         return this.local
//     }
//
//     set localChange(newLocal) {
//         this.local = newLocal
//     }
// }
//
//
// const Ricardo = new Reptile('Developer', 'Simbiose')
// Ricardo.localChange = ('havan')
// console.log(Ricardo.firstTimeAppearance)
// console.log(Ricardo.locaTime)

// class Calculadora {
//     somar(num1, num2) {
//         return num1 + num2
//     }
//
//     subtrair(num1, num2) {
//         return num1 - num2
//     }
//
//     multiplicar(num1, num2) {
//         return num1 * num2
//     }
//
//     dividir(num1, num2) {
//         return num1 / num2
//     }
// }
//
// const calculadora = new Calculadora()
//
// console.log(calculadora.somar(3, 4))

// class Calculadora {
//     constructor(num1, num2) {
//         this.num1 = num1
//         this.num2 = num2
//     }
//
//     get somar() {
//         return this.num1 + this.num2
//     }
//
//     get subtrair() {
//         return this.num1 - this.num2
//     }
//
//     get multiplicar() {
//         return this.num1 * this.num2
//     }
//
//     get dividir() {
//         return this.num1 / this.num2
//     }
// }
//
// const somando = new Calculadora(2, 3)
// console.log(somando.multiplicar)

// import isEven from "./Par ou Impar/code";
//
// class Helper {
//     static isEven(num) {
//        return isEven(num)
//     }
//
//     static isPositive(num) {
//
//     }
//
//     static isNegative(num) {
//
//     }
// }

// let meuArray = [1, 2, 3, {nome: "Ricardo", chave: 123}, [1, 2, 3]]
// meuArray.push(3)
// console.log(meuArray[3])

// let FirstArrat = [1, 2, 3, 4, 5]
// let NewArray = FirstArrat.map(_ => 2 * _)
// console.log(NewArray)

let entries = [
    {"nota": 10, "nome": "Lucas"},
    {"nota": 8, "nome": "Larissa"},
    {"nota": 4, "nome": "Antonio"}
]

// function code(entries) {
//     let nomes = []
//     entries.filter(nota => {
//         nota.nota >= 5 ? nomes.push(nota.nome) :0
//     })
//     return nomes
// }

// function Nomes() {
//
// }
//
// function code(entries) {
//     return entries.reduce((prev, entries) => {
//             return entries.nota > 5 ? [...prev, entries.nome] : [...prev]
//         }, []
//     )
// }

// console.log(code(entries))


// var friends = [{
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21
// }, {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26
// }, {
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18
// }];
//
// // allbooks - lista que contém todos os livros de friends +
// // lista adicional contida em valorInicial
// var allbooks = friends.reduce(function(prev, curr) {
//     if (curr.age > 18){
//         return [...prev, curr.books];
//     }
//
// }, ['Alphabet']);
//
// console.log(allbooks)

// console.log(code(entries))


// let casa = 'acacacac'
//
// console.log(casa.ra)


// let casa
//
// if(true){
//     casa = 23
// }
//
// console.log(casa)

// let employees = [
//     {
//         "fullName": "Sara Padoin",
//         "idUser": "5da6e429-3557-4540-ba6a-7603f5f4b9b3",
//         "email": "sara.padoin@simbioseventures.com"
//     },
//     {
//         "fullName": "Maria Conde",
//         "idUser": "6e22fcf3-c31f-452d-b73a-38ead0df6c59",
//         "email": "maria.conde@simbioseventures.com"
//     },
//     {
//         "fullName": "Ricardo Nascimento",
//         "idUser": "ad0b07c5-67d3-4dcc-b4e6-4ddb37fe37eb",
//         "email": "ricardop794@gmail.com"
//     },
//     {
//         "fullName": "Marcos Silva",
//         "idUser": "8dc8d472-9d7e-4098-8e32-8fdfcb7e75af",
//         "email": "ricardo.nascimento@simbioseventures.com"
//     }
// ]

// Maria condé
// const idUserEvent = "ad0b07c5-67d3-4dcc-b4e6-4ddb37fe37eb"
//
// let employeesRemoved = employees.reduce((prev, {idUser, fullName, email}) => {
//     return idUser === idUserEvent ? {fullName, idUser, email} : {...prev}
// }, {})
//
// let employeesSelected = employees.reduce((prev, {idUser, fullName, email}) => {
//     return idUser !== idUserEvent ? [...prev, {fullName, idUser, email}] : [...prev]
// }, [])
//
// let final = employees.sort((a) => {
//     return a.idUser === idUserEvent && -1
// })
//
// employees = employeesSelected
//
// employeesSelected.unshift(employeesRemoved)
//
// console.log('employee selected', employeesSelected)
// console.log('employee removed', employeesRemoved)
// console.log('final', final)
//


import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('us')

let date = "2023-05-09T19:00-05:00"
let fim = moment(date, "YYYY-MM-DDTHH:mm:ss").format("MM")()

console.log(fim, 'casa', 'home', 'dd')
console.log('normal')
console.log('salty')