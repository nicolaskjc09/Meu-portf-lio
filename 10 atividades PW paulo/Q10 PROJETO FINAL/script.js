// Função responsável por cadastrar o aluno
function cadastrarAluno(event) {

    // Impede que a página seja recarregada
    event.preventDefault();

    // Recebe o nome e as notas digitadas
    let nome = document.getElementById("nome").value;
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    // Verifica se as notas estão entre 0 e 10
    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        document.getElementById("mensagem").innerHTML =
            "As notas devem estar entre 0 e 10.";

        return;
    }

    // Calcula a média das três notas
    let media = (nota1 + nota2 + nota3) / 3;

    // Define a situação e a classe de cor do aluno
    let situacao;
    let classeSituacao;

    if (media >= 7) {
        situacao = "Aprovado";
        classeSituacao = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        classeSituacao = "recuperacao";
    } else {
        situacao = "Reprovado";
        classeSituacao = "reprovado";
    }

    // Adiciona o aluno na tabela
    let tabela = document.getElementById("tabelaAlunos");

    tabela.innerHTML += `
        <tr>
            <td>${nome}</td>
            <td>${nota1.toFixed(1)}</td>
            <td>${nota2.toFixed(1)}</td>
            <td>${nota3.toFixed(1)}</td>
            <td>${media.toFixed(1)}</td>
            <td class="${classeSituacao}">${situacao}</td>
        </tr>
    `;

    // Limpa a mensagem e os campos do formulário
    document.getElementById("mensagem").innerHTML = "";
    document.querySelector("form").reset();

    // Coloca o cursor novamente no campo de nome
    document.getElementById("nome").focus();

}