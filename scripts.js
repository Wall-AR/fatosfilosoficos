document.addEventListener('DOMContentLoaded', function() {
    console.log('Fatos Filosóficos carregado com sucesso!');

    // Scroll suave ao clicar nos links do menu
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
