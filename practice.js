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

//USO DO THIS
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