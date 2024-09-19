const clientes = [
    { nome: "Ana", idade: 42, cidade: "São Paulo" },
    { nome: "Maria", idade: 70, cidade: "Rio de Janeiro" },
    { nome: "Simba", idade: 10, cidade: "Belém" },
    { nome: "Ivana", idade: 6, cidade: "Belém" },
    { nome: "Chiquinho", idade: 8, cidade: "Belém" }
]

let total = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        total++
    }
})

console.log(`Quantidade com cliente com mais de 30 anos: ${total}`);
