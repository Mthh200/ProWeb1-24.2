var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('biblioteca');
  console.log('Página Biblioteca acessada');
});

module.exports = router;
