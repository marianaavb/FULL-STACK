const numeroSecreto = Math.floor(Math.random() * 100);

document.getElementById("guess-form").addEventListener("submit", function (evento) {
    evento.preventDefault();

    const entrada = document.getElementById("c1");
    const palpite = Number(entrada.value);
    const resposta = document.getElementById("resposta");

    if (!Number.isInteger(palpite) || palpite < 0 || palpite > 99) {
        resposta.textContent = "Digite um número inteiro de 0 a 99.";
        resposta.style.setProperty("background-color", "red");
    } else if (palpite > numeroSecreto) {
        resposta.textContent = "Muito alto! Tente um número menor.";
        resposta.style.setProperty("background-color", "red");
    } else if (palpite < numeroSecreto) {
        resposta.textContent = "Muito baixo! Tente um número maior.";
        resposta.style.setProperty("background-color", "red");
    } else {
        resposta.textContent = "Parabéns! Você acertou o número secreto!";
        resposta.style.setProperty("background-color", "lightgreen");
        entrada.disabled = true;
        document.querySelector("button[type='submit']").disabled = true;
    }
});
