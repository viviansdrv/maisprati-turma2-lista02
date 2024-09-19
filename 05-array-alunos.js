const alunos = [
    { nome: "Maria", nota1: 10, nota2: 9},
    { nome: "Pedro", nota1: 2, nota2: 4},
    { nome: "Ivana", nota1: 10, nota2: 10}
];

for (let aluno of alunos) {
    media = aluno.nota1 + aluno.nota2;
    console.log(`nome: ${aluno.nome}, média: ${media}`);
}