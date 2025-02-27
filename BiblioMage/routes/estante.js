var express = require('express');
var router = express.Router();

router.get('/estante', function(req, res, next) {
  res.render('estante');
  console.log('Página Estante acessada');
});

module.exports = router;
