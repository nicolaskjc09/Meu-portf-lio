// Endereço da API utilizada no exercício
let enderecoAPI = "https://jsonplaceholder.typicode.com/users";

// Função responsável por buscar os usuários
function buscarUsuarios() {

    fetch(enderecoAPI)

        // Verifica se a conexão com a API funcionou
        .then(function (resposta) {

            if (!resposta.ok) {
                throw new Error("Não foi possível buscar os usuários.");
            }

            return resposta.json();

        })

        // Recebe e mostra os usuários na página
        .then(function (usuarios) {

            mostrarUsuarios(usuarios);

        })

        // Trata possíveis erros de conexão
        .catch(function (erro) {

            document.getElementById("mensagem").innerHTML =
                "Erro ao carregar os usuários. Verifique sua conexão.";

            console.log(erro);

        });

}

// Função responsável por criar os cartões dos usuários
function mostrarUsuarios(usuarios) {

    let areaUsuarios = document.getElementById("usuarios");

    areaUsuarios.innerHTML = "";

    // Percorre a lista de usuários recebida da API
    for (let i = 0; i < usuarios.length; i++) {

        let usuario = usuarios[i];

        areaUsuarios.innerHTML += `
            <div class="card">
                <h2>${usuario.name}</h2>
                <p><strong>E-mail:</strong> ${usuario.email}</p>
                <p><strong>Cidade:</strong> ${usuario.address.city}</p>
            </div>
        `;

    }

    // Remove a mensagem de carregamento
    document.getElementById("mensagem").innerHTML = "";

}

// Busca os usuários quando a página é aberta
buscarUsuarios();