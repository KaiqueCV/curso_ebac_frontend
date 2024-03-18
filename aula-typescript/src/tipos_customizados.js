"use strict";
const alunos = [
    {
        nome: "carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end, Python"],
        idade: 23,
    },
];
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
