const buttons = document.querySelectorAll('.questions');

buttons.forEach(buttons => {
    buttons.addEventListener("click", () => {
        const resposta = buttons.nextElementSibling;
        resposta.classList.toggle("ativo");
        const img = buttons.querySelector('img');
        img.src = resposta.classList.contains('ativo') ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg';
    })
})