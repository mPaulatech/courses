let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listElement = document.querySelector("#app ul");

let tarefas = JSON.parse(localStorage.getItem("localStorage")) || [];

function renderTarefas(){
    listElement.innerHTML = '';

    tarefas.map((todo) =>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

renderTarefas();

function adiconarTarefas(){
    if(inputElement.value === ''){
        alert("Adicione uma tarefa");
        return false;
    }else{
        let novaTarefa = inputElement.value

        tarefas.push(novaTarefa);
        inputElement.value = '';
    }

    renderTarefas();
    salvarDados();
}

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1)
    renderTarefas();
    salvarDados();
    // splice: serve para deletar
}

buttonElement.onclick = adiconarTarefas;

// LocalStorage
function salvarDados(){
    localStorage.setItem("localStorage", JSON.stringify(tarefas));
}