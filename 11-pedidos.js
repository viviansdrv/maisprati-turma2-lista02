const pedidos = [
    { cliente: "Ivana", produto: "Caderno", quantidade: 2 },
    { cliente: "Maria", produto: "Lápis", quantidade: 5 },
    { cliente: "Ivana", produto: "Caneta", quantidade: 3 },
    { cliente: "Maria", produto: "Borracha", quantidade: 2 },
    { cliente: "Pedro", produto: "Caderno", quantidade: 1 }
];

const totalProdutosPorCliente = {};

// Usando forEach para agrupar as quantidades de produtos por cliente
pedidos.forEach(pedido => {
    if (totalProdutosPorCliente[pedido.cliente]) {
        totalProdutosPorCliente[pedido.cliente] += pedido.quantidade; 
    } else {
        totalProdutosPorCliente[pedido.cliente] = pedido.quantidade;
    }
});

console.log(totalProdutosPorCliente);
