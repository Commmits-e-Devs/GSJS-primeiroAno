function mudarTema(nomeDoTema) {
    // 1. Removemos todas as classes
    document.body.classList.remove('tema-claro', 'tema-escuro', 'tema-azul');

    // 2. Adicionamos a classe escolhida
    document.body.classList.add(nomeDoTema);

    // 3. Salva a escolha no navegador
    localStorage.setItem('temaSalvo', nomeDoTema);
}

window.onload = function() {
    // Verifica se existe algum tema salvo de visitas anteriores
    const temaAnterior = localStorage.getItem('temaSalvo');
    
    if (temaAnterior) {
        // Se existir, aplica o tema salvo
        mudarTema(temaAnterior);
    }
};