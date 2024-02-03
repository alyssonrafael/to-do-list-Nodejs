/* O controlador (controller) é responsável por lidar
com as requisições HTTP relacionadas às tarefas no seu aplicativo To-Do List.
Ele atua como uma ponte entre as rotas da sua aplicação (onde as requisições são recebidas)
e o modelo de tarefas (que interage com o banco de dados).*/

// Importa o modelo de tarefas
const tasksModel = require('../models/taksModel');
// Obtém todas as tarefas
const getAll = async (_req,res) => {
  // Chama a função getAll() do modelo de tarefas
    const tasks =  await tasksModel.getAll();
  // Retorna as tarefas como resposta JSON com status 200
    return res.status(200).json(tasks);
};
// Cria uma nova tarefa
const createTask = async (req,res) =>{
    // Chama a função createTask() do modelo de tarefas com os dados do corpo da requisição
  const createdTask = await tasksModel.createTask(req.body);
    // Retorna a tarefa recém-criada como resposta JSON com status 201
  return res.status(201).json(createdTask);
};
// Deleta uma tarefa com base no ID
const deleteTask = async (req, res) => {
  // Obtém o ID da tarefa a ser excluída a partir dos parâmetros da requisição
  const {id} = req.params;
  // Chama a função deleteTask() do modelo de tarefas com o ID fornecido
  await tasksModel.deleteTask(id);
  // Retorna uma resposta vazia com status 204 (sem conteúdo)
  return res.status(204).json();
};
// Atualiza uma tarefa com base no ID
const updateTask = async(req, res) => {
  // Obtém o ID da tarefa a ser atualizada a partir dos parâmetros da requisição
  const {id} = req.params;
  // Chama a função updateTask() do modelo de tarefas com o ID e os dados do corpo da requisição
  await tasksModel.updateTask(id, req.body);
  // Retorna uma resposta vazia com status 204 (sem conteúdo)
  return res.status(204).json();
}
// Exporta as funções para uso em outros arquivos
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};