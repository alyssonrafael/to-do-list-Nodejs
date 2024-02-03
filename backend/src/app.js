/**
 * Configuração do Servidor Express
 * 
 * Este módulo configura um servidor Express para lidar com requisições HTTP.
 * Utiliza o módulo 'express' para criar a aplicação e o módulo 'router' para definir as rotas.
 * Configura o uso de 'express.json()' para lidar com dados em formato JSON.
 * Exporta a aplicação Express para ser iniciada em outros arquivos.
 */
// Importa o módulo 'express' para criar o servidor
const express = require('express');
// Importa o módulo 'router' que contém as definições de rota
const router = require('./router');
// Cria a aplicação Express
const app = express();
// Configura o uso do middleware para processar dados em formato JSON
app.use(express.json());
// Configura o uso do módulo 'router' para definir as rotas da aplicação
app.use(router);
// Exporta a aplicação Express para ser iniciada em outros arquivos
module.exports = app;