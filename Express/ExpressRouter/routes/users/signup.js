var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<h1>Users - Signup</h1>');
  console.log('Página Users - Signup acessada');
});

module.exports = router;
