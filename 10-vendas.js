const vendas = [
    { produto: "Caderno", quantidade: 20, valor: 35},
    { produto: "Lápis", quantidade: 30, valor: 3},
    { produto: "Caneta ", quantidade: 40, valor: 5},
    { produto: "Fone", quantidade: 15, valor: 65},  
]

let total = 0;

vendas.forEach(venda => {
    total += venda.quantidade * venda.valor;
})

console.log(`Valor total: R$${total}`);