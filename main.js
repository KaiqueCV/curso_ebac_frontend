let alunos = [
    {nome: 'João', nota: 7},
    {nome: 'Maria', nota: 6},
    {nome: 'Pedro', nota: 8},
    {nome: 'Ana', nota: 5}
];

function getAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

let aprovados = getAlunosAprovados(alunos);
console.log(aprovados);