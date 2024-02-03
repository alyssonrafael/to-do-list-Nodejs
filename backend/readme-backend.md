<h1 align="center"> API PARA TO-DO-LIST </h1>

<p align="center">
 Backend da aplicação To-Do List, desenvolvido em Node.js com Express e MySQL. Utiliza Docker para a configuração do banco de dados. O ESLint é empregado para garantir a padronização do código, enquanto o dotenv gerencia as variáveis de ambiente.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Instação e teste das rotas">Instalação</a>&nbsp;&nbsp;&nbsp;
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js:** Ambiente de execução JavaScript do lado do servidor.
- **Express:** Framework web para Node.js, simplificando a criação de APIs.
- **ESLint:** Ferramenta de linting para manter o código consistente.
- **dotenv:** Gerenciamento de variáveis de ambiente.
- **MySQL:** Banco de dados relacional utilizado para armazenamento de dados.
- **Docker:** Plataforma para desenvolver, enviar e executar aplicativos em contêineres.(Neste projeto o banco de dados)

## 💻 Projeto

# CRUD

## Funcionalidades Principais

1. **Criar Tarefas (Create):**
   - Adicionar novas tarefas com título e data de vencimento.

2. **Visualizar Tarefas (Read):**
   - Listar tarefas com informações como título, data de criação e vencimento.

3. **Atualizar Tarefas (Update):**
   - Editar informações das tarefas, como título e data de vencimento.

4. **Excluir Tarefas (Delete):**
   - Remover tarefas concluídas ou não relevantes.
## Instação e teste das rotas

**Como Usar**

1. Clone o repositório:
    ```bash
    git clone https://github.com/alyssonrafael/to-do-list-Nodejs
    ```


2. crie um container mySQL facilmente usando o docker
    ```bash
    docker run --name mysql --e MYSQL_ROOT_PASSWORD=(senha que voce defir no arquivo .env) -p 3306:3306 -d mysql

    ```

3. conecte-se ao banco de dados usando alguma extensao do vscode ou algum SGBD de sua preferencia  para usar as querys a seguir --


3. Crie a tabela "tasks":
    ```bash
    # Comando para criar um banco de dados no terminal MySQL
    $ CREATE DATABASE nome_do_banco;

    # Comando para criar a tabela com suas colunas
    $ CREATE TABLE tasks(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(45) NOT NULL,
        status VARCHAR(45) NOT NULL,
        created_at VARCHAR(45) NOT NULL
    );
    ```

4. Preencha as variáveis de ambiente no arquivo `.env` na raiz do projeto:
    ```env
    PORT= [Porta em que o servidor será executado]
    MYSQL_HOST= [O host da sua máquina, por padrão é 'localhost']
    MYSQL_USER= [Seu nome de usuário, por padrão o MySQL usa o usuário 'root']
    MYSQL_PASSWORD= [A senha escolhida durante a instalação do MySQL]
    MYSQL_DB= [O nome do banco de dados criado anteriormente]
    ```

5. Instale as dependências no diretório "backend":
    ```bash
    # Comando para baixar os 'node_modules'
    $ npm install
    ```

6. Inicie o servidor:
    ```bash
    # Comando para iniciar o servidor
    $ npm start
    ```

Este guia fornece os passos necessários para configurar e utilizar a aplicação de lista de tarefas. Certifique-se de seguir cada etapa cuidadosamente para garantir um funcionamento adequado.


