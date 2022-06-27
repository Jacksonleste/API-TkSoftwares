const Produto = require('../models/produto')

module.exports = class produtoController {
  
  static createprodutoSave(req, res) {

    req.body.forEach((data)=>{
      const produto = {
        nome: data.nome,
        preco: data.preco,
        tipo: data.tipo,
        categoria: data.categoria,
        descricao: data.descricao,
        imgCapa: data.imgCapa,
        imgBanner: data.imgBanner,
        imgLogo: data.imgLogo
      }

      Produto.create(produto)
      .then(res.send())
      .catch((err) => console.log(err))
    })
  }

  static showprodutos(req, res) {
    Produto.findAll({order: [['nome', 'ASC']]}, { raw: true })
      .then((data) => {
        let emptyprodutos = false

        if (data.length === 0) {
          emptyprodutos = true
        }

        res.json(data)
      })
      .catch((err) => console.log(err))
  }

  static removeproduto(req, res) {
    const id = data.id

    Produto.destroy({ where: { id: id } })
      .then(res.redirect(301,'/produtos'))
      .catch((err) => console.log())
  }

  static updateproduto(req, res) {
    const id = req.params.id

    Produto.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.json(produto.data)
      })
      .catch((err) => console.log())
  }

  static updateprodutoPost(req, res) {
    const id = data.id

    const produto = {
      nome: data.nome,
      preco: data.preco,
      tipo: data.tipo,
      categoria: data.categoria,
      descricao: data.descricao,
      imgCapa: data.imgCapa,
      imgBanner: data.imgBanner,
      imgLogo: data.imgLogo
    }

    Produto.update(produto, { where: { id: id } })
      .then(res.json(301,produto))
      .catch((err) => console.log())
  }


  static pesquisa(req, res) {
    const nome = req.query.nome
    const { Op } = require("sequelize");

    
    Produto.findAll({where:{nome: {[Op.like]: `%${nome}%`}}, raw: true })
    .then((data) => {
      let emptyprodutos = false

      if (data.length === 0) {
        emptyprodutos = true
      }

      res.json(data)
    })
    .catch((err) => console.log(err))
  }

}
