let perguntasQuiz = [
    { pergunta: "O que significa a sigla TLE usada no projeto?", opcoes: ["Two-Line Element", "Total Lunar Eclipse", "Terminal Launch Engine", "Time Limit Exceeded"], respostaCerta: 0 },
    { pergunta: "Qual linguagem foi utilizada no backend do ecossistema?", opcoes: ["Java", "C++", "Python", "JavaScript"], respostaCerta: 2 },
    { pergunta: "Qual é o limite de segurança de radar do Fly-Space?", opcoes: ["5 km", "10 km", "15 km", "20 km"], respostaCerta: 2 },
    { pergunta: "Qual biblioteca Python é usada para baixar relatórios de telemetria?", opcoes: ["Requests", "urllib", "bs4", "pandas"], respostaCerta: 1 },
    { pergunta: "O que a biblioteca 'random' simula no sistema?", opcoes: ["Rotas de fuga", "Encontros com lixo espacial", "Combustível", "Sinal do satélite"], respostaCerta: 1 },
    { pergunta: "Qual manobra orbital é usada para preservar o equipamento?", opcoes: ["Giro de gravidade", "Aceleração de Hohmann", "Frenagem aerodinâmica", "Estilingue gravitacional"], respostaCerta: 1 },
    { pergunta: "Qual dessas não é uma camada orbital citada no projeto?", opcoes: ["LEO", "MEO", "GEO", "BEO"], respostaCerta: 3 },
    { pergunta: "O que significa Delta-V no contexto de otimização?", opcoes: ["Variação de visão", "Variação de velocidade/combustível", "Vetores espaciais", "Volume da nave"], respostaCerta: 1 },
    { pergunta: "O que o sistema faz se a rota de lançamento cruzar com detritos?", opcoes: ["Aborta a missão", "Destrói o lixo", "Ignora o aviso", "Acelera o foguete"], respostaCerta: 0 },
    { pergunta: "O sistema de evasão tenta elevações temporárias de quais altitudes?", opcoes: ["10, 20 ou 30km", "20, 40 ou 60km", "50, 100 ou 150km", "5, 10 ou 15km"], respostaCerta: 1 }
];


let indicePerguntaAtual = 0;
let acertos = 0;

function carregarProximaPergunta() {
    let elementoTexto = document.getElementById("question-text");
    let elementoOpcoes = document.getElementById("options-container");
    let elementoResultado = document.getElementById("quiz-result");

    if (indicePerguntaAtual < perguntasQuiz.length) {
        let perguntaAtual = perguntasQuiz[indicePerguntaAtual];

        elementoTexto.innerHTML = (indicePerguntaAtual + 1) + ". " + perguntaAtual.pergunta;

        elementoOpcoes.innerHTML = "";

        for (let i = 0; i < perguntaAtual.opcoes.length; i++) {
            let botao = document.createElement("button");
            botao.innerHTML = perguntaAtual.opcoes[i];
            botao.className = "option-btn";

            botao.onclick = function () {
                checarResposta(i);
            };

            elementoOpcoes.appendChild(botao);
        }
    } else {
        elementoTexto.style.display = "none";
        elementoOpcoes.style.display = "none";

        elementoResultado.style.display = "block";
        elementoResultado.innerHTML = "<p>Missão concluída!</p><p>Você acertou " + acertos + " de " + perguntasQuiz.length + " perguntas.</p>";

        let botaoReiniciar = document.createElement("button");
        botaoReiniciar.innerHTML = "Repetir Quiz <i class='fa-solid fa-rotate-right'></i>";
        botaoReiniciar.className = "btn-primary";

        botaoReiniciar.onclick = function () {
            reiniciarQuiz();
        };

        elementoResultado.appendChild(botaoReiniciar);
    }
}

function checarResposta(indiceEscolhido) {
    let perguntaAtual = perguntasQuiz[indicePerguntaAtual];

    if (indiceEscolhido === perguntaAtual.respostaCerta) {
        acertos++;
    }

    indicePerguntaAtual++;
    carregarProximaPergunta();
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    acertos = 0;

    let elementoTexto = document.getElementById("question-text");
    let elementoOpcoes = document.getElementById("options-container");
    let elementoResultado = document.getElementById("quiz-result");

    elementoTexto.style.display = "block";
    elementoOpcoes.style.display = "block";
    elementoResultado.style.display = "none";
    elementoResultado.innerHTML = "";

    carregarProximaPergunta();
}

carregarProximaPergunta();