var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signup');
  console.log('Página Users - Signup acessada');
});

module.exports = router;
