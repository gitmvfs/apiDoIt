const tarefaModel = require("../models/tarefasModel");

async function criarTarefa(titulo, dataPrevistaTermino, descricao, concluido, categoriaNome) {
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
                    categoriaNome: categoriaNome
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
                        categoriaNome: nomeCategoria
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


// const dataTeste = new Date().toISOString().slice(0, 19).replace('T', ' ');

// criarTarefa("teste",dataTeste,"sim",0,"Personal")
// .then((responsta) => console.log(responsta))
// .catch((err) => console.log("erro " +err))

// const dataTeste = new Date().toISOString().slice(0, 19).replace('T', ' ');

// atualizarTarefa(3,"teste previous",dataTeste,"sim",1)
// .then((responsta) => console.log(responsta))
// .catch((err) => console.log("erro " +err))


// deletarTarefa(1)
// .then((r) => console.log(r))
// .catch((e) => console.log(e))

// recuperarTodasTarefas()
// .then((r) => console.log(r[1]))
// .catch((e) => console.log(e))

// recuperarTarefaPelaCategoria("Academic")
//     .then((r) => console.log(r))
//     .catch((e) => console.log(e))

