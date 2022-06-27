const express = require('express')
const router = express.Router()
const produtoController = require('./controllers/produtoController')

router.get('/search', produtoController.pesquisa)

router.post('/add', produtoController.createprodutoSave)
router.post('/remove', produtoController.removeproduto)
router.get('/edit/:id', produtoController.updateproduto)
router.post('/edit', produtoController.updateprodutoPost)
router.get('/', produtoController.showprodutos)

module.exports = router
