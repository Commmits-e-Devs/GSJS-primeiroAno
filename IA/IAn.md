Solicitado a IA:
Primeira interação:
Implementação de 3 opções de troca de cor (TEMA) de fundo da página como faço isso com js no html 
- fiz essa pergunta para somente ter um esboço de como seria o codigo nada foi utilizado do codigo no projeto final
resultado da 1º interação
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Troca de Temas</title>
    
    <style>
        /* =========================================
           1. DEFINIÇÃO DOS TEMAS (CSS)
           ========================================= */
           
        /* Tema 1: Claro (Padrão) */
        body.tema-claro {
            background-color: #ffffff;
            color: #333333;
        }

        /* Tema 2: Escuro */
        body.tema-escuro {
            background-color: #1a1a1a;
            color: #f0f0f0;
        }

        /* Tema 3: Azul/Oceano */
        body.tema-azul {
            background-color: #0d2740;
            color: #e0f2fe;
        }

        /* Estilos básicos para os botões e layout */
        body {
            font-family: Arial, sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease; /* Efeito suave na troca */
            padding: 20px;
        }

        button {
            padding: 10px 20px;
            margin-right: 10px;
            cursor: pointer;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-weight: bold;
        }
    </style>
</head>

<body class="tema-claro"> 

    <div class="controles">
        <h2>Escolha um tema:</h2>
        <button onclick="mudarTema('tema-claro')">☀️ Claro</button>
        <button onclick="mudarTema('tema-escuro')">🌙 Escuro</button>
        <button onclick="mudarTema('tema-azul')">🌊 Azul</button>
    </div>

    <div class="conteudo">
        <h1>Bem-vindo ao meu site</h1>
        <p>Ao clicar nos botões acima, o JavaScript altera a classe da tag &lt;body&gt; e o CSS cuida do resto!</p>
    </div>

    <script>
        function mudarTema(nomeDoTema) {
            // 1. Removemos todas as classes de temas possíveis do <body>
            document.body.classList.remove('tema-claro', 'tema-escuro', 'tema-azul');

            // 2. Adicionamos apenas a classe do tema que o usuário escolheu
            document.body.classList.add(nomeDoTema);

            // 3. Salva a escolha no navegador (assim o tema continua se ele der F5)
            localStorage.setItem('temaSalvo', nomeDoTema);
        }

        // Esta função roda automaticamente assim que a página carrega
        window.onload = function() {
            // Verifica se existe algum tema salvo de visitas anteriores
            const temaAnterior = localStorage.getItem('temaSalvo');
            
            if (temaAnterior) {
                // Se existir, aplica o tema salvo
                mudarTema(temaAnterior);
            }
        };
    </script>

</body>
</html>

2º interação 
pedi para ela fazer com base no meu html do meu projeto
 <!DOCTYPE html>

<html lang="pt-BR">


<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>GS Front-end</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/reset.css">

    <link rel="stylesheet" href="css/variaveis.css">

    <link rel="stylesheet" href="css/style.css">

    <script src="./script.js" defer></script>

    <script src="script/trocafundo.js" defer></script>

    <link rel="stylesheet" href="css/trocafundoCSS.css">
</head>
<body>
    <header class="navbar">
        <div class="logo">
            <h1>Fly-Space</h1>
        </div>

        <nav>
            <ul class="nav-links">
                <li><a href="#problema">Problema</a></li>
                <li><a href="#tecnologia">Tecnologia</a></li>
                <li><a href="#objetivos">Objetivos</a></li>
                <li><a href="#publico">Público-Alvo</a></li>
                <li><a href="#beneficios">Benefícios</a></li>
                <li><a href="#dia-a-dia">Dia a Dia</a></li>
                <div class="controles">
                    <li><button onclick="mudarTema('tema-claro')">☀️ Claro</button></li>
                    <li><button onclick="mudarTema('tema-escuro')">🌙 Escuro</button></li>
                    <li><button onclick="mudarTema('tema-azul')">🌊 Azul</button></li>
                </div>
            </ul>
        </nav>
    </header>
    <section class="hero">
        <div class="hero-content">
            <i class="fa-solid fa-user-astronaut astronaut-icon"></i>
            <h1>Olhando pelo Futuro do Nosso Planeta</h1>
            <p>Conectando tecnologia orbital de ponta à preservação ambiental em tempo real.</p>
            <a href="#problema" class="btn-primary">Descubra a Missão</a>
        </div>
    </section>
    <main>
        <section id="problema" class="section-container content-left">
            <div class="text-block">
                <h2>01. O Desafio</h2>
                <h1 class="section-badge">Principais dores orbitais:</h1>
                <ul class="styled-list">
                    <li>Acúmulo crônico de lixo espacial e riscos iminentes de colisões entre satélites ativos e detritos.</li>
                    <li>Complexidade no cálculo de altitude e monitoramento da densidade de tráfego nas camadas terrestres.</li>
                </ul>
            </div>
            <div class="image-block">
                <img src="./Img/satelite.jpg" alt="Satelite sobrevoando a orbita terrestre com a luz do sol atraz" title="Satelite sobrevoando a orbita terrestre com a luz do sol atraz">
            </div>
        </section>
        <section id="tecnologia" class="section-container content-right dark-bg">
            <div class="image-block">
                <img src="./Img/photo-1541185933-ef5d8ed016c2.avif" alt="foguete da space x decolando para transportar satelites" title="foguete da space x decolando para transportar satelites">
            </div>
            <div class="text-block">
                <h2>02. Tecnologia</h2>
                <h1 class="section-badge">Processamento lógico e matemático:</h1>
                <ul class="styled-list">
                    <li>Algoritmos em Python com interface interativa e consumo de dados TLE em tempo real via GitHub.</li>
                    <li>Simulações estocásticas estruturadas em matrizes para mapear encontros de radar com detritos espaciais aleatórios.</li>
                </ul>
            </div>
        </section>
        <section id="objetivos" class="section-container content-left">
            <div class="text-block">
                <h2>03. Metas</h2>
                <h1 class="section-badge">Objetivos do sistema:</h1>
                <ul class="styled-list">
                    <li>Mapeamento automático de dados TLE e alocação segura de novos satélites em vagas livres orbitais.</li>
                    <li>Monitoramento inteligente da frota com protocolos automatizados de evasão para evitar colisões catastróficas.</li>
                </ul>
            </div>
            <div class="image-block">
                <img src="./Img/photo-1451187580459-43490279c0fa.avif" alt="Rede global conectada por dados digitais" title="Rede global conectada por dados digitais">
            </div>
        </section>
        <section id="publico" class="section-container content-right dark-bg">
            <div class="image-block">
                <img src="./Img/space-space-art-digital-art-earth-wallpaper-preview.jpg" alt="estação espacial sobre a orbita da terra ao fundo o brilho afuscante do sol" title="estação espacial sobre a orbita da terra ao fundo o brilho afuscante do sol">
            </div>
            <div class="text-block">
                <h2>04. Público-Alvo</h2>
                <h1 class="section-badge">Impacto Direto:</h1>
                <div class="grid-targets">
                    <div class="target-card">
                        <p><strong>Agências e engenheiros aeroespaciais que planejam lançamentos altamente seguros e gerenciam grandes frotas orbitais.</strong></p>
                        <p><strong>Analistas de tráfego que necessitam de relatórios detalhados sobre a ocupação atual da órbita terrestre.</strong></p>
                    </div>
                </div>
            </div>
        </section>
        <section id="beneficios" class="section-container content-left">
            <div class="text-block">
                <h2>05. Benefícios</h2>
                <h1 class="section-badge">Nosso Diferencial:</h1>
                <ul class="styled-list">
                    <li><strong>Segurança Patrimonial: Monitoramento constante via radar para evitar colisões e perda de equipamentos valiosos.</strong></li>
                    <li><strong>Otimização e Consciência: Cálculos precisos de combustível e transformação de dados TLE complexos em relatórios claros.</strong></li>
                </ul>
            </div>
            <div lass="image-block">
                <img src="./Img/photo-1446776811953-b23d57bd21aa.avif" alt="Visão da Terra a partir da cabine de comando espacial" title="Visão da Terra a partir da cabine de comando espacial">
            </div>
        </section>
        <section id="dia-a-dia" class="section-container content-right dark-bg">
            <div class="video-block">
                <video src="./Img/Satellite_Orbiting_Earth_Cinematic.mp4" autoplay muted loop playsinline alt="Um satelite no espaço sobrevoando a orbita terra" title="Um satelite no espaço sobrevoando a orbita terra"></video>
            </div>
            <div class="text-block">
                <h2>06. Dia a Dia</h2>
                <h1 class="section-badge">Aplicações Práticas:</h1>
                <ul class=styled-list">
                    <li>Operadores analisam o congestionamento orbital através de relatórios claros de telemetria extraídos diariamente.</li>
                    <li>Engenheiros simulam rotas seguras e executam desvios automáticos baseados em alertas preditivos de colisão.</li>
                </ul>
            </div>
        </section>
    </main>
    <footer>
        <div class="footer-content">
            <div class="team-info">
                <p><strong>Membros do Grupo:</strong></p>
                <br>
                <ul>
                    <li>Nicolas Ramalho - RM 572939</li>
                    <li>João Arruda - RM 570342</li>
                    <li>Diogo Bittar - RM 569657</li>
                    <li>Vitor Viaro - RM 569804</li>
                    <li>Lucas Lima - RM 572047</li>
                </ul>
            </div>
            <p>&copy; 2026. Todos os direitos reservados.</p>
        </div>
    </footer>
</body>
</html> troca o fundo desse html aqui 

-Esse o meu o prompt de pergunta porem ele veio com alguns erros de emoje e alguns conflitos com o que os outros integrantes tinham feito por isso fiz algums alterações
sendo ela a cor de fundo e a cor das letras assim deixando mais com a nossa cara o projeto, e com isso tirando alguns bugs que poderam ter no futuro com as alterações dos
meus colegas.