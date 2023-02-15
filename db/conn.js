const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('heroku_ecb8c3ea0f4c5a9', 'bd69b5abdb8901', '140515ad', {
  host: 'us-cdbr-east-06.cleardb.net',
  dialect: 'mysql',
})
// mysql://bd69b5abdb8901:140515ad@us-cdbr-east-06.cleardb.net/heroku_ecb8c3ea0f4c5a9?reconnect=true

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
