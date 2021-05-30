var nomes = ["Geraldo", "Cássio", "Ademir", "José", "Valdir"];

nomes.push("Valter");

var total_nomes = nomes.length;
console.log("Total de nomes: " + total_nomes);

nomes.forEach(function(item){
    console.log(item);
});

console.log(nomes.splice(0, 3));

console.log(nomes.indexOf("Valter"));


