const tarefaModel = require("../models/tarefasModel");
const { recuperarTarefaPelaCategoria } = require("./tarefas");

function contagemTarefasPorCategoria() {

    return new Promise(async (resolve, reject) => {
        try {
            const numTarefasPersonal = await recuperarTarefaPelaCategoria("Personal")
            const numTarefasSocial = await recuperarTarefaPelaCategoria("Social")
            const numTarefasProfessional = await recuperarTarefaPelaCategoria("Professional")
            const numTarefasAcademic = await recuperarTarefaPelaCategoria("Academic")

            const response = {
                contagemPersonal: numTarefasPersonal.length,
                contagemSocial: numTarefasSocial.length,
                contagemProfessional: numTarefasProfessional.length,
                contagemAcademic: numTarefasAcademic.length,
                numTarefasTotal: numTarefasProfessional.length + numTarefasAcademic.length + numTarefasPersonal.length + numTarefasSocial.length
            }
            resolve(response)
        }
        catch (err) {
            reject(err)
        }
    })


}
const fun = async () => {
    const response = await contagemTarefasPorCategoria()

    console.log(response)
}

fun()
