// =============================================
// Fly-Space — Slideshow da Hero Section
// =============================================

const slides = [
    {
        img: './Img/satelite.jpg',
        badge: 'Problema',
        title: 'Órbita em Risco',
        desc: 'Um satélite no caminho errado. Consequências irreversíveis.'
    },
    {
        img: './Img/photo-1541185933-ef5d8ed016c2.avif',
        badge: 'Tecnologia',
        title: 'Tecnologias Futuras',
        desc: 'Queremos usar RUST para simulações de alta performance e segurança. Python para análises avançadas e machine learning.'
    },
    {
        img: './Img/photo-1451187580459-43490279c0fa.avif',
        badge: 'Objetivos',
        title: 'Sem Colisões. Sem Perdas.',
        desc: 'Órbitas mapeadas. Satélites alocados com segurança e eficiência.'
    },
    {
        img: './Img/space-space-art-digital-art-earth-wallpaper-preview.jpg',
        badge: 'Público-Alvo',
        title: 'Para quem deseja alcançar os céus',
        desc: 'Agências, engenheiros e analistas que operam frotas orbitais reais.'
    },
    {
        img: './Img/photo-1446776811953-b23d57bd21aa.avif',
        badge: 'Benefícios',
        title: 'Visibilidade Total da Frota',
        desc: 'Radar ativo. Rotas seguras. Combustível otimizado. Missão protegida.'
    }
];

let current = 0;
let timer = null;
const INTERVAL = 7000;

// ---- Renderiza o slideshow na hero ----
function initSlideshow() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Cria a estrutura
    hero.innerHTML = `
        <div class="ss-track">
            ${slides.map((s, i) => `
                <div class="ss-slide ${i === 0 ? 'active' : ''}" data-i="${i}">
                    <div class="ss-bg" style="background-image: url('${s.img}')"></div>
                    <div class="ss-overlay"></div>
                </div>
            `).join('')}
        </div>

        <div class="hero-content">
            <span class="ss-badge" id="ss-badge">${slides[0].badge}</span>
            <h1 id="ss-title">${slides[0].title}</h1>
            <p id="ss-desc">${slides[0].desc}</p>
            <a href="#problema" class="btn-primary">Descubra a Missão</a>
        </div>

        <button class="ss-btn ss-prev" aria-label="Slide anterior">&#8592;</button>
        <button class="ss-btn ss-next" aria-label="Próximo slide">&#8594;</button>

        <div class="ss-dots">
            ${slides.map((_, i) => `<span class="ss-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></span>`).join('')}
        </div>

        <div class="ss-progress"><div class="ss-bar" id="ss-bar"></div></div>
    `;

    // Eventos
    hero.querySelector('.ss-next').addEventListener('click', () => advance(current + 1));
    hero.querySelector('.ss-prev').addEventListener('click', () => advance(current - 1));
    hero.querySelectorAll('.ss-dot').forEach(d =>
        d.addEventListener('click', () => advance(+d.dataset.i))
    );

    // Pausa no hover
    hero.addEventListener('mouseenter', stopTimer);
    hero.addEventListener('mouseleave', startTimer);

    startTimer();
}

function goTo(n) {
    const allSlides = document.querySelectorAll('.ss-slide');
    const allDots = document.querySelectorAll('.ss-dot');

    allSlides[current].classList.remove('active');
    allDots[current].classList.remove('active');

    current = (n + slides.length) % slides.length;

    allSlides[current].classList.add('active');
    allDots[current].classList.add('active');

    // Atualiza texto com fade
    const badge = document.getElementById('ss-badge');
    const title = document.getElementById('ss-title');
    const desc = document.getElementById('ss-desc');
    const curr = document.getElementById('ss-curr');

    [badge, title, desc].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
    });

    setTimeout(() => {
        badge.textContent = slides[current].badge;
        title.textContent = slides[current].title;
        desc.textContent = slides[current].desc;
        if (curr) {
            curr.textContent = String(current + 1).padStart(2, '0');
        }
        [badge, title, desc].forEach(el => {
            el.style.opacity = '';
            el.style.transform = '';
        });
    }, 200);

    resetBar();
}

function advance(n) {
    stopTimer();
    goTo(n);
    startTimer();
}

function startTimer() {
    timer = setInterval(() => goTo(current + 1), INTERVAL);
    animateBar();
}

function stopTimer() {
    clearInterval(timer);
}

function resetBar() {
    const bar = document.getElementById('ss-bar');
    if (!bar) return;
    bar.style.transition = 'none';
    bar.style.width = '0%';
    // Força reflow
    void bar.offsetWidth;
    bar.style.transition = `width ${INTERVAL}ms linear`;
    bar.style.width = '100%';
}

function animateBar() {
    const bar = document.getElementById('ss-bar');
    if (!bar) return;
    bar.style.transition = 'none';
    bar.style.width = '0%';
    void bar.offsetWidth;
    bar.style.transition = `width ${INTERVAL}ms linear`;
    bar.style.width = '100%';
}

// ---- Inicia quando o DOM estiver pronto ----
document.addEventListener('DOMContentLoaded', initSlideshow);   