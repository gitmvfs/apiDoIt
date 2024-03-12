const { DataTypes } = require('sequelize');
const conectar_db = require('../services/conectar_db'); // Supondo que você tenha configurado a conexão Sequelize em um arquivo separado

const sequelize = conectar_db

const tarefaModel = sequelize.define('TAREFAS', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    dataPrevistaTermino: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataCriacao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    categoriaNome: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isIn: [['Personal', 'Academic', 'Professional', 'Social']]
        }
    }
}, {
    tableName: 'TAREFAS',
    timestamps: false
});

tarefaModel.sync()
    .then(() => {
        console.log('Tabela USUARIO sincronizada com o banco de dados.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar a tabela USUARIO:', error);
    });


module.exports = tarefaModel;