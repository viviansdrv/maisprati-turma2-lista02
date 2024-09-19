const empresa = {
    departamentos: [
        { nomeDepartamento: "Gestão de Pessoas", funcionarios: ["Paulo", "Pedro", "Ravi", "Cláudia", "Xuxa"] },
        { nomeDepartamento: "Desenvolvimento", funcionarios: ["Plínio", "Patrícia", "Ravena", "Ravele", "Raissa"] },
        { nomeDepartamento: "Jurídico", funcionarios: ["Vanessa", "Valéria", "Valter", "Verônica", "Vitória"] }
    ]
};

for (let propriedades in empresa.departamentos) {
    const departamento = empresa.departamentos[propriedades];

    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nomeDepartamento}`);
    }
}
