// Função principal que é chamada pelos botões no HTML
function mudarTema(nomeDoTema) {
    // 1. Remove qualquer tema que já esteja aplicado no body
    document.body.classList.remove('tema-claro', 'tema-escuro', 'tema-azul');

    // 2. Adiciona o novo tema escolhido
    document.body.classList.add(nomeDoTema);

    // 3. Salva a escolha do usuário no navegador (localStorage)
    localStorage.setItem('temaSalvoGS', nomeDoTema);
}

// Quando a página terminar de carregar, executa isso:
window.addEventListener('DOMContentLoaded', () => {
    // Busca se o usuário já tinha escolhido um tema antes
    const temaAnterior = localStorage.getItem('temaSalvoGS');
    
    if (temaAnterior) {
        // Se já tinha um tema salvo, aplica ele
        mudarTema(temaAnterior);
    } else {
        // Se for a primeira vez no site, começa com o tema escuro (combina com o tema Fly-Space!)
        mudarTema('tema-escuro'); 
    }
});