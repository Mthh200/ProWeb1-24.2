var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h1>Contact</h1>');
  console.log('Página Contact acessada');
});

module.exports = router;
