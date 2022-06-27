const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

// const produto = require('./models/produto')

const clienteRoutes = require('./routes/clientesRoutes')
const produtoRoutes = require('./routes/produtosRoutes')

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/produtos', allowCrossDomain)
app.use('/clientes', allowCrossDomain)
app.use('/clientes', clienteRoutes)
app.use('/produtos', produtoRoutes)


conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))
