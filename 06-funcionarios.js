const funcionarios = [
    { nome: "Maria", cargo: "Assistente", salario: 2000 },
    { nome: "Ivana", cargo: "Médica Veterinária", salario: 12000 },
    { nome: "Simba", cargo: "Médico Veterinário", salario: 12000 },
    { nome: "Pedro", cargo: "Gerente", salario: 4000 },
    
];

for (let funcionario of funcionarios) {
    if (funcionario.salario > 5000) {
        console.log(`Nome: ${funcionario.nome} / Salário: ${funcionario.salario}`);
    }
}