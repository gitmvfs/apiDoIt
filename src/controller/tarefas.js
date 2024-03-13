const tarefaModel = require("../models/tarefasModel");

async function criarTarefa(titulo, dataPrevistaTermino, descricao, concluido, nomeCategoria) {
    return new Promise(async (resolve, reject) => {

        const id = 1;
        try {

            const dataCriacao = new Date().toISOString().slice(0, 19).replace('T', ' ');

            const response = await tarefaModel.create(
                {
                    titulo: titulo,
                    dataPrevistaTermino: dataPrevistaTermino,
                    descricao: descricao,
                    concluido: concluido,
                    dataCriacao: dataCriacao,
                    nomeCategoria: nomeCategoria
                });
            resolve({ data: response, code: 200 });
        } catch (err) {
            console.log(err)
            reject({ err: err, code: 500 });
        }
    });
}

async function atualizarTarefa(id, titulo, dataPrevistaTermino, descricao, concluido) {
    return new Promise(async (resolve, reject) => {

        try {

            const dataCriacao = new Date().toISOString().slice(0, 19).replace('T', ' ');

            const response = await tarefaModel.update(
                {
                    titulo: titulo,
                    dataPrevistaTermino: dataPrevistaTermino,
                    descricao: descricao,
                    concluido: concluido,
                    dataCriacao: dataCriacao
                },
                {
                    where: {
                        id: id
                    }
                });
            resolve({ data: response, code: 200 });
        } catch (err) {
            console.log(err)
            reject({ err: err, code: 500 });
        }
    });
}

async function deletarTarefa(id) {
    return new Promise(async (resolve, reject) => {

        try {
            const response = await tarefaModel.findOne({
                where: {
                    id: id
                }
            })

            if (response) {
                response.destroy()
                resolve({ msg: "Tarefa deletada com sucesso", code: 200 })
            }
            else {
                resolve({ msg: "Tarefa não encontrada", code: 200 })
            }

        } catch (err) {
            console.log(err)
            reject({ err: err, code: 500 });
        }
    });
}

async function recuperarTodasTarefas() {
    return new Promise(async (resolve, reject) => {

        try {
            const response = await tarefaModel.findAll()
            resolve(response)
        } catch (err) {
            console.log(err)
            reject({ err: err, code: 500 });
        }
    });
}

async function recuperarTarefaPelaCategoria(nomeCategoria) {
    return new Promise(async (resolve, reject) => {

        try {
            const response = await tarefaModel.findAll(
                {
                    where: {
                        nomeCategoria: nomeCategoria
                    }
                }
            )
            resolve(response)
        } catch (err) {
            console.log(err)
            reject({ err: err, code: 500 });
        }
    })
}

function toogleTarefaConcluir(id) {

    return new Promise(async (resolve, reject) => {
        try {
            await tarefaModel.findOne({  //Faz a primeira pesquisa para encontrar a tarefa
                where: {
                    id: id
                }
            })
                .then(async (tarefa) => { // Caso a tarefa tenha sido encontrada ele compara se está true ou false
                    let concluir = ""

                    //Inverte o operador de true ou false
                    tarefa.dataValues.concluido == true
                        ? concluir = false
                        : concluir = true


                    const att = await tarefaModel.update(// atualiza o concluir
                        {
                            concluido: concluir,
                        },
                        {
                            where: {
                                id: id
                            }
                        })

                    resolve(200)
                })
                .catch((err) => resolve(err))

        }
        catch (err) {
            reject(err)
        }
    })

}

toogleTarefaConcluir(4)

module.exports = { criarTarefa, atualizarTarefa, deletarTarefa, recuperarTodasTarefas, recuperarTarefaPelaCategoria }