// Função responsável por realizar os cálculos da calculadora
function calcular() {

    // Recebe os números digitados e a operação escolhida pelo usuário
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;

    // Variável que armazenará o resultado da operação
    let resultado;

    // Verifica se a operação escolhida foi soma
    if (operacao == "+") {
        resultado = numero1 + numero2;
    }

    // Verifica se a operação escolhida foi subtração
    else if (operacao == "-") {
        resultado = numero1 - numero2;
    }

    // Verifica se a operação escolhida foi multiplicação
    else if (operacao == "*") {
        resultado = numero1 * numero2;
    }

    // Verifica se a operação escolhida foi divisão
    else if (operacao == "/") {

        // Impede que o usuário divida um número por zero
        if (numero2 == 0) {
            document.getElementById("resultado").innerHTML = "Resultado: Não é possível dividir por zero.";
            return;
        }

        resultado = numero1 / numero2;
    }

    // Exibe o resultado da operação na tela
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}