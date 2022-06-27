const Cliente = require('../models/cliente')

module.exports = class clienteController {
  
  static createclienteSave(req, res) {
    const cliente = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      senha: req.body.senha
    }

    Cliente.create(cliente)
      .then(res.json(cliente))
      .catch((err) => console.log())
  }

  static showclientes(req, res) {
    Cliente.findAll({ raw: true })
      .then((data) => {
        let emptyclientes = false

        if (data.length === 0) {
          emptyclientes = true
        }

        res.json(data)
      })
      .catch((err) => console.log(err))
  }

  static removecliente(req, res) {
    const id = req.body.id

    Cliente.destroy({ where: { id: id } })
      .then(res.redirect('/clientes'))
      .catch((err) => console.log())
  }

  static updatecliente(req, res) {
    const id = req.params.id

    Cliente.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.json(cliente.data)
      })
      .catch((err) => console.log())
  }

  static updateclientePost(req, res) {
    const id = req.body.id

    const cliente = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        senha: req.body.senha
    }

    Cliente.update(cliente, { where: { id: id } })
      .then(res.json(cliente))
      .catch((err) => console.log())
  }


}
