let produtos = [
    {
        nome: "Protetor Solar Nive 50 fps",
        marca: "nivea",
        preco: 50
    },
    {
        nome: "B5",
        marca: "LaRoche Posay",
        preco: 230
    },
    {
        nome: "C10",
        marca: "LaRoche Posay",
        preco: 200
    }
]
produtos.forEach(function(valor) {
    console.log(valor.nome);
    console.log(valor.marca);
    console.log(valor.preco);
})


//OBJETOS
let carro = {
    marca: "Chevrolet",
    modelo: "Corsa",
    quilometragem: 65000,
    cor: "Branco",
    donos: ["Luciana", "João", "Zezinho"],
    ligar: function() {
        console.log("vrum vrum")
    },
    dirigir: function(motorista) {
        console.log(`${motorista} está dirigindo`);
    }

}

carro.ligar();
carro.dirigir("Ivo");

//FILTER
// let salarios = [1000, 2000, 8000, 12000];
// let salariosAlto;

// salariosAlto = salarios.filter(function(valor){
//     return (valor > 6000);
// })
// console.log(salarios, salariosAlto);

// let salariosAumentados = [];
// salariosAumentados = salarios.map(function(valor) {
//     if (valor < 3000) {
//         return valor + 500;
//     }

//     return valor + 100;
// });
// console.log(salarios, salariosAumentados);

let array = [1, 5, 7];
let arrayMap = [];
//MAP
// arrayMap = array.map(function(valor) {

//     return valor * 2;
// });

// console.log(array);
// console.log(arrayMap);

// for (let i = 0; i < array.length; i++) {
//     arrayMap[i] = array[i] * 2;
// }


//FOR NORMAL
// for (let i = 0; i < array.length; i++) {
//     console.log("No índice: " + i + " está o valor: " + array[i]);
// }

//FOREACH - FUNÇÃO ANONIMA
// array.forEach(function(valor, posicao) {
//     //console.log("No índice: " + posicao + " está o valor: " + valor);
//     //template strings
//     console.log(`No índice: ${posicao} está o valor: ${valor}`);
// })


// let funcaoSeparada = function(valor, posicao) {
//     console.log(`No índice: ${posicao} está o valor: ${valor}`);
// }
// //FOREACH - FUNÇÃO SEPARADA
// array.forEach(funcaoSeparada)







//CALLBACKS
// function a(callback, nome){
//     console.log('a vem primeiro');
//     console.log(nome);
//     callback();
// }

// let b = function() {
//     console.log('b vem depois');
// }

// function retornaNome() {
//     return "Jonas";
// }

// a(b, retornaNome());


//FUNÇÕES ANINHADAS(FUNCAO DENTRO DE UMA FUNCAO)
// function circunferencia (raio) {
//     function diametro() { // função aninhada 
//       return 2*raio;   // raio é uma variável da função pai
//      }
  
//     return Math.PI * diametro(); // invocamos a função
// }


//FUNÇÃO ANONIMA
// let ola = function (nome) {
//     console.log("Olá " + nome);
// }

// ola("Jonas");


//FUNÇÕES
// function produto(n1, n2) {
//     let produto = n1 * n2;

//     return produto;
// } 

// var teste1 = produto(500, 3);
// var teste2 = produto(4, 3);
// var teste3 = produto(5, 30);

// console.log(teste1,teste2, teste3)