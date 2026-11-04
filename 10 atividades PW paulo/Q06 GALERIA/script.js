// Abre o modal e mostra a imagem selecionada
function abrirModal(caminhoImagem) {

    let modal = document.getElementById("modal");
    let imagemModal = document.getElementById("imagemModal");

    imagemModal.src = caminhoImagem;
    modal.style.display = "flex";

}

// Fecha o modal
function fecharModal() {

    let modal = document.getElementById("modal");

    modal.style.display = "none";

}