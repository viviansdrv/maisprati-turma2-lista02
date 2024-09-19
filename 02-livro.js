const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    ano: 2024,
    genero: "Ficção"
}

for (let propriedade in livro) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}

if (!("editora" in livro)) {
    livro.editora = "Leitura"; 
}
console.log(`editora: ${livro["editora"]}`);