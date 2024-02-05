// Seleciona o elemento tbody da tabela no HTML
const tbody = document.querySelector('tbody');
// Seleciona o formulário de adição de tarefas
const addForm = document.querySelector('.add-form');
// Seleciona o campo de entrada de texto no formulário
const iputTask = document.querySelector('.input-task');

// Função assíncrona para buscar tarefas da API
const fetchtasks = async () => {
  // Faz uma requisição à API para obter as tarefas
  const response = await  fetch('http://localhost:3333/tasks');
  const tasks = await response.json();
  return tasks;
}

// Função assíncrona para adicionar uma nova tarefa
const addTask = async (event) => {
  event.preventDefault();
 // Cria um objeto representando a nova tarefa
  const task = {title: iputTask.value }
 // Faz uma requisição à API para adicionar a nova tarefa
  await fetch('http://localhost:3333/tasks', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(task),
  });
    // Recarrega a lista de tarefas
  loadtasks();
  // Limpa o campo de entrada de texto
  iputTask.value = ''
}
// Função assíncrona para excluir uma tarefa
const deleteTask = async (id) => {
  // Faz uma requisição à API para excluir a tarefa com o ID especificado
  await fetch(`http://localhost:3333/tasks/${id}`,{
    method: 'delete'
  });
 // Recarrega a lista de tarefas
  loadtasks();
}
// Função assíncrona para atualizar uma tarefa
const updateTask = async ({id, title, status}) => {
  // Faz uma requisição à API para atualizar a tarefa com os novos dados
  await fetch(`http://localhost:3333/tasks/${id}`,{
    method: 'put',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({title , status }),
  });
  // Recarrega a lista de tarefas
  loadtasks();
}
// Função para formatar a data no formato desejado
const formatDate = (dateUTC) => {
  const options = {dateStyle : 'long', timeStyle: 'short'};
  const date = new Date(dateUTC).toLocaleString('pt-br',options);
  return date;
}
// Função para criar um elemento HTML com opcional innerText e innerHTML
const createElement = (tag, innerText = '', innerHTML = '') => {
  const element = document.createElement(tag);

  if(innerText) {
      element.innerText = innerText;
  };

  if(innerHTML) {
    element.innerHTML = innerHTML;
};

  return element;
}
// Função para criar um elemento de seleção (dropdown) com opções pré-definidas
const createSelect = (value) => {
  const options = `
    <option value="Pendente">Pendente</option>
    <option value="Em Andamento">Em Andamento</option>
    <option value="Comcluida">Comcluida</option>
  `;
  const select = createElement('select','',options);

  select.value = value;

  return select;
}

// Função para criar uma linha na tabela representando uma tarefa (criação principal das linhas)
const createRow = (task) => {
  // Extrai propriedades da tarefa para facilitar o acesso
  const {id, title, create_at, status} = task;
 // Cria um elemento <tr> para representar a linha da tabela
  const tr = createElement('tr');
  // Cria um elemento <td> para o título da tarefa
  const tdTitle = createElement('td', title); 
  // Cria um elemento <td> para a data de criação da tarefa, formatada
  const tdCreatedAt = createElement('td', formatDate(create_at));
  // Cria um elemento <td> para o status da tarefa
  const tdStatus = createElement('td');
  // Cria um elemento <td> para as ações relacionadas à tarefa
  const tdActions = createElement('td');
  // Cria um elemento <select> (dropdown) para selecionar o status da tarefa
  const select = createSelect(status);
  
  // Adiciona um ouvinte de evento para detectar mudanças no status e atualizar a tarefa
  select.addEventListener('change', ({target}) => updateTask({... task, status: target.value}));
  // Cria um botão de edição com um ícone e adiciona um ouvinte de evento para abrir o formulário de edição
  const editButton = createElement('button','', '<span class="material-symbols-outlined">edit</span>');
  // Cria um botão de exclusão com um ícone e adiciona um ouvinte de evento para excluir a tarefa
  const deleteButton = createElement('button','','<span class="material-symbols-outlined"> delete</span>');

  // Cria um formulário de edição com um campo de entrada para o título da tarefa
  const editForm = createElement('form');
  const editInput = createElement('input');

  // Define o valor inicial do campo de entrada como o título atual da tarefa
  editInput.value = title

  // Adiciona o campo de entrada ao formulário de edição
  editForm.appendChild(editInput);

  // Adiciona um ouvinte de evento para o envio do formulário de edição
  editForm.addEventListener('submit', (event)=>{
    event.preventDefault();

  // Atualiza a tarefa com o novo título e mantém o status atual
    updateTask({id, title: editInput.value, status});
  });

  // Adiciona um ouvinte de evento para o botão de edição, substituindo o título pela entrada de edição
  editButton.addEventListener('click', ()=> {
    tdTitle.innerText = '';
    tdTitle.appendChild(editForm);
  });
  
  // Adiciona classes aos botões de ação para estilização
  editButton.classList.add('btn-action');
  deleteButton.classList.add('btn-action');

  // Adiciona um ouvinte de evento para o botão de exclusão, chamando a função para excluir a tarefa
  deleteButton.addEventListener('click', () => deleteTask(id));

  // Adiciona o elemento de seleção (status) à célula correspondente na tabela
  tdStatus.appendChild(select);

  // Adiciona os botões de edição e exclusão à célula de ações na tabela
  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  // Adiciona todas as células à linha da tabela
  tr.appendChild(tdTitle);
  tr.appendChild(tdCreatedAt);
  tr.appendChild(tdStatus);
  tr.appendChild(tdActions);

  // Retorna a linha completa
 return tr;
}

// Função para carregar as tarefas na tabela
const loadtasks = async () => {
  // Obtém a lista de tarefas da API
    const tasks = await fetchtasks();
  // Limpa o conteúdo atual do tbody
    tbody.innerHTML = ''
  // Itera sobre as tarefas e cria uma linha para cada uma delas
    tasks.forEach((task) => {
        const tr = createRow(task);
        tbody.appendChild(tr);
    });
}
// Adiciona um ouvinte de evento para o formulário de adição de tarefas
addForm.addEventListener('submit', addTask);
// Inicializa a página carregando as tarefas
loadtasks();