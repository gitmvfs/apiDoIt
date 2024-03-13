# Do-it API Rotas
## Tarefa

#### Cria uma nova tarefa

```http
  POST /tarefa
```

| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `titulo`      | `string` | Titulo da tarefa | body     |
| `descricao`      | `string` | Descrição da tarefa | body     |
| `dataPrevistaTermino`      | `date` | Data para o termino da tarefa | body     |
| `concluido`      | `bool` | Se a tarefa está ou não concluida | body     |
| `nomeCategoria`      | `string` | Categoria a qual a tarefa pertence | body     |

#### Edita uma tarefa pelo id

```http
  PUT /tarefa/editar
```
| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `id`      | `string` | id da tarefa | body     |
| `titulo`      | `string` | Titulo da tarefa | body     |
| `descricao`      | `string` | Descrição da tarefa | body     |
| `dataPrevistaTermino`      | `date` | Data para o termino da tarefa | body     |
| `concluido`      | `bool` | Se a tarefa está ou não concluida | body     |
| `nomeCategoria`      | `string` | Categoria a qual a tarefa pertence | body     |

#### Deleta uma tarefa pelo id

```http
  DELETE /tarefa
```
| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `id`      | `string` | id da tarefa | body     |


#### Recupera todas as tarefas

```http
  GET /tarefa
```

#### Resgata as tarefas de uma categoria

```http
  GET /tarefa/categoria
```
| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `categoria`      | `string` | Categoria da tarefa | query     |

#### Conclui uma tarefa pelo id

```http
  PUT /tarefa/concluir
```
| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `id`      | `string` | id da tarefa | query     |


&nbsp;
## User
  
#### Retorna nome e tema do usuário

```http
  GET /usuario
```
#### Cria um novo usuario

```http
  post /usuario
```
| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `nome`      | `string` | nome usuario | body     |
| `tema`      | `string` | tema da aplicação | body     |

#### Atualiza nome e tema do usuário

```http
  put /usuario
```
| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `nome`      | `string` | nome usuario | body     |
| `tema`      | `string` | tema da aplicação | body     |


&nbsp;
## Contagem

#### Retorna a contagem do número de tarefas criadas

```http
  GET /contagem
```

