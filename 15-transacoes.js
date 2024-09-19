const transacoes = [
    { tipo: "entrada", valor: 5000 },
    { tipo: "saida", valor: 850 },
    { tipo: "entrada", valor: 572 },
    { tipo: "saida", valor: 321 },
    { tipo: "entrada", valor: 2399 }
];

let total = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        total += transacao.valor; 
    } else if (transacao.tipo === "saida") {
        total -= transacao.valor; 
    }
});

console.log(`Saldo Final: R$ ${total}`);
