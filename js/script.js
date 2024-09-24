// Função para mostrar o conteúdo específico quando o botão é clicado
function showContent(contentId) {
    // Esconde todos os conteúdos
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Mostra o conteúdo específico
    const contentToShow = document.getElementById(contentId);
    contentToShow.classList.add('active');
}
