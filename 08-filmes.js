const filmes = [
    { titulo: "Durval Discos", diretor: "Anna Muylaert", anoLancamento: 2003},
    { titulo: "Procurando Dory", diretor: "Andrew Stanton", anoLancamento: 2016},
    { titulo: "Tomates Verdes Fritos", diretor: "Jon Avnet", anoLancamento: 1992}
]

const titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
})

console.log(titulosFilmes);