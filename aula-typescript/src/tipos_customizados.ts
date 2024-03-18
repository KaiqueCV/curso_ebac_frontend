type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}
