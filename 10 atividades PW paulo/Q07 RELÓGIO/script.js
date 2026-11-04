// Função responsável por atualizar o horário
function atualizarRelogio() {

    // Cria um objeto com a data e o horário atuais
    let agora = new Date();

    // Recebe as horas, os minutos e os segundos
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona um zero antes dos números menores que 10
    horas = String(horas).padStart(2, "0");
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");

    // Monta o horário completo
    let horarioCompleto = horas + ":" + minutos + ":" + segundos;

    // Exibe o horário na página
    document.getElementById("horario").innerHTML = horarioCompleto;

}

// Atualiza o relógio imediatamente ao abrir a página
atualizarRelogio();

// Atualiza o relógio automaticamente a cada segundo
setInterval(atualizarRelogio, 1000);