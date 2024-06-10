function startAnimation() {
    var redScreen = document.getElementById('red-screen');
    redScreen.style.display = 'block'; // Exibe a div

    // Adiciona a classe 'show-loading' após 1 segundo
    setTimeout(function() {
        redScreen.style.opacity = '1'; // Gradualmente aumenta a opacidade
        var loading = document.getElementById('loading');
        loading.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o loading
        setTimeout(function() {
            loading.style.opacity = '1'; // Gradualmente aumenta a opacidade do loading
        }, 100); // Adiciona um pequeno atraso para garantir a animação
    }, 500); // Adiciona um pequeno atraso para garantir a animação

    // Redireciona para menu.html após 6 segundos
    setTimeout(function() {
        window.location.href = 'cupom.html';
    }, 4000); // 6 segundos
}



