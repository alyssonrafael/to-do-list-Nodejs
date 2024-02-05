# Frontend - To-Do List

## Visão Geral

Frontend da aplicação To-Do List, desenvolvido com HTML, CSS e JavaScript. Este aplicativo se conecta a um backend para gerenciar tarefas, permitindo a adição, edição, exclusão e visualização de tarefas.

## Instruções de Instalação

```bash
# Clone o repositório do frontend:
git clone https://github.com/alyssonrafael/to-do-list-Nodejs
```
# Navegue até o diretório do frontend:
to-do-list-Nodejs/frontend 
# Como Usar

1. Abra o arquivo `index.html` em seu navegador.

2. Após configurado o back end você podera
   - Adicionar novas tarefas.
   - Editar tarefas existentes.
   - Excluir tarefas.
   - Visualizar o status de cada tarefa.
3. As tarefas são atualizadas em tempo real com base nas interações do usuário.

# Para pre-vizualização

1. Para pre-vizualização no arquivo index.html você poderá retirar o comentario do seguinte treço e assim tera o modelo de como as tarefas serão exibidas.

```HTML
<tbody>
            <!-- ex para como irira ficar o modelo da tabela  -->

            ###retire esse comentário abaixo para exibir o modelo sem precisar do backend 

                <!-- <tr>  
                    <td>fazer tarefa</td>
                    <td>01/01/2023</td>
                    <td>
                        <select >
                            <option value="Pendente">Pendente</option>
                            <option value="em andamento">em andamento</option>
                            <option value="comcluida">comcluida</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn-action">
                            <span class="material-symbols-outlined">
                            edit
                            </span>
                        </button>
                        <button class="btn-action">
                            <span class="material-symbols-outlined">
                            delete
                            </span>
                        </button>
                    </td>


                </tr> -->
</tbody>
```

# Estrutura de Arquivos

- **`index.html`:** Arquivo HTML principal que contém a estrutura da página.

- **`css/style.css`:** Arquivo CSS contendo estilos para o layout e aparência.

- **`js/script.js`:** Arquivo JavaScript contendo a lógica de interação com o usuário.