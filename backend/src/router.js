/**
 * Configuração das Rotas da Aplicação
 * 
 * Este módulo define as rotas da aplicação utilizando o módulo 'express.Router()'.
 * Utiliza os controladores do módulo 'tasksController' para lidar com as operações relacionadas a tarefas.
 * Também utiliza os middlewares do módulo 'tasksMiddleware' para validar dados antes do processamento.
 * Define as rotas para as operações CRUD (Create, Read, Update, Delete) de tarefas.
 */
// Importa o módulo 'express' para criar um roteador
const express = require('express');
// Importa os controladores do módulo 'tasksController'
const tasksControles = require('./controller/tasksController');
// Importa os middlewares do módulo 'tasksMiddleware'
const tasksMiddleware = require('./middlewares/tasksMiddleware');
// Cria um roteador Express
const router = express.Router();
// Define a rota para obter todas as tarefas
router.get('/tasks', tasksControles.getAll);
// Define a rota para criar uma nova tarefa, usando o middleware de validação do corpo da requisição
router.post('/tasks',tasksMiddleware.validateFieldBody, tasksControles.createTask);
// Define a rota para excluir uma tarefa com base no ID
router.delete('/tasks/:id', tasksControles.deleteTask);
// Define a rota para atualizar uma tarefa com base no ID, utilizando os middlewares de validação do corpo e do status
router.put('/tasks/:id', tasksMiddleware.validateFieldBody, tasksMiddleware.validateFieldStatus, tasksControles.updateTask);

// Exporta o roteador para ser utilizado na configuração principal da aplicação
module.exports = router;