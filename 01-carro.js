const carro = {
    marca: "Fiat",
    modelo: "Strada",
    ano: 2024,
    cor: "Verde"
};

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}