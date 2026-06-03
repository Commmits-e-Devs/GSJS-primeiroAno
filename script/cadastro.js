const formulario = document.getElementById('meuFormulario');
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const divErro = document.getElementById('mensagemErro');

const sessaoBoasVindas = document.getElementById('sessaoBoasVindas');
const textoBoasVindas = document.getElementById('textoBoasVindas');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let nomeValor = inputNome.value;
    let idadeValor = inputIdade.value;

    const valoresCampos = [nomeValor, idadeValor];
    let camposEstaoVazios = false;

    for (let i = 0; i < valoresCampos.length; i++) {
        if (valoresCampos[i].trim() === "") {
            camposEstaoVazios = true;
        }
    }

    if (camposEstaoVazios === true) {
        divErro.innerText = "Nenhum campo pode ser enviado vazio!";
        return;
    }

    let idadeNumero = Number(idadeValor);

    if (!Number.isInteger(idadeNumero) || idadeNumero < 0) {
        divErro.innerText = "A idade deve ser um número inteiro e não pode ser negativa!";
        return;
    }

    divErro.innerText = "";

    sessaoBoasVindas.style.display = "flex";

    textoBoasVindas.innerText = `Olá, ${nomeValor}! Muito obrigado por preencher nosso formulário. Constatamos que você tem ${idadeNumero} anos. Seja bem-vindo(a)!`;
});