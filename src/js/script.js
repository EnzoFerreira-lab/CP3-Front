window.onload = function() {
    const botoes = document.querySelectorAll(".comprar");
    botoes.forEach(btn => {
        btn.addEventListener("click", () => {
            const nome = btn.parentElement.querySelector("h3").textContent;
            alert("Você adicionou: " + nome);
        });
    });
};