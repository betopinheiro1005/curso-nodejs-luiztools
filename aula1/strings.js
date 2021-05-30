var nome1 = "Roberto";
var nome2 = "Lucas";
var nome3 = "   Felipe   ";
var nome4 = "Roberto Pinheiro";
var num1 = "5";
var num2 = "57.31";

if(nome1.indexOf("o") != -1){
    console.log(nome1.toUpperCase());
} else {
    console.log(nome1.toLocaleLowerCase());
}

if(nome2.indexOf("o") != -1){
    console.log(nome2.toUpperCase());
} else {
    console.log(nome2.toLocaleLowerCase());
}

if(nome1.indexOf("o") != -1){
    console.log(nome1.replace("o", "3"));
} 

console.log(nome3.trim());
console.log(parseInt(num1));
console.log(parseFloat(num2));
console.log(nome4.split(" "));
console.log(nome1.charAt(3));
console.log(nome1.slice(0,3));