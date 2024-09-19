const pessoas = [
    {nome: "Maria", idade: 25, cidade: "Recife"},
    {nome: "João", idade: 26, cidade: "Fortaleza"},
    {nome: "Pedro", idade: 27, cidade: "João Pessoa"}
];

for (let pessoa of pessoas) {
    console.log(`nome: ${pessoa.nome}, idade: ${pessoa.idade}, cidade: ${pessoa.cidade}`);
}