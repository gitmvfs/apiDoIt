const { DataTypes } = require('sequelize');
const conectar_db = require('../services/conectar_db'); 

const sequelize = conectar_db

const usuarioModel = sequelize.define('USUARIO', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 1 // Valor padrão definido como 1
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tema: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isIn: [['claro', 'escuro']] // Apenas 'claro' ou 'escuro' são permitidos
        }
    }
}, {
    tableName: 'USUARIO',
    timestamps: false
});

usuarioModel.sync()
    .then(() => {
        console.log('Tabela USUARIO sincronizada com o banco de dados.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar a tabela USUARIO:', error);
    });

module.exports = usuarioModel