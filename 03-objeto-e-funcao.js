const aluno = {
    matricula : "2021050403",
    curso: "Medicina Veterinária",
    mensalidade: 2000,
    anoMatricula: 2021,
    semestresCompletos: 4,
    semestresRestantes: 5
}

// Função para filtrar propriedades com base em um valor específico
function filtrarPropriedades(aluno) {
    // Novo objeto para armazenar as propriedades filtradas
    const alunoFiltrado = {};

    // Iterar sobre as propriedades do objeto produto
    for (let propriedade in aluno) {
        if (aluno[propriedade] > 500) {
            // Adicionar a propriedade ao novo objeto
            alunoFiltrado[propriedade] = aluno[propriedade];
        }
    }

    // Retornar o novo objeto com as propriedades filtradas
    return alunoFiltrado;
}

let novoObjeto = filtrarPropriedades(aluno);
console.log(novoObjeto);