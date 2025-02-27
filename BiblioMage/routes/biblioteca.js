var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res, next) {
  res.render('biblioteca');
  console.log('Página Biblioteca acessada');
});

router.get('/fetchBooks', async (req, res, next) => {
  const livros = await db.findAll();
  res.json(livros);

});




router.post('/add', async (req, res) => {
  
  const livro = req.body;
  console.log(req.body)

  const result = await db.insert(livro);
  console.log(result);
})

module.exports = router;
