const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const cliente = db.define('cliente', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.TEXT,
    },

    senha: {
        type: DataTypes.TEXT,
    },
    premissao: {
        type: DataTypes.TEXT,
        defaultValue: "padrao"
    }
})

module.exports = cliente
