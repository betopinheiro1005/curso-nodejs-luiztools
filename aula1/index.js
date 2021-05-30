const modulo = require("./modulo");

var nome = 'Roberto';
console.log("Nome: " + nome);

let numero1 = 3;
console.log("Número 1: " + numero1);

let numero2 = 6.9;
console.log("Número 2: " + numero2);

var isAccepted = true; // ou false
console.log("É aceito: " + isAccepted);

// objeto
var user = {};
user.nome = 'Gilberto';
user.idade = 17;

console.log("Nome do usuário: " + user.nome);
console.log("Idade do usuário: " + user.idade);

// array
var colecao = [];
colecao[0] = 1;
colecao[1] = 'abacate';

console.log("Primeiro item da coleção: " + colecao[0]);
console.log("Segundo item da coleção: " + colecao[1]);

if(modulo.somar(1,2) === 3 ){
    console.log("Funcionou!");
}
