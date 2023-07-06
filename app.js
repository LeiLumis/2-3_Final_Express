const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {
  const title = '首頁'
  res.render('index', { title })
})

app.get('/:button', (req, res) => {
  const title = req.params.button
  res.render('index', { title })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})