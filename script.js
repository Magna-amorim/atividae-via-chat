// script.js

document.getElementById("formTarefa").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter o valor da tarefa do input
    var tarefa = document.getElementById("tarefaInput").value;

    // Verificar se a tarefa não está vazia
    if (tarefa.trim() !== "") {
        // Criar elemento de lista
        var lista = document.getElementById("listaTarefas");
        var li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = tarefa + '<span class="badge badge-danger badge-pill"><i class="fa fa-trash"></i></span>';

        // Adicionar a tarefa à lista
        lista.appendChild(li);

        // Limpar o campo de input
        document.getElementById("tarefaInput").value = "";

        // Adicionar um ouvinte de evento para remover a tarefa ao clicar no ícone de lixeira
        li.querySelector(".fa-trash").addEventListener("click", function () {
            li.remove();
        });
    }
});
