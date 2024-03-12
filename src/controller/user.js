const userModel = require("../models/userModel")

async function recuperarUsuario() {
    return new Promise(async (resolve, reject) => {

        const id = 1;
        try {
            const usuario = await userModel.findOne({
                where: {
                    id: id
                }
            });
            resolve({ data: usuario, code: 200 });
        } catch (err) {
            reject({ err: err, code: 500 });
        }
    });
}

async function criarUsuario(nome, tema) {
    return new Promise(async (resolve, reject) => {

        const id = 1;
        try {
            const usuario = await userModel.create(
                {
                    nome: nome,
                    tema: tema
                },
                {
                    where: {
                        id: id
                    }
                });
            resolve({ data: usuario, code: 200 });
        } catch (err) {
            reject({ err: err, code: 500 });
        }
    });
}

async function atualizarUsuario(nome, tema) {
    return new Promise(async (resolve, reject) => {

        const id = 1;
        try {
            const usuario = await userModel.update(
                {
                    nome: nome,
                    tema: tema
                },
                {
                    where: {
                        id: id
                    }
                });
            resolve({ data: usuario, code: 200 });
        } catch (err) {
            reject({ err: err, code: 500 });
        }
    });
}
