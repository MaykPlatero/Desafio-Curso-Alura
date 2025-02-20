let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome, index) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 participantes para o sorteio!");
        return;
    }

    let sorteados = [...amigos];
    let resultado = {};

    for (let i = 0; i < amigos.length; i++) {
        let possiveis = sorteados.filter(nome => nome !== amigos[i]);

        if (possiveis.length === 0) {
            alert("Não foi possível sortear. Tente novamente!");
            return;
        }

        let amigoSorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        resultado[amigos[i]] = amigoSorteado;
        sorteados.splice(sorteados.indexOf(amigoSorteado), 1);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "<h3>Resultado do Sorteio:</h3>";

    for (let pessoa in resultado) {
        let item = document.createElement("li");
        item.textContent = `${pessoa} ➡ ${resultado[pessoa]}`;
        resultadoLista.appendChild(item);
    }
}
