/**
 * Funções do Modelo de Tarefas
 * 
 * Este módulo contém funções que interagem com o banco de dados para realizar operações relacionadas a tarefas.
 * Utiliza o módulo 'connection' para estabelecer a conexão com o banco de dados MySQL.
 * Exporta funções para buscar, criar, atualizar e excluir tarefas.
 */
// Importa a conexão com o banco de dados
const connection = require('./connection');
// Obtém todas as tarefas do banco de dados
const getAll = async() => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};
// Cria uma nova tarefa no banco de dados
const createTask = async (task) =>{
  const {title} = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, create_at) VALUES (?, ?, ?)';
  const [createdTask] = await connection.execute(query, [title, 'pendente',dateUTC]);

  return {insertId: createdTask.insertId};
}
// Remove uma tarefa do banco de dados com base no ID
const deleteTask = async(id) => {
  const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?',[id]);
  return removedTask;
}
// Atualiza uma tarefa no banco de dados com base no ID
const updateTask = async(id, task) => {
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
  const {title, status} = task;
  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
}
// Exporta as funções para serem utilizadas em outras partes da aplicação
module.exports={
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
