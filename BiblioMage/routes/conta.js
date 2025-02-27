var express = require('express');
var router = express.Router();

router.get('/conta', function(req, res, next) {
  res.render('conta');
  console.log('Página Conta acessada');
});

module.exports = router;
