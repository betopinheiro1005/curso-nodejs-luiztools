// promise

console.log("\nPasso 1\n");

function fazRequisicao(resolver = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolver) {
                reject("Deu erro!");
            }
			resolve("Promise resolvida!");
        }, 5000);
    });
}

fazRequisicao()
    .then(console.log)
    .catch(console.error);

console.log("Passo 2\n");

console.log("Passo 3\n");
