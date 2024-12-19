var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('<h1>About</h1>');
    console.log('Página About acessada');
})

module.exports = router;