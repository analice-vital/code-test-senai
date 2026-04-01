function gerarBoletim() {

    let alunos = [
        [7, 8, 6],
        [5, 4, 6],
        [9, 9, 10]
    ];

    let resultadoHTML = "";

    for (let i = 0; i < alunos.length; i++) {

        let notas = alunos[i];
        let soma = 0;
        let j = 0;

        while (j < notas.length) {
            soma += notas[j];
            j++;
        }

        let media = soma / notas.length;
        let classificacao = "";
        let classe = "";

        if (media >= 9) {
            classificacao = "Excelente";
            classe = "excelente";
        } else if (media >= 7) {
            classificacao = "Bom";
            classe = "bom";
        } else if (media >= 6) {
            classificacao = "Aprovado";
            classe = "aprovado";
        } else {
            classificacao = "Reprovado";
            classe = "reprovado";
        }

        resultadoHTML += `
            <div class="aluno ${classe}">
                👨‍🎓 Aluno ${i + 1}: 
                Média ${media.toFixed(1)} → <strong>${classificacao}</strong>
            </div>
        `;
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}