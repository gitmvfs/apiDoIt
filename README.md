# Do-it API Rotas

&nbsp;
## Primeiro Acesso

| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `nome`      | `string` | **Obrigatório**. Nome do usuário | Body     |
| `tema`      | `string` | **Obrigatório**. Tema visual da aplicação | Body     |


&nbsp;
## Categoria
#### Retorna todas as categorias

```http
  GET /categoria/todas
```

#### Retorna a categoria pelo nome

```http
  GET /categoria
```

| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `nomeCategoria`      | `string` | **Obrigatório**. Nome da categoria | Query     |

&nbsp;
## Contagem

#### Retorna a contagem do número de tarefas criadas

```http
  GET /contagem
```

&nbsp;
## User
  
#### Retorna nome e tema do usuário

```http
  GET /usuario
```
&nbsp;
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
| `fk_categoriaNome`      | `string` | Categoria a qual a tarefa pertence | body     |

#### Recupera todas as tarefas

```http
  GET /tarefa
```

#### Resgata uma tarefa pelo nome

```http
  GET /tarefa
```
| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `titulo`      | `string` | Titulo da tarefa | query     |

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
| `fk_categoriaNome`      | `string` | Categoria a qual a tarefa pertence | body     |

#### Deleta uma tarefa pelo id

```http
  DELETE /tarefa
```
| Parâmetro   | Tipo       | Descrição                                   |Requisição |
| :---------- | :--------- | :------------------------------------------ | :---------|
| `id`      | `string` | id da tarefa | body     |

