const carrinho = {
    itens: [
        { nome: "Notebook", quantidade: 10, precoUnitario: 4000 },
        { nome: "Televisão", quantidade: 12, precoUnitario: 3200 },
        { nome: "Monitor", quantidade: 14, precoUnitario: 1200 },
        { nome: "Sofá", quantidade: 10, precoUnitario: 5000 },
        { nome: "Mesa", quantidade: 20, precoUnitario: 3000 }
    ]
};

let valorTotal = 0;
carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario; 
});

console.log(`Valor total do carrinho: R$${valorTotal}`);
