/**
 * Inicialização do Servidor
 * 
 * Este arquivo inicia o servidor Express configurado no módulo 'app'.
 * Utiliza o módulo 'dotenv' para carregar as variáveis de ambiente do arquivo '.env'.
 * Define a porta na qual o servidor será executado, utilizando a variável de ambiente 'PORT' ou 3333 como padrão.
 * Inicia o servidor e imprime uma mensagem indicando a porta em que está sendo executado.
 */
// Importa a aplicação Express configurada no módulo 'app
const app = require('./app');
// Carrega as variáveis de ambiente do arquivo '.env'
require('dotenv').config();
// Define a porta na qual o servidor será executado
const PORT = process.env.PORT || 3333;
// Inicia o servidor e imprime uma mensagem indicando a porta em que está sendo executado
app.listen(PORT, () => console.log(`Server running or port ${PORT}`));