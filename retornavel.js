document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const resposta = this.parentElement.nextElementSibling;
            if (resposta.style.display === 'none' || resposta.style.display === '') {
                resposta.style.display = 'block';
                this.textContent = '-';
            } else {
                resposta.style.display = 'none';
                this.textContent = '+';
            }
        });
    });
});
