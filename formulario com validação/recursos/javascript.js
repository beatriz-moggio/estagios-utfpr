const formulario = document.querySelector('.form');
const nomeInput = document.querySelector('.nome');
const emailInput = document.querySelector('.email');
const senhaInput = document.querySelector('.senha');
const jobSelect = document.querySelector('.job');
const mensagemTextArea = document.querySelector('.mensagem');

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se nome é vazio
    if(nomeInput.value === ""){
        alert("Por favor, preencha o campo nome.");
        nomeInput.focus();
        return;
    }

    // verifica se e-mail é válido
    if(emailInput.value === "" || !emailValido(emailInput.value)){
        alert("Por favor, preencha o campo e-mail.");
        emailInput.focus();
        return;
    }

    // verifica a senha
    if(!senhaValida(senhaInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 dígitos.")
        return;
    }

    // verifica se a situação foi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione uma situação.")
        return;
    }

    // verifica se a mensagem está preenchida
    if(mensagemTextArea.value === ""){
        alert("Por favor, escreva uma mensagem.")
        return;
    }

    formulario.submit();
});



// função que válida e-mail
function emailValido(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

// função que valida a senha
function senhaValida(password, minDigitos){
    if(password.length >= minDigitos){

        return true;
    }

    returnfalse
}
