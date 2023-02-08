///// seleção de elementos /////
const formulario = document.querySelector('.formulario');
const newInput = document.querySelector('.new-input');
const listTarefas = document.querySelector('.list-tarefas');
const editFormulario = document.querySelector('.edit-formulario');
const editInput = document.querySelector('.edit-input');
const btnEditCancel = document.querySelector('.btn-edit-cancel');
let antigoTituloTarefa;

///// funções /////
const saveTarefa = (text) => {
    //criando a div tarefas
    const tarefas = document.createElement("div");
    tarefas.classList.add("tarefas");

    //criando o título da tarefa
    const tituloTarefa = document.createElement("h3");
    tituloTarefa.innerText = text;
    tarefas.appendChild(tituloTarefa);

    //criando botão concluir tarefa
    const btnCheck = document.createElement("button");
    btnCheck.classList.add("tarefa-check");
    btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
    tarefas.appendChild(btnCheck)

    //criando botão editar tarefa
    const btnEdit = document.createElement("button");
    btnEdit.classList.add("tarefa-edit");
    btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    tarefas.appendChild(btnEdit)

    //criando botão remover tarefa
    const btnRemove = document.createElement("button");
    btnRemove.classList.add("tarefa-remove");
    btnRemove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    tarefas.appendChild(btnRemove)

    //colocando tarefas em list-tarefas
    listTarefas.appendChild(tarefas);
    newInput.value = ""
    newInput.focus();
}

const editForms = () => {
    editFormulario.classList.toggle("hide");
    formulario.classList.toggle("hide");
    listTarefas.classList.toggle("hide");
}

const  atualizarTarefa = (text) => {
    const tarefas = document.querySelectorAll(".tarefas");

    tarefas.forEach((tarefas) => {
        let tituloTarefa = tarefas.querySelector("h3");

        if (tituloTarefa.innerText === antigoTituloTarefa){
            tituloTarefa.innerText = text;
        }
    })
}


///// eventos /////
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = newInput.value;

    if (inputValue) {
        saveTarefa(inputValue);
    }
})

document.addEventListener("click", (event) => {
    const target = event.target;
    const parent = target.closest("div");
    let tituloTarefa;

    if (parent && parent.querySelector("h3")) {
        tituloTarefa = parent.querySelector("h3").innerText;
    }

    if (target.classList.contains("tarefa-check")) {
        parent.classList.toggle("done");
    }

    if (target.classList.contains("tarefa-edit")) {
        editForms();
        editInput.value = tituloTarefa;
        antigoTituloTarefa = tituloTarefa;
    }

    if (target.classList.contains("tarefa-remove")) {
        parent.remove();
    }
})

btnEditCancel.addEventListener("click", (event) => {
    event.preventDefault();
    editForms();
})

editFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const editInputValue = editInput.value;

    if(editInputValue){
         atualizarTarefa(editInputValue);
    }

    editForms();
})
