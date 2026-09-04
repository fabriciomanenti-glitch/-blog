const botaoTema = document.querySelector("#btn-tema");

if (botaoTema) {
    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");
    });
}

const botoes = document.querySelectorAll(".btn-interacao");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function botaoClicado() {
        let texto = botao.querySelector("span");
        let contador = parseInt(texto.textContent);

        if (curtiu === false) {
            contador++;
            curtiu = true;
        } else {
            contador--;
            curtiu = false;
        }

        texto.textContent = contador;
    });
});