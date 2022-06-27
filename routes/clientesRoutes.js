const express = require('express')
const router = express.Router()
const ClienteController = require('./controllers/ClienteController')

router.post('/add', ClienteController.createclienteSave)
router.post('/remove', ClienteController.removecliente)
router.get('/edit/:id', ClienteController.updatecliente)
router.post('/edit', ClienteController.updateclientePost)
router.get('/', ClienteController.showclientes)

module.exports = router
