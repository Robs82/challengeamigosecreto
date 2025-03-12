//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
alert("Bem-vindo ao nosso amigo secreto! Insira um nome para participar.");

let listaDeAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    listaDeAmigos.push(nome);

    let li = document.createElement("li");
    li.textContent = nome;
    document.getElementById("listaAmigos").appendChild(li);

    input.value = "";

    // Habilita o botão de sorteio quando há pelo menos dois participantes
    if (listaDeAmigos.length >= 2) {
        document.getElementById("botaoSortear").disabled = false;
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois participantes para realizar o sorteio.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `<h3>O sorteado foi: ${nomeSorteado} </h3>`;
}




