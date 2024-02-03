/*
 * Configuração do Banco de Dados MySQL
 * 
 * Utiliza o módulo 'dotenv' para carregar as variáveis de ambiente do arquivo '.env'.
 * Configura uma conexão com o banco de dados MySQL usando o módulo 'mysql2/promise'.
 * Exporta a conexão para ser utilizada em outras partes da aplicação.
 */
// Carrega as variáveis de ambiente do arquivo '.env'
require('dotenv').config();
// Importa o módulo 'mysql2/promise'
const mysql = require('mysql2/promise');
// Configura uma conexão com o banco de dados MySQL
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});
// Exporta a conexão para ser utilizada em outras partes da aplicação
module.exports = connection;