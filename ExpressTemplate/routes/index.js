var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  console.log('Página Index acessada');
});

module.exports = router;
