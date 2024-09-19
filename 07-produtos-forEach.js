const produtos = [
    {nome: "Notebook", preco: 4000, valorComDesconto: null},
    {nome: "Monitor", preco: 1200, valorComDesconto: null},
    {nome: "Televisão", preco: 3000, valorComDesconto: null}
]

produtos.forEach(produto => {
    let desconto = 0.10;
    produto.valorComDesconto = produto.preco - (produto.preco * desconto);
    console.log(`Produto: ${produto.nome} / Preço sem desconto: ${produto.preco} / Preço com desconto de 10%: ${produto.valorComDesconto}`)
})
