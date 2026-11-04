// Perguntas, alternativas e respostas corretas do quiz
let perguntas = [
    {
        pergunta: "Qual componente é considerado o cérebro do computador?",
        opcoes: ["Memória RAM", "Processador", "Teclado", "Monitor"],
        resposta: 1
    },
    {
        pergunta: "Qual destes é um sistema operacional?",
        opcoes: ["Windows", "Google", "YouTube", "Intel"],
        resposta: 0
    },
    {
        pergunta: "Para que serve a memória RAM?",
        opcoes: [
            "Guardar arquivos permanentemente",
            "Exibir imagens na tela",
            "Armazenar dados temporariamente durante o uso",
            "Conectar o computador à tomada"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual destes programas é um navegador de internet?",
        opcoes: ["Microsoft Word", "Google Chrome", "Windows", "Photoshop"],
        resposta: 1
    },
    {
        pergunta: "Qual linguagem é usada para estruturar páginas da internet?",
        opcoes: ["CSS", "HTML", "MySQL", "Python"],
        resposta: 1
    }
];

// Controle da pergunta atual e da pontuação
let perguntaAtual = 0;
let pontuacao = 0;

// Mostra a pergunta atual e suas alternativas
function mostrarPergunta() {

    let perguntaSelecionada = perguntas[perguntaAtual];

    document.getElementById("numeroPergunta").innerHTML =
        "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

    document.getElementById("pergunta").innerHTML =
        perguntaSelecionada.pergunta;

    let areaOpcoes = document.getElementById("opcoes");

    areaOpcoes.innerHTML = "";

    // Cria as opções de resposta
    for (let i = 0; i < perguntaSelecionada.opcoes.length; i++) {

        areaOpcoes.innerHTML += `
            <label class="opcao">
                <input type="radio" name="resposta" value="${i}">
                ${perguntaSelecionada.opcoes[i]}
            </label>
        `;

    }

    document.getElementById("aviso").innerHTML = "";

    // Altera o texto do botão na última pergunta
    if (perguntaAtual == perguntas.length - 1) {
        document.getElementById("botaoProximo").innerHTML = "Finalizar";
    } else {
        document.getElementById("botaoProximo").innerHTML = "Próxima";
    }

}

// Verifica a resposta e avança para a próxima pergunta
function proximaPergunta() {

    let respostaSelecionada =
        document.querySelector('input[name="resposta"]:checked');

    // Impede que o usuário avance sem selecionar uma resposta
    if (respostaSelecionada == null) {

        document.getElementById("aviso").innerHTML =
            "Selecione uma resposta antes de continuar.";

        return;

    }

    let respostaDoUsuario = Number(respostaSelecionada.value);

    // Verifica se a resposta está correta
    if (respostaDoUsuario == perguntas[perguntaAtual].resposta) {
        pontuacao++;
    }

    perguntaAtual++;

    // Mostra a próxima pergunta ou o resultado final
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }

}

// Mostra a pontuação e a mensagem de desempenho
function mostrarResultado() {

    let mensagem;

    // Escolhe a mensagem de acordo com a pontuação
    if (pontuacao == 5) {
        mensagem = "Excelente! Você acertou todas as perguntas.";
    } else if (pontuacao >= 3) {
        mensagem = "Muito bom! Você conhece o básico de informática.";
    } else {
        mensagem = "Continue estudando para melhorar seus conhecimentos.";
    }

    document.querySelector(".quiz").innerHTML = `
        <h2>Quiz finalizado!</h2>

        <h3>
            Você acertou ${pontuacao} de ${perguntas.length} perguntas.
        </h3>

        <p>${mensagem}</p>

        <button onclick="reiniciarQuiz()">Tentar novamente</button>
    `;

}

// Reinicia a página para começar o quiz novamente
function reiniciarQuiz() {

    location.reload();

}

// Mostra a primeira pergunta ao abrir a página
mostrarPergunta();