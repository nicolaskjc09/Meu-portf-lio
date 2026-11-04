// Função responsável por adicionar uma nova tarefa à lista
function adicionarTarefa() {

    // Recebe o texto digitado pelo usuário
    let tarefa = document.getElementById("tarefa").value;

    // Verifica se o campo está vazio
    if (tarefa == "") {
        alert("Digite uma tarefa.");
        return;
    }

    // Seleciona a lista onde as tarefas serão adicionadas
    let lista = document.getElementById("lista");

    // Cria um novo item da lista
    let item = document.createElement("li");

    // Adiciona o texto digitado ao item
    item.innerHTML = tarefa;

    // Permite marcar e desmarcar a tarefa como concluída
    item.onclick = function () {
        item.classList.toggle("concluida");
    };

    // Cria o botão para remover a tarefa
    let botao = document.createElement("button");

    // Define o texto do botão
    botao.innerHTML = "Remover";

    // Remove a tarefa da lista ao clicar no botão
    botao.onclick = function () {
        lista.removeChild(item);
    };

    // Adiciona uma quebra de linha e o botão ao item da lista
    item.appendChild(document.createElement("br"));
    item.appendChild(botao);

    // Adiciona o item completo na lista
    lista.appendChild(item);

    // Limpa o campo de texto para a próxima tarefa
    document.getElementById("tarefa").value = "";

}