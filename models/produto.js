const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const produto = db.define('produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.FLOAT,
    },
    tipo: {
        type: DataTypes.STRING,
     },
    categoria: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.STRING(5000),
    },
    imgCapa: {
        type: DataTypes.STRING(2000),
    },
    imgBanner: {
        type: DataTypes.STRING(2000),
    },
    imgLogo: {
        type: DataTypes.STRING(2000),
    }
})


  

module.exports = produto
