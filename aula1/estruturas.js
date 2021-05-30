// Estruturas de controle e repetição

alunos = [{nome: "Carlos", media: 7.5},{nome: "Renato", media: 4.75},{nome:"Francisco",media: 3.5}];

for (let i = 0; i < alunos.length; i++) {
    if(alunos[i].media > 5){
        console.log(alunos[i].nome + " - Média: " + alunos[i].media + " - Aprovado!" );
    } else if(alunos[i].media > 4 && alunos[i].media < 5) {
        console.log(alunos[i].nome + " - Média: " + alunos[i].media + " - Em recuperação!" );
    } else {
        console.log(alunos[i].nome + " - Média: " + alunos[i].media + " - Reprovado!" );
    }
}

var j = 0;

while(j < 5){
    console.log(j);
    j++;
}

var option = 3;

switch(option){
    case 1:
        console.log("Escolheu a opção 1");
        break;
    case 2:
        console.log("Escolheu a opção 2");
        break;
    case 3:
        console.log("Escolheu a opção 3");
        break;
    case 4:
        console.log("Escolheu a opção 4");
        break;
    default:
        console.log("Não escolheu nenhuma das quatro opções!");    
}


