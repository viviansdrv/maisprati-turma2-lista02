const estoques = [
    {produto: "Notebook", quantidade: 10, minimo: 3},
    {produto: "Televisão", quantidade: 12, minimo: 4},
    {produto: "Monitor", quantidade: 7, minimo: 5},
    {produto: "Celular", quantidade: 4, minimo: 6},
    {produto: "Tablet", quantidade: 2, minimo: 7}
]

estoques.forEach(estoque => {
    if(estoque.quantidade < estoque.minimo) {
        estoque.quantidade = estoque.quantidade * 2
        // estoque.quantidade += estoque.quantidade
    }
})

console.log(estoques)